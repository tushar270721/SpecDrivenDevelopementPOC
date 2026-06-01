/**
 * Azure DevOps MCP Configuration - Simple & Minimal
 * Used by fetch-feature-from-azure SKILL.md
 * 
 * Purpose: Connect to Azure DevOps and fetch feature requirements
 */

// Load .env file manually (no external dependencies)
const fs = require('fs');
const path = require('path');

function loadEnvFile() {
  try {
    // Look for .env at project root (../../ from .github/config/azure-mcp/)
    // .github/config/azure-mcp/ -> .github/config/ (../../) -> .github/ (../) -> root (.)
    const envPath = path.resolve(__dirname, '../../../.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split('\n');
      
      lines.forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const [key, ...valueParts] = trimmed.split('=');
          const value = valueParts.join('=').trim();
          if (key && value) {
            process.env[key.trim()] = value;
          }
        }
      });
    }
  } catch (error) {
    // Silently fail if .env doesn't exist or can't be read
  }
}

loadEnvFile();

const config = {
  // Azure DevOps Connection Settings
  azureDevOps: {
    orgUrl: process.env.AZDO_ORG_URL || 'https://dev.azure.com/enablon',
    project: process.env.AZDO_PROJECT_NAME || 'ART - New SaaS',
    pat: process.env.AZDO_PAT,
    apiVersion: '7.0',
  },

  /**
   * Generate Azure DevOps Basic Auth Header
   */
  getAuthHeader() {
    if (!this.azureDevOps.pat) {
      throw new Error('❌ AZDO_PAT not configured. Add AZDO_PAT to .env file');
    }
    const credentials = Buffer.from(`:${this.azureDevOps.pat}`).toString('base64');
    return {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json',
    };
  },

  /**
   * Fetch feature/work item from Azure DevOps
   * 
   * @param {string} featureId - Feature ID (e.g., "FE#12345")
   * @returns {object} Feature details
   * 
   * Example:
   *   const feature = await config.fetchFeature('FE#12345');
   *   // Returns:
   *   // {
   *   //   id: 12345,
   *   //   title: "User Login",
   *   //   description: "...",
   *   //   acceptanceCriteria: "...",
   *   //   priority: 1,
   *   //   state: "Active",
   *   //   type: "User Story"
   *   // }
   */
  async fetchFeature(featureId) {
    try {
      // Parse feature ID (FE#12345 -> 12345)
      const workItemId = featureId.split('#')[1];
      if (!workItemId) {
        throw new Error(`Invalid feature ID format. Expected: PROJECT#NUMBER (e.g., FE#12345). Got: ${featureId}`);
      }

      // Build API URL
      const url = `${this.azureDevOps.orgUrl}/${encodeURIComponent(this.azureDevOps.project)}/_apis/wit/workitems/${workItemId}?api-version=${this.azureDevOps.apiVersion}`;

      console.log(`📡 Fetching feature ${featureId} from Azure DevOps...`);

      // Make API request
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getAuthHeader(),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Azure DevOps API Error (${response.status}): ${error}`);
      }

      const data = await response.json();

      // CRITICAL: Verify the returned work item ID matches requested ID
      const returnedId = data.id;
      if (returnedId.toString() !== workItemId) {
        throw new Error(`❌ CRITICAL DATA MISMATCH: Requested ${featureId} (ID: ${workItemId}) but Azure returned work item ${returnedId}. This indicates a serious issue with the API or caching.`);
      }

      // Extract key fields
      const feature = {
        id: data.id,
        url: data.url,
        title: data.fields['System.Title'] || 'N/A',
        description: data.fields['System.Description'] || '',
        acceptanceCriteria: data.fields['Microsoft.VSTS.Common.AcceptanceCriteria'] || '',
        priority: data.fields['Microsoft.VSTS.Common.Priority'] || 0,
        state: data.fields['System.State'] || 'New',
        type: data.fields['System.WorkItemType'] || 'User Story',
        assignedTo: data.fields['System.AssignedTo']?.displayName || 'Unassigned',
        createdDate: data.fields['System.CreatedDate'],
        updatedDate: data.fields['System.ChangedDate'],
      };

      // Validate critical fields
      if (!feature.title || feature.title === 'N/A') {
        throw new Error(`❌ VALIDATION ERROR: Feature ${featureId} has no title. Data may be incomplete.`);
      }

      // Log successful fetch with verification
      console.log(`✅ Feature ${featureId} fetched successfully`);
      console.log(`   ID: ${feature.id}`);
      console.log(`   Title: ${feature.title}`);
      console.log(`   Assigned To: ${feature.assignedTo}`);
      console.log(`   State: ${feature.state}`);

      return feature;

    } catch (error) {
      console.error(`❌ Error fetching feature ${featureId}:`, error.message);
      throw error;
    }
  },

  /**
   * Fetch comments for a feature/work item
   * @param {string} featureId - Feature ID (e.g., "FE#12345")
   * @returns {array} Array of comments
   */
  async getComments(featureId) {
    try {
      const workItemId = featureId.split('#')[1];
      if (!workItemId) {
        throw new Error(`Invalid feature ID format. Expected: PROJECT#NUMBER (e.g., FE#12345). Got: ${featureId}`);
      }

      // Get updates/comments for the work item
      const url = `${this.azureDevOps.orgUrl}/${encodeURIComponent(this.azureDevOps.project)}/_apis/wit/workitems/${workItemId}/updates?api-version=${this.azureDevOps.apiVersion}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: this.getAuthHeader(),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Azure DevOps API Error (${response.status}): ${error}`);
      }

      const data = await response.json();

      // Filter and format comments
      const comments = data.value
        .filter(update => update.fields && Object.keys(update.fields).length > 0)
        .map(update => ({
          revisedDate: update.revisedDate,
          revisedBy: update.revisedBy?.displayName || 'Unknown',
          changedFields: Object.keys(update.fields || {}),
          changes: Object.entries(update.fields || {})
            .map(([field, change]) => ({
              field,
              oldValue: change.oldValue ? String(change.oldValue) : '',
              newValue: change.newValue ? String(change.newValue) : '',
            })),
        }));

      // Log update history
      console.log(`📜 Fetched ${comments.length} update(s) in history for ${featureId}`);

      return comments;

    } catch (error) {
      console.error(`❌ Error fetching comments for ${featureId}:`, error.message);
      throw error;
    }
  },

  /**
   * Fetch discussions/work item comments
   * @param {string} featureId - Feature ID (e.g., "FE#12345")
   * @returns {array} Array of discussion comments
   */
  async getDiscussions(featureId) {
    try {
      const workItemId = featureId.split('#')[1];
      if (!workItemId) {
        throw new Error(`Invalid feature ID format. Expected: PROJECT#NUMBER (e.g., FE#12345). Got: ${featureId}`);
      }

      // Get work item to check for comments field
      const url = `${this.azureDevOps.orgUrl}/${encodeURIComponent(this.azureDevOps.project)}/_apis/wit/workitems/${workItemId}?$expand=all&api-version=${this.azureDevOps.apiVersion}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: this.getAuthHeader(),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Azure DevOps API Error (${response.status}): ${error}`);
      }

      const data = await response.json();

      // Extract comments from relations
      const discussions = [];
      if (data.relations) {
        data.relations
          .filter(rel => rel.rel === 'AttachedFile' || rel.rel === 'comment')
          .forEach(rel => {
            discussions.push({
              relation: rel.rel,
              url: rel.url,
              attributes: rel.attributes || {},
            });
          });
      }

      return discussions;

    } catch (error) {
      console.error(`❌ Error fetching discussions for ${featureId}:`, error.message);
      throw error;
    }
  },

  /**
   * Strip HTML tags and decode HTML entities
   * @param {string} html - HTML string
   * @returns {string} Plain text
   */
  stripHtmlTags(html) {
    if (!html) return '';
    
    // Step 1: Remove HTML tags
    let text = html.replace(/<[^>]*>/g, '');
    
    // Step 2: Decode common HTML entities
    const entities = {
      '&nbsp;': ' ',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': "'",
      '&#39;': "'",
      '&rdquo;': '"',
      '&ldquo;': '"',
      '&mdash;': '—',
      '&ndash;': '–',
      '&bull;': '•',
    };
    
    for (const [entity, char] of Object.entries(entities)) {
      text = text.replace(new RegExp(entity, 'g'), char);
    }
    
    // Step 3: Trim and clean extra whitespace
    return text.replace(/\s+/g, ' ').trim();
  },

  /**
   * Fetch actual comments/discussions with text content
   * @param {string} featureId - Feature ID (e.g., "FE#12345")
   * @returns {array} Array of comment objects with text
   */
  async getTextComments(featureId) {
    try {
      const workItemId = featureId.split('#')[1];
      if (!workItemId) {
        throw new Error(`Invalid feature ID format. Expected: PROJECT#NUMBER (e.g., FE#12345). Got: ${featureId}`);
      }

      // Use Azure DevOps Comments API
      const url = `${this.azureDevOps.orgUrl}/${encodeURIComponent(this.azureDevOps.project)}/_apis/wit/workitems/${workItemId}/comments?api-version=7.0-preview.3`;

      const response = await fetch(url, {
        method: 'GET',
        headers: this.getAuthHeader(),
      });

      if (!response.ok) {
        // Comments API might not be available, return empty
        if (response.status === 404 || response.status === 400) {
          return [];
        }
        const error = await response.text();
        throw new Error(`Azure DevOps API Error (${response.status}): ${error}`);
      }

      const data = await response.json();

      // Format comments - note: field is 'text' not 'content'
      const comments = data.comments ? data.comments.map(c => ({
        id: c.id,
        text: c.text,  // Changed from 'content' to 'text'
        createdBy: c.createdBy?.displayName || 'Unknown',
        createdDate: c.createdDate,
        changedDate: c.changedDate,
      })) : [];

      // Log comment fetch with count
      console.log(`💬 Fetched ${comments.length} comment(s) for ${featureId}`);
      if (comments.length > 0) {
        comments.forEach((c, i) => {
          console.log(`   ${i + 1}. ${c.createdBy} - ${c.text.substring(0, 50)}...`);
        });
      }

      return comments;

    } catch (error) {
      console.error(`❌ Error fetching text comments for ${featureId}:`, error.message);
      throw error;
    }
  },

  /**
   * Validate Azure DevOps connection
   * @returns {object} Health status
   */
  async healthCheck() {
    try {
      const url = `${this.azureDevOps.orgUrl}/_apis/projects?api-version=${this.azureDevOps.apiVersion}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getAuthHeader(),
      });

      if (response.ok) {
        return {
          status: 'healthy',
          message: '✅ Connected to Azure DevOps',
          org: this.azureDevOps.orgUrl,
          project: this.azureDevOps.project,
        };
      } else {
        return {
          status: 'unhealthy',
          message: `❌ Azure DevOps returned ${response.status}`,
          error: await response.text(),
        };
      }
    } catch (error) {
      return {
        status: 'unhealthy',
        message: '❌ Cannot connect to Azure DevOps',
        error: error.message,
      };
    }
  },
};

module.exports = config;
