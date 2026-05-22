---
description: "Configure Azure DevOps MCP integration for VS Code Copilot"
---

# AI Assistant: Configure Azure DevOps MCP Integration

Execute these steps in order to set up Azure DevOps MCP integration:

## Step 1: Check Azure CLI Installation
```powershell
az --version
```
- If command fails, install Azure CLI:
```powershell
winget install --exact --id Microsoft.AzureCLI
```
- If `az` not recognized after install, inform user to restart terminal/VS Code

## Step 2: Azure Authentication
Run as background task (`isBackground: true`):
```powershell
az login
```
- Opens browser for authentication
- After completion, verify with: `az account show`

## Step 3: Create MCP Configuration File
Create `.vscode/mcp.json` with this exact content:
```json
{
    "servers": {
        "ado": {
            "type": "stdio",
            "command": "npx",
            "args": [
                "-y",
                "@azure-devops/mcp",
                "${input:ado_org}"
            ]
        }
    },
    "inputs": [
        {
            "id": "ado_org",
            "type": "promptString",
            "description": "Azure DevOps organization name  (e.g. 'enablon')"
        }
    ]
}
```

## Step 4: Interactive MCP Server Setup
**⚠️ CRITICAL: Run as background task (`isBackground: true`)**

```powershell
Write-Host "🔧 Azure DevOps MCP Server Setup" -ForegroundColor Cyan
Write-Host "Starting Azure DevOps MCP server..." -ForegroundColor Yellow
Write-Host ""

Write-Host "Please provide the following information:" -ForegroundColor Cyan
Write-Host "• Your Azure DevOps organization name (e.g., 'enablon', 'contoso')" -ForegroundColor White
Write-Host "• This will be used to connect to your Azure DevOps services" -ForegroundColor White
Write-Host ""
Write-Host "After providing the organization name:" -ForegroundColor Yellow
Write-Host "1. Restart VS Code to activate the MCP server" -ForegroundColor White
Write-Host "2. The Azure DevOps MCP integration will be available in Copilot Chat" -ForegroundColor White
Write-Host ""
Write-Host "You can then use commands like:" -ForegroundColor Green
Write-Host "• 'Show me my work items'" -ForegroundColor White
Write-Host "• 'List recent pull requests'" -ForegroundColor White
Write-Host "• 'Check build status for project X'" -ForegroundColor White

Read-Host "Press Enter to continue after restarting VS Code"
```

## Step 5: Prompt User
**⚠️ IMMEDIATELY after Step 4, send this message to user:**

"Please provide your Azure DevOps organization name (e.g., 'enablon') in the terminal above when prompted, then restart VS Code to activate the MCP server. After restart, you can use Azure DevOps commands in Copilot Chat."

## Success Verification
After restart, Azure DevOps MCP should be available in Copilot Chat. User can test with:
- "Show me my work items"
- "List projects"
- "Check recent pull requests"

## Error Handling
- **Azure CLI not found**: Restart terminal after installation
- **Login fails**: Check Azure account permissions
- **MCP not starting**: Verify Node.js installation and internet connectivity
- **Organization prompt not appearing**: Restart VS Code after creating mcp.json
