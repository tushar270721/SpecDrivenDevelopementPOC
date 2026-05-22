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

### PHASE 2: AUTHENTICATE & FETCH FEATURE FROM AZURE (Deterministic)

**Purpose**: Validate Azure MCP and retrieve feature work item with guaranteed data structure

**Implementation**:
```javascript
const config = require('./.github/config/azure-mcp/mcp-config.js');

// Step 1: Health Check
const health = await config.healthCheck();
if (health.status !== 'healthy') {
  FAIL: "ERR_MCP_UNAVAILABLE: Azure DevOps connection failed"
}

// Step 2: Fetch Feature
const feature = await config.fetchFeature(featureId);
// Returns: {
//   id, title, type, state, priority, assignedTo,
//   description, acceptanceCriteria,
//   createdDate, updatedDate
// }

// Step 3: Fetch Comments
const comments = await config.getTextComments(featureId);
// Returns: [{id, text, createdBy, createdDate}]

// Step 4: Fetch Update History
const updates = await config.getComments(featureId);
// Returns: [{revisedDate, revisedBy, changedFields}]
```

**Handle Azure Response**:

**Case A: Feature Found (state = Active or New)**
- ✅ Extract all required fields
- → Continue to PHASE 3

**Case B: Feature Not Found (404)**
- ❌ FAIL: `ERR_FEATURE_NOT_FOUND: Feature {feature_id} does not exist in Azure DevOps`
- Action: Stop workflow, inform user to verify feature ID

**Case C: Feature Archived/Deleted (state = Closed, Resolved, Removed)**
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

**Validate Feature Data Quality**:

- **Title**: Must be non-empty string (30-200 characters)
  - ❌ Missing/empty → FAIL: `ERR_MISSING_TITLE`
  - ❌ Too long → TRUNCATE with warning

- **Acceptance Criteria**: Should have content
  - ❌ Missing → WARN: `WARN_MISSING_ACCEPTANCE_CRITERIA`
  - ✅ Present → Extract to list (parse by newline or bullet format)

- **Description**: Should have content
  - ❌ Missing → WARN but continue
  - ✅ Present → Keep as-is

**Fetch Outcome**:
```json
{
  "fetch_status": "SUCCESS|PARTIAL|FAILED",
  "fetch_errors": ["array of error codes if any"],
  "fetch_warnings": ["array of warning codes if any"],
  "feature_data": {
    "id": "768765",
    "title": "[PHA PSM] Add Safeguard instances...",
    "description": "As a PHA User...",
    "acceptanceCriteria": "Access & Security...",
    "state": "Active",
    "comments": [...]
  }
}
```

---

### PHASE 3: PARSE AND NORMALIZE FEATURE DATA (Deterministic)

**Purpose**: Convert Azure data to standard SDD format with guaranteed structure

**Implementation**:
```javascript
const config = require('./.github/config/azure-mcp/mcp-config.js');

// Helper: Strip HTML tags
function stripAndNormalize(html) {
  return config.stripHtmlTags(html).trim();
}

// 1. Extract Title
const title = feature.title.substring(0, 150);
if (title.length !== feature.title.length) {
  WARN: "Title truncated from " + feature.title.length + " to 150 characters"
}

// 2. Extract Business Requirements
const plainDescription = stripAndNormalize(feature.description);
const requirements = plainDescription
  .split(/\n\n+/)  // Split by paragraphs
  .map(p => p.trim())
  .filter(p => p.length > 0);

// 3. Extract Acceptance Criteria
const plainAC = stripAndNormalize(feature.acceptanceCriteria);
const acceptanceCriteria = plainAC
  .split(/[\n•\-]/)  // Split by newline or bullets
  .map(ac => ac.trim())
  .filter(ac => ac.length > 0 && /^[A-Z]/.test(ac));

// 4. Extract Stakeholders
const stakeholders = [];
if (feature.assignedTo && feature.assignedTo.includes('@')) {
  stakeholders.push(feature.assignedTo);
}
// Extract from comments author emails
comments.forEach(c => {
  const email = extractEmailFromName(c.createdBy);
  if (email && !stakeholders.includes(email)) {
    stakeholders.push(email);
  }
});

// 5. Generate Feature Reference
const featureId = feature.id;
const featureSlug = "feature-" + featureId;

// 6. Build feature URL
const featureUrl = config.azureDevOps.orgUrl + "/" + 
                  encodeURIComponent(config.azureDevOps.project) + 
                  "/_workitems/edit/" + featureId;
```

