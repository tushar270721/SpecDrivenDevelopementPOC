# SPECIFICATION: FE#735316 - API Consumer and Scope Management

**Feature ID:** 735316  
**Title:** [APIm] 6 API Consumer and Scope Management  
**Created:** 6/1/2026  
**Last Updated:** 6/1/2026  
**Status:** DRAFT  
**Azure DevOps Link:** https://dev.azure.com/enablon/7977ed3d-15c4-4782-b1f7-d1f70660ff0c/_apis/wit/workItems/735316

---

## Feature Overview

### Business Context

This feature introduces API consumer management capabilities to the Enablon API Management platform. Organizations need sophisticated mechanisms to onboard API consumers, provision secure credentials, manage access levels, and enforce service level agreements. Current gaps prevent granular API product access control and lack streamlined credential management workflows.

### Key Benefits

1. **Granular Access Control** - Customers can restrict API consumers to specific API products rather than all-or-nothing access
2. **Improved Security Posture** - Scoped credentials with OAuth and API key support reduce blast radius of compromised credentials
3. **Enhanced Consumer Experience** - Streamlined onboarding journey with self-service credential management
4. **SLA Enforcement** - Support teams can manage consumer tiers and apply subscription-based quota/throttling rules
5. **Auditability** - Complete credential lifecycle management (add, manage, retire, change secrets) with audit trails

### User Personas

- **Support Lead/Services Lead** - Manages consumer tiers, SLAs, and support policies
- **System Administrator** - Registers and manages integration clients and their access rights
- **Customer** - Sets up integrations, manages credentials, controls API access
- **Backend System** - Validates consumer identity and scope permissions before processing requests

---

## Business Requirements

### In-Scope Items

1. **API Consumer Registration and Management Interface**
   - Self-service or admin-managed consumer registration workflow
   - Consumer profile management (name, contact, tier assignment)
   - Consumer lifecycle: Active, Suspended, Retired states

2. **Credential Management System**
   - Support for multiple credential types: API Keys, OAuth tokens
   - Credential generation and rotation
   - Secret management and security (never expose in UI, only at creation time)
   - Credential retirement and revocation

3. **API Product Scope Definition**
   - Define scope naming convention: 'api-{api-product-name}'
   - Scope assignment to credentials
   - Scope visibility and filtration rules

4. **Access Control and Validation**
   - Tenant-to-product association validation
   - Credential-to-product scope validation
   - Subscription tier validation
   - Rule evaluation: reject, throttle, apply quota

5. **Authentication Service Integration**
   - Store scopes in Authentication Service
   - Token exchange capability
   - Scope availability management through CI-CD or runtime initialization
   - Claim token verification for internal APIs

6. **Onboarding Journey**
   - Welcome email or registration page with credentials
   - Setup documentation and testing environment
   - Self-service API access and control UI
   - Support/help mechanisms

### Out-of-Scope Items

- Custom authentication mechanisms outside OAuth/API Key standards
- Billing and payment integration
- Customer self-service portal beyond credential management
- Internal Enablon user management (focus on external consumers)

---

## User Stories

### US-1: API Consumer Registration
**As a** System Administrator  
**I want** to register and manage integration clients  
**So that** I can onboard new API consumers into the platform

**Acceptance Criteria:**
- Administrator can create new consumer profile with name and contact information
- System forwards queries to correct backend even if backend was already entitled
- Consumer state can be set to Active, Suspended, or Retired

### US-2: Granular API Product Access Control
**As a** Customer  
**I want** to allocate specific API products to each integration client  
**So that** my Workday middleware can access only "Directory APIs" and not "Incident & Impacts Export API"

**Acceptance Criteria:**
- System forwards API product & subscription tier information to backend through different backendURL properties
- Customers can assign multiple API products to a single credential
- Customers can view which API products are available for assignment

### US-3: Credential Lifecycle Management
**As a** Customer  
**I want** to add, manage, retire, and change secrets for each integration client  
**So that** I maintain security through regular credential rotation

**Acceptance Criteria:**
- Generate API keys and OAuth credentials
- Display secrets only at creation time (never in subsequent views)
- Support credential rotation without service interruption
- Retire/revoke credentials immediately

