# Test Case Generator Skill

## Purpose
Generate comprehensive test cases from feature specifications and requirements. Test cases cover functional, role-based, edge case, integration, performance, security, accessibility, and E2E scenarios. All test cases are created in draft mode for QA review before finalization.

## Trigger Phrases
- "Generate test cases for feature FE#12345"
- "Create test cases from specification FE#12345"
- "Generate testcase.md for FE#12345"
- "Create test cases using specification and feature FE#12345"

## Input Requirements
- Feature ID (e.g., FE#768248)
- Fetched feature data (title, description, acceptance criteria)
- SPECIFICATION.md file for the feature (if available)

## Workflow Phases

### PHASE 1: FETCH AND VALIDATE INPUTS
**Goal:** Gather all required input data

```
✅ Feature ID provided and valid
✅ Feature data fetched from Azure DevOps
✅ Feature includes: Title, Description, Acceptance Criteria, Comments
✅ SPECIFICATION.md exists (or use feature description if spec not available)
✅ Both documents reviewed for consistency
```

**Validation Checklist:**
- [ ] Feature description clear and complete?
- [ ] Acceptance criteria cover main functionality?
- [ ] Any ambiguities or gaps requiring clarification?
- [ ] Business context and user value understood?

---

### PHASE 2: ANALYZE REQUIREMENTS
**Goal:** Extract all testable requirements and scenarios

#### Step 1: Identify User Roles
```
From Feature/Spec:
- Extract all mentioned user roles (e.g., Admin, PHA User, Technical PM)
- Identify permissions and access levels
- Note role-specific workflows
```

#### Step 2: Extract Functional Requirements
```
From Acceptance Criteria:
- List all "must have" requirements
- Identify workflows and sequences
- Note system behaviors and state changes
- Extract validation rules and constraints
```

#### Step 3: Identify Integration Points
```
From Description/Technical Details:
- APIs or system integrations
- Data exchanges
- Third-party service calls
- Database operations
```

#### Step 4: Extract Performance & Security Requirements
```
From Specification:
- Performance targets (latency, throughput, etc.)
- Scalability requirements
- Security/authentication needs
- Data protection/privacy requirements
- Accessibility requirements
```

---

### PHASE 3: GENERATE TEST CASE CATEGORIES
**Goal:** Categorize requirements into logical test case groups

**Categories Used (Consolidated):**

1. **Functional Tests**
   - Positive scenario (happy path)
   - Negative scenarios (error handling)
   - Boundary value tests
   - Data validation tests

2. **Role-Based & Access Control Tests**
   - User role-specific workflows
   - Permission and access validation
   - Cross-role interactions

3. **Edge Cases & Exploratory Tests**
   - Unusual but valid scenarios
   - State-based edge cases
   - Concurrent user scenarios
   - Error recovery scenarios

4. **Integration Tests**
   - System component integration
   - API integration
   - Database operations
   - Third-party service integration

5. **Performance & Concurrency Tests**
   - Load/stress scenarios
   - Concurrent user operations
   - Large data set handling
   - Response time validation

6. **Security & Accessibility Tests**
   - Authentication/authorization
   - Data protection/encryption
   - Input validation (injection attacks)
   - Accessibility compliance (WCAG)

7. **End-to-End (E2E) Tests**
   - Complete user workflow scenarios
   - Cross-system workflows
   - Real-world business processes

---

### PHASE 4: GENERATE TEST CASES
**Goal:** Create detailed, testable test cases for each category

#### Test Case Template 

```markdown
# TC-FE735316-001

## Metadata

| Field         | Value                                      |
| ------------- | ------------------------------------------ |
| Test Case ID  | TC-FE735316-001                            |
| Priority      | High/Medium/Low                            |
| Automatable   | Yes/No                                     |
| Status        | Draft                                      |
| Review Status | Pending                                    |
| Reviewer      |                                            |
| Review Date   |                                            |

## Title

[Test Case Title - Persona can <action> <condition> (8-20 words, business-oriented)]

## Preconditions

1. [Setup condition 1]
2. [Setup condition 2]
3. [Setup condition 3]

## Test Data

| Field             | Value                 |
| ----------------- | --------------------- |
| Parameter Name 1  | Value 1               |
| Parameter Name 2  | Value 2               |
| Parameter Name 3  | Value 3               |

## Test Steps

| Step | Action                                                 | Expected Result                                                                    |
| ---- | ------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| 1    | [Persona] [verb] [what they do]                        | [Specific, validation-oriented outcome describing business impact or verification] |
| 2    | [Persona] [verb] [what they do]                        | [Specific, validation-oriented outcome]                                             |
| 3    | [Persona] [verb] [what they do]                        | [Specific, validation-oriented outcome]                                             |

## Reviewer Comments

*To be completed during review.*
```

**CRITICAL: UI Parser Compatibility Requirements**

**Markdown Heading Levels (MUST be followed for UI portal integration):**
- ✅ Test Case ID heading: Use `#` (H1 heading) → `# TC-FE735316-001`
- ✅ Section headers: Use `##` (H2 heading) → `## Metadata`, `## Title`, `## Test Steps`
- ❌ INCORRECT: Using `##` for test case ID → `## TC-FE735316-001` (will cause "No test cases found" error)

**Section Order & Structure (MUST be followed in exact sequence):**
1. `# TC-FE[FEATURE_ID]-###` (H1 heading - test case identifier)
2. Blank line
3. `## Metadata` (H2 heading - section header)
4. Blank line
5. Metadata table (with 7 fields: ID, Priority, Automatable, Status, Review Status, Reviewer, Review Date)
6. Blank line
7. `## Title` (H2 heading)
8. Title text
9. `## Preconditions` (H2 heading)
10. Preconditions list
11. `## Test Data` (H2 heading)
12. Test data table
13. `## Test Steps` (H2 heading)
14. Test steps table
15. `## Reviewer Comments` (H2 heading)
16. Reviewer comments placeholder

**Note for Non-Automatable Tests:** Add `Reason: [explanation why automation is not feasible]` as a new row in the Metadata table

#### Naming Convention for Test Cases

**Format:** `<Persona> can <action> <under condition>`

**Length:** 8-20 words

**Characteristics:**
- Starts with persona/user role (e.g., "Customer Integration Manager", "System API Manager", "Read-Only User", "Admin System Administrator", "Support Lead", "System Security Manager", "API Consumer")
- Includes capability verb "can"
- Describes the business action clearly
- Includes conditional context when relevant
- Uses business-oriented language, not technical jargon
- No forbidden words: submit, test, validate, check, verify, ensure (as main verbs)

**Examples:**
✅ "Customer Integration Manager can register a new integration client with valid inputs"
✅ "System API Manager can validate scopes with latency under 5ms"
✅ "Read-Only User cannot create new integration clients"
✅ "API Consumer can receive rate limit information in response headers"
✅ "Support Lead can rotate customer credentials on customer request"

❌ "Test client registration" (no persona, vague action)
❌ "Verify API response validation" (technical jargon)
❌ "Submit new integration client request" (forbidden verb)

**Persona List (7 Standard Personas):**
1. Customer Integration Manager
2. System API Manager
3. API Consumer
4. Read-Only User
5. Admin System Administrator
6. Support Lead
7. System Security Manager

---

### CRITICAL: UI PARSER COMPATIBILITY REQUIREMENTS

**Purpose:** Ensure test cases display correctly in the Test Case Review Portal UI

**Markdown Format Specifications (NON-NEGOTIABLE):**

1. **Test Case ID Heading Level:**
   - ✅ CORRECT: `# TC-FE739390-001` (H1 heading - use single #)
   - ❌ INCORRECT: `## TC-FE739390-001` (H2 heading - will cause "No test cases found" error)
   - WHY: UI parser searches for H1 headings to identify test case boundaries

2. **Metadata Section Structure:**
   - ✅ CORRECT: 
     ```
     # TC-FE739390-001
     
     ## Metadata
     
     | Field | Value |
     ```
   - ❌ INCORRECT:
     ```
     # TC-FE739390-001
     
     | Field | Value |
     ```
   - WHY: UI parser requires `## Metadata` header to properly identify and parse metadata table

3. **Section Header Consistency:**
   - All section headers (Title, Preconditions, Test Data, Test Steps, Reviewer Comments) must use `##` (H2)
   - Never use `#` for section headers other than test case ID
   - Never use `###` or higher levels unless explicitly needed

4. **Whitespace & Formatting:**
   - Blank line after test case ID heading before `## Metadata`
   - Blank line after each section header before content
   - Blank line after content before next section header
   - No extra blank lines (max 1 blank line between sections)

5. **Category Headers:**
   - Category section headers (e.g., "# FUNCTIONAL TEST CASES") use H1 heading
   - Separators before and after category sections: `---` (horizontal rule)

**Template Example (Correct Format):**
```markdown
# FUNCTIONAL TEST CASES

---

# TC-FE739390-001

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE739390-001 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

PHA Facilitator can create new What-If study with proper worksheet structure

## Preconditions

1. User is logged in...

## Test Data

| Field | Value |
|-------|-------|

## Test Steps

| Step | Action | Expected Result |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE739390-002

## Metadata
[continue format...]
```

**Validation Checklist (Before Creating Document):**
- [ ] Every test case ID is `# TC-...` (H1 heading)?
- [ ] Every test case has `## Metadata` section header?
- [ ] Metadata table immediately follows `## Metadata` with no extra content?
- [ ] All other section headers use `##` (H2)?
- [ ] No H3 or H4 headers used within test cases?
- [ ] Category headers use `#` (H1) with `---` separators?
- [ ] Proper blank line spacing throughout?
- [ ] File validated against working reference (FE735316-testcases.md)?

**Reference Implementation:** `.github/analysis/FE735316-testcases.md`
- Use this file as format template for all future test case generation
- Compare your generated file structure against this reference
- If not matching exactly, regenerate with corrected format

---

### PHASE 5: CREATE TEST CASES DOCUMENT
**Goal:** Generate comprehensive testcase.md file with all test cases in enterprise format

#### Document Structure:

```markdown
# Test Cases: FE#[FEATURE_ID] - [Feature Title]

**Feature:** [Feature Name]  
**Feature ID:** FE#[FEATURE_ID]  
**Total Test Cases:** [Number]  
**Created:** [Date]  
**Status:** DRAFT - Ready for QA Lead Review  

---

# FUNCTIONAL TEST CASES

---

# TC-FE[FEATURE_ID]-001

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE[FEATURE_ID]-001 |
| Priority | High/Medium/Low |
| Automatable | Yes/No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

[Persona] can [action] [condition]

## Preconditions

1. [Precondition 1]
2. [Precondition 2]

## Test Data

| Field | Value |
|-------|-------|
| Parameter | Value |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | [Action] | [Expected Result] |
| 2 | [Action] | [Expected Result] |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE[FEATURE_ID]-002

## Metadata

[Repeat for each test case]

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE[FEATURE_ID]-026

[Category continues with same structure]

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# TC-FE[FEATURE_ID]-041

[Category continues with same structure]

---

# INTEGRATION TEST CASES

---

# TC-FE[FEATURE_ID]-056

[Category continues with same structure]

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-FE[FEATURE_ID]-066

[Category continues with same structure]

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-FE[FEATURE_ID]-071

[Category continues with same structure]

---

# END-TO-END TEST CASES

---

# TC-FE[FEATURE_ID]-074

[Category continues with same structure]

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total Test Cases | [Number] |
| Functional Tests | [Number] |
| Role-Based Tests | [Number] |
| [etc...] | [Number] |

---

**Document Status:** DRAFT - Ready for QA Lead Review  
**Created:** [Date]  
**Last Updated:** [Date]
```

**CRITICAL: UI Parser Format Requirements (MUST follow):**
- Test Case ID: Use `# TC-FE[ID]-###` (H1 heading, NOT H2)
- Section Headers: Use `## [Section Name]` (H2 heading)
- Metadata: Always include `## Metadata` section header before metadata table
- Category Headers: Use `# [CATEGORY NAME]` (H1 heading) with `---` separators
- Spacing: Blank line after each heading before content

#### File Naming & Test ID Format:
- **File Name:** `.github/analysis/FE[FEATURE_ID]-testcases.md` (e.g., `FE735316-testcases.md`)
- **Prefix Convention:** Use `FE#` instead of `AB#` (FE = Feature/Frontend reference)
- **Test Case IDs:** `TC-FE[FEATURE_ID]-[###]` (e.g., `TC-FE735316-001`, `TC-FE735316-078`)
- **NO `#` symbol in IDs:** Use `TC-FE735316-001` not `TC-FE#735316-001`

#### Seven Standard Test Categories:
1. **FUNCTIONAL TEST CASES** (20-25 cases: TC-001 → TC-025)
   - Positive path (happy path with valid inputs)
   - Negative scenarios (error handling)
   - Data validation
   - Boundary conditions

2. **ROLE-BASED & ACCESS CONTROL TEST CASES** (10-15 cases: TC-026 → TC-040)
   - Permission enforcement
   - Multi-tenant isolation
   - Role-specific workflows
   - Unauthorized access prevention

3. **EDGE CASES & EXPLORATORY TEST CASES** (12-18 cases: TC-041 → TC-058)
   - Unicode and special character handling
   - Large data processing
   - Concurrent request scenarios
   - Recovery and retry logic

4. **INTEGRATION TEST CASES** (10-16 cases: TC-059 → TC-074)
   - Multi-service workflows
   - Data consistency across services
   - Audit logging and event tracking
   - Backend integration scenarios

5. **PERFORMANCE & CONCURRENCY TEST CASES** (6-10 cases: TC-075 → TC-084)
   - Latency SLA validation
   - Throughput and load testing
   - Concurrent client handling
   - Memory and resource stability

6. **SECURITY & ACCESSIBILITY TEST CASES** (4-8 cases: TC-085 → TC-092)
   - Signature validation
   - Secret protection and masking
   - Timing attack prevention
   - WCAG accessibility compliance

7. **END-TO-END TEST CASES** (8-15 cases: TC-065+ depending on category distribution)
   - Complete user workflows (start to finish)
   - Real-world business scenarios with multiple user roles
   - Multi-step processes spanning multiple system components
   - Cross-system workflows and integrations
   - End-to-end data flow from input to output
   - Complex business logic across multiple modules
   - Success and failure paths in real scenarios

#### Metadata Table Structure (7 Required Fields):
```
| Field         | Value                     |
| ------------- | ------------------------- |
| Test Case ID  | TC-FE[ID]-[###]          |
| Priority      | High/Medium/Low          |
| Automatable   | Yes/No                   |
| Status        | Draft                    |
| Review Status | Pending                  |
| Reviewer      | [Name or blank]          |
| Review Date   | [YYYY-MM-DD or blank]    |
```

**Additional Field for Non-Automatable Tests:**
```
| Reason        | [Explanation why manual] |
```

#### Section Structure (Required Order):
1. Metadata table
2. Title (as section header, not in metadata)
3. Preconditions (numbered list)
4. Test Data (structured table)
5. Test Steps (Step | Action | Expected Result)
6. Reviewer Comments (placeholder)

#### Expected Result Guidelines:
- **Specific and Validation-Oriented:**
  - ❌ Generic: "Request sent", "Form opens", "Data saved", "Status changed"
  - ✅ Specific: "The API request is transmitted to the APIm gateway", "The form displays with all required fields"

- **Describe Business Outcomes:**
  - Example: "The newly created integration client appears in the Integration Clients list with status 'Active'"

- **Include Validation Details:**
  - Example: "The HMAC-SHA256 signature is calculated correctly using the API secret and request payload"

- **System Behavior Clarity:**
  - Example: "The APIm returns HTTP 403 Forbidden due to subscription entitlement failure"

---

### PHASE 6: PREPARE FOR AZURE DEVOPS IMPORT
**Goal:** Ensure test cases follow QA governance guidelines

#### E2E Testing Guidelines (from QA Governance):
```
✅ E2E Tests represent real customer scenarios
✅ E2E tests follow complete workflow (no shortcuts)
✅ E2E tests include login/authentication
✅ Tests are named from user perspective (Persona + Action + Outcome)
✅ Each test is independent and can run standalone
✅ Tests respect test pyramid (fewer E2E, more unit/integration)
```

### PHASE 6: APPLY TESTING BEST PRACTICES
**Goal:** Ensure test cases follow QA governance guidelines

#### Quality Checklist:
```
✅ Test case names follow standard convention: [Persona] can [action] [condition]
✅ All acceptance criteria covered by test cases
✅ All metadata fields properly filled (7 required fields)
✅ Automatable/Not Automatable is justified with Reason field if manual
✅ Integration tests are not bundled as E2E tests
✅ Tests are linked to correct feature (FE#[ID])
✅ Clear, specific pass/fail criteria defined (no generic statements)
✅ Expected Results are validation-oriented and business-focused
✅ Each test case is independent and executable standalone
✅ Test pyramid respected (more functional, fewer E2E)
```

#### Test Distribution Guidelines:
```
Recommended Distribution (85-95 test cases):
- Functional Tests: ~25 (26%)
- Role-Based & Access Control: ~12 (13%)
- Edge Cases & Exploratory: ~15 (16%)
- Integration Tests: ~15 (16%)
- Performance & Concurrency: ~8 (8%)
- Security & Accessibility: ~5 (5%)
- End-to-End Tests: ~10-12 (11-13%)

NOTE: E2E test count should be increased when:
- Feature has complex multi-step user journeys
- Multiple user roles interact within feature
- Feature integrates multiple system components
- Business value heavily depends on complete workflow success
```

#### E2E Testing Guidelines (from QA Governance):
```
✅ E2E Tests represent real customer scenarios and business processes
✅ E2E tests follow complete workflow from start to finish (no shortcuts)
✅ E2E tests include authentication and authorization (full user journey)
✅ Tests validate end-to-end data flow and state changes
✅ Tests span multiple system modules and components
✅ Tests verify cross-system integrations and dependencies
✅ Tests are named from user perspective (Persona + Complete Workflow)
✅ Each test is independent and can run in isolation
✅ Each test represents a valuable business outcome
✅ Tests cover both happy path and critical failure scenarios
✅ Tests include optional multi-user scenarios where applicable
```

#### E2E Test Scenario Categories (Generate 8-15 tests covering these patterns):

**1. Complete Happy Path Workflows (3-4 tests)**
- User logs in → Creates entity → Fills data → Submits → Receives confirmation
- Example: "Customer Integration Manager completes full integration client onboarding from registration to approval"

**2. Multi-Role Workflows (2-3 tests)**
- Role A initiates → Role B reviews → Role C approves → Returns to Role A
- Example: "Study Owner creates What-If study, Reviewer approves, Recommendation linked to action plan"

**3. Complex Business Process Workflows (2-3 tests)**
- Feature integrated with 3+ system components
- Example: "Import XML study triggers canonical matching, risk validation, audit logging, and review workflow sequentially"

**4. Critical Failure & Recovery (1-2 tests)**
- Happy path interrupted by critical failure → Recovery action → Completion
- Example: "User attempts batch import, encounters risk matrix mismatch, corrects XML, re-imports successfully"

**5. Cross-System Data Flow (1-2 tests)**
- Data created in Feature A → Flows to Feature B → Visible in Feature C → Updates Feature D
- Example: "Recommendation created in What-If study → Appears in Recommendation List → Used to create action item"

**6. Optional Multi-User Scenario (0-1 tests)**
- Multiple concurrent users interacting with feature
- Example: "Two facilitators collaboratively edit study, Team Lead reviews, Manager approves, System integrates changes"

#### E2E Test Naming Convention:
```
[Persona(s)] can complete [complete business process] from [start state] to [end state] [including outcome]

Examples (Good):
✅ "PHA Facilitator can complete entire What-If study workflow from creation to reviewer approval"
✅ "Study Owner and Reviewer collaborate to import XML study with risk validation and final approval"
✅ "Integration Manager completes full integration client registration, configuration, and production activation"
✅ "Multiple team members conduct collaborative PHA study session with session recording and artifact generation"

Examples (Poor - too narrow or not E2E):
❌ "Create study" (not E2E, just one step)
❌ "Review study" (not complete workflow)
❌ "Import XML" (not E2E - missing validation, approval, integration)
```

---

### PHASE 7: REVIEW AND APPROVAL
**Goal:** Implement enterprise review and approval workflow

#### Review Checklist (for QA Lead):

**Completeness:**
- [ ] All acceptance criteria covered by test cases?
- [ ] All ~78 test cases complete with full metadata?
- [ ] No critical user scenarios missing?
- [ ] Test cases organized into 7 categories?
- [ ] Each test has: Metadata, Title, Preconditions, Test Data, Steps, Reviewer Comments?

**Quality:**
- [ ] Test steps are clear, numbered, and executable?
- [ ] Expected results are specific and testable (pass/fail)?
- [ ] No ambiguous, vague, or generic test cases?
- [ ] Automation decisions justified with Reason field if manual?
- [ ] Non-automatable tests have Reason field in metadata?

**Format & Convention:**
- [ ] Test names follow: "[Persona] can [action] [condition]"?
- [ ] All test IDs follow format: TC-FE[ID]-[###] (e.g., TC-FE735316-001)?
- [ ] NO `#` symbol in test case IDs?
- [ ] Metadata table has 7 fields (ID, Priority, Automatable, Status, Review Status, Reviewer, Review Date)?
- [ ] Test steps table has 3 columns (Step | Action | Expected Result)?
- [ ] Title as section header (not in metadata)?

**Azure DevOps Readiness:**
- [ ] All test cases ready for import?
- [ ] Metadata can be directly mapped to Azure fields?
- [ ] Relationships to feature FE#[ID] established?
- [ ] Ready for next phase (automation/execution)?

#### Review Status Workflow:
```
DRAFT → [QA Lead Review] → REVIEWED → [QA Approval] → APPROVED → Ready for Azure Import
```

---

### PHASE 8: OUTPUT AND DELIVERABLES

---

### PHASE 8: OUTPUT AND DELIVERABLES
**Goal:** Generate production-ready testcase.md file

**Output File:**
```
File: .github/analysis/FE[FEATURE_ID]-testcases.md
Example: .github/analysis/FE735316-testcases.md
Format: Markdown with structured metadata tables
Contains: All 78+ test cases organized by 7 categories
Status: DRAFT (awaiting QA lead review and approval)
Size: Approximately 100-200KB (comprehensive enterprise format)
```

**Deliverables:**
1. ✅ Single testcase.md file with all test cases
2. ✅ Organized by 7 test categories (Functional, Role-Based, Edge Cases, Integration, Performance, Security, E2E)
3. ✅ Each test with full metadata: ID, Priority, Automatable, Status, Review Status, Reviewer, Review Date
4. ✅ Complete documentation: Title, Preconditions, Test Data, Steps, Reviewer Comments
5. ✅ Non-automatable tests have Reason field in metadata
6. ✅ Ready for QA review and approval
7. ✅ Formatted for Azure DevOps import (post-review)

**File Naming Convention:**
- **Old Format:** `AB[FEATURE_ID]-testcases.md` (deprecated)
- **New Format:** `FE[FEATURE_ID]-testcases.md` (current standard)
- **Example:** `FE735316-testcases.md`

---

## Integration with SDD Workflow

**Previous Steps:**
1. Fetch feature from Azure (fetch-feature-from-azure)
2. Requirement analysis (requirement-analysis)
3. Create specification (create-specification-file)

**This Step:** Generate test cases (test-case-generator)

**Next Steps:**
1. Review & finalize test cases (manual - QA Lead)
2. Import to Azure DevOps
3. Create automation tests (automation framework)
4. Execute tests (CI/CD pipeline)

---

## Best Practices & Guidelines

### Test Case Naming Convention
✅ **DO:**
- Use format: "[Persona] can [action] [condition]"
- Include persona/role in name
- Be specific and business-oriented
- Follow 8-20 word guideline
- Use present tense with capability verb "can"
- Example: "Customer Integration Manager can register a new integration client with valid inputs"

❌ **DON'T:**
- Use technical jargon: "Backend validates API response"
- Use passive voice: "XML file should be validated"
- Be vague: "Test the import feature"
- Use forbidden verbs as main action: submit, test, validate, check, verify, ensure
- Include special characters or abbreviations in name

### Automatable vs. Non-Automatable Guidelines

**Automatable (Yes):**
- UI workflows with stable element selectors
- API-based tests and integration workflows
- Data validation and constraint testing
- Performance/load/stress tests with automated monitoring
- Security scanning and automated security tests
- Positive and negative path testing

**Non-Automatable (No), with Reason field:**
- Manual security penetration testing and ethical hacking
- Accessibility testing requiring screen reader verification
- Visual regression testing requiring human eye review
- Exploratory testing scenarios (exploratory by nature = manual)
- Large file handling (>100MB) - resource intensive
- Browser/OS compatibility edge cases needing manual verification
- User experience and UI feel assessment

**Example Reason Field:**
```
Reason: Large file testing (>1GB) requires manual resource allocation and monitoring
Reason: Email delivery verification requires access to email system or mailbox
Reason: Accessibility testing with screen reader requires manual verification
```

---

## Success Criteria

✅ **Test cases are successful if:**
- All acceptance criteria covered
- Each test case is independent and executable
- Clear, specific pass/fail criteria defined (no generic statements)
- Naming convention followed: "[Persona] can [action] [condition]"
- Automation decisions justified
- No ambiguities or gaps
- Metadata complete (7 required fields)
- E2E tests are true end-to-end workflows spanning multiple system components
- E2E tests represent high-value business outcomes (8-15 per feature)
- Test pyramid respected with appropriate E2E coverage
- Ready for QA review and approval
- Formatted for Azure DevOps import

---

## Implementation Notes

**UI Parser Compatibility (CRITICAL - MUST FOLLOW):**
- Test Case ID must use `#` (H1 heading): `# TC-FE735316-001` ← Correct
- Test Case ID must NOT use `##` (H2 heading): `## TC-FE735316-001` ← Will fail in UI
- Metadata section must have header: `## Metadata` before the metadata table
- All section headers must use `##` (H2): `## Title`, `## Preconditions`, `## Test Steps`
- Category headers must use `#` (H1): `# FUNCTIONAL TEST CASES`
- Proper blank line spacing between sections (exactly 1 blank line)
- VALIDATE against FE735316-testcases.md reference file before final delivery

**Why This Matters:**
- UI Parser searches for H1 headings (`#`) to identify test case boundaries
- If test case IDs use H2 (`##`), parser cannot find test cases → "No test cases found" error
- If `## Metadata` header is missing, parser cannot extract metadata table
- This is why first FE739390 generation failed in UI

**Quality Checks Before File Creation:**
- [ ] Every test case ID uses `#` not `##`
- [ ] Every test case has `## Metadata` section header
- [ ] Metadata table has exactly 7 fields (ID, Priority, Automatable, Status, Review Status, Reviewer, Review Date)
- [ ] All other section headers use `##`
- [ ] Category headers use `#` with `---` separators
- [ ] Test file structure matches FE735316-testcases.md format exactly
- [ ] File opens in UI portal without "No test cases found" error

- **Single Deliverable:** One testcase.md file containing all test cases (typically 70-80)
- **File Naming:** Use FE# prefix (not AB#)
- **Test ID Format:** TC-FE[FEATURE_ID]-[###] (e.g., TC-FE735316-001)
- **NO `#` in IDs:** Use TC-FE735316-001 (not TC-FE#735316-001)
- **Consistent Metadata:** All tests have same 7 metadata fields
- **Non-Automatable Handling:** Document reasons in Reason field of metadata
- **Status Workflow:** All tests start as Status=Draft, Review Status=Pending
- **Ready for Next Steps:** After QA approval → Azure DevOps import → Automation implementation → Execution

---

## Notes

- This skill generates test cases in DRAFT mode for QA review
- Only ONE testcase.md file is created per feature (no additional files)
- All test cases follow Azure DevOps standard format
- Expected Results must be specific and validation-oriented (not generic statements)
- Automation status documented for each test case
- Test cases can be imported directly to Azure DevOps Test Cases
- All 7 standard personas should be represented across test cases
- File prefix FE# indicates feature/frontend reference (standardized from AB# format)

### 2. Test Case Structure & Metadata
- **Metadata Table:** ID, Title, Priority, Automatable, Status, Review Status, Reviewer, Review Date
- **Description:** Clear narrative of what is being tested
- **Preconditions:** Numbered list of required setup
- **Test Data:** Structured table of parameters and values
- **Test Steps:** Three-column table (Step | Action | Expected Result)
- **Expected Outcome:** Bullet-point list of success criteria
- **Reviewer Comments:** Space for QA feedback
- **Non-Automatable Reason:** Explanation for tests marked as not automatable

### 3. Test Organization
- **Functional Tests:** 20-25 cases (positive/negative scenarios)
- **Role-Based & Access Control:** 10-15 cases (permission and multi-tenant validation)
- **Edge Cases & Exploratory:** 15-20 cases (boundary conditions, special scenarios)
- **Integration Tests:** 12-16 cases (multi-service workflows)
- **Performance & Concurrency:** 6-10 cases (latency, throughput SLA)
- **Security & Accessibility:** 4-6 cases (hardening, compliance)
- **End-to-End:** 8-15 cases (complete business workflows spanning multiple components and user roles)

