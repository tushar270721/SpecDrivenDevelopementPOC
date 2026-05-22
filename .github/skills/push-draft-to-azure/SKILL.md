---
name: push-draft-to-azure
description: Push approved draft work items to Azure DevOps with full traceability and linking. Trigger: "Push to Azure", "Commit work items", "Publish approved items"
argument-hint: "Provide filter: all, approved, or specific feature ID (e.g., AB#12345)"
---

## When to Use
Activate after team has reviewed and approved draft work items in work-items-draft.md.
This skill will move approved items from draft to Azure DevOps with proper linking and traceability.

## Preconditions
- work-items-draft.md exists with draft items
- Azure DevOps MCP configured
- User has write permissions to Azure DevOps
- Feature ID exists in Azure (original feature)
- All approved items marked with status: APPROVED

## Workflow

1. **Step 1: Read Draft File**
   - Read: work-items-draft.md
   - Ask user: "Push filter: all-approved, feature-specific, or single-item?"
   - Filter results based on user choice
   - Extract: All items with status = APPROVED
   - Validate: All required fields present in each item
   - Status: DRAFT_READ_AND_FILTERED

2. **Step 2: Group by Type**
   - Separate into:
     - User Stories
     - Test Cases
   - For each item: Validate all required fields
   - If missing fields: Flag item and ask user to resolve
   - Status: ITEMS_GROUPED

3. **Step 3: Create User Stories in Azure**
   - Use Azure DevOps MCP: `mcp_ado_wit_create`
   - For each User Story:
     - Create: Work item type = User Story
     - Set: Title, Description, Acceptance Criteria
     - Set: Priority, Status = Ready
     - Set: Feature link: Relates to original feature ID
     - Capture: Returned item ID (e.g., AB#2001)
     - Status: CREATED
   - Track: All created IDs
   - Status: USER_STORIES_CREATED_IN_AZURE

4. **Step 4: Create Test Cases in Azure**
   - Use Azure DevOps MCP: `mcp_ado_wit_create`
   - For each Test Case:
     - Create: Work item type = Test Case
     - Set: Title, Steps, Expected Results
     - Set: Category (E2E/Integration/DB/Edge Case)
     - Set: Automated = Yes/No
     - Set: Priority, Status = Design
     - Set: Test Case link: Tests original feature ID
     - Capture: Returned item ID (e.g., TC#5001)
     - Status: CREATED
   - Track: All created IDs
   - Status: TEST_CASES_CREATED_IN_AZURE

5. **Step 5: Link Items Together**
   - Link User Stories to Test Cases where applicable:
     - User Story AB#2001 → Tests → Test Cases TC#5001, TC#5002, etc.
   - Link all items to original Feature ID
   - Validate: All links created successfully
   - Status: LINKS_CREATED

6. **Step 6: Update Draft File**
   - For each pushed item:
     - Update: Status = PUSHED
     - Add: Azure ID (AB#2001, TC#5001, etc.)
     - Add: Push timestamp
   - Save: Updated work-items-draft.md
   - Keep: For audit trail
   - Status: DRAFT_FILE_UPDATED

7. **Step 7: Return Results**
   - Return: Feature ID and Title
   - Return: Number of User Stories pushed
   - Return: Number of Test Cases pushed
   - Return: List of created Azure IDs
   - Return: Status of each push (Success/Failed)
   - Status: Items successfully pushed to Azure

## Notes
- If any item fails: Report error, document failure, continue with others
- Failed items remain in draft for retry later
- Links must be created in correct direction (Tests → Feature)
- All items should link back to original feature for traceability
- If Azure quota exceeded: Stop and report, ask user to retry later
- Draft file maintained as permanent audit trail
