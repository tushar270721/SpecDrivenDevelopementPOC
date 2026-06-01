/**
 * Backend Server for Test Case Review Portal
 * 
 * Purpose: Handle requests from index.html and execute Azure DevOps integration
 * 
 * Usage:
 *   npm install express
 *   node server.js
 * 
 * Then access: http://localhost:3000/index.html
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.resolve(__dirname)));

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

/**
 * Push test cases to Azure DevOps
 * POST /api/push-test-cases
 * 
 * Body:
 * {
 *   userStoryId: "FE#735316",
 *   testCases: [
 *     {
 *       id: "TC-FE735316-001",
 *       title: "Test case title",
 *       priority: "High",
 *       category: "Functional",
 *       automatable: "Yes"
 *     }
 *   ]
 * }
 */
app.post('/api/push-test-cases', async (req, res) => {
  try {
    const { userStoryId, testCases } = req.body;

    // Validate input
    if (!userStoryId || !Array.isArray(testCases) || testCases.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Missing or invalid userStoryId or testCases',
        message: 'Please provide a valid user story ID and at least one test case'
      });
    }

    console.log(`\n📊 Processing push request...`);
    console.log(`   User Story: ${userStoryId}`);
    console.log(`   Test Cases: ${testCases.length}\n`);

    // Build command to execute push-test-cases.js
    const scriptPath = path.resolve(__dirname, '.github/config/azure-mcp/push-test-cases.js');
    const testCasesJson = JSON.stringify(testCases).replace(/"/g, '\\"');
    
    // Execute the script
    const command = `node "${scriptPath}" --userstory "${userStoryId}" --testcases '${JSON.stringify(testCases)}'`;
    
    console.log('🚀 Executing push script...\n');
    
    try {
      // Execute synchronously to capture output
      const output = execSync(command, {
        encoding: 'utf8',
        cwd: __dirname,
        stdio: 'pipe'
      });

      console.log('Script Output:\n', output);

      // Read results from file (written by push-test-cases.js)
      const resultsPath = path.resolve(__dirname, '.github/analysis/push-test-cases-results.json');
      let results = {};
      
      if (fs.existsSync(resultsPath)) {
        const resultsContent = fs.readFileSync(resultsPath, 'utf8');
        results = JSON.parse(resultsContent);
      }

      res.json({
        success: true,
        message: `Successfully pushed ${testCases.length} test case(s) to Azure DevOps`,
        userStoryId,
        results: results,
        timestamp: new Date().toISOString()
      });
    } catch (execError) {
      console.error('Execution Error:', execError.message);
      
      // Return error but with any partial results
      const resultsPath = path.resolve(__dirname, '.github/analysis/push-test-cases-results.json');
      let results = {};
      
      if (fs.existsSync(resultsPath)) {
        try {
          const resultsContent = fs.readFileSync(resultsPath, 'utf8');
          results = JSON.parse(resultsContent);
        } catch (e) {
          // Ignore JSON parse errors
        }
      }

      res.status(500).json({
        success: false,
        error: 'Failed to push test cases',
        message: execError.message,
        results: results,
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Request Error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

/**
 * Get Azure DevOps configuration status
 */
app.get('/api/config-status', (req, res) => {
  try {
    const envPath = path.resolve(__dirname, '.env');
    const hasEnv = fs.existsSync(envPath);

    let configStatus = {
      envFileExists: hasEnv,
      hasAzdoOrgUrl: false,
      hasAzdoProject: false,
      hasAzdoPat: false,
      timestamp: new Date().toISOString()
    };

    if (hasEnv) {
      const envContent = fs.readFileSync(envPath, 'utf8');
      configStatus.hasAzdoOrgUrl = envContent.includes('AZDO_ORG_URL');
      configStatus.hasAzdoProject = envContent.includes('AZDO_PROJECT_NAME');
      configStatus.hasAzdoPat = envContent.includes('AZDO_PAT');
    }

    res.json({
      success: true,
      config: configStatus,
      message: configStatus.hasAzdoOrgUrl && configStatus.hasAzdoProject && configStatus.hasAzdoPat
        ? 'Azure DevOps is properly configured'
        : 'Azure DevOps configuration incomplete. Please check .env file'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log('\n' + '='.repeat(60));
  console.log('🚀 Test Case Review Portal Server Started');
  console.log('='.repeat(60));
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`📄 Open: http://localhost:${PORT}/index.html`);
  console.log(`🏥 Health: http://localhost:${PORT}/api/health`);
  console.log('='.repeat(60) + '\n');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n\n📴 Server shutting down...');
  process.exit(0);
});
