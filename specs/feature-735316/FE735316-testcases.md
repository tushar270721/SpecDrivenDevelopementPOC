# Test Cases: FE#735316 - API Consumer and Scope Management

**Feature:** [APIm] 6 API Consumer and Scope Management  
**Feature ID:** FE#735316  
**Total Test Cases:** 75  
**Created:** 6/1/2026  
**Status:** DRAFT - Ready for QA Lead Review

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

System Administrator can register new API consumer with valid profile information

## Preconditions

1. User is authenticated as System Administrator
2. API Consumer Management interface is accessible
3. No existing consumer with the same name exists

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | Workday Integration |
| Contact Email | integration@workday.com |
| Support Tier | Premium |
| Tenant ID | tenant-001 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to API Consumer Management console | Consumer registration interface displays with empty form |
| 2 | System Administrator enters consumer name "Workday Integration" | Name field populates without validation errors |
| 3 | System Administrator enters contact email "integration@workday.com" | Email field validates format and accepts entry |
| 4 | System Administrator selects support tier "Premium" | Tier selection reflects "Premium" in dropdown |
| 5 | System Administrator clicks "Create Consumer" button | System creates consumer record with status "Active" and displays confirmation message |
| 6 | System Administrator verifies consumer appears in consumer list | Workday Integration appears in list with status "Active" |

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

System Administrator can assign API products to consumer with appropriate subscription tier

## Preconditions

1. Workday Integration consumer exists with Premium tier
2. Directory APIs and Incident APIs are provisioned for tenant
3. Consumer has no API products assigned yet

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Product 1 | Directory APIs |
| Product 2 | Incident & Impacts Export API |
| Subscription Tier | Premium |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to Workday consumer details | Consumer profile displays with "Add API Product" option |
| 2 | System Administrator clicks "Add API Product" | Available API products list displays (Directory APIs, Incident APIs) |
| 3 | System Administrator selects Directory APIs | Product adds to consumer's assigned products list |
| 4 | System Administrator assigns Incident & Impacts Export API | Second product adds successfully to consumer's list |
| 5 | System Administrator verifies product backend metadata | System transmits product & subscription tier information to appropriate backend URL |
| 6 | System Administrator saves configuration | Both products show as assigned with tier "Premium" |

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

Customer Integration Manager can generate new API key for integration client

## Preconditions

1. Workday Integration consumer exists with Directory APIs assigned
2. Customer is logged in with appropriate permissions
3. No API keys exist for this consumer yet

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Credential Type | API Key |
| Scopes | api-directory-apis |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager navigates to credential management for Workday consumer | Credential management interface displays with empty credentials list |
| 2 | Customer Integration Manager clicks "Generate New API Key" | System displays credential generation form |
| 3 | Customer Integration Manager confirms generation | System generates unique API key with scope "api-directory-apis" |
| 4 | System displays generated API key on screen | Key displays in full (e.g., "api_xyz123...") with copy-to-clipboard button |
| 5 | Customer Integration Manager copies key to clipboard | Key successfully copies without displaying in logs or browser history |
| 6 | Customer Integration Manager confirms key creation | System saves key and displays credential hint "api_***789" in subsequent views |

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

Customer Integration Manager cannot view previously generated API key on subsequent credential page visits

## Preconditions

1. Workday consumer has previously generated API key
2. Customer is logged in with credentials management permissions
3. Credential record exists in system

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Credential ID | cred-001 |
| Previous Key Status | Active |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager navigates back to credential management page | Credentials list displays with previously created credential |
| 2 | Customer Integration Manager views credential details | Original API key is NOT displayed; only credential identifier hint shows "api_***789" |
| 3 | Customer Integration Manager searches for credential retrieval option | No "View Secret" or "Retrieve Key" option available in UI |
| 4 | Customer Integration Manager confirms key security | System enforces secret masking for security compliance |
| 5 | Customer Integration Manager initiates new key generation if needed | System allows new key generation without showing old key |
| 6 | Customer Integration Manager verifies two keys now exist | Both credentials show as Active with different hints |

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

Customer Integration Manager can rotate API key with grace period maintaining service availability

## Preconditions

1. Workday consumer has active API key in production use
2. System is currently processing requests with existing key
3. Grace period configured to 48 hours

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Old Key Status | Active |
| Grace Period | 48 hours |
| New Key Status | Active |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

Customer Integration Manager can retire API key immediately revoking access

## Preconditions

1. Workday consumer has multiple active API keys
2. One key is no longer needed and should be retired
3. Other active keys should remain functional

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Total Keys | 3 |
| Keys to Retire | 1 |
| Active Keys After Retirement | 2 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-007

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-007 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway can validate consumer credential against provisioned scope during request processing

## Preconditions

1. Workday consumer has Directory APIs assigned with scope "api-directory-apis"
2. Consumer has valid API key in Active status
3. Request contains valid tenant ID

## Test Data

| Field | Value |
|-------|-------|
| Consumer ID | workday-001 |
| Tenant ID | tenant-acme |
| API Key | api_xyz123 |
| Requested Endpoint | /api/directory/resources |
| Required Scope | api-directory-apis |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends request to Directory API with API key in header | API Gateway receives request and extracts credentials |
| 2 | API Gateway validates consumer's tenant association | Confirms Directory APIs product is provisioned for tenant-acme |
| 3 | API Gateway queries authentication service for credential scope | Auth service returns scope list ["api-directory-apis"] |
| 4 | API Gateway validates request scope matches "api-directory-apis" | Scope validation succeeds |
| 5 | API Gateway applies subscription-based rules | Premium tier rules applied (rate limit: 1000 req/min, quota: 100000 req/month) |
| 6 | API Gateway forwards request to backend Directory API service | Backend receives request with all validations passed |
| 7 | System updates Last_Used timestamp for credential | Audit log records successful request with all validation steps |

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

API Gateway denies consumer request for unauthorized API product

## Preconditions

1. Workday consumer has access to Directory APIs only (scope: api-directory-apis)
2. Workday has NOT been provisioned for Incident & Impacts Export API
3. Workday attempts request to Incident API endpoint

## Test Data

| Field | Value |
|-------|-------|
| Consumer Scope | api-directory-apis |
| Requested Scope | api-incident-impacts-export |
| Request Endpoint | /api/incidents/summary |
| Expected Response | 403 Forbidden |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends request to Incident API with valid API key | API Gateway receives request and validates consumer |
| 2 | API Gateway checks consumer's assigned products | Workday product list includes only Directory APIs |
| 3 | API Gateway queries authentication service | Auth service confirms credential scope is "api-directory-apis" |
| 4 | API Gateway validates scope against request requirement | Requested scope "api-incident-impacts-export" does NOT match credential scope |
| 5 | API Gateway denies request and returns 403 Forbidden | Response includes message "Access denied to requested API product" |
| 6 | System records audit log entry for denied access | Audit trail shows failed access attempt with reason "insufficient_scope" |
| 7 | Workday receives denial response | API consumer can identify the missing scope and contact support |

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

Backend API denies external consumer attempt to call internal-only APIm management endpoint

## Preconditions

1. External consumer has valid API key with external claim token
2. Internal management endpoint requires internal claim token
3. Request contains external credentials

## Test Data

