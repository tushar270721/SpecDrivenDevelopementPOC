# Test Cases: FE#735316 - API Consumer and Scope Management

**Feature:** [APIm] 6 API Consumer and Scope Management  
**Feature ID:** FE#735316  
**Status:** DRAFT - Ready for QA Review  
**Created:** 2026-06-04  
**Test Case Count:** 89 across 7 categories

---

# FUNCTIONAL TEST CASES

---

# TC-FE735316-001

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-001 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can register new API consumer with name, contact email, and tier in API consumer management interface

## Preconditions

1. System Administrator is authenticated with API management permissions
2. Administrator has access to API Consumer Management interface
3. Consumer does not already exist in the system
4. All required fields are available for input

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | "Workday Integration" |
| Contact Email | "integration@workday.com" |
| Tier | "Premium" |
| Expected Status | "Active" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to API Consumer Management interface | Consumer list displays with "Create New Consumer" button visible |
| 2 | Click "Create New Consumer" button | Consumer creation form opens with fields: Name, Email, Tier |
| 3 | Enter Consumer Name: "Workday Integration" | Text entered in name field, validation passes (no special characters) |
| 4 | Enter Contact Email: "integration@workday.com" | Email entered in field, format validation passes |
| 5 | Select Tier: "Premium" from dropdown | Tier dropdown shows Premium, Standard, Basic options; Premium selected |
| 6 | Click Save | System creates consumer record with status "Active" and displays confirmation message "Consumer registered successfully" |
| 7 | Verify consumer in list | New consumer "Workday Integration" appears in consumer list with status "Active" |
| 8 | Verify backend notification | System forwards consumer metadata to backend for registration; Audit log records creation event |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-002

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-002 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can transition API consumer through lifecycle states Active to Suspended to Retired with status persistence

## Preconditions

1. System Administrator is authenticated with appropriate permissions
2. API consumer "Workday Integration" exists with status "Active"
3. Consumer status management interface is accessible
4. All lifecycle states are supported by the system

## Test Data

| Field | Value |
|-------|-------|
| Consumer | "Workday Integration" |
| State Transitions | Active → Suspended → Retired |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open consumer details for "Workday Integration" | Consumer page displays with current status "Active" and state transition options |
| 2 | Click "Suspend Consumer" action | Confirmation dialog appears asking for reason/comment |
| 3 | Enter suspension reason and confirm | System updates consumer status to "Suspended"; Audit log records timestamp, administrator ID, and reason |
| 4 | Verify suspended state persists | Consumer list shows "Workday Integration" with status "Suspended" |
| 5 | Open suspended consumer again | Status displayed as "Suspended" with option to "Retire" or "Reactivate" |
| 6 | Click "Retire Consumer" action | Confirmation dialog displays with retirement details |
| 7 | Confirm retirement | System updates status to "Retired"; Consumer no longer appears in active consumer list, only in retired archive |
| 8 | Verify retired state persists | Query database confirms consumer status = "Retired" with retirement timestamp recorded |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-003

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-003 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can allocate specific API product to integration client and system forwards product and subscription tier to backend

## Preconditions

1. Customer is authenticated with API management permissions
2. Integration client "Workday" exists with status "Active"
3. Customer has provisioned "Directory APIs" product
4. Subscription tier information available in system

## Test Data

| Field | Value |
|-------|-------|
| API Product | "Directory APIs" |
| Subscription Tier | "Premium" |
| Backend Property | backendURL_DirectoryAPIs |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to integration client details page for "Workday" | Client profile displays with "Allocate API Products" section |
| 2 | Click "Add API Product" button | Available products list displays: Directory APIs, Incident & Impacts Export, Analytics Engine |
| 3 | Select "Directory APIs" from available products | Selected product highlighted; Subscription tier information displayed: "Premium tier provisioned" |
| 4 | Confirm product allocation | System allocates Directory APIs to Workday consumer; Displays confirmation "API product allocated successfully" |
| 5 | Verify allocation in UI | Customer interface shows Workday client has "Directory APIs" allocated with tier "Premium" |
| 6 | Verify backend integration | System forwards product metadata and subscription tier to backend through backendURL_DirectoryAPIs property |
| 7 | Check audit log | Audit trail records: allocation timestamp, customer ID, product name, tier information |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-004

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-004 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can allocate multiple API products to single integration client with independent credential scopes for each product

## Preconditions

1. Customer is authenticated with API management permissions
2. Integration client "Workday" exists
3. Multiple API products provisioned: Directory APIs, Analytics Engine
4. Customer has permissions to allocate multiple products

## Test Data

| Field | Value |
|-------|-------|
| Client | "Workday" |
| Products | Directory APIs, Analytics Engine |
| Expected Scopes | "api-directory-apis", "api-analytics-engine" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open integration client "Workday" allocation interface | Current allocations show empty or existing products list |
| 2 | Click "Add API Product" and select "Directory APIs" | First product allocated; Displayed in allocated products section |
| 3 | Click "Add API Product" again and select "Analytics Engine" | Second product allocation initiates; System allows multiple product selection |
| 4 | Confirm both allocations | Both products now appear in Workday's allocated products: Directory APIs, Analytics Engine |
| 5 | Generate credential for Workday | System creates single credential with dual scopes: "api-directory-apis" AND "api-analytics-engine" |
| 6 | Verify credential scopes | Generated credential includes both scopes for validating against both products independently |
| 7 | Test with both products | Requests using this credential validate successfully against both Directory APIs and Analytics Engine endpoints |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-005

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-005 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can generate API key for integration client and system displays key only at creation time never on subsequent views

## Preconditions

1. Customer is authenticated with API management permissions
2. Integration client "Workday" exists with Directory APIs allocated
3. Credential generation interface is accessible
4. No previous credentials exist for the client

## Test Data

| Field | Value |
|-------|-------|
| Credential Type | "API Key" |
| Format | UUID format or alphanumeric string |
| Display Behavior | Show once, hide on refresh |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday client credential management | Credentials section displays with "Generate New API Key" button |
| 2 | Click "Generate New API Key" button | System generates unique API key in secure format (UUID or similar) |
| 3 | Verify key displayed on screen | Generated key displayed prominently on screen with copy-to-clipboard button available |
| 4 | Note the displayed key | Customer copies key to secure location or notes it |
| 5 | Navigate away and return to Workday credentials page | Previous generated key is NOT displayed; Only credential identifier shown (e.g., "api-key-***xyz789") |
| 6 | Attempt to view original key | Original key cannot be retrieved from UI; System only shows masked version or hint |
| 7 | Verify key in backend | Database confirms key stored in hashed format (never plaintext) with creation timestamp |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-006

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-006 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can rotate API key for integration client and old key remains valid during grace period then rejected automatically

## Preconditions

1. Customer is authenticated with API management permissions
2. Workday client has active API key currently processing requests
3. System supports grace period for credential rotation (24-48 hours)
4. Existing requests are actively using the old key

## Test Data

| Field | Value |
|-------|-------|
| Old Key | Active for past 30 days |
| Grace Period | 48 hours |
| New Key | Generated during rotation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open Workday client credential management | Active API key displayed with "Rotate Key" action available |
| 2 | Click "Rotate Key" button | System generates new API key while keeping old key valid |
| 3 | Display new key to customer | New key displayed with copy-to-clipboard; Old key still functional |
| 4 | Customer receives new key and configures | Customer updates their integration to use new key; Old key still accepts requests during grace period |
| 5 | Send request with old key during grace period | API Gateway validates old key; Request accepted and processed normally |
| 6 | Monitor grace period expiration | After 48 hours (configurable), old key expires |
| 7 | Send request with expired key after grace period | API Gateway rejects request with 401 Unauthorized; Error: "Credential expired, please use current key" |
| 8 | Verify audit trail | System logs: rotation timestamp, old key deprecation, new key activation, grace period duration |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-007

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-007 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can retire API key and system immediately revokes access while maintaining audit trail of retirement action

## Preconditions

1. Customer is authenticated with API management permissions
2. Workday client has multiple API keys: one Active, one marked for retirement
3. Customer intends to revoke access for specific key
4. Active requests may be using the key being retired

## Test Data

| Field | Value |
|-------|-------|
| Key to Retire | Oldest active key (30 days old) |
| Action | Immediate revocation |
| No Grace Period | Revoked key rejected immediately |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Open Workday client credentials management | Multiple API keys listed: Current (Active), Previous (48 hrs old) |
| 2 | Select "Previous" key for retirement | Confirmation dialog displays: "Retire this key immediately? All requests using this key will be rejected." |
| 3 | Confirm retirement | System marks key as "Retired"; Changes status immediately |
| 4 | Verify retired state | Retired key no longer appears in active credentials list; Only shows in audit history or retired archive |
| 5 | Attempt request with retired key | API Gateway validates key; Determines key status is "Retired" |
| 6 | Verify request rejection | Request immediately rejected with 403 Forbidden; Error: "Credential has been retired and is no longer valid" |
| 7 | Verify active key works | Current active key continues to accept requests without interruption |
| 8 | Check audit log | System records: retirement timestamp, customer ID, key identifier, immediate revocation note |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-008

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-008 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway validates incoming request checks tenant association with API product and rejects if tenant not entitled

## Preconditions

1. Request arrives at API Gateway with valid API key from Workday
2. Tenant "acme-corp" provisioned "Directory APIs" product
3. Request targets Directory API endpoint
4. All validation components functional

## Test Data

| Field | Value |
|-------|-------|
| Request Endpoint | "/api/directory/resources" |
| API Key | Valid Workday credential |
| Tenant | "acme-corp" |
| Required Scope | "api-directory-apis" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | API Gateway receives request with Workday API key | Request intercepted for validation; Key decoded to identify consumer and tenant |
| 2 | Extract tenant ID from key: "acme-corp" | Tenant context established from credential metadata |
| 3 | Check authority in Authentication Service | System queries auth service: Is "acme-corp" associated with "Directory APIs"? |
| 4 | Authority confirms positive association | Auth service confirms: acme-corp has provisioned Directory APIs product |
| 5 | Verify scope in credential | Credential scope validated: scope contains "api-directory-apis" matching request requirement |
| 6 | Apply subscription-based rules | System checks subscription tier (Premium) for quota/throttling rules; All checks pass |
| 7 | Forward request to backend | All validations successful; Request forwarded to Directory API backend service |
| 8 | Verify audit logging | System records validation steps with timestamps: tenant validation, scope validation, rule application, backend forwarding |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-009

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-009 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway rejects request when consumer attempts to access API product not provisioned for their tenant with 403 Forbidden

## Preconditions

1. Workday consumer has access to "Directory APIs" only
2. Workday consumer attempts request to "Incident & Impacts Export API"
3. Incident API requires separate product provisioning not owned by acme-corp tenant
4. API Gateway has all validation rules configured

## Test Data

