# Test Cases: AB#735316 - API Consumer and Scope Management

---

# FUNCTIONAL TEST CASES

---

# TC-FE735316-001

## Metadata

| Field         | Value |
| ------------- | ------------------------------------------ |
| Test Case ID  | TC-FE735316-001 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can register a new integration client with valid inputs.

## Preconditions

1. Customer account exists and is active
2. Customer is authenticated and logged into the platform
3. Customer has required permissions to create integration clients
4. At least one API product scope is available to the customer's subscription

## Test Data

| Field             | Value |
| ----------------- | --------------------- |
| Client Name       | Workday Integration |
| Client Description| Directory sync tool |
| Selected Scopes   | [api-directory, api-incident] |
| Email Address     | customer@example.com |

## Test Steps

| Step | Action                                              | Expected Result |
| ---- | --------------------------------------------------- | -------------------------------------------- |
| 1    | Customer Integration Manager navigates to Integration Clients section | Client list page loads successfully |
| 2    | Customer Integration Manager clicks "New Client" button | New client creation form opens |
| 3    | Customer Integration Manager enters client name "Workday Integration" | Name field populated |
| 4    | Customer Integration Manager enters description "Directory sync tool" | Description field populated |
| 5    | Customer Integration Manager selects scopes: api-directory, api-incident | Both scopes appear selected in form |
| 6    | Customer Integration Manager clicks "Create" button | Client creation processes |
| 7    | Customer Integration Manager verifies API credentials display (one-time only) | API key and secret visible in modal |
| 8    | Customer Integration Manager closes credentials modal | Modal closes, client appears in list |
| 9    | Customer Integration Manager verifies email sent to customer@example.com | Onboarding email received with setup guide |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-002

## Metadata

| Field         | Value |
| ------------- | ---------------------------------- |
| Test Case ID  | TC-FE735316-002 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can generate cryptographically strong unique API credentials.

## Preconditions

1. Customer account exists and is authenticated
2. Customer has permission to create multiple integration clients
3. System has proper cryptographic libraries configured

## Test Data

| Field            | Value |
| ---------------- | -------------- |
| First Client     | Client-A |
| Second Client    | Client-B |
| Expected Key Length | 32+ characters |
| Expected Secret Length | 64+ characters |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------------------ |
| 1    | System API Manager creates first integration client | API key-1 and secret-1 generated |
| 2    | System API Manager captures and records key-1, secret-1 | Credentials recorded for comparison |
| 3    | System API Manager creates second integration client | API key-2 and secret-2 generated |
| 4    | System API Manager captures and records key-2, secret-2 | Credentials recorded for comparison |
| 5    | System API Manager compares key-1 with key-2 | Keys are different (not duplicated) |
| 6    | System API Manager compares secret-1 with secret-2 | Secrets are different (not duplicated) |
| 7    | System API Manager verifies key-1 length | Length >= 32 characters |
| 8    | System API Manager verifies secret-1 length | Length >= 64 characters |
| 9    | System API Manager verifies key format (alphanumeric) | Contains only URL-safe characters |
| 10   | System API Manager verifies secret format (alphanumeric) | Contains only URL-safe characters |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-003

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-003 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can view a complete list of integration clients.

## Preconditions

1. Customer account exists and is authenticated
2. Customer has 3+ active integration clients created previously
3. At least one client has been used in the last 24 hours

## Test Data

| Field            | Value |
| ---------------- | ------------------ |
| Client Count     | 3 |
| Expected Columns | clientId, clientName, scopes, status, createdAt, lastUsedAt |

## Test Steps

| Step | Action                      | Expected Result |
| ---- | --------------------------- | ---------------------------------- |
| 1    | Customer Integration Manager navigates to Integration Clients section | Clients list page loads |
| 2    | Customer Integration Manager verifies page title | Title shows "Integration Clients" |
| 3    | Customer Integration Manager counts displayed clients | All 3 clients are visible |
| 4    | Customer Integration Manager verifies table columns | All required columns present |
| 5    | Customer Integration Manager checks client names | All client names displayed |
| 6    | Customer Integration Manager checks client IDs | All clientIds properly formatted |
| 7    | Customer Integration Manager checks scopes column | Scopes listed for each client |
| 8    | Customer Integration Manager checks status column | Status shows "active" or "suspended" |
| 9    | Customer Integration Manager checks createdAt dates | Dates are valid and readable |
| 10   | Customer Integration Manager checks lastUsedAt dates | Recent client shows current date |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-004

## Metadata

| Field         | Value |
| ------------- | ------------------------------- |
| Test Case ID  | TC-FE735316-004 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can view detailed information about an integration client.

## Preconditions

1. Customer account exists and is authenticated
2. At least one integration client exists for the customer
3. Client has multiple scopes assigned (minimum 2)

## Test Data

| Field          | Value |
| -------------- | ----------------- |
| Client Name    | Workday Integration |
| Scopes         | [api-directory, api-incident] |
| Status         | active |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------------- |
| 1    | Customer Integration Manager navigates to Integration Clients list | List page displays all clients |
| 2    | Customer Integration Manager clicks on specific client (Workday Integration) | Details page loads |
| 3    | Customer Integration Manager verifies client name displayed | "Workday Integration" visible |
| 4    | Customer Integration Manager verifies client ID displayed | Unique client ID shown |
| 5    | Customer Integration Manager verifies description displayed | Description text visible |
| 6    | Customer Integration Manager verifies status displayed | Status shows "active" |
| 7    | Customer Integration Manager verifies scopes list | Both api-directory and api-incident listed |
| 8    | Customer Integration Manager verifies creation date displayed | Formatted date/time shown |
| 9    | Customer Integration Manager verifies credentials count | Shows active credential count |
| 10   | Customer Integration Manager verifies no plain-text secret shown | Secret field masked or empty |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-005

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-005 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can update integration client metadata without affecting security.

## Preconditions

1. Customer account exists and is authenticated
2. Integration client "Old Name" exists for the customer
3. Client has description "Old Description"

## Test Data

| Field                  | Value |
| ---------------------- | ------------------------- |
| Original Name          | Old Name |
| Updated Name           | Updated Workday Client |
| Original Description   | Old Description |
| Updated Description    | Syncs directory data |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigates to client details page | Details page loads |
| 2    | Customer Integration Manager clicks "Edit" button | Edit form opens |
| 3    | Customer Integration Manager clears name field | Field becomes empty |
| 4    | Customer Integration Manager enters new name "Updated Workday Client" | New name entered |
| 5    | Customer Integration Manager clears description field | Description field cleared |
| 6    | Customer Integration Manager enters new description "Syncs directory data" | New description entered |
| 7    | Customer Integration Manager verifies clientId field is disabled | Client ID field read-only |
| 8    | Customer Integration Manager verifies scopes cannot be edited here | Scopes field disabled |
| 9    | Customer Integration Manager clicks "Save" button | Changes submitted |
| 10   | Customer Integration Manager verifies update confirmation message | "Client updated successfully" displayed |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-006

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-006 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can add API product scopes to an integration client.

## Preconditions

1. Customer account exists and is authenticated
2. Integration client exists with current scopes: [api-directory]
3. "api-incident" scope is available in customer's subscription
4. Customer has permission to modify scopes

## Test Data

| Field              | Value |
| ------------------ | --------------------------- |
| Client Name        | Workday Integration |
| Current Scope      | api-directory |
| Scope to Add       | api-incident |
| Expected Scopes After | [api-directory, api-incident] |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigates to client details page | Client shows current scope: api-directory |
| 2    | Customer Integration Manager clicks "Add Scope" button | Add scope modal opens |
| 3    | Customer Integration Manager verifies available scopes listed | api-incident appears in dropdown |
| 4    | Customer Integration Manager verifies api-directory not shown | Already assigned scopes excluded |
| 5    | Customer Integration Manager selects "api-incident" from dropdown | Scope selected in modal |
| 6    | Customer Integration Manager clicks "Confirm" button | Change submitted |
| 7    | Customer Integration Manager verifies success message | "Scope added successfully" shown |
| 8    | Customer Integration Manager verifies updated scope list | Client now shows both scopes |
| 9    | Customer Integration Manager verifies audit log entry created | Log shows SCOPE_ADDED event |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-007

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-007 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can remove API product scopes from an integration client.

## Preconditions

1. Customer account exists and is authenticated
2. Integration client exists with scopes: [api-directory, api-incident]
3. Customer has permission to modify scopes
4. No critical integrations depend on api-incident scope (or warning accepted)

## Test Data

| Field              | Value |
| ------------------ | --------------------------- |
| Client Name        | Workday Integration |
| Current Scopes     | [api-directory, api-incident] |
| Scope to Remove    | api-incident |
| Expected Scopes After | [api-directory] |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigates to client details page | Client shows both scopes |
| 2    | Customer Integration Manager locates scope "api-incident" | Scope listed with X button |
| 3    | Customer Integration Manager clicks X button next to api-incident | Confirmation dialog shown |
| 4    | Customer Integration Manager verifies warning message | Warning about access revocation shown |
| 5    | Customer Integration Manager clicks "Confirm Remove" button | Scope removal submitted |
| 6    | Customer Integration Manager verifies success message | "Scope removed successfully" displayed |
| 7    | Customer Integration Manager verifies updated scope list | Client now shows only api-directory |
| 8    | Customer Integration Manager verifies audit log entry | Log shows SCOPE_REMOVED event |
| 9    | Customer Integration Manager attempts API call to removed scope | Request rejected (403 Forbidden) |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-008

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-008 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can make API calls to endpoints within assigned scopes.

## Preconditions

1. Integration client exists with scope: [api-directory]
2. Valid API credentials (key and secret) exist for client
3. Directory API endpoint is operational and accessible
4. Client has valid signature generation capability

## Test Data

| Field              | Value |
| ------------------ | --------------------------- |
| API Endpoint       | /api/v1/directory/users |
| HTTP Method        | GET |
| Expected Status    | 200 OK |
| Required Scope     | api-directory |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer prepares API request with valid credentials | Request headers set |
| 2    | API Consumer generates HMAC-SHA256 signature | Signature calculated |
| 3    | API Consumer includes X-Signature header | Signature added to request |
| 4    | API Consumer calls /api/v1/directory/users endpoint | Request sent to APIm |
| 5    | API Consumer verifies request reaches APIm layer | Request received |
| 6    | API Consumer verifies scope validation passes | Scope check succeeds (api-directory) |
| 7    | API Consumer verifies request forwarded to backend | Backend receives request |
| 8    | API Consumer verifies response received | 200 OK response returned |
| 9    | API Consumer measures response latency | Latency < 200ms |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-009

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-009 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can validate credential scopes before processing requests.

## Preconditions

1. Integration client exists with scope: [api-directory] only
2. Client does NOT have scope: [api-incident]
3. Valid API credentials exist for client
4. Incident API endpoint is available

## Test Data

