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
    const envPath = path.resolve(__dirname, '../.env');
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
   * @param {string} featureId - Feature ID (e.g., "AB#12345")
   * @returns {object} Feature details
   * 
   * Example:
   *   const feature = await config.fetchFeature('AB#12345');
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
      // Parse feature ID (AB#12345 -> 12345)
      const workItemId = featureId.split('#')[1];
      if (!workItemId) {
        throw new Error(`Invalid feature ID format. Expected: PROJECT#NUMBER (e.g., AB#12345). Got: ${featureId}`);
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

      // Extract key fields
      const feature = {
        id: data.id,
        url: data.url,
        title: data.fields['System.Title'] || 'N/A',
        description: data.fields['System.Description'] || '',
        acceptanceCriteria: data.fields['Microsoft.VSTS.TCM.AcceptanceCriteria'] || '',
        priority: data.fields['Microsoft.VSTS.Common.Priority'] || 0,
        state: data.fields['System.State'] || 'New',
        type: data.fields['System.WorkItemType'] || 'User Story',
        assignedTo: data.fields['System.AssignedTo']?.displayName || 'Unassigned',
        createdDate: data.fields['System.CreatedDate'],
        updatedDate: data.fields['System.ChangedDate'],
      };

      console.log(`✅ Feature fetched successfully: "${feature.title}"`);
      return feature;

    } catch (error) {
      console.error(`❌ Error fetching feature ${featureId}:`, error.message);
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