| Field | Value |
|-------|-------|
| Consumer Scope | "api-directory-apis" |
| Request Scope Required | "api-incident-impacts-export" |
| Expected Response | 403 Forbidden |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | API Gateway receives request with Workday API key targeting Incident API | Request intercepted; Key validated and decoded |
| 2 | Extract credential scope: "api-directory-apis" | Scope extracted from credential token |
| 3 | Determine required scope for request: "api-incident-impacts-export" | Request endpoint mapped to required scope |
| 4 | Compare consumer scope with required scope | Scopes do not match: "api-directory-apis" ≠ "api-incident-impacts-export" |
| 5 | Validate tenant entitlement for Incident API | Check authority: Is acme-corp provisioned for Incident & Impacts Export? Answer: NO |
| 6 | Reject request with 403 Forbidden | Request immediately rejected; Response: "Access denied to requested API product: Incident & Impacts Export API" |
| 7 | Return descriptive error to consumer | Error response includes: specific product name, suggestion to contact support for provisioning |
| 8 | Record access denial in audit log | System logs: timestamp, consumer ID, tenant ID, attempted product, attempted endpoint, rejection reason |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-010

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-010 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Backend API verifies internal claim token before processing and rejects external credentials attempting internal API access

## Preconditions

1. Internal backend API endpoint: "/api/internal/management/consumers"
2. API requires verification of internal claim token
3. External consumer sends request with external API key
4. External credential lacks internal claim token

## Test Data

| Field | Value |
|-------|-------|
| Internal API | "/api/internal/management/consumers" |
| Token Type in External Key | "external" |
| Expected Token Type | "internal" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | External consumer (Workday) sends request to internal API with external credential | API Gateway forwards request to backend; Includes token extracted from credential |
| 2 | Backend API receives request | Backend API processes request header extraction and token verification |
| 3 | Extract claim token from request | Backend retrieves token claiming to be: type="external", scope="api-directory-apis" |
| 4 | Verify token type against requirement | Backend checks: Does this endpoint require "internal" token? Answer: YES |
| 5 | Compare token type: "external" vs required "internal" | Token type mismatch detected; External token cannot access internal endpoint |
| 6 | Reject request with 401 Unauthorized | Backend returns 401 Unauthorized; Error: "Insufficient permissions for internal API - internal authorization required" |
| 7 | Prevent further processing | Backend does not execute API logic; Request rejected before accessing consumer management functions |
| 8 | Log unauthorized attempt in audit trail | System records: timestamp, consumer ID, token type, endpoint attempted, rejection reason, backend audit entry |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-011

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-011 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents external consumer credential from impersonating internal roles or access scopes through claim token validation

## Preconditions

1. External credential for Workday consumer exists with normal external scope
2. Consumer attempts to manipulate or spoof internal claim in request
3. Backend validates all claim tokens against internal registry

## Test Data

| Field | Value |
|-------|-------|
| Spoofed Claim | type="internal", role="admin" |
| Actual Claim | type="external", scope="api-directory-apis" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Consumer attempts to add forged "internal" claim to request | Forged claim added to request header: claim_token="{type:internal, role:admin}" |
| 2 | API Gateway receives request with credential and forged claim | Gateway validates credential (accepted) but verifies claim against stored token |
| 3 | Compare provided claim with credential's actual claim | System detects mismatch: provided claim ≠ stored claim in credential database |
| 4 | Determine claim consistency | Claim validation fails; External credential cannot provide internal claim |
| 5 | Reject forged claim attempt | Request rejected with 401 Unauthorized; Error: "Token mismatch - credential claims do not match request claims" |
| 6 | Prevent backend access | Request does not reach backend service; Rejected at gateway validation layer |
| 7 | Verify immutable claim storage | Credentials store claim info encrypted in database; Tokens cryptographically signed to prevent tampering |
| 8 | Record impersonation attempt in security log | System logs: timestamp, consumer ID, spoofing attempt details, detection method, rejection timestamp |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-012

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-012 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API scope naming convention enforces format api-{api-product-name} and scopes stored in Authentication Service for token validation

## Preconditions

1. New API product being registered: "Analytics Engine"
2. Scope naming convention in place: "api-{product-name}"
3. Authentication Service ready to store and manage scopes
4. Multiple API products with consistent naming

## Test Data

| Field | Value |
|-------|-------|
| Product Name | "Analytics Engine" |
| Expected Scope | "api-analytics-engine" |
| Storage Location | Authentication Service scope registry |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Register new API product "Analytics Engine" | System generates scope name following convention: "api-analytics-engine" |
| 2 | Verify scope format validation | System validates scope: contains "api-" prefix, uses lowercase, uses hyphens for spaces |
| 3 | Store scope in Authentication Service | System writes scope to Authentication Service scope registry |
| 4 | Query Authentication Service for available scopes | Authentication Service returns list including: "api-directory-apis", "api-analytics-engine", "api-incident-impacts-export" |
| 5 | Generate credential with new scope | Credential generated with scope "api-analytics-engine" linked to product |
| 6 | Validate scope during token generation | Token generation includes scope from Authentication Service registry |
| 7 | Verify scope during request validation | API Gateway queries Authentication Service: Is "api-analytics-engine" valid? Response: YES |
| 8 | Confirm consistency across systems | Scope naming consistent across credential generation, token validation, backend authorization |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-013

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-013 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System applies subscription-based quota rules to consumer requests and throttles if quota exceeded based on subscription tier

## Preconditions

1. Workday consumer has "Premium" subscription tier
2. Premium tier allows 10,000 requests per hour quota
3. Workday has used 9,500 requests in current hour
4. New request incoming within same hour

## Test Data

| Field | Value |
|-------|-------|
| Subscription Tier | "Premium" |
| Quota Limit | 10,000 requests/hour |
| Used | 9,500 requests |
| Remaining | 500 requests |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends 475 valid requests during same hour | Each request validated; Quota counter decremented |
| 2 | API Gateway validates each request | Quota counter updated: used = 9,975 |
| 3 | Workday sends next request (476th of batch) | API Gateway checks quota: remaining = 25 requests in current hour bucket |
| 4 | Request within quota passes | Request accepted and forwarded; Quota counter: 9,976 |
| 5 | Send request exceeding quota limit | Request 10,001 arrives in same hour |
| 6 | API Gateway checks quota | Quota validation fails: 10,001 > 10,000 limit for Premium tier |
| 7 | Apply throttling rule | Request throttled; Response: HTTP 429 Too Many Requests; Retry-After header: 3600 seconds |
| 8 | Record throttling event in audit log | System logs: timestamp, consumer ID, tier, quota exhausted, throttling applied, hour bucket identifier |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-014

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-014 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer views available API products list and can select from products provisioned for their tenant without filtering

## Preconditions

1. Customer is authenticated with API management permissions
2. Customer's tenant "acme-corp" has provisioned multiple products
3. System displays all available products to customer
4. Selection interface is accessible

## Test Data

| Field | Value |
|-------|-------|
| Tenant | "acme-corp" |
| Provisioned Products | Directory APIs, Analytics Engine, Incident & Impacts Export |
| Display | All available without filtering applied |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to API allocation interface for consumer creation | Available products list displays |
| 2 | View products dropdown | All products provisioned for acme-corp listed: Directory APIs (Premium), Analytics Engine (Standard), Incident & Impacts Export (Enterprise) |
| 3 | Verify product information | Each product shows: name, subscription tier, status (Active/Archived) |
| 4 | Verify no filters applied | All available products visible; No filtering by status, tier, or date |
| 5 | Select product "Analytics Engine" | Product selected for allocation to consumer |
| 6 | Verify selection UI feedback | Selected product highlighted; Tier information displayed |
| 7 | Add second product | Can select additional product (e.g., "Incident & Impacts Export") |
| 8 | Complete allocation | Both products allocated to consumer; All selections confirmed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-015

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-015 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer cannot manually add consumer to system and only authorized administrators can register new API consumers through management interface

## Preconditions

1. Customer is authenticated with standard permissions (not admin)
2. Customer attempts to access consumer registration interface
3. Access control enforced for administrative functions
4. Role-based permissions implemented

## Test Data

| Field | Value |
|-------|-------|
| User Role | "Customer" (not Administrator) |
| Permission | No consumer registration access |
| Expected Result | Access denied |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer logs in with customer account | Customer authenticated with standard customer role permissions |
| 2 | Search for consumer registration interface | Customer cannot locate "Create New Consumer" option in navigation menu |
| 3 | Attempt direct URL access to registration page | System intercepts navigation; Displays "Access Denied" message |
| 4 | Try to access registration API endpoint directly | API returns 403 Forbidden; Error: "Insufficient permissions to access this resource" |
| 5 | Verify administrator-only access | Only Administrator role has consumer registration permissions |
| 6 | Administrator logs in | Administrator sees full consumer management interface including "Create New Consumer" |
| 7 | Customer views delegation options | Customer can request from Administrator to register new consumer; Support contact provided |
| 8 | Verify audit log | System records access denial attempt: timestamp, user ID, denied resource, reason: "Insufficient permissions" |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-016

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-016 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer verifies allocated API products display for integration client with status showing Active assignments and subscription tiers

## Preconditions

1. Customer is authenticated with API management permissions
2. Integration client "Workday" has multiple API products allocated
3. Allocated products: Directory APIs (Active, Premium), Analytics Engine (Active, Standard)
4. Product information is current and synchronized

## Test Data

| Field | Value |
|-------|-------|
| Consumer | "Workday Integration" |
| Allocated Products | Directory APIs, Analytics Engine |
| Status | Active for both |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday client details | Client profile page displays with "Allocated API Products" section |
| 2 | View allocated products list | Section displays table/list: Product Name | Tier | Status | Action |
| 3 | Verify Directory APIs allocation | Product shows: "Directory APIs" | "Premium" | "Active" | with options to Edit or Remove |
| 4 | Verify Analytics Engine allocation | Product shows: "Analytics Engine" | "Standard" | "Active" | with Edit/Remove options |
| 5 | Verify product status is accurate | Both products show status matching backend configuration: "Active" |
| 6 | Check subscription tier accuracy | Premium and Standard tiers displayed match customer's provisioned tier levels |
| 7 | Verify allocation persistence | Allocated products remain consistent across page refreshes and sessions |
| 8 | Confirm UI responsiveness | Product list updates quickly; No noticeable delay in displaying allocation information |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-017

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-017 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can generate OAuth token credential with proper scope and claims for integration client with secure token display

## Preconditions

1. Customer is authenticated with API management permissions
2. Integration client "Workday" exists with Directory APIs allocated
3. OAuth credential generation supported by system
4. Token generation interface accessible

## Test Data