### US-4: Backend API Protection
**As a** Platform Architect  
**I want** to prevent customers from calling internal-only APIs  
**So that** internal operations remain protected and isolated

**Acceptance Criteria:**
- Backend APIs verify internal claim token before processing requests
- Customers cannot call APIm-exclusive backend APIs
- External credentials contain appropriate claim tokens

### US-5: Tenant and Subscription Validation
**As a** API Gateway  
**I want** to validate credentials against tenant and subscription rules  
**So that** only entitled consumers can access provisioned API products

**Acceptance Criteria:**
- Validate product association with tenant
- Check relevant authority (auth service) for tenant
- Validate credential scope matches product requirement
- Apply rules: reject, throttle, enforce quota

### US-6: Onboarding and Education
**As a** New API Consumer  
**I want** to receive setup documentation and testing capabilities  
**So that** I can successfully integrate APIs into my systems

**Acceptance Criteria:**
- Receive welcome email with credential link
- Access read-only page displaying credentials
- Find setup and integration guidance
- Access test/sandbox environment

---

## Acceptance Criteria (Detailed)

### AC-1: API Consumer Registration and Management

| Criterion | Description |
|-----------|-------------|
| Req-1.1 | System Administrator can register and manage a list of integration clients |
| Req-1.2 | System must forward queries to correct backend, even if backend was already entitled |
| Req-1.3 | Consumer profiles support: Name, Contact, Tier, Status fields |
| Req-1.4 | Support consumer lifecycle management: Active → Suspended → Retired states |

### AC-2: API Product Access Control

| Criterion | Description |
|-----------|-------------|
| Req-2.1 | Customers can allocate rights to use specific API products individually |
| Req-2.2 | System forwards API product & subscription tier information to backend through different backendURL properties |
| Req-2.3 | Subscription mechanisms ensure customer access only to entitled APIs |
| Req-2.4 | Customers possess necessary keys and secrets to access their APIs |

### AC-3: Integration Client Credentials Management

| Criterion | Description |
|-----------|-------------|
| Req-3.1 | Customers can add credentials for each integration client |
| Req-3.2 | Customers can manage (rotate) credentials without service interruption |
| Req-3.3 | Customers can retire credentials and immediately revoke access |
| Req-3.4 | Support for changing secrets with audit trail |
| Req-3.5 | Credentials display only at creation time; hidden in subsequent views |

### AC-4: Backend API Protection

| Criterion | Description |
|-----------|-------------|
| Req-4.1 | Customers cannot call backend APIs designed exclusively for APIm use |
| Req-4.2 | Backend APIs verify internal claim token before processing requests |
| Req-4.3 | External credentials cannot impersonate internal roles/scopes |

### AC-5: Credential Scope Definition

| Criterion | Description |
|-----------|-------------|
| Req-5.1 | Scope naming convention: 'api-{api-product-name}' (external scope) |
| Req-5.2 | Scopes stored in Authentication Service for token validation |
| Req-5.3 | Scopes available through CI-CD pipeline or runtime initialization |
| Req-5.4 | List of available scopes can be displayed without filtering (acceptable for MVP) |

### AC-6: Customer Validation Flow

| Criterion | Description |
|-----------|-------------|
| Req-6.1 | Validate product is associated with tenant (tenant must have provisioned it) |
| Req-6.2 | Check relevant authority (auth service) for that tenant |
| Req-6.3 | Validate client application has proper scope on authentication service |
| Req-6.4 | Apply subscription-based rules: reject, throttle, quota |

---

## Test Scenarios

### TS-1: API Consumer Registration Flow

**Scenario:** System Administrator successfully registers new API consumer

| Element | Details |
|---------|---------|
| **Preconditions** | Administrator logged in with appropriate permissions; Consumer does not exist |
| **Given** | Administrator navigates to API Consumer Management interface |
| **When** | Administrator creates new consumer profile with: Name="Workday Integration", Contact="integration@workday.com", Tier="Premium" |
| **Then** | System creates consumer record with status "Active"; System forwards metadata to backend; Administrator receives confirmation |
| **Test Data** | Consumer Name: "Workday Integration"; Contact Email: "integration@workday.com"; Tier: "Premium" |
| **Expected Result** | Consumer appears in consumer list; Consumer status is "Active"; Backend acknowledgment received |