**Validation Rules**:
```javascript
if (!requirements || requirements.length === 0) {
  WARN: "No business requirements extracted"
}
if (!acceptanceCriteria || acceptanceCriteria.length === 0) {
  WARN: "No acceptance criteria extracted"
}
if (requirements.length === 0 && acceptanceCriteria.length === 0) {
  WARN: "Feature spec incomplete - both requirements and AC are empty"
}
if (requirements.length > 0 && acceptanceCriteria.length > 0) {
  status = "SUCCESS: Full spec"
}
```

**Parsing Output**:
```json
{
  "parsed_title": "string (max 150 chars)",
  "requirements": ["req1", "req2", ...],
  "acceptance_criteria": ["AC1", "AC2", ...],
  "stakeholders": ["email1@company.com", "email2@company.com"],
  "feature_url": "https://dev.azure.com/enablon/ART%20-%20New%20SaaS/_workitems/edit/768765",
  "metadata": {
    "feature_id": "768765",
    "feature_slug": "feature-768765",
    "state": "Active",
    "priority": 2,
    "assigned_to": "person@company.com",
    "created_date": "2026-02-26",
    "updated_date": "2026-05-19",
    "comments_count": 1,
    "updates_count": 21
  },
  "completeness": {
    "has_title": true,
    "has_description": true,
    "has_acceptance_criteria": true,
    "score": 1.0
  }
}
```

---

### PHASE 4: PREPARE FOR DELEGATION (Deterministic)

**Purpose**: Package data for handoff to specification generation skill

**Implementation**:
```javascript
const crypto = require('crypto');
const timestamp = new Date().toISOString();
const auditId = crypto.randomUUID ? crypto.randomUUID() : 
                'audit-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

// Build delegation package
const delegationPackage = {
  skill_delegation: {
    destination_skill: "create-specification-file",
    source_skill: "fetch-feature-from-azure",
    trigger_time: timestamp,
    data: {
      feature_id: "AB#" + featureId,
      feature_slug: featureSlug,
      feature_title: title,
      business_requirements: requirements,
      acceptance_criteria: acceptanceCriteria,
      stakeholders: stakeholders,
      feature_url: featureUrl,
      source_metadata: {
        fetched_at: timestamp,
        azure_work_item_id: feature.id,
        feature_state: feature.state,
        feature_priority: feature.priority,
        feature_type: feature.type,
        assigned_to: feature.assignedTo,
        created_date: new Date(feature.createdDate).toISOString(),
        updated_date: new Date(feature.updatedDate).toISOString(),
        comments_count: comments.length,
        updates_count: updates.length,
        completeness_score: calculateCompletenessScore(requirements, acceptanceCriteria)
      }
    }
  },
  audit: {
    audit_id: auditId,
    timestamp: timestamp,
    action: "FETCH_FEATURE",
    status: "SUCCESS",
    errors: fetchErrors || [],
    warnings: fetchWarnings || [],
    data_quality: {
      has_title: !!title,
      has_description: requirements.length > 0,
      has_acceptance_criteria: acceptanceCriteria.length > 0,
      completeness_percentage: (
        (!!title ? 33 : 0) +
        (requirements.length > 0 ? 33 : 0) +
        (acceptanceCriteria.length > 0 ? 34 : 0)
      )
    }
  }
};

// Validate before delegation
function validateDelegationPackage(pkg) {
  const required = ['feature_id', 'feature_title', 'feature_url', 'business_requirements', 'acceptance_criteria'];
  for (const field of required) {
    if (!pkg.skill_delegation.data[field]) {
      throw new Error("ERR_DELEGATION_VALIDATION: Missing required field: " + field);
    }
  }
  if (!pkg.audit.audit_id || !pkg.audit.timestamp) {
    throw new Error("ERR_DELEGATION_VALIDATION: Incomplete audit trail");
  }
  return true;
}

validateDelegationPackage(delegationPackage);
console.log("✅ Delegation package validated");
```

