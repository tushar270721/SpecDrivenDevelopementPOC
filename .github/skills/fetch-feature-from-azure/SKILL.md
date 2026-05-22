---
name: fetch-feature-from-azure
description: |
  Deterministic workflow to retrieve feature work item from Azure DevOps and 
  initialize SDD pipeline. Trigger phrases: "Fetch feature from Azure", 
  "Start feature AB#12345", "Initialize feature workflow"
argument-hint: "Feature ID in format PROJECT#NUMBER (e.g., AB#12345)"

# SKILL METADATA
tags:
  - sdd-phase-1
  - azure-integration
  - deterministic
  - prerequisite-for-specification

execution-mode: deterministic
retry-policy: exponential-backoff-3
idempotent: true
---

## SKILL CONTRACT

### Input Contract (Required)
- **feature_id**: Format `PROJECT#NUMBER` (e.g., AB#12345)
  - Validation: Matches regex `^[A-Z]+#\d+$`
  - If invalid: REJECT with error message
- **azure_mcp_available**: Boolean (must be true)
  - If false: FAIL with clear setup instructions

### Output Contract (Guaranteed on Success)
```json
{
  "feature_id": "AB#12345",
  "feature_title": "string",
  "requirements_raw": ["array of strings"],
  "acceptance_criteria": ["array of strings"],
  "stakeholders": ["array of emails"],
  "specification_path": "specs/feature-001/SPECIFICATION.md",
  "status": "READY_FOR_SPECIFICATION",
  "timestamp": "ISO-8601",
  "audit_id": "uuid"
}
```

### State Machine
```
START
  ↓ (input received)
VALIDATE_INPUT
  ├─→ VALID: Continue to AUTHENTICATE
  └─→ INVALID: REJECT (error)
  ↓
AUTHENTICATE_MCP
  ├─→ SUCCESS: Continue to FETCH
  └─→ FAILURE: FAIL (setup required)
  ↓
FETCH_FEATURE
  ├─→ FOUND: Continue to PARSE
  └─→ NOT_FOUND: FAIL (feature doesn't exist)
  ↓
PARSE_FEATURE_DATA
  ├─→ VALID: Continue to PREPARE_DELEGATION
  └─→ INCOMPLETE: WARN (note missing fields)
  ↓
PREPARE_DELEGATION
  ├─→ SUCCESS: Continue to DELEGATE
  └─→ ERROR: FAIL (data serialization error)
  ↓
DELEGATE_TO_SPECIFICATION
  ├─→ ACCEPTED: End with status DELEGATED
  └─→ REJECTED: FAIL (delegation failed)
  ↓
END
```

---

## WORKFLOW - DETERMINISTIC EXECUTION

### PHASE 1: INPUT VALIDATION (Deterministic)

**Purpose**: Ensure input is valid before any external calls

**Execution Rules**:
1. **Receive feature_id parameter**
   - Check: Is value present? 
     - NO → REJECT: `ERR_MISSING_FEATURE_ID: Feature ID required. Provide format: PROJECT#NUMBER`
     - YES → Continue to step 2
   
2. **Validate feature_id format**
   - Check: Matches pattern `^[A-Z]{1,5}#\d{1,6}$`?
     - NO → REJECT: `ERR_INVALID_FORMAT: Feature ID must match PROJECT#NUMBER format (e.g., AB#12345)`
     - YES → Continue to step 3
   
3. **Verify Azure MCP availability**
   - Check: Is `mcp_ado_wit_get_work_item` callable?
     - NO → FAIL: `ERR_MCP_UNAVAILABLE: Azure DevOps MCP not configured. Run: @mention-azure-setup-skill`
     - YES → Continue to PHASE 2
   
   **Decision Logic**:
   ```
   IF (feature_id == null) THEN REJECT_MISSING
   ELSE IF (NOT matches_regex(feature_id, ^[A-Z]{1,5}#\d{1,6}$)) THEN REJECT_INVALID_FORMAT
   ELSE IF (NOT mcp_available()) THEN FAIL_MCP_NOT_AVAILABLE
   ELSE proceed_to_phase_2()
   ```

**Validation Output**:
- ✅ Input valid → `input_validation_status: PASSED`
- ❌ Input invalid → `input_validation_status: FAILED` + specific error code

---

### PHASE 2: FETCH FEATURE FROM AZURE (Deterministic)

**Purpose**: Retrieve feature work item with guaranteed data structure

**Preconditions Verified**:
- ✅ Azure MCP responsive
- ✅ User authenticated
- ✅ feature_id valid format

**Execution Steps**:

1. **Call Azure DevOps MCP**
   ```
   INVOKE mcp_ado_wit_get_work_item(
     work_item_id: feature_id,
     fields: ["System.Title", "System.Description", "Custom.AcceptanceCriteria", 
              "System.State", "System.AssignedTo", "System.Tags"]
   )
   ```
   
   **Expected Success Response** (data contract):
   ```json
   {
     "id": "AB#12345",
     "title": "Feature Title",
     "description": "Business requirements text",
     "acceptance_criteria": "Acceptance criteria text or list",
     "state": "New|Active|Resolved|Closed",
     "assigned_to": "person@company.com",
     "fields": {...}
   }
   ```

2. **Handle Azure Response**
   
   **Case A: Feature Found (state = Active or New)**
   - ✅ Extract all required fields
   - → Continue to PHASE 3
   
   **Case B: Feature Not Found (404)**
   - ❌ FAIL: `ERR_FEATURE_NOT_FOUND: Feature {feature_id} does not exist in Azure DevOps`
   - Action: Stop workflow, inform user to verify feature ID
   
   **Case C: Feature Archived/Deleted (state = Closed, Resolved)**
   - ⚠️ WARN: `WARN_FEATURE_INACTIVE: Feature {feature_id} is in {state} state`
   - Decision: Continue with warning, note in audit trail
   - → Continue to PHASE 3
   
   **Case D: Access Denied (403)**
   - ❌ FAIL: `ERR_PERMISSION_DENIED: User lacks read permissions for feature {feature_id}`
   - Action: Stop workflow, request permissions
   
   **Case E: Azure Service Error (5xx, timeout)**
   - ❌ FAIL: `ERR_AZURE_SERVICE_ERROR: {error_message}`
   - Action: Retry up to 3 times with exponential backoff (1s, 2s, 4s)
   - If all retries fail: FAIL with advice to retry later

3. **Validate Feature Data Quality**
   
   **Required Fields Check**:
   - Title: Must be non-empty string (30-200 characters)
     - ❌ Missing/empty → FAIL: `ERR_MISSING_TITLE`
     - ❌ Too long → TRUNCATE with warning
   
   - Acceptance Criteria: Must have content
     - ❌ Missing → WARN: `WARN_MISSING_ACCEPTANCE_CRITERIA: Acceptance criteria empty for feature {feature_id}`
     - ✅ Present → Extract to list (parse by newline or bullet format)
   
   - Description: Must be non-empty
     - ❌ Missing → WARN but continue
     - ✅ Present → Keep as-is

**Fetch Outcome**:
```json
{
  "fetch_status": "SUCCESS|PARTIAL|FAILED",
  "fetch_errors": ["array of error codes if any"],
  "fetch_warnings": ["array of warning codes if any"],
  "feature_data": {...}
}
```

---

### PHASE 3: PARSE AND NORMALIZE FEATURE DATA (Deterministic)

**Purpose**: Convert Azure data to standard SDD format with guaranteed structure

**Execution Rules**:

1. **Extract Title**
   - Input: Azure title field
   - Output: Trimmed, max 150 characters
   - Rule: If >150 chars, truncate and add `[...]` suffix with warning

2. **Extract Business Requirements**
   - Input: Azure description field
   - Parsing Rules:
     - Split by paragraph (double newline)
     - Remove extra whitespace
     - Preserve markdown formatting
   - Output: Array of requirement strings
   - If empty: Use empty array, log warning

3. **Extract Acceptance Criteria**
   - Input: Custom.AcceptanceCriteria field
   - Parsing Rules:
     - Detect format: Bullet list, numbered list, or paragraph
     - Parse into normalized list: `[criterion_1, criterion_2, ...]`
     - Each criterion must be complete sentence (starts with capital, ends with punctuation)
   - Output: Array of criterion strings
   - If empty: WARN but continue (can be added during specification phase)

4. **Extract Stakeholders**
   - Input: System.AssignedTo, linked stakeholders
   - Output: Array of unique email addresses
   - Rule: If email invalid format, skip with warning

5. **Generate Feature Reference**
   - Create: `feature_id_normalized = feature_id.lower()` (e.g., `ab#12345`)
   - Create: `feature_slug = f"feature-{counter}"` (e.g., `feature-001`)
   - Rule: Counter incremented per new feature in project

**Parsing Validation**:
```
IF requirements.empty() AND acceptance_criteria.empty() THEN
  WARN: Feature spec incomplete
ELSE IF requirements.empty() OR acceptance_criteria.empty() THEN
  WARN: Partial spec
ELSE
  SUCCESS: Full spec
```

---

### PHASE 4: PREPARE FOR DELEGATION (Deterministic)

**Purpose**: Package data for handoff to specification generation skill

**Data Package Construction**:
```json
{
  "skill_delegation": {
    "destination_skill": "create-specification-file",
    "data": {
      "feature_id": "AB#12345",
      "feature_slug": "feature-001",
      "feature_title": "Feature Title",
      "business_requirements": ["req1", "req2"],
      "acceptance_criteria": ["AC1", "AC2", "AC3"],
      "stakeholders": ["person@company.com"],
      "feature_url": "https://devops-url/AB#12345",
      "source_metadata": {
        "fetched_at": "ISO-8601 timestamp",
        "azure_work_item_id": "12345",
        "feature_state": "Active",
        "completeness_score": 0.95
      }
    }
  },
  "audit": {
    "audit_id": "UUID",
    "timestamp": "ISO-8601",
    "user": "user@company.com",
    "action": "FETCH_FEATURE",
    "status": "SUCCESS"
  }
}
```

**Validation Before Delegation**:
- ✅ All required fields present?
- ✅ Data types correct?
- ✅ No sensitive data in logs?
- ✅ Audit trail complete?

If validation fails → FAIL with specific error

---

### PHASE 5: DELEGATE TO SPECIFICATION SKILL (Deterministic)

**Purpose**: Hand off feature data to next skill in pipeline

**Delegation Protocol**:
1. **Create delegation request**
   - Format: JSON matching `create-specification-file` input contract
   - Include: Audit trail reference
   
2. **Invoke specification skill**
   ```
   INVOKE create-specification-file(
     feature_id: "AB#12345",
     feature_title: "...",
     requirements: [...],
     acceptance_criteria: [...],
     audit_context: {...}
   )
   ```

3. **Wait for response** (max timeout: 30 seconds)
   - ✅ SUCCESS: Receive specification_path
   - ❌ TIMEOUT: FAIL with retry instructions
   - ❌ REJECTED: FAIL with reason

4. **Return delegation result**

---

## ERROR HANDLING MATRIX

| Error Code | Severity | Cause | Recovery |
|-----------|----------|-------|----------|
| `ERR_MISSING_FEATURE_ID` | CRITICAL | Input missing | User must provide feature ID |
| `ERR_INVALID_FORMAT` | CRITICAL | Wrong format | User must use PROJECT#NUMBER |
| `ERR_MCP_UNAVAILABLE` | CRITICAL | Azure MCP down | Run setup skill first |
| `ERR_FEATURE_NOT_FOUND` | CRITICAL | Feature doesn't exist | Verify feature ID in Azure |
| `ERR_PERMISSION_DENIED` | CRITICAL | Auth failure | Request Azure permissions |
| `ERR_AZURE_SERVICE_ERROR` | HIGH | Azure 5xx error | Retry after 30 seconds |
| `WARN_MISSING_ACCEPTANCE_CRITERIA` | MEDIUM | AC empty | Can be added in spec phase |
| `WARN_FEATURE_INACTIVE` | MEDIUM | Feature archived | Continue with caution |

---

## SUCCESS CRITERIA

Skill succeeds when:
- ✅ Feature data retrieved from Azure
- ✅ All required fields normalized
- ✅ Data package created
- ✅ Delegation to specification skill accepted
- ✅ Audit trail recorded

---

## AGENT EXECUTION NOTES

- **Idempotent**: Safe to retry with same feature_id
- **Deterministic**: Same input always produces same output
- **Traceable**: Full audit trail in output
- **Fail-Safe**: Clear error messages for debugging
- **MCP Dependent**: Requires Azure DevOps MCP configured
- **No Side Effects**: Only reads, no writes to Azure
