# Test Cases: AB#735316 - API Consumer and Scope Management

---

# FUNCTIONAL TEST CASES

---

# TC-AB735316-001

## Metadata

| Field         | Value                                      |
| ------------- | ------------------------------------------ |
| Test Case ID  | TC-AB735316-001                            |
| Title         | Customer registers valid integration client |
| Priority      | High                                       |
| Automatable   | Yes                                        |
| Status        | Draft                                      |
| Review Status | Pending                                    |
| Reviewer      |                                            |
| Review Date   |                                            |

## Description

Verify that a customer can successfully register a new integration client with valid inputs through the management UI. The system should generate unique credentials and send an onboarding email.

## Preconditions

1. Customer account exists and is active
2. Customer is authenticated and logged into the platform
3. Customer has required permissions to create integration clients
4. At least one API product scope is available to the customer's subscription

## Test Data

| Field             | Value                 |
| ----------------- | --------------------- |
| Client Name       | Workday Integration   |
| Client Description| Directory sync tool   |
| Selected Scopes   | [api-directory, api-incident] |
| Email Address     | customer@example.com  |

## Test Steps

| Step | Action                                              | Expected Result                              |
| ---- | --------------------------------------------------- | -------------------------------------------- |
| 1    | Navigate to Integration Clients section            | Client list page loads successfully          |
| 2    | Click "New Client" button                          | New client creation form opens               |
| 3    | Enter client name "Workday Integration"            | Name field populated                         |
| 4    | Enter description "Directory sync tool"            | Description field populated                  |
| 5    | Select scopes: api-directory, api-incident         | Both scopes appear selected in form           |
| 6    | Click "Create" button                             | Client creation processes                    |
| 7    | Verify API credentials display (one-time only)     | API key and secret visible in modal          |
| 8    | Close credentials modal                           | Modal closes, client appears in list         |
| 9    | Verify email sent to customer@example.com          | Onboarding email received with setup guide   |

## Expected Outcome

* Integration client "Workday Integration" created successfully
* Unique API key and secret generated and displayed
* Client added to customer's client list
* Onboarding email sent to customer with credentials
* Audit log records client creation event
* Credentials securely stored (hashed/encrypted in database)

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-002

## Metadata

| Field         | Value                              |
| ------------- | ---------------------------------- |
| Test Case ID  | TC-AB735316-002                    |
| Title         | System generates unique API credentials |
| Priority      | High                               |
| Automatable   | Yes                                |
| Status        | Draft                              |
| Review Status | Pending                            |
| Reviewer      |                                    |
| Review Date   |                                    |

## Description

Verify that API credentials (key and secret) are generated with proper uniqueness, format compliance, and cryptographic strength.

## Preconditions

1. Customer account exists and is authenticated
2. Customer has permission to create multiple integration clients
3. System has proper cryptographic libraries configured

## Test Data

| Field            | Value          |
| ---------------- | -------------- |
| First Client     | Client-A       |
| Second Client    | Client-B       |
| Expected Key Length | 32+ characters |
| Expected Secret Length | 64+ characters |

## Test Steps

| Step | Action                              | Expected Result                      |
| ---- | ----------------------------------- | ------------------------------------ |
| 1    | Create first integration client     | API key-1 and secret-1 generated     |
| 2    | Capture and record key-1, secret-1  | Credentials recorded for comparison  |
| 3    | Create second integration client    | API key-2 and secret-2 generated     |
| 4    | Capture and record key-2, secret-2  | Credentials recorded for comparison  |
| 5    | Compare key-1 with key-2            | Keys are different (not duplicated)  |
| 6    | Compare secret-1 with secret-2      | Secrets are different (not duplicated) |
| 7    | Verify key-1 length                 | Length >= 32 characters              |
| 8    | Verify secret-1 length              | Length >= 64 characters              |
| 9    | Verify key format (alphanumeric)    | Contains only URL-safe characters    |
| 10   | Verify secret format (alphanumeric) | Contains only URL-safe characters    |

## Expected Outcome

* Both API keys are unique and not duplicated
* Both API secrets are unique and not duplicated
* API keys meet minimum length requirement (32+ chars)
* API secrets meet minimum length requirement (64+ chars)
* Credentials contain only URL-safe characters (alphanumeric, hyphen, underscore)
* No special characters that could cause encoding issues
* Credentials follow cryptographically secure random generation pattern

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-003

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-003                |
| Title         | Customer lists all integration clients |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can view a complete list of their registered integration clients with relevant metadata displayed correctly.

## Preconditions

1. Customer account exists and is authenticated
2. Customer has 3+ active integration clients created previously
3. At least one client has been used in the last 24 hours

## Test Data

| Field            | Value              |
| ---------------- | ------------------ |
| Client Count     | 3                  |
| Expected Columns | clientId, clientName, scopes, status, createdAt, lastUsedAt |

## Test Steps

| Step | Action                      | Expected Result                    |
| ---- | --------------------------- | ---------------------------------- |
| 1    | Navigate to Integration Clients section | Clients list page loads      |
| 2    | Verify page title           | Title shows "Integration Clients"  |
| 3    | Count displayed clients     | All 3 clients are visible          |
| 4    | Verify table columns        | All required columns present       |
| 5    | Check client names          | All client names displayed         |
| 6    | Check client IDs            | All clientIds properly formatted   |
| 7    | Check scopes column         | Scopes listed for each client      |
| 8    | Check status column         | Status shows "active" or "suspended" |
| 9    | Check createdAt dates       | Dates are valid and readable       |
| 10   | Check lastUsedAt dates      | Recent client shows current date   |

## Expected Outcome

* All integration clients for customer displayed in list
* List includes columns: clientId, clientName, scopes, status, createdAt, lastUsedAt
* Clients are sorted by creation date (newest first)
* Client names are correctly displayed
* No unauthorized clients appear in list
* Pagination available if count exceeds 50 clients

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-004

## Metadata

| Field         | Value                           |
| ------------- | ------------------------------- |
| Test Case ID  | TC-AB735316-004                 |
| Title         | Customer views integration client details |
| Priority      | Medium                          |
| Automatable   | Yes                             |
| Status        | Draft                           |
| Review Status | Pending                         |
| Reviewer      |                                 |
| Review Date   |                                 |

## Description

Verify that customers can view detailed information about a specific integration client, including all assigned scopes and metadata.

## Preconditions

1. Customer account exists and is authenticated
2. At least one integration client exists for the customer
3. Client has multiple scopes assigned (minimum 2)

## Test Data

| Field          | Value             |
| -------------- | ----------------- |
| Client Name    | Workday Integration |
| Scopes         | [api-directory, api-incident] |
| Status         | active            |

## Test Steps

| Step | Action                              | Expected Result                 |
| ---- | ----------------------------------- | ------------------------------- |
| 1    | Navigate to Integration Clients list | List page displays all clients   |
| 2    | Click on specific client (Workday Integration) | Details page loads      |
| 3    | Verify client name displayed        | "Workday Integration" visible   |
| 4    | Verify client ID displayed          | Unique client ID shown          |
| 5    | Verify description displayed        | Description text visible        |
| 6    | Verify status displayed             | Status shows "active"           |
| 7    | Verify scopes list                  | Both api-directory and api-incident listed |
| 8    | Verify creation date displayed      | Formatted date/time shown       |
| 9    | Verify credentials count            | Shows active credential count   |
| 10   | Verify no plain-text secret shown   | Secret field masked or empty    |

## Expected Outcome

* All client details displayed correctly
* Client ID, name, description, status all visible
* All assigned scopes listed
* Creation date properly formatted
* Credential count accurate
* API secret never shown in plain text (masked or empty)
* Edit and Rotate buttons available if user has permission

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-005

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-005                |
| Title         | Customer edits integration client details |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can successfully update client metadata such as name and description without affecting security attributes like client ID or scopes.

## Preconditions

1. Customer account exists and is authenticated
2. Integration client "Old Name" exists for the customer
3. Client has description "Old Description"

## Test Data

| Field                  | Value                     |
| ---------------------- | ------------------------- |
| Original Name          | Old Name                  |
| Updated Name           | Updated Workday Client    |
| Original Description   | Old Description           |
| Updated Description    | Syncs directory data      |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client details page     | Details page loads        |
| 2    | Click "Edit" button                 | Edit form opens           |
| 3    | Clear name field                    | Field becomes empty       |
| 4    | Enter new name "Updated Workday Client" | New name entered        |
| 5    | Clear description field             | Description field cleared |
| 6    | Enter new description "Syncs directory data" | New description entered |
| 7    | Verify clientId field is disabled   | Client ID field read-only |
| 8    | Verify scopes cannot be edited here | Scopes field disabled     |
| 9    | Click "Save" button                 | Changes submitted         |
| 10   | Verify update confirmation message  | "Client updated successfully" displayed |

## Expected Outcome

* Client name updated from "Old Name" to "Updated Workday Client"
* Description updated from "Old Description" to "Syncs directory data"
* Client ID remains unchanged
* Scopes remain unchanged
* Audit log records edit event with old/new values
* Changes persist after page refresh
* No change to API credentials

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-006

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-006                |
| Title         | Customer adds API product scope to client |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can extend an integration client's scope to additional API products that are available in their subscription.

## Preconditions

1. Customer account exists and is authenticated
2. Integration client exists with current scopes: [api-directory]
3. "api-incident" scope is available in customer's subscription
4. Customer has permission to modify scopes

## Test Data

| Field              | Value                       |
| ------------------ | --------------------------- |
| Client Name        | Workday Integration         |
| Current Scope      | api-directory               |
| Scope to Add       | api-incident                |
| Expected Scopes After | [api-directory, api-incident] |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client details page     | Client shows current scope: api-directory |
| 2    | Click "Add Scope" button             | Add scope modal opens      |
| 3    | Verify available scopes listed      | api-incident appears in dropdown |
| 4    | Verify api-directory not shown      | Already assigned scopes excluded |
| 5    | Select "api-incident" from dropdown | Scope selected in modal   |
| 6    | Click "Confirm" button              | Change submitted          |
| 7    | Verify success message              | "Scope added successfully" shown |
| 8    | Verify updated scope list           | Client now shows both scopes |
| 9    | Verify audit log entry created      | Log shows SCOPE_ADDED event |

## Expected Outcome

* API product scope "api-incident" successfully added to client
* Client now has scopes: [api-directory, api-incident]
* Scope list immediately updated in UI
* Audit log records scope addition with timestamp
* New scope becomes effective for next API request
* Client can now call api-incident APIs

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-007

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-007                |
| Title         | Customer removes API product scope from client |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can revoke API product scopes from integration clients, preventing further access to those APIs.

## Preconditions

1. Customer account exists and is authenticated
2. Integration client exists with scopes: [api-directory, api-incident]
3. Customer has permission to modify scopes
4. No critical integrations depend on api-incident scope (or warning accepted)

## Test Data

| Field              | Value                       |
| ------------------ | --------------------------- |
| Client Name        | Workday Integration         |
| Current Scopes     | [api-directory, api-incident] |
| Scope to Remove    | api-incident                |
| Expected Scopes After | [api-directory]            |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client details page     | Client shows both scopes  |
| 2    | Locate scope "api-incident"         | Scope listed with X button |
| 3    | Click X button next to api-incident | Confirmation dialog shown |
| 4    | Verify warning message              | Warning about access revocation shown |
| 5    | Click "Confirm Remove" button       | Scope removal submitted   |
| 6    | Verify success message              | "Scope removed successfully" displayed |
| 7    | Verify updated scope list           | Client now shows only api-directory |
| 8    | Verify audit log entry              | Log shows SCOPE_REMOVED event |
| 9    | Attempt API call to removed scope   | Request rejected (403 Forbidden) |

## Expected Outcome

* Scope "api-incident" successfully removed from client
* Client now has only scope: [api-directory]
* Scope removal effective immediately
* Future API calls to incident endpoint rejected with "Insufficient scope" error
* Audit log records scope removal with timestamp
* Client retains access to directory API

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-008

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-008                |
| Title         | Integration client makes API call within assigned scope |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that an integration client can successfully make API calls to endpoints within its assigned scopes.

## Preconditions

1. Integration client exists with scope: [api-directory]
2. Valid API credentials (key and secret) exist for client
3. Directory API endpoint is operational and accessible
4. Client has valid signature generation capability

## Test Data

| Field              | Value                       |
| ------------------ | --------------------------- |
| API Endpoint       | /api/v1/directory/users     |
| HTTP Method        | GET                         |
| Expected Status    | 200 OK                      |
| Required Scope     | api-directory               |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare API request with valid credentials | Request headers set    |
| 2    | Generate HMAC-SHA256 signature      | Signature calculated      |
| 3    | Include X-Signature header          | Signature added to request |
| 4    | Call /api/v1/directory/users endpoint | Request sent to APIm   |
| 5    | Verify request reaches APIm layer   | Request received          |
| 6    | Verify scope validation passes      | Scope check succeeds (api-directory) |
| 7    | Verify request forwarded to backend | Backend receives request  |
| 8    | Verify response received            | 200 OK response returned  |
| 9    | Measure response latency            | Latency < 200ms           |

## Expected Outcome

* API request processed successfully (200 OK)
* Directory data returned to client
* Request includes necessary headers (X-API-Product, X-Subscription-Tier)
* Response includes rate limit headers
* Request latency meets SLA (<200ms typical)
* Audit log records API call with client ID, endpoint, result

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-009

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-009                |
| Title         | System validates credential scope matches API product |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system performs scope validation before forwarding requests to backend services, rejecting requests where credential scope does not match the requested API product.

## Preconditions

1. Integration client exists with scope: [api-directory] only
2. Client does NOT have scope: [api-incident]
3. Valid API credentials exist for client
4. Incident API endpoint is available

## Test Data

