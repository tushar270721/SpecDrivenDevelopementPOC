# Test Cases: FE#735316 - API Consumer and Scope Management

**Feature:** [APIm] 6 API Consumer and Scope Management
**Feature ID:** FE#735316
**Total Test Cases:** 26
**Created:** 2026-06-03
**Status:** APPROVED - Ready for Project Integration
**Reviewed By:** Tushar Sonawane
**Review Date:** 2026-06-03

---

# Summary Statistics

## Overall Statistics

| Metric | Count |
| --- | --- |
| Total Approved Test Cases | 26 |
| Total Categories | 7 |
| High Priority | 17 |
| Medium Priority | 8 |
| Low Priority | 1 |

## Category-wise Breakdown

| Category | Total | High | Medium | Low |
| --- | --- | --- | --- | --- |
| E2E | 7 | 4 | 3 | 0 |
| Edge Cases | 2 | 0 | 1 | 1 |
| Functional | 6 | 6 | 0 | 0 |
| Integration | 5 | 3 | 2 | 0 |
| Performance | 1 | 1 | 0 | 0 |
| Role-Based | 3 | 2 | 1 | 0 |
| Security | 2 | 1 | 1 | 0 |

---

# END-TO-END TEST CASES

---

# TC-FE735316-059

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 1 |
| Test Case ID | TC-FE735316-059 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System Administrator can complete entire API consumer onboarding from registration through production activation

## Preconditions

1. No pre-existing consumer
2. Admin authenticated with full permissions
3. Email system operational

## Test Data

| Field | Value |
| --- | --- |
| Consumer Name | ProductionVendor Inc |
| Contact Email | tech@production-vendor.com |
| Support Tier | Premium |
| API Products | Directory APIs, Incident APIs |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System Administrator navigates to Consumer Management | Empty consumer list displays; "Add Consumer" button visible |
| 2 | Administrator clicks "Add Consumer" and enters ProductionVendor Inc | Form displays with consumer name populated |
| 3 | Administrator selects Premium tier and Directory APIs product | Configuration ready for submission |
| 4 | Administrator adds Incident APIs as second product | Both products selected in form |
| 5 | Administrator clicks "Register Consumer" | Consumer created; Status: Active |
| 6 | System sends onboarding email to tech@production-vendor.com | Email received with temporary credential link |
| 7 | ProductionVendor clicks email link and generates API key | Key generated and displayed for customer |
| 8 | ProductionVendor tests API call with generated key | Request succeeds against Directory API with proper scope |
| 9 | ProductionVendor calls Incident API successfully | Second product access working |
| 10 | Administrator views consumer in dashboard | ProductionVendor shows as Active with 2 assigned products and 1 credential |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-060

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 2 |
| Test Case ID | TC-FE735316-060 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Customer Integration Manager and Support Lead collaborate to manage consumer lifecycle through rotation and suspension

## Preconditions

1. Existing consumer with active credentials
2. Two users: Integration Manager and Support Lead
3. Multi-role workflows enabled

## Test Data

| Field | Value |
| --- | --- |
| Consumer | CollaborationTest Corp |
| Manager | manager@acme.com |
| Support Lead | support@acme.com |
| Action Sequence | Rotation → Review → Suspension → Resolution |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Integration Manager rotates CollaborationTest credential | Rotation initiated; Grace period 48 hours active |
| 2 | Support Lead receives rotation notification | Email alert sent to support@acme.com with consumer details |
| 3 | Support Lead reviews rotation request in system | Dashboard shows pending rotation with manager initiator |
| 4 | Support Lead approves rotation | Approval recorded; New credential activated |
| 5 | CollaborationTest attempts request with old credential | Request succeeds during grace period |
| 6 | Integration Manager investigates suspicious activity | Dashboard shows unusual request pattern |
| 7 | Integration Manager contacts Support Lead about consumer | Communication through audit trail notes |
| 8 | Support Lead suspends CollaborationTest consumer | Suspension reason: "Investigation" |
| 9 | Integration Manager verifies suspension | Dashboard confirms consumer status Suspended |
| 10 | CollaborationTest customer contacts for resolution | Support Lead investigates and resolves issue |
| 11 | Support Lead reactivates consumer | Status changes to Active; Credential re-enabled |
| 12 | Integration Manager confirms consumer restored | Production integration resumed successfully |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-061

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 3 |
| Test Case ID | TC-FE735316-061 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