### TS-2: API Product Allocation

**Scenario:** Customer allocates Directory APIs product to Workday integration client

| Element | Details |
|---------|---------|
| **Preconditions** | Workday consumer profile exists; Customer has provisioned "Directory APIs" product |
| **Given** | Customer views Workday consumer details in credential management interface |
| **When** | Customer selects "Directory APIs" product from available API products list; System displays subscription tier information |
| **Then** | Product allocation succeeds; Backend receives product & subscription tier information through appropriate backendURL |
| **Test Data** | API Product: "Directory APIs"; Subscription Tier: matching customer's provisioned tier; Backend URL: based on product configuration |
| **Expected Result** | Customer confirms product assigned; Workday consumer can now access Directory APIs only; Cannot access other API products |

### TS-3: API Key Generation and Display

**Scenario:** Customer generates API key for Workday consumer

| Element | Details |
|---------|---------|
| **Preconditions** | Workday consumer exists with Directory APIs product assigned |
| **Given** | Customer navigates to credential management for Workday consumer |
| **When** | Customer clicks "Generate New API Key" |
| **Then** | System generates secure API key; Key displayed on screen only; Customer can copy to clipboard |
| **Test Data** | Credential Type: "API Key"; Format: UUID or similar secure format |
| **Expected Result** | Unique API key generated; No subsequent views show the key; Customer must copy immediately or regenerate |

### TS-4: API Key Not Visible on Subsequent Views

**Scenario:** Customer views Workday consumer credentials on second visit

| Element | Details |
|---------|---------|
| **Preconditions** | API key previously generated for Workday consumer |
| **Given** | Customer navigates back to Workday consumer credentials |
| **When** | Customer views credential details |
| **Then** | API key is NOT displayed; Only credential identifier/hint shown (e.g., "api-key-***789") |
| **Test Data** | Previously generated API key should not be retrievable |
| **Expected Result** | Customer cannot retrieve original key; Must generate new key if needed; Previous key can still be rotated |

### TS-5: Credential Rotation

**Scenario:** Customer rotates Workday API key without service interruption

| Element | Details |
|---------|---------|
| **Preconditions** | Workday consumer has active API key in use; System processes requests with this key |
| **Given** | Customer initiates key rotation for Workday consumer |
| **When** | System generates new API key; Old key remains valid during grace period; Customer receives new key |
| **Then** | New key becomes active; System continues accepting old key for grace period (recommend 24-48 hours) |
| **Test Data** | Grace Period: 24-48 hours; Active Requests: continue processing with old key during grace |
| **Expected Result** | Workday can update their systems without downtime; After grace period, old key rejected; Audit log records rotation |

### TS-6: Credential Retirement

**Scenario:** Customer retires Workday API key

| Element | Details |
|---------|---------|
| **Preconditions** | Workday consumer has multiple API keys; Some marked as "Retired" |
| **Given** | Customer marks oldest Workday API key as "Retired" |
| **When** | System immediately revokes retired key |
| **Then** | Retired key no longer valid for API requests; System rejects calls with retired key; Active keys continue to work |
| **Test Data** | Multiple API keys: Active (current), Retired (previous), New (recently generated) |
| **Expected Result** | Only Active and New keys accepted; Retired key fails immediately; Audit trail records retirement |

### TS-7: Backend Request Validation

**Scenario:** Incoming request validates tenant, subscription, and scope

| Element | Details |
|---------|---------|
| **Preconditions** | Request arrives with valid API key from Workday consumer; Workday entitled to Directory APIs only |
| **Given** | API Gateway receives request with Workday credential (api key: "xyz123") for Directory API endpoint |
| **When** | System validates: (1) Product associated with tenant, (2) Auth service authority checked, (3) Scope matches request, (4) Subscription rules applied |
| **Then** | All validations pass; Request forwarded to backend Directory API service |
| **Test Data** | Request Endpoint: "/api/directory/resources"; Credential Scope: "api-directory-apis"; Tenant ID: "acme-corp" |
| **Expected Result** | Request processed; Audit log records validation steps; Response returned to Workday consumer |