| Field                | Value                 |
| -------------------- | --------------------- |
| Client Scope         | api-directory         |
| Requested Endpoint   | /api/v1/incident/list |
| Required Scope       | api-incident          |
| Expected Status Code | 403                   |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare API request with valid credentials | Request headers set    |
| 2    | Set target endpoint to /api/v1/incident/list | Endpoint configured    |
| 3    | Generate valid signature for client | Signature calculated      |
| 4    | Send request to APIm layer          | Request submitted         |
| 5    | System checks credential scope      | Scope validation performed |
| 6    | System identifies scope mismatch    | api-directory vs api-incident |
| 7    | Verify request NOT forwarded to backend | Backend not contacted |
| 8    | Verify 403 error response           | 403 Forbidden returned    |
| 9    | Verify error message                | Message: "Insufficient scope: api-directory. Required: api-incident" |

## Expected Outcome

* Scope validation rejected before backend forwarding (APIm layer)
* Request returns 403 Forbidden status
* Error message clearly indicates insufficient scope
* Backend service not contacted (no unnecessary traffic)
* Audit log records scope violation attempt
* Client receives helpful error message

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-010

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-010                |
| Title         | System includes API product in forwarded request |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that when APIm forwards requests to backend services, it includes the API product metadata in the request headers.

## Preconditions

1. Integration client exists with scope: [api-directory]
2. Valid API credentials exist for client
3. Backend service is configured and operational
4. APIm and backend are properly connected

## Test Data

| Field              | Value                   |
| ------------------ | ----------------------- |
| API Endpoint       | /api/v1/directory/users |
| Expected Header    | X-API-Product           |
| Expected Value     | Directory APIs          |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare valid API request           | Request prepared          |
| 2    | Send request to APIm                | Request received by APIm  |
| 3    | APIm validates credentials          | Validation passes         |
| 4    | APIm validates scope                | Scope check passes        |
| 5    | APIm forwards request to backend    | Request forwarded         |
| 6    | Capture forwarded request headers   | Headers intercepted       |
| 7    | Verify X-API-Product header present | Header included in request |
| 8    | Verify header value                 | Value = "Directory APIs"  |
| 9    | Verify backend received header      | Backend acknowledges      |

## Expected Outcome

* Forwarded request includes X-API-Product header
* Header value correctly identifies API product
* Backend can identify which product is being accessed
* Backend can apply product-specific policies
* Product metadata available for logging and monitoring

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-011

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-011                |
| Title         | System includes subscription tier in forwarded request |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that subscription tier information is included in forwarded requests to backend services, enabling tier-specific processing.

## Preconditions

1. Customer has Premium subscription tier
2. Integration client exists for Premium tier customer
3. Valid API credentials exist for client
4. Backend service is operational

## Test Data

| Field                  | Value           |
| ---------------------- | --------------- |
| Customer Tier          | Premium         |
| Expected Header        | X-Subscription-Tier |
| Expected Header Value  | Premium         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Authenticate as Premium tier customer | Customer context set     |
| 2    | Prepare API request with credentials | Request prepared          |
| 3    | Send request to APIm                | Request received          |
| 4    | APIm validates credentials          | Validation passes         |
| 5    | APIm retrieves subscription tier    | Tier = Premium retrieved  |
| 6    | APIm includes tier in forwarded request | Header added            |
| 7    | Forward request to backend          | Request sent to backend   |
| 8    | Capture forwarded request headers   | Headers inspected         |
| 9    | Verify X-Subscription-Tier header   | Header present and correct |

## Expected Outcome

* Forwarded request includes X-Subscription-Tier header
* Header value correctly reflects customer's subscription tier (Premium)
* Backend receives tier information
* Backend can apply tier-specific rate limits and features
* Premium customers get priority processing if configured
* Tier information enables SLA enforcement

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-012

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-012                |
| Title         | Backend receives correct backendURL based on tier |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that APIm routes requests to the correct backend service URL based on customer's subscription tier.

## Preconditions

1. Multiple backend URLs configured for different tiers:
   - backendURL_Free = https://backend-free.api.example.com
   - backendURL_Premium = https://backend-premium.api.example.com
2. Free tier customer exists with credentials
3. Premium tier customer exists with credentials
4. Both backend services operational

## Test Data

| Field                      | Value                              |
| -------------------------- | ---------------------------------- |
| Free Tier Backend URL      | https://backend-free.api.example.com |
| Premium Tier Backend URL   | https://backend-premium.api.example.com |
| Test Endpoint              | /api/v1/directory/users            |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Authenticate as Free tier customer  | Free tier context set     |
| 2    | Prepare API request                 | Request prepared          |
| 3    | Send request to APIm                | Request received          |
| 4    | APIm determines customer tier       | Tier = Free identified    |
| 5    | APIm selects backend URL            | backendURL_Free selected  |
| 6    | Verify request routed to Free backend | Network traffic verified |
| 7    | Authenticate as Premium tier customer | Premium tier context set |
| 8    | Prepare same API request            | Request prepared          |
| 9    | Send request to APIm                | Request received          |
| 10   | APIm determines customer tier       | Tier = Premium identified |
| 11   | APIm selects backend URL            | backendURL_Premium selected |
| 12   | Verify request routed to Premium backend | Network traffic verified |

## Expected Outcome

* Free tier requests routed to backendURL_Free
* Premium tier requests routed to backendURL_Premium
* Each tier receives appropriate quality of service
* Backend routing is automatic and transparent to client
* Routing persists consistently across multiple requests
* Backend URL per tier can be updated without client changes

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-013

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-013                |
| Title         | System rotates API credentials successfully |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can successfully rotate API credentials for an integration client, generating new credentials and revoking old ones.

## Preconditions

1. Integration client exists with active credentials
2. Customer is authenticated with permission to rotate credentials
3. Client has been used previously (to test continuity)

## Test Data

| Field              | Value                |
| ------------------ | -------------------- |
| Client Name        | Workday Integration  |
| Current API Key    | key_current_xxxxx    |
| Current API Secret | secret_current_xxxxx |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client details page     | Client details loaded     |
| 2    | Click "Rotate Credentials" button    | Rotation confirmation shown |
| 3    | Review rotation warning             | Warning about current key revocation |
| 4    | Click "Confirm Rotation"            | Rotation process initiated |
| 5    | Verify new credentials generated    | New API key and secret displayed |
| 6    | Verify new key format (32+ chars)   | Key properly formatted    |
| 7    | Verify new secret format (64+ chars) | Secret properly formatted |
| 8    | Verify credentials display once     | Modal shows one-time display |
| 9    | Copy new credentials to clipboard   | Credentials copied        |
| 10   | Close credentials modal             | Modal closes              |
| 11   | Verify old credentials revoked      | Old key status = revoked  |

## Expected Outcome

* New API credentials generated successfully
* Old API credentials automatically revoked
* New credentials displayed in one-time modal (secure)
* Old credentials immediately rejected for API calls
* Audit log records credential rotation with timestamp
* Customer notified via email with rotation confirmation
* No grace period for old credentials (immediate revocation)

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-014

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-014                |
| Title         | Old credentials rejected after rotation |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that old API credentials are immediately rejected after credential rotation and new credentials are accepted.

## Preconditions

1. Integration client has active credentials
2. Credentials have been rotated (new key and secret generated)
3. Old credentials are known and recorded

## Test Data

| Field          | Value              |
| -------------- | ------------------ |
| Old API Key    | key_old_xxxxx      |
| Old API Secret | secret_old_xxxxx   |
| New API Key    | key_new_yyyyy      |
| New API Secret | secret_new_yyyyy   |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare API request with old credentials | Request prepared        |
| 2    | Calculate signature using old secret | Signature calculated    |
| 3    | Send request with old credentials   | Request sent             |
| 4    | APIm validates old credentials      | Validation attempt       |
| 5    | System checks credential status     | Status = revoked found   |
| 6    | Request rejected                   | 401 Unauthorized returned |
| 7    | Prepare API request with new credentials | Request prepared        |
| 8    | Calculate signature using new secret | Signature calculated    |
| 9    | Send request with new credentials   | Request sent             |
| 10   | APIm validates new credentials      | Validation succeeds      |
| 11   | System checks credential status     | Status = active found    |
| 12   | Request forwarded to backend        | Request processed (200 OK) |

## Expected Outcome

* API calls with old credentials rejected (401 Unauthorized)
* Error message indicates credential revocation
* API calls with new credentials accepted and processed
* No grace period for credential transition
* Old and new credentials work independently
* Audit log records both rejection and acceptance

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-015

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-015                |
| Title         | Customer explicitly revokes credentials |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can manually revoke specific credential sets for a client, immediately preventing their use.

## Preconditions

1. Integration client has multiple active credentials
2. At least 2 credential sets exist for the client
3. Customer has permission to revoke credentials

## Test Data

| Field                  | Value             |
| ---------------------- | ----------------- |
| Client Name            | Workday Integration |
| Credential to Revoke   | credential_id_001 |
| Remaining Credentials  | credential_id_002 |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client credentials section | Credentials list displayed |
| 2    | Locate specific credential          | credential_id_001 visible |
| 3    | Click revoke button next to credential | Revocation confirmation shown |
| 4    | Verify confirmation dialog          | Dialog asks for confirmation |
| 5    | Click "Confirm Revoke"              | Revocation submitted      |
| 6    | Verify success message              | "Credential revoked successfully" |
| 7    | Verify credential status changed    | Status = revoked shown    |
| 8    | Attempt API call with revoked key   | Request rejected (401)    |
| 9    | Attempt API call with other key     | Request accepted (200 OK) |

## Expected Outcome

* Credential manually revoked successfully
* Revoked credential immediately rejected for API calls
* Remaining credentials continue to work
* Audit log records credential revocation with timestamp
* Reason field optional for customer to note why revoked
* Revocation effective immediately (no grace period)

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-016

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-016                |
| Title         | System enforces subscription entitlement |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers cannot make API calls to products outside their subscription, even if they have scopes configured for those products.

## Preconditions

1. Customer subscription includes only "Directory APIs"
2. Customer subscription does NOT include "Incident & Impacts Export API"
3. Integration client has scopes: [api-directory] only
4. Scope validation would pass (to test entitlement check separately)

## Test Data

| Field                    | Value                         |
| ------------------------ | ----------------------------- |
| Subscription Products    | [Directory APIs]              |
| Attempted Product        | Incident & Impacts Export API |
| Expected Status Code     | 403                           |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify customer subscription        | Subscription = Directory APIs only |
| 2    | Prepare API request to incident endpoint | Request prepared        |
| 3    | Include valid credentials and signature | Request signed          |
| 4    | Send request to APIm                | Request received          |
| 5    | APIm validates credentials          | Validation passes         |
| 6    | APIm validates scope                | Scope validation passes   |
| 7    | APIm checks subscription entitlement | Entitlement check fails   |
| 8    | Request rejected                   | 403 Forbidden returned    |
| 9    | Verify error message                | Message indicates "Product not in subscription" |

## Expected Outcome

* Request rejected with 403 Forbidden
* Error message indicates product not in subscription
* Message suggests contacting sales for upgrade
* Backend service not contacted (no unnecessary traffic)
* Audit log records subscription violation attempt
* Sales team notified of upsell opportunity

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-017

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-017                |
| Title         | System validates API key format |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system rejects API requests with malformed or invalid API keys.

## Preconditions

1. APIm is operational
2. Valid API endpoints are accessible
3. Test with various invalid key formats

## Test Data

| Field                  | Value                  |
| ---------------------- | ---------------------- |
| Invalid Key - Too Short | abc                    |
| Invalid Key - Empty    |                        |
| Invalid Key - Special Chars | key@#$%^&*()       |
| Invalid Key - Spaces   | key with spaces        |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Send request with too short key (3 chars) | Request sent         |
| 2    | APIm validates key format           | Validation fails          |
| 3    | Verify rejection                   | 400 Bad Request returned  |
| 4    | Verify error message                | "Invalid API key format"  |
| 5    | Send request with empty key         | Request sent              |
| 6    | APIm validates key format           | Validation fails          |
| 7    | Verify rejection                   | 400 Bad Request returned  |
| 8    | Send request with special characters | Request sent              |
| 9    | APIm validates key format           | Validation fails          |
| 10   | Verify rejection                   | 400 Bad Request returned  |
| 11   | Send request with spaces in key     | Request sent              |
| 12   | APIm validates key format           | Validation fails          |

## Expected Outcome

* All requests with invalid key formats rejected
* Error code 400 Bad Request returned consistently
* Clear error messages guide client to fix issue
* Validation occurs before database lookup (efficiency)
* Audit log records invalid format attempts

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-018

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-018                |
| Title         | System validates API request signature (HMAC) |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system validates HMAC-SHA256 signatures on API requests, accepting valid signatures and rejecting invalid or tampered signatures.

## Preconditions

1. Integration client has valid API credentials
2. Request body is prepared
3. HMAC-SHA256 calculation capability available

## Test Data

| Field                | Value                     |
| -------------------- | ------------------------- |
| API Secret           | secret_xxxxxxxxxxxxx      |
| Request Body         | {"action": "list_users"} |
| Algorithm            | HMAC-SHA256               |
| Valid Signature      | calculated_hmac_value     |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare request body                | Body = {"action": "list_users"} |
| 2    | Calculate HMAC-SHA256 with secret   | Signature calculated      |
| 3    | Include signature in X-Signature header | Header added            |
| 4    | Send request with valid signature   | Request submitted         |
| 5    | APIm calculates signature           | Signature recalculated    |
| 6    | APIm compares signatures (constant-time) | Signatures match        |
| 7    | Request accepted                   | 200 OK returned           |
| 8    | Modify request body                 | Body altered after signing |
| 9    | Send request with modified body     | Request submitted         |
| 10   | APIm recalculates signature         | Signature recalculated    |
| 11   | APIm compares signatures            | Signatures do NOT match   |
| 12   | Request rejected                   | 401 Unauthorized returned |