API request with valid credentials flows through credential validation to backend completing end-to-end

## Preconditions

1. Workday consumer exists with Directory APIs assigned
2. Valid API key generated and stored
3. Backend API service operational

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| API Key | api_workday_001 |
| Endpoint | POST /api/directory/resources/search |
| Request Payload | {"searchTerm": "risk assessment"} |
| Expected Response | 200 OK with search results |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Workday prepares request to directory search endpoint | Request: POST /api/directory/resources/search with API key in header |
| 2 | API Gateway receives request | Request logged and routed to validation pipeline |
| 3 | Credential validation: API key extracted from header | Key identified as api_workday_001 |
| 4 | Credential lookup in database | Record found for Workday consumer |
| 5 | Scope validation: Request requires api-directory-apis | Workday credential contains api-directory-apis scope |
| 6 | Rate limit check: Premium tier allows 1000 req/min | Current rate: 250 req/min (within limit) |
| 7 | Quota check: Consumer has 50000 quota remaining | Request count increments; Quota sufficient |
| 8 | All validations pass; Request forwarded to backend | Backend Directory Service receives request |
| 9 | Backend executes search and returns 200 OK | Response includes matching resources for "risk assessment" search |
| 10 | API Gateway returns response to Workday | Full response flows back through gateway |
| 11 | Workday receives search results | E2E workflow completes successfully |
| 12 | System logs complete request lifecycle | Audit trail records: Credential validated, processed, completed |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-062

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 4 |
| Test Case ID | TC-FE735316-062 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Multiple consumers with different tiers experience isolated rate limiting and quota enforcement

## Preconditions

1. Three consumers exist: Premium (1000 req/min), Standard (500 req/min), Basic (100 req/min)
2. All consumers making concurrent requests
3. Rate limiter properly isolates per consumer

## Test Data

| Field | Value |
| --- | --- |
| Premium Consumer | Rate Limit: 1000 req/min |
| Standard Consumer | Rate Limit: 500 req/min |
| Basic Consumer | Rate Limit: 100 req/min |
| Test Duration | 60 seconds |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Premium consumer sends 950 req/min | All 950 requests processed (under 1000 limit) |
| 2 | Standard consumer sends 450 req/min | All 450 requests processed (under 500 limit) |
| 3 | Basic consumer sends 90 req/min | All 90 requests processed (under 100 limit) |
| 4 | Premium consumer attempts 1050 req/min | First 1000 accepted; Request 1001-1050 throttled (50 requests delayed) |
| 5 | Standard consumer attempts 550 req/min | First 500 accepted; Request 501-550 throttled (50 requests delayed) |
| 6 | Basic consumer attempts 120 req/min | First 100 accepted; Request 101-120 throttled (20 requests delayed) |
| 7 | System applies tier-specific rules | Each consumer's rate limit independently enforced |
| 8 | Throttled requests queued and retried | Delayed requests complete after rate window resets |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-063

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 5 |
| Test Case ID | TC-FE735316-063 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Support team resolves consumer access issue through troubleshooting workflow and credential refresh

## Preconditions

1. Consumer reports access failure to support@company.com
2. Support ticket system operational
3. Consumer credentials accessible for review

## Test Data

| Field | Value |
| --- | --- |
| Consumer | TechVendor Corp |
| Issue | "API returning 403 Forbidden" |
| Root Cause | Credential scope mismatch |
| Resolution | Grant new scope to credential |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | TechVendor reports: "API requests returning 403 Forbidden" | Support ticket created: TICKET-12345 |
| 2 | Support Lead reviews TechVendor consumer profile | Consumer: TechVendor Corp, Products: Directory APIs only |
| 3 | Support Lead checks API call logs | Finds requests to /api/incidents endpoint |
| 4 | Support Lead identifies root cause | TechVendor making requests to Incident APIs without scope |
| 5 | Support Lead contacts TechVendor to confirm intent | Confirmation: "We need Incident APIs access" |
| 6 | Support Lead navigates to TechVendor consumer configuration | Admin interface shows consumer details |
| 7 | Support Lead adds Incident APIs product to TechVendor | New scope: api-incident-impacts-export assigned |
| 8 | Support Lead informs TechVendor of resolution | Email sent: "Incident APIs scope now available" |
| 9 | TechVendor regenerates/refreshes credentials with new scope | New API key includes both scopes |
| 10 | TechVendor retests API call to /api/incidents endpoint | Request succeeds; Returns 200 OK |
| 11 | Support Lead closes ticket with resolution documented | TICKET-12345 marked resolved |
| 12 | Issue resolved end-to-end | Consumer satisfied; Root cause addressed |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-064

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 6 |
| Test Case ID | TC-FE735316-064 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Authentication service scope synchronization enables new scope availability across all consumers