| Field | Value |
|-------|-------|
| Consumer Type | External |
| Endpoint | /api/internal/management/consumers |
| Token Type in Request | external |
| Expected Response | 401 Unauthorized |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | External consumer sends request to internal APIm management endpoint | Request reaches backend API service with external API key |
| 2 | Backend API examines claim token in request | Token type identified as "external" |
| 3 | Backend API checks endpoint access requirements | Endpoint requires "internal" claim token type |
| 4 | Backend API compares token types | external token does NOT match required "internal" type |
| 5 | Backend API rejects request with 401 Unauthorized | Response includes message "Insufficient permissions for internal API" |
| 6 | System logs unauthorized access attempt | Audit trail records failed attempt with external consumer details |
| 7 | External consumer receives denial | Error response prevents access to internal management functions |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-010

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-010 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can change API consumer support tier affecting quota and rate limits

## Preconditions

1. Workday consumer exists with Premium tier (1000 req/min, 100000 req/month)
2. Customer wants to downgrade to Standard tier (500 req/min, 50000 req/month)
3. Active API key exists for consumer

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Original Tier | Premium |
| New Tier | Standard |
| Original Rate Limit | 1000 req/min |
| New Rate Limit | 500 req/min |
| Original Quota | 100000 req/month |
| New Quota | 50000 req/month |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to consumer details | Consumer profile displays current tier "Premium" |
| 2 | System Administrator clicks "Change Support Tier" | Tier selection dialog displays available options |
| 3 | System Administrator selects "Standard" tier | System shows new rate limit and quota values |
| 4 | System Administrator confirms tier change | System updates subscription tier to "Standard" |
| 5 | System recalculates and applies new quota/throttling rules | Rate limit now 500 req/min, quota 50000 req/month |
| 6 | Existing API key remains active but subject to new rules | Consumer credentials valid but with reduced limits |
| 7 | System records audit log entry | Audit trail shows tier change from Premium to Standard |
| 8 | Consumer's next request uses new rate limits | Quota enforcement applies Standard tier limits |

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

Customer Integration Manager can receive onboarding email with temporary credential link

## Preconditions

1. New consumer registration just completed
2. Email system is configured and functional
3. Contact email is valid and reachable

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | FreshIntegration |
| Contact Email | fresh@company.com |
| Link Expiry | 30 days |
| Email Content Type | HTML |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator completes registration for FreshIntegration consumer | Registration confirmation displays |
| 2 | System sends welcome email to fresh@company.com | Email delivery succeeds (no bounce) |
| 3 | Customer checks email inbox | Welcome email arrives with subject containing "FreshIntegration" |
| 4 | Email content includes temporary credential link | Link format is valid and includes expiry parameter |
| 5 | Email includes setup documentation links | Documentation links point to valid integration guides |
| 6 | Email includes support contact information | Support team email/phone prominently displayed |
| 7 | Customer clicks temporary link within 30 days | Page displays credentials with setup instructions |
| 8 | Temporary link expires after 30 days | Subsequent clicks show "Expired" message requiring new link request |

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

Customer Integration Manager can access setup documentation and sandbox testing environment

## Preconditions

1. Customer has clicked valid temporary credential link
2. Credentials page displayed with setup guide
3. Sandbox environment is available

## Test Data

| Field | Value |
|-------|-------|
| Environment Type | Sandbox |
| API Endpoint Base | https://sandbox-api.company.com |
| Documentation Link | Valid internal KB link |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager clicks "Setup Guide" link in email | Documentation page loads with integration steps |
| 2 | Guide displays sample API requests and responses | Code examples provided in multiple languages |
| 3 | Guide includes authentication and header requirements | API key placement, scope headers clearly documented |
| 4 | Customer clicks "Sandbox Environment" link | Sandbox API base URL provided for testing |
| 5 | Customer executes test request against sandbox endpoint | Request succeeds with valid API key from onboarding |
| 6 | Sandbox returns successful response | Customer confirms integration working before production |
| 7 | Customer references testing guide for common issues | Troubleshooting section provides solutions for common errors |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-013

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-013 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual OAuth token exchange interaction and visual verification of callback flow |

## Title

Customer Integration Manager can configure OAuth token endpoint for secure credential exchange

## Preconditions

1. Consumer registered for OAuth credential type
2. Authentication service has OAuth token exchange endpoint
3. Consumer application configured with client credentials

## Test Data

| Field | Value |
|-------|-------|
| Credential Type | OAuth |
| Token Endpoint | https://auth.company.com/oauth/token |
| Grant Type | client_credentials |
| Scope | api-directory-apis |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager navigates to OAuth configuration | OAuth setup wizard displays |
| 2 | Manager enters OAuth token endpoint URL | System validates endpoint is reachable and responds to health check |
| 3 | Manager enters client ID and client secret | Credentials stored securely (never displayed after save) |
| 4 | Manager selects OAuth scopes to expose | Scope "api-directory-apis" selected and displayed |
| 5 | Manager clicks "Test Connection" | System initiates test token exchange with auth service |
| 6 | Auth service returns valid access token | System confirms successful OAuth integration |
| 7 | Manager saves OAuth configuration | Configuration persisted and visible in credential options |

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

System Administrator can suspend consumer account temporarily blocking all access

## Preconditions

1. Workday consumer exists with multiple active credentials
2. All credentials currently working and receiving requests
3. Suspension reason documented

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Previous Status | Active |
| New Status | Suspended |
| Reason | SLA violation investigation |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to consumer details | Consumer status displays as "Active" |
| 2 | Administrator clicks "Suspend Consumer" button | Suspension confirmation dialog with reason field displays |
| 3 | Administrator enters reason "SLA violation investigation" | Reason text saved for audit trail |
| 4 | Administrator confirms suspension | Consumer status changes to "Suspended"; All credentials marked as temporarily inactive |
| 5 | Workday attempts request with previously valid API key | API Gateway rejects request with 403 Forbidden "Consumer account suspended" |
| 6 | System logs suspension timestamp and reason | Audit trail records suspension with administrator details |
| 7 | Administrator can view suspension reason in consumer history | Suspension details visible with timestamp and initiating admin |

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

System Administrator can reactivate previously suspended consumer account restoring access

## Preconditions

1. Workday consumer is in Suspended status
2. Suspension reason documented
3. Investigation completed and issue resolved

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Previous Status | Suspended |
| New Status | Active |
| Reactivation Reason | SLA compliance restored |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to suspended consumer details | Consumer displays "Suspended" status with original suspension reason |
| 2 | Administrator clicks "Reactivate Consumer" button | Reactivation confirmation dialog displays |
| 3 | Administrator enters reactivation reason | Reason captured in audit trail |
| 4 | Administrator confirms reactivation | Consumer status changes back to "Active" |
| 5 | All previously active credentials automatically reactivate | Credentials show "Active" status with Last_Used timestamp preserved |
| 6 | Workday sends request with original API key | Request succeeds; Gateway accepts credential as valid again |
| 7 | System logs reactivation event | Audit trail records reactivation with timestamp and administrator |

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

Support Lead can view consumer request history and rate limit consumption

## Preconditions