### TS-8: Unauthorized Product Access Attempt

**Scenario:** Workday consumer attempts to access Incident & Impacts Export API (not provisioned)

| Element | Details |
|---------|---------|
| **Preconditions** | Workday consumer has access to Directory APIs only; Incident API requires separate product |
| **Given** | API Gateway receives request from Workday with API key for Incident & Impacts Export API endpoint |
| **When** | System validates scope; Workday credential scope is "api-directory-apis" but request requires "api-incident-impacts-export" |
| **Then** | Validation FAILS; Request is rejected with 403 Forbidden |
| **Test Data** | Request Scope Required: "api-incident-impacts-export"; Credential Scope: "api-directory-apis" |
| **Expected Result** | Request rejected immediately; Error message: "Access denied to requested API product"; Audit log records failed access attempt |

### TS-9: Internal API Protection

**Scenario:** External consumer attempts to call internal-only APIm API

| Element | Details |
|---------|---------|
| **Preconditions** | Internal API endpoint requires internal claim token; External consumer has external credential |
| **Given** | External consumer sends request to internal API endpoint with external API key |
| **When** | Backend API checks claim token in request |
| **Then** | Claim token is external type; Backend rejects request as unauthorized |
| **Test Data** | Internal API: "/api/internal/management/consumers"; Token Type: "external" (not "internal") |
| **Expected Result** | Request rejected with 401 Unauthorized; Error: "Insufficient permissions for internal API"; Audit log records unauthorized attempt |

### TS-10: Onboarding Email and Credential Link

**Scenario:** New API consumer receives onboarding email

| Element | Details |
|---------|---------|
| **Preconditions** | New consumer registration completed; Email system configured |
| **Given** | Administrator completes registration for "FreshIntegration" consumer with email "fresh@company.com" |
| **When** | System sends welcome email with temporary credential link |
| **Then** | Email contains: temporary link, setup documentation link, support contact; Link expires after 30 days |
| **Test Data** | Email Address: "fresh@company.com"; Link Expiry: 30 days; Content: HTML email with links |
| **Expected Result** | Email delivered; Consumer clicks link; Page displays credentials with setup guide |

---

## Edge Cases and Boundary Conditions

### Edge Case 1: Expired Credential Link
**Condition:** Consumer clicks onboarding link after 30-day expiry  
**Expected Behavior:** Link shows "Expired" message; Consumer must contact support to request new link  
**Validation:** System timestamps all links; Comparison against expiry rules enforced

### Edge Case 2: Concurrent Credential Rotation
**Condition:** Customer initiates rotation while in-flight request uses old key  
**Expected Behavior:** In-flight request completes; New rotation applies after response sent  
**Validation:** Request-level consistency; Grace period handles overlaps

### Edge Case 3: Empty Scope List
**Condition:** No API products provisioned for tenant during credential generation  
**Expected Behavior:** System displays message "No API products available"; Customer cannot generate credential until provisioning  
**Validation:** Pre-validation before credential form display

### Edge Case 4: Multiple Active Credentials
**Condition:** Consumer has 5 active API keys with different scopes  
**Expected Behavior:** Each key independently validated; Request validated against specific key's scopes  
**Validation:** Per-credential scope validation, not across all credentials

### Edge Case 5: Subscription Tier Downgrade
**Condition:** Customer downgrades subscription tier while consumer has active credential  
**Expected Behavior:** Quota/throttling rules adjusted immediately; Existing credential remains valid but subject to new rules  
**Validation:** Subscription change triggers rule recalculation; No force-revocation

### Edge Case 6: Malformed Credential Token
**Condition:** Request includes corrupted or malformed API key  
**Expected Behavior:** System rejects immediately with 401 Unauthorized  
**Validation:** Token format validation before database lookup

### Edge Case 7: Tenant ID Mismatch
**Condition:** Request includes valid credential for Tenant A but targeting Tenant B resources  
**Expected Behavior:** System validates tenant association; Request rejected if mismatch  
**Validation:** Tenant ID in credential vs. resource request must match