## Preconditions

1. New scope "api-analytics-engine" published
2. All existing consumers should have access to new scope option
3. Scope sync completes successfully

## Test Data

| Field | Value |
| --- | --- |
| New Scope | api-analytics-engine |
| Existing Consumers | 50 |
| Sync Duration | < 5 seconds |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System Administrator publishes Analytics Engine API product | New scope created: api-analytics-engine |
| 2 | System initiates scope sync to Authentication Service | Sync job queued with 50 consumers |
| 3 | System calls Auth Service to register scope | POST /scopes with api-analytics-engine payload |
| 4 | Auth Service acknowledges scope registration | Scope available in Auth Service scope list |
| 5 | System updates credential generation workflow | New scope appears in credential creation form |
| 6 | Existing consumer (e.g., Workday) initiates credential generation | Credential form shows: api-directory-apis, api-analytics-engine options |
| 7 | Workday selects api-analytics-engine scope | Workday customer can now grant new scope to credentials |
| 8 | New credential with analytics scope generated | Credential contains scope: api-analytics-engine |
| 9 | All 50 consumers now have access to new scope option | No consumer excluded from new scope availability |
| 10 | E2E scope propagation completed successfully | New API product fully enabled across system |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-065

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 7 |
| Test Case ID | TC-FE735316-065 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System recovers from credential synchronization failure maintaining data consistency

## Preconditions

1. Credential sync to Auth Service in progress
2. Network failure occurs mid-sync
3. Recovery mechanism enabled

## Test Data

| Field | Value |
| --- | --- |
| Consumers in Sync | 25 |
| Sync Status Before Failure | 15 completed, 10 pending |
| Failure Point | During 16th consumer sync |
| Recovery Policy | Retry with exponential backoff |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System begins syncing 25 consumer credentials to Auth Service | Sync initiates with consumer batch |
| 2 | 15 consumers successfully synced | Sync progress: 15/25 complete |
| 3 | Network failure occurs during 16th consumer sync | Connection drops; Sync interrupted |
| 4 | System detects sync failure | Error caught; Retry logic triggered |
| 5 | System verifies first 15 consumers synced successfully | Verification succeeds; No duplicate syncs |
| 6 | System retries remaining 10 consumers after backoff | Exponential backoff: wait 1s, then retry |
| 7 | Retry succeeds for consumers 16-25 | All 25 consumers eventually synced |
| 8 | Final verification: All 25 consumers in Auth Service | Complete consistency achieved |
| 9 | Consumers can generate credentials with synced scopes | New credentials immediately include all scopes |
| 10 | No duplicate credentials created from retry | Each consumer credential unique; No duplication |

## Reviewer Comments

*To be completed during review.*

---

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# TC-FE735316-036

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 8 |
| Test Case ID | TC-FE735316-036 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System handles concurrent credential generation requests from same consumer

## Preconditions

1. Workday consumer has generated one credential
2. Two simultaneous requests to generate new credential initiated
3. Concurrency control implemented

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Concurrent Requests | 2 |
| Request Type | Generate API Key |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Manager initiates first credential generation request | Generation process starts; form submitted |
| 2 | Manager immediately initiates second credential generation request (same consumer) | Second request sent before first completes |
| 3 | System processes first request | First API key generated and displayed: api_key_001 |
| 4 | System processes second request | Second API key generated and displayed: api_key_002 |
| 5 | Both credentials stored independently in system | Both api_key_001 and api_key_002 exist as separate credentials |
| 6 | Both credentials are unique and non-duplicate | Cryptographic verification confirms both keys are unique |
| 7 | API Gateway accepts both credentials for requests | Both keys independently validate for Workday consumer requests |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-037

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 9 |
| Test Case ID | TC-FE735316-037 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System handles credential validation with corrupted or malformed API key format

