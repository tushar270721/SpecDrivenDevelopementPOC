# 🚀 Quick Start - Test Case Portal Push to Azure DevOps

## What's New?

You now have a complete system to **push approved test cases to Azure DevOps** and **link them as child items under a user story**.

## Files Created/Updated

✅ **New Files:**
- `server.js` - Backend server to handle Azure DevOps integration
- `.github/config/azure-mcp/push-test-cases.js` - Script to push test cases
- `TEST_CASE_PORTAL_SETUP.md` - Complete setup documentation

✅ **Updated Files:**
- `index.html` - Now calls the backend API to push test cases
- `package.json` - Added express dependency and npm scripts

## Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install express
```

Or just run:
```bash
npm install
```

### 2️⃣ Start the Server
```bash
node server.js
```

You should see:
```
🚀 Test Case Review Portal Server Started
📍 URL: http://localhost:3000
```

### 3️⃣ Open Portal and Push Test Cases
1. Go to: **http://localhost:3000/index.html**
2. Paste your test cases (Markdown)
3. Click **Parse Test Cases**
4. **Approve** the test cases you want
5. **Enter User Story Number** (e.g., `FE#735316`)
6. Click **☁ Push to Azure DevOps**

## What Happens When You Push?

✅ **Creates new work items** in Azure DevOps with:
- Test case title and description
- Priority level
- Category as tags
- Automation status (Automated/Manual)

✅ **Links test cases** as child items under your user story

✅ **Shows results** with:
- Created work item IDs
- Linked items count
- Any errors or warnings

## Example

**Before Push:**
- User Story: FE#735316
- Approved Test Cases: 5

**After Push:**
```
✅ Successfully pushed 5 test case(s) to Azure DevOps!

📌 User Story: FE#735316
✓ Created: 5 work items
🔗 Linked: 5 child items

Created Work Items:
  • #12346: TC-FE735316-001
  • #12347: TC-FE735316-002
  • #12348: TC-FE735316-003
  • #12349: TC-FE735316-004
  • #12350: TC-FE735316-005
```

## Troubleshooting

### ❌ "Backend server is not running"
**Solution:** Run `node server.js`

### ❌ "AZDO_PAT not configured"
**Solution:** 
1. Check `.env` file has `AZDO_PAT=your_token`
2. Restart server

### ❌ "No approved test cases to push"
**Solution:** Click **Approve** on test cases first

### ❌ "Invalid user story ID format"
**Solution:** Use format like `FE#735316` or `735316`

## Architecture

```
┌─────────────────────────────────────┐
│   Web Browser (index.html)          │
│  - Parse test cases                 │
│  - Review & approve                 │
│  - Enter user story number          │
│  - Click push button                │
└──────────────┬──────────────────────┘
               │ POST /api/push-test-cases
               ▼
┌─────────────────────────────────────┐
│   Node.js Server (server.js)        │
│  - Express API endpoints            │
│  - Health checks                    │
│  - Config validation                │
└──────────────┬──────────────────────┘
               │ Execute
               ▼
┌─────────────────────────────────────┐
│  Push Script (push-test-cases.js)  │
│  - Create work items                │
│  - Link to parent story             │
│  - Return results                   │
└──────────────┬──────────────────────┘
               │ API Calls
               ▼
┌─────────────────────────────────────┐
│   Azure DevOps (REST API)           │
│  - Create test case work items      │
│  - Link parent-child relationships  │
│  - Set metadata                     │
└─────────────────────────────────────┘
```

## Key Features

🎯 **Test Case Parsing**
- Parse Markdown format test cases
- Extract metadata automatically

✅ **Review Workflow**
- Approve/Reject/Needs Changes status
- Add reviewer comments
- Track review dates

📤 **Push to Azure DevOps**
- Create new work items
- Link as child items
- Set priority & automation status
- Add categories as tags

🔍 **Filtering & Search**
- Filter by priority, status, category
- Search by ID or title

💾 **Export**
- Download updated test cases with review status

## Next Steps

1. **First Time Setup:**
   - Verify `.env` has Azure DevOps credentials
   - Run: `npm install express`
   - Start server: `node server.js`

2. **Use the Portal:**
   - Open: http://localhost:3000/index.html
   - Paste test cases
   - Review and approve
   - Push to Azure DevOps

3. **Check Results:**
   - Results saved in `.github/analysis/push-test-cases-results.json`
   - Check Azure DevOps for created work items

## Support

Full documentation available in: `TEST_CASE_PORTAL_SETUP.md`

---

**Happy Testing! 🎉**
