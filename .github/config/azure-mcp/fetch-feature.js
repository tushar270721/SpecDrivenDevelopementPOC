/**
 * Azure DevOps Feature Fetcher - CLI Script
 * 
 * Purpose: Fetch and display feature details from Azure DevOps
 * 
 * Usage:
 *   node .github/config/azure-mcp/fetch-feature.js 12345       (feature ID only)
 *   node .github/config/azure-mcp/fetch-feature.js AB#12345     (full format)
 */

const config = require('./mcp-config.js');

/**
 * Fetch and display feature details
 * @param {string} featureId - Feature ID (accepts "12345" or "AB#12345")
 */
async function fetchAndDisplayFeature(featureId) {
  try {
    // Normalize feature ID: accept both "816692" and "AB#816692"
    let normalizedId = featureId.trim();
    
    // If it's just a number, prepend "AB#"
    if (normalizedId.match(/^\d+$/)) {
      normalizedId = `AB#${normalizedId}`;
    }
    
    console.log(`\n🔄 Fetching feature ${normalizedId}...\n`);

    // Validate input format
    if (!normalizedId || !normalizedId.match(/^[A-Z]+#\d+$/)) {
      throw new Error(
        `Invalid feature ID format. Expected: 816692 or AB#816692, Got: ${featureId}`
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
  console.log('  node .github/config/azure-mcp/fetch-feature.js AB#12345     (full format)\n');
  console.log('Examples:');
  console.log('  node .github/config/azure-mcp/fetch-feature.js 816692');
  console.log('  node .github/config/azure-mcp/fetch-feature.js AB#816692');
  console.log('  node .github/config/azure-mcp/fetch-feature.js 771742\n');
  process.exit(1);
}

fetchAndDisplayFeature(featureId);