1. Workday consumer has made 50,000 requests in current month
2. Premium tier quota is 100,000 requests/month
3. Request history available for last 30 days

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Period | Current month |
| Requests Made | 50000 |
| Quota Remaining | 50000 |
| Quota Threshold | 80% |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Support Lead navigates to consumer analytics dashboard | Workday consumer profile displays usage statistics |
| 2 | Dashboard displays quota consumption | Shows "50,000 of 100,000 requests used (50%)" |
| 3 | Support Lead views rate limit metrics | Current rate: 250 req/min (25% of 1000 req/min limit) |
| 4 | Support Lead accesses request history | Last 30 requests display with timestamps and endpoints |
| 5 | Support Lead filters request history by date range | History filtered to show last 7 days |
| 6 | Support Lead exports usage report | Report generated in CSV format with detailed request breakdown |
| 7 | Dashboard alerts if quota approaching threshold | No alert displays (50% < 80% threshold) |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-017

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-017 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Support Lead receives proactive notification when consumer approaching quota threshold

## Preconditions

1. Workday consumer has made 80,000 requests (80% of 100,000 quota)
2. Quota threshold alert configured at 80%
3. Support Lead has notification preferences enabled

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Quota Threshold | 80% |
| Current Usage | 80000 |
| Total Quota | 100000 |
| Alert Recipients | support@company.com |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday makes request and crosses 80% quota threshold | System detects threshold breach |
| 2 | System generates quota threshold alert | Alert message created with consumer name and percentage |
| 3 | System sends notification to support team | Email sent to support@company.com with alert details |
| 4 | Support Lead receives alert notification | Notification received within 5 minutes of threshold breach |
| 5 | Alert includes consumer contact information | Support Lead can quickly identify and reach out to consumer |
| 6 | Alert provides action recommendations | Suggestions include quota increase request or usage optimization |
| 7 | Support Lead logs into dashboard and verifies alert | Alert also visible in Support Lead notification center |

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

System Administrator can configure new API product scope and publish to authentication service

## Preconditions

1. New API product "Analytics Engine" created in API Management
2. Scope naming standard: 'api-{api-product-name}'
3. Authentication Service integration configured

## Test Data

| Field | Value |
|-------|-------|
| Product Name | Analytics Engine |
| Scope | api-analytics-engine |
| Auth Service Endpoint | https://auth.company.com/scopes |
| Publication Status | Ready |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to API Product configuration | Analytics Engine product displays in product list |
| 2 | Administrator enters scope name "api-analytics-engine" following naming convention | Scope name validated and formatted correctly |
| 3 | Administrator clicks "Publish Scope" | System queues scope publication job |
| 4 | System sends scope registration to Authentication Service | Auth Service POST request includes new scope in payload |
| 5 | Authentication Service acknowledges scope registration | System receives 200 OK response from Auth Service |
| 6 | New scope becomes available in credential creation workflow | Customers can select "api-analytics-engine" when generating new credentials |
| 7 | System logs scope publication event | Audit trail records scope publication with timestamp |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-019

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-019 |
| Priority | Low |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual verification of CI-CD pipeline and scope availability at runtime |

## Title

Operations team can verify new scope deployed through CI-CD pipeline

## Preconditions

1. Analytics Engine scope published to Auth Service
2. CI-CD pipeline configured for scope deployment
3. Deployment environment accessible for verification

## Test Data

| Field | Value |
|-------|-------|
| Scope | api-analytics-engine |
| CI-CD Pipeline | api-scope-deployment |
| Environment | staging |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | CI-CD pipeline initiates new scope deployment | Pipeline job starts in staging environment |
| 2 | Pipeline pushes api-analytics-engine scope to Auth Service | Auth Service integration receives scope update |
| 3 | Scope becomes available in Auth Service scope list | List now includes api-analytics-engine |
| 4 | New consumers can select analytics scope at credential creation | Scope appears in available scopes dropdown |
| 5 | Existing consumers can be granted analytics scope | Scope can be added to existing credentials via admin interface |
| 6 | Operations verifies scope availability at runtime | Scope query returns api-analytics-engine in available scopes |
| 7 | Pipeline logs deployment success | Deployment record shows timestamp and scope version |

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

Customer Integration Manager can view credentials with masked secrets for security compliance

## Preconditions

1. Multiple credentials exist for Workday consumer
2. All credentials in Active or Rotating status
3. Secrets previously stored and masked

## Test Data

| Field | Value |
|-------|-------|
| Total Credentials | 3 |
| Credential Types | API Key x2, OAuth x1 |
| Masked Format | ***789 (last 3 digits) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager navigates to credentials list | Three credentials display without secrets visible |
| 2 | First credential displays as "api_***789" (API Key type) | Masking shows credential type and partial identifier |
| 3 | Second credential displays as "key_***456" (API Key type) | Different partial identifier than first key |
| 4 | Third credential displays as "oauth_***abc" (OAuth type) | OAuth credentials also masked with type identifier |
| 5 | Manager attempts to copy masked text | Copy action copies only the masked representation, not full secret |
| 6 | Manager hovers over credential hint | Tooltip shows only: "Created: 2026-05-15, Last Used: 2026-06-01" (no secret details) |
| 7 | System prevents credential export to file | Export functionality excluded for security compliance |

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

System Administrator can view complete audit trail of all consumer credential operations

## Preconditions

1. Workday consumer has history of credential operations
2. Operations span last 30 days
3. Audit logging enabled

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Period | Last 30 days |
| Operation Types | Create, Rotate, Retire, Access |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to audit trail for Workday consumer | Timeline displays all credential operations chronologically |
| 2 | Audit shows credential creation on 2026-05-15 by admin@company.com | Entry includes: timestamp, operation type, administrator ID, result |
| 3 | Audit shows key rotation on 2026-05-20 | Rotation entry indicates grace period timestamp and old key status change |
| 4 | Audit shows first key retirement on 2026-05-21 | Retirement entry shows immediate revocation timestamp |
| 5 | Audit shows 150 successful API requests on 2026-06-01 | Access log aggregates requests per credential with success/failure counts |
| 6 | Administrator filters audit log by operation type | Can view only "Create", "Rotate", or "Retire" operations separately |
| 7 | Administrator exports audit trail as CSV | Complete audit history exported with all fields for compliance reporting |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-022

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-022 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can generate consumer management report with current status and compliance metrics

## Preconditions

1. Multiple consumers exist (minimum 10)
2. Consumers in various states: Active, Suspended, Retired
3. Report generation feature available

## Test Data

| Field | Value |
|-------|-------|
| Total Consumers | 15 |
| Active | 12 |
| Suspended | 2 |
| Retired | 1 |
| Report Format | PDF |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to Reports section | Report generation interface displays with filter options |
| 2 | Administrator selects "Consumer Status Report" | Report template selected with date range options |
| 3 | Administrator sets date range to last 30 days | Default range populated (today minus 30 days) |
| 4 | Administrator clicks "Generate Report" | Report generation job queues in background |
| 5 | System generates comprehensive report | Report shows: Consumer count by status, quota utilization, top consumers by request volume |
| 6 | Report includes compliance metrics | Metrics show: Average response time, error rate, SLA compliance percentage |
| 7 | Administrator downloads report as PDF | PDF generated with professional formatting and company branding |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-023

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-023 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator receives alert when suspicious credential activity detected

## Preconditions

