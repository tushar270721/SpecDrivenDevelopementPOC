---
description: "Configure self-healing feature for test automation"
---

# AI Assistant: Configure Self-Healing Feature

Execute these steps in order to set up self-healing:

## Step 1: Check Framework Version
Read `package.json` and check `@evision/testing-framework-core` version:
- If version < 7.5.0, update to "7.5.0"
- If version >= 7.5.0, skip to Step 2

Update if needed:
```json
"@evision/testing-framework-core": "7.5.0"
```

## Step 2: Update config.js
Ensure `selfHealingEnabled` is set to `true`:

**If property exists and is false:**
Change `selfHealingEnabled: false` to `selfHealingEnabled: true`

**If property doesn't exist:**
Add `selfHealingEnabled: true` to config object

**⚠️ IMPORTANT: Do NOT add credential properties to config.js**

## Step 3: Interactive Credential Setup
**⚠️ CRITICAL: Run as background task (`isBackground: true`)**

```powershell
Write-Host "🔧 Self-Healing Credential Setup" -ForegroundColor Cyan
Write-Host "Press Enter to skip any credential you don't have yet" -ForegroundColor Yellow
Write-Host ""

# Clear any existing variables first
$clientId = $null
$clientSecret = $null
$tenantId = $null

Write-Host "Step 1: Asking for Client ID..." -ForegroundColor Cyan
$clientId = Read-Host "Enter E2E_SELFHEALING_CLIENT_ID (or press Enter to skip)"
if ([string]::IsNullOrWhiteSpace($clientId)) {
    $env:E2E_SELFHEALING_CLIENT_ID = ""
    Write-Host "Client ID: Not set" -ForegroundColor Yellow
} else {
    $env:E2E_SELFHEALING_CLIENT_ID = $clientId
    [System.Environment]::SetEnvironmentVariable("E2E_SELFHEALING_CLIENT_ID", $clientId, "User")
    Write-Host "Client ID: Set successfully" -ForegroundColor Green
}

Write-Host "Step 2: Asking for Client Secret..." -ForegroundColor Cyan
$clientSecret = Read-Host "Enter E2E_SELFHEALING_CLIENT_SECRET (or press Enter to skip)" -MaskInput
if ([string]::IsNullOrWhiteSpace($clientSecret)) {
    $env:E2E_SELFHEALING_CLIENT_SECRET = ""
    Write-Host "Client Secret: Not set" -ForegroundColor Yellow
} else {
    $env:E2E_SELFHEALING_CLIENT_SECRET = $clientSecret
    [System.Environment]::SetEnvironmentVariable("E2E_SELFHEALING_CLIENT_SECRET", $clientSecret, "User")
    Write-Host "Client Secret: Set successfully" -ForegroundColor Green
}

Write-Host "Step 3: Asking for Tenant ID..." -ForegroundColor Cyan
$tenantId = Read-Host "Enter E2E_SELFHEALING_TENANT_ID (or press Enter to skip)"
if ([string]::IsNullOrWhiteSpace($tenantId)) {
    $env:E2E_SELFHEALING_TENANT_ID = ""
    Write-Host "Tenant ID: Not set" -ForegroundColor Yellow
} else {
    $env:E2E_SELFHEALING_TENANT_ID = $tenantId
    [System.Environment]::SetEnvironmentVariable("E2E_SELFHEALING_TENANT_ID", $tenantId, "User")
    Write-Host "Tenant ID: Set successfully" -ForegroundColor Green
}

Write-Host "Credentials setup completed" -ForegroundColor Green
```

## Step 4: Prompt User in Chat
**⚠️ IMMEDIATELY after Step 3, send this message to user:**

"Please enter your self-healing credentials in the terminal above. Press Enter to skip any credential you don't have yet. Once you've completed entering credentials, let me know and I'll run the final installation step (yarn install)."

**⚠️ DO NOT proceed to Step 5 until user confirms credentials are entered**

## Step 5: Install Dependencies
**Only run after user confirms credentials are entered:**

```powershell
yarn install
Write-Host "✅ Self-healing setup complete!" -ForegroundColor Green
```

## Getting Credentials
If user doesn't have credentials, inform them:

"To get self-healing credentials:
1. Contact Quest Team via Slack (@test-automation-support)
2. Request access to self-healing for your project
3. They will provide: Client ID, Client Secret, and Tenant ID

You can skip credential entry now and configure them later by re-running this command."

## Success Verification
Self-healing artifacts will be generated in `artifacts/selfHealing/` during test runs.

## Troubleshooting
- **400 Bad Request Error**: Run tests in a new terminal window to ensure environment variables are loaded
- **Credentials not working**: Verify values with Quest team
- **Framework version error**: Ensure version 7.5.0+ is installed
