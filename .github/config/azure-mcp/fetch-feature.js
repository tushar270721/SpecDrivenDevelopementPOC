/**
 * Azure DevOps Feature Fetcher - CLI Script
 * 
 * Purpose: Fetch and display feature details from Azure DevOps
 * Saves complete feature data to JSON and Markdown files for full access
 * 
 * Usage:
 *   node .github/config/azure-mcp/fetch-feature.js 12345       (feature ID only)
 *   node .github/config/azure-mcp/fetch-feature.js FE#12345     (full format)
 */

const config = require('./mcp-config.js');
const fs = require('fs');
const path = require('path');

/**
 * Save complete feature data to JSON file
 */
function saveFeatureJson(featureId, feature, comments) {
  try {
    const analyticsDir = path.join(__dirname, '../../analysis');
    if (!fs.existsSync(analyticsDir)) {
      fs.mkdirSync(analyticsDir, { recursive: true });
    }
    
    const filename = path.join(analyticsDir, `${featureId.replace('#', '')}-feature-data.json`);
    const data = {
      feature,
      comments,
      fetchedAt: new Date().toISOString(),
    };
    
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    return filename;
  } catch (error) {
    console.error(`⚠️  Could not save JSON file:`, error.message);
    return null;
  }
}

/**
 * Save complete feature report to Markdown file
 */
function saveFeatureMarkdown(featureId, feature, comments) {
  try {
    const analyticsDir = path.join(__dirname, '../../analysis');
    if (!fs.existsSync(analyticsDir)) {
      fs.mkdirSync(analyticsDir, { recursive: true });
    }
    
    const filename = path.join(analyticsDir, `${featureId.replace('#', '')}-feature-report.md`);
    
    let markdown = `# Feature Report: ${featureId}\n\n`;
    markdown += `**Generated:** ${new Date().toLocaleString()}\n\n`;
    
    markdown += `## Metadata\n\n`;
    markdown += `| Property | Value |\n`;
    markdown += `|---|---|\n`;
    markdown += `| ID | ${feature.id} |\n`;
    markdown += `| Title | ${feature.title} |\n`;
    markdown += `| State | ${feature.state} |\n`;
    markdown += `| Priority | ${feature.priority} |\n`;
    markdown += `| Type | ${feature.type} |\n`;
    markdown += `| Assigned To | ${feature.assignedTo} |\n`;
    markdown += `| Created | ${new Date(feature.createdDate).toLocaleString()} |\n`;
    markdown += `| Updated | ${new Date(feature.updatedDate).toLocaleString()} |\n`;
    markdown += `| URL | ${feature.url} |\n\n`;
    
    markdown += `## Description\n\n`;
    const description = config.stripHtmlTags(feature.description);
    markdown += `${description}\n\n`;
    
    markdown += `## Acceptance Criteria\n\n`;
    const acceptanceCriteria = config.stripHtmlTags(feature.acceptanceCriteria);
    markdown += `${acceptanceCriteria}\n\n`;
    
    if (comments.length > 0) {
      markdown += `## Comments (${comments.length})\n\n`;
      comments.forEach((comment, index) => {
        markdown += `### Comment ${index + 1}\n`;
        markdown += `**By:** ${comment.createdBy}\n`;
        markdown += `**Date:** ${new Date(comment.createdDate).toLocaleString()}\n\n`;
        const commentText = config.stripHtmlTags(comment.text);
        markdown += `${commentText}\n\n`;
      });
    }
    
    fs.writeFileSync(filename, markdown);
    return filename;
  } catch (error) {
    console.error(`⚠️  Could not save Markdown file:`, error.message);
    return null;
  }
}


/**
 * Fetch and display feature details
 * @param {string} featureId - Feature ID (accepts "12345" or "FE#12345")
 */