| Field                | Value |
| -------------------- | --------------------- |
| Client Scope         | api-directory |
| Requested Endpoint   | /api/v1/incident/list |
| Required Scope       | api-incident |
| Expected Status Code | 403 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager prepares API request with valid credentials | Request headers set |
| 2    | System API Manager sets target endpoint to /api/v1/incident/list | Endpoint configured |
| 3    | System API Manager generates valid signature for client | Signature calculated |
| 4    | System API Manager sends request to APIm layer | Request submitted |
| 5    | System API Manager checks credential scope | Scope validation performed |
| 6    | System API Manager identifies scope mismatch | api-directory vs api-incident |
| 7    | System API Manager verifies request NOT forwarded to backend | Backend not contacted |
| 8    | System API Manager verifies 403 error response | 403 Forbidden returned |
| 9    | System API Manager verifies error message | Message: "Insufficient scope: api-directory. Required: api-incident" |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-010

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-010 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can include API product metadata in forwarded requests.

## Preconditions

1. Integration client exists with scope: [api-directory]
2. Valid API credentials exist for client
3. Backend service is configured and operational
4. APIm and backend are properly connected

## Test Data

| Field              | Value |
| ------------------ | ----------------------- |
| API Endpoint       | /api/v1/directory/users |
| Expected Header    | X-API-Product |
| Expected Value     | Directory APIs |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager prepare valid API request | Request prepared |
| 2    | Customer Integration Manager send request to APIm | Request received by APIm |
| 3    | Customer Integration Manager aPIm validates credentials | Validation passes |
| 4    | Customer Integration Manager aPIm validates scope | Scope check passes |
| 5    | Customer Integration Manager aPIm forwards request to backend | Request forwarded |
| 6    | Customer Integration Manager capture forwarded request headers | Headers intercepted |
| 7    | Customer Integration Manager verify X-API-Product header present | Header included in request |
| 8    | Customer Integration Manager verify header value | Value = "Directory APIs" |
| 9    | Customer Integration Manager verify backend received header | Backend acknowledges |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-011

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-011 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can include subscription tier in forwarded requests.

## Preconditions

1. Customer has Premium subscription tier
2. Integration client exists for Premium tier customer
3. Valid API credentials exist for client
4. Backend service is operational

## Test Data

| Field                  | Value |
| ---------------------- | --------------- |
| Customer Tier          | Premium |
| Expected Header        | X-Subscription-Tier |
| Expected Header Value  | Premium |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager authenticate as Premium tier customer | Customer context set |
| 2    | Customer Integration Manager prepare API request with credentials | Request prepared |
| 3    | Customer Integration Manager send request to APIm | Request received |
| 4    | Customer Integration Manager aPIm validates credentials | Validation passes |
| 5    | Customer Integration Manager aPIm retrieves subscription tier | Tier = Premium retrieved |
| 6    | Customer Integration Manager aPIm includes tier in forwarded request | Header added |
| 7    | Customer Integration Manager forward request to backend | Request sent to backend |
| 8    | Customer Integration Manager capture forwarded request headers | Headers inspected |
| 9    | Customer Integration Manager verify X-Subscription-Tier header | Header present and correct |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-012

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-012 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can route requests to correct backend based on subscription tier.

## Preconditions

1. Multiple backend URLs configured for different tiers:
   - backendURL_Free = https://backend-free.api.example.com
   - backendURL_Premium = https://backend-premium.api.example.com
2. Free tier customer exists with credentials
3. Premium tier customer exists with credentials
4. Both backend services operational

## Test Data

| Field                      | Value |
| -------------------------- | ---------------------------------- |
| Free Tier Backend URL      | https://backend-free.api.example.com |
| Premium Tier Backend URL   | https://backend-premium.api.example.com |
| Test Endpoint              | /api/v1/directory/users |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager authenticate as Free tier customer | Free tier context set |
| 2    | Customer Integration Manager prepare API request | Request prepared |
| 3    | Customer Integration Manager send request to APIm | Request received |
| 4    | Customer Integration Manager aPIm determines customer tier | Tier = Free identified |
| 5    | Customer Integration Manager aPIm selects backend URL | backendURL_Free selected |
| 6    | Customer Integration Manager verify request routed to Free backend | Network traffic verified |
| 7    | Customer Integration Manager authenticate as Premium tier customer | Premium tier context set |
| 8    | Customer Integration Manager prepare same API request | Request prepared |
| 9    | Customer Integration Manager send request to APIm | Request received |
| 10    | Customer Integration Manager aPIm determines customer tier | Tier = Premium identified |
| 11    | Customer Integration Manager aPIm selects backend URL | backendURL_Premium selected |
| 12    | Customer Integration Manager verify request routed to Premium backend | Network traffic verified |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-013

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-013 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can rotate API credentials for an integration client.

## Preconditions

1. Integration client exists with active credentials
2. Customer is authenticated with permission to rotate credentials
3. Client has been used previously (to test continuity)

## Test Data

| Field              | Value |
| ------------------ | -------------------- |
| Client Name        | Workday Integration |
| Current API Key    | key_current_xxxxx |
| Current API Secret | secret_current_xxxxx |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigate to client details page | Client details loaded |
| 2    | Customer Integration Manager click "Rotate Credentials" button | Rotation confirmation shown |
| 3    | Customer Integration Manager review rotation warning | Warning about current key revocation |
| 4    | Customer Integration Manager click "Confirm Rotation" | Rotation process initiated |
| 5    | Customer Integration Manager verify new credentials generated | New API key and secret displayed |
| 6    | Customer Integration Manager verify new key format (32+ chars) | Key properly formatted |
| 7    | Customer Integration Manager verify new secret format (64+ chars) | Secret properly formatted |
| 8    | Customer Integration Manager verify credentials display once | Modal shows one-time display |
| 9    | Customer Integration Manager copy new credentials to clipboard | Credentials copied |
| 10    | Customer Integration Manager close credentials modal | Modal closes |
| 11    | Customer Integration Manager verify old credentials revoked | Old key status = revoked |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-014

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-014 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can reject old credentials after credential rotation.

## Preconditions

1. Integration client has active credentials
2. Credentials have been rotated (new key and secret generated)
3. Old credentials are known and recorded

## Test Data

| Field          | Value |
| -------------- | ------------------ |
| Old API Key    | key_old_xxxxx |
| Old API Secret | secret_old_xxxxx |
| New API Key    | key_new_yyyyy |
| New API Secret | secret_new_yyyyy |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager prepares API request with old credentials | Request prepared |
| 2    | System API Manager calculates signature using old secret | Signature calculated |
| 3    | System API Manager sends request with old credentials   | Request sent |
| 4    | System API Manager performs APIm validation of old credentials      | Validation attempt |
| 5    | System API Manager checks credential status     | Status = revoked found |
| 6    | System API Manager verifies request rejected                   | 401 Unauthorized returned |
| 7    | System API Manager prepares API request with new credentials | Request prepared |
| 8    | System API Manager calculates signature using new secret | Signature calculated |
| 9    | System API Manager sends request with new credentials   | Request sent |
| 10   | System API Manager performs APIm validation of new credentials      | Validation succeeds |
| 11   | System API Manager checks credential status     | Status = active found |
| 12   | System API Manager verifies request forwarded to backend        | Request processed (200 OK) |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-015

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-015 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can revoke specific credential sets for a client.

## Preconditions

1. Integration client has multiple active credentials
2. At least 2 credential sets exist for the client
3. Customer has permission to revoke credentials

## Test Data

| Field                  | Value |
| ---------------------- | ----------------- |
| Client Name            | Workday Integration |
| Credential to Revoke   | credential_id_001 |
| Remaining Credentials  | credential_id_002 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigate to client credentials section | Credentials list displayed |
| 2    | Customer Integration Manager locate specific credential | credential_id_001 visible |
| 3    | Customer Integration Manager click revoke button next to credential | Revocation confirmation shown |
| 4    | Customer Integration Manager verify confirmation dialog | Dialog asks for confirmation |
| 5    | Customer Integration Manager click "Confirm Revoke" | Revocation submitted |
| 6    | Customer Integration Manager verify success message | "Credential revoked successfully" |
| 7    | Customer Integration Manager verify credential status changed | Status = revoked shown |
| 8    | Customer Integration Manager attempt API call with revoked key | Request rejected (401) |
| 9    | Customer Integration Manager attempt API call with other key | Request accepted (200 OK) |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-016

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-016 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can enforce subscription entitlement validation on API requests.

## Preconditions

1. Customer subscription includes only "Directory APIs"
2. Customer subscription does NOT include "Incident & Impacts Export API"
3. Integration client has scopes: [api-directory] only
4. Scope validation would pass (to test entitlement check separately)

## Test Data

| Field                    | Value |
| ------------------------ | ----------------------------- |
| Subscription Products    | [Directory APIs] |
| Attempted Product        | Incident & Impacts Export API |
| Expected Status Code     | 403 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager verify customer subscription | Subscription = Directory APIs only |
| 2    | System API Manager prepare API request to incident endpoint | Request prepared |
| 3    | System API Manager include valid credentials and signature | Request signed |
| 4    | System API Manager send request to APIm | Request received |
| 5    | System API Manager aPIm validates credentials | Validation passes |
| 6    | System API Manager aPIm validates scope | Scope validation passes |
| 7    | System API Manager aPIm checks subscription entitlement | Entitlement check fails |
| 8    | System API Manager request rejected | 403 Forbidden returned |
| 9    | System API Manager verify error message | Message indicates "Product not in subscription" |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-017

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-017 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can reject requests with invalid API key formats.

## Preconditions

1. APIm is operational
2. Valid API endpoints are accessible
3. Test with various invalid key formats

## Test Data

| Field                  | Value |
| ---------------------- | ---------------------- |
| Invalid Key - Too Short | abc |
| Invalid Key - Empty    | |
| Invalid Key - Special Chars | key@#$%^&*() |
| Invalid Key - Spaces   | key with spaces |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager send request with too short key (3 chars) | Request sent |
| 2    | System API Manager aPIm validates key format | Validation fails |
| 3    | System API Manager verify rejection | 400 Bad Request returned |
| 4    | System API Manager verify error message | "Invalid API key format" |
| 5    | System API Manager send request with empty key | Request sent |
| 6    | System API Manager aPIm validates key format | Validation fails |
| 7    | System API Manager verify rejection | 400 Bad Request returned |
| 8    | System API Manager send request with special characters | Request sent |
| 9    | System API Manager aPIm validates key format | Validation fails |
| 10    | System API Manager verify rejection | 400 Bad Request returned |
| 11    | System API Manager send request with spaces in key | Request sent |
| 12    | System API Manager aPIm validates key format | Validation fails |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-018

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-018 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can validate HMAC-SHA256 signatures on API requests.

## Preconditions

1. Integration client has valid API credentials
2. Request body is prepared
3. HMAC-SHA256 calculation capability available

## Test Data

| Field                | Value |
| -------------------- | ------------------------- |
| API Secret           | secret_xxxxxxxxxxxxx |
| Request Body         | {"action": "list_users"} |
| Algorithm            | HMAC-SHA256 |
| Valid Signature      | calculated_hmac_value |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager prepare request body | Body = {"action": "list_users"} |
| 2    | Customer Integration Manager calculate HMAC-SHA256 with secret | Signature calculated |
| 3    | Customer Integration Manager include signature in X-Signature header | Header added |
| 4    | Customer Integration Manager send request with valid signature | Request submitted |
| 5    | Customer Integration Manager aPIm calculates signature | Signature recalculated |
| 6    | Customer Integration Manager aPIm compares signatures (constant-time) | Signatures match |
| 7    | Customer Integration Manager request accepted | 200 OK returned |
| 8    | Customer Integration Manager modify request body | Body altered after signing |
| 9    | Customer Integration Manager send request with modified body | Request submitted |
| 10    | Customer Integration Manager aPIm recalculates signature | Signature recalculated |
| 11    | Customer Integration Manager aPIm compares signatures | Signatures do NOT match |
| 12    | Customer Integration Manager request rejected | 401 Unauthorized returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-019

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-019 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can prevent duplicate client names within their account.