| Field | Value |
|-------|-------|
| Credential Type | "OAuth Token" |
| Scope | "api-directory-apis" |
| Token Format | JWT or similar secure format |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday credential management | Credentials section displays with "Generate New Credential" dropdown |
| 2 | Select credential type "OAuth Token" | OAuth credential generation form opens |
| 3 | Verify scope pre-populated | Scope field shows allocated scope: "api-directory-apis" (based on product allocation) |
| 4 | Verify claims included | Token claims pre-configured: type="external", customer="acme-corp", consumer="workday-integration" |
| 5 | Click "Generate OAuth Token" | System generates secure token in JWT or similar format |
| 6 | Display token on screen | Generated token displayed with copy-to-clipboard functionality; User can save securely |
| 7 | Verify token structure | Token includes: header (alg), payload (claims), signature; Properly formatted for API authentication |
| 8 | Hide token on next visit | Token not displayed on subsequent page views; Only token identifier shown (e.g., "OAuth-token-***abc123") |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-018

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-018 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API request with malformed or corrupted credential token is rejected immediately with 401 Unauthorized before database lookup

## Preconditions

1. Request arrives at API Gateway with malformed API key
2. Malformed token cannot be parsed or decoded
3. Gateway validation logic checks token format first
4. No database query attempted for invalid tokens

## Test Data

| Field | Value |
|-------|-------|
| Malformed Token | "invalid-token-xyz-corrupted" |
| Expected Response | 401 Unauthorized |
| Error Message | "Invalid credential format" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | API Gateway receives request with credential header | Request intercepted for validation; Token extraction attempted |
| 2 | Attempt to parse malformed token | Token parsing fails: "invalid-token-xyz-corrupted" cannot be decoded |
| 3 | Verify token format validation | Gateway checks token format against expected pattern (e.g., UUID format for API keys) |
| 4 | Determine token validity | Token format validation fails; Token rejected as malformed |
| 5 | Skip database lookup | System does not query database for invalid token; Short-circuits at format validation |
| 6 | Return 401 Unauthorized | Request immediately rejected with 401 Unauthorized; Error: "Invalid credential format - token cannot be parsed" |
| 7 | Verify performance impact | Malformed token rejection completes within <50ms (no database query overhead) |
| 8 | Log validation failure | System records: timestamp, malformed token hash, rejection reason, client IP for security monitoring |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-019

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-019 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents tenant ID mismatch attack by validating credential tenant matches targeted resource tenant and rejecting if mismatch

## Preconditions

1. Credential belongs to tenant "acme-corp"
2. Request targets resource in tenant "other-company"
3. Multi-tenant system with strict tenant isolation
4. Validation enforced at gateway level

## Test Data

| Field | Value |
|-------|-------|
| Credential Tenant | "acme-corp" |
| Resource Tenant | "other-company" |
| Expected Result | Request rejected |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | API Gateway receives request with acme-corp credential | Request intercepted; Credential extracted and decoded |
| 2 | Extract tenant ID from credential | Tenant context identified: credential_tenant = "acme-corp" |
| 3 | Extract target resource information | Request path parsed to determine resource tenant: resource_tenant = "other-company" |
| 4 | Compare tenant IDs | System performs validation: credential_tenant == resource_tenant? |
| 5 | Detect tenant mismatch | Comparison fails: "acme-corp" ≠ "other-company" |
| 6 | Apply tenant isolation rule | Request rejected immediately to prevent cross-tenant access |
| 7 | Return 403 Forbidden | Response: "Access denied - tenant mismatch"; Error includes: attempted tenant, authorized tenant |
| 8 | Record security event | System logs: timestamp, credential tenant, target tenant, mismatch details, source IP, rejection |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-020

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-020 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System displays helpful error messages to consumer when API product access denied and suggests contacting support for provisioning

## Preconditions

1. Consumer attempts access to unprovisioned API product
2. Request denied due to missing product entitlement
3. Error messaging configured with support information
4. Support contact available to customer

## Test Data

| Field | Value |
|-------|-------|
| Attempted Product | "Advanced Analytics" |
| Customer Support Email | "support@enablon.com" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Consumer sends request to unprovisioned API endpoint | Request validation fails; Product not provisioned for tenant |
| 2 | API Gateway composes error response | Error response generated with 403 status and meaningful message |
| 3 | Include specific product name in error | Error message: "Access denied to requested API product: Advanced Analytics" |
| 4 | Provide actionable guidance | Error includes suggestion: "To enable this product, contact support at support@enablon.com" |
| 5 | Include request details for support | Error response includes: request ID, timestamp, tenant name, attempted product for support ticket context |
| 6 | Display error to consumer | Consumer receives structured error response (JSON) with all context information |
| 7 | Verify message clarity | Error message is understandable and actionable (not generic "403 Forbidden") |
| 8 | Verify support contact accessible | Support email link/contact information provided in error message is valid and monitored |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-021

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-021 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can manage multiple independent API credentials for same integration client with different scopes and statuses

## Preconditions

1. Customer is authenticated with API management permissions
2. Workday client has Directory APIs and Analytics Engine allocated
3. Customer has generated multiple credentials
4. Credential management interface supports multi-credential display

## Test Data

| Field | Value |
|-------|-------|
| Client | "Workday" |
| Credential 1 | API Key, scope: "api-directory-apis" |
| Credential 2 | OAuth Token, scope: "api-analytics-engine" |
| Credential 3 | API Key, scope: both APIs |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday credentials management | Credentials section displays list of all generated credentials |
| 2 | View credential list | Table shows: Type | Scope | Status | Created | Actions |
| 3 | Verify Credential 1 properties | API Key | "api-directory-apis" | Active | creation timestamp |
| 4 | Verify Credential 2 properties | OAuth Token | "api-analytics-engine" | Active | creation timestamp |
| 5 | Verify Credential 3 properties | API Key | "api-directory-apis, api-analytics-engine" | Active | creation timestamp |
| 6 | Manage Credential 1 | Can rotate, view hints, or retire independently |
| 7 | Retire Credential 1 | Credential 1 status changes to Retired; Credential 2 and 3 remain Active |
| 8 | Verify independent lifecycle | Each credential has independent status; Retiring one does not affect others |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-022

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-022 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces tenant data isolation and prevents credentials from one tenant accessing resources of another tenant

## Preconditions

1. Two tenants exist: "acme-corp" and "other-company"
2. Each tenant has independent API credentials
3. API Gateway validates tenant context on every request
4. Cross-tenant data access prevented

## Test Data

| Field | Value |
|-------|-------|
| Tenant 1 | "acme-corp" |
| Tenant 2 | "other-company" |
| Tenant 1 Credential | Valid for acme-corp |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Tenant 1 (acme-corp) generates valid API credential | Credential created with tenant context: tenant="acme-corp" |
| 2 | Acme-corp sends request with their credential to directory endpoint | Request includes tenant header/context: tenant="acme-corp" |
| 3 | API Gateway validates tenant context | Tenant extracted from credential: "acme-corp" |
| 4 | Request targets other-company resource | Resource URL/context indicates: target_tenant="other-company" |
| 5 | Validate tenant isolation rule | System checks: credential_tenant == target_tenant? → "acme-corp" ≠ "other-company" |
| 6 | Enforce isolation | Cross-tenant access attempt denied; Request rejected |
| 7 | Return 403 Forbidden | Response: "Access denied - cannot access resources from different tenant" |
| 8 | Verify no data leakage | No acme-corp data accessible to other-company; Audit log records attempted cross-tenant access |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-023

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-023 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents creation of API credentials with duplicate names for same integration client with validation error message

## Preconditions

1. Integration client "Workday" exists
2. Customer has already created credential named "Production Key 1"
3. Customer attempts to create another credential with same name
4. Name uniqueness validation enabled per client

## Test Data

| Field | Value |
|-------|-------|
| Existing Credential Name | "Production Key 1" |
| Duplicate Attempt | "Production Key 1" |
| Error Message | "Credential name already exists for this client" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday credential creation form | Credential creation interface displays with name field |
| 2 | View existing credentials | List shows: "Production Key 1" (API Key, Active) |
| 3 | Enter duplicate name "Production Key 1" | Name field populated with existing credential name |
| 4 | Click Save/Generate | System validates credential name uniqueness |
| 5 | Detect duplicate name | Validation identifies: name "Production Key 1" already exists for this client |
| 6 | Display validation error | Form displays error: "Credential name already exists for this client. Please choose a unique name." |
| 7 | Prevent credential creation | Save button disabled or submission rejected; Credential not created |
| 8 | Allow user correction | User can modify name to unique value (e.g., "Production Key 2") and retry creation successfully |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-024

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-024 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces API key character limit and prevents creation of credentials exceeding maximum length constraints

## Preconditions

1. API key generation configured with length limit
2. System enforces length validation during generation
3. Credential creation form includes length constraints
4. Limit consistently applied to all credential types

## Test Data

| Field | Value |
|-------|-------|
| Minimum Length | 16 characters |
| Maximum Length | 512 characters |
| Standard Length | 32 characters |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System generates API key for Workday | Key generated in standard format: 32 characters |
| 2 | Verify key length validation | Key length = 32; Validation passes (between 16-512 limits) |
| 3 | Display generated key | Key displayed with proper formatting; Length confirmed valid |
| 4 | Store in database | Key stored with length validation confirmed in database |
| 5 | Verify minimum length enforcement | If system attempted to create sub-16 char key: validation would fail |
| 6 | Verify maximum length enforcement | If system attempted to create 600+ char key: validation would fail |
| 7 | Validate consistency | All generated credentials meet length requirements; No short or excessively long keys |
| 8 | Document limits in API spec | API documentation references: key length requirements 16-512 characters |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-025

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-025 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles concurrent credential generation requests from same customer and creates unique credentials without conflicts or duplication

## Preconditions

1. Customer initiates multiple credential generation requests simultaneously
2. Two or more requests arrive within same second
3. System processes concurrent requests sequentially or with proper locking

## Test Data

| Field | Value |
|-------|-------|
| Concurrent Requests | 3 simultaneous API key generation requests |
| Expected Result | 3 unique, non-conflicting credentials created |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer initiates first credential generation | Request 1 submitted to backend; Processing begins |
| 2 | Customer initiates second request (< 100ms later) | Request 2 submitted while Request 1 still processing |
| 3 | Customer initiates third request (concurrent) | Request 3 submitted; All three concurrent |
| 4 | Backend processes concurrent requests | System applies locking or queuing to ensure sequential processing |
| 5 | Generate Credential 1 | Unique API key generated: "key-uuid-001" |
| 6 | Generate Credential 2 | Unique API key generated: "key-uuid-002" (different from key-001) |
| 7 | Generate Credential 3 | Unique API key generated: "key-uuid-003" (different from both previous) |
| 8 | Verify all credentials created successfully | All three credentials stored in database with no conflicts; Each has unique identifier |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-026

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-026 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents subscription tier downgrade while consumer has active credential and applies new quota rules after change

## Preconditions

1. Workday consumer has "Premium" tier with 10,000 req/hr quota
2. Workday has active API key currently processing requests
3. Customer initiates tier downgrade to "Standard" (1,000 req/hr quota)
4. Existing credential remains active during and after downgrade