## Expected Outcome

* Valid signatures accepted and request processed
* Invalid signatures rejected with 401 Unauthorized
* Tampered request bodies detected via signature mismatch
* Constant-time comparison prevents timing attacks
* Error message does not reveal signature details
* Audit log records signature validation failures

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-019

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-019                |
| Title         | System prevents duplicate client names |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system prevents customers from creating multiple integration clients with the same name within their account.

## Preconditions

1. Customer has existing client named "Workday-Integration"
2. Customer is authenticated with permission to create clients
3. Client creation form is accessible

## Test Data

| Field              | Value               |
| ------------------ | ------------------- |
| Existing Client    | Workday-Integration |
| Duplicate Name     | Workday-Integration |
| Name Check         | Case-insensitive    |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client creation form    | Form loads                |
| 2    | Enter name: "Workday-Integration"   | Name field populated      |
| 3    | Enter description                   | Description entered       |
| 4    | Select scopes                       | Scopes selected           |
| 5    | Click "Create" button               | Validation triggered      |
| 6    | System checks for duplicate name    | Name check performed      |
| 7    | System finds existing client        | Match found in database   |
| 8    | Request rejected                   | Creation blocked          |
| 9    | Verify error message                | "Client name already exists" |
| 10   | Try with different case: "workday-integration" | Attempt submitted |
| 11   | System performs case-insensitive check | Case-insensitive match |
| 12   | Request rejected                   | Creation blocked (case-insensitive) |

## Expected Outcome

* Duplicate client names rejected
* Validation prevents duplicate names
* Case-insensitive validation enforced
* Clear error message guides user to choose different name
* No duplicate clients created
* Audit log records duplicate name attempt

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-020

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-020                |
| Title         | Customer retrieves client audit trail |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customers can view a complete audit trail for an integration client, showing all historical actions and changes.

## Preconditions

1. Integration client exists with multiple historical events
2. Client has undergone various operations: creation, scope addition, credential rotation
3. Customer has permission to view audit logs

## Test Data

| Field             | Value                |
| ----------------- | -------------------- |
| Client Name       | Workday Integration  |
| Expected Events   | CLIENT_CREATED, SCOPE_ADDED, SCOPE_REMOVED, CREDENTIAL_ROTATED, CREDENTIAL_REVOKED |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client details page     | Client details loaded     |
| 2    | Click "Audit Log" tab or button      | Audit log section opens   |
| 3    | Verify log displays events          | Events listed in reverse chronological order |
| 4    | Verify CLIENT_CREATED event         | Initial creation logged   |
| 5    | Verify SCOPE_ADDED event            | Scope additions logged    |
| 6    | Verify SCOPE_REMOVED event          | Scope removals logged     |
| 7    | Verify CREDENTIAL_ROTATED event     | Credential changes logged |
| 8    | Verify CREDENTIAL_REVOKED event     | Credential revocations logged |
| 9    | Verify timestamp for each event     | Timestamps accurate and formatted |
| 10   | Verify user/actor for each event    | Actor identified         |
| 11   | Verify event details                | Details include before/after values |

## Expected Outcome

* All client events visible in audit trail
* Events displayed in chronological order (newest first)
* Timestamps accurate and consistently formatted
* Actor/user identified for each event
* Event details include relevant context
* Audit log is immutable (read-only for customer)
* Tamper-evident audit trail maintained

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-021

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-021                |
| Title         | Rate limit information displayed in response |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that API responses include rate limit information in headers, helping clients manage their quota proactively.

## Preconditions

1. Integration client exists with valid credentials
2. Customer has Free tier subscription (100 requests/second limit)
3. API endpoint is operational

## Test Data

| Field                | Value            |
| -------------------- | ---------------- |
| Rate Limit Per Sec   | 100              |
| Initial Remaining    | 100              |
| After 3 Requests     | 97               |
| Reset Time           | timestamp        |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Make initial API request            | Request processed         |
| 2    | Capture response headers            | Headers extracted         |
| 3    | Verify X-RateLimit-Limit header     | Header present, value = 100 |
| 4    | Verify X-RateLimit-Remaining header | Header present, value = 99 |
| 5    | Verify X-RateLimit-Reset header     | Header present, timestamp shown |
| 6    | Make second API request             | Request processed         |
| 7    | Capture response headers            | Headers extracted         |
| 8    | Verify X-RateLimit-Remaining        | Value = 98 (decremented) |
| 9    | Make third API request              | Request processed         |
| 10   | Capture response headers            | Headers extracted         |
| 11   | Verify X-RateLimit-Remaining        | Value = 97 (decremented) |
| 12   | Verify reset time accuracy          | Timestamp matches quota reset |

## Expected Outcome

* Response includes X-RateLimit-Limit header
* Response includes X-RateLimit-Remaining header
* Response includes X-RateLimit-Reset header
* Values accurately reflect current quota status
* Remaining count decrements correctly
* Reset timestamp accurate
* Client can proactively manage quota

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-022

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-022                |
| Title         | System handles concurrent API requests from same client |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system correctly handles multiple simultaneous API requests from the same client without race conditions or credential validation conflicts.

## Preconditions

1. Integration client exists with valid credentials
2. Client can make concurrent requests
3. Backend service handles concurrent requests

## Test Data

| Field                  | Value   |
| ---------------------- | ------- |
| Concurrent Requests    | 5       |
| Expected Success Rate  | 100%    |
| Expected Errors       | 0       |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare 5 concurrent API requests   | Requests queued           |
| 2    | All requests have valid credentials | Credentials set for each  |
| 3    | All requests have valid signatures  | Signatures calculated     |
| 4    | Send all 5 requests simultaneously  | Requests submitted        |
| 5    | APIm validates all credentials      | All validations succeed   |
| 6    | APIm validates all scopes           | All scope checks pass     |
| 7    | Forward all requests to backend     | All forwarded            |
| 8    | Monitor for race conditions         | No race conditions detected |
| 9    | Verify all 5 responses received     | All 5 responses received  |
| 10   | Verify response codes               | All 200 OK responses      |
| 11   | Verify response bodies              | All contain expected data |
| 12   | Verify request isolation            | No cross-contamination of data |

## Expected Outcome

* All concurrent requests processed successfully
* No race conditions between requests
* Credential validation not affected by concurrency
* Each request properly isolated
* All responses returned correctly
* No request blocking or deadlocks
* Performance acceptable with concurrent load

## Reviewer Comments

*To be completed during review.*

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-AB735316-023

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-023                |
| Title         | Read-only user cannot create integration clients |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that users with read-only role cannot create new integration clients, preventing unauthorized client registration.

## Preconditions

1. Read-only user account exists
2. User is logged in with read-only role
3. Integration clients list is visible
4. Customer has existing integration clients

## Test Data

| Field              | Value       |
| ------------------ | ----------- |
| User Role          | Read-Only   |
| UI Button State    | Disabled/Hidden |
| API Response Code  | 403         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as read-only user             | User logged in            |
| 2    | Navigate to Integration Clients     | List page loads           |
| 3    | Locate "New Client" button          | Button visible/hidden     |
| 4    | Verify button state                 | Button disabled or not shown |
| 5    | Attempt to click button             | No action occurs or tooltip shown |
| 6    | Attempt direct API call to create   | POST /clients submitted   |
| 7    | APIm checks user permissions        | Permission check fails    |
| 8    | Verify API response                 | 403 Forbidden returned    |
| 9    | Verify error message                | "Insufficient permissions" |
| 10   | Verify no client created            | Client count unchanged    |

## Expected Outcome

* "New Client" button disabled or hidden for read-only users
* Direct API calls to create client rejected (403)
* Error message clearly indicates insufficient permissions
* No clients created via UI or API
* Audit log records unauthorized creation attempt
* User receives appropriate error message

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-024

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-024                |
| Title         | Read-only user cannot modify scopes |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that users with read-only role cannot add or remove scopes from integration clients.

## Preconditions

1. Read-only user account exists and is logged in
2. Integration client exists with scopes: [api-directory]
3. Available scope to add: api-incident

## Test Data

| Field              | Value       |
| ------------------ | ----------- |
| User Role          | Read-Only   |
| Scope to Add       | api-incident |
| Expected Status    | 403         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as read-only user             | User logged in            |
| 2    | Navigate to client details          | Client details page loads |
| 3    | Locate "Add Scope" button            | Button visible/hidden     |
| 4    | Verify button is disabled           | Button disabled or greyed out |
| 5    | Attempt to click "Add Scope"         | No action occurs          |
| 6    | Attempt direct API call to add scope | PUT /clients/{id}/scopes  |
| 7    | APIm checks permissions             | Permission check fails    |
| 8    | Verify API response                 | 403 Forbidden returned    |
| 9    | Verify scope list unchanged         | Scope list remains [api-directory] |
| 10   | Verify audit log                    | Unauthorized attempt logged |

## Expected Outcome

* "Add Scope" button disabled for read-only users
* Scope modification API calls rejected (403)
* No scopes added to client
* Error message indicates insufficient permissions
* Audit log records unauthorized modification attempt

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-025

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-025                |
| Title         | Read-only user cannot rotate credentials |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that users with read-only role cannot rotate credentials, preventing unauthorized credential generation.

## Preconditions

1. Read-only user account exists and is logged in
2. Integration client with active credentials exists
3. Client details page is accessible

## Test Data

| Field              | Value       |
| ------------------ | ----------- |
| User Role          | Read-Only   |
| Action             | Rotate Credentials |
| Expected Response  | 403         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as read-only user             | User logged in            |
| 2    | Navigate to client details          | Details page loaded       |
| 3    | Locate "Rotate Credentials" button   | Button visible/hidden     |
| 4    | Verify button is disabled           | Button disabled or greyed  |
| 5    | Attempt to click button             | No action occurs          |
| 6    | Attempt direct API call for rotation | POST /clients/{id}/rotate-credentials |
| 7    | APIm checks user permissions        | Permission check fails    |
| 8    | Verify API response                 | 403 Forbidden returned    |
| 9    | Verify old credentials still active | Original credentials unchanged |
| 10   | Verify no new credentials created   | No new credentials generated |

## Expected Outcome

* "Rotate Credentials" button disabled for read-only users
* Credential rotation API calls rejected (403)
* Old credentials remain active
* Error message indicates insufficient permissions
* Audit log records unauthorized rotation attempt
* Client security not compromised

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-026

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-026                |
| Title         | Admin user can manage all customer clients |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that admin users have override permissions to manage integration clients for any customer account.

## Preconditions

1. Admin user account exists and is logged in
2. Customer account exists with integration clients
3. Admin has access to customer management interface

## Test Data

| Field              | Value           |
| ------------------ | --------------- |
| User Role          | Admin           |
| Target Customer    | Customer-ABC    |
| Action             | View/Create/Edit/Delete clients |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as admin user                 | Admin logged in           |
| 2    | Navigate to customer management     | Customer list displayed   |
| 3    | Select Customer-ABC                 | Customer details loaded   |
| 4    | Click "Manage Integration Clients"   | Clients for Customer-ABC shown |
| 5    | Verify admin can view all clients   | All clients visible       |
| 6    | Click "Create Client" button        | New client form opens     |
| 7    | Create new client for Customer-ABC  | Client created successfully |
| 8    | Click "Edit" on existing client     | Edit form opens           |
| 9    | Modify client details               | Details updated           |
| 10   | Click "Delete" on existing client   | Client deleted (if confirmed) |
| 11   | Verify all actions logged           | Audit log shows admin actions |

## Expected Outcome

* Admin can view all customers' integration clients
* Admin can create clients for any customer
* Admin can edit clients for any customer
* Admin can delete clients for any customer
* All admin actions are logged with admin ID
* Customer cannot be accessed by other customers
* Override permissions documented and audited

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-027

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-027                |
| Title         | Support lead can view client details |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that support lead users can view client details to assist with customer issues, but cannot see sensitive information like secrets.

## Preconditions

1. Support lead user account exists and is logged in
2. Customer account exists with integration clients
3. Support lead has access to customer support interface

## Test Data

| Field                | Value       |
| -------------------- | ----------- |
| User Role            | Support Lead |
| Viewable Fields      | clientId, name, scopes, status, lastUsedAt |
| Hidden Fields        | apiSecret, credentials |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as support lead               | Support user logged in    |
| 2    | Navigate to customer lookup         | Customer search interface |
| 3    | Search for customer                 | Customer found            |
| 4    | Click "View Clients" for customer   | Client list loads         |
| 5    | Verify support can see client names | Names visible             |
| 6    | Verify support can see scopes       | Scopes visible            |
| 7    | Verify support can see status       | Status visible            |
| 8    | Verify support can see lastUsedAt   | Last used date visible    |
| 9    | Click on specific client            | Client details open       |
| 10   | Verify API secret is masked         | Secret not shown or masked |
| 11   | Verify credentials not visible      | Credential details hidden |

## Expected Outcome

* Support lead can view client metadata
* Support lead can see scopes and status for troubleshooting
* Support lead cannot see API secrets or credentials
* Credentials section shows masked values or "Not available"
* Support lead can view audit trail
* Access is read-only (no modifications)

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-028

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-028                |
| Title         | Support lead cannot rotate customer credentials |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that support lead users cannot rotate credentials for customer clients, maintaining credential security.

## Preconditions

1. Support lead user account exists and is logged in
2. Customer integration client exists
3. Support lead is viewing customer's client details

## Test Data

| Field              | Value       |
| ------------------ | ----------- |
| User Role          | Support Lead |
| Action             | Rotate Credentials |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as support lead               | Support user logged in    |
| 2    | Navigate to customer's client       | Client details open       |
| 3    | Locate "Rotate Credentials" button   | Button visible/hidden     |
| 4    | Verify button is disabled           | Button disabled or not shown |
| 5    | Attempt direct API call to rotate   | Request sent              |
| 6    | APIm checks permissions             | Permission check fails    |
| 7    | Verify API response                 | 403 Forbidden returned    |
| 8    | Verify credentials unchanged        | Old credentials still active |