## Preconditions

1. Customer has existing client named "Workday-Integration"
2. Customer is authenticated with permission to create clients
3. Client creation form is accessible

## Test Data

| Field              | Value |
| ------------------ | ------------------- |
| Existing Client    | Workday-Integration |
| Duplicate Name     | Workday-Integration |
| Name Check         | Case-insensitive |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer navigate to client creation form | Form loads |
| 2    | API Consumer enter name: "Workday-Integration" | Name field populated |
| 3    | API Consumer enter description | Description entered |
| 4    | API Consumer select scopes | Scopes selected |
| 5    | API Consumer click "Create" button | Validation triggered |
| 6    | API Consumer system checks for duplicate name | Name check performed |
| 7    | API Consumer system finds existing client | Match found in database |
| 8    | API Consumer request rejected | Creation blocked |
| 9    | API Consumer verify error message | "Client name already exists" |
| 10    | API Consumer try with different case: "workday-integration" | Attempt submitted |
| 11    | API Consumer system performs case-insensitive check | Case-insensitive match |
| 12    | API Consumer request rejected | Creation blocked (case-insensitive) |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-020

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-020 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can view audit trail for integration clients.

## Preconditions

1. Integration client exists with multiple historical events
2. Client has undergone various operations: creation, scope addition, credential rotation
3. Customer has permission to view audit logs

## Test Data

| Field             | Value |
| ----------------- | -------------------- |
| Client Name       | Workday Integration |
| Expected Events   | CLIENT_CREATED, SCOPE_ADDED, SCOPE_REMOVED, CREDENTIAL_ROTATED, CREDENTIAL_REVOKED |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Read-Only User navigate to client details page | Client details loaded |
| 2    | Read-Only User click "Audit Log" tab or button | Audit log section opens |
| 3    | Read-Only User verify log displays events | Events listed in reverse chronological order |
| 4    | Read-Only User verify CLIENT_CREATED event | Initial creation logged |
| 5    | Read-Only User verify SCOPE_ADDED event | Scope additions logged |
| 6    | Read-Only User verify SCOPE_REMOVED event | Scope removals logged |
| 7    | Read-Only User verify CREDENTIAL_ROTATED event | Credential changes logged |
| 8    | Read-Only User verify CREDENTIAL_REVOKED event | Credential revocations logged |
| 9    | Read-Only User verify timestamp for each event | Timestamps accurate and formatted |
| 10    | Read-Only User verify user/actor for each event | Actor identified |
| 11    | Read-Only User verify event details | Details include before/after values |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-021

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-021 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can receive rate limit information in response headers.

## Preconditions

1. Integration client exists with valid credentials
2. Customer has Free tier subscription (100 requests/second limit)
3. API endpoint is operational

## Test Data

| Field                | Value |
| -------------------- | ---------------- |
| Rate Limit Per Sec   | 100 |
| Initial Remaining    | 100 |
| After 3 Requests     | 97 |
| Reset Time           | timestamp |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer make initial API request | Request processed |
| 2    | API Consumer capture response headers | Headers extracted |
| 3    | API Consumer verify X-RateLimit-Limit header | Header present, value = 100 |
| 4    | API Consumer verify X-RateLimit-Remaining header | Header present, value = 99 |
| 5    | API Consumer verify X-RateLimit-Reset header | Header present, timestamp shown |
| 6    | API Consumer make second API request | Request processed |
| 7    | API Consumer capture response headers | Headers extracted |
| 8    | API Consumer verify X-RateLimit-Remaining | Value = 98 (decremented) |
| 9    | API Consumer make third API request | Request processed |
| 10    | API Consumer capture response headers | Headers extracted |
| 11    | API Consumer verify X-RateLimit-Remaining | Value = 97 (decremented) |
| 12    | API Consumer verify reset time accuracy | Timestamp matches quota reset |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-022

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-022 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can handle concurrent requests without race conditions.

## Preconditions

1. Integration client exists with valid credentials
2. Client can make concurrent requests
3. Backend service handles concurrent requests

## Test Data

| Field                  | Value |
| ---------------------- | ------- |
| Concurrent Requests    | 5 |
| Expected Success Rate  | 100% |
| Expected Errors       | 0 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager prepare 5 concurrent API requests | Requests queued |
| 2    | Customer Integration Manager all requests have valid credentials | Credentials set for each |
| 3    | Customer Integration Manager all requests have valid signatures | Signatures calculated |
| 4    | Customer Integration Manager send all 5 requests simultaneously | Requests submitted |
| 5    | Customer Integration Manager aPIm validates all credentials | All validations succeed |
| 6    | Customer Integration Manager aPIm validates all scopes | All scope checks pass |
| 7    | Customer Integration Manager forward all requests to backend | All forwarded |
| 8    | Customer Integration Manager monitor for race conditions | No race conditions detected |
| 9    | Customer Integration Manager verify all 5 responses received | All 5 responses received |
| 10    | Customer Integration Manager verify response codes | All 200 OK responses |
| 11    | Customer Integration Manager verify response bodies | All contain expected data |
| 12    | Customer Integration Manager verify request isolation | No cross-contamination of data |


## Reviewer Comments

*To be completed during review.*

---

# ROLE-BASED & ACCESS CONTROL TEST CASES

---

# TC-FE735316-023

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-023 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Read-Only User cannot create new integration clients.

## Preconditions

1. Read-only user account exists
2. User is logged in with read-only role
3. Integration clients list is visible
4. Customer has existing integration clients

## Test Data

| Field              | Value |
| ------------------ | ----------- |
| User Role          | Read-Only |
| UI Button State    | Disabled/Hidden |
| API Response Code  | 403 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager login as read-only user | User logged in |
| 2    | System API Manager navigate to Integration Clients | List page loads |
| 3    | System API Manager locate "New Client" button | Button visible/hidden |
| 4    | System API Manager verify button state | Button disabled or not shown |
| 5    | System API Manager attempt to click button | No action occurs or tooltip shown |
| 6    | System API Manager attempt direct API call to create | POST /clients submitted |
| 7    | System API Manager aPIm checks user permissions | Permission check fails |
| 8    | System API Manager verify API response | 403 Forbidden returned |
| 9    | System API Manager verify error message | "Insufficient permissions" |
| 10    | System API Manager verify no client created | Client count unchanged |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-024

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-024 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Read-Only User cannot modify client scopes.

## Preconditions

1. Read-only user account exists and is logged in
2. Integration client exists with scopes: [api-directory]
3. Available scope to add: api-incident

## Test Data

| Field              | Value |
| ------------------ | ----------- |
| User Role          | Read-Only |
| Scope to Add       | api-incident |
| Expected Status    | 403 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer login as read-only user | User logged in |
| 2    | API Consumer navigate to client details | Client details page loads |
| 3    | API Consumer locate "Add Scope" button | Button visible/hidden |
| 4    | API Consumer verify button is disabled | Button disabled or greyed out |
| 5    | API Consumer attempt to click "Add Scope" | No action occurs |
| 6    | API Consumer attempt direct API call to add scope | PUT /clients/{id}/scopes |
| 7    | API Consumer aPIm checks permissions | Permission check fails |
| 8    | API Consumer verify API response | 403 Forbidden returned |
| 9    | API Consumer verify scope list unchanged | Scope list remains [api-directory] |
| 10    | API Consumer verify audit log | Unauthorized attempt logged |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-025

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-025 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Read-Only User cannot rotate credentials for a client.

## Preconditions

1. Read-only user account exists and is logged in
2. Integration client with active credentials exists
3. Client details page is accessible

## Test Data

| Field              | Value |
| ------------------ | ----------- |
| User Role          | Read-Only |
| Action             | Rotate Credentials |
| Expected Response  | 403 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Read-Only User login as read-only user | User logged in |
| 2    | Read-Only User navigate to client details | Details page loaded |
| 3    | Read-Only User locate "Rotate Credentials" button | Button visible/hidden |
| 4    | Read-Only User verify button is disabled | Button disabled or greyed |
| 5    | Read-Only User attempt to click button | No action occurs |
| 6    | Read-Only User attempt direct API call for rotation | POST /clients/{id}/rotate-credentials |
| 7    | Read-Only User aPIm checks user permissions | Permission check fails |
| 8    | Read-Only User verify API response | 403 Forbidden returned |
| 9    | Read-Only User verify old credentials still active | Original credentials unchanged |
| 10    | Read-Only User verify no new credentials created | No new credentials generated |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-026

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-026 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Admin System Administrator can manage integration clients for any customer.

## Preconditions

1. Admin user account exists and is logged in
2. Customer account exists with integration clients
3. Admin has access to customer management interface

## Test Data

| Field              | Value |
| ------------------ | --------------- |
| User Role          | Admin |
| Target Customer    | Customer-ABC |
| Action             | View/Create/Edit/Delete clients |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Admin System Administrator login as admin user | Admin logged in |
| 2    | Admin System Administrator navigate to customer management | Customer list displayed |
| 3    | Admin System Administrator select Customer-ABC | Customer details loaded |
| 4    | Admin System Administrator click "Manage Integration Clients" | Clients for Customer-ABC shown |
| 5    | Admin System Administrator verify admin can view all clients | All clients visible |
| 6    | Admin System Administrator click "Create Client" button | New client form opens |
| 7    | Admin System Administrator create new client for Customer-ABC | Client created successfully |
| 8    | Admin System Administrator click "Edit" on existing client | Edit form opens |
| 9    | Admin System Administrator modify client details | Details updated |
| 10    | Admin System Administrator click "Delete" on existing client | Client deleted (if confirmed) |
| 11    | Admin System Administrator verify all actions logged | Audit log shows admin actions |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-027

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-027 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Support Lead can view client details without accessing secrets.

## Preconditions

1. Support lead user account exists and is logged in
2. Customer account exists with integration clients
3. Support lead has access to customer support interface

## Test Data

| Field                | Value |
| -------------------- | ----------- |
| User Role            | Support Lead |
| Viewable Fields      | clientId, name, scopes, status, lastUsedAt |
| Hidden Fields        | apiSecret, credentials |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Admin System Administrator login as support lead | Support user logged in |
| 2    | Admin System Administrator navigate to customer lookup | Customer search interface |
| 3    | Admin System Administrator search for customer | Customer found |
| 4    | Admin System Administrator click "View Clients" for customer | Client list loads |
| 5    | Admin System Administrator verify support can see client names | Names visible |
| 6    | Admin System Administrator verify support can see scopes | Scopes visible |
| 7    | Admin System Administrator verify support can see status | Status visible |
| 8    | Admin System Administrator verify support can see lastUsedAt | Last used date visible |
| 9    | Admin System Administrator click on specific client | Client details open |
| 10    | Admin System Administrator verify API secret is masked | Secret not shown or masked |
| 11    | Admin System Administrator verify credentials not visible | Credential details hidden |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-028

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-028 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Support Lead cannot rotate customer credentials.