### Edge Case 8: Scope Expansion During Feature Release
**Condition:** New API product "Analytics Engine" released; New scope "api-analytics-engine" added  
**Expected Behavior:** New scope visible in UI; Customers can allocate to existing consumers  
**Validation:** Scope list dynamically generated from backend; No hardcoding

---

## Data Requirements

### Consumer Profile Data

| Field | Type | Constraints | Example |
|-------|------|-------------|---------|
| Consumer ID | UUID | Unique, auto-generated | `550e8400-e29b-41d4-a716-446655440000` |
| Consumer Name | String | Required, 2-255 chars, no special chars | "Workday Integration" |
| Consumer Email | Email | Required, valid format | "integration@workday.com" |
| Support Tier | Enum | Premium, Standard, Basic | "Premium" |
| Status | Enum | Active, Suspended, Retired | "Active" |
| Tenant ID | UUID | Required, references tenant | `550e8400-e29b-41d4-a716-446655440111` |
| Created Date | DateTime | Auto-generated, immutable | "2026-03-01T10:30:00Z" |
| Updated Date | DateTime | Auto-updated on modification | "2026-06-01T15:45:00Z" |
| Created By | String | Administrator ID or system | "admin@company.com" |

### Credential Data

| Field | Type | Constraints | Example |
|-------|------|-------------|---------|
| Credential ID | UUID | Unique, auto-generated | `660e8400-e29b-41d4-a716-446655440000` |
| Consumer ID | UUID | Foreign key to Consumer | `550e8400-e29b-41d4-a716-446655440000` |
| Credential Type | Enum | API_KEY, OAUTH_TOKEN | "API_KEY" |
| Secret Hash | String | SHA-256 hash, never plaintext | `[hashed_value]` |
| Scopes | Array | List of api-{product-name} strings | ["api-directory-apis", "api-incidents"] |
| Status | Enum | Active, Rotating, Retired | "Active" |
| Created Date | DateTime | Auto-generated | "2026-05-15T12:00:00Z" |
| Expires Date | DateTime | 90 days default or manual setting | "2026-08-13T12:00:00Z" |
| Last Used | DateTime | Updated on each request | "2026-06-01T09:15:00Z" |
| Rotation Grace Period | DateTime | Duration old key remains valid | "2026-06-02T12:00:00Z" |

### Tenant-Product Association

| Field | Type | Constraints | Example |
|-------|------|-------------|---------|
| Tenant ID | UUID | Unique tenant identifier | `550e8400-e29b-41d4-a716-446655440111` |
| Product ID | UUID | API product identifier | `880e8400-e29b-41d4-a716-446655440222` |
| Product Name | String | Display name | "Directory APIs" |
| Subscription Tier | Enum | Premium, Standard, Basic | "Premium" |
| Rate Limit | Integer | Requests per minute | 1000 |
| Quota | Integer | Total requests per month | 100000 |
| Throttle Threshold | Percent | When to apply throttling | 80 |
| Provisioned Date | DateTime | When tenant received access | "2025-11-20T00:00:00Z" |

---

## API Requirements

### Authentication Service Integration

**Endpoint:** `/oauth/scope-sync`  
**Method:** POST  
**Purpose:** Synchronize available scopes to Authentication Service

```json
Request:
{
  "scopes": ["api-directory-apis", "api-incidents", "api-analytics-engine"],
  "source": "api-management",
  "timestamp": "2026-06-01T10:00:00Z"
}

Response (200 OK):
{
  "status": "success",
  "scopes_registered": 3,
  "timestamp": "2026-06-01T10:00:00Z"
}
```

### API Gateway Validation Endpoint

**Endpoint:** `/validation/credential-scope`  
**Method:** POST  
**Purpose:** Validate incoming credential against scope requirements

```json
Request:
{
  "tenant_id": "550e8400-e29b-41d4-a716-446655440111",
  "credential_id": "660e8400-e29b-41d4-a716-446655440000",
  "requested_scope": "api-directory-apis",
  "api_product": "Directory APIs"
}

Response (200 OK):
{
  "valid": true,
  "consumer_name": "Workday Integration",
  "scopes": ["api-directory-apis", "api-incidents"],
  "quota_remaining": 45000,
  "rate_limit_remaining": 500
}

Response (403 Forbidden):
{
  "valid": false,
  "reason": "insufficient_scope",
  "required_scope": "api-analytics-engine",
  "available_scopes": ["api-directory-apis"]
}
```