## Expected Outcome

* Support lead cannot access credential rotation feature
* API calls for credential rotation rejected (403)
* Error message indicates insufficient permissions
* Customer's credentials remain unchanged
* Security of customer credentials maintained
* Audit log records unauthorized rotation attempt

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-029

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-029                |
| Title         | API key alone is not sufficient (requires signature) |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that API key alone cannot be used to make requests; a valid cryptographic signature is required, proving key ownership.

## Preconditions

1. Integration client has valid API key and secret
2. API endpoint is accessible
3. Request can be prepared without signature

## Test Data

| Field              | Value              |
| ------------------ | ------------------ |
| API Key            | key_valid_xxxxx    |
| Request Body       | {"action": "list"} |
| Signature Header   | X-Signature        |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare API request with body       | Request prepared          |
| 2    | Include valid API key in request    | Key included              |
| 3    | Omit X-Signature header             | No signature included     |
| 4    | Send request                       | Request submitted         |
| 5    | APIm validates request              | Validation performed      |
| 6    | APIm checks for signature header    | Header check fails        |
| 7    | Verify response code                | 401 Unauthorized returned |
| 8    | Verify error message                | "Missing required signature" |
| 9    | Prepare request with key and signature | Request prepared with both |
| 10   | Send request with signature         | Request submitted         |
| 11   | APIm validates request              | Validation succeeds       |
| 12   | Verify response code                | 200 OK returned           |

## Expected Outcome

* Requests with key but no signature rejected (401)
* Clear error message indicates missing signature
* Requests with both key and valid signature accepted
* Signature requirement prevents key interception attacks
* Audit log records missing signature attempts

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-030

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-030                |
| Title         | Customer cannot access other customer's clients |
| Priority      | Critical                      |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that multi-tenant isolation is enforced, preventing one customer from accessing another customer's integration clients.

## Preconditions

1. Customer A account exists and is logged in
2. Customer B account exists with integration clients
3. Direct URL manipulation possible for testing
4. API access control is implemented

## Test Data

| Field                  | Value            |
| ---------------------- | ---------------- |
| Customer A ID          | customer_id_111  |
| Customer B ID          | customer_id_222  |
| Customer B Client ID   | client_id_xyz    |
| Expected Response      | 403 Forbidden    |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as Customer A                 | Customer A logged in      |
| 2    | Attempt to access Customer B's client via direct URL | Attempted |
| 3    | URL manipulation (change customer_id) | /clients?customer_id=222 |
| 4    | Send request to view Customer B's client | Request submitted      |
| 5    | APIm checks customer context        | Context verification      |
| 6    | APIm validates ownership            | Ownership check fails     |
| 7    | Verify response code                | 403 Forbidden returned    |
| 8    | Verify error message                | "Not authorized to access this resource" |
| 9    | Attempt API call to modify Customer B's client | PUT request    |
| 10   | Verify request rejected             | 403 Forbidden returned    |

## Expected Outcome

* Customer A cannot view Customer B's clients
* Customer A cannot access Customer B's client details
* Customer A cannot modify Customer B's clients
* URL manipulation prevented by server-side validation
* Error message does not leak Customer B information
* Audit log records unauthorized access attempt
* Multi-tenant isolation enforced at all levels

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-031

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-031                |
| Title         | Customer token scoped to specific customer |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that authentication tokens are scoped to a specific customer, preventing cross-customer access even with valid tokens.

## Preconditions

1. Customer A authentication token obtained
2. Customer B account exists
3. Token contains customer_id claim

## Test Data

| Field                  | Value            |
| ---------------------- | ---------------- |
| Customer A Token       | token_aaa_xxxxx  |
| Customer A ID          | customer_id_111  |
| Customer B ID          | customer_id_222  |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as Customer A                 | Token generated for Customer A |
| 2    | Decode token (JWT)                  | Token claims visible      |
| 3    | Verify customer_id in token         | customer_id = 111         |
| 4    | Attempt to use Customer A token for Customer B API call | Attempted |
| 5    | Send request to /api/v1/clients with Customer A token | Request submitted |
| 6    | Add header: X-Customer-ID = customer_id_222 | Header manipulated |
| 7    | Send request                       | Request submitted         |
| 8    | APIm validates token scope          | Scope check performed     |
| 9    | APIm compares token customer_id with header | Mismatch detected |
| 10   | Verify response code                | 403 Forbidden returned    |
| 11   | Verify error message                | "Not authorized for this customer" |

## Expected Outcome

* Tokens contain customer_id claim
* Token scope tied to specific customer
* Cross-customer requests rejected (403)
* Token cannot be reused for other customers
* Header manipulation detected
* Audit log records scope violation attempt

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-032

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-032                |
| Title         | Expired credentials are rejected |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that API keys with expired credentials cannot be used to make requests and are properly rejected.

## Preconditions

1. API key created 91 days ago (expires after 90 days)
2. API key is now past expiration
3. API endpoint is accessible

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| API Key                | key_old_expired    |
| Expiration Threshold   | 90 days            |
| Days Since Creation    | 91                 |
| Expected Status Code   | 401                |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify API key is past expiration   | Expiration date confirmed |
| 2    | Prepare API request with expired key | Request prepared         |
| 3    | Include expired key in request      | Key included              |
| 4    | Generate signature                  | Signature calculated      |
| 5    | Send request with expired key       | Request submitted         |
| 6    | APIm validates credentials          | Validation performed      |
| 7    | APIm checks key expiration date     | Expiration check fails    |
| 8    | Verify response code                | 401 Unauthorized returned |
| 9    | Verify error message                | "API key expired. Please rotate credentials" |
| 10   | Verify request not forwarded        | Backend not contacted     |

## Expected Outcome

* Expired API keys are rejected (401)
* Error message indicates expiration
* Message suggests credential rotation
* Backend service not contacted for expired keys
* Audit log records expired key usage attempt
* Customer prompted to rotate credentials

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-033

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-033                |
| Title         | Suspended clients cannot make API calls |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that suspended integration clients are locked out and cannot make API requests.

## Preconditions

1. Integration client exists and is active
2. Admin user can suspend clients
3. Client has valid credentials

## Test Data

| Field              | Value           |
| ------------------ | --------------- |
| Client Name        | Workday Integration |
| Client Status      | suspended       |
| Suspension Reason  | Account inactive |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify client is initially active   | Status = active           |
| 2    | Admin suspends the client           | Suspension action triggered |
| 3    | Verify client status changed        | Status = suspended        |
| 4    | Prepare API request with client credentials | Request prepared    |
| 5    | Send request to APIm                | Request submitted         |
| 6    | APIm validates credentials          | Validation passes         |
| 7    | APIm checks client status           | Status check fails        |
| 8    | Verify response code                | 403 Forbidden returned    |
| 9    | Verify error message                | "Client is suspended. Contact support" |
| 10   | Verify backend not contacted        | Request not forwarded     |

## Expected Outcome

* Suspended clients cannot make API requests
* Requests return 403 Forbidden
* Error message indicates suspension
* Message directs customer to contact support
* Backend not contacted for suspended clients
* Audit log records suspension and rejection

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-034

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-034                |
| Title         | Retired clients cannot be reactivated |
| Priority      | Low                            |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that once an integration client is retired/deleted, it cannot be reactivated and must be recreated if needed.

## Preconditions

1. Integration client exists and is active
2. Customer has permission to retire clients
3. Retirement is a permanent action

## Test Data

| Field              | Value               |
| ------------------ | ------------------- |
| Client Name        | Workday Integration |
| Original Status    | active              |
| After Retirement   | retired             |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client details          | Client details loaded     |
| 2    | Click "Retire Client" button         | Confirmation dialog shown |
| 3    | Review retirement warning           | Warning about permanent action |
| 4    | Click "Confirm Retire"              | Retirement processed      |
| 5    | Verify client status                | Status = retired          |
| 6    | Verify client removed from active list | Not shown in list      |
| 7    | Attempt to find reactivation option | No "Reactivate" button    |
| 8    | Search for "Reactivate" UI option   | Option not found          |
| 9    | Attempt API call to reactivate      | Request sent              |
| 10   | Verify API response                 | 400 Bad Request or 404    |
| 11   | Verify error message                | "Cannot reactivate retired client" |
| 12   | Verify customer can create new client | New client creation allowed |

## Expected Outcome

* Retired clients cannot be reactivated
* No UI option exists for reactivation
* API calls to reactivate are rejected
* Retired clients removed from active lists
* Customer must create new client if needed
* Retirement is permanent (design choice documented)

## Reviewer Comments

*To be completed during review.*

---

# EDGE CASE & EXPLORATORY TEST CASES

---

# TC-AB735316-035

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-035                |
| Title         | Empty API key in request |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that requests with empty or missing API key are properly rejected with appropriate error message.

## Preconditions

1. API endpoint is accessible
2. Request format is valid except for missing key

## Test Data

| Field              | Value      |
| ------------------ | ---------- |
| API Key Value      | (empty)    |
| Expected Status    | 400        |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare API request                 | Request prepared          |
| 2    | Leave API key field empty           | Key field blank           |
| 3    | Include valid signature             | Signature calculated      |
| 4    | Send request                       | Request submitted         |
| 5    | APIm validates request format       | Validation performed      |
| 6    | APIm checks for API key             | Key field check fails     |
| 7    | Verify response code                | 400 Bad Request returned  |
| 8    | Verify error message                | "API key is required"     |
| 9    | Prepare request without key header  | Key header omitted        |
| 10   | Send request                       | Request submitted         |
| 11   | Verify response code                | 400 Bad Request returned  |

## Expected Outcome

* Empty API keys rejected (400)
* Missing API key header rejected (400)
* Clear error message guides client
* Validation occurs early in request processing
* Backend not contacted for missing keys

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-036

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-036                |
| Title         | API credentials contain only URL-safe characters |
| Priority      | Low                            |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that API credentials are generated only with URL-safe characters, without special characters or spaces that could cause encoding issues.

## Preconditions

1. Credential generation system operational
2. Generation function tested with multiple client creations

## Test Data

| Field                 | Value               |
| --------------------- | ------------------- |
| Prohibited Special     | key@#$%^&*()        |
| Prohibited Spaces      | key with spaces     |
| Expected Characters   | [a-zA-Z0-9_-]      |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Create integration client           | Client creation triggered |
| 2    | Observe generated API key           | Key generated             |
| 3    | Inspect key characters              | Characters examined       |
| 4    | Verify no special characters        | No @#$%^&*() found        |
| 5    | Verify no spaces                    | No spaces found           |
| 6    | Verify only URL-safe characters     | Only [a-zA-Z0-9_-] found |
| 7    | Test generated key in URL encoding  | URL encoding test         |
| 8    | Verify no encoding needed           | Key remains unchanged     |
| 9    | Create multiple clients             | Multiple keys generated   |
| 10   | Inspect all keys                    | All keys URL-safe         |

## Expected Outcome

* API keys contain only URL-safe characters
* API secrets contain only URL-safe characters
* No special characters that require encoding
* No spaces in credentials
* Credentials work directly in URLs without encoding
* Generation enforces safe character set

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-037

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-037                |
| Title         | Customer registers 1000+ integration clients |
| Priority      | Low                            |
| Automatable   | No                             |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Requires manual creation of 1000+ clients or bulk data loading with verification. Automated UI testing would be extremely time-consuming. Manual verification of system handling and performance testing via API recommended.

## Description

Verify that the system properly handles customers with large numbers of integration clients (1000+), ensuring proper pagination and search performance.

## Preconditions

1. System has at least 1000 integration clients for test customer
2. Pagination and search functionality implemented
3. Database properly indexed for performance

## Test Data

| Field                  | Value     |
| ---------------------- | --------- |
| Total Clients Created  | 1000+     |
| Pagination Page Size   | 50        |
| Expected Pages         | 20+       |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Load integration clients list       | First page loads          |
| 2    | Verify pagination controls visible | Previous/Next buttons shown |
| 3    | Verify client count shown           | Shows "1 of 1000+" or similar |
| 4    | Load first page (50 clients)        | Page 1 loads quickly      |
| 5    | Navigate to page 10                 | Page 10 loads within 2 seconds |
| 6    | Navigate to page 20                 | Page 20 loads within 2 seconds |
| 7    | Search for specific client by name  | Search completes <2 sec   |
| 8    | Filter by status                    | Filtering works correctly  |
| 9    | Sort by creation date               | Sorting applies correctly  |

## Expected Outcome

* System handles 1000+ clients without errors
* Pagination loads pages quickly (<2 seconds per page)
* Search functionality works efficiently
* Filtering and sorting work with large datasets
* Database queries well-optimized with proper indexing
* UI remains responsive with large client counts

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-038

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-038                |
| Title         | Client name with 500 character string |
| Priority      | Low                            |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system enforces maximum length constraints on client names, rejecting names that exceed the defined limit.

## Preconditions

1. Client creation form is accessible
2. Validation logic is implemented

## Test Data

| Field                  | Value       |
| ---------------------- | ----------- |
| Client Name Length Max | 100         |
| Test String Length     | 500         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client creation form    | Form loaded               |
| 2    | Generate 500-character string       | String prepared           |
| 3    | Attempt to enter string in name field | Possible: UI cuts off or API rejects |
| 4    | Submit client creation form         | Form submitted            |
| 5    | Verify validation error             | Error message shown       |
| 6    | Verify error message                | "Client name cannot exceed 100 characters" |
| 7    | Verify client not created           | Creation blocked          |
| 8    | Enter 100-character name (valid)    | Valid name entered        |
| 9    | Submit form                        | Form submitted            |
| 10   | Verify client created               | Client created successfully |

## Expected Outcome

