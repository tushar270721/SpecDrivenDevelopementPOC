#!/usr/bin/env node
/**
 * Test Azure DevOps MCP Connection
 * 
 * Usage: node .github/test-azure-connection.js
 * 
 * This script validates that your Azure DevOps configuration is correct
 * and can successfully connect to fetch feature data.
 */

const config = require('./mcp-config');

async function runTest() {
  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('🔍 Azure DevOps MCP Connection Test');
  console.log('═══════════════════════════════════════════════════════════\n');

  try {
    // Test 1: Health Check
    console.log('Test 1: Health Check');
    console.log('─────────────────────────────────────────────────────────');
    const health = await config.healthCheck();
    console.log(`Status: ${health.message}`);
    console.log(`Organization: ${health.org}`);
    console.log(`Project: ${health.project}\n`);

    if (health.status !== 'healthy') {
      throw new Error('Azure DevOps connection failed');
    }

    // Test 2: Fetch a Sample Feature
    console.log('Test 2: Fetch Sample Feature');
    console.log('─────────────────────────────────────────────────────────');
    console.log('Note: Update FEATURE_ID in this script with an actual Azure DevOps work item ID\n');

    // CHANGE THIS to a real feature ID from your Azure DevOps
    const FEATURE_ID = 'AB#1';
    
    console.log(`Attempting to fetch feature: ${FEATURE_ID}`);
    console.log('(This will fail if the feature ID does not exist)\n');

    try {
      const feature = await config.fetchFeature(FEATURE_ID);
      console.log('✅ Successfully fetched feature:');
      console.log(`   ID: ${feature.id}`);
      console.log(`   Title: ${feature.title}`);
      console.log(`   Type: ${feature.type}`);
      console.log(`   State: ${feature.state}`);
      console.log(`   Priority: ${feature.priority}`);
      console.log(`   Assigned To: ${feature.assignedTo}`);
      
      if (feature.acceptanceCriteria) {
        console.log(`   Acceptance Criteria: ${feature.acceptanceCriteria.substring(0, 100)}...`);
      }

    } catch (error) {
      if (error.message.includes('404')) {
        console.log('⚠️  Feature not found (AB#1 may not exist in your project)');
        console.log('   This is expected if you haven\'t created work items yet.');
        console.log('   Connection to Azure DevOps is working!\n');
      } else {
        throw error;
      }
    }

    // Test 3: Configuration Summary
    console.log('\nTest 3: Configuration Summary');
    console.log('─────────────────────────────────────────────────────────');
    console.log(`Organization: ${config.azureDevOps.orgUrl}`);
    console.log(`Project: ${config.azureDevOps.project}`);
    console.log(`PAT Configured: ${config.azureDevOps.pat ? '✅ Yes' : '❌ No'}`);
    console.log(`API Version: ${config.azureDevOps.apiVersion}\n`);

    // Success Message
    console.log('═══════════════════════════════════════════════════════════');
    console.log('✅ Azure DevOps MCP is ready to use!');
    console.log('═══════════════════════════════════════════════════════════\n');

    console.log('Next Steps:');
    console.log('1. Update .github/skills/fetch-feature-from-azure/SKILL.md');
    console.log('2. Implement the skill to use config.fetchFeature()');
    console.log('3. Test with: "Fetch feature AB#<your_feature_id>"\n');

  } catch (error) {
    console.error('\n❌ Connection Test Failed\n');
    console.error('Error:', error.message);
    console.error('\n═══════════════════════════════════════════════════════════');
    console.error('Troubleshooting Guide');
    console.error('═══════════════════════════════════════════════════════════\n');

    if (error.message.includes('AZDO_PAT')) {
      console.error('✓ Missing AZDO_PAT in .env file');
      console.error('  1. Copy .env.example to .env');
      console.error('  2. Add your Personal Access Token to AZDO_PAT');
      console.error('  3. Run: node .github/test-azure-connection.js\n');
    }

    if (error.message.includes('401')) {
      console.error('✓ Invalid Personal Access Token');
      console.error('  1. Go to: https://dev.azure.com/enablon/_usersSettings/tokens');
      console.error('  2. Create a new token with "Work Items" (Read & Write) scope');
      console.error('  3. Copy the token to .env as AZDO_PAT\n');
    }

    if (error.message.includes('404')) {
      console.error('✓ Organization or Project not found');
      console.error(`  Expected: ${config.azureDevOps.orgUrl}`);
      console.error(`  Project: ${config.azureDevOps.project}`);
      console.error('  Verify these values in .env\n');
    }

    console.error('═══════════════════════════════════════════════════════════\n');
    process.exit(1);
  }
}

runTest();