1. Workday consumer has established normal usage pattern (avg 100 req/min)
2. Anomaly detection configured with threshold (5x increase)
3. Alert recipients configured

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Normal Rate | 100 req/min |
| Suspicious Rate | 500 req/min |
| Threshold | 5x |
| Alert Type | Anomalous Activity |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System detects request rate spike from normal 100 req/min to 500 req/min | Anomaly detection algorithm identifies 5x increase |
| 2 | System generates security alert | Alert created with severity "HIGH" |
| 3 | Alert includes consumer name, credential hint, spike details | Alert provides: Workday Integration, api_***789, started 2026-06-01 15:30:00 UTC |
| 4 | System sends alert notification to security@company.com | Email received within 2 minutes of anomaly detection |
| 5 | Alert includes recommended actions | Suggestions: Review request patterns, Rotate credential, Check for compromise |
| 6 | Security Administrator can throttle/block credential | Action available to immediately restrict suspicious credential |
| 7 | Alert recorded in security incident log | Incident documented for compliance and forensics |

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

Customer Integration Manager can download integration guide with code examples

## Preconditions

1. Customer accessing after clicking onboarding email link
2. Integration documentation available
3. Code examples provided in multiple languages

## Test Data

| Field | Value |
|-------|-------|
| Guide Format | PDF |
| Code Examples | Python, JavaScript, Java |
| Guide Size | < 5 MB |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer navigates to documentation section | Integration guide listed for download |
| 2 | Customer clicks "Download Integration Guide (PDF)" | PDF file downloads successfully |
| 3 | PDF includes API authentication section | Explains API key placement in headers with examples |
| 4 | PDF includes code examples in Python | Example shows POST request with auth header and request body |
| 5 | PDF includes code examples in JavaScript | Node.js example with axios library usage |
| 6 | PDF includes code examples in Java | Spring Boot example with RestTemplate configuration |
| 7 | PDF includes troubleshooting section | Common errors and solutions documented with resolution steps |

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

System Administrator can create consumer batch from CSV file with multiple registrations

## Preconditions

1. CSV file prepared with valid consumer data
2. Format includes: Name, Email, Tier, Product1, Product2...
3. CSV contains 50 consumer records

## Test Data

| Field | Value |
|-------|-------|
| CSV Rows | 50 |
| Valid Rows | 48 |
| Invalid Rows | 2 |
| File Size | 25 KB |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to bulk consumer import | Import interface displays with CSV upload area |
| 2 | Administrator selects CSV file with 50 consumer records | File successfully selected and preview displays |
| 3 | System validates CSV format and data | Validation report shows: 48 valid records, 2 invalid (duplicate email) |
| 4 | Administrator reviews validation report | Report highlights invalid records with specific error messages |
| 5 | Administrator removes 2 invalid rows from CSV | Updated CSV with 48 records re-uploaded |
| 6 | Administrator initiates batch import | System creates 48 consumer records with status "Active" |
| 7 | System sends bulk creation report | Report shows 48 successful, 0 failed; includes consumer list for distribution |

## Reviewer Comments

*To be completed during review.*

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE735316-026

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-026 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Read-Only User cannot create new API consumers

## Preconditions

1. User has Read-Only role
2. Consumer management interface displays
3. API Consumer Management permission not granted

## Test Data

| Field | Value |
|-------|-------|
| User Role | Read-Only |
| Interface | Consumer Management |
| Action Attempted | Create Consumer |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Read-Only User navigates to API Consumer Management | Interface displays all consumers in read-only view |
| 2 | Read-Only User attempts to click "Create Consumer" button | Button is disabled/grayed out with tooltip "Insufficient permissions" |
| 3 | Read-Only User attempts direct URL navigation to consumer creation page | System redirects to 403 Forbidden page with permission error |
| 4 | Read-Only User can view consumer details and credentials (masked) | Read-only display shows consumer information without edit/delete options |
| 5 | Read-Only User attempts to edit consumer tier | Edit field is disabled; attempt to modify shows "Read-Only Access" message |
| 6 | Read-Only User attempts to generate new credential | "Generate Credential" button disabled with permission tooltip |
| 7 | System logs attempted unauthorized action | Audit trail records failed authorization attempt with timestamp |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-027

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-027 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Support Lead cannot retire API consumer but can suspend temporarily

## Preconditions

1. User has Support Lead role
2. Workday consumer exists with active credentials
3. Support permissions configured for limited operations

## Test Data

| Field | Value |
|-------|-------|
| User Role | Support Lead |
| Consumer | Workday Integration |
| Permission Grant | Suspend, View, Contact |
| Permission Deny | Retire, Delete |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-028

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-028 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Consumer cannot view credentials of other consumers due to multi-tenant isolation

## Preconditions

1. Two consumers exist: Workday Integration (Tenant A), SalesForce Integration (Tenant B)
2. API Consumer user logged in for Tenant A
3. Multi-tenant isolation enforced

## Test Data

| Field | Value |
|-------|-------|
| Consumer A | Workday Integration |
| Consumer B | SalesForce Integration |
| Tenant A | tenant-acme |
| Tenant B | tenant-salesforce |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-029

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-029 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Security Manager can require credential rotation at organization security policy interval

## Preconditions

1. Organization security policy mandates 90-day credential rotation
2. Workday consumer has credential created 90 days ago
3. Security Manager role configured

## Test Data

| Field | Value |
|-------|-------|
| Policy Interval | 90 days |
| Credential Age | 90 days |
| Consumer | Workday Integration |
| Policy Status | Enforced |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-030

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-030 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer Integration Manager cannot grant API products beyond their organization entitlement

## Preconditions

1. Customer A (Acme Corp) entitled to only Directory APIs
2. Acme Corp consumer registration initiated
3. Available API products list shows all products

## Test Data

| Field | Value |
|-------|-------|
| Consumer Org | Acme Corp |
| Entitled Products | Directory APIs only |
| Available Products | Directory APIs, Incident APIs, Analytics APIs |
| Requested Products | Incident APIs |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager from Acme Corp logs in | Interface displays product selection for Acme consumer |
| 2 | Manager views available products list | All products shown (Directory, Incident, Analytics) |
| 3 | Manager attempts to assign "Incident & Impacts Export API" to Acme consumer | System checks Acme Corp entitlement |
| 4 | System validates against entitlement | Acme Corp entitled only to Directory APIs |
| 5 | System denies product assignment | Error message: "Product 'Incident APIs' not included in your organization's subscription" |
| 6 | Only Directory APIs option remains available | Incident and Analytics APIs shown as "Not Subscribed" with disabled checkbox |
| 7 | Manager can successfully assign Directory APIs | Assignment succeeds; Product appears in consumer's assigned list |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-031

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-031 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can audit all permission-based actions performed by subordinate roles

## Preconditions

1. Multiple role-based users have performed actions in system
2. Audit logging configured for all role-based operations
3. Administrator access to complete audit trail

## Test Data

| Field | Value |
|-------|-------|
| Auditable Roles | Support Lead, Customer Manager |
| Period | Last 30 days |
| Log Entries | 250+ |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator navigates to role-based audit trail | Full audit log displays with filtering options |
| 2 | Administrator filters by role "Support Lead" | Log shows all Support Lead actions from last 30 days |
| 3 | Admin reviews Support Lead suspension actions | Shows: Workday suspended on 2026-05-20, FreshIntegration suspended on 2026-05-25 |
| 4 | Admin reviews each action entry | Entry includes: Role, Action Type, Consumer Affected, Timestamp, Reason/Comments |
| 5 | Administrator filters by role "Customer Manager" | Shows customer-initiated actions: Credential creation, rotation, retirement |
| 6 | Admin views permission denial attempts | Shows: 3 failed authorization attempts by Customer Manager for retire operations |
| 7 | Admin exports audit report for compliance | Report includes all role-based actions with complete context and justification |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-032

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-032 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Customer Integration Manager can perform self-service credential management within organization scope