## Preconditions

1. Support lead user account exists and is logged in
2. Customer integration client exists
3. Support lead is viewing customer's client details

## Test Data

| Field              | Value |
| ------------------ | ----------- |
| User Role          | Support Lead |
| Action             | Rotate Credentials |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer login as support lead | Support user logged in |
| 2    | API Consumer navigate to customer's client | Client details open |
| 3    | API Consumer locate "Rotate Credentials" button | Button visible/hidden |
| 4    | API Consumer verify button is disabled | Button disabled or not shown |
| 5    | API Consumer attempt direct API call to rotate | Request sent |
| 6    | API Consumer aPIm checks permissions | Permission check fails |
| 7    | API Consumer verify API response | 403 Forbidden returned |
| 8    | API Consumer verify credentials unchanged | Old credentials still active |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-029

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-029 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer requires valid cryptographic signature with API key.

## Preconditions

1. Integration client has valid API key and secret
2. API endpoint is accessible
3. Request can be prepared without signature

## Test Data

| Field              | Value |
| ------------------ | ------------------ |
| API Key            | key_valid_xxxxx |
| Request Body       | {"action": "list"} |
| Signature Header   | X-Signature |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer prepare API request with body | Request prepared |
| 2    | API Consumer include valid API key in request | Key included |
| 3    | API Consumer omit X-Signature header | No signature included |
| 4    | API Consumer send request | Request submitted |
| 5    | API Consumer aPIm validates request | Validation performed |
| 6    | API Consumer aPIm checks for signature header | Header check fails |
| 7    | API Consumer verify response code | 401 Unauthorized returned |
| 8    | API Consumer verify error message | "Missing required signature" |
| 9    | API Consumer prepare request with key and signature | Request prepared with both |
| 10    | API Consumer send request with signature | Request submitted |
| 11    | API Consumer aPIm validates request | Validation succeeds |
| 12    | API Consumer verify response code | 200 OK returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-030

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-030 |
| Priority      | Critical |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can enforce multi-tenant isolation.

## Preconditions

1. Customer A account exists and is logged in
2. Customer B account exists with integration clients
3. Direct URL manipulation possible for testing
4. API access control is implemented

## Test Data

| Field                  | Value |
| ---------------------- | ---------------- |
| Customer A ID          | customer_id_111 |
| Customer B ID          | customer_id_222 |
| Customer B Client ID   | client_id_xyz |
| Expected Response      | 403 Forbidden |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer login as Customer A | Customer A logged in |
| 2    | API Consumer attempt to access Customer B's client via direct URL | Attempted |
| 3    | API Consumer uRL manipulation (change customer_id) | /clients?customer_id=222 |
| 4    | API Consumer send request to view Customer B's client | Request submitted |
| 5    | API Consumer aPIm checks customer context | Context verification |
| 6    | API Consumer aPIm validates ownership | Ownership check fails |
| 7    | API Consumer verify response code | 403 Forbidden returned |
| 8    | API Consumer verify error message | "Not authorized to access this resource" |
| 9    | API Consumer attempt API call to modify Customer B's client | PUT request |
| 10    | API Consumer verify request rejected | 403 Forbidden returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-031

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-031 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can validate token scope for customer access.

## Preconditions

1. Customer A authentication token obtained
2. Customer B account exists
3. Token contains customer_id claim

## Test Data

| Field                  | Value |
| ---------------------- | ---------------- |
| Customer A Token       | token_aaa_xxxxx |
| Customer A ID          | customer_id_111 |
| Customer B ID          | customer_id_222 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager login as Customer A | Token generated for Customer A |
| 2    | System Security Manager decode token (JWT) | Token claims visible |
| 3    | System Security Manager verify customer_id in token | customer_id = 111 |
| 4    | System Security Manager attempt to use Customer A token for Customer B API call | Attempted |
| 5    | System Security Manager send request to /api/v1/clients with Customer A token | Request submitted |
| 6    | System Security Manager add header: X-Customer-ID = customer_id_222 | Header manipulated |
| 7    | System Security Manager send request | Request submitted |
| 8    | System Security Manager aPIm validates token scope | Scope check performed |
| 9    | System Security Manager aPIm compares token customer_id with header | Mismatch detected |
| 10    | System Security Manager verify response code | 403 Forbidden returned |
| 11    | System Security Manager verify error message | "Not authorized for this customer" |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-032

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-032 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can reject API requests with expired credentials.

## Preconditions

1. API key created 91 days ago (expires after 90 days)
2. API key is now past expiration
3. API endpoint is accessible

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| API Key                | key_old_expired |
| Expiration Threshold   | 90 days |
| Days Since Creation    | 91 |
| Expected Status Code   | 401 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager verify API key is past expiration | Expiration date confirmed |
| 2    | Customer Integration Manager prepare API request with expired key | Request prepared |
| 3    | Customer Integration Manager include expired key in request | Key included |
| 4    | Customer Integration Manager generate signature | Signature calculated |
| 5    | Customer Integration Manager send request with expired key | Request submitted |
| 6    | Customer Integration Manager aPIm validates credentials | Validation performed |
| 7    | Customer Integration Manager aPIm checks key expiration date | Expiration check fails |
| 8    | Customer Integration Manager verify response code | 401 Unauthorized returned |
| 9    | Customer Integration Manager verify error message | "API key expired. Please rotate credentials" |
| 10    | Customer Integration Manager verify request not forwarded | Backend not contacted |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-033

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-033 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can reject requests from suspended integration clients.

## Preconditions

1. Integration client exists and is active
2. Admin user can suspend clients
3. Client has valid credentials

## Test Data

| Field              | Value |
| ------------------ | --------------- |
| Client Name        | Workday Integration |
| Client Status      | suspended |
| Suspension Reason  | Account inactive |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager verify client is initially active | Status = active |
| 2    | System API Manager admin suspends the client | Suspension action triggered |
| 3    | System API Manager verify client status changed | Status = suspended |
| 4    | System API Manager prepare API request with client credentials | Request prepared |
| 5    | System API Manager send request to APIm | Request submitted |
| 6    | System API Manager aPIm validates credentials | Validation passes |
| 7    | System API Manager aPIm checks client status | Status check fails |
| 8    | System API Manager verify response code | 403 Forbidden returned |
| 9    | System API Manager verify error message | "Client is suspended. Contact support" |
| 10    | System API Manager verify backend not contacted | Request not forwarded |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-034

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-034 |
| Priority      | Low |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager cannot reactivate retired integration clients.

## Preconditions

1. Integration client exists and is active
2. Customer has permission to retire clients
3. Retirement is a permanent action

## Test Data

| Field              | Value |
| ------------------ | ------------------- |
| Client Name        | Workday Integration |
| Original Status    | active |
| After Retirement   | retired |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager navigate to client details | Client details loaded |
| 2    | System API Manager click "Retire Client" button | Confirmation dialog shown |
| 3    | System API Manager review retirement warning | Warning about permanent action |
| 4    | System API Manager click "Confirm Retire" | Retirement processed |
| 5    | System API Manager verify client status | Status = retired |
| 6    | System API Manager verify client removed from active list | Not shown in list |
| 7    | System API Manager attempt to find reactivation option | No "Reactivate" button |
| 8    | System API Manager search for "Reactivate" UI option | Option not found |
| 9    | System API Manager attempt API call to reactivate | Request sent |
| 10    | System API Manager verify API response | 400 Bad Request or 404 |
| 11    | System API Manager verify error message | "Cannot reactivate retired client" |
| 12    | System API Manager verify customer can create new client | New client creation allowed |


## Reviewer Comments

*To be completed during review.*

---

# EDGE CASE & EXPLORATORY TEST CASES

---

# TC-FE735316-035

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-035 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can reject requests with missing API key.

## Preconditions

1. API endpoint is accessible
2. Request format is valid except for missing key

## Test Data

| Field              | Value |
| ------------------ | ---------- |
| API Key Value      | (empty) |
| Expected Status    | 400 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer prepare API request | Request prepared |
| 2    | API Consumer leave API key field empty | Key field blank |
| 3    | API Consumer include valid signature | Signature calculated |
| 4    | API Consumer send request | Request submitted |
| 5    | API Consumer aPIm validates request format | Validation performed |
| 6    | API Consumer aPIm checks for API key | Key field check fails |
| 7    | API Consumer verify response code | 400 Bad Request returned |
| 8    | API Consumer verify error message | "API key is required" |
| 9    | API Consumer prepare request without key header | Key header omitted |
| 10    | API Consumer send request | Request submitted |
| 11    | API Consumer verify response code | 400 Bad Request returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-036

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-036 |
| Priority      | Low |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can generate URL-safe API credentials without special characters.

## Preconditions

1. Credential generation system operational
2. Generation function tested with multiple client creations

## Test Data

| Field                 | Value |
| --------------------- | ------------------- |
| Prohibited Special     | key@#$%^&*() |
| Prohibited Spaces      | key with spaces |
| Expected Characters   | [a-zA-Z0-9_-] |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager create integration client | Client creation triggered |
| 2    | System Security Manager observe generated API key | Key generated |
| 3    | System Security Manager inspect key characters | Characters examined |
| 4    | System Security Manager verify no special characters | No @#$%^&*() found |
| 5    | System Security Manager verify no spaces | No spaces found |
| 6    | System Security Manager verify only URL-safe characters | Only [a-zA-Z0-9_-] found |
| 7    | System Security Manager test generated key in URL encoding | URL encoding test |
| 8    | System Security Manager verify no encoding needed | Key remains unchanged |
| 9    | System Security Manager create multiple clients | Multiple keys generated |
| 10    | System Security Manager inspect all keys | All keys URL-safe |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-037

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-037 |
| Priority      | Low |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Requires manual creation of 1000+ clients or bulk data loading with verification. Automated UI testing would be extremely time-consuming. Manual verification of system handling and performance testing via API recommended.

## Title

Customer Integration Manager can manage integration clients with pagination and search performance.

## Preconditions

1. System has at least 1000 integration clients for test customer
2. Pagination and search functionality implemented
3. Database properly indexed for performance

## Test Data

| Field                  | Value |
| ---------------------- | --------- |
| Total Clients Created  | 1000+ |
| Pagination Page Size   | 50 |
| Expected Pages         | 20+ |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer load integration clients list | First page loads |
| 2    | API Consumer verify pagination controls visible | Previous/Next buttons shown |
| 3    | API Consumer verify client count shown | Shows "1 of 1000+" or similar |
| 4    | API Consumer load first page (50 clients) | Page 1 loads quickly |
| 5    | API Consumer navigate to page 10 | Page 10 loads within 2 seconds |
| 6    | API Consumer navigate to page 20 | Page 20 loads within 2 seconds |
| 7    | API Consumer search for specific client by name | Search completes <2 sec |
| 8    | API Consumer filter by status | Filtering works correctly |
| 9    | API Consumer sort by creation date | Sorting applies correctly |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-038

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-038 |
| Priority      | Low |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can enforce maximum length constraints on client names.

## Preconditions

1. Client creation form is accessible
2. Validation logic is implemented

## Test Data