* 500-character name rejected (400)
* Clear error message indicates max length
* 100-character name accepted
* Validation enforced on both UI and API
* Database field size matches validation limit

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-039

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-039                |
| Title         | Client name with Unicode characters (emoji, Chinese, Arabic) |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system properly handles and stores Unicode characters including emoji, Chinese characters, and Arabic script in client names.

## Preconditions

1. Client creation form accessible
2. Database configured for UTF-8 encoding
3. Frontend supports Unicode input

## Test Data

| Field              | Value                     |
| ------------------ | ------------------------- |
| Name 1             | Интеграция 😊 العربية    |
| Name 2             | 中文 クライアント عميل      |
| Expected Encoding  | UTF-8                     |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client creation form    | Form loaded               |
| 2    | Enter Unicode name: "Интеграция 😊 العربية" | Name entered      |
| 3    | Submit client creation              | Form submitted            |
| 4    | Verify client created               | Client created successfully |
| 5    | Retrieve client details             | Details page loaded       |
| 6    | Verify name displayed correctly     | "Интеграция 😊 العربية" shown |
| 7    | Verify no encoding errors           | Characters render properly |
| 8    | Create client with Name 2           | "中文 クライアント عميل" entered |
| 9    | Submit form                        | Form submitted            |
| 10   | Verify second client created        | Second client created     |
| 11   | Verify name displays correctly      | "中文 クライアント عميل" shown |

## Expected Outcome

* Unicode characters accepted in client names
* Characters stored correctly in database (UTF-8)
* Characters displayed correctly in UI
* No encoding errors or character corruption
* International names fully supported
* Search and filtering work with Unicode names

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-040

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-040                |
| Title         | API product scope with special format (e.g., "api-product.v2-beta") |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system correctly parses and validates scopes with special formatting including version numbers and pre-release indicators.

## Preconditions

1. Scope "api-directory.v2-beta" is available in system
2. Integration client can be assigned this scope
3. Scope matching includes version parsing

## Test Data

| Field              | Value                    |
| ------------------ | ------------------------ |
| Scope              | api-directory.v2-beta    |
| Required Format    | api-{name}.{version}     |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate to client creation         | Form loaded               |
| 2    | Look for scope "api-directory.v2-beta" in dropdown | Scope listed    |
| 3    | Select scope "api-directory.v2-beta" | Scope selected           |
| 4    | Create client with this scope       | Client created           |
| 5    | Verify scope assigned correctly     | Scope shows api-directory.v2-beta |
| 6    | Make API request with this scope    | Request prepared         |
| 7    | Include scope in validation         | Scope sent to endpoint    |
| 8    | Verify scope parsing                | Version/beta parsing correct |
| 9    | Verify request routed correctly     | Backend receives request  |
| 10   | Verify scope validation passes      | Scope match succeeds      |

## Expected Outcome

* Scopes with dots and hyphens parsed correctly
* Version numbers handled properly
* Pre-release indicators recognized
* Scope matching works with complex names
* Request routed to correct backend
* Scope validation succeeds with versioned scopes

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-041

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-041                |
| Title         | Concurrent scope modifications on same client |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system handles concurrent modifications to a client's scopes correctly without conflicts or data loss.

## Preconditions

1. Integration client exists with scopes: [api-directory, api-incident]
2. Two concurrent requests can be simulated
3. Database supports transactions

## Test Data

| Field                | Value                |
| -------------------- | -------------------- |
| Initial Scopes       | [api-directory, api-incident] |
| Thread A Action      | Add api-analytics    |
| Thread B Action      | Remove api-incident  |
| Expected Final State | [api-directory, api-analytics] |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify client has current scopes    | Scopes verified           |
| 2    | Initiate Thread A (add scope)       | Request 1 prepared        |
| 3    | Initiate Thread B (remove scope)    | Request 2 prepared        |
| 4    | Submit both requests simultaneously | Both submitted at same time |
| 5    | Thread A adds api-analytics         | Request processing        |
| 6    | Thread B removes api-incident       | Request processing        |
| 7    | Monitor for race conditions         | Processing observed       |
| 8    | Verify final scope list             | Final state = [api-directory, api-analytics] |
| 9    | Verify both operations reflected    | Both add and remove applied |
| 10   | Check audit log for events          | Both events recorded      |
| 11   | Verify event order                  | Events show correct sequence |

## Expected Outcome

* Concurrent modifications handled correctly
* No data corruption or lost updates
* Final scope state includes both changes
* Audit log shows both events
* Database transactions prevent conflicts
* Race conditions do not cause inconsistencies

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-042

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-042                |
| Title         | Backend service unavailable during request |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system handles backend service unavailability gracefully, returning appropriate error to client without exposing internal issues.

## Preconditions

1. Backend Directory API service can be disabled
2. APIm is operational
3. Client has valid credentials

## Test Data

| Field                | Value                    |
| -------------------- | ------------------------ |
| Backend Status       | unavailable/down         |
| Expected Status Code | 503                      |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Disable backend Directory API       | Service stopped           |
| 2    | Prepare client API request          | Request prepared          |
| 3    | Send request to APIm                | Request submitted         |
| 4    | APIm validates credentials          | Validation passes         |
| 5    | APIm attempts to forward request    | Forwarding fails          |
| 6    | APIm detects backend unavailability | Service unavailability detected |
| 7    | Verify response code                | 503 Service Unavailable   |
| 8    | Verify error message                | "API service temporarily unavailable" |
| 9    | Verify message includes retry info  | "Please try again in 5 minutes" |
| 10   | Verify backend error not exposed    | No internal error details shown |
| 11   | Re-enable backend service           | Service restored          |
| 12   | Retry same request                  | Request resubmitted       |
| 13   | Verify request now succeeds         | 200 OK returned           |

## Expected Outcome

* Unavailable backend returns 503 gracefully
* Client receives friendly error message
* No internal error details exposed
* Suggestion to retry included in message
* Service recovery transparent to client
* Audit log records backend unavailability

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-043

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-043                |
| Title         | Rate limit quota reset at day boundary (UTC) |
| Priority      | Low                            |
| Automatable   | No                             |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Requires precise timing at UTC midnight or manual advancement of system clock. Difficult to automate in standard CI/CD pipeline. Manual testing or environment-specific job scheduling test recommended.

## Description

Verify that API quota resets occur at UTC midnight (not local timezone) and that customers regain quota after reset.

## Preconditions

1. Customer has Free tier with 1000 daily quota
2. Can approach or simulate UTC midnight
3. Quota tracking system operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Daily Quota            | 1000               |
| Test Time              | 23:59:59 UTC       |
| Reset Time             | 00:00:00 UTC       |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify customer quota               | Shows 1000 available      |
| 2    | Make 1000 API requests              | Requests submitted        |
| 3    | Verify quota exhausted              | Remaining = 0             |
| 4    | Attempt request at 23:59 UTC        | Request rejected (429)    |
| 5    | Wait for UTC midnight (00:00)       | Time advances             |
| 6    | Check quota after reset             | Quota reset to 1000       |
| 7    | Attempt request at 00:01 UTC        | Request accepted (200 OK) |
| 8    | Verify quota decreased              | Remaining = 999           |

## Expected Outcome

* Quota fully consumed (1000 requests)
* Requests rejected at quota limit (429)
* Quota resets at UTC midnight (not local time)
* New requests accepted after reset
* Quota counter reset to 1000

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-044

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-044                |
| Title         | Client attempts JWT claim injection to escalate scope |
| Priority      | Critical                      |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that JWT token tampering is detected and prevented, specifically when attackers attempt to escalate their scope claims to access unauthorized API products.

## Preconditions

1. Client A has scope [api-directory] only
2. Client B has scope [api-incident]
3. JWT tokens are used for client authentication
4. JWT signature verification implemented

## Test Data

| Field                      | Value                    |
| -------------------------- | ------------------------ |
| Client A Original JWT      | jwt_aaa_valid_xxxxx      |
| Client A Scope in JWT      | ["api-directory"]        |
| Attempted Modified Scope   | ["api-directory", "api-incident"] |
| JWT Algorithm              | HS256                    |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Client A obtains valid JWT          | JWT token issued         |
| 2    | Decode JWT (JWT structure known)    | Token decoded            |
| 3    | Modify scope claim                  | Scope changed to include api-incident |
| 4    | Attempt to resign token (no secret) | Resigning fails           |
| 5    | Submit modified JWT with old signature | Request submitted      |
| 6    | APIm verifies JWT signature         | Signature verification fails |
| 7    | Verify response code                | 401 Unauthorized returned |
| 8    | Verify error message                | "Invalid token signature" |
| 9    | Verify no scope escalation          | Escalation attempt blocked |
| 10   | Verify audit log                    | Tampering attempt logged |

## Expected Outcome

* Token modification detected via signature verification
* Tampered tokens rejected (401)
* Signature verification uses constant-time comparison
* No scope escalation possible
* Audit log records tampering attempt
* Client cannot access unauthorized scopes

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-045

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-045                |
| Title         | Request with future timestamp (clock skew) |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system detects and rejects requests with timestamps that are significantly in the future, preventing replay attacks from devices with incorrect clocks.

## Preconditions

1. APIm validates request timestamps
2. Client can generate custom timestamps
3. Clock skew tolerance is configured

## Test Data

| Field                        | Value        |
| ---------------------------- | ------------ |
| Current Time (UTC)           | 12:00:00     |
| Request Timestamp            | 12:05:00 (5 min future) |
| Tolerance Threshold          | 2 minutes    |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Note current UTC time               | Current time recorded     |
| 2    | Prepare API request                 | Request prepared          |
| 3    | Set request timestamp 5 minutes ahead | Future timestamp set     |
| 4    | Generate signature with timestamp   | Signature includes timestamp |
| 5    | Send request with future timestamp  | Request submitted         |
| 6    | APIm extracts timestamp from request | Timestamp extracted       |
| 7    | APIm compares with current time     | Future skew detected      |
| 8    | APIm checks against tolerance (2 min) | Exceeds tolerance       |
| 9    | Verify response code                | 400 Bad Request returned  |
| 10   | Verify error message                | "Request timestamp is too far in the future" |
| 11   | Send request with current timestamp | Request with valid time   |
| 12   | Verify request accepted             | 200 OK returned           |

## Expected Outcome

* Future timestamps outside tolerance rejected (400)
* Clear error message about timestamp issue
* Tolerance allows minor clock skew (1-2 minutes)
* Prevents replay attacks from misaligned clocks
* Audit log records timestamp violations

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-046

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-046                |
| Title         | Request with very old timestamp (replay attack prevention) |
| Priority      | Critical                      |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that old/expired timestamps are rejected, preventing replay attacks where old requests are resent.

## Preconditions

1. Valid API request with timestamp from yesterday
2. Request signature is still valid
3. Timestamp validation window is configured

## Test Data

| Field                   | Value              |
| ----------------------- | ------------------ |
| Original Request Time   | yesterday 12:00 UTC |
| Current Time            | today 12:00 UTC    |
| Time Elapsed            | 24 hours           |
| Validation Window       | 5 minutes          |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Capture valid API request from yesterday | Request recorded        |
| 2    | Wait until next day                 | Time advances 24 hours    |
| 3    | Attempt to replay old request       | Old request resent        |
| 4    | Old request has valid signature     | Signature still valid     |
| 5    | Send old request to APIm            | Request submitted         |
| 6    | APIm extracts timestamp             | Timestamp extracted (yesterday) |
| 7    | APIm compares with current time     | Old timestamp detected    |
| 8    | APIm checks against validation window | Outside 5-minute window |
| 9    | Verify response code                | 401 Unauthorized returned |
| 10   | Verify error message                | "Request timestamp expired" |
| 11   | Verify request not processed        | Backend not contacted     |

## Expected Outcome

* Replay attacks prevented via timestamp validation
* Old requests rejected (401)
* Clear error message about expiration
* Even with valid signature, old timestamps rejected
* Timestamp window enforced (5+ minutes)
* Audit log records replay attempt

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-047

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-047                |
| Title         | Simultaneous credential rotation and API calls |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that system state remains consistent when credential rotation occurs while API requests are in flight.

## Preconditions

1. Integration client exists with active credentials
2. Concurrent requests can be simulated
3. Credential rotation service operational

## Test Data

| Field              | Value              |
| ------------------ | ------------------ |
| Old Credentials    | key_old_xxxxx      |
| New Credentials    | key_new_yyyyy      |
| In-Flight Requests | 5                  |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Start 5 API requests with old key   | Requests in flight        |
| 2    | Requests start processing at APIm   | Processing initiated      |
| 3    | Trigger credential rotation         | Rotation request submitted |
| 4    | New credentials generated           | New key issued            |
| 5    | Old credentials marked revoked      | Status updated            |
| 6    | In-flight requests continue processing | Old requests complete   |
| 7    | Verify in-flight requests succeed   | All 5 complete with 200 OK |
| 8    | Verify no data loss                 | All responses received    |
| 9    | Attempt new requests with old key   | Rejected (401)            |
| 10   | Attempt new requests with new key   | Accepted (200 OK)         |

## Expected Outcome

* In-flight requests with old key complete successfully
* No requests fail due to rotation
* No data loss during credential transition
* New requests immediately use new key
* Old key rejected for new requests
* Grace period allows in-flight requests to complete

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-048

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-048                |
| Title         | API response with very large payload (10MB) |
| Priority      | Low                            |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system can handle and stream large API responses without timeout, truncation, or corruption.

## Preconditions

1. Customer requests large data export
2. Backend can generate 10MB response
3. Response streaming implemented

## Test Data