## Test Data

| Field | Value |
|-------|-------|
| Current Tier | "Premium" (10,000 req/hr) |
| New Tier | "Standard" (1,000 req/hr) |
| Action | Downgrade while credential active |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday processes 8,000 requests in current hour with Premium tier | All requests accepted; Quota deducted (remaining 2,000) |
| 2 | Administrator initiates tier change: Premium → Standard | Tier change request submitted |
| 3 | System applies tier downgrade | New tier "Standard" with 1,000 req/hr quota becomes effective immediately |
| 4 | New quota rule applies | Remaining quota recalculated: Workday already used 8,000 (exceeds new 1,000 limit) |
| 5 | Verify quota enforcement | New requests from Workday immediately throttled; Exceeds new 1,000 req/hr limit |
| 6 | Send new request after tier downgrade | Request arrives; Quota check: already used 8,000 >> 1,000 limit |
| 7 | Request throttled with 429 | Response: 429 Too Many Requests; Retry-After header indicates when quota resets (next hour) |
| 8 | Record tier change impact in audit | System logs: downgrade timestamp, old tier, new tier, quota impact, throttling applied for existing credentials |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-027

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-027 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer cannot delete API product allocation while consumer has active credential using that product scope

## Preconditions

1. Workday consumer has Directory APIs allocated with active API key
2. Active key includes scope "api-directory-apis"
3. Customer attempts to remove Directory APIs allocation
4. System prevents deletion of active product allocation

## Test Data

| Field | Value |
|-------|-------|
| Consumer | "Workday" |
| Product | "Directory APIs" |
| Active Credential | Yes, using product scope |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday product allocations | Currently allocated products displayed: Directory APIs (Active), Analytics Engine (Active) |
| 2 | Locate "Remove" action for Directory APIs | Remove button available for each allocated product |
| 3 | Click "Remove" for Directory APIs | System processes removal request |
| 4 | Check for active credentials using product | System queries: Are there active credentials with "api-directory-apis" scope? Answer: YES |
| 5 | Validate business rule | System enforces: Cannot remove product allocation while active credentials depend on it |
| 6 | Prevent removal | Removal request blocked; Displays warning: "Cannot remove this product allocation - active credentials are using this product scope" |
| 7 | Provide guidance | Message includes: "Retire or rotate all credentials using 'api-directory-apis' scope before removing this allocation" |
| 8 | Allow alternative action | Customer can: retire existing credentials first, then remove allocation, OR add new product allocation |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-028

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-028 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System encrypts all stored API keys and OAuth tokens never storing plaintext credentials in database or logs

## Preconditions

1. API key "abc-xyz-123-key" generated and saved
2. Database stores encrypted credentials only
3. Key management system (KMS) configured for encryption/decryption
4. Audit logging does not include plaintext credentials

## Test Data

| Field | Value |
|-------|-------|
| Plaintext Key | "abc-xyz-123-key" |
| Stored Format | Encrypted (AES-256 or similar) |
| Log Display | Key hint only: "***123-key" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Generate API key | System generates plaintext key: "abc-xyz-123-key" |
| 2 | Display to customer | Key displayed once on screen; Customer copies key |
| 3 | Store in database | System encrypts key before storage: encrypted_value = encrypt_aes256("abc-xyz-123-key") |
| 4 | Query stored credential | Database query returns: encrypted_credential_field (encrypted blob) |
| 5 | Verify plaintext not stored | Direct database query shows only encrypted value; Plaintext never visible |
| 6 | Check system logs | Logs show key operations: "credential_generated", "credential_rotated", but never full key value |
| 7 | Attempt decryption only when needed | Only during API validation does system decrypt (within secure process) |
| 8 | Verify audit trail | Audit logs include: credential operations, user actions, but mask actual key values with hints (***123-key) |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-029

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-029 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System validates subscription tier configuration and rejects tier assignment if tier not defined in system

## Preconditions

1. System has defined subscription tiers: Premium, Standard, Basic
2. Administrator attempts to assign undefined tier "Elite"
3. Tier validation enforced during consumer registration
4. Available tiers configured in system settings

## Test Data

| Field | Value |
|-------|-------|
| Valid Tiers | Premium, Standard, Basic |
| Invalid Tier | "Elite" (not defined) |
| Error Message | "Subscription tier 'Elite' not recognized" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator opens consumer registration form | Tier dropdown displays valid options: Premium, Standard, Basic |
| 2 | Try to manually enter undefined tier "Elite" | Manual entry rejected or restricted to dropdown selection |
| 3 | Attempt API-level tier assignment with "Elite" | API request with tier="Elite" submitted to backend |
| 4 | Backend validates tier against configuration | System checks: Is "Elite" defined in tier configuration? Answer: NO |
| 5 | Validate tier value | Tier validation fails; "Elite" not in valid tier list |
| 6 | Reject assignment | API returns 400 Bad Request; Error: "Invalid subscription tier - 'Elite' not defined in system" |
| 7 | Provide valid tier options | Error message includes list of valid tiers: ["Premium", "Standard", "Basic"] |
| 8 | Consumer not created with invalid tier | Consumer registration fails; No record created with invalid tier |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-030

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-030 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System tracks credential usage statistics and displays request count per credential with throttling event details

## Preconditions

1. Workday credential has been used over time
2. Usage statistics collected by API Gateway
3. Credential usage dashboard accessible to customer
4. Statistics include throttling events if occurred

## Test Data

| Field | Value |
|-------|-------|
| Credential | Workday API Key |
| Total Requests (this month) | 350,000 |
| Throttling Events | 3 events |
| Peak Usage Hour | Monday 2-3 PM, 10,500 requests |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday credential details | Credential page displays properties and usage statistics section |
| 2 | View usage statistics | Statistics displayed: Total Requests: 350,000; Time Period: Last 30 days |
| 3 | View daily usage chart | Chart shows requests per day over last 30 days; Trends visible |
| 4 | View throttling events | Section lists throttling occurrences: 3 events; Dates, times, durations |
| 5 | Expand throttling event details | Event 1: Date: 2026-06-01, Time: 2:30 PM, Duration: 5 min, Reason: "Quota exceeded - Premium tier" |
| 6 | View peak usage information | Peak usage hour identified: Monday 2-3 PM with 10,500 requests |
| 7 | Export usage report | Customer can export usage statistics to CSV/PDF for billing/analysis |
| 8 | Verify statistics accuracy | Usage counts match actual request logs in audit system; No discrepancies |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-031

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-031 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System applies credential expiration policy and requires rotation after 90 days with notification to consumer before expiry

## Preconditions

1. API key created 85 days ago
2. Rotation policy: 90-day expiration
3. Customer receives notification 5 days before expiration
4. Notification system operational

## Test Data

| Field | Value |
|-------|-------|
| Created Date | 85 days ago |
| Expiration Date | 5 days from today |
| Notification Sent | Yes, 5 days before expiry |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Credential created 85 days ago | Credential status: "Active" with creation timestamp recorded |
| 2 | System detects approaching expiration | Background job checks: expiration = creation_date + 90 days; Today within 5 days of expiration? YES |
| 3 | Send expiration notification | System sends email to customer: "Your API key expires in 5 days - please rotate your credentials" |
| 4 | Verify notification content | Email includes: credential identifier, expiration date, rotation link, support contact |
| 5 | Customer receives notification | Email delivered successfully; Includes clear call-to-action for rotation |
| 6 | Monitor credential status | As expiration date approaches (90 days), credential remains "Active" but marked "Expiring Soon" |
| 7 | Day 90 arrives | Credential reaches exact 90-day mark |
| 8 | Enforce expiration | Credential status changes to "Expired"; Subsequent API requests with this key return 401 Unauthorized; Customer must rotate or create new credential |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-032

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-032 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can export credential audit trail for compliance showing all operations on credential with timestamps and user context

## Preconditions

1. Workday API key has history of operations: created, rotated twice, throttled once
2. Customer has access to audit trail export functionality
3. All events timestamped and attributed to users

## Test Data

| Field | Value |
|-------|-------|
| Credential | Workday API Key |
| Operations | Created, Rotated (x2), Throttled |
| Export Format | CSV or PDF |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday credential audit trail | Audit section displays all operations on this credential |
| 2 | View operation history | List shows: Created (2026-04-01), Rotated (2026-05-01), Rotated (2026-06-01), Throttled (2026-06-03) |
| 3 | View operation details | Each row shows: Date | Time | Operation | User | Tenant | Details |
| 4 | Click "Export Audit Trail" | Export dialog appears with format options: CSV, PDF |
| 5 | Select CSV format and export | System generates CSV file with complete audit history |
| 6 | Verify exported content | CSV includes all columns: timestamp, operation, user_id, user_email, tenant, description, ip_address |
| 7 | Verify compliance format | Export format suitable for compliance review; All required fields present |
| 8 | Download file successfully | File downloads to customer device; Can be stored for compliance records or forwarded to auditors |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-033

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-033 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces role-based access control and prevents customer from viewing or modifying other customers' API credentials

## Preconditions

1. Customer A has credentials for their integration clients
2. Customer B attempts to access Customer A's credentials
3. Role-based access control enforced
4. Cross-customer data access prevented

## Test Data

| Field | Value |
|-------|-------|
| Customer A | "acme-corp" |
| Customer B | "other-company" |
| Attempted Access | View A's credentials |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer B logs in with their account | Session established with Customer B (other-company) context |
| 2 | Customer B attempts URL access to Customer A's credentials | Direct URL: "/api/credentials/workday-key-123" where key belongs to acme-corp |
| 3 | System validates request context | System checks: request_customer_context == credential_owner_context? |
| 4 | Detect access violation | Comparison fails: "other-company" ≠ "acme-corp" |
| 5 | Block access | System denies request; Returns 403 Forbidden |
| 6 | Prevent data leakage | No credential data exposed to Customer B; System does not reveal existence of other customer's credentials |
| 7 | Log access attempt | Audit trail records: timestamp, Customer B user ID, attempted credential, access denied |
| 8 | Verify security isolation | Customer B cannot view, edit, rotate, or retire any credentials belonging to Customer A or other customers |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-034

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-034 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents API product allocation removal without replacing existing credential scope dependencies on product

## Preconditions

1. Workday has Directory APIs allocated with active credential
2. Credential scope = "api-directory-apis"
3. Customer attempts to deallocate Directory APIs from Workday
4. System validates credential dependencies before removal

## Test Data

