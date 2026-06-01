/**
 * Test Case Review Portal - Unified Backend Server
 * 
 * Purpose: Express.js backend server + Azure DevOps integration in one file
 * Uses mcp-config.js for Azure DevOps configuration
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
const config = require('./.github/config/azure-mcp/mcp-config.js');

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
 * Create a work item (test case) in Azure DevOps
 */
async function createTestCaseWorkItem(testCase) {
  try {
    const url = `${config.azureDevOps.orgUrl}/${encodeURIComponent(config.azureDevOps.project)}/_apis/wit/workitems/${"Test Case"}?api-version=${config.azureDevOps.apiVersion}`;

    const body = [
      {
        op: "add",
        path: "/fields/System.Title",
        value: testCase.title
      },
      {
        op: "add",
        path: "/fields/System.Description",
        value: testCase.description || testCase.title
      },
      {
        op: "add",
        path: "/fields/Microsoft.VSTS.Common.Priority",
        value: testCase.priority === 'High' ? 1 : testCase.priority === 'Medium' ? 2 : 3
      },
      {
        op: "add",
        path: "/fields/System.State",
        value: "Ready"
      },
      {
        op: "add",
        path: "/fields/Microsoft.VSTS.TCM.AutomatedTestName",
        value: testCase.id
      },
      {
        op: "add",
        path: "/fields/Microsoft.VSTS.TCM.AutomationStatus",
        value: testCase.automatable === 'Yes' ? 'Automated' : 'Manual'
      }
    ];

    // Add custom fields if they exist
    if (testCase.category) {
      body.push({
        op: "add",
        path: "/fields/System.Tags",
        value: testCase.category
      });
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...config.getAuthHeader(),
        'Content-Type': 'application/json-patch+json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create work item: ${response.status} ${errorText}`);
    }

    const workItem = await response.json();
    return workItem;
  } catch (error) {
    console.error(`❌ Error creating test case work item: ${error.message}`);
    throw error;
  }
}

/**
 * Link a work item as a child of another work item
 */
async function linkWorkItems(parentId, childId, linkType = 'System.LinkTypes.Hierarchy-Forward') {
  try {
    const url = `${config.azureDevOps.orgUrl}/${encodeURIComponent(config.azureDevOps.project)}/_apis/wit/workitems/${parentId}/relations?api-version=${config.azureDevOps.apiVersion}`;

    const body = {
      rel: linkType,
      url: `${config.azureDevOps.orgUrl}/${encodeURIComponent(config.azureDevOps.project)}/_apis/wit/workitems/${childId}`
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: config.getAuthHeader(),
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to link work items: ${response.status} ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`❌ Error linking work items: ${error.message}`);
    throw error;
  }
}

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

    // Parse user story ID
    const storyIdMatch = userStoryId.match(/#?(\d+)/);
    if (!storyIdMatch) {
      return res.status(400).json({
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
        const workItem = await createTestCaseWorkItem(testCase);
        results.successful.push({
          testCaseId: testCase.id,
          workItemId: workItem.id,
          title: testCase.title
        });
        console.log(`✅ Created work item #${workItem.id}\n`);

        // Link to parent user story
        try {
          console.log(`🔗 Linking ${testCase.id} to User Story ${parentWorkItemId}`);
          await linkWorkItems(parentWorkItemId, workItem.id);
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
    res.json({
      success: results.failed.length === 0,
      message: `Successfully pushed ${results.successful.length} test case(s) to Azure DevOps`,
      userStoryId,
      results: results,
      timestamp: new Date().toISOString()
    });

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