| Field                 | Value       |
| --------------------- | ----------- |
| Response Size         | 10 MB       |
| Expected Timeout      | None (streaming) |
| Data Format           | JSON        |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare request for large data      | Request prepared          |
| 2    | Send request to APIm                | Request submitted         |
| 3    | Backend generates 10MB response     | Response generated        |
| 4    | APIm streams response               | Streaming initiated       |
| 5    | Monitor response delivery           | Data flowing              |
| 6    | Verify no timeout occurs            | Response completes        |
| 7    | Verify complete response received   | 10MB received             |
| 8    | Verify response integrity           | Data uncorrupted          |
| 9    | Verify JSON parsing succeeds        | Valid JSON structure      |
| 10   | Calculate checksum                  | Integrity verified        |

## Expected Outcome

* Large responses (10MB) transmitted successfully
* No timeout during transmission
* Response streamed efficiently
* No data truncation
* Complete response received
* Content integrity maintained
* JSON structure valid throughout

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-049

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-049                |
| Title         | Customer account suspended mid-request |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that in-flight API requests complete successfully even if customer account is suspended during processing, but new requests are blocked.

## Preconditions

1. Customer account active with integration client
2. Long-running request can be simulated
3. Admin can suspend account mid-request

## Test Data

| Field              | Value          |
| ------------------ | -------------- |
| Request Duration   | 2-5 seconds    |
| Suspension Timing  | Mid-processing |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Start long-running API request      | Request submitted         |
| 2    | Request processing begins           | Processing in progress    |
| 3    | Admin suspends customer account     | Suspension action triggered |
| 4    | Account status = suspended          | Status updated            |
| 5    | In-flight request completes         | Request continues to completion |
| 6    | Verify in-flight request succeeds   | 200 OK response received  |
| 7    | Data from in-flight request received | Response data complete   |
| 8    | Attempt new request after suspension | Request submitted        |
| 9    | Verify new request rejected         | 403 Forbidden returned    |
| 10   | Verify error message                | "Account is suspended"    |

## Expected Outcome

* In-flight requests complete successfully before suspension takes effect
* New requests blocked after suspension
* Grace period allows current requests to finish
* No abrupt request termination
* Data integrity maintained
* Audit log records suspension and request outcomes

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-050

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-050                |
| Title         | Credentials avoid problematic Unicode whitespace |
| Priority      | Low                            |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that credentials are generated without problematic Unicode whitespace types (tabs, non-breaking spaces, zero-width spaces) that could cause hidden issues.

## Preconditions

1. Credential generation function tested
2. Multiple credentials generated
3. Binary analysis of credentials possible

## Test Data

| Field                    | Value           |
| ------------------------ | --------------- |
| Problematic Whitespace   | U+0009 (tab), U+00A0 (nbsp), U+200B (zero-width) |
| Expected Whitespace      | None (only alphanumeric and dash/underscore) |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Generate integration client         | Client created            |
| 2    | Extract API key                     | Key captured              |
| 3    | Extract API secret                  | Secret captured           |
| 4    | Scan for tab characters (U+0009)    | No tabs found             |
| 5    | Scan for nbsp (U+00A0)              | No nbsp found             |
| 6    | Scan for zero-width space (U+200B) | No zero-width space found |
| 7    | Verify only ASCII characters        | ASCII-only confirmed      |
| 8    | Verify alphanumeric + dash/underscore | Expected chars only     |
| 9    | Create 10 more clients              | Multiple credentials tested |
| 10   | Scan all 10 credentials             | All pass whitespace check |

## Expected Outcome

* No tab characters in credentials
* No non-breaking spaces
* No zero-width spaces or other hidden characters
* Only ASCII alphanumeric and safe symbols (dash, underscore)
* Consistent format across all generated credentials
* No hidden character issues

## Reviewer Comments

*To be completed during review.*

---

# INTEGRATION TEST CASES

---

# TC-AB735316-051

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-051                |
| Title         | Workday middleware onboarding complete workflow |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that a customer can complete the full Workday middleware onboarding workflow, including customer account setup, integration client creation, scope assignment, and middleware configuration.

## Preconditions

1. New customer account created
2. Workday instance available for integration
3. Integration client creation workflow operational
4. Middleware connection interface available

## Test Data

| Field                  | Value                |
| ---------------------- | -------------------- |
| Customer Name          | Acme Corp            |
| Client Name            | Workday Integration  |
| Assigned Scopes        | [api-directory, api-incident] |
| Middleware Version     | 2.5+                 |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | New customer completes signup       | Customer account created  |
| 2    | Customer navigates to Integration   | Integrations page loads   |
| 3    | Customer selects "Workday"          | Workday onboarding starts |
| 4    | Customer creates integration client | Client "Workday Integration" created |
| 5    | Customer selects scopes             | api-directory, api-incident selected |
| 6    | Credentials displayed once          | API key/secret shown     |
| 7    | Customer copies credentials         | Credentials copied       |
| 8    | Customer accesses Workday config    | Workday UI loads         |
| 9    | Customer enters API key in Workday  | Key entered in config    |
| 10   | Customer enters API secret          | Secret entered           |
| 11   | Customer tests connection           | Test request sent        |
| 12   | Connection verified successful      | "Connection verified" shown |
| 13   | Customer completes onboarding       | Onboarding flow finishes |
| 14   | Integration shows as active         | Status shows "Active"    |

## Expected Outcome

* Customer successfully onboards Workday integration
* Integration client created with correct scopes
* Credentials properly configured in Workday
* Connection test succeeds
* Middleware receives correct credentials
* Audit log records all onboarding steps
* Customer receives completion confirmation email

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-052

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-052                |
| Title         | Multiple backends receive correct product routing headers |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that requests are correctly routed to multiple backend services with proper product metadata headers.

## Preconditions

1. Three backend services operational:
   - Directory Backend: https://directory.backend.example.com
   - Incident Backend: https://incident.backend.example.com
   - Analytics Backend: https://analytics.backend.example.com
2. Client has scopes for all three products
3. Network monitoring available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Directory Backend      | https://directory.backend.example.com |
| Incident Backend       | https://incident.backend.example.com |
| Analytics Backend      | https://analytics.backend.example.com |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Send request to Directory API       | Request routed to Directory Backend |
| 2    | Verify X-API-Product header         | Header = "Directory APIs" |
| 3    | Verify request received             | Directory Backend logs request |
| 4    | Send request to Incident API        | Request routed to Incident Backend |
| 5    | Verify X-API-Product header         | Header = "Incident APIs" |
| 6    | Verify request received             | Incident Backend logs request |
| 7    | Send request to Analytics API       | Request routed to Analytics Backend |
| 8    | Verify X-API-Product header         | Header = "Analytics APIs" |
| 9    | Verify request received             | Analytics Backend logs request |

## Expected Outcome

* All three backends receive correctly routed requests
* Product headers correctly identify each API
* Each backend receives appropriate X-API-Product value
* Audit log shows correct routing for all products
* No cross-product routing errors

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-053

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-053                |
| Title         | Auth Service provides scope list and supports updates |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system fetches and caches scope lists from Auth Service with TTL, and updates cache when new scopes are published.

## Preconditions

1. Auth Service operational and accessible
2. /scopes endpoint implemented
3. Scopes endpoint returns TTL value
4. Cache layer configured

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Scopes Endpoint        | /auth/v1/scopes    |
| TTL Value              | 3600 (1 hour)      |
| Initial Scopes Count   | 5                  |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Call Auth Service /scopes endpoint  | Scopes list returned      |
| 2    | Verify scopes returned              | 5 scopes in response      |
| 3    | Verify TTL value included           | TTL = 3600 seconds        |
| 4    | Verify cache populated              | Scopes cached             |
| 5    | Publish new scope to Auth Service   | New scope added           |
| 6    | Call /scopes before TTL expires     | Cache returns old list    |
| 7    | Verify old list returned            | Old 5 scopes returned     |
| 8    | Wait for TTL to expire              | Wait 3600+ seconds        |
| 9    | Call /scopes after TTL              | Fresh list fetched        |
| 10   | Verify updated list                 | New scope now included    |

## Expected Outcome

* Scope list successfully fetched from Auth Service
* TTL properly implemented and honored
* Cache populates with correct scopes
* Cache refreshes after TTL expiration
* New scopes appear after refresh
* Integration with Auth Service working correctly

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-054

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-054                |
| Title         | New API product publication updates client scopes |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that when a new API product is published, it becomes available for assignment to integration clients.

## Preconditions

1. New API product "api-reporting" not yet published
2. Product publication system operational
3. Scope cache TTL near expiration (or manual refresh available)

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| New Product            | api-reporting      |
| Current Available      | [api-directory, api-incident] |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify api-reporting not available  | Product not in dropdown   |
| 2    | Admin publishes api-reporting       | Product published         |
| 3    | Trigger scope cache refresh         | Cache refresh initiated   |
| 4    | Navigate to client scope selector   | Scope list loads          |
| 5    | Verify api-reporting now available  | Product appears in dropdown |
| 6    | Add api-reporting to client         | Scope selected            |
| 7    | Save changes                       | Changes submitted         |
| 8    | Verify scope assignment successful  | api-reporting added       |
| 9    | Make API call to api-reporting      | Request processed         |
| 10   | Verify request succeeds             | 200 OK returned           |

## Expected Outcome

* New product becomes available after publication
* Scope cache updates to include new product
* Clients can be assigned new scopes
* API calls to new product endpoints work correctly
* Integration timeline: product published → cache updated → scopes available

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-055

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-055                |
| Title         | Subscription tier change updates backend routing |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that when a customer upgrades subscription tier, subsequent API requests are routed to the new tier's backend URL.

## Preconditions

1. Customer has Free tier subscription
2. Free tier backend: https://backend-free.example.com
3. Premium tier backend: https://backend-premium.example.com
4. Subscription management system operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Initial Tier           | Free               |
| Upgraded Tier          | Premium            |
| Free Backend URL       | https://backend-free.example.com |
| Premium Backend URL    | https://backend-premium.example.com |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify customer tier is Free        | Tier = Free confirmed     |
| 2    | Make API request                    | Request sent              |
| 3    | Verify routed to Free backend       | Free backend receives request |
| 4    | Admin upgrades customer to Premium  | Tier change submitted     |
| 5    | Verify customer tier updated        | Tier = Premium confirmed  |
| 6    | Make API request                    | Request sent              |
| 7    | Verify routed to Premium backend    | Premium backend receives request |
| 8    | Verify different backend used       | URL changed from Free to Premium |
| 9    | Verify no service interruption      | All requests succeed      |

## Expected Outcome

* Tier change immediately affects backend routing
* Requests routed to correct backend after upgrade
* Premium tier features available after change
* No data loss during tier transition
* Rate limits per new tier enforced
* Audit log records tier change and routing update

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-056

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-056                |
| Title         | Rate limit enforcement per subscription tier |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that rate limits are correctly enforced per subscription tier, with Free tier at 100 req/sec and Premium at 1000 req/sec.

## Preconditions

1. Free tier customer with API client
2. Premium tier customer with API client
3. Load generation capability available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Free Tier Limit        | 100 req/sec        |
| Premium Tier Limit     | 1000 req/sec       |
| Test Duration          | 10 seconds         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Generate 100 requests/sec as Free tier | Load sent              |
| 2    | Monitor response codes              | All 200 OK responses      |
| 3    | Generate 101 requests/sec as Free tier | Overload sent           |
| 4    | Monitor response codes              | 429 Too Many Requests    |
| 5    | Generate 1000 requests/sec as Premium | Premium load sent        |
| 6    | Monitor response codes              | All 200 OK responses      |
| 7    | Generate 1001 requests/sec as Premium | Premium overload sent    |
| 8    | Monitor response codes              | 429 Too Many Requests    |

## Expected Outcome

* Free tier rate limit enforced at 100 req/sec
* Requests above limit rejected (429)
* Premium tier rate limit enforced at 1000 req/sec
* Premium tier can handle higher load
* Rate limit headers present in responses
* Audit log records rate limit violations

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-057

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-057                |
| Title         | Backend receives complete customer context |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that backend services receive complete customer context including customer ID, subscription tier, and scopes in forwarded requests.

## Preconditions

1. Integration client configured
2. Backend service with request logging
3. Network monitoring available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Customer ID            | cust_12345         |
| Subscription Tier      | Premium            |
| Assigned Scopes        | [api-directory, api-incident] |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare API request                 | Request prepared          |
| 2    | Include valid credentials           | Credentials included      |
| 3    | Send request to APIm                | Request submitted         |
| 4    | APIm forwards request to backend    | Backend receives request  |
| 5    | Inspect forwarded headers           | Headers examined          |
| 6    | Verify X-Customer-ID header         | Header = cust_12345      |
| 7    | Verify X-Subscription-Tier header   | Header = Premium          |
| 8    | Verify X-Assigned-Scopes header     | Header = [api-directory, api-incident] |
| 9    | Verify backend processes context    | Backend uses context      |
| 10   | Backend returns data for tier       | Premium data returned     |

## Expected Outcome

* Customer context headers included in forwarded requests
* Backend receives customer ID, tier, and scopes
* Backend can apply tier-specific logic
* Backend delivers tier-appropriate responses
* Context available for backend logging and analytics

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-058

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-058                |
| Title         | Audit events logged in central system |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that all integration client events are logged to central audit system with complete event details.

## Preconditions

1. Integration client created with scopes
2. Audit log system operational
3. Central log aggregation configured

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Client Name            | Workday Integration |
| Event Types            | CLIENT_CREATED, SCOPE_ADDED, SCOPE_REMOVED, CREDENTIAL_ROTATED |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Create integration client           | Client created            |
| 2    | Query central audit system          | Events found              |
| 3    | Verify CLIENT_CREATED event logged  | Event present with timestamp |
| 4    | Add scope to client                 | Scope added               |
| 5    | Query central audit system          | SCOPE_ADDED event found   |
| 6    | Remove scope from client            | Scope removed             |
| 7    | Query central audit system          | SCOPE_REMOVED event found |
| 8    | Rotate client credentials           | Credentials rotated       |
| 9    | Query central audit system          | CREDENTIAL_ROTATED event found |
| 10   | Verify all events have timestamps   | Timestamps present        |
| 11   | Verify actor/user identified        | User/admin ID logged      |

