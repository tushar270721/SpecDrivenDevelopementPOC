---
name: run-automation-tests
description: Execute E2E automation tests for a feature with options for new-only or full regression. Trigger: "Run automation tests", "Execute tests", "Test feature AB#12345"
argument-hint: "Provide feature ID and scope (new-only or full-regression)"
---

## When to Use
Activate after automation tests created and committed to automation branch.
This skill will execute tests and prepare results for reporting.

## Preconditions
- Automation test code exists in automation/e2e-tests/
- Feature test file created: automation/e2e-tests/tests/feature-{id}-tests.js
- Testing framework configured and working
- Test environment accessible
- Feature ID provided

## Workflow

1. **Step 1: Get User Input**
   - Ask user: "Feature ID?" (e.g., AB#12345)
   - Ask user: "Test scope?"
     - Option A: "new-only" → Run only this feature's tests (5-10 minutes)
     - Option B: "full-regression" → Run all feature tests (20-30 minutes)
   - Validate: Feature test file exists
   - Status: INPUT_GATHERED

2. **Step 2: Analyze Condition**
   - If "new-only": proceed with **Path A**
   - If "full-regression": proceed with **Path B**

### Path A - New Feature Tests Only (RECOMMENDED)

**Step A.1:** Locate Feature Test File
- Find: `automation/e2e-tests/tests/feature-{id}-tests.js`
- Validate: File exists and is readable
- Load: Test configuration
- Verify: Feature test file can run independently
- Status: TEST_FILE_LOCATED

**Step A.2:** Prepare Test Environment
- Set: Environment variables
- Set: Browser configuration
- Set: Test timeout values
- Verify: Test data fixtures available
- Status: TEST_ENV_READY

**Step A.3:** Execute Feature Tests
- Run: `npm run test -- feature-{id}-tests.js`
- Capture: Test execution logs
- Capture: Pass/Fail results
- Capture: Screenshots on failure
- Capture: Execution time per test
- Expected duration: 5-10 minutes
- Status: TESTS_EXECUTED

**Step A.4:** Collect Results
- Compile: Test results JSON
- Extract: Passed count, Failed count, Skipped count
- Extract: Failed test details with messages
- Extract: Screenshot paths for failed tests
- Compile: Execution logs
- Status: RESULTS_COLLECTED

### Path B - Full Regression Tests

**Step B.1:** Locate All Test Files
- Find: All `automation/e2e-tests/tests/feature-*-tests.js` files
- Validate: All files exist and readable
- Load: Test configuration
- Order: Tests by feature creation date (cumulative)
- Status: ALL_TEST_FILES_LOCATED

**Step B.2:** Prepare Test Environment
- Set: Environment variables
- Set: Browser configuration
- Set: Test timeout values
- Verify: All test data fixtures available
- Status: TEST_ENV_READY

**Step B.3:** Execute All Tests
- Run: `npm run test -- feature-*-tests.js`
- Capture: Test execution logs
- Capture: Pass/Fail results per feature
- Capture: Screenshots on failure
- Capture: Execution time per test and per feature
- Expected duration: 20-30 minutes
- Status: ALL_TESTS_EXECUTED

**Step B.4:** Collect Results
- Compile: Test results JSON (all features)
- Extract: Passed/Failed/Skipped per feature
- Extract: Overall pass rate %
- Extract: Failed test details with messages
- Extract: Screenshot paths for failed tests
- Compile: Full execution logs
- Status: RESULTS_COLLECTED

---

3. **Step 3: Delegate to generate-test-report**
   - Delegate to [generate-test-report](../generate-test-report/SKILL.md) skill
   - Pass: Test execution results, Feature ID, Test scope
   - Receive: Generated report file paths (MD and HTML)
   - Status: DELEGATION_COMPLETE

4. **Step 4: Update test-cases.md**
   - Read: Test results from execution
   - Update: Each test case status in test-cases.md
     - If Passed: Status = PASSED, timestamp = execution time
     - If Failed: Status = FAILED, add failure reason
     - If Skipped: Status = SKIPPED, add skip reason
   - Save: Updated test-cases.md
   - Status: TEST_CASES_UPDATED

5. **Step 5: Return Results**
   - Return: Feature ID and Title
   - Return: Test scope used (new-only or full-regression)
   - Return: Summary: X passed, Y failed, Z skipped
   - Return: Overall pass rate %
   - Return: Test report file paths
   - Return: Any failed test details with fix suggestions
   - Status: Tests executed and results reported

## Notes
- New-only is recommended for feature development (faster feedback)
- Full-regression useful before release (ensure no regressions)
- Failed tests don't block automation code merge (tracked separately)
- If test fails: Check logs and screenshots in reports/
- Rate limiting tests must pass (no 429 errors without retry)
- If environment down: Skip tests and report error with retry option
- Test execution time helps track performance trends