| Field                  | Value |
| ---------------------- | ----------- |
| Client Name Length Max | 100 |
| Test String Length     | 500 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager navigate to client creation form | Form loaded |
| 2    | System API Manager generate 500-character string | String prepared |
| 3    | System API Manager attempt to enter string in name field | Possible: UI cuts off or API rejects |
| 4    | System API Manager submit client creation form | Form submitted |
| 5    | System API Manager verify validation error | Error message shown |
| 6    | System API Manager verify error message | "Client name cannot exceed 100 characters" |
| 7    | System API Manager verify client not created | Creation blocked |
| 8    | System API Manager enter 100-character name (valid) | Valid name entered |
| 9    | System API Manager submit form | Form submitted |
| 10    | System API Manager verify client created | Client created successfully |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-039

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-039 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can create integration clients with Unicode characters in client names.

## Preconditions

1. Client creation form accessible
2. Database configured for UTF-8 encoding
3. Frontend supports Unicode input

## Test Data

| Field              | Value |
| ------------------ | ------------------------- |
| Name 1             | Интеграция 😊 العربية |
| Name 2             | 中文 クライアント عميل |
| Expected Encoding  | UTF-8 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigate to client creation form | Form loaded |
| 2    | Customer Integration Manager enter Unicode name: "Интеграция 😊 العربية" | Name entered |
| 3    | Customer Integration Manager submit client creation | Form submitted |
| 4    | Customer Integration Manager verify client created | Client created successfully |
| 5    | Customer Integration Manager retrieve client details | Details page loaded |
| 6    | Customer Integration Manager verify name displayed correctly | "Интеграция 😊 العربية" shown |
| 7    | Customer Integration Manager verify no encoding errors | Characters render properly |
| 8    | Customer Integration Manager create client with Name 2 | "中文 クライアント عميل" entered |
| 9    | Customer Integration Manager submit form | Form submitted |
| 10    | Customer Integration Manager verify second client created | Second client created |
| 11    | Customer Integration Manager verify name displays correctly | "中文 クライアント عميل" shown |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-040

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-040 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can handle scope formats with version numbers and pre-release indicators.

## Preconditions

1. Scope "api-directory.v2-beta" is available in system
2. Integration client can be assigned this scope
3. Scope matching includes version parsing

## Test Data

| Field              | Value |
| ------------------ | ------------------------ |
| Scope              | api-directory.v2-beta |
| Required Format    | api-{name}.{version} |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager navigate to client creation | Form loaded |
| 2    | System API Manager look for scope "api-directory.v2-beta" in dropdown | Scope listed |
| 3    | System API Manager select scope "api-directory.v2-beta" | Scope selected |
| 4    | System API Manager create client with this scope | Client created |
| 5    | System API Manager verify scope assigned correctly | Scope shows api-directory.v2-beta |
| 6    | System API Manager make API request with this scope | Request prepared |
| 7    | System API Manager include scope in validation | Scope sent to endpoint |
| 8    | System API Manager verify scope parsing | Version/beta parsing correct |
| 9    | System API Manager verify request routed correctly | Backend receives request |
| 10    | System API Manager verify scope validation passes | Scope match succeeds |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-041

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-041 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can handle concurrent scope modifications without conflicts.

## Preconditions

1. Integration client exists with scopes: [api-directory, api-incident]
2. Two concurrent requests can be simulated
3. Database supports transactions

## Test Data

| Field                | Value |
| -------------------- | -------------------- |
| Initial Scopes       | [api-directory, api-incident] |
| Thread A Action      | Add api-analytics |
| Thread B Action      | Remove api-incident |
| Expected Final State | [api-directory, api-analytics] |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer verify client has current scopes | Scopes verified |
| 2    | API Consumer initiate Thread A (add scope) | Request 1 prepared |
| 3    | API Consumer initiate Thread B (remove scope) | Request 2 prepared |
| 4    | API Consumer submit both requests simultaneously | Both submitted at same time |
| 5    | API Consumer thread A adds api-analytics | Request processing |
| 6    | API Consumer thread B removes api-incident | Request processing |
| 7    | API Consumer monitor for race conditions | Processing observed |
| 8    | API Consumer verify final scope list | Final state = [api-directory, api-analytics] |
| 9    | API Consumer verify both operations reflected | Both add and remove applied |
| 10    | API Consumer check audit log for events | Both events recorded |
| 11    | API Consumer verify event order | Events show correct sequence |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-042

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-042 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can gracefully handle backend service unavailability.

## Preconditions

1. Backend Directory API service can be disabled
2. APIm is operational
3. Client has valid credentials

## Test Data

| Field                | Value |
| -------------------- | ------------------------ |
| Backend Status       | unavailable/down |
| Expected Status Code | 503 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer disable backend Directory API | Service stopped |
| 2    | API Consumer prepare client API request | Request prepared |
| 3    | API Consumer send request to APIm | Request submitted |
| 4    | API Consumer aPIm validates credentials | Validation passes |
| 5    | API Consumer aPIm attempts to forward request | Forwarding fails |
| 6    | API Consumer aPIm detects backend unavailability | Service unavailability detected |
| 7    | API Consumer verify response code | 503 Service Unavailable |
| 8    | API Consumer verify error message | "API service temporarily unavailable" |
| 9    | API Consumer verify message includes retry info | "Please try again in 5 minutes" |
| 10    | API Consumer verify backend error not exposed | No internal error details shown |
| 11    | API Consumer re-enable backend service | Service restored |
| 12    | API Consumer retry same request | Request resubmitted |
| 13    | API Consumer verify request now succeeds | 200 OK returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-043

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-043 |
| Priority      | Low |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Requires precise timing at UTC midnight or manual advancement of system clock. Difficult to automate in standard CI/CD pipeline. Manual testing or environment-specific job scheduling test recommended.

## Title

System API Manager can reset API quota at UTC midnight.

## Preconditions

1. Customer has Free tier with 1000 daily quota
2. Can approach or simulate UTC midnight
3. Quota tracking system operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Daily Quota            | 1000 |
| Test Time              | 23:59:59 UTC |
| Reset Time             | 00:00:00 UTC |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager verify customer quota | Shows 1000 available |
| 2    | System API Manager make 1000 API requests | Requests submitted |
| 3    | System API Manager verify quota exhausted | Remaining = 0 |
| 4    | System API Manager attempt request at 23:59 UTC | Request rejected (429) |
| 5    | System API Manager wait for UTC midnight (00:00) | Time advances |
| 6    | System API Manager check quota after reset | Quota reset to 1000 |
| 7    | System API Manager attempt request at 00:01 UTC | Request accepted (200 OK) |
| 8    | System API Manager verify quota decreased | Remaining = 999 |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-044

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-044 |
| Priority      | Critical |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can detect and reject JWT token tampering.

## Preconditions

1. Client A has scope [api-directory] only
2. Client B has scope [api-incident]
3. JWT tokens are used for client authentication
4. JWT signature verification implemented

## Test Data

| Field                      | Value |
| -------------------------- | ------------------------ |
| Client A Original JWT      | jwt_aaa_valid_xxxxx |
| Client A Scope in JWT      | ["api-directory"] |
| Attempted Modified Scope   | ["api-directory", "api-incident"] |
| JWT Algorithm              | HS256 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager client A obtains valid JWT | JWT token issued |
| 2    | System Security Manager decode JWT (JWT structure known) | Token decoded |
| 3    | System Security Manager modify scope claim | Scope changed to include api-incident |
| 4    | System Security Manager attempt to resign token (no secret) | Resigning fails |
| 5    | System Security Manager submit modified JWT with old signature | Request submitted |
| 6    | System Security Manager aPIm verifies JWT signature | Signature verification fails |
| 7    | System Security Manager verify response code | 401 Unauthorized returned |
| 8    | System Security Manager verify error message | "Invalid token signature" |
| 9    | System Security Manager verify no scope escalation | Escalation attempt blocked |
| 10    | System Security Manager verify audit log | Tampering attempt logged |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-045

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-045 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can reject requests with timestamps far in the future.

## Preconditions

1. APIm validates request timestamps
2. Client can generate custom timestamps
3. Clock skew tolerance is configured

## Test Data

| Field                        | Value |
| ---------------------------- | ------------ |
| Current Time (UTC)           | 12:00:00 |
| Request Timestamp            | 12:05:00 (5 min future) |
| Tolerance Threshold          | 2 minutes |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager note current UTC time | Current time recorded |
| 2    | System Security Manager prepare API request | Request prepared |
| 3    | System Security Manager set request timestamp 5 minutes ahead | Future timestamp set |
| 4    | System Security Manager generate signature with timestamp | Signature includes timestamp |
| 5    | System Security Manager send request with future timestamp | Request submitted |
| 6    | System Security Manager aPIm extracts timestamp from request | Timestamp extracted |
| 7    | System Security Manager aPIm compares with current time | Future skew detected |
| 8    | System Security Manager aPIm checks against tolerance (2 min) | Exceeds tolerance |
| 9    | System Security Manager verify response code | 400 Bad Request returned |
| 10    | System Security Manager verify error message | "Request timestamp is too far in the future" |
| 11    | System Security Manager send request with current timestamp | Request with valid time |
| 12    | System Security Manager verify request accepted | 200 OK returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-046

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-046 |
| Priority      | Critical |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can reject old timestamps to prevent replay attacks.

## Preconditions

1. Valid API request with timestamp from yesterday
2. Request signature is still valid
3. Timestamp validation window is configured

## Test Data

| Field                   | Value |
| ----------------------- | ------------------ |
| Original Request Time   | yesterday 12:00 UTC |
| Current Time            | today 12:00 UTC |
| Time Elapsed            | 24 hours |
| Validation Window       | 5 minutes |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager capture valid API request from yesterday | Request recorded |
| 2    | System Security Manager wait until next day | Time advances 24 hours |
| 3    | System Security Manager attempt to replay old request | Old request resent |
| 4    | System Security Manager old request has valid signature | Signature still valid |
| 5    | System Security Manager send old request to APIm | Request submitted |
| 6    | System Security Manager aPIm extracts timestamp | Timestamp extracted (yesterday) |
| 7    | System Security Manager aPIm compares with current time | Old timestamp detected |
| 8    | System Security Manager aPIm checks against validation window | Outside 5-minute window |
| 9    | System Security Manager verify response code | 401 Unauthorized returned |
| 10    | System Security Manager verify error message | "Request timestamp expired" |
| 11    | System Security Manager verify request not processed | Backend not contacted |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-047

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-047 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can maintain consistency during credential rotation with in-flight requests.

## Preconditions

1. Integration client exists with active credentials
2. Concurrent requests can be simulated
3. Credential rotation service operational

## Test Data

| Field              | Value |
| ------------------ | ------------------ |
| Old Credentials    | key_old_xxxxx |
| New Credentials    | key_new_yyyyy |
| In-Flight Requests | 5 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager start 5 API requests with old key | Requests in flight |
| 2    | System API Manager requests start processing at APIm | Processing initiated |
| 3    | System API Manager trigger credential rotation | Rotation request submitted |
| 4    | System API Manager new credentials generated | New key issued |
| 5    | System API Manager old credentials marked revoked | Status updated |
| 6    | System API Manager in-flight requests continue processing | Old requests complete |
| 7    | System API Manager verify in-flight requests succeed | All 5 complete with 200 OK |
| 8    | System API Manager verify no data loss | All responses received |
| 9    | System API Manager attempt new requests with old key | Rejected (401) |
| 10    | System API Manager attempt new requests with new key | Accepted (200 OK) |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-048

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-048 |
| Priority      | Low |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can receive large API responses streamed without timeout or corruption.