## Preconditions

1. API request intercepted with malformed API key
2. API Gateway receives request
3. Key format validation enforced

## Test Data

| Field | Value |
| --- | --- |
| Valid Key Format | api_[UUID] or similar |
| Malformed Key 1 | api_###invalid ### |
| Malformed Key 2 | (empty or null) |
| Malformed Key 3 | malformed_key_with_special_chars_@#$% |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Workday sends request with malformed key "api_###invalid ###" | API Gateway receives request with invalid key format |
| 2 | Gateway performs format validation | Format validation fails; Key doesn't match expected pattern |
| 3 | Gateway rejects request with 401 Unauthorized | Response: "Invalid credential format" |
| 4 | Workday sends request with empty/null API key | Gateway checks for empty credential |
| 5 | Gateway rejects empty credential with 401 Unauthorized | Response: "Missing required credentials" |
| 6 | Workday sends request with special character key "malformed_key_@#$%" | Gateway performs format validation |
| 7 | Gateway rejects with 401 Unauthorized | Response: "Invalid credential format: unauthorized characters" |
| 8 | System logs all malformed key rejection attempts | Audit trail shows 3 failed format validation attempts |

## Reviewer Comments

*To be completed during review.*

---

---

# FUNCTIONAL TEST CASES

---

# TC-FE735316-001

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 10 |
| Test Case ID | TC-FE735316-001 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System Administrator can register new API consumer with valid profile information

## Preconditions

1. User is authenticated as System Administrator
2. API Consumer Management interface is accessible
3. No existing consumer with the same name exists

## Test Data

| Field | Value |
| --- | --- |
| Consumer Name | Workday Integration |
| Contact Email | integration@workday.com |
| Support Tier | Premium |
| Tenant ID | tenant-001 |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System Administrator navigates to API Consumer Management console | Consumer registration interface displays with empty form |
| 2 | System Administrator enters consumer name "Workday Integration" | Name field populates without validation errors |
| 3 | System Administrator enters contact email "integration@workday.com" | Email field validates format and accepts entry |
| 4 | System Administrator selects support tier "Premium" | Tier selection reflects "Premium" in dropdown |
| 5 | System Administrator clicks "Create Consumer" button | System creates consumer record with status "Active" and displays confirmation message |
| 6 | System Administrator verifies consumer appears in consumer list | Workday Integration appears in list with status "Active" |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-002

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 11 |
| Test Case ID | TC-FE735316-002 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System Administrator can assign API products to consumer with appropriate subscription tier

## Preconditions

1. Workday Integration consumer exists with Premium tier
2. Directory APIs and Incident APIs are provisioned for tenant
3. Consumer has no API products assigned yet

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Product 1 | Directory APIs |
| Product 2 | Incident & Impacts Export API |
| Subscription Tier | Premium |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System Administrator navigates to Workday consumer details | Consumer profile displays with "Add API Product" option |
| 2 | System Administrator clicks "Add API Product" | Available API products list displays (Directory APIs, Incident APIs) |
| 3 | System Administrator selects Directory APIs | Product adds to consumer's assigned products list |
| 4 | System Administrator assigns Incident & Impacts Export API | Second product adds successfully to consumer's list |
| 5 | System Administrator verifies product backend metadata | System transmits product & subscription tier information to appropriate backend URL |
| 6 | System Administrator saves configuration | Both products show as assigned with tier "Premium" |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-003

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 12 |
| Test Case ID | TC-FE735316-003 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Customer Integration Manager can generate new API key for integration client

## Preconditions

1. Workday Integration consumer exists with Directory APIs assigned
2. Customer is logged in with appropriate permissions
3. No API keys exist for this consumer yet

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Credential Type | API Key |
| Scopes | api-directory-apis |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Customer Integration Manager navigates to credential management for Workday consumer | Credential management interface displays with empty credentials list |
| 2 | Customer Integration Manager clicks "Generate New API Key" | System displays credential generation form |
| 3 | Customer Integration Manager confirms generation | System generates unique API key with scope "api-directory-apis" |
| 4 | System displays generated API key on screen | Key displays in full (e.g., "api_xyz123...") with copy-to-clipboard button |
| 5 | Customer Integration Manager copies key to clipboard | Key successfully copies without displaying in logs or browser history |
| 6 | Customer Integration Manager confirms key creation | System saves key and displays credential hint "api_***789" in subsequent views |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-004

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 13 |
| Test Case ID | TC-FE735316-004 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Customer Integration Manager cannot view previously generated API key on subsequent credential page visits