## Preconditions

1. Customer Integration Manager user role configured for Acme Corp
2. Acme Corp has multiple consumers: Workday, SalesForce, Tableau
3. Scope limited to Acme Corp consumers only

## Test Data

| Field | Value |
|-------|-------|
| Manager Org | Acme Corp |
| Consumers | Workday, SalesForce, Tableau |
| Visible Scope | Acme Corp only |
| Hidden Scope | Other organizations' consumers |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer Integration Manager logs in | Dashboard displays Acme Corp consumers: Workday, SalesForce, Tableau |
| 2 | Manager navigates to Workday consumer | Can view and modify Workday credentials |
| 3 | Manager generates new credential for Workday | New API key created successfully |
| 4 | Manager navigates to SalesForce consumer | Can view and modify SalesForce credentials |
| 5 | Manager initiates SalesForce credential rotation | Rotation succeeds for SalesForce |
| 6 | Manager attempts URL navigation to different org consumer (TechCorp) | System redirects to 403 Forbidden: "Consumer not in your organization" |
| 7 | Manager attempts cross-organization API query | API rejects query with 403: "Organization scope violation" |
| 8 | System logs scope violation attempt | Audit trail records attempted out-of-scope access attempt |

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

Read-Only User can generate and share filtered consumer report without data modification

## Preconditions

1. User has Read-Only role
2. Report generation interface accessible
3. Multiple consumers exist for reporting

## Test Data

| Field | Value |
|-------|-------|
| Filter | Tier = "Premium" |
| Report Type | Consumer Status |
| Export Format | PDF |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Read-Only User navigates to reporting section | Report generation interface displays |
| 2 | User applies filter: Tier = "Premium" | Report preview shows 8 Premium-tier consumers |
| 3 | User can view report with masked credentials | Credentials display as masked (api_***789) |
| 4 | User clicks "Generate Report" | Report generation succeeds |
| 5 | User downloads report as PDF | PDF file downloads with filtered consumer data |
| 6 | User can share PDF link with colleagues | Share function enabled for read-only report |
| 7 | User cannot modify report data before sharing | Report data locked; Export shows only viewing capability |

## Reviewer Comments

*To be completed during review.*

---

# EDGE CASES & EXPLORATORY TEST CASES

---

# TC-FE735316-034

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-034 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System Administrator can register consumer with special characters in name and email

## Preconditions

1. Consumer Management interface accessible
2. Special character support enabled (UTF-8)
3. No consumer with special character name exists

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | TechCorp™ Integration (España) |
| Contact Email | técnico+test@company.es |
| Special Characters | ™, (), é, ñ, + |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator enters consumer name "TechCorp™ Integration (España)" | Special characters accepted without validation error |
| 2 | Administrator enters email "técnico+test@company.es" | Email with accented character (é) and plus-addressing (+) accepted |
| 3 | Administrator submits consumer registration | System validates special characters as permitted in UTF-8 |
| 4 | System creates consumer record | Consumer name preserves all special characters: "TechCorp™ Integration (España)" |
| 5 | Administrator views consumer in list | Special characters display correctly in list view |
| 6 | Administrator searches for consumer by name | Search finds consumer with partial special character match |
| 7 | System sends welcome email to técnico+test@company.es | Email delivers successfully to plus-addressed email |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-035

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-035 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System rejects extremely long consumer name exceeding maximum character limit

## Preconditions

1. Consumer name validation enforces 255 character limit
2. Consumer name field has character counter
3. Input attempted with name over limit

## Test Data

| Field | Value |
|-------|-------|
| Max Length | 255 characters |
| Input Length | 300 characters |
| Consumer Name | 300-character string: "aaaaaa...bbbbbb" |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator enters 300-character consumer name | Field displays first 255 characters; remaining cut off |
| 2 | Character counter shows "255/255 (Max)" | Counter indicates maximum reached |
| 3 | Additional characters cannot be entered | Input field rejects further keystrokes |
| 4 | Administrator attempts to submit form | System shows validation error: "Consumer name exceeds 255 character limit" |
| 5 | Administrator trims name to 255 characters | Form validation passes |
| 6 | Administrator submits truncated name | Consumer created successfully with 255-character name |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-036

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-036 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles concurrent credential generation requests from same consumer

## Preconditions

1. Workday consumer has generated one credential
2. Two simultaneous requests to generate new credential initiated
3. Concurrency control implemented

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Concurrent Requests | 2 |
| Request Type | Generate API Key |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-037

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-037 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles credential validation with corrupted or malformed API key format

## Preconditions

1. API request intercepted with malformed API key
2. API Gateway receives request
3. Key format validation enforced

## Test Data

| Field | Value |
|-------|-------|
| Valid Key Format | api_[UUID] or similar |
| Malformed Key 1 | api_###invalid ### |
| Malformed Key 2 | (empty or null) |
| Malformed Key 3 | malformed_key_with_special_chars_@#$% |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-038

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-038 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents credential reuse after retirement by blocking old key indefinitely

## Preconditions

1. Workday consumer has retired API key: api_old_key_123
2. New API key generated: api_new_key_456
3. Old key should never be accepted again

## Test Data

| Field | Value |
|-------|-------|
| Retired Key | api_old_key_123 |
| Retirement Date | 2026-05-21 |
| Verification Period | 365 days |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday retired api_old_key_123 on 2026-05-21 | Key marked as "Retired" in system |
| 2 | Workday sent request immediately after retirement with new key | New key api_new_key_456 accepted and processed |
| 3 | On 2026-06-01 (11 days after retirement), Workday attempts request with old key | System checks key status: "Retired" |
| 4 | Gateway rejects old key with 403 Forbidden | Response: "Credential revoked" |
| 5 | One year later (2027-05-21), Workday attempts request with old key | System still finds key status as "Retired" |
| 6 | Gateway continues rejecting old key with 403 Forbidden | Old key never re-activated or reused |
| 7 | System prevents accidental reissuance of retired key ID | Even manual admin attempt to generate same key ID fails |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-039

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-039 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles null or missing tenant ID gracefully without system crash

## Preconditions

1. Consumer registration with missing tenant ID attempted
2. Tenant ID is required field
3. Error handling configured

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | TestConsumer |
| Tenant ID | (null/missing) |
| Expected Behavior | Validation error, no crash |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator attempts to create consumer with missing Tenant ID | Form submitted without Tenant ID field |
| 2 | System validates required fields | Tenant ID identified as required but missing |
| 3 | System displays validation error | Message: "Tenant ID is required" with highlight on Tenant ID field |
| 4 | System does not crash or display 500 error | Application remains responsive |
| 5 | Administrator re-submits form with valid Tenant ID | Consumer successfully created |
| 6 | System logs validation failure | Audit trail shows attempted creation with missing Tenant ID |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-040

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-040 |
| Priority | Low |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System recovers gracefully from interrupted credential generation process

## Preconditions