## Expected Outcome

* All client events logged to central system
* Events include timestamps and actor information
* Event details logged (before/after values)
* Events accessible for compliance and monitoring
* Audit trail immutable and tamper-evident
* Logging adds minimal latency to operations

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-059

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-059                |
| Title         | Email notification sent on credential rotation |
| Priority      | Medium                         |
| Automatable   | No                             |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Email delivery verification requires access to email system or mailbox. Manual verification recommended by checking customer email or email service logs.

## Description

Verify that customer receives email notification when integration client credentials are rotated.

## Preconditions

1. Integration client exists with active credentials
2. Customer email address configured
3. Email system operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Customer Email         | customer@example.com |
| Rotation Event         | Credential rotation |
| Expected Email         | Rotation notification |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Rotate integration client credentials | Rotation initiated      |
| 2    | Verify new credentials generated    | New key/secret issued    |
| 3    | Monitor email inbox                 | Email received           |
| 4    | Verify email from system            | From: system@example.com |
| 5    | Verify email subject                | Subject includes "Credentials Rotated" |
| 6    | Verify email content                | Details about rotation included |
| 7    | Verify timestamp in email           | Timestamp matches rotation time |
| 8    | Verify no secrets in email          | API secret not included in email |
| 9    | Verify action items                 | Email includes next steps |

## Expected Outcome

* Customer receives rotation notification email
* Email sent within 1 minute of rotation
* Email includes event details but not secrets
* Email provides next steps for updating client
* Email sourced from trusted system address
* Notification aids customer awareness of changes

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-060

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-060                |
| Title         | Onboarding email sent with setup instructions |
| Priority      | Medium                         |
| Automatable   | No                             |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Email delivery and content verification requires email system access. Manual verification of email content and delivery recommended.

## Description

Verify that new customers receive onboarding email with setup instructions when integration client is created.

## Preconditions

1. New integration client created
2. Customer email configured
3. Email system operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Customer Email         | newcustomer@example.com |
| Email Type             | Onboarding instructions |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Create new integration client       | Client created            |
| 2    | Monitor email inbox                 | Email received            |
| 3    | Verify email source                 | From: system@example.com  |
| 4    | Verify email subject                | Subject: "Integration Client Created" |
| 5    | Verify client name in email         | Client name mentioned     |
| 6    | Verify setup instructions included  | Step-by-step instructions |
| 7    | Verify documentation link           | Link to developer docs    |
| 8    | Verify support contact included     | Support email/phone provided |
| 9    | Verify no secrets exposed           | Credentials not in email  |
| 10   | Verify clear call-to-action         | Next steps clearly outlined |

## Expected Outcome

* Onboarding email sent to new customers
* Email includes setup instructions
* Email includes required information and links
* No sensitive credentials in email body
* Customer receives guidance on next steps
* Support contact information provided

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-061

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-061                |
| Title         | Admin dashboard shows client metrics |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that admin dashboard displays metrics about integration clients and their usage.

## Preconditions

1. Admin user logged in
2. Dashboard page accessible
3. Metrics collection operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Metric 1               | Total Clients      |
| Metric 2               | Active Clients     |
| Metric 3               | Requests Last 24h  |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Login as admin user                 | Admin logged in           |
| 2    | Navigate to dashboard               | Dashboard page loads      |
| 3    | Locate client metrics section       | Metrics visible           |
| 4    | Verify total clients count          | Number displayed          |
| 5    | Verify active clients count         | Number displayed          |
| 6    | Verify requests last 24h            | Count displayed           |
| 7    | Verify metrics are current          | Metrics recently updated  |
| 8    | Verify no sensitive data exposed    | Only aggregated metrics   |
| 9    | Click on metrics for detail         | Drill-down works          |

## Expected Outcome

* Admin dashboard displays client metrics
* Key metrics visible: total, active, requests
* Metrics updated regularly
* Sensitive data not exposed in dashboard
* Admin can monitor system health via metrics

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-062

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-062                |
| Title         | Billing system receives and records tier metrics |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that billing system receives accurate metrics about customer tier usage for billing purposes.

## Preconditions

1. Customer with Free tier makes 500 API requests
2. Customer with Premium tier makes 5000 API requests
3. Billing system integration operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Free Customer Requests | 500                |
| Premium Customer Requests | 5000           |
| Billing Period         | Daily              |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Free tier customer makes 500 requests | Requests processed      |
| 2    | Premium tier customer makes 5000 requests | Requests processed   |
| 3    | Query billing system metrics        | Metrics recorded         |
| 4    | Verify Free tier usage logged       | 500 requests recorded    |
| 5    | Verify Premium tier usage logged    | 5000 requests recorded   |
| 6    | Verify tier correctly identified    | Tier labels correct      |
| 7    | Verify timestamp logged             | Time recorded            |
| 8    | Generate billing report             | Report generated         |
| 9    | Verify usage accuracy in report     | Metrics match actual usage |

## Expected Outcome

* Billing system receives accurate usage metrics
* Tier information correctly recorded
* Request counts accurate per tier
* Billing data available for invoice generation
* Usage data supports tier upgrade/downgrade

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-063

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-063                |
| Title         | Support team can reset customer credentials |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that support team can rotate (reset) credentials for customer's integration client upon customer request.

## Preconditions

1. Support user account exists with appropriate permissions
2. Customer has integration client with active credentials
3. Support dashboard accessible

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| User Role              | Support Lead       |
| Action                 | Rotate Credentials |
| Expected Result        | New credentials issued |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Support user logs in                | Support user logged in    |
| 2    | Search for customer                 | Customer found            |
| 3    | Locate customer's client            | Client visible            |
| 4    | Click "Reset Credentials" (support view) | Confirmation shown   |
| 5    | Support enters reason for reset     | Reason recorded           |
| 6    | Confirm credential reset            | Reset initiated           |
| 7    | Verify new credentials generated    | New key/secret issued     |
| 8    | Support provides new credentials    | Credentials available for customer |
| 9    | Verify old credentials revoked      | Old credentials no longer work |
| 10   | Verify audit log entry              | Reset logged by support user |

## Expected Outcome

* Support can reset customer credentials
* New credentials generated successfully
* Old credentials immediately revoked
* Reason for reset recorded in audit log
* Support action audited and tracked
* Customer can retrieve new credentials

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-064

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-064                |
| Title         | Third-party monitoring collects health metrics |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that third-party monitoring systems can collect health and performance metrics from the integration system.

## Preconditions

1. Monitoring system configured with API access
2. Metrics endpoint (/metrics) accessible
3. Integration system operational

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Metrics Endpoint       | /metrics           |
| Expected Metrics       | active_clients, failed_requests, avg_latency |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Call /metrics endpoint              | Metrics endpoint responds |
| 2    | Verify response format              | Prometheus format used    |
| 3    | Verify active_clients metric        | Metric present            |
| 4    | Verify failed_requests metric       | Metric present            |
| 5    | Verify avg_latency metric           | Metric present            |
| 6    | Verify metric values are current    | Recently updated values   |
| 7    | Monitoring system scrapes metrics   | Scrape succeeds           |
| 8    | Metrics stored in monitoring system | Data persisted            |
| 9    | Historical trends available         | Time-series data available |

## Expected Outcome

* Metrics endpoint operational
* Health metrics available for collection
* Monitoring system can scrape metrics successfully
* Historical metrics retained for trend analysis
* Alerts can be configured based on metrics

## Reviewer Comments

*To be completed during review.*

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-AB735316-065

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-065                |
| Title         | API request latency meets SLA (p99 < 200ms) |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that API request latency meets the SLA requirement with 99th percentile latency under 200ms.

## Preconditions

1. Integration system fully operational
2. Load generation tool (JMeter) available
3. Monitoring and metrics collection configured

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Test Duration          | 10 minutes         |
| Request Rate           | 100 requests/sec   |
| SLA Threshold (p99)    | 200ms              |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Configure JMeter for 100 req/sec   | Load test configured      |
| 2    | Run load test for 10 minutes        | Test executing            |
| 3    | Generate 60000 requests             | Requests processed        |
| 4    | Collect latency metrics             | Latency data captured     |
| 5    | Calculate p50 latency               | Median latency computed   |
| 6    | Calculate p95 latency               | 95th percentile computed  |
| 7    | Calculate p99 latency               | 99th percentile computed  |
| 8    | Verify p99 < 200ms                  | SLA met                   |
| 9    | Review error rate                   | Error rate < 1%           |

## Expected Outcome

* 99th percentile latency under 200ms
* Median latency under 100ms
* Error rate below 1%
* SLA consistently met throughout test
* Performance sustainable under load
* No degradation over time

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-066

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-066                |
| Title         | Scope validation overhead < 5ms |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that scope validation adds minimal overhead, with validation latency under 5ms.

## Preconditions

1. APIm scope validation layer operational
2. Requests with various scope combinations available
3. Latency monitoring enabled

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Validation Latency Target | < 5ms            |
| Test Requests          | 10000              |
| Scope Complexity       | 1-10 scopes per request |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Generate 10000 requests             | Requests prepared         |
| 2    | Include various scope counts        | 1-10 scopes per request   |
| 3    | Measure scope validation time       | Timing captured           |
| 4    | Extract validation latency          | Time extracted from logs  |
| 5    | Calculate mean validation latency   | Mean < 5ms                |
| 6    | Calculate p99 validation latency    | p99 < 5ms                 |
| 7    | Verify consistent performance      | No degradation             |
| 8    | Verify cache helps performance     | Cached lookups fast       |

## Expected Outcome

* Scope validation latency < 5ms average
* 99th percentile < 5ms
* Performance consistent across request types
* Caching effective for scope lookups
* Minimal impact on overall latency

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-067

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-067                |
| Title         | Credential validation performance < 10ms |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that credential validation (key lookup, signature verification) adds minimal overhead under 10ms.

## Preconditions

1. Credential validation layer operational
2. Credentials database accessible
3. Latency monitoring configured

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Validation Latency Target | < 10ms           |
| Test Requests          | 10000              |
| Credential Types       | Valid, expired, revoked |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Generate 10000 requests             | Requests prepared         |
| 2    | Vary credential types tested        | Valid, expired, revoked   |
| 3    | Measure credential validation time  | Timing captured           |
| 4    | Calculate mean validation latency   | Mean < 10ms               |
| 5    | Calculate p99 validation latency    | p99 < 10ms                |
| 6    | Verify database query performance   | Queries fast              |
| 7    | Verify caching effective            | Frequently used creds cached |
| 8    | Verify signature verification fast  | HMAC calculation fast     |

## Expected Outcome

* Credential validation latency < 10ms average
* 99th percentile < 10ms
* Database queries efficient
* Caching effective for popular credentials
* Signature verification fast

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-068

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-068                |
| Title         | 100 concurrent clients load test |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system can handle 100 concurrent clients making simultaneous requests without errors or performance degradation.

## Preconditions

1. JMeter configured for 100 concurrent threads
2. System fully operational
3. Resource monitoring available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Concurrent Clients     | 100                |
| Duration               | 5 minutes          |
| Requests Per Client    | 50                 |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Configure JMeter: 100 threads       | Load test setup complete  |
| 2    | Start 100 concurrent clients        | Clients connecting        |
| 3    | Each client makes 50 requests       | 5000 total requests       |
| 4    | Monitor error rate                  | Error rate monitored      |
| 5    | Monitor response times              | Latencies captured        |
| 6    | Monitor system resources            | CPU, memory, connections  |
| 7    | Verify no errors or timeouts        | 0% error rate             |
| 8    | Verify response times acceptable    | Latencies within SLA      |
| 9    | Verify system resources stable      | No resource exhaustion    |

## Expected Outcome

* All 100 concurrent clients connect successfully
* All 5000 requests processed
* Error rate 0%
* Response times within SLA
* No resource exhaustion
* System stable under load

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-069

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-069                |
| Title         | Database query performance at scale |
| Priority      | High                           |
| Automatable   | No                             |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Requires database setup with scaled test data (100k customers, 1M clients, 5M credentials) and direct database access for performance testing. Typically performed in staging environment, not production-like environment accessible via API.

## Description

Verify that database query performance remains acceptable with large datasets: 100,000 customers, 1,000,000 clients, 5,000,000 credentials.

## Preconditions

1. Test database populated with scale data
2. Database profiling tools available
3. Query analyzer accessible

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Customers              | 100,000            |
| Integration Clients    | 1,000,000          |
| Credentials            | 5,000,000          |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Load scaled test data into database | Data populated            |
| 2    | Query: find client by ID            | Query executes < 10ms     |
| 3    | Query: list clients for customer    | Query executes < 100ms    |
| 4    | Query: find credential              | Query executes < 5ms      |
| 5    | Query: list all credentials         | Query executes < 500ms    |
| 6    | Query: find active clients          | Query executes < 200ms    |
| 7    | Verify index effectiveness          | Indexes used by queries   |
| 8    | Analyze query execution plans       | Plans efficient           |

## Expected Outcome

* All queries perform efficiently with scale data
* Index strategy effective
* No N+1 query problems
* Query plans optimized
* Performance acceptable at 100k, 1M, 5M scale

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-070

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-070                |
| Title         | Memory usage under sustained 1000 req/sec load |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that memory usage remains stable under sustained load of 1000 requests/second for 1 hour, without memory leaks.

## Preconditions

1. System under test fully operational
2. Load generation at 1000 req/sec achievable
3. Memory profiling enabled

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Request Rate           | 1000 req/sec       |
| Test Duration          | 60 minutes         |
| Total Requests         | 3,600,000          |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Record baseline memory usage        | Baseline captured         |
| 2    | Generate 1000 req/sec load          | Load sustained            |
| 3    | Monitor memory usage continuously   | Memory tracked            |
| 4    | Run test for 60 minutes             | Full duration completed   |
| 5    | Check memory at 10 min mark         | Memory stable             |
| 6    | Check memory at 30 min mark         | Memory stable             |
| 7    | Check memory at 60 min mark         | Memory stable             |
| 8    | Calculate memory growth rate        | Growth < 1% per hour      |
| 9    | Check for memory leaks              | No leaks detected         |

