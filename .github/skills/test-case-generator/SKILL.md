# Test Case Generator Skill

## Purpose
Generate accurate test cases from feature specifications. Test cases are organized in 7 categories with clear titles and detailed expected results. All test cases start in DRAFT status for QA review.

## Trigger Phrases
- "Generate test cases for FE#[ID]"
- "Create testcase.md for FE#[ID]"

## Input Requirements
- Feature ID (e.g., FE#735316)
- SPECIFICATION.md file containing:
  - Acceptance criteria
  - User roles
  - Business requirements
  - Test scenarios

## Workflow

### Step 1: Read SPECIFICATION.md
- Extract acceptance criteria
- Identify user roles mentioned in spec
- Note all business requirements and constraints
- Identify integration points

### Step 2: Create Test Cases
For each acceptance criterion, create test cases covering:
1. **Happy Path** - Standard use with valid data
2. **User Roles** - Test from each role perspective
3. **Validation** - Invalid inputs, boundary values, edge cases
4. **Error Handling** - Error conditions and recovery
5. **Integration** - Multi-component workflows
6. **Security** - Access control, data protection
7. **E2E** - Complete business workflows

### Step 3: Format and Output
- Use consistent test case template
- Organize into 7 test categories
- Validate UI compatibility
- Create single testcase.md file with all tests

---

## Test Case Template Structure

```markdown
# TC-FE[ID]-###

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE[ID]-### |
| Priority | High/Medium/Low |
| Automatable | Yes/No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

[Persona] can [action] [specific condition] [outcome]

## Preconditions

1. [Persona] has [required permission/role]
2. [Persona] has [required permission/role]

## Test Data

| Field | Value |
|-------|-------|
| Parameter | Value |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | [Action] | [Specific, detailed validation outcome] |
| 2 | [Action] | [Specific, detailed validation outcome] |

## Reviewer Comments

*To be completed during review.*
```

---

## Preconditions Guidelines

**CRITICAL:** Every precondition line MUST start with the persona/user role.

**Format:** Each line begins with `[Persona/User Role]` followed by condition

**✅ CORRECT - All start with persona:**
1. Admin User is logged in with system administrator permissions
2. Admin User has access to the Import Studies interface
3. Admin User has validated the XML file is in correct format
4. PHA Reviewer is available in the system
5. PHA Reviewer has permission to approve studies

**❌ INCORRECT - Generic conditions without persona:**
1. User is logged in as Admin (missing specific permission)
2. Import interface is accessible (no persona reference)
3. Valid XML file exists (no persona who has it)
4. Database is configured (no persona)
5. Service is running (no persona context)

**Guidelines:**
- Start every line with persona: "[Persona Name]" or "[Role]"
- Specify what permission/access the persona has
- Reference data/setup conditions the persona needs
- Minimum 2-3 preconditions per test case
- Maximum 5-6 preconditions (be specific, don't over-specify)

**Common Personas to Use:**
- [PHA User]
- [System Administrator]
- [QA Lead/Reviewer]
- [Stakeholder]
- [Support User]
- [Read-Only User]
- [Feature-specific persona from specification]

---

## Test Case Title Guidelines

**Format:** `[Persona] can [action] [specific condition]`

**Length:** 10-25 words - descriptive and specific

**Good Examples:**
- ✅ "System Administrator can register new API consumer with name, contact email, and tier"
- ✅ "Customer can allocate Directory APIs product to existing integration client"  
- ✅ "Support Lead can view consumer tier and support policies but cannot modify them"
- ✅ "API Consumer cannot access non-provisioned API products and receives 403 Forbidden error"

**Poor Examples:**
- ❌ "Test API consumer registration" (vague, no persona)
- ❌ "Register consumer" (too short, no context)
- ❌ "Verify consumer creation works" (generic, no specific condition)

**Personas (Use consistently):**
- System Administrator
- Customer
- Support Lead  
- API Consumer
- Security Manager
- Read-Only User
- [Feature-specific personas from spec]

---

## Test Steps Guidelines

**CRITICAL:** Every test step action MUST start with the persona/user role performing the action.

**Format:** Each action begins with `[Persona/User Role]` followed by the specific action verb and details

**✅ CORRECT - All actions start with persona:**
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Admin User opens site.config file and locates EmailLimit configuration key | Configuration key found and accessible, current value displayed |
| 2 | Admin User updates EmailLimit.Daily.RecipientsLimit value from 500000 to 1000 | Configuration value successfully modified to 1000, no validation errors |
| 3 | System Administrator saves site.config and reloads email service | Service reloads successfully with new configuration, confirms new limit in logs |
| 4 | System Administrator queries database quota table for customer | Database shows DailyQuotaUsed = 100, Remaining = 900, LastReset timestamp = today 00:00:00 UTC |
| 5 | Support Engineer verifies audit logs record the configuration change | Audit logs show entry with timestamp, user_id, old_value: 500000, new_value: 1000 |

**❌ INCORRECT - Actions without persona:**
| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open site.config file | Configuration key found (no persona performing action) |
| 2 | Update EmailLimit value to 1000 | Configuration updated (who is doing this?) |
| 3 | Save and reload service | Service reloads (no actor identified) |
| 4 | Query database | Database returns data (which role?) |
| 5 | Verify audit logs | Logs contain entries (who is verifying?) |

**Guidelines:**
- Start every action with persona: "[Persona Name]" or "[Role]"
- Use action verbs: opens, updates, clicks, sends, queries, verifies, confirms, etc.
- Include specific UI elements or API calls the persona interacts with
- Context-dependent personas: Use job roles from specification (e.g., Platform Operations Engineer, System Administrator)
- Minimum 1 action per test step
- Action should be atomic and testable in one step

**Common Action Patterns:**
- "[Persona] opens [UI element/screen]"
- "[Persona] enters [value] in [field]"
- "[Persona] clicks [button]"
- "[Persona] submits/sends [action]"
- "[Persona] verifies [data/result]"
- "[Persona] queries [system/database] for [item]"
- "[Persona] receives [response/error]"
- "[Persona] confirms [validation/status]"

**Why This Matters:**
- Clarity: Test steps are actionable instructions, not abstract operations
- Traceability: Identifies which role is responsible for each step
- Automation: Automation engineers know which user/permission context to use
- Debugging: When tests fail, clear persona context helps identify root cause
- Compliance: Access control testing requires explicit role/persona per step

---

## Expected Result Guidelines

**CRITICAL:** Expected results must be SPECIFIC and DETAILED, not generic.

**Format:** Describe the exact validation outcome that proves the test passed.

**Detailed Examples:**

❌ **Too Brief (3-4 words):**
- "Request succeeds"
- "Data saved"
- "Access denied"
- "Status changes"

✅ **Detailed & Specific (20-50 words):**
- "API Gateway validates credential scope 'api-directory-apis' against request, scope matches, request forwarded to Directory API backend, consumer receives HTTP 200 with API response data"
- "System validates tenant 'acme-corp' has provisioned 'Directory APIs' product, tenure-product association confirmed in database, credential scope linked to product, multi-tenant isolation enforced"
- "Retired credential immediately marked as invalid in database, API Gateway rejects new requests with HTTP 401 Unauthorized, existing in-flight requests complete successfully, audit log records retirement timestamp and administrator ID"

**Required Elements in Expected Result:**

1. **Business Logic Validation:**
   - What business rule is enforced?
   - What data persistence occurs?
   - What state change happens?

2. **System Behavior:**
   - What backend service is involved?
   - What database operation occurs?
   - What response is returned?

3. **Verification Details:**
   - What can be checked to prove it worked?
   - What data integrity is maintained?
   - What relationships are preserved?

**Template Phrases to Use:**

- "System validates [rule] against [input], [outcome]"
- "[Resource] stored in database with [specific fields]"  
- "[Status] transitions from [state A] to [state B] with [timestamp/audit]"
- "[Relationship] maintained between [entity A] and [entity B]"
- "API returns HTTP [code] with [specific error message]"
- "Audit log records [action] with [timestamp], [user ID], [details]"
- "Access denied because [business rule], [access restriction enforced]"
- "Request forwarded to [backend service], [downstream system] receives [specific data]"

---

## Test Categories

Generate test cases across all categories based on specification requirements. Coverage is driven by acceptance criteria, not fixed counts.

**UPDATED REQUIREMENTS (June 2026):** Comprehensive coverage across all functional and end-to-end scenarios.

| Category | Purpose |
|----------|---------|
| FUNCTIONAL | Happy path, negative scenarios, validation, field interactions |
| ROLE-BASED & ACCESS | User permissions, access control, multi-tenant |
| EDGE CASES | Boundaries, special characters, concurrency |
| INTEGRATION | Multi-service workflows, API integration |
| PERFORMANCE | Latency, throughput, concurrency SLAs |
| SECURITY & ACCESSIBILITY | Auth, injection prevention, WCAG compliance |
| END-TO-END | Complete business workflows, multi-step user journeys, system interactions |

---

## CRITICAL: UI Parser Compatibility

The test case markdown must follow exact format rules for proper display in test case portal.

**MUST DO:**
1. Test Case ID uses `#` (H1): `# TC-FE735316-001` ✅
2. Section headers use `##` (H2): `## Metadata`, `## Title`, `## Test Steps` ✅
3. Include `## Metadata` header before metadata table ✅
4. Metadata table has exactly 7 fields ✅
5. Category headers use `#` (H1): `# FUNCTIONAL TEST CASES` ✅
6. Separators before/after categories: `---` ✅
7. One blank line after each heading ✅

**MUST NOT DO:**
1. Test Case ID as `## TC-FE735316-001` (H2) ❌
2. Metadata table without `## Metadata` header ❌
3. Hardcoding thresholds not in specification ❌
4. Section headers as `### Header` (H3) ❌

**Why:** UI parser searches for H1 (`#`) headings to identify test cases. If test IDs use H2 (`##`), system shows "No test cases found" error.

**Validation Checklist (Before finalizing file):**
- [ ] Every test case ID starts with `# TC-FE` (not `## TC-FE`)
- [ ] Every test case has `## Metadata` section
- [ ] All test steps have detailed expected results (not 3-4 words)
- [ ] All test titles follow "[Persona] can [action] [condition]" format
- [ ] No made-up thresholds - all numbers from SPECIFICATION.md
- [ ] File structure matches reference: `specs/feature-735316/FE735316-testcases.md`

---

## Anti-Hallucination Rules

**Only create test cases for requirements explicitly stated in SPECIFICATION.md**

Do NOT invent test cases for:
- ❌ Thresholds not mentioned ("system handles 1000 concurrent users")
- ❌ Time periods not specified ("30-day grace period" if not in spec)
- ❌ Features not documented ("send email notifications")
- ❌ UI elements not required ("dashboard displays analytics")

**Allowed:**
- ✅ Requirements directly from acceptance criteria
- ✅ User roles mentioned in spec
- ✅ Integration points described in spec
- ✅ Error conditions in test scenarios
- ✅ Validation rules in spec
- ✅ Performance requirements explicitly stated

**Example - CORRECT:**
- Spec states: "API response latency p95 < 100ms"
- Test: "Verify credential validation returns within 100ms p95 latency" ✅

**Example - HALLUCINATION:**
- Spec silent on latency
- Test: "Verify system handles 1000 requests per second" ❌

---

## Test Case Metadata

| Field | Value | Notes |
|-------|-------|-------|
| Test Case ID | TC-FE[ID]-### | Sequential from 001 onwards |
| Priority | High/Medium/Low | High = critical path, Low = edge cases |
| Automatable | Yes/No | Justify if No with Reason field |
| Status | Draft | All new tests = Draft status |
| Review Status | Pending | Changed after QA review |
| Reviewer | [Name] | Filled by QA lead during review |
| Review Date | YYYY-MM-DD | Added after approval |

**For Non-Automatable Tests:**
Add additional row: `Reason: [Explanation why manual testing required]`

Examples:
- "Large file testing >1GB requires manual resource allocation"
- "Email delivery verification requires access to mailbox"
- "Visual UI regression requires manual eye review"

---

## Document Structure

```markdown
# Test Cases: FE#[ID] - [Feature Title]

**Feature:** [Feature Name]
**Feature ID:** FE#[ID]  
**Status:** DRAFT - Ready for QA Review
**Created:** [Date]

---

# FUNCTIONAL TEST CASES

---

# TC-FE[ID]-001

## Metadata
[7 fields]

## Title
[Persona] can [action] [condition]

## Preconditions
[List]

## Test Data
[Table]

## Test Steps
[Table with detailed expected results]

## Reviewer Comments
*To be completed during review.*

---

# TC-FE[ID]-002
[Repeat...]

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE[ID]-026
[Continue with each category...]

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# INTEGRATION TEST CASES

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# END-TO-END TEST CASES

---

## Test Case Summary

| Category | Count |
|----------|-------|
| Functional | [N] |
| Role-Based | [N] |
| Edge Cases | [N] |
| Integration | [N] |
| Performance | [N] |
| Security | [N] |
| E2E | [N] |
| **TOTAL** | **[N]** |

---

## Requirement Coverage Matrix

| Acceptance Criterion | Test Case ID(s) | Coverage |
|----------------------|-----------------|----------|
| [AC description] | TC-XXX, TC-YYY | ✅ Covered |

**Coverage:** 100% of acceptance criteria

---

## Document Status

**Status:** DRAFT - Ready for QA Lead Review  
**Created:** [Date]  
**Quality Checks Passed:** UI format, expected results detail, title format, no hallucination
```

---

## File Naming Convention

- **Format:** `FE[FEATURE_ID]-testcases.md`
- **Example:** `FE735316-testcases.md`
- **Location:** `specs/feature-[ID]/`
- **Test ID Prefix:** `TC-FE[ID]-###` (e.g., `TC-FE735316-001`)

---

## Quality Checklist (Before finalizing)

- [ ] All acceptance criteria have test cases
- [ ] Test titles follow "[Persona] can [action]" format
- [ ] Expected results are detailed (20+ words each, not 3-4)
- [ ] No values/thresholds hardcoded unless in specification
- [ ] Every test case uses `# TC-FE` heading (not `## TC-FE`)
- [ ] Every test case has `## Metadata` section
- [ ] Metadata has exactly 7 fields
- [ ] Test cases organized into 7 categories
- [ ] File matches FE735316-testcases.md format
- [ ] No generic "validation" or "success" messages

---

## Notes

- Generate ONE testcase.md file per feature
- All tests start in DRAFT status
- Focus on accuracy and coverage, not fixed counts
- Expected results drive test quality—make them detailed
- Avoid invented requirements not in specification
- UI parser compatibility is non-negotiable