## Preconditions

1. Workday consumer has previously generated API key
2. Customer is logged in with credentials management permissions
3. Credential record exists in system

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Credential ID | cred-001 |
| Previous Key Status | Active |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Customer Integration Manager navigates back to credential management page | Credentials list displays with previously created credential |
| 2 | Customer Integration Manager views credential details | Original API key is NOT displayed; only credential identifier hint shows "api_***789" |
| 3 | Customer Integration Manager searches for credential retrieval option | No "View Secret" or "Retrieve Key" option available in UI |
| 4 | Customer Integration Manager confirms key security | System enforces secret masking for security compliance |
| 5 | Customer Integration Manager initiates new key generation if needed | System allows new key generation without showing old key |
| 6 | Customer Integration Manager verifies two keys now exist | Both credentials show as Active with different hints |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-005

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 14 |
| Test Case ID | TC-FE735316-005 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Customer Integration Manager can rotate API key with grace period maintaining service availability

## Preconditions

1. Workday consumer has active API key in production use
2. System is currently processing requests with existing key
3. Grace period configured to 48 hours

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Old Key Status | Active |
| Grace Period | 48 hours |
| New Key Status | Active |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Customer Integration Manager initiates key rotation in credential management | Rotation confirmation dialog displays with grace period notification |
| 2 | Customer Integration Manager confirms rotation action | System generates new API key and displays to customer |
| 3 | Customer Integration Manager copies new key | New key successfully copied to clipboard |
| 4 | System marks old key as "Rotating" | Old key remains valid for grace period (48 hours) |
| 5 | Workday sends request with old key during grace period | API Gateway accepts request and processes successfully |
| 6 | After 48 hours, grace period expires | System automatically retires old key and rejects subsequent requests with old key |
| 7 | Workday updates systems with new key before grace expiry | New key works for all requests after update |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-006

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 15 |
| Test Case ID | TC-FE735316-006 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Customer Integration Manager can retire API key immediately revoking access

## Preconditions

1. Workday consumer has multiple active API keys
2. One key is no longer needed and should be retired
3. Other active keys should remain functional

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Total Keys | 3 |
| Keys to Retire | 1 |
| Active Keys After Retirement | 2 |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Customer Integration Manager navigates to credential management | Three active credentials display in list |
| 2 | Customer Integration Manager selects oldest key for retirement | Retirement confirmation dialog displays with warning |
| 3 | Customer Integration Manager confirms key retirement | System immediately changes key status to "Retired" |
| 4 | Customer Integration Manager verifies immediate revocation | Retired key appears with "Retired" status badge |
| 5 | System rejects request with retired key immediately | API Gateway returns 403 Forbidden with message "Credentials revoked" |
| 6 | Workday attempts request with remaining active key | Request succeeds and processes normally |
| 7 | System records audit log entry for retirement | Audit trail shows retirement timestamp and administrator identifier |

## Reviewer Comments

*To be completed during review.*

---

---

# INTEGRATION TEST CASES

---

# TC-FE735316-042

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 16 |
| Test Case ID | TC-FE735316-042 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System integrates new API consumer scope with authentication service without synchronization failure

## Preconditions

1. New API product "Analytics Engine" created
2. Scope sync with Auth Service configured
3. Auth Service available and responding

## Test Data

| Field | Value |
| --- | --- |
| New Product | Analytics Engine |
| New Scope | api-analytics-engine |
| Auth Service Endpoint | https://auth.company.com/scopes |
| Retry Policy | 3 retries with exponential backoff |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System Administrator publishes new scope "api-analytics-engine" | Scope publication job queued |
| 2 | System calls Auth Service to register new scope | POST /scopes with scope data sent |
| 3 | Auth Service acknowledges scope receipt | Response 200 OK with scope_id returned |
| 4 | New scope becomes available in credential creation | Customers can select analytics scope immediately |
| 5 | Scope appears in Auth Service scope list | API query to Auth Service confirms scope present |
| 6 | Existing consumers can be granted analytics scope | Scope assignment succeeds via admin interface |
| 7 | New consumer credentials can include analytics scope | Fresh credential generation includes new scope option |
| 8 | System logs scope sync completion | Audit trail records successful scope sync with timestamp |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-043

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 17 |
| Test Case ID | TC-FE735316-043 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

