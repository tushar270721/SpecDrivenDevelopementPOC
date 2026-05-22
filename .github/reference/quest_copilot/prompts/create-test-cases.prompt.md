# Create Test Cases from Feature / User Story

## Purpose
Generate comprehensive test cases from Features or User Stories with proper traceability, coverage analysis, and integration into Azure DevOps Test Plans.

## Input Parameters
- **Work Item ID**: Feature or User Story Id
- **Test Plan ID**: Target test plan for test case creation, or extract from provided URL
- **Test Suite ID**: Specific test suite, or extract from provided URL

## Workflow

## Phase 1: Analysis and Planning
1. **Retrieve Feature / User Story Information**: Use Azure DevOps MCP tool `mcp_ado_wit_get_work_item` to get the work item's title, description, and acceptance criteria.
2. **Run [`find-related-test-cases.prompt.md`](find-related-test-cases.prompt.md) prompt** to identify existing test cases related to the work item.
3. **Coverage Analysis**: Analyze existing test cases for coverage gaps against acceptance criteria. Identify which criteria are covered and which need new test cases.
4. **Update Impact Analysis**: For each existing test case found, analyze whether the test case steps still align with updated acceptance criteria

## Phase 2: Test Case Design
5. **Generate Test Case Plan**: Create a comprehensive table showing:
   - Test Case Title
   - Coverage Area (which acceptance criterion it covers)
   - Test Type (Functional, Integration, E2E, etc.)
   - Priority (High/Medium/Low)
   - Suggested Tags (based on existing tag patterns in the project)
   - Action Type (New/Update existing)
   - Update Details (for existing test cases, specify what changes are needed)

6. **Request User Input**:
   - Request confirmation before proceeding with test creation

## Phase 3: Implementation (Only after user confirmation)
7. **Create New Test Cases**: Generate test cases in the specified Test Plan with:
   - Clear steps and expected results
   - Proper linking to the Work Item using "Tests" relationship
8. **Update Existing Test Cases**: Modify relevant existing test cases affected by the Feature changes:
   - Update test steps to align with new or modified acceptance criteria
   - Modify expected results to reflect current requirements
   - Add new test steps for additional functionality
9. **Link to Suite**: Ensure all test cases (new and updated) are properly associated with the requirement-based test suite within the Test Plan.

## Quality Requirements
- All test cases must be clear, atomic, and directly traceable to acceptance criteria
- Use requirement-based test suites for automatic test-to-requirement association
- Follow existing framework tag patterns and naming conventions
- Ensure proper Azure DevOps work item relationships ("Tests" links to Feature)
- Present changes in a structured table format before implementation
- Only proceed with creation after explicit user confirmation

## Note on Requirement-Based Test Suites
Requirement-based test suites automatically pull in all Test Cases linked to a given Feature (user story). This approach:
- Reduces manual work of linking test suites and user stories
- Automatically includes new test cases added to the Feature
- Provides the simplest and most traceable test management structure
- Ensures bidirectional traceability between requirements and tests
- Works within the context of a specified Test Plan for better organization
