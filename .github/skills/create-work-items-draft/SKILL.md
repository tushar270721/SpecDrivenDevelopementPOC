---
name: create-work-items-draft
description: Generate draft User Stories and Test Cases from SPECIFICATION.md in draft staging file. Trigger: "Create draft work items", "Generate draft stories and tests"
argument-hint: "Provide feature ID (e.g., AB#12345)"
---

## When to Use
Activate after SPECIFICATION.md is created and ready for work item planning.
This skill will create draft User Stories and Test Cases in work-items-draft.md (not directly in Azure).

## Preconditions
- SPECIFICATION.md exists for feature
- work-items-draft.md file exists (or will be created)
- Feature ID known
- Test categorization standards defined (E2E, Integration, Database, Edge Cases)

## Workflow

1. **Step 1: Read SPECIFICATION.md**
   - Locate: `specs/feature-{id}/SPECIFICATION.md`
   - Extract: User Stories, Acceptance Criteria, Test Scenarios
   - Extract: Edge Cases, Data Requirements
   - Validate: File readable and contains required sections
   - Status: SPECIFICATION_READ

2. **Step 2: Create Draft User Stories**
   - For each user story in specification:
     - Generate: User Story title (derived from story text)
     - Generate: Description and acceptance criteria
     - Assign: Priority (High/Medium/Low based on criticality)
     - Create: Azure format (ready for later conversion)
     - Mark: Status = DRAFT
   - Create list: All user stories to be created
   - Status: USER_STORIES_DRAFTED

3. **Step 3: Create Draft Test Cases**
   - For each test scenario in specification:
     - Generate: Test Case title
     - Generate: Steps (Given-When-Then format)
     - Generate: Expected results
     - Categorize: Type (E2E, Integration, Database, Edge Case)
     - Assign: Manual or Automated
     - Assign: Priority
     - Mark: Status = DRAFT
   - Create list: All test cases to be created
   - Status: TEST_CASES_DRAFTED

4. **Step 4: Organize Test Cases by Category**
   - Group test cases:
     - End-to-End Tests
     - Integration Tests
     - Database Tests
     - Edge Cases
     - Positive Test Cases
     - Negative Test Cases
   - Status: TEST_CASES_ORGANIZED

5. **Step 5: Add to work-items-draft.md**
   - Open: work-items-draft.md (create if not exists)
   - Add section: Feature {id} - {title}
   - Add subsection: User Stories (DRAFT)
   - Add all drafted user stories with format:
     - Title
     - Description
     - Acceptance Criteria
     - Priority
     - Status: DRAFT
   - Add subsection: Test Cases (DRAFT)
   - Add all drafted test cases organized by category
   - Status: DRAFT_FILE_UPDATED

6. **Step 6: Format Draft Content**
   - Ensure consistent formatting
   - Include review markers: "DRAFT - Ready for team review"
   - Add timestamp: Date created
   - Add link: To feature in Azure DevOps
   - Add instruction: "Comment in draft section to approve/reject/modify"
   - Status: FORMATTING_COMPLETE

7. **Step 7: Return Results**
   - Return: Feature ID and Title
   - Return: Number of user stories drafted
   - Return: Number of test cases drafted (total)
   - Return: Breakdown by test type
   - Return: Path to work-items-draft.md
   - Status: Draft items ready for team review

## Notes
- All items marked DRAFT to prevent accidental Azure commits
- Draft file is source of truth before Azure push
- Team reviews in draft file (simpler than Azure UI)
- If acceptance criteria unclear: Mark in draft with [NEEDS_CLARIFICATION]
- Test cases follow quest_copilot standards for E2E/Integration/DB tests
- Rate limiting requirements noted in API-related tests