| Field | Value |
|-------|-------|
| Consumer | "Workday" |
| Product | "Directory APIs" |
| Dependent Credential Scope | "api-directory-apis" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | View Workday consumer profile | Allocated products section shows: Directory APIs (Active), Analytics Engine (Active) |
| 2 | Attempt to remove Directory APIs allocation | Click "Remove" action next to Directory APIs |
| 3 | System checks for credential dependencies | Query: Are there credentials for this consumer using "api-directory-apis"? Answer: YES |
| 4 | Identify blocking credentials | Credential identified: "Workday-prod-key" with scope "api-directory-apis" is Active |
| 5 | Display dependency warning | Warning message: "Cannot remove Directory APIs - credential 'Workday-prod-key' depends on this product's scope" |
| 6 | Prevent removal | Removal operation blocked; Allocation remains unchanged |
| 7 | Provide resolution steps | Message includes: "To remove this product allocation: (1) Retire or modify credential 'Workday-prod-key', (2) Then remove product allocation" |
| 8 | Allow alternative action | Customer can: rotate credential scope to different product, or retire credential entirely before removing allocation |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-035

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-035 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer can rename API credential for organizational clarity and renaming does not affect credential functionality or scope

## Preconditions

1. Workday has credential with name "Production Key 1"
2. Customer wants to rename to "Directory APIs Production Key"
3. Credential is active and processing requests
4. Renaming does not change credential value or scope

## Test Data

| Field | Value |
|-------|-------|
| Current Name | "Production Key 1" |
| New Name | "Directory APIs Production Key" |
| Scope | "api-directory-apis" (unchanged) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Navigate to Workday credential "Production Key 1" | Credential details displayed with current name |
| 2 | Click "Edit" or "Rename" button | Name field becomes editable; Current name shown in input |
| 3 | Clear current name and enter new name | Name changed from "Production Key 1" to "Directory APIs Production Key" |
| 4 | Save credential with new name | System updates credential record with new name |
| 5 | Verify name change persisted | Credential list and details now show new name: "Directory APIs Production Key" |
| 6 | Verify credential still functional | Existing API requests using this credential continue to work without interruption |
| 7 | Verify scope unchanged | Scope remains "api-directory-apis"; Renaming does not modify scope or access control |
| 8 | Verify audit trail updated | Audit log records: rename operation, timestamp, old name, new name, user_id |

## Reviewer Comments

*To be completed during review.*

---

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE735316-036

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-036 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator has full access to consumer registration management and can perform all lifecycle operations on consumers

## Preconditions

1. Administrator authenticated with admin role
2. Consumer management interface accessible
3. All administrative permissions granted
4. Full lifecycle operations available

## Test Data

| Field | Value |
|-------|-------|
| User Role | System Administrator |
| Permissions | Full consumer management access |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator logs in with admin credentials | Admin role confirmed; Dashboard displays full management interface |
| 2 | Navigate to Consumer Management | "Create New Consumer", "View All", "Edit", "Suspend/Retire" options all visible |
| 3 | Create new consumer | Administrator can register "New Client" with all fields |
| 4 | View all consumers | Administrator can see all consumer records across all tenants (if multi-tenant) |
| 5 | Suspend consumer | Administrator can transition any consumer to Suspended status |
| 6 | Retire consumer | Administrator can transition any consumer to Retired status |
| 7 | View consumer details | Administrator has access to all consumer information and history |
| 8 | Verify audit trail access | Administrator can view audit logs for all consumer operations |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-037

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-037 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer has limited permissions to manage only their own credentials and cannot access other customer accounts or credentials

## Preconditions

1. Customer logged in with customer role
2. Two different customer accounts exist: "acme-corp", "other-company"
3. Each customer has their own credentials
4. Role-based access control enforced

## Test Data

| Field | Value |
|-------|-------|
| Current Customer | "acme-corp" |
| Own Credentials | Visible and editable |
| Other Customer Credentials | Hidden, access denied |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer logs in (acme-corp) | Customer dashboard displays; Shows acme-corp's consumers and credentials only |
| 2 | View own credentials | Customer can view list of their own credentials: "Prod Key 1", "Dev Key 1" |
| 3 | Edit own credential | Customer can rename, rotate, or retire their own credentials |
| 4 | Attempt access to other customer credentials | Direct URL: "/credentials/other-company-key-123" |
| 5 | System validates permission | Tenant context check: credential_tenant != user_tenant |
| 6 | Deny access | Request rejected with 403 Forbidden; Error: "Access denied" |
| 7 | Verify isolation | Customer cannot view, edit, or modify other company's credentials |
| 8 | Log access denial | Audit trail records: timestamp, attempted customer context, actual customer context, access denied |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-038

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-038 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Support Lead can view consumer tier and support policies but cannot modify consumer registration or credential information

## Preconditions

1. Support Lead role authenticated
2. Consumer records accessible in read-only mode
3. Tier and support policy information visible
4. Modification permissions restricted

## Test Data

| Field | Value |
|-------|-------|
| User Role | Support Lead |
| Permission | Read-only access to consumer info |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Support Lead logs in | Dashboard displays consumers and support policies; Limited UI showing read-only sections |
| 2 | View consumer list | Consumer list displays: Name, Tier, Status, Support Policy |
| 3 | Click consumer for details | Consumer details page shows: Name (read-only), Contact (read-only), Tier: "Premium" (read-only), Support Policy: "24/7 support" (read-only) |
| 4 | Verify policy information | Support policy details displayed: response_time, support_level, contact_escalation |
| 5 | Attempt to edit consumer name | Edit button disabled or missing; Form field greyed out (read-only) |
| 6 | Attempt to modify tier | Tier field read-only; Cannot change from Premium to Standard |
| 7 | Attempt to create new consumer | Create button not available; Consumer registration not accessible to Support Lead role |
| 8 | Attempt credential generation | Credential generation option not available; Support Lead cannot generate credentials |

## Reviewer Comments

*To be completed during review.*

---

---

# END-TO-END TEST CASES

---

# TC-FE735316-039

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-039 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end workflow Administrator registers API consumer then Customer allocates product and generates credentials successfully

## Preconditions

1. Administrator and Customer have appropriate permissions
2. API products provisioned for customer's tenant
3. System ready for consumer registration and allocation
4. Manual test to observe complete workflow

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | "Workday Integration" |
| Product | "Directory APIs" |
| Tier | "Premium" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator creates new consumer "Workday Integration" | Consumer created with status "Active"; Appears in consumer list |
| 2 | Administrator assigns tier "Premium" | Consumer profile updated with tier information |
| 3 | Customer logs in and views consumers | Workday consumer appears in customer's consumer list |
| 4 | Customer allocates "Directory APIs" product | Product allocation confirms; Workday now has Directory APIs scope access |
| 5 | Customer generates API key | Unique API key created and displayed once for copying |
| 6 | Customer saves and tests credential | API key tested with sample request to Directory API |
| 7 | Verify request succeeds | Request processed successfully; Backend receives product/tier metadata |
| 8 | Verify audit trail | Complete workflow recorded: registration → allocation → credential generation → first request |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-040

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-040 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Administrator registers consumer multiple times validates concurrent registrations dont cause conflicts or data corruption

## Preconditions

1. Administrator initiates multiple consumer registrations
2. Three consumers registered nearly simultaneously
3. System processes without conflicts
4. Each consumer created with unique identity

## Test Data

| Field | Value |
|-------|-------|
| Consumers | Workday, Salesforce, ServiceNow |
| Concurrent | All registered within 5 seconds |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator initiates Workday registration | Workday registration submitted; Processing begins |
| 2 | Administrator initiates Salesforce registration | Salesforce registration submitted (Workday still processing) |
| 3 | Administrator initiates ServiceNow registration | ServiceNow registration submitted (concurrent with previous two) |
| 4 | Backend processes registrations | System applies proper locking/queuing; All three complete successfully |
| 5 | Verify Workday created | Workday appears in consumer list with status "Active"; Unique ID assigned |
| 6 | Verify Salesforce created | Salesforce appears in consumer list with status "Active"; Different unique ID |
| 7 | Verify ServiceNow created | ServiceNow appears in consumer list with status "Active"; Different unique ID |
| 8 | Verify no data corruption | Each consumer has correct information; No merged or duplicate records; All IDs unique |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-041

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-041 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Customer rotates credential then immediately uses new credential while old continues during grace period

## Preconditions

1. Workday has active credential in production
2. Production workload continuously using old credential
3. Grace period configured for 48 hours
4. Manual test to verify no service interruption

## Test Data

| Field | Value |
|-------|-------|
| Current Credential | Active, in use 30 days |
| Grace Period | 48 hours |
| New Credential | Generated during rotation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday's production system sends request with old credential | Request accepted during grace period; Processed normally |
| 2 | Customer initiates credential rotation | New credential generated; Old key marked for deprecation |
| 3 | Customer receives new credential | New key provided for configuration update |
| 4 | Workday updates production system (takes 2 hours) | Workday updates configuration to use new credential |
| 5 | Workday sends first request with new credential | Request accepted; Validated successfully; No errors |
| 6 | Verify old credential still works | Background system still using old credential sends request |
| 7 | Old credential request accepted | Request processed normally (still within grace period) |
| 8 | After 48 hours expire | Grace period ends; Old credential automatically expired; New requests with old key rejected |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-042

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-042 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Unauthorized product access attempt validates all validation layers tenant product scope preventing breach

## Preconditions

1. Workday provisioned Directory APIs only
2. Workday attempts access to Incident & Impacts Export API
3. All validation layers active
4. No single point of failure in authorization

## Test Data

| Field | Value |
|-------|-------|
| Valid Product | Directory APIs |
| Invalid Product | Incident & Impacts Export API |
| Credential Scope | "api-directory-apis" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends request to Incident API with their credential | Request arrives at API Gateway |
| 2 | Validation Layer 1: Credential Format | Gateway validates credential format; Format check passes |
| 3 | Validation Layer 2: Credential Authenticity | Gateway decrypts and validates credential signature; Authenticity confirmed |
| 4 | Validation Layer 3: Scope Validation | Gateway extracts scope: "api-directory-apis"; Required scope: "api-incident-impacts-export"; Mismatch detected |
| 5 | Validation Layer 4: Tenant Product Association | Gateway validates: Is acme-corp tenant associated with Incident API? Query auth service: NO |
| 6 | Request rejected at Layer 3-4 | Request fails scope and tenant validation layers; Rejected before backend |
| 7 | Return 403 Forbidden | Comprehensive error: "Cannot access Incident API - not provisioned for your tenant" |
| 8 | Record attempted breach | Security audit logs: timestamp, consumer, attempted product, validation failure points, source IP, denial |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-043

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-043 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Admin suspends then retires consumer and verifies all credentials invalidated immediately preventing further access

## Preconditions

1. Workday consumer has 3 active credentials
2. Multiple active requests using these credentials
3. Administrator initiates suspension then retirement
4. Manual test to verify credential invalidation timing

## Test Data

