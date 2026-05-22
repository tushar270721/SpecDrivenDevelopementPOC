---
name: manage-test-cases
description: Maintain centralized test-cases.md file with test organization, categorization, and status tracking. Trigger: "Organize test cases", "Update test registry", "Manage test cases"
argument-hint: "Provide action: add-feature, update-status, generate-report, or view-status"
---

## When to Use
Activate to maintain the centralized test-cases.md registry that tracks all tests across all features.
This skill ensures test cases are organized by category, linked to Azure IDs, and status-tracked.

## Preconditions
- test-cases.md exists (or will be created)
- Feature ID and test cases known
- Azure DevOps test case IDs available (from push-draft-to-azure step)

## Workflow

1. **Step 1: Get User Input**
   - Ask user: "What action?"
     - Option A: "Add feature tests" → New feature tests to add
     - Option B: "Update status" → Change test status (Ready/In-Progress/Passed/Failed)
     - Option C: "View status" → Show test registry and current statuses
     - Option D: "Generate report" → Create summary report
   - If unclear: Ask user to clarify action
   - Status: ACTION_DETERMINED

2. **Step 2: Analyze Condition**
   - If "Add feature tests": proceed with **Path A**
   - If "Update status": proceed with **Path B**
   - If "View status": proceed with **Path C**
   - If "Generate report": proceed with **Path D**

### Path A - Add Feature Tests

**Step A.1:** Get Feature and Test Information
- Ask: "Feature ID?" (e.g., AB#12345)
- Ask: "Do you have Azure test case IDs or should we use placeholder format?"
- Retrieve: Test cases from source (specification, draft file, or input)
- Extract: Title, Steps, Category, Type (Manual/Automated), Priority

**Step A.2:** Organize Tests by Category
- Create sections in test-cases.md if not exists:
  - End-to-End Tests
  - Integration Tests
  - Database Tests
  - Edge Cases
  - Positive Test Cases
  - Negative Test Cases
- Group tests into appropriate categories
- Assign test ID format: TC#(feature)_(number)

**Step A.3:** Add Tests to Registry
- For each test case:
  - Add: Title, Category, Type, Priority
  - Add: Steps and expected results
  - Add: Azure ID if available
  - Add: Status = "Ready"
  - Add: Feature reference
- Validate: All tests added successfully
- Update: Timestamps and counts

**Step A.4:** Return Results
- Return: Feature ID
- Return: Number of tests added per category
- Return: Updated test-cases.md location
- Status: Tests added to registry

### Path B - Update Test Status

**Step B.1:** Get Status Update Information
- Ask: "Which test ID(s)?" (e.g., TC#001_001)
- Ask: "New status?" (Ready / In-Progress / Passed / Failed / Skipped)
- If Failed: Ask for failure reason and ticket reference
- Status: UPDATE_INFO_GATHERED

**Step B.2:** Update Test Status
- Locate test in test-cases.md
- Update: Status field
- Update: Timestamp
- Add: Notes/reason for status change
- If Failed: Link to bug ticket or defect ID
- Validate: Change saved

**Step B.3:** Return Results
- Return: Tests updated with new statuses
- Return: Updated test-cases.md
- Status: Status updates applied

### Path C - View Test Status

**Step C.1:** Generate Current Status Report
- Count: Total tests by category
- Count: Tests by status (Ready/In-Progress/Passed/Failed/Skipped)
- Calculate: Overall pass rate %
- Group: By feature ID
- Status: REPORT_GENERATED

**Step C.2:** Display Results
- Show: Summary statistics
- Show: Tests by category and status
- Show: Pass rate by feature
- Show: Any failed or skipped tests with reasons
- Status: REPORT_DISPLAYED

**Step C.3:** Return Results
- Return: Complete test registry status
- Return: Summary statistics
- Status: Status view complete

### Path D - Generate Test Report

**Step D.1:** Compile Test Data
- Read: test-cases.md
- Extract: All test information
- Count: Passed, Failed, Skipped by category
- Calculate: Coverage %, pass rate %
- Status: DATA_COMPILED

**Step D.2:** Create Report
- Generate: HTML report with charts
- Generate: Markdown summary
- Include: Feature breakdown
- Include: Category breakdown
- Include: Test history timeline
- Save: To reports/ directory
- Status: REPORT_CREATED

**Step D.3:** Return Results
- Return: Report file paths
- Return: Summary statistics
- Status: Report generated and saved

---

3. **Step 3: Final Validation**
   - Verify: test-cases.md is well-formatted
   - Verify: All Azure IDs linked correctly
   - Verify: No duplicate test IDs
   - Status: VALIDATION_COMPLETE

4. **Step 4: Return Summary**
   - Return: Action completed
   - Return: Number of tests affected
   - Return: Current registry statistics
   - Status: Test management action complete

## Notes
- test-cases.md is centralized source of truth for all test tracking
- Each feature adds tests, they accumulate in main (not replaced)
- Status tracking allows visibility into test execution and failures
- Failed tests don't block automation code merge (tracked as separate issues)
- Rate limiting tests must be in Integration Tests section
- Regular status updates keep team informed of test health