### Backend Request Validation

**Validation Sequence:**

1. Extract credential from request header
2. Hash credential and lookup in Credentials table
3. Retrieve associated Consumer and scopes
4. Retrieve Tenant from Consumer.Tenant_ID
5. Verify Product is provisioned for Tenant
6. Verify requested scope matches Product requirement
7. Check subscription tier and apply quota/throttle rules
8. Verify internal claim token (if internal API)
9. Update Last_Used timestamp
10. Log validation audit record

---

## Non-Functional Requirements

### Performance Requirements

| Requirement | Target | Rationale |
|-------------|--------|-----------|
| Credential Validation Response Time | < 100ms (p95) | Real-time API request processing |
| Consumer Registration | < 2s | User experience for admin UI |
| Credential Generation | < 500ms | User experience for credential creation |
| Scope Synchronization to Auth Service | < 5s | Background operation; not user-blocking |
| Audit Log Write | Asynchronous | Should not impact request processing |

### Security Requirements

| Requirement | Implementation |
|-------------|-----------------|
| Secret Storage | Hash secrets using SHA-256 with salt; never store plaintext |
| Secret Display | Display only at creation time; provide one copy-to-clipboard opportunity |
| Transport Security | All APIs require HTTPS/TLS 1.2+ |
| Credential Rotation | Grace period (24-48 hours) for smooth transitions |
| Token Verification | Backend APIs verify internal claim token; External credentials cannot impersonate internal |
| Audit Logging | Log all credential operations: create, rotate, retire, access |
| Rate Limiting | Apply subscription-based rate limits; Throttle on threshold breach |
| Access Control | Only authenticated admin can manage consumers; Customers manage own credentials |

### Reliability Requirements

| Requirement | Implementation |
|-------------|-----------------|
| Credential Lookup Availability | 99.9% uptime for validation endpoint |
| Scope Synchronization Retry | 3 retries with exponential backoff if Auth Service unavailable |
| Audit Log Durability | Persist to durable storage; Don't lose logs on system failure |
| Credential Grace Period | Minimum 24 hours; default 48 hours for old keys during rotation |

### Compliance Requirements

- Support audit trail of all credential operations (create, modify, retire, access)
- Implement role-based access control (admin vs. customer)
- Enforce customer data isolation (tenant separation)
- Provide credential retirement capability for security compliance
- Log all API access for audit and forensics

---

## Test Scenarios Summary

| Scenario | Category | Acceptance Criteria | Status |
|----------|----------|-------------------|--------|
| TS-1: API Consumer Registration | Functional | AC-1 | Ready |
| TS-2: API Product Allocation | Functional | AC-2 | Ready |
| TS-3: API Key Generation | Functional | AC-3 | Ready |
| TS-4: Key Not Visible on Revisit | Functional | AC-3 | Ready |
| TS-5: Credential Rotation | Functional | AC-3 | Ready |
| TS-6: Credential Retirement | Functional | AC-3 | Ready |
| TS-7: Backend Request Validation | Integration | AC-5, AC-6 | Ready |
| TS-8: Unauthorized Product Access | Security | AC-2 | Ready |
| TS-9: Internal API Protection | Security | AC-4 | Ready |
| TS-10: Onboarding Email | Functional | User Story US-6 | Ready |

---

## Success Criteria

1. ✅ All 4 acceptance criteria satisfied in test scenarios
2. ✅ Edge cases documented with expected behavior
3. ✅ API integration points clearly specified
4. ✅ Data model defined with constraints
5. ✅ Security requirements enforced
6. ✅ Non-functional requirements measurable
7. ✅ Audit trail capability confirmed
8. ✅ Tenant isolation verified

---

## Next Steps

1. **QA Lead Review** - Validate completeness and clarity
2. **Architecture Review** - Confirm API integration feasibility
3. **Security Review** - Verify security and compliance requirements
4. **Test Case Generation** - Generate 75+ test cases following test-case-generator skill
5. **Development Kickoff** - Team planning and sprint allocation

**Document Status:** DRAFT - Ready for Stakeholder Review