1. Customer initiates credential generation process
2. Network interruption occurs mid-process
3. Generation recovery mechanism configured

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Process Stage | Key generated, awaiting display |
| Interruption Type | Network timeout |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer clicks "Generate API Key" button | Key generation initiated; Processing dialog shows |
| 2 | Network interruption occurs (connection lost) | Browser receives timeout error; Page does not display key |
| 3 | Customer refreshes browser page | Application reconnects to server |
| 4 | System checks credential generation status | Generation detected as incomplete (no key displayed to customer) |
| 5 | System allows retry of credential generation | "Generate API Key" button re-enabled |
| 6 | Customer retries generation process | New credential generation initiated (does not duplicate previous attempt) |
| 7 | System displays new credential successfully | New unique API key displayed to customer |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-041

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-041 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles quota exceeded scenario by throttling consumer requests

## Preconditions

1. Workday consumer Premium tier with 100,000 quota/month
2. Workday has reached 99,999 quota (99.999%)
3. Next request would exceed quota

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Quota Limit | 100000 |
| Current Usage | 99999 |
| Remaining Quota | 1 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Workday sends request at 99,999 quota usage | API Gateway processes request normally |
| 2 | Request succeeds, quota increments to 100,000 | Request completes successfully |
| 3 | Workday sends next request (now at limit) | API Gateway checks quota: 100,000/100,000 EXCEEDED |
| 4 | Gateway applies throttling rule | Request queued or rate-limited instead of rejected |
| 5 | System returns HTTP 429 Too Many Requests | Response header includes "Retry-After: 300" (5 minutes) |
| 6 | System logs quota exceeded event | Audit trail records quota threshold breach |
| 7 | Support team receives quota alert notification | Alert shows consumer at 100% of quota |
| 8 | Workday contacts support for quota increase | Support can increase quota or consumer waits for next billing period |

## Reviewer Comments

*To be completed during review.*

---

# INTEGRATION TEST CASES

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

System integrates new API consumer scope with authentication service without synchronization failure

## Preconditions

1. New API product "Analytics Engine" created
2. Scope sync with Auth Service configured
3. Auth Service available and responding

## Test Data

| Field | Value |
|-------|-------|
| New Product | Analytics Engine |
| New Scope | api-analytics-engine |
| Auth Service Endpoint | https://auth.company.com/scopes |
| Retry Policy | 3 retries with exponential backoff |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-043

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-043 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway validates consumer credential by querying authentication service for latest scopes

## Preconditions

1. Workday consumer has valid API key
2. Auth Service maintains scope list
3. Request arrives with Workday credentials

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| API Key | api_xyz123 |
| Auth Service Query | GET /scopes/consumers/workday-001 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-044

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-044 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System maintains data consistency between consumer management UI and credential storage backend

## Preconditions

1. Workday consumer has two active credentials
2. Database records maintained for both credentials
3. UI and backend synchronized

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Credential 1 | api_key_001 (Created 2026-05-15) |
| Credential 2 | api_key_002 (Created 2026-05-20) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

System records complete audit trail of consumer credential creation with all metadata

## Preconditions

1. Customer creates new credential for Workday consumer
2. Audit logging enabled and persisted
3. Audit record includes all required fields

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Action | Create API Key |
| Timestamp | 2026-06-01 10:30:00 UTC |
| Actor | integration-manager@acme.com |
| Reason | New integration deployment |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-046

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-046 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System integrates consumer lifecycle events with notification service for stakeholder alerts

## Preconditions

1. Workday consumer created with notification preferences
2. Notification service integrated
3. Email system configured

## Test Data

| Field | Value |
|-------|-------|
| Event Type | Consumer Suspension |
| Consumer | Workday Integration |
| Notification Recipients | support@acme.com, manager@acme.com |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-047

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-047 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Backend API validates claim token in request header before processing internal operation

## Preconditions

1. Request arrives at internal API endpoint
2. Claim token present in request header
3. Internal API requires token verification

## Test Data

| Field | Value |
|-------|-------|
| Endpoint | /api/internal/consumer-config |
| Token Header | X-Internal-Claim-Token |
| Token Type | internal |
| Expected Status | 200 OK (with valid internal token) |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Internal service sends request to /api/internal/consumer-config with internal claim token | Request received with header X-Internal-Claim-Token: internal_token_xyz |
| 2 | Backend API extracts claim token from header | Token value: internal_token_xyz |
| 3 | API verifies token signature and expiry | Token validation succeeds; Token not expired |
| 4 | API checks token type claim | Token type: "internal" confirmed |
| 5 | API verifies service identity from token | Service: "consumer-service" confirmed as authorized |
| 6 | API processes request with token verified | Internal operation proceeds successfully |
| 7 | Response status 200 OK returned | Request completes with authorized response |
| 8 | If claim token invalid, request rejected with 401 | System enforces token verification requirement |

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
| Reason | Requires manual multi-service interaction verification and visual confirmation of data flow between backend services |

## Title

System propagates consumer tier change to all dependent backend services without race condition

## Preconditions

1. Workday consumer tier: Premium
2. Tier change initiated: Premium → Standard
3. Multiple backend services depend on tier information

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Old Tier | Premium (1000 req/min) |
| New Tier | Standard (500 req/min) |
| Dependent Services | Rate Limiter, Quota Manager, Billing Service |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System Administrator changes Workday tier from Premium to Standard | Change request submitted |
| 2 | System updates primary consumer database | Database record updated with new tier |
| 3 | System propagates tier change to Rate Limiter service | Rate limiter receives tier update: Premium → Standard |
| 4 | System propagates tier change to Quota Manager service | Quota manager receives tier update; Rate limit adjusted to 500 req/min |
| 5 | System propagates tier change to Billing Service | Billing service receives tier update for next billing cycle |
| 6 | Workday sends concurrent requests while tier change propagates | Requests handled with consistency; No duplicate rate limiting or quota application |
| 7 | All services consistently apply Standard tier rules | New rate limit: 500 req/min enforced uniformly across services |
| 8 | After propagation completes, tier change visible in all services | Verification query of all services confirms Standard tier applied |

## Reviewer Comments

*To be completed during review.*

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-FE735316-049

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-049 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API Gateway credential validation completes within 100ms latency SLA

## Preconditions

1. Workday consumer has valid API key
2. Auth Service responds within 50ms
3. Local credential cache populated

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| API Key | api_xyz123 |
| SLA Target | < 100ms (p95) |
| Test Load | 1000 concurrent requests |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-050

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-050 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System handles peak load of 1000 concurrent consumer requests without degradation

## Preconditions

1. Multiple consumers with valid credentials
2. Load testing tool available
3. Backend services ready

## Test Data

| Field | Value |
|-------|-------|
| Load | 1000 concurrent requests |
| Duration | 5 minutes |
| Request Variation | Mix of Directory API, Incident API, Analytics API |
| Target Success Rate | > 99.5% |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Load test initiates 1000 concurrent requests from multiple consumers | Workload distributed across API Gateway |
| 2 | Requests flow through credential validation | All credentials validated without bottleneck |
| 3 | Requests distributed to backend API services | Load balanced across available service instances |
| 4 | System monitors response times and error rates | Metrics collected in real-time |
| 5 | After 5 minutes, 4,995,000 requests processed | Total request volume: 5 minutes × 1000 req/sec = 300,000 requests |
| 6 | Success rate calculated | 4,980,000 successful / 5,000,000 total = 99.6% success rate |
| 7 | Failed requests logged | 20,000 failures documented with error codes |
| 8 | System remains responsive after load test | No service degradation observed; Response times stable |

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

