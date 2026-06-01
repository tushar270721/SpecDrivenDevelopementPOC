#!/usr/bin/env pwsh

<#
.SYNOPSIS
Fetch feature details from Azure DevOps
.DESCRIPTION
Fetches and displays complete feature details from Azure DevOps using the fetch-feature script
.PARAMETER FeatureId
The feature ID in format FE#12345
.EXAMPLE
fetch-feature FE#768765
#>

param(
    [Parameter(Mandatory=$true, Position=0)]
    [ValidatePattern('^[A-Z]+#\d+$')]
    [string]$FeatureId
)

$scriptPath = ".github/config/azure-mcp/fetch-feature.js"

if (-Not (Test-Path $scriptPath)) {
    Write-Host "❌ ERROR: fetch-feature.js not found at $scriptPath" -ForegroundColor Red
    exit 1
}

Write-Host "`n🔄 Fetching feature $FeatureId...`n" -ForegroundColor Cyan
node $scriptPath $FeatureId