async function fetchAndDisplayFeature(featureId) {
  try {
    // Normalize feature ID: accept both "816692" and "FE#816692"
    let normalizedId = featureId.trim();
    
    // If it's just a number, prepend "FE#"
    if (normalizedId.match(/^\d+$/)) {
      normalizedId = `FE#${normalizedId}`;
    }
    
    console.log(`\n🔄 Fetching feature ${normalizedId}...\n`);

    // Validate input format
    if (!normalizedId || !normalizedId.match(/^[A-Z]+#\d+$/)) {
      throw new Error(
        `Invalid feature ID format. Expected: 816692 or FE#816692, Got: ${featureId}`
      );
    }
    
    featureId = normalizedId;

    // Fetch data from Azure DevOps
    const feature = await config.fetchFeature(featureId);
    const comments = await config.getTextComments(featureId);

    // Display results
    console.log('╔════════════════════════════════════════════╗');
    console.log(`║         FEATURE ${featureId} DETAILS          ║`);
    console.log('╚════════════════════════════════════════════╝\n');

    // === METADATA ===
    console.log('📌 METADATA');
    console.log('─'.repeat(50));
    console.log('ID:        ' + feature.id);
    console.log('Title:     ' + feature.title);
    console.log('State:     ' + feature.state);
    console.log('Priority:  ' + feature.priority);
    console.log('Type:      ' + feature.type);
    console.log('Assigned:  ' + feature.assignedTo);
    console.log('Created:   ' + new Date(feature.createdDate).toLocaleDateString());
    console.log('Updated:   ' + new Date(feature.updatedDate).toLocaleDateString());

    // === DESCRIPTION ===
    console.log('\n📝 DESCRIPTION');
    console.log('─'.repeat(50));
    const description = config.stripHtmlTags(feature.description);
    console.log(description);

    // === ACCEPTANCE CRITERIA ===
    console.log('\n✅ ACCEPTANCE CRITERIA');
    console.log('─'.repeat(50));
    const acceptanceCriteria = config.stripHtmlTags(feature.acceptanceCriteria);
    console.log(acceptanceCriteria);

    // === COMMENTS ===
    console.log('\n💬 COMMENTS (' + comments.length + ')');
    console.log('─'.repeat(50));
    if (comments.length > 0) {
      comments.forEach((comment, index) => {
        console.log('\n' + (index + 1) + '. ' + comment.createdBy);
        console.log('   Date: ' + new Date(comment.createdDate).toLocaleDateString());
        const commentText = config.stripHtmlTags(comment.text);
        console.log('   ' + commentText);
      });
    } else {
      console.log('No comments');
    }

    console.log('\n✅ Feature fetched successfully!\n');
    
    // Save complete feature data to files
    const jsonFile = saveFeatureJson(featureId, feature, comments);
    const mdFile = saveFeatureMarkdown(featureId, feature, comments);
    
    // Display file paths
    console.log('📁 Complete Feature Data Saved:');
    if (jsonFile) {
      console.log(`   JSON: ${jsonFile}`);
    }
    if (mdFile) {
      console.log(`   Markdown: ${mdFile}`);
    }
    console.log();
    
    return feature;

  } catch (error) {
    console.error('\n❌ ERROR:', error.message);
    process.exit(1);
  }
}

// Get feature ID from command line arguments
let featureId = process.argv[2];

// Validate that feature ID was provided
if (!featureId) {
  console.error('\n❌ ERROR: Feature ID is required\n');
  console.log('Usage:');
  console.log('  node .github/config/azure-mcp/fetch-feature.js 12345        (ID only)');
  console.log('  node .github/config/azure-mcp/fetch-feature.js FE#12345     (full format)\n');
  console.log('Examples:');
  console.log('  node .github/config/azure-mcp/fetch-feature.js 816692');
  console.log('  node .github/config/azure-mcp/fetch-feature.js FE#816692');
  console.log('  node .github/config/azure-mcp/fetch-feature.js 771742\n');
  process.exit(1);
}

fetchAndDisplayFeature(featureId);