Consumer credential generation completes within 2-second response time SLA

## Preconditions

1. Customer requests credential generation
2. All systems responsive
3. Response time target: < 2 seconds

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Action | Generate API Key |
| Target SLA | < 2 seconds |
| Test Volume | 100 sequential requests |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Test tool initiates credential generation request | Request submitted to system |
| 2 | System generates cryptographically secure API key | Key generation completes in < 500ms |
| 3 | System stores key in secure storage | Database write completes in < 400ms |
| 4 | System prepares response with generated key | Response assembly completes in < 100ms |
| 5 | System returns response to client | Total response time: ~1000ms (< 2000ms SLA) |
| 6 | Test tool repeats for 100 credential generations | Latencies measured for each generation |
| 7 | Average generation time calculated | Mean: 1050ms (within SLA) |
| 8 | SLA compliance verified | 100/100 requests completed within 2-second SLA |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-052

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-052 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System maintains 99.9% uptime for credential validation service across month

## Preconditions

1. Credential validation service deployed
2. High availability configured with failover
3. Monitoring enabled for 30-day period

## Test Data

| Field | Value |
|-------|-------|
| Service | Credential Validation |
| Target Uptime | 99.9% |
| Measurement Period | 30 days |
| Acceptable Downtime | ~43 minutes/month |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Service monitoring initiated at start of month | Uptime tracking begins 2026-06-01 00:00 UTC |
| 2 | Service processes requests continuously | Uptime dashboard tracks real-time status |
| 3 | Planned maintenance scheduled | 30-minute maintenance window 2026-06-15 02:00 UTC |
| 4 | During maintenance window, service briefly unavailable | Downtime: 30 minutes (acceptable for 99.9% SLA) |
| 5 | Unexpected outage occurs 2026-06-20 09:15 UTC | Hardware failure causes 10-minute outage |
| 6 | Automatic failover activates | Service restored within 10 minutes |
| 7 | Month ends and uptime calculated | Uptime = (43200 - 40 minutes downtime) / 43200 = 99.92% (exceeds 99.9%) |
| 8 | SLA compliance confirmed for month | Service meets 99.9% uptime target |

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

System memory consumption remains stable under sustained credential validation load

## Preconditions

1. Load test tool available
2. Memory profiling enabled
3. Credential cache configured

## Test Data

| Field | Value |
|-------|-------|
| Load | 100 requests/second for 1 hour |
| Initial Memory | 512 MB |
| Target Stable Memory | ≤ 600 MB |
| Leak Threshold | ≤ 50 MB increase |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | System starts with baseline memory: 512 MB | Memory baseline recorded |
| 2 | Load test initiates 100 requests/second for 1 hour | 360,000 total requests generated |
| 3 | After 15 minutes (25,000 requests), memory check | Memory: 540 MB (28 MB increase) |
| 4 | After 30 minutes (50,000 requests), memory check | Memory: 560 MB (48 MB increase) |
| 5 | After 45 minutes (75,000 requests), memory check | Memory: 575 MB (63 MB increase - exceeds threshold) |
| 6 | System garbage collection triggers | GC runs and reclaims unused memory |
| 7 | After 1 hour test completion, memory stabilizes | Final memory: 570 MB (58 MB increase) |
| 8 | No memory leak detected | Memory increased but stabilized; No runaway allocation |

## Reviewer Comments

*To be completed during review.*

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-FE735316-054

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-054 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System calculates and validates HMAC-SHA256 signature correctly for request authentication

## Preconditions

1. Consumer has valid API key and secret
2. Request body and headers prepared
3. Signature verification enabled

## Test Data

| Field | Value |
|-------|-------|
| API Key | api_xyz123 |
| Secret | secret_abc456 |
| Request Method | POST |
| Request Path | /api/directory/resources |
| Request Body | {"action": "list", "filter": "status=active"} |
| Expected Signature | HMAC-SHA256 hash of canonical request string |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Consumer constructs canonical request string | String: "POST/api/directory/resources" + request body |
| 2 | Consumer calculates HMAC-SHA256 signature | Signature = HMAC-SHA256(canonical_string, secret_abc456) |
| 3 | Consumer includes signature in X-Signature header | Request header: X-Signature: [calculated_hash] |
| 4 | API Gateway receives request | Signature header extracted |
| 5 | Gateway calculates signature with same method | Gateway computes: HMAC-SHA256(canonical_string, stored_secret) |
| 6 | Gateway compares received vs. calculated signature | Signatures match exactly |
| 7 | Request authenticated successfully | Request forwarded to backend API |
| 8 | Tampered request rejected | If consumer changes request body after signing, signature fails verification |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-055

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-055 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents timing attack by using constant-time comparison for credential validation

## Preconditions

1. Two credentials exist in system
2. Timing attack tool available
3. Constant-time comparison implemented

## Test Data

| Field | Value |
|-------|-------|
| Valid Key | api_xyz123 |
| Invalid Key 1 | api_abc789 (wrong prefix) |
| Invalid Key 2 | api_xyz124 (last digit different) |
| Sample Size | 10,000 comparisons |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Attacker measures timing of valid credential comparison | Comparison with api_xyz123 takes T milliseconds |
| 2 | Attacker measures timing of invalid credential (early mismatch) | Comparison with api_abc789 should take same time |
| 3 | System uses constant-time comparison | Timing is identical regardless of where strings diverge |
| 4 | Attacker measures timing of invalid credential (late mismatch) | Comparison with api_xyz124 takes same time T |
| 5 | Standard deviation of timings calculated | Std dev < 1ms (no timing variance exploitable) |
| 6 | Attacker cannot infer validity from timing | Timing information does not leak credential validity |
| 7 | All 10,000 comparisons maintain consistent timing | No timing-based side channels detected |
| 8 | Security validated: Timing attack infeasible | Credential validation resistant to timing attacks |

## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-056

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-056 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System prevents SQL injection attack through parameterized queries for credential lookup

## Preconditions

1. Credential lookup query implemented
2. SQL parameterization enabled
3. SQL injection test vectors available

## Test Data

| Field | Value |
|-------|-------|
| Malicious Input | api_xyz123'; DROP TABLE credentials; -- |
| Query Type | SELECT * FROM credentials WHERE key = ? |
| Expected Behavior | Query executed safely; No database modification |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-057

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-057 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual accessibility testing tool and screen reader verification |

## Title

Credential management interface meets WCAG 2.1 AA accessibility standards

## Preconditions

1. Credential management UI deployed
2. Accessibility testing tool available (axe, WAVE)
3. Screen reader available (NVDA, JAWS)

## Test Data

| Field | Value |
|-------|-------|
| Standard | WCAG 2.1 AA |
| Test Tool | axe DevTools |
| Screen Reader | NVDA |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-058

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-058 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

System enforces HTTPS/TLS 1.2+ for all credential transmission preventing unencrypted exposure

## Preconditions

1. API endpoint configured with HTTPS
2. TLS 1.2 or higher enforced
3. SSL/TLS certificate valid

## Test Data

