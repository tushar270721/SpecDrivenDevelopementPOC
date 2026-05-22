---
name: create-specification-file
description: Generate a comprehensive SPECIFICATION.md file from feature details. Trigger: "Create specification", "Generate spec document"
argument-hint: "Provide feature ID and title (passed from fetch-feature-from-azure)"
---

## When to Use
Activate after feature is fetched from Azure DevOps and ready for detailed specification documentation.
This skill will create a comprehensive SPECIFICATION.md that includes requirements, test scenarios, and traceability.

## Preconditions
- Feature data retrieved from Azure (from fetch-feature-from-azure skill)
- Project directory structure exists
- specs/ folder already created or ready to create
- Feature ID provided

## Workflow

1. **Step 1: Prepare Specification Structure**
   - Create directory: `specs/feature-{id}/`
   - Example: `specs/feature-001/`
   - Initialize: empty SPECIFICATION.md file
   - Status: DIRECTORY_READY

2. **Step 2: Generate Specification Content**
   - Create frontmatter section:
     - Feature ID
     - Feature Title
     - Created Date
     - Last Updated
   - Create sections:
     - Feature Overview
     - Business Requirements
     - User Stories (parsed from acceptance criteria)
     - Acceptance Criteria
     - Test Scenarios (one per acceptance criterion)
     - Edge Cases
     - Data Requirements
     - API Requirements (if applicable)

3. **Step 3: Parse Acceptance Criteria into User Stories**
   - Extract each acceptance criterion
   - Convert to user story format: "As a [user], I want [action], so that [benefit]"
   - Add test scenario for each user story
   - Status: USER_STORIES_CREATED

4. **Step 4: Add Test Scenarios**
   - For each acceptance criterion, generate:
     - Scenario title
     - Preconditions
     - Steps (Given-When-Then style)
     - Expected result
     - Test data requirements
   - Status: TEST_SCENARIOS_ADDED

5. **Step 5: Identify Edge Cases**
   - Analyze acceptance criteria for boundary conditions
   - List edge cases:
     - Null/empty values
     - Maximum/minimum values
     - Special characters
     - Concurrent operations
     - Error conditions
   - Status: EDGE_CASES_IDENTIFIED

6. **Step 6: Identify API/Data Requirements**
   - If API feature: Extract API endpoints needed
   - If database: Identify tables and schema changes
   - Document data validation rules
   - Document rate limiting requirements (if applicable)
   - Status: REQUIREMENTS_IDENTIFIED

7. **Step 7: Write SPECIFICATION.md**
   - Write to: `specs/feature-{id}/SPECIFICATION.md`
   - Format: Clear markdown with sections and subsections
   - Include: Feature ID in file header
   - Include: Links to Azure DevOps feature
   - Validate: All required sections present
   - Status: SPECIFICATION_CREATED

8. **Step 8: Return Results**
   - Return: Feature ID
   - Return: Path to SPECIFICATION.md
   - Return: Number of test scenarios generated
   - Status: Specification file ready for work item creation

## Notes
- Keep specification focused on "what" and "why", not "how"
- Ensure acceptance criteria are clear and testable
- If feature incomplete: Note TODOs in specification for later refinement
- Specification is living document; can be updated as understanding evolves
- Reference quest_copilot standards for test scenario format
