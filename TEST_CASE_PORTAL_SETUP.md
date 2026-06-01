# Test Case Review Portal - Setup & Usage Guide

## Overview

The Test Case Review Portal is a web-based tool that allows you to:
- 📋 **Parse and review test cases** from Markdown files
- ✅ **Approve/Reject test cases** with detailed feedback
- 📤 **Push approved test cases to Azure DevOps** as new work items
- 🔗 **Link test cases** as child items under a parent user story

## Prerequisites

### 1. Node.js Installation
Ensure you have Node.js installed (v14 or higher):
```bash
node --version
npm --version
```

### 2. Azure DevOps Configuration
Your `.env` file should contain:
```
AZDO_ORG_URL=https://dev.azure.com/enablon
AZDO_PROJECT_NAME=ART - New SaaS
AZDO_PAT=your_personal_access_token_here
```

**To get a PAT:**
1. Go to https://dev.azure.com/enablon
2. Click your profile icon (top right)
3. Select **Personal access tokens**
4. Click **+ New Token**
5. Configure:
   - Name: `Test Case Portal`
   - Organization: `enablon`
   - Scopes: Check `Work Items (Read & Write)`
6. Copy the token and add to `.env`

## Installation

### 1. Install Dependencies
```bash
npm install express
```

Or install all dependencies:
```bash
npm install
```

### 2. Verify Configuration
```bash
# Check if .env file exists and has required variables
cat .env
```

## Running the Server

### Start the Backend Server
```bash
node server.js
```

**Expected Output:**
```
============================================================
🚀 Test Case Review Portal Server Started
============================================================
📍 URL: http://localhost:3000
📄 Open: http://localhost:3000/index.html
🏥 Health: http://localhost:3000/api/health
============================================================
```

### Open in Browser
- Navigate to: **http://localhost:3000/index.html**
- Or: **http://localhost:3000**

## Workflow

### Step 1: Paste Test Cases
1. Open the portal in your browser
2. Click the textarea labeled "Paste Test Cases (Markdown)"
3. Paste your testcases.md content
4. Click **📋 Parse Test Cases**

### Step 2: Review Test Cases
- View the table of parsed test cases
- Click on any test case row to open details modal
- Edit title, priority, preconditions, test data, test steps, reviewer comments
- Update review status: Pending → Approved/Rejected/Needs Changes
- Click **Save Changes** to save

### Step 3: Approve Selected Cases
- Check the checkboxes next to test cases you want to approve
- Click **✓ Approve Selected** button
- Or individually click the **Approve** button for each case

### Step 4: Enter User Story Number
- In the **Bulk Actions** section, find the input labeled "User Story:"
- Enter the user story ID (e.g., `FE#735316` or just `735316`)
- Example formats supported: `FE#735316`, `735316`, `12345`

### Step 5: Push to Azure DevOps
- Click **☁ Push to Azure DevOps** button
- The system will:
  1. Create a new work item (Test Case type) for each approved test case
  2. Link each test case as a child item under your user story
  3. Set priority and automation status
  4. Add categories as tags

### Step 6: View Results
- An alert will show:
  - Number of successfully created work items
  - Work item IDs
  - Number of linked items
  - Any errors or warnings

## Advanced Features

### Export as Markdown
- Click **⬇️ Export Markdown** to download updated test cases with:
  - Review status
  - Reviewer comments
  - Review dates
  - All edits

### Filter Test Cases
- **Priority Filter**: High, Medium, Low
- **Status Filter**: Approved, Rejected, Pending, Needs Changes
- **Category Filter**: Functional, Role-Based, Edge Cases, Integration, Performance, Security, E2E

### Search Test Cases
- Use the search box to find test cases by:
  - Test Case ID (TC-FE735316-001)
  - Title (partial match)

### Bulk Operations
- **Select All**: Click the checkbox in the header
- **Approve Selected**: Multiple test cases at once
- **Reject Selected**: Multiple test cases at once
- **Reset All**: Clear all selections

## Troubleshooting

### Error: "Backend server is not running"
**Solution:**
```bash
node server.js
```

### Error: "AZDO_PAT not configured"
**Solution:**
1. Check `.env` file exists in project root
2. Verify it contains: `AZDO_PAT=your_token_here`
3. Restart the server: `Ctrl+C` then `node server.js`

### Error: "Invalid user story ID format"
**Expected formats:**
- ✅ `FE#735316`
- ✅ `735316`
- ✅ `US#735316`
- ❌ `Feature 735316` (invalid)

### Error: "No approved test cases to push"
**Solution:**
1. Review at least one test case
2. Click the **Approve** button for each test case
3. Check that status shows "Approved"
4. Try again

### Connection Error / Fetch Failed
**Solution:**
1. Ensure server is running: `node server.js`
2. Check browser console for errors: Press `F12` → Console tab
3. Verify server is accessible: Visit http://localhost:3000/api/health
4. Check firewall isn't blocking port 3000

## API Endpoints

### Health Check
```
GET /api/health
Response: { status: "Server is running", timestamp: "..." }
```

### Configuration Status
```
GET /api/config-status
Response: { 
  config: { 
    envFileExists: true,
    hasAzdoOrgUrl: true,
    hasAzdoProject: true,
    hasAzdoPat: true
  },
  message: "Azure DevOps is properly configured"
}
```

### Push Test Cases
```
POST /api/push-test-cases
Content-Type: application/json

Body:
{
  "userStoryId": "FE#735316",
  "testCases": [
    {
      "id": "TC-FE735316-001",
      "title": "Test case title",
      "priority": "High",
      "category": "Functional",
      "automatable": "Yes",
      "description": "Description from preconditions"
    }
  ]
}

Response:
{
  "success": true,
  "message": "Successfully pushed X test case(s) to Azure DevOps",
  "userStoryId": "FE#735316",
  "results": {
    "successful": [...],
    "failed": [...],
    "linked": [...],
    "linkFailed": [...]
  },
  "timestamp": "2026-06-01T15:30:00.000Z"
}
```

## File Locations

| File | Purpose |
|------|---------|
| `index.html` | Web UI for test case review |
| `server.js` | Backend server (Express.js) |
| `.github/config/azure-mcp/push-test-cases.js` | Script to push test cases to Azure DevOps |
| `.github/config/azure-mcp/mcp-config.js` | Azure DevOps configuration |
| `.env` | Environment variables with credentials |
| `.github/analysis/push-test-cases-results.json` | Results from last push operation |

## Performance Tips

1. **Large Test Case Files**
   - For files with 100+ test cases, parsing may take a few seconds
   - Don't close the browser during parsing

2. **Network Issues**
   - Ensure stable internet connection for Azure DevOps API calls
   - Each test case creation may take 2-5 seconds

3. **Browser Console**
   - Open DevTools (`F12`) → Console for debugging
   - Check for network errors if push fails

## Security Considerations

⚠️ **Important:**
- Never commit `.env` file to version control
- Keep your Azure DevOps PAT secure
- Don't share the browser URL if running on shared network
- Use `.gitignore` to prevent accidental commits:
  ```
  .env
  node_modules/
  .github/analysis/push-test-cases-results.json
  ```

## Support

For issues or questions:
1. Check the Troubleshooting section
2. Review browser console (`F12` → Console)
3. Check server logs (terminal where `node server.js` is running)
4. Verify `.env` configuration
5. Ensure Azure DevOps PAT is valid and not expired

---

**Last Updated:** June 1, 2026  
**Version:** 1.0.0