| Field | Value |
|-------|-------|
| Consumer | "Workday Integration" |
| Credentials | 3 active (Prod, Dev, Test) |
| Status Transition | Active → Suspended → Retired |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends requests with all 3 active credentials | All three requests processed successfully |
| 2 | Administrator suspends Workday consumer | Consumer status changed to "Suspended" |
| 3 | All 3 credentials immediately invalidated | System marks all credentials as "inactive" |
| 4 | Workday attempts request with Prod credential | API Gateway validates credential; Determines consumer is "Suspended"; Request rejected with 403 |
| 5 | Workday attempts with Dev credential | Dev credential also rejected; Consumer suspension blocks all credentials |
| 6 | Workday attempts with Test credential | Test credential also rejected; Comprehensive block on all consumer's credentials |
| 7 | Administrator retires Workday consumer | Consumer status changed to "Retired"; Credentials permanently invalidated |
| 8 | Verify permanent retirement | All 3 credentials permanently invalid; Cannot be reactivated; Would require new consumer registration |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-044

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-044 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Customer subscribes to new API product and existing credentials automatically updated with new scope

## Preconditions

1. Workday has Directory APIs product allocated
2. Existing credential with scope "api-directory-apis"
3. Customer provisions new Analytics Engine product
4. Credentials updated to include new scope
5. Manual test for scope update mechanism

## Test Data

| Field | Value |
|-------|-------|
| Existing Scope | "api-directory-apis" |
| New Product | "Analytics Engine" |
| Updated Scope | "api-directory-apis, api-analytics-engine" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday credential has existing scope "api-directory-apis" | Scope confirmed in credential metadata |
| 2 | Customer allocates new product "Analytics Engine" to Workday | Product allocation created in system |
| 3 | System identifies existing credentials | Background process detects: Workday has active credentials that should include new product |
| 4 | Credentials updated automatically | Existing credential scope updated to include: "api-analytics-engine" |
| 5 | Updated credential remains active | Credential ID unchanged; Secret unchanged; Only scope metadata updated |
| 6 | Workday sends request to Directory API endpoint | Request validates with updated scope containing "api-directory-apis"; Accepted |
| 7 | Workday sends request to Analytics API endpoint | Request validates with updated scope containing "api-analytics-engine"; Accepted |
| 8 | Verify no service interruption | Existing production workload continues using same credential; No manual rotation required; Automatic scope expansion |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-045

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-045 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Backend system validates internal claim token and rejects external credential masquerading as internal system call

## Preconditions

1. Internal backend API endpoint requiring internal claim
2. External consumer with external credential
3. External consumer attempts internal API access
4. Backend enforces claim token validation

## Test Data

| Field | Value |
|-------|-------|
| Internal Endpoint | "/api/internal/admin/consumers" |
| External Credential | Valid for api-directory-apis |
| Expected Claim Type | "internal" |
| Actual Claim Type | "external" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | External consumer (Workday) sends request to internal endpoint | Request includes external credential token |
| 2 | API Gateway processes request | Gateway validates credential and forwards to backend with extracted claims |
| 3 | Backend API receives request | Backend checks endpoint: "/api/internal/admin/consumers" requires "internal" claim type |
| 4 | Backend extracts claim from token | Claim extracted: type="external", scope="api-directory-apis" |
| 5 | Backend validates claim type | Comparison: required="internal", actual="external" |
| 6 | Claim type validation fails | External claim cannot satisfy internal endpoint requirement |
| 7 | Backend rejects request with 401 | Response: "Unauthorized - internal endpoint requires internal claim token" |
| 8 | Log security event | Audit trail records: unauthorized access attempt, consumer ID, endpoint, claim mismatch, rejection timestamp |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-046

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-046 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Customer changes tier from Premium to Standard and quota immediately applied causing throttling on existing workload

## Preconditions

1. Workday Premium tier with 10,000 req/hr quota
2. Active workload averaging 8,500 req/hr
3. Administrator downgrades tier to Standard (1,000 req/hr)
4. Manual test to observe quota enforcement change

## Test Data

| Field | Value |
|-------|-------|
| Current Tier | Premium, 10,000 req/hr |
| New Tier | Standard, 1,000 req/hr |
| Active Workload | 8,500 req/hr average |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday workload running at 8,500 req/hr | Requests accepted and processed; Within Premium quota |
| 2 | Administrator initiates tier downgrade: Premium → Standard | Tier change submitted and applied immediately |
| 3 | System recalculates quota for Standard tier | New quota limit = 1,000 req/hr |
| 4 | Workday continues sending requests at 8,500 req/hr | Requests arrive at API Gateway |
| 5 | Gateway checks new quota: 8,500 > 1,000 limit | Quota check fails; Workload exceeds new limit |
| 6 | Throttling applied immediately | HTTP 429 Too Many Requests returned for quota-exceeding requests |
| 7 | Throttling error includes recovery info | Error response: Retry-After: 3600 seconds; Next quota reset in 60 minutes |
| 8 | Workday reduces request rate to ~1,000 req/hr | Workload adapted to new quota; All requests accepted within new limit |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-047

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-047 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario New API product released system discovers and adds new scope to asset library then customers can allocate immediately

## Preconditions

1. New API product "Advanced Analytics" deployed
2. New scope "api-advanced-analytics" created in Authentication Service
3. System discovers new scope through CI-CD or runtime mechanism
4. Customers can immediately allocate new product
5. Manual test to verify scope availability

## Test Data

| Field | Value |
|-------|-------|
| New Product | "Advanced Analytics" |
| New Scope | "api-advanced-analytics" |
| Discovery Mechanism | CI-CD pipeline or runtime initialization |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | New product "Advanced Analytics" released | Scope "api-advanced-analytics" registered in Authentication Service |
| 2 | System discovery job runs (CI-CD trigger or scheduled) | System queries Authentication Service for available scopes |
| 3 | New scope discovered | "api-advanced-analytics" returned in available scopes list |
| 4 | System updates scope cache/registry | New scope added to system's available products list |
| 5 | Customer accesses product allocation interface | Available products list includes new "Advanced Analytics" |
| 6 | Customer allocates Advanced Analytics to Workday | Product allocation succeeds; No manual intervention needed |
| 7 | Credential generation includes new scope | When customer generates new credential, "api-advanced-analytics" available as scope option |
| 8 | Verify immediate availability | No system restart required; Scope available to customers immediately after discovery |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-048

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-048 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Workday integration fails briefly due to service outage consumer retries request after service recovery and succeeds

## Preconditions

1. Workday integration active with valid credential
2. Backend API service experiences brief outage (5 minutes)
3. Workday implements retry logic with exponential backoff
4. Service recovers after outage

## Test Data

| Field | Value |
|-------|-------|
| Initial Request | Request sent to healthy API |
| Outage Duration | 5 minutes |
| Retry Attempts | 3 attempts with backoff |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends request with valid credential | Request forwarded by API Gateway; Backend healthy |
| 2 | Backend service becomes unavailable | Service responds with 503 Service Unavailable |
| 3 | Workday client receives 503 error | Retry logic triggered; Exponential backoff initiated (1 second wait) |
| 4 | Workday sends retry #1 after 1 second | Service still down; Returns 503 again |
| 5 | Retry logic waits exponentially (2 seconds) | Second retry delay applied |
| 6 | Workday sends retry #2 after 2 seconds | Service still down; 503 returned |
| 7 | Backend service recovers | After 5 minutes total, service back online and responding |
| 8 | Workday sends retry #3 after service recovery | Request succeeds; 200 OK returned; Transaction completes successfully |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-049

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-049 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end security scenario Workday credentials compromised customer immediately retires old credentials creates new ones without complete access loss

## Preconditions

1. Workday has 3 active credentials: Prod, Dev, Test
2. Credentials compromised (leaked in logs)
3. Customer discovers compromise
4. Customer takes immediate action to retire compromised keys
5. Manual test for emergency credential rotation scenario

## Test Data

| Field | Value |
|-------|-------|
| Compromised Credentials | Prod, Dev (leaked) |
| New Credentials | New Prod, New Dev |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer discovers Prod and Dev credentials compromised | Immediate action needed to prevent unauthorized access |
| 2 | Customer logs into credential management | Dashboard displays: Prod (Active), Dev (Active), Test (Active) |
| 3 | Customer retires Prod credential | Prod credential status changed to "Retired"; Immediately invalid |
| 4 | Customer retires Dev credential | Dev credential status changed to "Retired"; Immediately invalid |
| 5 | Malicious actor attempts to use compromised Prod key | API Gateway rejects with 401; Credential status verified as "Retired" |
| 6 | Customer generates New Prod credential | New unique credential created; Displayed for copying |
| 7 | Customer generates New Dev credential | Second new credential created |
| 8 | Customer updates systems with new credentials | Production continues with New Prod key; Dev continues with New Dev key; Test remains unaffected |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-050

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-050 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end compliance scenario Customer exports 90-day audit trail for Workday credentials and provides to compliance auditor with complete request history

## Preconditions

1. Workday credentials have 90+ days history
2. Multiple operations: creation, rotation, throttling events
3. Customer audit export functionality available
4. Manual test for compliance reporting workflow

## Test Data

| Field | Value |
|-------|-------|
| Audit Period | Last 90 days |
| Operations | Created, Rotated (x2), Throttled (x3), Requests: 42M |
| Export Format | CSV or PDF |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer navigates to Workday audit reports | Audit section displays options for export |
| 2 | Customer selects 90-day period for export | Date range picker set to: 90 days ago to today |
| 3 | Click "Export Audit Trail" | Export dialog shows format options: CSV, PDF |
| 4 | Select PDF format | System generates comprehensive PDF report |
| 5 | Verify report content | PDF includes: All operations, timestamps, user IDs, IP addresses, request counts, throttling events |
| 6 | Download PDF report | File downloads to customer device |
| 7 | Customer provides to compliance auditor | Auditor receives complete trail with all required information |
| 8 | Auditor validates compliance | Report includes all required elements for compliance review: operations, timestamps, modifications, access controls |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-051

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-051 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Customer allocates multiple API products to consumer generates single credential with combined scopes then validates against each product independently

## Preconditions

1. Workday consumer has Directory APIs and Analytics Engine allocated
2. Customer generates single credential covering both products
3. Credential includes both scopes
4. Requests validated independently against each scope

## Test Data

| Field | Value |
|-------|-------|
| Products Allocated | Directory APIs, Analytics Engine |
| Credential Scopes | "api-directory-apis", "api-analytics-engine" |
| Validation | Per-product independent validation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer allocates Directory APIs to Workday | Product allocation confirmed; Scope added |
| 2 | Customer allocates Analytics Engine to Workday | Second product allocation confirmed; Scope added |
| 3 | Customer generates single credential | System creates credential with combined scopes: ["api-directory-apis", "api-analytics-engine"] |
| 4 | Display credential with both scopes | Credential summary shows: Scopes: Directory APIs, Analytics Engine |
| 5 | Workday sends request to Directory API | Request validated against scope "api-directory-apis"; Scope check: PASS; Request accepted |
| 6 | Workday sends request to Analytics API | Request validated against scope "api-analytics-engine"; Scope check: PASS; Request accepted |
| 7 | Verify independent validation | Each request validated independently against respective scope |
| 8 | Verify combined credential efficiency | Single credential covers multiple products; Reduces credential management overhead |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-052

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-052 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Administrator reviews consumer usage reports and identifies high-quota consumer then adjusts tier to optimize costs

