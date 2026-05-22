---
name: create-automation-tests
description: Create E2E automation test scripts for a specific feature based on test cases. Trigger: "Create automation tests", "Generate test scripts", "Automate feature AB#12345"
argument-hint: "Provide feature ID (e.g., AB#12345)"
---

## When to Use
Activate after development code merged to main and test cases approved in Azure DevOps.
This skill will generate E2E automation test scripts for the specific feature.

## Preconditions
- Feature development code merged to main branch
- Test cases defined in test-cases.md and Azure DevOps
- automation/e2e-tests/ directory structure exists
- Testing framework configured (TestCafe, Cucumber, @evision/testing-framework-core)
- quest_copilot standards reviewed and understood

## Workflow

1. **Step 1: Get Feature ID**
   - Ask user: "Which feature ID?" (e.g., AB#12345)
   - Validate: Feature code exists in src/
   - Retrieve: Feature test cases from test-cases.md
   - Extract: E2E and Integration tests marked for automation
   - Status: FEATURE_IDENTIFIED

2. **Step 2: Analyze Test Cases**
   - Read: Test cases for feature from test-cases.md
   - Extract: Test titles, steps, expected results
   - Identify: UI flows and API calls
   - Identify: Data requirements and fixtures needed
   - Categorize: Which tests are E2E (UI-focused) vs API (80% focus)
   - Status: TEST_CASES_ANALYZED

3. **Step 3: Create Feature Test File**
   - Create directory: `automation/e2e-tests/tests/feature-{id}/`
   - Create file: `automation/e2e-tests/tests/feature-{id}-tests.js`
   - Initialize: Test framework imports and setup
   - Include: Jest/Mocha test structure
   - Status: TEST_FILE_CREATED

4. **Step 4: Generate Page Objects (if UI tests)**
   - For each UI screen in feature:
     - Create: `automation/e2e-tests/page-objects/feature-{id}-page.js`
     - Define: UI elements using testing framework components
     - Define: Methods for user interactions
     - Follow: quest_copilot Page Object Model standards
     - Include: Stable selectors (id, data-testid)
     - Status: PAGE_OBJECTS_CREATED

5. **Step 5: Generate Test Scripts**
   - For each test case in feature:
     - Create: Test function with descriptive name
     - Use: Gherkin-style comments (Given-When-Then)
     - Generate: Setup (preconditions)
     - Generate: Test steps (user actions)
     - Generate: Assertions (expected results)
     - Handle: Edge cases documented in test case
     - Include: Rate limiting checks (if API test)
     - Status: TEST_SCRIPT_CREATED

6. **Step 6: Add Test Data Fixtures**
   - Create: Test data if needed
   - Location: `automation/e2e-tests/fixtures/feature-{id}-data.js`
   - Include: Sample data for positive tests
   - Include: Edge case data
   - Include: Error condition data
   - Status: FIXTURES_CREATED

7. **Step 7: Follow Framework Standards**
   - Verify: No hardcoded waits (use framework conditions)
   - Verify: Assertions only in test steps
   - Verify: Layer separation (Page Object → Step → Test)
   - Verify: Naming conventions followed
   - Verify: Comments reference test case IDs
   - Status: STANDARDS_VERIFIED

8. **Step 8: Return Results**
   - Return: Feature ID and Title
   - Return: Test file path
   - Return: Number of test scripts created
   - Return: Page objects created (if any)
   - Return: Ready to commit to automation branch
   - Status: Automation tests created and ready for review

## Notes
- Create tests for NEW feature only (existing features' tests unchanged)
- 80% focus on API/Integration tests, 20% on UI tests
- Rate limiting validation required for all API tests
- Follow quest_copilot assertions.instructions.md for validation patterns
- Follow quest_copilot step-definitions.instructions.md for test organization
- All elements defined in Page Objects, not in test scripts
- No hardcoded waits - use framework's condition-based waits
- Commit to automation/feature-{id} branch, not directly to main
