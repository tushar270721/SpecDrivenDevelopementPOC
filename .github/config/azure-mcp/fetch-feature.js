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
 * Convert HTML content to Markdown while preserving structure
 */
function htmlToMarkdown(html) {
  if (!html) return '';
  
  let markdown = html
    // Convert headings
    .replace(/<h1[^>]*>([^<]*)<\/h1>/gi, '# $1\n\n')
    .replace(/<h2[^>]*>([^<]*)<\/h2>/gi, '## $1\n\n')
    .replace(/<h3[^>]*>([^<]*)<\/h3>/gi, '### $1\n\n')
    .replace(/<h4[^>]*>([^<]*)<\/h4>/gi, '#### $1\n\n')
    
    // Convert bold
    .replace(/<b>([^<]*)<\/b>/gi, '**$1**')
    .replace(/<strong>([^<]*)<\/strong>/gi, '**$1**')
    
    // Convert italic
    .replace(/<i>([^<]*)<\/i>/gi, '*$1*')
    .replace(/<em>([^<]*)<\/em>/gi, '*$1*')
    
    // Convert lists - start
    .replace(/<ul[^>]*>/gi, '')
    .replace(/<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>/gi, '')
    .replace(/<\/ol>/gi, '\n')
    
    // Convert list items
    .replace(/<li[^>]*>([^<]*)<\/li>/gi, '- $1\n')
    
    // Convert horizontal rules
    .replace(/<hr[^>]*>\n?/gi, '\n')
    .replace(/<hr\/>\n?/gi, '\n')
    
    // Convert line breaks
    .replace(/<br[^>]*>/gi, '\n')
    .replace(/<br\/>/gi, '\n')
    
    // Convert paragraphs
    .replace(/<p[^>]*>([^<]*)<\/p>/gi, '$1\n\n')
    
    // Remove any remaining HTML tags
    .replace(/<[^>]*>/g, '')
    
    // Decode HTML entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&bull;/g, '•')
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&#8209;/g, '‑')  // Non-breaking hyphen
    
    // Clean up excess whitespace
    .replace(/\n\n\n+/g, '\n\n')
    .replace(/\s+\n/g, '\n')
    .trim();
  
  return markdown;
}

/**
 * Simple text formatter for fallback - preserves content as-is with paragraph spacing
 */
function formatContent(text) {
  if (!text) return '';
  
  // Split into paragraphs, preserve all content
  const paragraphs = text.split(/\n\n+/).map(p => p.trim()).filter(p => p.length > 0);
  return paragraphs.join('\n\n');
}

/**
 * Parse and structure description with proper section detection
 */