## Preconditions

1. Customer requests large data export
2. Backend can generate 10MB response
3. Response streaming implemented

## Test Data

| Field                 | Value |
| --------------------- | ----------- |
| Response Size         | 10 MB |
| Expected Timeout      | None (streaming) |
| Data Format           | JSON |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer prepare request for large data | Request prepared |
| 2    | API Consumer send request to APIm | Request submitted |
| 3    | API Consumer backend generates 10MB response | Response generated |
| 4    | API Consumer aPIm streams response | Streaming initiated |
| 5    | API Consumer monitor response delivery | Data flowing |
| 6    | API Consumer verify no timeout occurs | Response completes |
| 7    | API Consumer verify complete response received | 10MB received |
| 8    | API Consumer verify response integrity | Data uncorrupted |
| 9    | API Consumer verify JSON parsing succeeds | Valid JSON structure |
| 10    | API Consumer calculate checksum | Integrity verified |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-049

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-049 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can complete in-flight requests successfully even if account is suspended.

## Preconditions

1. Customer account active with integration client
2. Long-running request can be simulated
3. Admin can suspend account mid-request

## Test Data

| Field              | Value |
| ------------------ | -------------- |
| Request Duration   | 2-5 seconds |
| Suspension Timing  | Mid-processing |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer start long-running API request | Request submitted |
| 2    | API Consumer request processing begins | Processing in progress |
| 3    | API Consumer admin suspends customer account | Suspension action triggered |
| 4    | API Consumer account status = suspended | Status updated |
| 5    | API Consumer in-flight request completes | Request continues to completion |
| 6    | API Consumer verify in-flight request succeeds | 200 OK response received |
| 7    | API Consumer data from in-flight request received | Response data complete |
| 8    | API Consumer attempt new request after suspension | Request submitted |
| 9    | API Consumer verify new request rejected | 403 Forbidden returned |
| 10    | API Consumer verify error message | "Account is suspended" |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-050

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-050 |
| Priority      | Low |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can generate credentials without problematic Unicode whitespace characters.

## Preconditions

1. Credential generation function tested
2. Multiple credentials generated
3. Binary analysis of credentials possible

## Test Data

| Field                    | Value |
| ------------------------ | --------------- |
| Problematic Whitespace   | U+0009 (tab), U+00A0 (nbsp), U+200B (zero-width) |
| Expected Whitespace      | None (only alphanumeric and dash/underscore) |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager generate integration client | Client created |
| 2    | System API Manager extract API key | Key captured |
| 3    | System API Manager extract API secret | Secret captured |
| 4    | System API Manager scan for tab characters (U+0009) | No tabs found |
| 5    | System API Manager scan for nbsp (U+00A0) | No nbsp found |
| 6    | System API Manager scan for zero-width space (U+200B) | No zero-width space found |
| 7    | System API Manager verify only ASCII characters | ASCII-only confirmed |
| 8    | System API Manager verify alphanumeric + dash/underscore | Expected chars only |
| 9    | System API Manager create 10 more clients | Multiple credentials tested |
| 10    | System API Manager scan all 10 credentials | All pass whitespace check |


## Reviewer Comments

*To be completed during review.*

---

# INTEGRATION TEST CASES

---

# TC-FE735316-051

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-051 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can complete full Workday middleware onboarding workflow end to end.

## Preconditions

1. New customer account created
2. Workday instance available for integration
3. Integration client creation workflow operational
4. Middleware connection interface available

## Test Data

| Field                  | Value |
| ---------------------- | -------------------- |
| Customer Name          | Acme Corp |
| Client Name            | Workday Integration |
| Assigned Scopes        | [api-directory, api-incident] |
| Middleware Version     | 2.5+ |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager new customer completes signup | Customer account created |
| 2    | Customer Integration Manager customer navigates to Integration | Integrations page loads |
| 3    | Customer Integration Manager customer selects "Workday" | Workday onboarding starts |
| 4    | Customer Integration Manager customer creates integration client | Client "Workday Integration" created |
| 5    | Customer Integration Manager customer selects scopes | api-directory, api-incident selected |
| 6    | Customer Integration Manager credentials displayed once | API key/secret shown |
| 7    | Customer Integration Manager customer copies credentials | Credentials copied |
| 8    | Customer Integration Manager customer accesses Workday config | Workday UI loads |
| 9    | Customer Integration Manager customer enters API key in Workday | Key entered in config |
| 10    | Customer Integration Manager customer enters API secret | Secret entered |
| 11    | Customer Integration Manager customer tests connection | Test request sent |
| 12    | Customer Integration Manager connection verified successful | "Connection verified" shown |
| 13    | Customer Integration Manager customer completes onboarding | Onboarding flow finishes |
| 14    | Customer Integration Manager integration shows as active | Status shows "Active" |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-052

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-052 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can send requests routed to multiple backend services with metadata headers.

## Preconditions

1. Three backend services operational:
   - Directory Backend: https://directory.backend.example.com
   - Incident Backend: https://incident.backend.example.com
   - Analytics Backend: https://analytics.backend.example.com
2. Client has scopes for all three products
3. Network monitoring available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Directory Backend      | https://directory.backend.example.com |
| Incident Backend       | https://incident.backend.example.com |
| Analytics Backend      | https://analytics.backend.example.com |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer send request to Directory API | Request routed to Directory Backend |
| 2    | API Consumer verify X-API-Product header | Header = "Directory APIs" |
| 3    | API Consumer verify request received | Directory Backend logs request |
| 4    | API Consumer send request to Incident API | Request routed to Incident Backend |
| 5    | API Consumer verify X-API-Product header | Header = "Incident APIs" |
| 6    | API Consumer verify request received | Incident Backend logs request |
| 7    | API Consumer send request to Analytics API | Request routed to Analytics Backend |
| 8    | API Consumer verify X-API-Product header | Header = "Analytics APIs" |
| 9    | API Consumer verify request received | Analytics Backend logs request |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-053

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-053 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can cache scope lists from Auth Service and refresh on updates.

## Preconditions

1. Auth Service operational and accessible
2. /scopes endpoint implemented
3. Scopes endpoint returns TTL value
4. Cache layer configured

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Scopes Endpoint        | /auth/v1/scopes |
| TTL Value              | 3600 (1 hour) |
| Initial Scopes Count   | 5 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager call Auth Service /scopes endpoint | Scopes list returned |
| 2    | System API Manager verify scopes returned | 5 scopes in response |
| 3    | System API Manager verify TTL value included | TTL = 3600 seconds |
| 4    | System API Manager verify cache populated | Scopes cached |
| 5    | System API Manager publish new scope to Auth Service | New scope added |
| 6    | System API Manager call /scopes before TTL expires | Cache returns old list |
| 7    | System API Manager verify old list returned | Old 5 scopes returned |
| 8    | System API Manager wait for TTL to expire | Wait 3600+ seconds |
| 9    | System API Manager call /scopes after TTL | Fresh list fetched |
| 10    | System API Manager verify updated list | New scope now included |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-054

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-054 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Customer Integration Manager can assign newly published API products to integration clients.

## Preconditions

1. New API product "api-reporting" not yet published
2. Product publication system operational
3. Scope cache TTL near expiration (or manual refresh available)

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| New Product            | api-reporting |
| Current Available      | [api-directory, api-incident] |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager verify api-reporting not available | Product not in dropdown |
| 2    | Customer Integration Manager admin publishes api-reporting | Product published |
| 3    | Customer Integration Manager trigger scope cache refresh | Cache refresh initiated |
| 4    | Customer Integration Manager navigate to client scope selector | Scope list loads |
| 5    | Customer Integration Manager verify api-reporting now available | Product appears in dropdown |
| 6    | Customer Integration Manager add api-reporting to client | Scope selected |
| 7    | Customer Integration Manager save changes | Changes submitted |
| 8    | Customer Integration Manager verify scope assignment successful | api-reporting added |
| 9    | Customer Integration Manager make API call to api-reporting | Request processed |
| 10    | Customer Integration Manager verify request succeeds | 200 OK returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-055

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-055 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can route requests to new tier backend after subscription tier upgrade.

## Preconditions

1. Customer has Free tier subscription
2. Free tier backend: https://backend-free.example.com
3. Premium tier backend: https://backend-premium.example.com
4. Subscription management system operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Initial Tier           | Free |
| Upgraded Tier          | Premium |
| Free Backend URL       | https://backend-free.example.com |
| Premium Backend URL    | https://backend-premium.example.com |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer verify customer tier is Free | Tier = Free confirmed |
| 2    | API Consumer make API request | Request sent |
| 3    | API Consumer verify routed to Free backend | Free backend receives request |
| 4    | API Consumer admin upgrades customer to Premium | Tier change submitted |
| 5    | API Consumer verify customer tier updated | Tier = Premium confirmed |
| 6    | API Consumer make API request | Request sent |
| 7    | API Consumer verify routed to Premium backend | Premium backend receives request |
| 8    | API Consumer verify different backend used | URL changed from Free to Premium |
| 9    | API Consumer verify no service interruption | All requests succeed |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-056

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-056 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can enforce tier-specific rate limits correctly.

## Preconditions

1. Free tier customer with API client
2. Premium tier customer with API client
3. Load generation capability available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Free Tier Limit        | 100 req/sec |
| Premium Tier Limit     | 1000 req/sec |
| Test Duration          | 10 seconds |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager generate 100 requests/sec as Free tier | Load sent |
| 2    | System API Manager monitor response codes | All 200 OK responses |
| 3    | System API Manager generate 101 requests/sec as Free tier | Overload sent |
| 4    | System API Manager monitor response codes | 429 Too Many Requests |
| 5    | System API Manager generate 1000 requests/sec as Premium | Premium load sent |
| 6    | System API Manager monitor response codes | All 200 OK responses |
| 7    | System API Manager generate 1001 requests/sec as Premium | Premium overload sent |
| 8    | System API Manager monitor response codes | 429 Too Many Requests |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-057

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-057 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can forward complete customer context to backend services.

## Preconditions

1. Integration client configured
2. Backend service with request logging
3. Network monitoring available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Customer ID            | cust_12345 |
| Subscription Tier      | Premium |
| Assigned Scopes        | [api-directory, api-incident] |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager prepare API request | Request prepared |
| 2    | System API Manager include valid credentials | Credentials included |
| 3    | System API Manager send request to APIm | Request submitted |
| 4    | System API Manager aPIm forwards request to backend | Backend receives request |
| 5    | System API Manager inspect forwarded headers | Headers examined |
| 6    | System API Manager verify X-Customer-ID header | Header = cust_12345 |
| 7    | System API Manager verify X-Subscription-Tier header | Header = Premium |
| 8    | System API Manager verify X-Assigned-Scopes header | Header = [api-directory, api-incident] |
| 9    | System API Manager verify backend processes context | Backend uses context |
| 10    | System API Manager backend returns data for tier | Premium data returned |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-058

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-058 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can log all integration client events to central audit system.

