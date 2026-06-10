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

  /**
   * Create a work item (test case) in Azure DevOps
   * @param {object} testCase - Test case object with id, title, priority, category, automatable
   * @returns {object} Created work item
   */
  /**
   * Format test steps into Azure DevOps XML format
   * @param {array} testSteps - Array of [stepNumber, action, expectedResult]
   * @returns {string} XML formatted test steps
   */
  formatTestStepsToXml(testSteps) {
    if (!testSteps || testSteps.length === 0) {
      return '';
    }

    // Build XML steps in proper Azure DevOps format (matching working test cases)
    // Format: <parameterizedString isformatted="true"> elements (not parameterizedStep/parameterizedExpectedResult)
    let stepsXml = '<steps id="0" last="' + testSteps.length + '">';
    
    testSteps.forEach((step, index) => {
      const stepNum = index + 1;
      // Handle different step formats - could be [stepNum, action, result] or just [action, result]
      const action = (step[1] || step[0] || '').trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
      const expectedResult = (step[2] || '').trim().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
      
      // Determine step type: First step is ActionStep, others are ValidateStep (matching Azure DevOps format)
      const stepType = stepNum === 1 ? 'ActionStep' : 'ValidateStep';
      
      stepsXml += `<step id="${stepNum}" type="${stepType}">`;
      // Use parameterizedString elements (this is what Azure DevOps UI expects!)
      stepsXml += `<parameterizedString isformatted="true">${action}</parameterizedString>`;
      stepsXml += `<parameterizedString isformatted="true">${expectedResult}</parameterizedString>`;
      stepsXml += `<description/>`;
      stepsXml += `</step>`;
    });
    
    stepsXml += '</steps>';
    console.log(`   📋 Generated XML for ${testSteps.length} steps (CORRECT FORMAT): ${stepsXml.substring(0, 100)}...`);
    return stepsXml;
  },

  /**
   * Update test steps on an existing work item
   * @param {number} workItemId - Work item ID
   * @param {array} testSteps - Array of test steps
   */
  async updateTestSteps(workItemId, testSteps) {
    try {
      if (!testSteps || testSteps.length === 0) {
        console.log(`   ℹ️  No test steps to add`);
        return;
      }

      const url = `${this.azureDevOps.orgUrl}/${encodeURIComponent(this.azureDevOps.project)}/_apis/wit/workitems/${workItemId}?api-version=${this.azureDevOps.apiVersion}`;
      
      const stepsXml = this.formatTestStepsToXml(testSteps);
      
      const body = [
        {
          op: "add",
          path: "/fields/Microsoft.VSTS.TCM.Steps",
          value: stepsXml
        }
      ];

      console.log(`   📡 Updating test steps for work item #${workItemId}...`);
      
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          ...this.getAuthHeader(),
          'Content-Type': 'application/json-patch+json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`   ⚠️  Could not update test steps: ${response.status}`);
        console.error(`   Response: ${errorText.substring(0, 300)}`);
        // Don't throw - test steps update is non-critical
        return false;
      }

      console.log(`   ✅ Test steps updated successfully`);
      return true;

    } catch (error) {
      console.error(`   ⚠️  Error updating test steps: ${error.message}`);
      return false;
    }
  },

  async createTestCaseWorkItem(testCase) {
    try {
      const encodedWorkItemType = encodeURIComponent('Test Case');
      const url = `${this.azureDevOps.orgUrl}/${encodeURIComponent(this.azureDevOps.project)}/_apis/wit/workitems/$${encodedWorkItemType}?api-version=${this.azureDevOps.apiVersion}`;

      console.log(`📝 [createTestCaseWorkItem] Creating for: ${testCase.id}`);
      console.log(`   URL: ${url}`);
      console.log(`   Priority: ${testCase.priority} (mapped to ${testCase.priority === 'High' ? 1 : testCase.priority === 'Medium' ? 2 : 3})`);
      console.log(`   Automatable: ${testCase.automatable}`);
      console.log(`   Test Steps: ${testCase.testSteps ? testCase.testSteps.length : 0}`);

      // Build minimal fields that don't conflict with required/limited-to-values
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
        // ✅ FIXED: Don't set System.State - Let Azure DevOps use default "Design"
        // System.State is auto-set to Design on work item creation
        
        {
          op: "add",
          path: "/fields/Microsoft.VSTS.TCM.AutomatedTestName",
          value: testCase.id
        },
        // ✅ FIXED: Use "Not Automated" as the automation status value
        // This is a valid value for Microsoft.VSTS.TCM.AutomationStatus
        {
          op: "add",
          path: "/fields/Microsoft.VSTS.TCM.AutomationStatus",
          value: 'Not Automated'
        },
        // ✅ FIXED: Use "Performance" as the value for Custom.TestLevel
        // This is a required field and "Performance" is the valid value
        {
          op: "add",
          path: "/fields/Custom.TestLevel",
          value: "Performance"
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

      console.log(`   Sending patch body with ${body.length} operations`);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...this.getAuthHeader(),
          'Content-Type': 'application/json-patch+json'
        },
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`   ❌ API Error ${response.status}:`);
        console.error(`   Response: ${errorText.substring(0, 500)}`);
        throw new Error(`Failed to create work item: ${response.status} ${errorText}`);
      }

      const workItem = await response.json();
      console.log(`   ✅ Created work item #${workItem.id}`);

      // ✅ NEW: Update test steps separately after creation
      if (testCase.testSteps && testCase.testSteps.length > 0) {
        console.log(`   Adding ${testCase.testSteps.length} test steps...`);
        await this.updateTestSteps(workItem.id, testCase.testSteps);
      }

      return workItem;
    } catch (error) {
      console.error(`❌ Error creating test case work item for ${testCase.id}: ${error.message}`);
      throw error;
    }
  },

  /**
   * Link a work item as a child of another work item
   * @param {number} parentId - Parent work item ID (user story)
   * @param {number} childId - Child work item ID (test case)
   * @param {string} linkType - Link type (default: System.LinkTypes.Hierarchy-Forward)
   * @returns {object} Link relationship
   */
  async linkWorkItems(parentId, childId, linkType = 'System.LinkTypes.Hierarchy-Forward') {
    try {
      console.log(`\n📝 [linkWorkItems] Attempting to link work items`);
      console.log(`   Parent (User Story): ${parentId}`);
      console.log(`   Child (Test Case): ${childId}`);

      // Use the project GUID for API calls  
      const projectId = this.projectId || '7977ed3d-15c4-4782-b1f7-d1f70660ff0c';
      
      // Try PATCH the parent work item with a JSON-Patch operation to add relation
      const url = `${this.azureDevOps.orgUrl}/${projectId}/_apis/wit/workitems/${parentId}?api-version=${this.azureDevOps.apiVersion}`;

      // Construct the relation URL
      const childUrl = `${this.azureDevOps.orgUrl}/${projectId}/_apis/wit/workitems/${childId}`;

      const patchBody = [
        {
          op: "add",
          path: "/relations/-",
          value: {
            rel: linkType,
            url: childUrl
          }
        }
      ];

      console.log(`   URL: ${url}`);
      console.log(`   Using PATCH with JSON-Patch format`);

      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          ...this.getAuthHeader(),
          'Content-Type': 'application/json-patch+json'
        },
        body: JSON.stringify(patchBody)
      });

      console.log(`   Response Status: ${response.status}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.log(`   ❌ API Error ${response.status}`);
        
        // If PATCH fails, try alternative approaches
        if (response.status === 400 || response.status === 404) {
          console.log(`\n   ⚠️  PATCH method failed. Trying alternative link type...`);
          
          // Try with alternative link type
          const altLinkType = 'Microsoft.VSTS.Common.Hierarchy-Forward';
          patchBody[0].value.rel = altLinkType;
          
          const altResponse = await fetch(url, {
            method: 'PATCH',
            headers: {
              ...this.getAuthHeader(),
              'Content-Type': 'application/json-patch+json'
            },
            body: JSON.stringify(patchBody)
          });

          console.log(`   Alternative link type response: ${altResponse.status}`);
          
          if (!altResponse.ok) {
            const altErrorText = await altResponse.text();
            throw new Error(`Failed to link work items (both attempts failed): ${response.status} and ${altResponse.status}`);
          }
          
          return await altResponse.json();
        }
        
        throw new Error(`Failed to link work items: ${response.status}`);
      }

      const result = await response.json();
      console.log(`✅ Successfully linked test case to user story`);
      console.log(`   Test Case #${childId} linked to User Story #${parentId}`);
      
      return result;
    } catch (error) {
      console.error(`❌ Error linking work items: ${error.message}`);
      throw error;
    }
  },
};

module.exports = config;
