/**
 * Test Case Review Portal - Backend Server
 * 
 * Purpose: Minimal HTTP server for serving static portal + API routing
 * Uses Node.js built-in http module (NO external dependencies)
 * Uses mcp-config.js for all Azure DevOps business logic
 * 
 * Usage:
 *   node server.js
 * 
 * Then access: http://localhost:3000/index.html
 */

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const config = require('./.github/config/azure-mcp/mcp-config.js');

const PORT = process.env.PORT || 3000;

/**
 * Parse JSON from request body
 */
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
  });
}

/**
 * Send JSON response
 */
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

/**
 * Serve static file
 */
function serveFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }
    
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml'
    };
    
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

/**
 * Create HTTP server
 */
const server = http.createServer(async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // API Routes
  if (pathname === '/api/health' && req.method === 'GET') {
    sendJson(res, 200, { status: 'Server is running', timestamp: new Date().toISOString() });
    return;
  }

/**
 * Push test cases to Azure DevOps
 * POST /api/push-test-cases
 */
  if (pathname === '/api/push-test-cases' && req.method === 'POST') {
    try {
      const { userStoryId, testCases } = await parseJsonBody(req);

      // Validate input
      if (!userStoryId || !Array.isArray(testCases) || testCases.length === 0) {
        return sendJson(res, 400, {
          success: false,
          error: 'Missing or invalid userStoryId or testCases',
          message: 'Please provide a valid user story ID and at least one test case'
        });
      }

      console.log(`\n📊 Processing push request...`);
      console.log(`   User Story: ${userStoryId}`);
      console.log(`   Test Cases: ${testCases.length}\n`);

      // Parse user story ID
      const storyIdMatch = userStoryId.match(/#?(\d+)/);
      if (!storyIdMatch) {
        return sendJson(res, 400, {
          success: false,
          error: 'Invalid user story ID format',
          message: `Expected format: FE#735316 or 735316. Got: ${userStoryId}`
        });
      }
      const parentWorkItemId = parseInt(storyIdMatch[1]);

      const results = {
        successful: [],
        failed: [],
        linked: [],
        linkFailed: []
      };

      // Create work item for each test case
      for (const testCase of testCases) {
        try {
          console.log(`📝 Creating work item for ${testCase.id}: ${testCase.title}`);
          const workItem = await config.createTestCaseWorkItem(testCase);
          results.successful.push({
            testCaseId: testCase.id,
            workItemId: workItem.id,
            title: testCase.title
          });
          console.log(`✅ Created work item #${workItem.id}\n`);

          // Link to parent user story
          try {
            console.log(`🔗 Linking ${testCase.id} to User Story ${parentWorkItemId}`);
            await config.linkWorkItems(parentWorkItemId, workItem.id);
            results.linked.push({
              testCaseId: testCase.id,
              parentId: parentWorkItemId,
              childId: workItem.id
            });
            console.log(`✅ Successfully linked\n`);
          } catch (linkError) {
            console.error(`⚠️ Warning: Could not link work items: ${linkError.message}\n`);
            results.linkFailed.push({
              testCaseId: testCase.id,
              parentId: parentWorkItemId,
              childId: workItem.id,
              error: linkError.message
            });
          }
        } catch (error) {
          console.error(`❌ Failed to process ${testCase.id}: ${error.message}\n`);
          results.failed.push({
            testCaseId: testCase.id,
            title: testCase.title,
            error: error.message
          });
        }
      }

      // Print summary
      console.log('\n' + '='.repeat(60));
      console.log('📊 PUSH SUMMARY');
      console.log('='.repeat(60));
      console.log(`✅ Successful: ${results.successful.length}/${testCases.length}`);
      console.log(`🔗 Linked: ${results.linked.length}/${testCases.length}`);
      console.log(`⚠️  Link Warnings: ${results.linkFailed.length}`);
      console.log(`❌ Failed: ${results.failed.length}/${testCases.length}`);

      if (results.successful.length > 0) {
        console.log('\n✅ Successfully Created Work Items:');
        results.successful.forEach(item => {
          console.log(`   - #${item.workItemId}: ${item.testCaseId} - ${item.title}`);
        });
      }

      if (results.failed.length > 0) {
        console.log('\n❌ Failed Work Items:');
        results.failed.forEach(item => {
          console.log(`   - ${item.testCaseId}: ${item.error}`);
        });
      }

      // Save results to file
      const resultsPath = path.resolve(__dirname, '.github/analysis/push-test-cases-results.json');
      fs.mkdirSync(path.dirname(resultsPath), { recursive: true });
      fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
      console.log('\n💾 Results saved to: .github/analysis/push-test-cases-results.json\n');

      // Return response
      sendJson(res, 200, {
        success: results.failed.length === 0,
        message: `Successfully pushed ${results.successful.length} test case(s) to Azure DevOps`,
        userStoryId,
        results: results,
        timestamp: new Date().toISOString()
      });

    } catch (error) {
      console.error('Request Error:', error);
      sendJson(res, 500, {
        success: false,
        error: 'Internal server error',
        message: error.message,
        timestamp: new Date().toISOString()
      });
    }
    return;
  }

/**
 * Get Azure DevOps configuration status
 */
  if (pathname === '/api/config-status' && req.method === 'GET') {
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

      sendJson(res, 200, {
        success: true,
        config: configStatus,
        message: configStatus.hasAzdoOrgUrl && configStatus.hasAzdoProject && configStatus.hasAzdoPat
          ? 'Azure DevOps is properly configured'
          : 'Azure DevOps configuration incomplete. Please check .env file'
      });
    } catch (error) {
      sendJson(res, 500, {
        success: false,
        error: error.message
      });
    }
    return;
  }

  // Static file serving
  if (pathname === '/' || pathname === '') {
    serveFile(res, path.join(__dirname, 'index.html'));
  } else if (pathname.startsWith('/')) {
    const filePath = path.join(__dirname, pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(res, filePath);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

/**
 * Start server
 */
server.listen(PORT, () => {
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