## Preconditions

1. Multiple consumers with different usage patterns
2. Some consumers underutilizing Premium tier resources
3. Administrator dashboard with usage analytics
4. Tier adjustment capability for optimization

## Test Data

| Field | Value |
|-------|-------|
| Consumers | Workday (Premium, 2M req/month), Salesforce (Premium, 500K req/month) |
| Optimization Opportunity | Salesforce downgrade to Standard tier |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator opens consumer usage dashboard | Dashboard displays: Consumers, Tiers, Monthly usage, Projected costs |
| 2 | Review Workday usage | Workday: Premium tier, 2,000,000 requests/month; High usage justifies Premium tier |
| 3 | Review Salesforce usage | Salesforce: Premium tier, 500,000 requests/month; Below optimal usage for Premium tier |
| 4 | Identify optimization opportunity | Salesforce could operate on Standard tier with 1,000 req/hr (approximately 720K req/month) |
| 5 | Simulate downgrade impact | System projects: Current cost (Premium) $500/month; Downgraded cost (Standard) $150/month; Savings: $350/month |
| 6 | Apply tier downgrade | Administrator changes Salesforce from Premium to Standard |
| 7 | Monitor post-change | Salesforce workload continues; Under 1,000 req/hr average; All requests accepted |
| 8 | Verify cost optimization | Monthly costs reduced; Tier remains suitable for Salesforce's actual usage patterns |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-053

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-053 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Scope available in Authentication Service but not yet exposed in UI and system gracefully handles requests with new scope

## Preconditions

1. New scope "api-advanced-analytics" exists in Authentication Service
2. UI has not yet been updated to show new scope
3. Internal systems or advanced users know new scope exists
4. System handles new scope requests gracefully

## Test Data

| Field | Value |
|-------|-------|
| New Scope | "api-advanced-analytics" |
| Available | In Authentication Service |
| UI Status | Not yet exposed |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | New scope "api-advanced-analytics" exists in Authentication Service | Scope registered and functional |
| 2 | Customer UI does not yet display new scope option | UI shows only existing scopes: Directory APIs, Analytics Engine |
| 3 | Administrator creates credential manually with advanced scope | Using API or backend admin tool, credential created with "api-advanced-analytics" scope |
| 4 | Credential validation when request arrives | API Gateway validates credential including new scope |
| 5 | Verify new scope accepted | System recognizes and validates "api-advanced-analytics" as legitimate scope |
| 6 | Request to advanced analytics endpoint succeeds | Request with new scope validates successfully |
| 7 | UI eventually updated to include new scope | After UI update, customers can allocate new product through normal interface |
| 8 | Existing credentials with new scope continue to work | No disruption; Backward compatibility maintained |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-054

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-054 |
| Priority | Low |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end onboarding journey New consumer receives welcome email then follows setup documentation and successfully integrates first API call

## Preconditions

1. Administrator registers new consumer "Acme API Integration"
2. Welcome email system configured
3. Setup documentation available
4. Testing environment accessible

## Test Data

| Field | Value |
|-------|-------|
| Consumer | "Acme API Integration" |
| Contact Email | "setup@acme.com" |
| Setup Method | Email link → Documentation → Test API call |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator registers new consumer and confirms | Consumer created with Active status |
| 2 | System sends welcome email | Email delivered to "setup@acme.com"; Contains: setup link, product list, documentation URL |
| 3 | Consumer clicks setup link in email | Link opens credential setup page with welcome message |
| 4 | Consumer follows getting started documentation | Documentation displays: create credentials, set API headers, test request |
| 5 | Consumer generates first API credential | API key created and displayed once |
| 6 | Consumer copies generated credential | Key copied and saved securely |
| 7 | Consumer follows test API call example | Documentation shows curl/SDK example; Consumer executes test request |
| 8 | First API call succeeds | Response returns: 200 OK with sample data; Consumer successfully integrated |

## Reviewer Comments

*To be completed during review.*

---

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# TC-FE735316-055

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-055 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles request with empty credential header and returns meaningful 401 error instead of system error

## Preconditions

1. API request arriving without credential header
2. System expects credential validation
3. Meaningful error messaging configured

## Test Data

| Field | Value |
|-------|-------|
| Credential Header | Empty or missing |
| Expected Error | 401 Unauthorized |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Client sends API request without Authorization header | Request arrives at API Gateway |
| 2 | Gateway attempts to extract credential | Extraction fails; No credential header present |
| 3 | Validate credential presence | System checks: Is credential header required? YES |
| 4 | Determine credential missing | Validation fails; No credential to authenticate |
| 5 | Return 401 Unauthorized | Response: "Missing or invalid authentication credential"; Error code: AUTH_MISSING |
| 6 | Include documentation link | Error response includes: link to authentication documentation |
| 7 | Verify meaningful message | Error message helps client understand missing credential is the issue |
| 8 | Log missing credential event | Audit trail records: timestamp, endpoint, missing credential attempt |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-056

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-056 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System rejects credential with expired timestamp signature and prevents replay attacks from past credentials

## Preconditions

1. Credential includes timestamp signature
2. Signature validity window: 5 minutes
3. Request with credential older than 5 minutes attempted
4. Replay attack prevention enabled

## Test Data

| Field | Value |
|-------|-------|
| Credential Timestamp | 10 minutes ago |
| Validity Window | 5 minutes |
| Current Time | Now |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Create credential with timestamp signature | Credential includes: creation_timestamp, expiry_timestamp (5 min later) |
| 2 | Use credential within 5-minute window | Request sent 2 minutes after creation; Timestamp validation passes |
| 3 | Request succeeds within window | Request accepted and processed |
| 4 | Wait for window expiry | Wait 5+ minutes from credential creation |
| 5 | Attempt request with same credential | Request sent 10 minutes after creation |
| 6 | Validate timestamp | Gateway checks: Is credential timestamp within 5-minute window? NO |
| 7 | Reject as replay attempt | Request rejected with 401 Unauthorized; Error: "Credential timestamp expired - possible replay attack" |
| 8 | Log replay prevention | Security log records: attempted replay, timestamp mismatch, prevention action |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-057

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-057 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles rate limiting and prevents consumer from exceeding requests per second threshold independent of hourly quota

## Preconditions

1. Rate limit configured: 100 req/sec per consumer
2. Consumer attempts burst of 150 requests in 1 second
3. Both per-second and hourly quota rules apply

## Test Data

| Field | Value |
|-------|-------|
| Rate Limit | 100 req/sec |
| Burst Attempt | 150 requests/sec |
| Hourly Quota | 10,000 req/hr |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Consumer sends 100 requests in 1 second | All requests within rate limit; Accepted |
| 2 | Consumer sends 101st request in same second | Rate limit validation triggered |
| 3 | Verify rate limit check | Per-second rate: 101 > 100 limit |
| 4 | Apply rate limiting rule | Request throttled; Returns 429 Too Many Requests |
| 5 | Verify independent from hourly quota | Hourly quota still has capacity (e.g., 9,900 left); Rate limit still enforced |
| 6 | Request retry after 1 second | Consumer sends new request in next second (now within limit) |
| 7 | Retry succeeds | New per-second window; Request accepted |
| 8 | Record rate limit event | Audit logs: rate limit exceeded, requests throttled, per-sec limit enforced independently |

## Reviewer Comments

*To be completed during review.*

---

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-FE735316-058

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-058 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents SQL injection attacks through credential validation and credential data stored safely

## Preconditions

1. Attacker attempts SQL injection via credential field
2. System validates and sanitizes all inputs
3. Credential storage uses parameterized queries

## Test Data

| Field | Value |
|-------|-------|
| Malicious Input | "'; DROP TABLE credentials; --" |
| Safe Storage | Parameterized queries, encrypted storage |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Malicious actor generates credential with injected SQL | Credential API receives: name="'; DROP TABLE credentials; --" |
| 2 | System validates credential input | Input sanitization applied; Special characters escaped |
| 3 | Store credential in database | System uses parameterized query: INSERT INTO credentials (name) VALUES (?) with value as parameter |
| 4 | SQL injection prevented | Payload stored as literal string, not executed |
| 5 | Query database for credentials | Database query: SELECT * FROM credentials returns all credentials intact |
| 6 | Credentials table still exists | No DROP TABLE executed; All data preserved |
| 7 | Stored value retrieved safely | Credential stored exactly as: "'; DROP TABLE credentials; --" (literal text) |
| 8 | Verify no SQL execution | Database logs show: prepared statement used, no schema modifications |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-059

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-059 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents XSS attacks in consumer profile and credential management UI by sanitizing all user inputs

## Preconditions

1. Administrator enters consumer name with XSS payload
2. UI renders consumer name in multiple locations
3. XSS attack prevention (sanitization, escaping) enabled

## Test Data

| Field | Value |
|-------|-------|
| XSS Payload | "<script>alert('XSS')</script>" |
| Expected Display | Literal text or HTML-escaped version |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Administrator creates consumer with name: "<script>alert('XSS')</script>" | Name input accepted by form |
| 2 | System sanitizes input before storage | System escapes special characters for safe storage |
| 3 | Store in database | Name stored as literal: "<script>alert('XSS')</script>" |
| 4 | Render consumer name in list | Consumer list displays name as: "&lt;script&gt;alert('XSS')&lt;/script&gt;" (HTML-escaped) |
| 5 | Render in detail page | Consumer detail page displays escaped version; Script tag visible as text, not executed |
| 6 | Verify no script execution | Browser does not execute script; No alert() popup appears |
| 7 | Inspect HTML source | HTML source shows: &lt;script&gt;...&lt;/script&gt; (escaped entities) |
| 8 | Verify security | No XSS vulnerability; Payload rendered as literal text throughout UI |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-060

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-060 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces HTTPS-only communication for all credential and API management endpoints preventing man-in-the-middle attacks

## Preconditions

1. Credential management endpoint configured for HTTPS
2. System rejects HTTP requests to sensitive endpoints
3. Security headers configured properly

## Test Data

| Field | Value |
|-------|-------|
| Endpoint | /api/credentials |
| HTTP Request | Attempted via insecure HTTP |
| Expected Response | Redirect or rejection to HTTPS |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Client attempts HTTP request to credential endpoint | Request sent to http://api.example.com/api/credentials |
| 2 | Server receives unencrypted HTTP request | Request arrives without SSL/TLS encryption |
| 3 | Server validates protocol requirement | System checks: Is this endpoint HTTPS-only? YES |
| 4 | Server denies HTTP request | Response: 301 Moved Permanently with redirect to https://api.example.com/api/credentials |
| 5 | Client follows HTTPS redirect | Client retries request using HTTPS |
| 6 | HTTPS request succeeds | Encrypted connection established; Request processed securely |
| 7 | Verify security headers | Response includes: HSTS header, Strict-Transport-Security: max-age=31536000 |
| 8 | Verify encryption | Communication encrypted; No credentials transmitted in plaintext |