API Gateway validates consumer credential by querying authentication service for latest scopes

## Preconditions

1. Workday consumer has valid API key
2. Auth Service maintains scope list
3. Request arrives with Workday credentials

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| API Key | api_xyz123 |
| Auth Service Query | GET /scopes/consumers/workday-001 |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Workday sends request to API endpoint with API key | API Gateway receives request |
| 2 | Gateway looks up consumer credential in cache | Workday consumer found with scopes: [api-directory-apis] |
| 3 | If cache expired, Gateway queries Auth Service | Query sent to GET /scopes/consumers/workday-001 |
| 4 | Auth Service returns latest scopes for Workday | Scopes updated to include newly-assigned analytics scope |
| 5 | Gateway receives latest scope information | Scope list refreshed in local cache |
| 6 | Gateway validates request scope against updated list | Request for analytics API validated against new scope |
| 7 | Request allowed to proceed to backend | All validations passed with latest scope data |
| 8 | System continues accepting requests with updated scopes | No cache stale-state issues; Scope changes applied immediately |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-044

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 18 |
| Test Case ID | TC-FE735316-044 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System maintains data consistency between consumer management UI and credential storage backend

## Preconditions

1. Workday consumer has two active credentials
2. Database records maintained for both credentials
3. UI and backend synchronized

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Credential 1 | api_key_001 (Created 2026-05-15) |
| Credential 2 | api_key_002 (Created 2026-05-20) |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | UI displays two credentials for Workday consumer | Credentials listed: api_***789, api_***456 |
| 2 | Database query returns same two credentials | SELECT count(*) returns 2 for Workday consumer |
| 3 | Each UI credential corresponds to database record | UI credential_id matches database record_id |
| 4 | Manager retires api_***789 in UI | Retirement request processed and database updated |
| 5 | UI updates immediately to show api_***789 as Retired | Status changed in UI without page refresh |
| 6 | Database confirms credential status change | SELECT status WHERE credential_id=001 returns "Retired" |
| 7 | API Gateway queries database for credential status | Retired credential recognized as revoked |
| 8 | No stale data between UI and backend | All systems synchronized within 100ms |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-045

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 19 |
| Test Case ID | TC-FE735316-045 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System records complete audit trail of consumer credential creation with all metadata

## Preconditions

1. Customer creates new credential for Workday consumer
2. Audit logging enabled and persisted
3. Audit record includes all required fields

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| Action | Create API Key |
| Timestamp | 2026-06-01 10:30:00 UTC |
| Actor | integration-manager@acme.com |
| Reason | New integration deployment |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Customer Integration Manager creates API key for Workday | Credential generation succeeds |
| 2 | System records audit event | Event logged immediately to persistent storage |
| 3 | Audit record includes: Actor, Action, Consumer, Timestamp, IP Address, User Agent | All fields populated correctly |
| 4 | Audit record includes reason field | Reason: "New integration deployment" captured |
| 5 | Audit record includes result status | Status: "Success" recorded |
| 6 | Admin navigates to audit trail | Credential creation event appears in timeline |
| 7 | Admin exports audit trail for compliance | Exported CSV includes complete audit record with all metadata |
| 8 | No audit record modification possible | Audit trail append-only; Historical record immutable |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-046

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 20 |
| Test Case ID | TC-FE735316-046 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System integrates consumer lifecycle events with notification service for stakeholder alerts

## Preconditions

1. Workday consumer created with notification preferences
2. Notification service integrated
3. Email system configured

## Test Data

| Field | Value |
| --- | --- |
| Event Type | Consumer Suspension |
| Consumer | Workday Integration |
| Notification Recipients | support@acme.com, manager@acme.com |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Support Lead suspends Workday consumer | Suspension reason: "Quota exceeded" |
| 2 | System detects suspension event | Event published to notification queue |
| 3 | Notification service receives event | Processes event with context: Consumer name, Reason, Timestamp |
| 4 | Service identifies notification recipients | support@acme.com and manager@acme.com from configuration |
| 5 | Emails generated with event details | "Workday Integration suspended: Quota exceeded" |
| 6 | Emails delivered to recipients | Both support and manager receive notification within 2 minutes |
| 7 | Event logged in audit trail with notification status | Audit shows: Suspension action + Notification sent confirmation |
| 8 | Support team can track delivery status | Notification delivery status visible in audit trail |