| Field | Value |
|-------|-------|
| Protocol | HTTPS |
| Min TLS Version | 1.2 |
| Cipher Suite | AES-256-GCM |
| Certificate | Valid wildcard cert |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Client initiates connection to credential endpoint | Connection attempt to https://api.company.com/credentials |
| 2 | Server offers TLS 1.2 for negotiation | TLS handshake initiates |
| 3 | Client and server negotiate strong cipher suite | Agreed cipher: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 |
| 4 | Certificate validated by client | Valid certificate for api.company.com |
| 5 | Encrypted tunnel established | Data transmission encrypted |
| 6 | Credential key transmitted in request | Key sent over encrypted HTTPS connection |
| 7 | Credential key decrypted only at server | Plaintext never exposed in transit |
| 8 | Downgrade attack test: Client attempts TLS 1.0 | Server rejects TLS 1.0; Connection fails (only 1.2+ accepted) |

## Reviewer Comments

*To be completed during review.*

---

# END-TO-END TEST CASES

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

System Administrator can complete entire API consumer onboarding from registration through production activation

## Preconditions

1. No pre-existing consumer
2. Admin authenticated with full permissions
3. Email system operational

## Test Data

| Field | Value |
|-------|-------|
| Consumer Name | ProductionVendor Inc |
| Contact Email | tech@production-vendor.com |
| Support Tier | Premium |
| API Products | Directory APIs, Incident APIs |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-060

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-060 |
| Priority | High |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual verification of multi-role workflow and approval process interactions |

## Title

Customer Integration Manager and Support Lead collaborate to manage consumer lifecycle through rotation and suspension

## Preconditions

1. Existing consumer with active credentials
2. Two users: Integration Manager and Support Lead
3. Multi-role workflows enabled

## Test Data

| Field | Value |
|-------|-------|
| Consumer | CollaborationTest Corp |
| Manager | manager@acme.com |
| Support Lead | support@acme.com |
| Action Sequence | Rotation → Review → Suspension → Resolution |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-061

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-061 |
| Priority | High |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

API request with valid credentials flows through credential validation to backend completing end-to-end

## Preconditions

1. Workday consumer exists with Directory APIs assigned
2. Valid API key generated and stored
3. Backend API service operational

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| API Key | api_workday_001 |
| Endpoint | POST /api/directory/resources/search |
| Request Payload | {"searchTerm": "risk assessment"} |
| Expected Response | 200 OK with search results |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

Multiple consumers with different tiers experience isolated rate limiting and quota enforcement

## Preconditions

1. Three consumers exist: Premium (1000 req/min), Standard (500 req/min), Basic (100 req/min)
2. All consumers making concurrent requests
3. Rate limiter properly isolates per consumer

## Test Data

| Field | Value |
|-------|-------|
| Premium Consumer | Rate Limit: 1000 req/min |
| Standard Consumer | Rate Limit: 500 req/min |
| Basic Consumer | Rate Limit: 100 req/min |
| Test Duration | 60 seconds |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-063

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-063 |
| Priority | Medium |
| Automatable | No |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |
| Reason | Requires manual verification of support ticket workflow and external escalation process |

## Title

Support team resolves consumer access issue through troubleshooting workflow and credential refresh

## Preconditions

1. Consumer reports access failure to support@company.com
2. Support ticket system operational
3. Consumer credentials accessible for review

## Test Data

| Field | Value |
|-------|-------|
| Consumer | TechVendor Corp |
| Issue | "API returning 403 Forbidden" |
| Root Cause | Credential scope mismatch |
| Resolution | Grant new scope to credential |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-064

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-064 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Authentication service scope synchronization enables new scope availability across all consumers

## Preconditions

1. New scope "api-analytics-engine" published
2. All existing consumers should have access to new scope option
3. Scope sync completes successfully

## Test Data

| Field | Value |
|-------|-------|
| New Scope | api-analytics-engine |
| Existing Consumers | 50 |
| Sync Duration | < 5 seconds |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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
| Reason | Requires manual verification of failure recovery process and state consistency after interruption |

## Title

System recovers from credential synchronization failure maintaining data consistency

## Preconditions

1. Credential sync to Auth Service in progress
2. Network failure occurs mid-sync
3. Recovery mechanism enabled

## Test Data

| Field | Value |
|-------|-------|
| Consumers in Sync | 25 |
| Sync Status Before Failure | 15 completed, 10 pending |
| Failure Point | During 16th consumer sync |
| Recovery Policy | Retry with exponential backoff |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
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

# TC-FE735316-066

## Metadata

| Field | Value |
|-------|-------|
| Test Case ID | TC-FE735316-066 |
| Priority | Medium |
| Automatable | Yes |
| Status | Draft |
| Review Status | Pending |
| Reviewer | |
| Review Date | |

## Title

Consumer tier upgrade workflow increases rate limit and quota with immediate effect

## Preconditions

1. Workday consumer currently at Standard tier (500 req/min, 50000 quota)
2. Upgrade request to Premium tier (1000 req/min, 100000 quota)
3. Active consumer with ongoing requests

## Test Data

| Field | Value |
|-------|-------|
| Consumer | Workday Integration |
| Current Tier | Standard |
| New Tier | Premium |
| Rate Limit Change | 500 → 1000 req/min |
| Quota Change | 50000 → 100000 |

## Test Steps

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | Customer initiates tier upgrade from Standard to Premium | Upgrade request submitted |
| 2 | System confirms tier change in consumer record | Database updated: tier = Premium |
| 3 | Rate Limiter service receives tier update | Rate limiter configuration updated to 1000 req/min |
| 4 | Quota Manager service receives tier update | Quota manager configuration updated to 100000 |
| 5 | During upgrade, Workday sends request at 600 req/min | Request arrives while rate limiter updating |
| 6 | New rate limit (1000 req/min) applied | Request accepted (600 < 1000) |
| 7 | Next requests from Workday use new Premium tier limits | Requests processed with 1000 req/min threshold |
| 8 | Workday quota checked against new limit (100000) | Quota usage now applies larger monthly pool |
| 9 | System records tier upgrade in audit trail | Upgrade documented with timestamp and tier details |
| 10 | Workday can utilize increased rate limit and quota immediately | No downtime during tier upgrade |

## Reviewer Comments

*To be completed during review.*

---

## Summary Statistics

| Category | Test Cases | Range |
|----------|------------|-------|
| Functional Tests | 25 | TC-001 to TC-025 |
| Role-Based & Access Control Tests | 8 | TC-026 to TC-033 |
| Edge Cases & Exploratory Tests | 8 | TC-034 to TC-041 |
| Integration Tests | 7 | TC-042 to TC-048 |
| Performance & Concurrency Tests | 5 | TC-049 to TC-053 |
| Security & Accessibility Tests | 5 | TC-054 to TC-058 |
| End-to-End Tests | 8 | TC-059 to TC-066 |
| **TOTAL TEST CASES** | **66** | TC-001 to TC-066 |

**Test Distribution Breakdown:**

| Category | Count | Percentage |
|----------|-------|-----------|
| Functional | 25 | 37.9% |
| Role-Based | 8 | 12.1% |
| Edge Cases | 8 | 12.1% |
| Integration | 7 | 10.6% |
| Performance | 5 | 7.6% |
| Security/Accessibility | 5 | 7.6% |
| End-to-End | 8 | 12.1% |

**Automation Status Summary:**

| Status | Count | Percentage |
|--------|-------|-----------|
| Automatable (Yes) | 56 | 84.8% |
| Manual (No) | 10 | 15.2% |

---

**Document Status:** DRAFT - Ready for QA Lead Review  
**Created:** 6/1/2026  
**Last Updated:** 6/1/2026