**Validation Checklist**:
- ✅ All required fields present?
- ✅ Data types correct?
- ✅ No sensitive data in logs? (PAT token, passwords)
- ✅ Audit trail complete with ID and timestamp?
- ✅ Feature URL correctly formatted?
- ✅ Arrays (requirements, AC, stakeholders) non-empty or explicitly empty?

**If validation fails**:
```javascript
FAIL with specific error
Example: "ERR_DELEGATION_VALIDATION: Missing required field: acceptance_criteria"
```

---

### PHASE 5: DELEGATE TO SPECIFICATION SKILL (Deterministic)

**Purpose**: Hand off feature data to next skill in pipeline

**Implementation**:
```javascript
// 1. Log delegation attempt
console.log("\n📋 Delegating to specification generation skill...");
console.log("   Audit ID: " + auditId);
console.log("   Feature: " + feature.title);
console.log("   Requirements: " + requirements.length + " items");
console.log("   Acceptance Criteria: " + acceptanceCriteria.length + " items");

// 2. Pass control to next skill
const delegationContext = {
  feature_id: delegationPackage.skill_delegation.data.feature_id,
  feature_title: delegationPackage.skill_delegation.data.feature_title,
  business_requirements: delegationPackage.skill_delegation.data.business_requirements,
  acceptance_criteria: delegationPackage.skill_delegation.data.acceptance_criteria,
  stakeholders: delegationPackage.skill_delegation.data.stakeholders,
  feature_url: delegationPackage.skill_delegation.data.feature_url,
  source_metadata: delegationPackage.skill_delegation.data.source_metadata,
  audit_id: delegationPackage.audit.audit_id,
  fetch_timestamp: delegationPackage.audit.timestamp
};

// 3. Trigger next skill with delegation protocol
try {
  // INVOKE create-specification-file WITH delegationContext
  // This triggers the skill orchestration layer to:
  // - Validate context matches input contract
  // - Initialize specification generation pipeline
  // - Create specification file with audit trail
  
  const delegationResult = {
    status: "DELEGATED",
    next_skill: "create-specification-file",
    audit_id: auditId,
    timestamp: new Date().toISOString(),
    context_size_bytes: JSON.stringify(delegationContext).length,
    feature_id: feature.id
  };
  
  return SUCCESS with delegationResult;
  
} catch (delegationError) {
  return FAIL: "ERR_DELEGATION_FAILED: Could not transfer to specification skill: " + delegationError.message;
}
```

**Delegation Success Outcome**:
```
✅ Feature AB#768765 fetched successfully
✅ 3 requirements extracted
✅ 5 acceptance criteria extracted  
✅ 2 stakeholders identified
✅ Validation passed
⏭️  Delegating to specification generation...
   Destination: create-specification-file
   Audit ID: {{uuid}}
   Context transferred: {{size}} bytes
```

**Delegation Failure Scenarios**:

1. **ERR_SPECIFICATION_SKILL_UNAVAILABLE**
   - Cause: create-specification-file skill not found or not accessible
   - Recovery: Verify skill is installed in .github/skills/

2. **ERR_CONTEXT_TOO_LARGE**
   - Cause: Feature data exceeds transfer size limits
   - Recovery: Reduce stakeholder list or requirement verbosity

3. **ERR_INVALID_FEATURE_DATA**
   - Cause: Feature data failed validation during delegation
   - Recovery: Return to PHASE 3 for re-parsing

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
