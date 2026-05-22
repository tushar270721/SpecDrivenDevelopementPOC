# Azure DevOps MCP Setup Guide

## Quick Start

### 1️⃣ Create `.env` File

Copy the template and add your Personal Access Token:

```bash
cp .env.example .env
```

Edit `.env` and replace with your Azure DevOps details:

```env
AZDO_ORG_URL=https://dev.azure.com/enablon
AZDO_PROJECT_NAME=QA SDD POC
AZDO_PAT=<YOUR_PERSONAL_ACCESS_TOKEN>
```

### 2️⃣ Get Personal Access Token (PAT)

1. Go to: https://dev.azure.com/enablon/_usersSettings/tokens
2. Click "New Token"
3. Configure:
   - **Name:** QA SDD POC CI/CD
   - **Organization:** enablon
   - **Expiration:** 90 days
   - **Scopes:** ✓ Work Items (Read & Write)
4. Copy the token (shown only once!)
5. Paste into `.env` as `AZDO_PAT=<token>`

### 3️⃣ Test Connection

```bash
node .github/test-azure-connection.js
```

Expected output:
```
═══════════════════════════════════════════════════════════
🔍 Azure DevOps MCP Connection Test
═══════════════════════════════════════════════════════════

Test 1: Health Check
─────────────────────────────────────────────────────────
Status: ✅ Connected to Azure DevOps
Organization: https://dev.azure.com/enablon
Project: QA SDD POC

✅ Azure DevOps MCP is ready to use!
```

---

## Architecture

### Files Created

```
.github/
├── mcp-config.js              ← Azure DevOps API connector (ONE FILE!)
├── test-azure-connection.js   ← Test script
└── skills/
    └── fetch-feature-from-azure/
        └── SKILL.md           ← Uses mcp-config.js
```

### How It Works

```
User Command (Copilot)
    ↓
"Fetch feature AB#12345"
    ↓
fetch-feature-from-azure SKILL.md
    ↓
Calls: config.fetchFeature('AB#12345')
    ↓
.github/mcp-config.js
    ↓
Azure DevOps API
    ↓
Returns: { title, description, acceptanceCriteria, ... }
    ↓
create-specification-file SKILL.md
```

---

## Usage Examples

### From Copilot

```
User: "Start feature AB#12345"

Copilot executes:
1. Reads .github/skills/fetch-feature-from-azure/SKILL.md
2. Calls config.fetchFeature('AB#12345')
3. Gets feature details from Azure DevOps
4. Creates SPECIFICATION.md
5. Creates test cases
6. Creates automation skeleton
```

### From Code

```javascript
const config = require('./.github/mcp-config.js');

// Fetch a feature
const feature = await config.fetchFeature('AB#12345');
console.log(feature.title);        // "User Login"
console.log(feature.acceptanceCriteria); // "Criteria..."

// Check health
const health = await config.healthCheck();
console.log(health.status);        // "healthy" or "unhealthy"
```

---

## Security

### Best Practices

✅ **DO:**
- Store PAT in `.env` (never commit)
- Rotate PAT every 90 days
- Use minimal scope (Work Items only)
- Add `.env` to `.gitignore` (already done)

❌ **DON'T:**
- Commit `.env` to git
- Share PAT in messages
- Use same PAT for all projects
- Log PAT values

### `.env` Security

File is already in `.gitignore`:

```gitignore
# Environment Variables
.env
.env.local
.env.*.local
```

---

## Troubleshooting

### ❌ "AZDO_PAT not configured"

**Solution:**
```bash
cp .env.example .env
# Edit .env and add your PAT
```

### ❌ "Azure DevOps API Error (401)"

**Solution:**
- Check PAT is correct
- Verify PAT has "Work Items (Read & Write)" scope
- Regenerate new PAT if expired

### ❌ "Azure DevOps API Error (404)"

**Solution:**
- Verify organization URL: `https://dev.azure.com/enablon`
- Verify project name: `QA SDD POC`
- Feature ID might not exist (try fetching a different feature)

### ❌ "Cannot connect to Azure DevOps"

**Solution:**
- Check internet connection
- Verify firewall allows dev.azure.com
- Try: `ping dev.azure.com`

---

## Configuration Options

### Environment Variables

| Variable | Required | Example |
|----------|----------|---------|
| `AZDO_ORG_URL` | Yes | `https://dev.azure.com/enablon` |
| `AZDO_PROJECT_NAME` | Yes | `QA SDD POC` |
| `AZDO_PAT` | Yes | `<your_token>` |
| `MCP_ENABLED` | No | `true` |
| `MCP_AZURE_DEVOPS_ENABLED` | No | `true` |

### Defaults (if not set)

```javascript
AZDO_ORG_URL = https://dev.azure.com/enablon
AZDO_PROJECT_NAME = QA SDD POC
AZDO_API_VERSION = 7.0
```

---

## What's Next

After setup:

1. ✅ Configuration complete
2. ⏭️ Implement `fetch-feature-from-azure` SKILL.md
3. ⏭️ Test with a real feature: "Fetch feature AB#<id>"
4. ⏭️ Trigger full SDD pipeline

---

## Support

For issues:
1. Run: `node .github/test-azure-connection.js`
2. Check output for errors
3. Verify `.env` configuration
4. Review troubleshooting section above

---

**Status: Ready to Use ✅**

Your Azure DevOps MCP connection is configured and tested!
