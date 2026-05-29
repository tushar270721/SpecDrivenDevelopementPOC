# Test Case Generator Skill

## Purpose
Generate comprehensive test cases from feature specifications and requirements. Test cases cover functional, role-based, edge case, integration, performance, security, accessibility, and E2E scenarios. All test cases are created in draft mode for QA review before finalization.

## Trigger Phrases
- "Generate test cases for feature AB#12345"
- "Create test cases from specification AB#12345"
- "Generate testcase.md for AB#12345"
- "Create test cases using specification and feature AB#12345"

## Input Requirements
- Feature ID (e.g., AB#768248)
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

#### Test Case Template (Enterprise Format)

```markdown
# TC-AB735316-001

## Metadata

| Field         | Value                                      |
| ------------- | ------------------------------------------ |
| Test Case ID  | TC-AB735316-001                            |
| Title         | [Test Case Title]                          |
| Priority      | High/Medium/Low                            |
| Automatable   | Yes/No                                     |
| Status        | Draft                                      |
| Review Status | Pending/Reviewed/Approved                  |
| Reviewer      | [QA Lead Name]                             |
| Review Date   | [YYYY-MM-DD]                               |

## Description

[Clear, concise description of what is being tested and why. Include context about which feature component is being validated.]

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

| Step | Action                              | Expected Result                      |
| ---- | ----------------------------------- | ------------------------------------ |
| 1    | [What the tester does]              | [What should happen]                 |
| 2    | [What the tester does]              | [What should happen]                 |
| 3    | [What the tester does]              | [What should happen]                 |

## Expected Outcome

* [Success criterion 1]
* [Success criterion 2]
* [Success criterion 3]

## Reviewer Comments

*To be completed during review.*
```

**Note for Non-Automatable Tests:** Add `Reason: [explanation why automation is not feasible]` in Metadata table

#### Naming Convention for Test Cases

**Format:** `[Persona/Role] [Business Action] - [Expected Outcome]`

**Examples:**
- Admin creates a new safeguard class and sees it in the master list
- PHA User imports XML study with mismatched risk matrix and receives error
- System processes 1000 concurrent import requests without performance degradation
- Unauthenticated user attempts to upload XML file and access is denied
- User with view-only role cannot edit imported study properties

**Rules:**
- Use present tense
- Include user/role at the beginning
- Describe the action and expected outcome
- No technical jargon
- Clear business context

---

### PHASE 5: CREATE TEST CASES DOCUMENT
**Goal:** Generate comprehensive testcase.md file with all test cases in enterprise format

#### Document Structure:

```markdown
# Test Cases: AB#[FEATURE_ID] - [Feature Title]

---

# [CATEGORY 1: Descriptive Name]

---

# TC-AB[FEATURE_ID]-001

## Metadata

| Field         | Value                     |
| ------------- | ------------------------- |
| Test Case ID  | TC-AB[FEATURE_ID]-001     |
| Title         | [Test Case Title]         |
| Priority      | High/Medium/Low           |
| Automatable   | Yes/No                    |
| Status        | Draft                     |
| Review Status | Pending                   |
| Reviewer      |                           |
| Review Date   |                           |

## Description

[Clear narrative of what is being tested and why]

## Preconditions

1. [Precondition 1]
2. [Precondition 2]
3. [Precondition 3]

## Test Data

| Field             | Value          |
| ----------------- | -------------- |
| Parameter Name    | Parameter Value|

## Test Steps

| Step | Action                              | Expected Result                      |
| ---- | ----------------------------------- | ------------------------------------ |
| 1    | [Action description]                | [Expected result]                    |
| 2    | [Action description]                | [Expected result]                    |

## Expected Outcome

* [Outcome criterion 1]
* [Outcome criterion 2]
* [Outcome criterion 3]

## Reviewer Comments

*To be completed during review.*

---

# TC-AB[FEATURE_ID]-002

[Repeat metadata template for each test case]
```

#### Key Format Features:
- **No checkboxes** in structured format
- **Individual test case sections** with level-2 headings per category, level-1 heading per test
- **Metadata table** with consistent fields (ID, Title, Priority, Automatable, Status, Review Status, Reviewer, Review Date)
- **Preconditions** as numbered list
- **Test Data** as structured table
- **Test Steps** as three-column table (Step | Action | Expected Result)
- **Expected Outcome** as IMPORT
**Goal:** Prepare test cases for Azure DevOps import with proper formatting

#### Test Case Categorization for Azure DevOps:

**Categories (7 Standard Types):**
1. **Functional Tests** - Core feature functionality (positive & negative)
2. **Role-Based & Access Control** - Permission validation and user roles
3. **Edge Cases & Exploratory** - Boundary conditions and special scenarios
4. **Integration Tests** - Multi-service and component interactions
5. **Performance & Concurrency** - Load, latency, and concurrent operations
6. **Security & Accessibility** - Security hardening and compliance
7. **End-to-End (E2E)** - Complete user workflows

#### Metadata Mapping for Azure DevOps:

| Skill Field | Azure DevOps Field |
| --- | --- |
| Test Case ID | Work Item ID (auto-generated) |
| Title | Title |
| Priority | Priority (1=High, 2=Medium, 3=Low) |
| Status | State (Draft/Active) |
| Review Status | Custom Field: ReviewStatus |
| Automatable | Custom Field: Automatable (Yes/No) |
| Reviewer | Assigned To |
| Category | Custom Field: TestCategory |

#### Test Steps Format for Azure DevOps:
- **Action:** Structured step description
- **Expected Result:** Clear pass/fail criteria
- Each step in separate row in Test Case Detailsp 1:
Action: [What the user does]
Expected Result: [What should happen]

Step 2:
Action: [What the user does]
Expected Result: [What should happen]
```

---

### PHASE 7: APPLY TESTING BEST PRACTICES
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

#### Quality Checklist:
```
✅ Test case names follow standard convention
✅ All acceptance criteria covered by test cases
✅ No "Unspecified" values in test type/category
✅ Automatable/Not Automatable is justified
✅ Integration tests are not bundled E2E tests
✅ Tests are linked to feature
✅ Clear pass/fail criteria defined
✅ Automation tools correctly assigned
```

#### Test Pyramid Balance:
```
Recommended Distribution:
- Unit Tests: 50% (Dev responsibility)
- Integration Tests: 30% (Dev/QA)
- E2E Tests: 20% (QA responsibility)

For this feature:
- Functional/Positive/Negative: 40%
- Integration: 20%
- E2E: 20%
- Security/Performance/Edge Cases: 20%
```

---

### PHASE 8: GENERATE TEST CASES DOCUMENT
**Goal:** Create finalFINAL TEST CASES DOCUMENT
**Goal:** Create production-ready testcase.md file with all 78+ test cases

#### File Structure:

```
.github/analysis/AB[FEATURE_ID]-testcases.md

Contents:
1. Document Header
   - Feature ID & Title
   - Total Test Cases count by category
   
2. Test Cases Organized by Category
   - FUNCTIONAL TEST CASES (22 tests: TC-001 → TC-022)
   - ROLE-BASED & ACCESS CONTROL (12 tests: TC-023 → TC-034)
   - EDGE CASES & EXPLORATORY (16 tests: TC-035 → TC-050)
   - INTEGRATION TESTS (14 tests: TC-051 → TC-064)
   - PERFORMANCE & CONCURRENCY (8 tests: TC-065 → TC-072)
   - SECURITY & ACCESSIBILITY (4 tests: TC-073 → TC-076)
   - END-TO-END TESTS (2 tests: TC-077 → TC-078)
   
3. Each Test Case Contains:
   - Metadata table (ID, Title, Priority, Automatable, Status, Review Status, Reviewer, Review Date)
   - Description section
   - Preconditions (numbered list)
   - Test Data (structured table)
   - Test Steps (table: Step | Action | Expected Result)
   - Expected Outcome (bullet points)
   - Reviewer Comments section
   - For Non-Automatable: Reason field explaining why
```

#### Test Case Distribution Template:
```
| Category | Range | Count | Notes |
|----------|-------|-------|-------|
| Functional Tests | TC-001 → TC-022 | 22 | Happy path, negative scenarios, validation |
| Role-Based & Access | TC-023 → TC-034 | 12 | Permission enforcement, multi-tenant |
| Edge Cases | TC-035 → TC-050 | 16 | Boundary conditions, special scenarios |
| Integration | TC-051 → TC-064 | 14 | Multi-service workflows, backend sync |
| Performance | TC-065 → TC-072 | 8 | Latency SLA, throughput, concurrency |
| Security & Accessibility | TC-073 → TC-076 | 4 | HMAC validation, WCAG compliance |
| E2E | TC-077 → TC-078 | 2 | Complete user workflows |
| **TOTAL** | | **78** | **All test cases with full metadata** |

---
REVIEW AND APPROVAL
**Goal:** Implement enterprise review and approval workflow

#### Review Checklist (for QA Lead):

**Completeness:**
- [ ] All acceptance criteria covered by test cases?
- [ ] All 78 test cases complete with full metadata?
- [ ] No critical user scenarios missing?
- [ ] Test cases organized into 7 categories?
- [ ] Each test has: Description, Preconditions, Test Data, Steps, Expected Outcome?

**Quality:**
- [ ] Test steps are clear, numbered, and executable?
- [ ] Expected results are testable (pass/fail)?
- [ ] No ambiguous or vague test cases?
- [ ] Automation decisions justified with reasons?
- [ ] Non-automatable tests have Reason field?

**Compliance:**
- [ ] E2E tests are true end-to-end workflows?
- [ ] Test pyramid respected (fewer E2E, more functional)?
- [ ] Linked to correct feature (AB#[ID])?
- [ ] Priority levels appropriate (High/Medium/Low)?
- [ ] Metadata table format consistent across all tests?

**Enterprise Format:**
- [ ] All test IDs follow format: TC-AB[ID]-[###]?
- [ ] No "#" symbol in test case IDs?
- [ ] Metadata table has 8 fields (ID, Title, Priority, Automatable, Status, Review Status, Reviewer, Review Date)?
- [ ] Test steps table has 3 columns (Step | Action | Expected Result)?
- [ ] Expected Outcome as bullet points?

**Azure DevOps Readiness:**
- [ ] All test cases ready for import?
- [ ] Metadata can be directly mapped to Azure fields?
- [ ] Relationships to feature established?
- [ ] Ready for next phase (automation/execution)?

#### Review Status Workflow:
```
DRAFT → [QA LeOUTPUT AND DELIVERABLES
**Goal:** Generate production-ready test cases document

**Output File:**
```
File: .github/analysis/AB[FEATURE_ID]-testcases.md
Format: Markdown with structured metadata tables
Contains: All 78+ test cases organized by category
Status: DRAFT (awaiting QA lead review)
Size: Approximately 150KB+ (comprehensive enterprise format)
```

**Deliverables:**
1. ✅ Single testcase.md file with all test cases
2. ✅ Organized by 7 test categories (Functional, Role-Based, Edge Cases, Integration, Performance, Security, E2E)
3. ✅ Each test with full metadata: ID, Title, Priority, Automatable, Status, Review Status, Reviewer, Review Date
4. ✅ Complete documentation: Description, Preconditions, Test Data, Steps, Expected Outcome, Reviewer Comments
5. ✅ Ready for QA review and approval
6. ✅ Formatted for Azure DevOps import (post-review)
File: .github/analysis/AB#[ID]-testcases.md
Format: Markdown with embedded tables
Contains: All test cases in table format with review checkboxes
Status: DRAFT (awaiting QA review)
```<ID>-testcases.md`
- **Format:** Markdown with structured metadata tables
- **Contents:** All test cases (typically 70-80 cases) organized by 7 categories
- **Status:** DRAFT (pending QA lead review and approval)

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
- **End-to-End:** 2-3 cases (complete user workflows)

### 4. Coverage Metrics
- Total test cases count
- Automatable vs. manual breakdown
- Priority distribution (High/Medium/Low)
- Category distribution percentagesass/fail criteria
- **Automatable** - Yes/No with justification
- **Tool** - Specific automation tool (if automatable)
- **Priority** - High/Medium/Low
- **Status** - Draft/Reviewed/Approved

### 3. Coverage Report
- Feature acceptance criteria vs. test cases
- Coverage percentage
- Gaps identified (if any)

### 4. Automation Summary
- Count of automatable vs. manual tests
- Automation tool distribution
- Timeline estimate for automation

---

## Integration with SDD Workflow

**Previous Steps:**
1. Fetch feature from Azure (fetch-feature-from-azure)
2. Requirement analysis (requirement-analysis)
3. Create specification (create-specification-file)

**This Step:** Generate test cases (test-case-generator)

**Next Steps:**
1. Review & finalize test cases (manual)
2. Create automation tests (automation framework)
3. Execute tests (CI/CD pipeline)

---

## Best Practices & Guidelines

### Test Case Naming Convention
✅ **DO:**
- Use present tense: "User imports XML study..."
- Include persona/role: "Admin creates...", "PHA User reviews..."
- Be specific: "XML file with missing nodes is rejected"
- Follow format: [Persona] [Action] [Expected Outcome]

❌ **DON'T:**
- Use technical jargon: "Backend validates API response"
- Use passive voice: "XML file should be validated"
- Be vague: "Test the import feature"
- Use abbreviations: "Verify doc import func"
 (happy path, negative cases)
- API-based tests and integration workflows
- UI workflows with stable element selectors
- Data validation and constraint testing
- Performance/load/stress tests with automated monitoring
- Security scanning and automated security tests

**Not Automatable (No), with Reason field:**
- Manual security penetration testing and ethical hacking
- Accessibility testing requiring screen reader verification
- Visual regression testing requiring human eye review
- Exploratory testing scenarios (exploratory by nature = manual)
- Large file handling (>100MB) - resource intensive
- Browser/OS compatibility edge cases needing manual verification
- User experience and UI feel assessment
- **For each non-automatable test, document the Reason field in metadata**

#### Example Reason Field:
```
Reason: Large file testing (>1GB) by test cases
- Each test case is independent and can execute standalone
- Clear, testable pass/fail criteria defined
- Naming convention followed (TC-AB[ID]-[###])
- Automation decisions justified with Reason field for non-automatable
- No ambiguities or gaps in preconditions or steps
- E2E tests are true end-to-end workflows (not integration)
- Test pyramid respected (more functional, fewer E2E)
- Complete metadata: Description, Preconditions, Test Data, Steps, Expected Outcome
- Ready for QA lead review and approval
- Formatted for Azure DevOps import

---

## Implementation Notes

- **Single Deliverable:** One testcase.md file containing all test cases (typically 70-80)
- **Enterprise Format:** Every test case includes full metadata and structured sections
- **Typical Distribution:** 70-78 test cases organized into 7 categories
- **No Test IDs with #:** Use TC-AB735316-001 (not TC-AB#735316-001)
- **Consistent Metadata:** All tests have same 8 metadata fields
- **Non-Automatable Handling:** Document reasons in Reason field of metadata
- **Status Workflow:** All tests start as Status=Draft, Review Status=Pending
- **Ready for Next Steps:** After QA approval → Azure DevOps import → Automation implementation → Execution

---

## Success Criteria

✅ **Test cases are successful if:**
- All acceptance criteria covered
- Each test case is independent and executable
- Clear pass/fail criteria defined
- Naming convention followed
- Automation decisions justified
- No ambiguities or gaps
- E2E tests are true end-to-end
- Test pyramid respected
- Ready for QA review and approval

---

## Notes

- This skill generates test cases in DRAFT mode for QA review
- Only ONE testcase.md file is created (no additional files)
- All test cases follow Azure DevOps standard format
- Checkboxes enable QA review workflow
- Automation status documented for each test case
- Test cases can be imported directly to Azure DevOps Test Cases
