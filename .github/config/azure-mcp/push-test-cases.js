/**
 * Azure DevOps Test Cases Pusher - CLI Script
 * 
 * Purpose: Push approved test cases to Azure DevOps and link them as child items under a user story
 * 
 * Usage:
 *   node .github/config/azure-mcp/push-test-cases.js --userstory FE#735316 --testcases "[TC data]"
 */

const config = require('./mcp-config.js');
const fs = require('fs');
const path = require('path');

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
 */
async function pushTestCasesToAzure(userStoryId, testCases) {
  try {
    console.log('🚀 Starting push to Azure DevOps...\n');
    console.log(`📌 User Story: ${userStoryId}`);
    console.log(`📊 Test Cases: ${testCases.length}\n`);

    // Parse user story ID
    const storyIdMatch = userStoryId.match(/#?(\d+)/);
    if (!storyIdMatch) {
      throw new Error(`Invalid user story ID format. Expected: FE#735316 or 735316. Got: ${userStoryId}`);
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

    console.log('\n💾 Results saved to: .github/analysis/push-test-cases-results.json');
    
    // Save results to file
    const resultsPath = path.resolve(__dirname, '../../../.github/analysis/push-test-cases-results.json');
    fs.mkdirSync(path.dirname(resultsPath), { recursive: true });
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));

    return results;
  } catch (error) {
    console.error(`\n❌ FATAL ERROR: ${error.message}`);
    process.exit(1);
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const params = {
    userStoryId: null,
    testCases: []
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--userstory' && args[i + 1]) {
      params.userStoryId = args[i + 1];
      i++;
    } else if (args[i] === '--testcases' && args[i + 1]) {
      try {
        params.testCases = JSON.parse(args[i + 1]);
      } catch (e) {
        console.error('Invalid JSON for --testcases');
        process.exit(1);
      }
      i++;
    }
  }

  return params;
}

// Main execution
if (require.main === module) {
  const params = parseArgs();

  if (!params.userStoryId || params.testCases.length === 0) {
    console.error('Usage: node push-test-cases.js --userstory FE#735316 --testcases \'[{...}]\'');
    process.exit(1);
  }

  pushTestCasesToAzure(params.userStoryId, params.testCases)
    .then(() => {
      console.log('\n✅ Push operation completed successfully!');
      process.exit(0);
    })
    .catch(error => {
      console.error('\n❌ Push operation failed:', error.message);
      process.exit(1);
    });
}

module.exports = { pushTestCasesToAzure, createTestCaseWorkItem, linkWorkItems };
