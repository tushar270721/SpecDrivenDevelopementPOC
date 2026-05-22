# Find Related Test Cases for User Stories & Bug Analysis

## Purpose
Identify existing test cases (manual and automated) that might be affected by user story changes or should catch reported bugs. Analyze test coverage gaps and potential regression risks using keyword-based search strategies.

## Input Parameters 
- **Work Item ID**: The bug or user story identifier (e.g., 714091)
- **Project Name:**:

OR extract them from provided URL

## Analysis Workflow

### Step 1: Retrieve Work Item Details
Extract comprehensive information from Azure DevOps:
- Work item type (Bug, User Story, Feature)
- Title, description, and acceptance criteria
- Reproduction steps (for bugs)
- Component and area path
- Related work items and links
- Attachments and comments

### Step 2: Explore Test Plan Structure (PRIMARY METHOD)
**CRITICAL**: Always start by reading the test plan file before any search:

1. **Read Test Plan File** ⭐ **START HERE**
   - **File Location**: `artifacts/testPlan/test-plan-535173.md`
   - This file contains the complete Master Test Plan (ID: 535173)
   - Includes all suites and test cases with their IDs, names, and structure
   - **Always read the ENTIRE file first** - it's faster and more accurate than API calls

2. **Identify Relevant Suites**
   - Based on work item keywords, locate matching suites in the hierarchy
   - Example: "Permit Dependencies" → Find "📁 Workflows (ID: 593868)" under Permits
   - Example: "Lessons Learned" → Find "📁 Lessons Management" suite
   - Example: "Certificate Search Grid" → Find "📁 Search & Filtering" suite
   - Use the hierarchical structure to navigate from feature → sub-feature → test cases

3. **Extract Test Case IDs from Hierarchy**
   - Identify all test cases (📄 markers) within the relevant suite
   - Capture test case IDs and titles for further analysis
   - Note related sibling suites that may contain additional coverage

4. **Retrieve Full Test Case Details**
   - Use Azure DevOps API to fetch complete details for identified test case IDs
   - Get test steps, descriptions, status, and tags
   - Analyze coverage based on full test case content

### Step 3: Keyword Search (FALLBACK METHOD)
Only use keyword search if test-plan.md navigation doesn't yield sufficient results:

1. **Search Within Test Plan File**
   - Use text search on test-plan.md content for keywords
   - Find test cases by title/ID that match keywords
   - This is faster than Azure DevOps API searches

2. **Azure DevOps Work Item Search** (if needed)
   - Search Azure DevOps work items with type "Test Case"
   - Use when test-plan.md doesn't contain the full latest data
   - Cross-reference results with test-plan.md hierarchy

3. **Automated Tests** (if requested)
   - Search code repository for feature files and test implementations
   
4. **Cross-Suite Search**
   - Search across all test cases if suite-based search is insufficient

### Step 4: Analyze and Score Relevance
For each test case found:
- **Relevance Score**: Rate from 0-100% based on keyword matches and functional overlap
- **Coverage Status**: Identify what aspects are covered vs. missing
- **Impact Level**: Classify as CRITICAL, HIGH, MEDIUM, or LOW priority

### Step 5: Identify Coverage Gaps
Determine:
- **Missing Test Scenarios**: Workflows not covered by existing tests
- **Edge Cases**: Boundary conditions and error scenarios not validated
- **Regression Risks**: Areas where changes could break existing functionality

### Step 6: Provide Recommendations
- **Update Existing Tests**: Which tests need modification
- **Create New Tests**: New test cases required
- **Automation Opportunities**: Scenarios suitable for E2E automation


## Impact Assessment

### For Bugs
- What functionality was broken
- When was it introduced (version/release)
- What existing tests should have caught it
- Why tests didn't catch it (coverage gap)

### For User Stories
- What tests will need updates
- What new tests are required
- What existing tests might break
- What regression risks exist

---

## Output Format

Provide a structured list with the following format:

### 1. Work Item Summary
- ID, Title, Type, Status, Priority
- Component and Area Path
- Brief description of the change/bug
- Key acceptance criteria or reproduction steps


### 2. Test Suite Structure & Related Test Cases

**Format**: Present test cases organized by their suite hierarchy from test-plan.md in a table format. 
TestCaseIDs should be clickable links: 
https://dev.azure.com/enablon/ART%20-%20Farmers/_workitems/edit/{TestCaseID}

```
| Test Case ID | Title   | Relevance   |
|--------------|---------|-------------|
| [TestCaseID] | [Title] | [RELEVANCE] |
| [TestCaseID] | [Title] | [RELEVANCE] |
```

**Relevance Indicators:**
- ⭐ **DIRECTLY RELATED** - Exact match, must be updated/created
- 🎯 **HIGHLY RELATED** - Strong functional overlap, likely needs review
- 🔗 **RELATED** - Shares functionality, may need verification
- � **TANGENTIALLY RELATED** - Peripheral connection, reference only


### 4. Test Case Linking Options

Select how you want to link test cases to this work item:

**Option 1: Link DIRECTLY RELATED Test Cases** ⭐
- Automatically link all test cases marked with ⭐ **DIRECTLY RELATED** indicator
- These are exact matches that must be updated or created for this work item
- This is the recommended option for most scenarios

**Option 2: Custom Selection**
- Manually specify which test case IDs should be linked
- Provide a comma-separated list of test case IDs
- Example: `558973, 559042, 559103`

**Choose your option:**

---

### When Searches Return Limited Results

- **First**: Re-read test-plan.md and try different suite sections in the same feature area
- **Second**: Check parent/sibling suite sections in test-plan.md for broader coverage
- **Third**: Use text search on test-plan.md with different keyword combinations
- Search for component names alone
- Look for test cases in related features
- Check archived or closed test plans
- Review test case tags for categorization
- Consider if test-plan.md needs to be regenerated for latest data

---


## Notes for AI Assistants

### Mandatory Steps
1. **ALWAYS read test-plan.md file FIRST** (`artifacts/testPlan/test-plan-<testPlanId>.md`)
2. **Navigate hierarchically** using the visual tree structure (📁 📄)
3. **Extract test case IDs** from relevant suite sections
4. **Retrieve full test case details** via API only for identified IDs
5. **Present in structured format** - organize by suite hierarchy
6. **LINK TYPE**: Use 'Tested By' to connect test cases with their implementation details

### Key Principles
- **File-first, API-second** - Use local file for structure, API for test case details
- **Keep it concise** - List test cases with relevance indicators, not lengthy analysis
- **Organize by hierarchy** - Group test cases by their suite structure from test-plan.md
- **Extract keywords systematically** - Use priority levels for targeted search
- **Search incrementally** - Navigate test-plan.md → Text search → API (if needed)
- **Document suite paths** - Show where tests live in the hierarchy
- **Note file freshness** - If test-plan.md seems outdated, mention regeneration may be needed

### Output Focus
- **Structure over analysis** - Present organized list of related test cases
- **Visual hierarchy** - Use tree structure to show suite organization
- **Clear relevance** - Mark each test with appropriate indicator (⭐🎯🔗📎)
- **Quick actions** - Brief summary of what needs to be done, not detailed specifications
- **Scannable format** - Easy to read and navigate the test case list