## Expected Outcome

* Memory usage stable throughout test
* No significant growth over 60 minutes
* No memory leaks detected
* Garbage collection effective
* System sustainable under sustained load

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-071

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-071                |
| Title         | Concurrent credential rotation handling |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that the system handles concurrent credential rotation requests from multiple clients without conflicts or errors.

## Preconditions

1. 10 integration clients exist
2. Load generation tool available
3. Concurrency monitoring enabled

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Concurrent Rotations   | 10                 |
| Total Rotations        | 100                |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare 10 clients for rotation     | Clients ready             |
| 2    | Initiate 10 concurrent rotations    | All rotation requests sent |
| 3    | Monitor for race conditions         | No races detected         |
| 4    | Verify all 10 rotations succeed     | All successful            |
| 5    | Verify new credentials unique       | Each client has unique new creds |
| 6    | Verify old credentials revoked      | All old creds revoked     |
| 7    | Repeat rotation cycle 10 times      | Total 100 rotations       |
| 8    | Verify no duplicates created        | All credentials unique    |

## Expected Outcome

* Concurrent rotations handled correctly
* All rotations succeed
* No race conditions
* Unique credentials generated consistently
* System state remains consistent

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-072

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-072                |
| Title         | Pagination performance with 10,000 clients |
| Priority      | Medium                         |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that pagination performance remains acceptable when listing 10,000 clients, with each page loading in under 1 second.

## Preconditions

1. Test customer with 10,000 clients
2. Pagination configured (50 items per page = 200 pages)
3. Performance monitoring active

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Total Clients          | 10,000             |
| Page Size              | 50                 |
| Total Pages            | 200                |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Load first page (page 1)            | Page loads < 1 second     |
| 2    | Load middle page (page 100)         | Page loads < 1 second     |
| 3    | Load last page (page 200)           | Page loads < 1 second     |
| 4    | Request page with search filter     | Results load < 1 second   |
| 5    | Request page with sort applied      | Results load < 1 second   |
| 6    | Navigate through 10 consecutive pages | Each < 1 second          |
| 7    | Verify accuracy of pagination       | Correct clients on each page |
| 8    | Verify no missing data              | All 10,000 clients accessible |

## Expected Outcome

* All pages load under 1 second
* Search and filtering performant
* Pagination accurate
* All 10,000 clients accessible
* Database queries optimized for pagination

## Reviewer Comments

*To be completed during review.*

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-AB735316-073

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-073                |
| Title         | HMAC-SHA256 signature validated with constant-time comparison |
| Priority      | Critical                      |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that HMAC-SHA256 signatures are validated using constant-time comparison to prevent timing attacks.

## Preconditions

1. Integration client with valid credentials
2. Signature generation capability available
3. Timing measurement tools available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Algorithm              | HMAC-SHA256        |
| Secret Length          | 64+ bytes          |
| Comparison Method      | Constant-time      |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Generate valid HMAC-SHA256 signature | Signature created        |
| 2    | Submit request with valid signature | Request accepted (200 OK) |
| 3    | Generate invalid signature (1-bit flip) | Modified signature     |
| 4    | Submit request with invalid signature | Request rejected (401)  |
| 5    | Measure validation time for valid sig | Time recorded           |
| 6    | Measure validation time for invalid sig | Time recorded           |
| 7    | Calculate time difference           | Difference calculated   |
| 8    | Verify constant-time comparison     | No timing difference    |
| 9    | Test with multiple 1-bit variations | All timing equal        |

## Expected Outcome

* Signature validation uses constant-time comparison
* Timing independent of signature validity
* Timing attacks prevented
* Valid signatures accepted consistently
* Invalid signatures rejected consistently

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-074

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-074                |
| Title         | Secrets never logged in plain text |
| Priority      | Critical                      |
| Automatable   | No                             |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Requires log inspection across multiple systems (application logs, database logs, audit logs). Manual inspection or log analysis tools needed to verify no secrets logged.

## Description

Verify that API secrets, authentication tokens, and sensitive credentials are never logged in plain text, only masked versions are logged.

## Preconditions

1. Application logging configured
2. Access to all log files (app, system, database, audit)
3. Log analysis tools available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Secrets Type           | API keys, secrets, tokens |
| Logging Check          | All log sources    |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Create integration client           | Client created            |
| 2    | Capture API key and secret          | Credentials obtained      |
| 3    | Make API request with credentials   | Request sent              |
| 4    | Examine application logs            | No plain-text secrets     |
| 5    | Examine audit logs                  | Masked or hashed values   |
| 6    | Examine debug logs                  | No plain-text secrets     |
| 7    | Examine error logs                  | No sensitive data         |
| 8    | Search for API key value            | Not found in any logs     |
| 9    | Search for API secret value         | Not found in any logs     |
| 10   | Verify masked format used           | Values like "key_****" or hashed |

## Expected Outcome

* No plain-text secrets in application logs
* No plain-text secrets in system logs
* Secrets masked or hashed in audit logs
* All logging safe for log aggregation
* Compliance with security standards

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-075

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-075                |
| Title         | WCAG 2.1 Level AA accessibility compliance |
| Priority      | Medium                         |
| Automatable   | No                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Reason

Accessibility testing requires manual assessment with screen readers and keyboard navigation, plus automated scanning tools. Cannot be fully automated without specialized accessibility testing frameworks.

## Description

Verify that the integration client management UI meets WCAG 2.1 Level AA accessibility standards.

## Preconditions

1. Integration client UI accessible
2. Screen reader available (NVDA, JAWS)
3. Automated accessibility scanning tool available
4. Browser zoom and contrast settings available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Accessibility Standard | WCAG 2.1 Level AA  |
| Screen Reader          | NVDA or JAWS       |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Navigate UI with keyboard only      | All features accessible  |
| 2    | Verify tab order logical            | Tab order makes sense    |
| 3    | Test with screen reader             | Content announced clearly |
| 4    | Verify form labels associated       | Labels linked to inputs  |
| 5    | Test color contrast                 | Contrast >= 4.5:1 for text |
| 6    | Test with 200% zoom                 | Content readable at 200% |
| 7    | Verify focus indicators visible     | Focus clear and visible  |
| 8    | Run automated accessibility scan    | No critical issues found |
| 9    | Test error messages announced       | Errors announced to screen reader |

## Expected Outcome

* Full keyboard navigation supported
* Screen reader compatibility confirmed
* Color contrast meets AA standards
* Zoom up to 200% functional
* All interactive elements accessible
* WCAG 2.1 Level AA compliance verified

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-076

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-076                |
| Title         | Internal API protection (customer credentials denied) |
| Priority      | Critical                      |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

Verify that customer-provided API credentials cannot be used to access internal APIs, only internal service credentials work.

## Preconditions

1. Customer API key and secret available
2. Internal API endpoint exists
3. Internal service credential available

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Customer API Key       | key_customer_xxxxx |
| Internal Endpoint      | /admin/internal    |
| Expected Status        | 403 Forbidden      |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Prepare request to internal API     | Request prepared          |
| 2    | Include customer API key            | Key included              |
| 3    | Generate signature                  | Signature calculated      |
| 4    | Send request with customer key      | Request submitted         |
| 5    | System checks if internal API       | Internal API detected     |
| 6    | System checks credential type       | Customer credential identified |
| 7    | Verify response code                | 403 Forbidden returned    |
| 8    | Verify error message                | "Not authorized for this operation" |
| 9    | Attempt with internal service credential | Request prepared      |
| 10   | Send with internal credential       | Request submitted         |
| 11   | Verify internal request accepted    | 200 OK returned           |

## Expected Outcome

* Customer credentials cannot access internal APIs
* Internal APIs require internal credentials
* Clear separation of customer vs internal access
* Audit log records unauthorized attempt
* Internal access audit logged separately

## Reviewer Comments

*To be completed during review.*

---

# END-TO-END TEST CASES

---

# TC-AB735316-077

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-077                |
| Title         | Complete Workday integration workflow |
| Priority      | Critical                      |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

End-to-end test of complete Workday integration workflow: customer signup → client creation → scope selection → credential configuration → Workday connection → data sync → dashboard monitoring → 90-day rotation alert → credential rotation → continued sync.

## Preconditions

1. Customer account can be created
2. Integration client creation available
3. Workday instance available for testing
4. Email system operational
5. Dashboard accessible
6. 90-day rotation alert system configured

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Customer               | E2E Test Customer  |
| Client Name            | Workday Sync       |
| Scopes                 | [api-directory]    |
| Expected Test Duration | <5 minutes         |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer signs up                   | Account created           |
| 2    | Navigate to integrations            | Integrations page loads   |
| 3    | Create Workday client               | Client created            |
| 4    | Select api-directory scope          | Scope selected            |
| 5    | Receive credentials                 | Key/secret displayed once |
| 6    | Configure Workday with credentials  | Workday configured        |
| 7    | Test Workday connection             | Connection test succeeds  |
| 8    | Workday syncs directory data        | Sync initiated            |
| 9    | View integration dashboard          | Dashboard displays data   |
| 10   | Monitor API calls                   | 100+ calls counted        |
| 11   | Wait 90 days (simulated)            | Rotation alert triggered  |
| 12   | Receive rotation alert email        | Email arrives             |
| 13   | Rotate credentials                  | New key/secret generated  |
| 14   | Update Workday with new credentials | New creds configured      |
| 15   | Verify continued sync               | Sync continues with new creds |

## Expected Outcome

* Complete workflow succeeds end-to-end
* All steps complete successfully (<5 min)
* 100% sync success rate
* No credential-related errors
* Rotation alert triggers correctly
* Post-rotation functionality maintained
* Customer can monitor and manage integration

## Reviewer Comments

*To be completed during review.*

---

# TC-AB735316-078

## Metadata

| Field         | Value                          |
| ------------- | ------------------------------ |
| Test Case ID  | TC-AB735316-078                |
| Title         | Complete subscription upgrade workflow |
| Priority      | High                           |
| Automatable   | Yes                            |
| Status        | Draft                          |
| Review Status | Pending                        |
| Reviewer      |                                |
| Review Date   |                                |

## Description

End-to-end test of subscription upgrade workflow: Free tier customer with limited scopes → upgrade to Premium → receive additional scopes → access new APIs → downgrade back to Free → scopes automatically removed → access denied to former Premium features.

## Preconditions

1. Customer starts with Free tier
2. Free tier includes api-directory scope only
3. Premium tier includes api-incident and api-analytics
4. Upgrade functionality available
5. Downgrade functionality available
6. Backend tier-specific logic implemented

## Test Data

| Field                  | Value              |
| ---------------------- | ------------------ |
| Initial Tier           | Free               |
| Upgraded Tier          | Premium            |
| Downgrade Tier         | Free               |

## Test Steps

| Step | Action                              | Expected Result           |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Verify customer tier: Free          | Tier = Free confirmed     |
| 2    | Verify scopes: [api-directory]      | Directory scope only      |
| 3    | Attempt incident API call           | Rejected (403)            |
| 4    | Initiate upgrade to Premium         | Upgrade initiated         |
| 5    | Verify tier: Premium                | Tier = Premium confirmed  |
| 6    | Verify scopes: [api-directory, api-incident, api-analytics] | All scopes assigned |
| 7    | Attempt incident API call           | Succeeds (200 OK)         |
| 8    | Verify Premium features available   | Features enabled          |
| 9    | Verify backend tier: Premium        | Backend receives Premium  |
| 10   | Initiate downgrade to Free          | Downgrade initiated       |
| 11   | Verify tier: Free                   | Tier = Free confirmed     |
| 12   | Verify scopes: [api-directory]      | Only directory scope      |
| 13   | Attempt incident API call           | Rejected (403)            |
| 14   | Verify no data loss                 | Customer data intact      |

## Expected Outcome

* Tier upgrade succeeds
* New scopes available after upgrade
* Premium features functional
* Tier downgrade succeeds
* Scopes automatically removed after downgrade
* Access denied to removed scopes
* All tier transitions succeed
* Billing reflects correct tier
* No data loss during transitions

## Reviewer Comments

*To be completed during review.*

---

# DOCUMENT SUMMARY

| Category | Count | Status |
|----------|-------|--------|
| Functional Tests | 22 | Complete |
| Role-Based & Access Control | 12 | Complete |
| Edge Cases & Exploratory | 16 | Complete |
| Integration Tests | 14 | Complete |
| Performance & Concurrency | 8 | Complete |
| Security & Accessibility | 4 | Complete |
| End-to-End Tests | 2 | Complete |
| **TOTAL** | **78** | **COMPLETE** |

---

**Document Status:** ✅ Ready for Human Review  
**Format:** Enterprise-Grade Test Case Template  
**Feature:** AB#735316 - API Consumer and Scope Management  
**Generated:** May 29, 2026  
**All 78 Test Cases:** Complete with full metadata, preconditions, test data, steps, expected outcomes, and reviewer sections

---

## Summary

| Metric | Count |
|--------|-------|
| **Total Test Cases** | 78 |
| **Functional Tests** | 22 |
| **Role-Based & Access Control** | 12 |
| **Edge Cases & Exploratory** | 16 |
| **Integration Tests** | 14 |
| **Performance & Concurrency** | 8 |
| **Security & Accessibility** | 4 |
| **E2E Tests** | 2 |

---

**Document Status:** Ready for Human Review  
**Format:** Enterprise-Grade Test Case Template  
**Feature:** AB#735316 - API Consumer and Scope Management  
**Generated:** 5/29/2026