## Reviewer Comments

*To be completed during review.*

---

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-FE735316-061

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-061 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Credential validation completes within 100ms p95 latency for typical authorization request with scope validation

## Preconditions

1. Typical API request with valid credential
2. All validation layers active
3. Performance monitoring in place
4. Manual test with latency measurement

## Test Data

| Field | Value |
|-------|-------|
| Target Latency P95 | 100ms |
| Validation Steps | Format, authenticity, scope, tenant, quota |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Send 1000 API requests with valid credentials | Requests distributed over time |
| 2 | Measure response time for each request | Latency captured: min, p50, p95, p99, max |
| 3 | Verify credential validation latency | Validation overhead minimal; Primary time credential decoding and scope validation |
| 4 | Check p95 latency | 95th percentile of requests complete within 100ms |
| 5 | Verify database lookup latency | Credential lookup from cache or database completes < 50ms |
| 6 | Verify scope validation latency | Scope validation against requirements < 30ms |
| 7 | Total validation latency | Sum of steps: credential extraction + format validation + authenticity + scope check = < 100ms P95 |
| 8 | Document performance baseline | Performance metrics recorded for regression testing |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-062

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-062 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles concurrent credential generation from multiple customers without race conditions or duplicate key generation

## Preconditions

1. Multiple customers initiating credential generation simultaneously
2. Concurrent requests processed safely
3. Unique key generation guaranteed
4. No race condition vulnerabilities

## Test Data

| Field | Value |
|-------|-------|
| Concurrent Customers | 5 |
| Concurrent Requests | 10 (2 per customer) |
| Expected Uniqueness | All 10 keys unique |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer A initiates credential generation | Request 1 submitted |
| 2 | Customer B initiates credential generation | Request 2 submitted simultaneously |
| 3 | Customer A initiates second credential | Request 3 submitted concurrent with others |
| 4 | Additional customers submit requests | Requests 4-10 submitted in rapid succession |
| 5 | Backend processes concurrent requests | System applies locking or atomic operations |
| 6 | Generate 10 unique credentials | All credentials generated successfully |
| 7 | Verify all credentials unique | Each credential has unique key; No duplicates across 10 keys |
| 8 | Verify atomic generation | No partial credential states; Each credential complete and valid |

## Reviewer Comments

*To be completed during review.*

---

---

# INTEGRATION TEST CASES

---

# TC-FE735316-063

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-063 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway and Authentication Service integration validates credential scope and returns 403 if scope invalid per auth service

## Preconditions

1. API Gateway connected to Authentication Service
2. Authentication Service authoritative for scope validation
3. Credential scope stored in Authentication Service
4. Request validation queries Authentication Service

## Test Data

| Field | Value |
|-------|-------|
| Credential Scope | "api-directory-apis" |
| Auth Service Response | Scope valid |
| Expected | Request accepted |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Request arrives with Workday credential | API Gateway extracts scope: "api-directory-apis" |
| 2 | Gateway queries Authentication Service | Query: Is scope "api-directory-apis" valid? |
| 3 | Authentication Service confirms scope valid | Response: Scope confirmed, not revoked, active |
| 4 | Gateway proceeds with authorization | All checks pass; Request authorized |
| 5 | Gateway forwards to backend | Request forwarded to intended backend service |
| 6 | Backend processes request | API processes request successfully |
| 7 | Response returned to client | 200 OK with expected response data |
| 8 | Verify integration | API Gateway depends on Authentication Service for scope truth; Integration confirmed |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-064

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-064 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway, Authentication Service, and Backend coordinate to prevent unauthorized internal API access through claim token validation

## Preconditions

1. External consumer with external credential
2. Internal backend API requiring internal claim
3. All three components (Gateway, Auth Service, Backend) functional
4. Claim validation enforced consistently

## Test Data

| Field | Value |
|-------|-------|
| Consumer Type | External |
| Credential Claim | type="external" |
| Target Endpoint | Internal API |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | External consumer sends request to internal endpoint | Request includes external credential |
| 2 | API Gateway extracts credential and claim | Claim: type="external", scope="api-directory-apis" |
| 3 | Gateway queries Authentication Service for claim validation | Auth Service validates claim matches credential |
| 4 | Auth Service confirms claim type: "external" | Claim verification succeeds; Claim legitimate for credential |
| 5 | Gateway checks endpoint requirement | Endpoint requires: claim.type == "internal" |
| 6 | Verify claim type mismatch | Endpoint requires "internal", claim is "external" |
| 7 | Gateway prevents request forwarding | Request rejected at gateway before backend receives it |
| 8 | Backend never receives request | Internal endpoint protected; Request never reaches backend logic |

## Reviewer Comments

*To be completed during review.*

---

---

# MORE END-TO-END TEST CASES

---

# TC-FE735316-065

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-065 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Complete credential lifecycle creation through retirement with multiple intermediate rotations and usage tracking

## Preconditions

1. Workday consumer created
2. Directory APIs allocated
3. Credential lifecycle spans 60 days
4. Multiple rotations and usage events expected

## Test Data

| Field | Value |
|-------|-------|
| Initial Credential | Created Day 1 |
| Rotations | Day 20, Day 40 |
| Usage | 5M+ requests over 60 days |
| Final State | Retired on Day 60 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Day 1: Create credential "Prod-Key-v1" | Initial credential created; Scope: "api-directory-apis" |
| 2 | Days 1-20: Process requests with v1 credential | Continuous usage; 2.5M requests tracked |
| 3 | Day 20: Customer rotates credential | v2 created with new secret; v1 enters grace period |
| 4 | Days 20-25: Both v1 and v2 accepted | Dual acceptance during transition; Workday systems update |
| 5 | Days 25+: Only v2 accepted | v1 grace period expired; v1 rejected; v2 handles all requests |
| 6 | Days 25-40: Process requests with v2 | Continuous usage; 2M requests tracked with v2 |
| 7 | Day 40: Rotate to v3 | v2 enters grace period; v3 new active credential |
| 8 | Day 60: Retire v3 | Final credential retired; All requests rejected unless new credential created |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-066

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-066 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Customer manages multi-product portfolio with different credentials per product evolving portfolio over time

## Preconditions

1. Customer has 3 products allocated initially
2. Portfolio changes: add 1 product, remove 1 product
3. Credentials managed throughout changes
4. Manual test to verify portfolio evolution

## Test Data

| Field | Value |
|-------|-------|
| Initial Products | Directory APIs, Analytics Engine, Incident API |
| Added | Advanced Analytics |
| Removed | Incident API |
| Final State | Directory APIs, Analytics, Advanced Analytics |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer starts with 3 products allocated | Credentials created: Key1 (scopes 1-3) |
| 2 | Customer adds Advanced Analytics product | Product 4 allocated; Scope added to Key1 or new Key2 created |
| 3 | Verify Key1 includes new scope | Credential scope updated to include all 4 products |
| 4 | Verify Key1 requests work for Advanced Analytics | Requests with new scope validated successfully |
| 5 | Customer removes Incident API product | Product 3 removed from allocation |
| 6 | Verify scope removed from credentials | Key1 scope updated to exclude api-incident-impacts-export |
| 7 | Verify old Incident API requests fail | Requests requiring api-incident-impacts-export now rejected |
| 8 | Verify other product scopes still work | Directory APIs and Analytics Engine continue functioning through portfolio changes |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-067

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-067 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Admin discovers misconfiguration admin tier assigned to customer fixed within 1 minute no data loss or corruption

## Preconditions

1. Customer mistakenly assigned "Admin" tier (internal only)
2. Admin identifies configuration error
3. Customer has active credentials
4. Fix required without data loss
5. Manual test for configuration correction

## Test Data

| Field | Value |
|-------|-------|
| Incorrect Tier | "Admin" (should be "Premium") |
| Time to Fix | < 1 minute |
| Data Loss | None expected |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer assigned incorrect "Admin" tier | Configuration applied with wrong tier |
| 2 | Admin detects error in customer configuration | Admin reviews tiers; Identifies: customer=Admin (invalid for customers) |
| 3 | Admin initiates tier correction | Tier changed from "Admin" to "Premium" |
| 4 | System validates new tier | Tier validation: "Premium" is valid customer tier |
| 5 | Update applied successfully | Customer tier corrected to "Premium" within 1 minute |
| 6 | Verify credentials still valid | Existing credentials remain active; No forced rotation |
| 7 | Verify no data loss | All customer data intact; No credentials lost or corrupted |
| 8 | Verify quota rules updated | New quota (10,000 req/hr for Premium) applied; Customer requests continue at appropriate rate |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-068

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-068 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

End-to-end scenario Support Lead monitors high-value customer quota usage and proactively suggests tier upgrade before reaching limits

## Preconditions

1. Customer on Standard tier with 1,000 req/hr quota
2. Usage trending at 950 req/hr average
3. Support Lead reviews usage analytics dashboard
4. Upgrade recommendation provided proactively

## Test Data

| Field | Value |
|-------|-------|
| Current Tier | Standard (1,000 req/hr) |
| Usage Trend | 950 req/hr average |
| Risk | Close to limit; Throttling imminent |
| Recommendation | Upgrade to Premium (10,000 req/hr) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Support Lead views customer usage dashboard | Dashboard displays: Customer, Tier, Current usage, Trend, Projected capacity |
| 2 | Identify at-risk customer | System flags: Customer usage > 95% of Standard quota limit |
| 3 | Review usage trend | 30-day trend shows: 900-950 req/hr; Steadily increasing |
| 4 | Project forward | If trend continues: Customer will exceed 1,000 req/hr within days; Throttling will occur |
| 5 | Generate upgrade recommendation | System suggests: "Customer trending toward quota limit; Recommend Premium tier upgrade" |
| 6 | Support Lead contacts customer | Email sent: "Your API usage approaching Standard tier limit; Premium tier available with 10x capacity" |
| 7 | Customer upgrades to Premium tier | Tier changed from Standard to Premium; Quota increased to 10,000 req/hr |
| 8 | Verify throttling prevented | After upgrade, requests process normally; No throttling events; Customer satisfied with proactive support |

## Reviewer Comments

*To be completed during review.*

---

## Test Case Summary

| Category | Count |
|----------|-------|
| Functional Test Cases | 35 |
| Role-Based & Access Control | 3 |
| Edge Cases & Exploratory | 3 |
| Integration Test Cases | 2 |
| Performance & Concurrency | 2 |
| Security & Accessibility | 3 |
| End-to-End Test Cases | 20 |
| **TOTAL** | **68** |