## Reviewer Comments

*To be completed during review.*

---

---

# PERFORMANCE TEST CASES

---

# TC-FE735316-049

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 21 |
| Test Case ID | TC-FE735316-049 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

API Gateway credential validation completes within 100ms latency SLA

## Preconditions

1. Workday consumer has valid API key
2. Auth Service responds within 50ms
3. Local credential cache populated

## Test Data

| Field | Value |
| --- | --- |
| Consumer | Workday Integration |
| API Key | api_xyz123 |
| SLA Target | < 100ms (p95) |
| Test Load | 1000 concurrent requests |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Load test tool initiates 1000 concurrent requests with Workday API key | Concurrent requests sent to API Gateway |
| 2 | Each request includes credential validation step | Validation: credential lookup, scope check, rate limit verification |
| 3 | API Gateway processes first 100 requests | Latency measured for each request |
| 4 | Gateway returns response within 100ms for each request | Measured latencies: 45ms, 52ms, 78ms, 89ms, 99ms... all < 100ms |
| 5 | Latency percentiles calculated: p50=55ms, p95=95ms, p99=105ms | p95 achieved at 95ms (within 100ms SLA) |
| 6 | Remaining 900 requests processed | All complete within SLA |
| 7 | Average validation latency: 62ms | Performance meets SLA target |
| 8 | System logs latency metrics | Performance telemetry recorded for monitoring |

## Reviewer Comments

*To be completed during review.*

---

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE735316-027

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 22 |
| Test Case ID | TC-FE735316-027 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Support Lead cannot retire API consumer but can suspend temporarily

## Preconditions

1. User has Support Lead role
2. Workday consumer exists with active credentials
3. Support permissions configured for limited operations

## Test Data

| Field | Value |
| --- | --- |
| User Role | Support Lead |
| Consumer | Workday Integration |
| Permission Grant | Suspend, View, Contact |
| Permission Deny | Retire, Delete |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Support Lead navigates to consumer details | Workday Integration consumer displays |
| 2 | Support Lead clicks consumer action menu | Menu shows: "Suspend Consumer", "View Details", "Contact Consumer"; "Retire" option missing |
| 3 | Support Lead selects "Suspend Consumer" | Suspension dialog displays with reason field |
| 4 | Support Lead enters suspension reason | Reason: "Unusual activity pattern detected" |
| 5 | Support Lead confirms suspension | Consumer status changes to "Suspended" successfully |
| 6 | Support Lead attempts to locate "Retire Consumer" option | Option not visible in UI or menu |
| 7 | Support Lead attempts direct API call to retire consumer | System rejects request with 403 Forbidden "Insufficient permissions for retire operation" |
| 8 | System logs permission denial | Audit trail records unauthorized retire attempt with Support Lead identifier |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-028

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 23 |
| Test Case ID | TC-FE735316-028 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

API Consumer cannot view credentials of other consumers due to multi-tenant isolation

## Preconditions

1. Two consumers exist: Workday Integration (Tenant A), SalesForce Integration (Tenant B)
2. API Consumer user logged in for Tenant A
3. Multi-tenant isolation enforced

## Test Data

| Field | Value |
| --- | --- |
| Consumer A | Workday Integration |
| Consumer B | SalesForce Integration |
| Tenant A | tenant-acme |
| Tenant B | tenant-salesforce |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | API Consumer for Tenant A logs into credential management interface | Can view only Workday Integration consumer |
| 2 | SalesForce Integration consumer NOT displayed in consumer list | List filtering enforces tenant-based isolation |
| 3 | Consumer A attempts direct URL navigation to SalesForce credential page | URL: /consumers/salesforce-consumer/credentials |
| 4 | System redirects to 403 Forbidden error page | Message: "Access denied: Consumer in different tenant" |
| 5 | Consumer A attempts API query for SalesForce credentials | API request with query parameter consumer_id=salesforce-consumer |
| 6 | System rejects API query with 403 Forbidden | Error response confirms tenant mismatch |
| 7 | System logs cross-tenant access attempt | Audit trail records attempted unauthorized cross-tenant access with tenant isolation rule triggered |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-029

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 24 |
| Test Case ID | TC-FE735316-029 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System Security Manager can require credential rotation at organization security policy interval