## Preconditions

1. Integration client created with scopes
2. Audit log system operational
3. Central log aggregation configured

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Client Name            | Workday Integration |
| Event Types            | CLIENT_CREATED, SCOPE_ADDED, SCOPE_REMOVED, CREDENTIAL_ROTATED |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager create integration client | Client created |
| 2    | System Security Manager query central audit system | Events found |
| 3    | System Security Manager verify CLIENT_CREATED event logged | Event present with timestamp |
| 4    | System Security Manager add scope to client | Scope added |
| 5    | System Security Manager query central audit system | SCOPE_ADDED event found |
| 6    | System Security Manager remove scope from client | Scope removed |
| 7    | System Security Manager query central audit system | SCOPE_REMOVED event found |
| 8    | System Security Manager rotate client credentials | Credentials rotated |
| 9    | System Security Manager query central audit system | CREDENTIAL_ROTATED event found |
| 10    | System Security Manager verify all events have timestamps | Timestamps present |
| 11    | System Security Manager verify actor/user identified | User/admin ID logged |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-059

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-059 |
| Priority      | Medium |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Email delivery verification requires access to email system or mailbox. Manual verification recommended by checking customer email or email service logs.

## Title

Customer Integration Manager can receive email notification on credential rotation.

## Preconditions

1. Integration client exists with active credentials
2. Customer email address configured
3. Email system operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Customer Email         | customer@example.com |
| Rotation Event         | Credential rotation |
| Expected Email         | Rotation notification |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager rotate integration client credentials | Rotation initiated |
| 2    | Customer Integration Manager verify new credentials generated | New key/secret issued |
| 3    | Customer Integration Manager monitor email inbox | Email received |
| 4    | Customer Integration Manager verify email from system | From: system@example.com |
| 5    | Customer Integration Manager verify email subject | Subject includes "Credentials Rotated" |
| 6    | Customer Integration Manager verify email content | Details about rotation included |
| 7    | Customer Integration Manager verify timestamp in email | Timestamp matches rotation time |
| 8    | Customer Integration Manager verify no secrets in email | API secret not included in email |
| 9    | Customer Integration Manager verify action items | Email includes next steps |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-060

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-060 |
| Priority      | Medium |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Email delivery and content verification requires email system access. Manual verification of email content and delivery recommended.

## Title

Customer Integration Manager can receive onboarding email with setup instructions.

## Preconditions

1. New integration client created
2. Customer email configured
3. Email system operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Customer Email         | newcustomer@example.com |
| Email Type             | Onboarding instructions |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager create new integration client | Client created |
| 2    | Customer Integration Manager monitor email inbox | Email received |
| 3    | Customer Integration Manager verify email source | From: system@example.com |
| 4    | Customer Integration Manager verify email subject | Subject: "Integration Client Created" |
| 5    | Customer Integration Manager verify client name in email | Client name mentioned |
| 6    | Customer Integration Manager verify setup instructions included | Step-by-step instructions |
| 7    | Customer Integration Manager verify documentation link | Link to developer docs |
| 8    | Customer Integration Manager verify support contact included | Support email/phone provided |
| 9    | Customer Integration Manager verify no secrets exposed | Credentials not in email |
| 10    | Customer Integration Manager verify clear call-to-action | Next steps clearly outlined |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-061

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-061 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Admin System Administrator can view integration client metrics on dashboard.

## Preconditions

1. Admin user logged in
2. Dashboard page accessible
3. Metrics collection operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Metric 1               | Total Clients |
| Metric 2               | Active Clients |
| Metric 3               | Requests Last 24h |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Admin System Administrator login as admin user | Admin logged in |
| 2    | Admin System Administrator navigate to dashboard | Dashboard page loads |
| 3    | Admin System Administrator locate client metrics section | Metrics visible |
| 4    | Admin System Administrator verify total clients count | Number displayed |
| 5    | Admin System Administrator verify active clients count | Number displayed |
| 6    | Admin System Administrator verify requests last 24h | Count displayed |
| 7    | Admin System Administrator verify metrics are current | Metrics recently updated |
| 8    | Admin System Administrator verify no sensitive data exposed | Only aggregated metrics |
| 9    | Admin System Administrator click on metrics for detail | Drill-down works |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-062

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-062 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can send accurate customer tier usage metrics to billing system.

## Preconditions

1. Customer with Free tier makes 500 API requests
2. Customer with Premium tier makes 5000 API requests
3. Billing system integration operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Free Customer Requests | 500 |
| Premium Customer Requests | 5000 |
| Billing Period         | Daily |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager free tier customer makes 500 requests | Requests processed |
| 2    | System API Manager premium tier customer makes 5000 requests | Requests processed |
| 3    | System API Manager query billing system metrics | Metrics recorded |
| 4    | System API Manager verify Free tier usage logged | 500 requests recorded |
| 5    | System API Manager verify Premium tier usage logged | 5000 requests recorded |
| 6    | System API Manager verify tier correctly identified | Tier labels correct |
| 7    | System API Manager verify timestamp logged | Time recorded |
| 8    | System API Manager generate billing report | Report generated |
| 9    | System API Manager verify usage accuracy in report | Metrics match actual usage |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-063

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-063 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Support Lead can rotate customer credentials on customer request.

## Preconditions

1. Support user account exists with appropriate permissions
2. Customer has integration client with active credentials
3. Support dashboard accessible

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| User Role              | Support Lead |
| Action                 | Rotate Credentials |
| Expected Result        | New credentials issued |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Support Lead support user logs in | Support user logged in |
| 2    | Support Lead search for customer | Customer found |
| 3    | Support Lead locate customer's client | Client visible |
| 4    | Support Lead click "Reset Credentials" (support view) | Confirmation shown |
| 5    | Support Lead support enters reason for reset | Reason recorded |
| 6    | Support Lead confirm credential reset | Reset initiated |
| 7    | Support Lead verify new credentials generated | New key/secret issued |
| 8    | Support Lead support provides new credentials | Credentials available for customer |
| 9    | Support Lead verify old credentials revoked | Old credentials no longer work |
| 10    | Support Lead verify audit log entry | Reset logged by support user |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-064

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-064 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can provide health and performance metrics to monitoring systems.

## Preconditions

1. Monitoring system configured with API access
2. Metrics endpoint (/metrics) accessible
3. Integration system operational

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Metrics Endpoint       | /metrics |
| Expected Metrics       | active_clients, failed_requests, avg_latency |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager call /metrics endpoint | Metrics endpoint responds |
| 2    | System API Manager verify response format | Prometheus format used |
| 3    | System API Manager verify active_clients metric | Metric present |
| 4    | System API Manager verify failed_requests metric | Metric present |
| 5    | System API Manager verify avg_latency metric | Metric present |
| 6    | System API Manager verify metric values are current | Recently updated values |
| 7    | System API Manager monitoring system scrapes metrics | Scrape succeeds |
| 8    | System API Manager metrics stored in monitoring system | Data persisted |
| 9    | System API Manager historical trends available | Time-series data available |


## Reviewer Comments

*To be completed during review.*

---

# PERFORMANCE & CONCURRENCY TEST CASES

---

# TC-FE735316-065

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-065 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can maintain API request latency SLA below 200ms at p99.

## Preconditions

1. Integration system fully operational
2. Load generation tool (JMeter) available
3. Monitoring and metrics collection configured

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Test Duration          | 10 minutes |
| Request Rate           | 100 requests/sec |
| SLA Threshold (p99)    | 200ms |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager configure JMeter for 100 req/sec | Load test configured |
| 2    | System API Manager run load test for 10 minutes | Test executing |
| 3    | System API Manager generate 60000 requests | Requests processed |
| 4    | System API Manager collect latency metrics | Latency data captured |
| 5    | System API Manager calculate p50 latency | Median latency computed |
| 6    | System API Manager calculate p95 latency | 95th percentile computed |
| 7    | System API Manager calculate p99 latency | 99th percentile computed |
| 8    | System API Manager verify p99 < 200ms | SLA met |
| 9    | System API Manager review error rate | Error rate < 1% |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-066

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-066 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can validate scopes with latency under 5ms.

## Preconditions

1. APIm scope validation layer operational
2. Requests with various scope combinations available
3. Latency monitoring enabled

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Validation Latency Target | < 5ms |
| Test Requests          | 10000 |
| Scope Complexity       | 1-10 scopes per request |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager generate 10000 requests | Requests prepared |
| 2    | System API Manager include various scope counts | 1-10 scopes per request |
| 3    | System API Manager measure scope validation time | Timing captured |
| 4    | System API Manager extract validation latency | Time extracted from logs |
| 5    | System API Manager calculate mean validation latency | Mean < 5ms |
| 6    | System API Manager calculate p99 validation latency | p99 < 5ms |
| 7    | System API Manager verify consistent performance | No degradation |
| 8    | System API Manager verify cache helps performance | Cached lookups fast |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-067

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-067 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can validate credentials with latency under 10ms.

## Preconditions

1. Credential validation layer operational
2. Credentials database accessible
3. Latency monitoring configured

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Validation Latency Target | < 10ms |
| Test Requests          | 10000 |
| Credential Types       | Valid, expired, revoked |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager generate 10000 requests | Requests prepared |
| 2    | System API Manager vary credential types tested | Valid, expired, revoked |
| 3    | System API Manager measure credential validation time | Timing captured |
| 4    | System API Manager calculate mean validation latency | Mean < 10ms |
| 5    | System API Manager calculate p99 validation latency | p99 < 10ms |
| 6    | System API Manager verify database query performance | Queries fast |
| 7    | System API Manager verify caching effective | Frequently used creds cached |
| 8    | System API Manager verify signature verification fast | HMAC calculation fast |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-068

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-068 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can handle 100 concurrent clients making simultaneous requests.

## Preconditions

1. JMeter configured for 100 concurrent threads
2. System fully operational
3. Resource monitoring available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Concurrent Clients     | 100 |
| Duration               | 5 minutes |
| Requests Per Client    | 50 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager configure JMeter: 100 threads | Load test setup complete |
| 2    | System API Manager start 100 concurrent clients | Clients connecting |
| 3    | System API Manager each client makes 50 requests | 5000 total requests |
| 4    | System API Manager monitor error rate | Error rate monitored |
| 5    | System API Manager monitor response times | Latencies captured |
| 6    | System API Manager monitor system resources | CPU, memory, connections |
| 7    | System API Manager verify no errors or timeouts | 0% error rate |
| 8    | System API Manager verify response times acceptable | Latencies within SLA |
| 9    | System API Manager verify system resources stable | No resource exhaustion |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-069

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-069 |
| Priority      | High |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Requires database setup with scaled test data (100k customers, 1M clients, 5M credentials) and direct database access for performance testing. Typically performed in staging environment, not production-like environment accessible via API.

## Title

System API Manager can maintain acceptable query performance with large datasets.

## Preconditions

