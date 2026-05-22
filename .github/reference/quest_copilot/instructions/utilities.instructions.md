---
description: "Helper functions and utility patterns for test automation support"
applyTo: "utils/**/*.js"
---

# Utilities - Helper Functions & Discovery Guide

## Overview

The `utils/` folder contains helper functions that support test automation across the project. These utilities handle common operations like authentication, data manipulation, API interactions, and file processing.

**⚠️ CRITICAL: Search Before Creating**
Before implementing any new utility function, you MUST:
1. Search the project's `utils/` folder for existing similar functionality
2. Check Testing Framework Core utilities in `node_modules/@evision/testing-framework-core/utils/`
3. Only create new utilities if no existing solution is found

## How to Discover Existing Utilities

### Step 1: Explore Project Utilities
Use these commands to explore the project's utility structure:
```bash
# List all utility files
ls utils/

# Search for specific functionality (example: searching for "login" utilities)
grep -r "function.*login" utils/

# Search for specific patterns (example: date formatting)
grep -r "format.*date" utils/
```

### Step 2: Check Testing Framework Core Utilities
```bash
# List all framework utilities
ls node_modules/@evision/testing-framework-core/utils/

# Review specific framework utility file
cat node_modules/@evision/testing-framework-core/utils/dataUtils.js
```

### Step 3: Use Semantic Search
When you need functionality but don't know the exact function name:
- Use semantic search to find similar patterns
- Search for related terms (e.g., "parse date", "format user", "mock API")
- Review function JSDoc comments for detailed descriptions

## Project Utility Categories

The utilities in this project are organized into these functional areas:

### 1. Authentication & User Management
**Files**: `authUsersUtil.js`, `loginUtil.js`, `roles.js`  
**Purpose**: User authentication, PIN setup, role-based login, TestCafe role definitions

### 2. Data Manipulation & Formatting
**Files**: `dataUtil.js`  
**Purpose**: Date/time handling, string formatting, data transformations, context storage

**Note**: Re-exports many utilities from framework core (`parseDate`, `generateRandomUser`, `convertDataTable`, etc.)

### 3. Configuration Management
**Files**: `configUtil.js`  
**Purpose**: XML config parsing, FlowVision config mocking, querying config data

### 4. Test Helpers & Common Actions
**Files**: `helpers.js`  
**Purpose**: Reusable browser interactions, validation, file operations, session management


### 5. Excel File Processing
**Files**: `excelFileUtil.js`  
**Purpose**: Excel file reading, manipulation, validation, row finding/updating

### 6. API Data Generation
**Files**: `importApiUtil.js`  
**Purpose**: Generate JSON payloads for permits, work packs, ICC templates, risk assessments
**Supports**: Multiple certificate statuses (DRAFT, VERIFIED, LIVE, SUSPENDED, etc.) with special features like night shift handling

### 7. Mock Utilities
**Files**: `mockUtil.js`  
**Purpose**: API response mocking, request interception, cookie timeout mocking

### 8. Audit Trail Utilities
**Files**: `auditTrail/auditTrailUtil.js`, `auditTrail/actionTemplateUtil.js`  
**Purpose**: Generate audit event data, format audit actions, validate audit trail

### 9. Data Import Reference
**Files**: `dataImport/referenceData.js`  
**Purpose**: Template management for import testing (equipment, locations, images, systems)

### 10. Microsoft Integration
**Files**: `microsoftUtil/graphApiUtil.js`, `microsoftUtil/microsoftAuthUtil.js`  
**Purpose**: Microsoft Graph API integration, email verification, Microsoft authentication

### 11. Fake GIS Server (`fakeGis/index.js`)

### 11. Fake GIS Server
**Files**: `fakeGis/index.js`  
**Purpose**: HTTP server for serving fake GIS tiles during tests

### 12. Simple Utilities
**Files**: `pvDataUtil.js`  
**Purpose**: Random number generation, UTC time, cookie extraction, error parsing

### Error Handling in Utilities
### 13. Error Handling
**Files**: `errorHandler.js`  
**Purpose**: Browser-side error handlers (ResizeObserver, etc.)

### Configuration Usage
- Always use `config.js` values: `require(process.cwd() + '/config')`
- Never hardcode URLs, timeouts, or environment-specific values
- Use `getProcessArgv` for CLI arguments with defaults


## Guidelines

### Reusability
- Make utilities generic and framework-agnostic where possible
- Use meaningful parameter names and JSDoc comments
- Export single-purpose functions

### Configuration Integration
- Source environment values from `config.js`
- Use constants for repeated values
- Make utilities configurable through parameters

### Built-in Testing Framework Core Utilities
- Use `@evision/testing-framework-core` for core functionalities

## Testing Framework Core Utilities Reference

**⚠️ IMPORTANT**: Before creating new utility functions, always check if similar functionality already exists in the testing framework core utilities:

```bash
ls node_modules/@evision/testing-framework-core/utils/
```

### Available Testing Framework Core Utility Files

#### `dataUtils.js` - Data Manipulation & Generation
- Date parsing with keywords (`parseDate('today + 1')`)
- Data transformations (string to boolean, number conversions)
- Random data generation (`generateString`, `getRandomBetween`, `generateRandomUser`)
- Cucumber data table converters (`convertDataTable`, `convertDataTableToObject`, `convertDataTableToList`, `populateDataTable`)
- Context storage utilities (`getValueFromObjectByPath`)

#### `excel.js` - Excel File Processing
- Get the content of a specified excel sheet (`getSheetContent`)
- Replace the sheet content of a specified excel file (`replaceSheetContent`)

#### `networkThrottling.js` - Network Simulation
- Connection throttling utilities for slow network scenarios (`updateNetworkThrottling`)
- Utilities for toggling offline/online modes (`switchOfflineMode`, `switchOnlineMode`)

#### `pdf.js` - PDF Document Handling
- PDF text content extraction (`getTextFromPdf`)

#### `role.js` - User Role Management
- TestCafe user roles definitions and switching

#### `screenshot.js` - Visual Testing
- Screenshot capture and comparison utilities (`takeElementScreenshot`, `verifyElementScreenshot`)

#### `waiter.js` - Wait Conditions
- Custom wait conditions beyond TestCafe defaults (`waitForTrue`, `waitWithRefresh`)

#### `xml.js` - XML Processing
- Parse XML file to JSON (`XMLtoJSON`)

#### `zip.js` - Archive Handling
- Extract zip file to the target folder (`extractZip`)
- Get all entries (files and directories) from the zip file (`getZipEntries`)

### How to Search Testing Framework Utilities

1. **Explore the source**: Check `node_modules/@evision/testing-framework-core/utils/[filename].js`
2. **Use IDE search**: Search across framework files for specific function names
3. **Ask Copilot**: *"Does the framework have utilities for [specific functionality]?"*

### Import Examples

```javascript
// Import specific utilities
import { parseDate, generateString } from '@evision/testing-framework-core/utils/dataUtils';
import { getTextFromPdf } from '@evision/testing-framework-core/utils/pdf';
```

### Decision Flow: Testing Framework Core vs Custom Utilities

1. **Search Testing Framework Core utilities first** → Use if available
2. **No framework utility exists** → Create in local `utils/` folder
3. **Framework utility needs extension** → Wrap or extend in local utilities
4. **Business-specific logic** → Create custom utility following framework patterns