## Preconditions

1. Organization security policy mandates 90-day credential rotation
2. Workday consumer has credential created 90 days ago
3. Security Manager role configured

## Test Data

| Field | Value |
| --- | --- |
| Policy Interval | 90 days |
| Credential Age | 90 days |
| Consumer | Workday Integration |
| Policy Status | Enforced |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | System Security Manager navigates to credential rotation policies | Rotation policy configured for 90-day interval |
| 2 | System checks Workday credential age | Credential created exactly 90 days ago |
| 3 | System generates mandatory rotation notice | Notice sent to Workday Integration admin email |
| 4 | Notice includes rotation deadline and instructions | Deadline: within 7 days; Link to rotation UI provided |
| 5 | Workday attempts API call with 90-day-old credential | System logs warning: "Credential rotation overdue per security policy" |
| 6 | System begins enforcement phase (if deadline passed) | Old credential access restricted or monitored intensively |
| 7 | Workday initiates credential rotation within deadline | Rotation succeeds; Grace period honored; New credential issued |

## Reviewer Comments

*To be completed during review.*

---

---

# SECURITY TEST CASES

---

# TC-FE735316-056

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 25 |
| Test Case ID | TC-FE735316-056 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

System prevents SQL injection attack through parameterized queries for credential lookup

## Preconditions

1. Credential lookup query implemented
2. SQL parameterization enabled
3. SQL injection test vectors available

## Test Data

| Field | Value |
| --- | --- |
| Malicious Input | api_xyz123'; DROP TABLE credentials; -- |
| Query Type | SELECT * FROM credentials WHERE key = ? |
| Expected Behavior | Query executed safely; No database modification |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Attacker attempts credential lookup with SQL injection payload | Payload: "api_xyz123'; DROP TABLE credentials; --" |
| 2 | System receives malicious input in credential_key parameter | Input contains SQL injection attempt |
| 3 | System uses parameterized query execution | SQL template: "SELECT * FROM credentials WHERE key = ?" |
| 4 | Parameter value passed separately to query engine | Parameter value: malicious string treated as literal data |
| 5 | Database processes query with injected string as data | Database searches for literal key matching: "api_xyz123'; DROP TABLE credentials; --" |
| 6 | Query returns no matching credentials | No credentials found (expected, as payload is invalid key) |
| 7 | DROP TABLE command NOT executed | Credentials table remains intact; No structural modification |
| 8 | Injection attack prevented | SQL injection vulnerability mitigated through parameterization |

## Reviewer Comments

*To be completed during review.*

---

---

# TC-FE735316-057

## Metadata

| Field | Value |
| --- | --- |
| Test Case # | 26 |
| Test Case ID | TC-FE735316-057 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Approved |
| Reviewer | Tushar Sonawane |
| Review Date | 2026-06-03 |

## Title

Credential management interface meets WCAG 2.1 AA accessibility standards

## Preconditions

1. Credential management UI deployed
2. Accessibility testing tool available (axe, WAVE)
3. Screen reader available (NVDA, JAWS)

## Test Data

| Field | Value |
| --- | --- |
| Standard | WCAG 2.1 AA |
| Test Tool | axe DevTools |
| Screen Reader | NVDA |

## Test Steps

| Step | Action | Expected Result |
| --- | --- | --- |
| 1 | Run automated accessibility scan with axe tool | Scan of credential management interface |
| 2 | Scan checks for color contrast compliance | All text has contrast ratio ≥ 4.5:1 (AA standard) |
| 3 | Scan checks for accessible button labels | All buttons have descriptive aria-labels |
| 4 | Scan checks for form accessibility | Form fields have associated labels; Error messages associated with fields |
| 5 | Use screen reader to navigate interface | NVDA reads: "Consumer name text input required field" |
| 6 | Screen reader announces button functionality | "Generate Credential button - triggers API key generation" |
| 7 | Keyboard-only navigation verified | All functionality accessible using Tab, Enter, Arrow keys |
| 8 | No accessibility violations detected | WCAG 2.1 AA compliance confirmed |

## Reviewer Comments

*To be completed during review.*

---

---