function parseDescription(text) {
  if (!text) return '';
  
  // Clean and prepare text
  let content = text.trim();
  
  // Split by section headers (e.g., "## Description", "### Problem Statement", etc.)
  const sections = [];
  
  // Pattern: line that looks like a section header
  const lines = content.split('\n');
  let currentSection = null;
  let currentContent = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check if this is a section header
    const isSectionHeader = 
      line.match(/^(###|##|####)\s+/) ||  // Markdown headers
      line.match(/^(User Story|As a|Description|Problem Statement|Scope|Business Value|User Value|Validation Rules)/) ||
      line.match(/^\d+\.\s+[A-Z].*$/);  // Numbered sections like "1. Add Safeguard..."
    
    if (isSectionHeader && currentContent.length > 0) {
      // Save previous section
      if (currentSection) {
        sections.push({
          title: currentSection,
          content: currentContent.join('\n').trim()
        });
      }
      currentSection = line;
      currentContent = [];
    } else if (isSectionHeader && !currentSection) {
      currentSection = line;
      currentContent = [];
    } else if (currentSection && line.length > 0) {
      currentContent.push(line);
    } else if (!currentSection && line.length > 0) {
      // Initial content before any section header - treat as "User Story"
      if (!sections.some(s => s.title === 'User Story')) {
        currentSection = 'User Story';
        currentContent.push(line);
      }
    }
  }
  
  // Add last section
  if (currentSection && currentContent.length > 0) {
    sections.push({
      title: currentSection,
      content: currentContent.join('\n').trim()
    });
  }
  
  // Format sections as markdown
  const markdown = sections.map(section => {
    let title = section.title
      .replace(/^#+\s+/, '')  // Remove markdown headers
      .replace(/^\d+\.\s+/, '');  // Remove numbering
    
    const cleanTitle = title.trim();
    if (!cleanTitle) return '';
    
    let output = `### ${cleanTitle}\n\n`;
    let content = section.content;
    
    // Handle numbered items in Scope
    if (cleanTitle.toLowerCase().includes('scope')) {
      // Convert numbered items to proper markdown
      const items = content.split(/\n(?=\d+\.)/);
      output += items
        .map(item => {
          const cleaned = item
            .replace(/^\d+\.\s*['"]?/, '')  // Remove numbering
            .replace(/['"]$/, '');  // Remove trailing quotes
          
          // Split by line breaks and format
          const lines = cleaned.split('\n').map(l => l.trim());
          
          // First line is the item title
          let result = '';
          if (lines.length > 0) {
            result += `- **${lines[0]}**\n`;
            // Rest are sub-items
            for (let i = 1; i < lines.length; i++) {
              const subLine = lines[i];
              if (subLine.startsWith('-') || subLine.startsWith('•')) {
                result += `  ${subLine}\n`;
              } else if (subLine.length > 0) {
                result += `  - ${subLine}\n`;
              }
            }
          }
          return result;
        })
        .join('\n');
    } else {
      // For other sections, format as structured content
      // Bold key phrases
      let formatted = content
        .replace(/\*\*(.+?)\*\*/g, '**$1**')  // Keep existing bold
        .replace(/\*As a\*\*(.+?)\*\*/, '**As a**$1')
        .replace(/I want to /gi, '**I want to** ')
        .replace(/so that /gi, '**so that** ');
      
      // Check if content has bullet points
      if (formatted.includes('-') || formatted.includes('•')) {
        const items = formatted.split(/\n(?=[-•])/);
        output += items
          .map(item => item.trim())
          .filter(item => item.length > 0)
          .map(item => item.startsWith('-') || item.startsWith('•') ? item : `- ${item}`)
          .join('\n');
      } else {
        // Format as paragraphs with proper spacing
        const paragraphs = formatted.split(/\n\n+/);
        output += paragraphs
          .map(p => p.trim())
          .filter(p => p.length > 0)
          .join('\n\n');
      }
    }
    
    return output;
  }).filter(s => s.length > 0).join('\n\n');
  
  return markdown || formatContent(content);
}

/**
 * Parse and structure acceptance criteria into sections with bullet points
 */
function parseAcceptanceCriteria(text) {
  if (!text) return '';
  
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const sections = [];
  let currentSection = null;
  let currentItems = [];
  
  for (const line of lines) {
    // Check if this is a section header
    const isSectionHeader = 
      line.match(/^(###|##)\s+/) ||  // Markdown headers
      (line.match(/^[A-Z][\w\s&/-]*$/) && line.length < 80 && !line.includes('.'));  // Single line, all caps or title case
    
    if (isSectionHeader && currentSection) {
      // Save previous section
      sections.push({
        title: currentSection,
        items: currentItems
      });
      currentSection = line.replace(/^#+\s+/, '');
      currentItems = [];
    } else if (isSectionHeader && !currentSection) {
      currentSection = line.replace(/^#+\s+/, '');
      currentItems = [];
    } else if (currentSection) {
      // This is content under the current section
      if (line.startsWith('-') || line.startsWith('•')) {
        currentItems.push(line.replace(/^[-•]\s*/, ''));
      } else if (line.length > 0) {
        currentItems.push(line);
      }
    }
  }
  
  // Add last section
  if (currentSection && currentItems.length > 0) {
    sections.push({
      title: currentSection,
      items: currentItems
    });
  }
  
  // Format as markdown
  const markdown = sections.map(section => {
    let output = `### ${section.title.trim()}\n\n`;
    
    output += section.items
      .map(item => {
        const cleaned = item.trim();
        if (cleaned.length === 0) return '';
        
        // Bold key phrases in items
        let formatted = cleaned
          .replace(/\*\*(.+?)\*\*/g, '**$1**')  // Keep existing bold
          .replace(/\b(Only|enabled|disabled|display|visible|hidden)\b/gi, '**$1**');
        
        return `- ${formatted}`;
      })
      .filter(item => item.length > 2)
      .join('\n');
    
    return output;
  }).filter(s => s.length > 10).join('\n\n');
  
  return markdown || formatContent(text);
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
    const description = htmlToMarkdown(feature.description);
    markdown += `${parseDescription(description)}\n\n`;
    
    markdown += `## Acceptance Criteria\n\n`;
    const acceptanceCriteria = htmlToMarkdown(feature.acceptanceCriteria);
    markdown += `${parseAcceptanceCriteria(acceptanceCriteria)}\n\n`;
    
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