1. Test database populated with scale data
2. Database profiling tools available
3. Query analyzer accessible

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Customers              | 100,000 |
| Integration Clients    | 1,000,000 |
| Credentials            | 5,000,000 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager load scaled test data into database | Data populated |
| 2    | System API Manager query: find client by ID | Query executes < 10ms |
| 3    | System API Manager query: list clients for customer | Query executes < 100ms |
| 4    | System API Manager query: find credential | Query executes < 5ms |
| 5    | System API Manager query: list all credentials | Query executes < 500ms |
| 6    | System API Manager query: find active clients | Query executes < 200ms |
| 7    | System API Manager verify index effectiveness | Indexes used by queries |
| 8    | System API Manager analyze query execution plans | Plans efficient |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-070

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-070 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can maintain stable memory under sustained 1000 req/sec load.

## Preconditions

1. System under test fully operational
2. Load generation at 1000 req/sec achievable
3. Memory profiling enabled

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Request Rate           | 1000 req/sec |
| Test Duration          | 60 minutes |
| Total Requests         | 3,600,000 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager record baseline memory usage | Baseline captured |
| 2    | System API Manager generate 1000 req/sec load | Load sustained |
| 3    | System API Manager monitor memory usage continuously | Memory tracked |
| 4    | System API Manager run test for 60 minutes | Full duration completed |
| 5    | System API Manager check memory at 10 min mark | Memory stable |
| 6    | System API Manager check memory at 30 min mark | Memory stable |
| 7    | System API Manager check memory at 60 min mark | Memory stable |
| 8    | System API Manager calculate memory growth rate | Growth < 1% per hour |
| 9    | System API Manager check for memory leaks | No leaks detected |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-071

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-071 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can handle concurrent credential rotation from multiple clients.

## Preconditions

1. 10 integration clients exist
2. Load generation tool available
3. Concurrency monitoring enabled

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Concurrent Rotations   | 10 |
| Total Rotations        | 100 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager prepare 10 clients for rotation | Clients ready |
| 2    | System API Manager initiate 10 concurrent rotations | All rotation requests sent |
| 3    | System API Manager monitor for race conditions | No races detected |
| 4    | System API Manager verify all 10 rotations succeed | All successful |
| 5    | System API Manager verify new credentials unique | Each client has unique new creds |
| 6    | System API Manager verify old credentials revoked | All old creds revoked |
| 7    | System API Manager repeat rotation cycle 10 times | Total 100 rotations |
| 8    | System API Manager verify no duplicates created | All credentials unique |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-072

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-072 |
| Priority      | Medium |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

Admin System Administrator can paginate through 10000 clients quickly.

## Preconditions

1. Test customer with 10,000 clients
2. Pagination configured (50 items per page = 200 pages)
3. Performance monitoring active

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Total Clients          | 10,000 |
| Page Size              | 50 |
| Total Pages            | 200 |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager load first page (page 1) | Page loads < 1 second |
| 2    | System API Manager load middle page (page 100) | Page loads < 1 second |
| 3    | System API Manager load last page (page 200) | Page loads < 1 second |
| 4    | System API Manager request page with search filter | Results load < 1 second |
| 5    | System API Manager request page with sort applied | Results load < 1 second |
| 6    | System API Manager navigate through 10 consecutive pages | Each < 1 second |
| 7    | System API Manager verify accuracy of pagination | Correct clients on each page |
| 8    | System API Manager verify no missing data | All 10,000 clients accessible |


## Reviewer Comments

*To be completed during review.*

---

# SECURITY & ACCESSIBILITY TEST CASES

---

# TC-FE735316-073

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-073 |
| Priority      | Critical |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System API Manager can validate HMAC-SHA256 signatures using constant-time comparison.

## Preconditions

1. Integration client with valid credentials
2. Signature generation capability available
3. Timing measurement tools available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Algorithm              | HMAC-SHA256 |
| Secret Length          | 64+ bytes |
| Comparison Method      | Constant-time |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System API Manager generate valid HMAC-SHA256 signature | Signature created |
| 2    | System API Manager submit request with valid signature | Request accepted (200 OK) |
| 3    | System API Manager generate invalid signature (1-bit flip) | Modified signature |
| 4    | System API Manager submit request with invalid signature | Request rejected (401) |
| 5    | System API Manager measure validation time for valid sig | Time recorded |
| 6    | System API Manager measure validation time for invalid sig | Time recorded |
| 7    | System API Manager calculate time difference | Difference calculated |
| 8    | System API Manager verify constant-time comparison | No timing difference |
| 9    | System API Manager test with multiple 1-bit variations | All timing equal |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-074

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-074 |
| Priority      | Critical |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Requires log inspection across multiple systems (application logs, database logs, audit logs). Manual inspection or log analysis tools needed to verify no secrets logged.

## Title

System Security Manager can prevent logging of API secrets in plain text.

## Preconditions

1. Application logging configured
2. Access to all log files (app, system, database, audit)
3. Log analysis tools available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Secrets Type           | API keys, secrets, tokens |
| Logging Check          | All log sources |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager create integration client | Client created |
| 2    | System Security Manager capture API key and secret | Credentials obtained |
| 3    | System Security Manager make API request with credentials | Request sent |
| 4    | System Security Manager examine application logs | No plain-text secrets |
| 5    | System Security Manager examine audit logs | Masked or hashed values |
| 6    | System Security Manager examine debug logs | No plain-text secrets |
| 7    | System Security Manager examine error logs | No sensitive data |
| 8    | System Security Manager search for API key value | Not found in any logs |
| 9    | System Security Manager search for API secret value | Not found in any logs |
| 10    | System Security Manager verify masked format used | Values like "key_****" or hashed |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-075

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-075 |
| Priority      | Medium |
| Automatable   | No |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Reason

Accessibility testing requires manual assessment with screen readers and keyboard navigation, plus automated scanning tools. Cannot be fully automated without specialized accessibility testing frameworks.

## Title

Customer Integration Manager can use accessible integration client management UI.

## Preconditions

1. Integration client UI accessible
2. Screen reader available (NVDA, JAWS)
3. Automated accessibility scanning tool available
4. Browser zoom and contrast settings available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Accessibility Standard | WCAG 2.1 Level AA |
| Screen Reader          | NVDA or JAWS |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | Customer Integration Manager navigate UI with keyboard only | All features accessible |
| 2    | Customer Integration Manager verify tab order logical | Tab order makes sense |
| 3    | Customer Integration Manager test with screen reader | Content announced clearly |
| 4    | Customer Integration Manager verify form labels associated | Labels linked to inputs |
| 5    | Customer Integration Manager test color contrast | Contrast >= 4.5:1 for text |
| 6    | Customer Integration Manager test with 200% zoom | Content readable at 200% |
| 7    | Customer Integration Manager verify focus indicators visible | Focus clear and visible |
| 8    | Customer Integration Manager run automated accessibility scan | No critical issues found |
| 9    | Customer Integration Manager test error messages announced | Errors announced to screen reader |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-076

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-076 |
| Priority      | Critical |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

System Security Manager can prevent customer credentials from accessing internal APIs.

## Preconditions

1. Customer API key and secret available
2. Internal API endpoint exists
3. Internal service credential available

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Customer API Key       | key_customer_xxxxx |
| Internal Endpoint      | /admin/internal |
| Expected Status        | 403 Forbidden |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | System Security Manager prepare request to internal API | Request prepared |
| 2    | System Security Manager include customer API key | Key included |
| 3    | System Security Manager generate signature | Signature calculated |
| 4    | System Security Manager send request with customer key | Request submitted |
| 5    | System Security Manager system checks if internal API | Internal API detected |
| 6    | System Security Manager system checks credential type | Customer credential identified |
| 7    | System Security Manager verify response code | 403 Forbidden returned |
| 8    | System Security Manager verify error message | "Not authorized for this operation" |
| 9    | System Security Manager attempt with internal service credential | Request prepared |
| 10    | System Security Manager send with internal credential | Request submitted |
| 11    | System Security Manager verify internal request accepted | 200 OK returned |


## Reviewer Comments

*To be completed during review.*

---

# END-TO-END TEST CASES

---

# TC-FE735316-077

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-077 |
| Priority      | Critical |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can successfully complete end-to-end Workday integration workflow from signup to credential rotation.

## Preconditions

1. Customer account can be created
2. Integration client creation available
3. Workday instance available for testing
4. Email system operational
5. Dashboard accessible
6. 90-day rotation alert system configured

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Customer               | E2E Test Customer |
| Client Name            | Workday Sync |
| Scopes                 | [api-directory] |
| Expected Test Duration | <5 minutes |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer customer signs up | Account created |
| 2    | API Consumer navigate to integrations | Integrations page loads |
| 3    | API Consumer create Workday client | Client created |
| 4    | API Consumer select api-directory scope | Scope selected |
| 5    | API Consumer receive credentials | Key/secret displayed once |
| 6    | API Consumer configure Workday with credentials | Workday configured |
| 7    | API Consumer test Workday connection | Connection test succeeds |
| 8    | API Consumer workday syncs directory data | Sync initiated |
| 9    | API Consumer view integration dashboard | Dashboard displays data |
| 10    | API Consumer monitor API calls | 100+ calls counted |
| 11    | API Consumer wait 90 days (simulated) | Rotation alert triggered |
| 12    | API Consumer receive rotation alert email | Email arrives |
| 13    | API Consumer rotate credentials | New key/secret generated |
| 14    | API Consumer update Workday with new credentials | New creds configured |
| 15    | API Consumer verify continued sync | Sync continues with new creds |


## Reviewer Comments

*To be completed during review.*

---

# TC-FE735316-078

## Metadata

| Field         | Value |
| ------------- | ------------------------------ |
| Test Case ID  | TC-FE735316-078 |
| Priority      | High |
| Automatable   | Yes |
| Status        | Draft |
| Review Status | Pending |
| Reviewer      | |
| Review Date   | |

## Title

API Consumer can complete end-to-end subscription upgrade and downgrade workflow with scope changes.

## Preconditions

1. Customer starts with Free tier
2. Free tier includes api-directory scope only
3. Premium tier includes api-incident and api-analytics
4. Upgrade functionality available
5. Downgrade functionality available
6. Backend tier-specific logic implemented

## Test Data

| Field                  | Value |
| ---------------------- | ------------------ |
| Initial Tier           | Free |
| Upgraded Tier          | Premium |
| Downgrade Tier         | Free |

## Test Steps

| Step | Action                              | Expected Result |
| ---- | ----------------------------------- | ------------------------- |
| 1    | API Consumer verify customer tier: Free | Tier = Free confirmed |
| 2    | API Consumer verify scopes: [api-directory] | Directory scope only |
| 3    | API Consumer attempt incident API call | Rejected (403) |
| 4    | API Consumer initiate upgrade to Premium | Upgrade initiated |
| 5    | API Consumer verify tier: Premium | Tier = Premium confirmed |
| 6    | API Consumer verify scopes: [api-directory, api-incident, api-analytics] | All scopes assigned |
| 7    | API Consumer attempt incident API call | Succeeds (200 OK) |
| 8    | API Consumer verify Premium features available | Features enabled |
| 9    | API Consumer verify backend tier: Premium | Backend receives Premium |
| 10    | API Consumer initiate downgrade to Free | Downgrade initiated |
| 11    | API Consumer verify tier: Free | Tier = Free confirmed |
| 12    | API Consumer verify scopes: [api-directory] | Only directory scope |
| 13    | API Consumer attempt incident API call | Rejected (403) |
| 14    | API Consumer verify no data loss | Customer data intact |


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









