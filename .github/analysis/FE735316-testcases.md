# Test Cases: FE#735316 - API Consumer and Scope Management

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
| 1    | Customer Integration Manager navigates to Integration Clients section | The Integration Clients page displays all active integration clients with their unique identifiers, names, assigned scopes, status, creation dates, and last usage timestamps |
| 2    | Customer Integration Manager clicks "New Client" button | The new integration client creation form displays with all required fields: Client Name, Description, and Scope Selection checkboxes for available API scopes |
| 3    | Customer Integration Manager enters client name "Workday Integration" | The Client Name field displays the entered value 'Workday Integration' and is editable for modifications |
| 4    | Customer Integration Manager enters description "Directory sync tool" | The Description field displays the entered value 'Directory sync tool' and is editable |
| 5    | Customer Integration Manager selects scopes: api-directory, api-incident | Both api-directory and api-incident scopes are marked as selected (checked) in the form's scope selection section |
| 6    | Customer Integration Manager clicks "Create" button | A new integration client is created successfully with a unique clientId, assigned to the customer, stored in the database, and added to the active clients list |
| 7    | Customer Integration Manager verifies API credentials display (one-time only) | A secure modal displays the generated credentials: a 32+ character alphanumeric API Key (key_xxxxx) and a 64+ character alphanumeric API Secret (secret_xxxxx), each displayed only once with a copy button |
| 8    | Customer Integration Manager closes credentials modal | The credentials modal closes after user acknowledges one-time display, and the newly created integration client appears in the Integration Clients list with status 'Active' |
| 9    | Customer Integration Manager verifies email sent to customer@example.com | An onboarding email is delivered to customer@example.com containing the generated API credentials, integration setup instructions, security best practices, and API documentation links |


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
| 1    | Customer Integration Manager navigates to Integration Clients section | The Integration Clients page loads and displays all active integration clients for the authenticated customer with their complete metadata |
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
| 2    | Customer Integration Manager clicks on specific client (Workday Integration) | The client details page loads displaying the client name, description, assigned scopes, credential history, creation timestamp, and available action buttons (Edit, Add Scope, Rotate Credentials, Revoke) |
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
| 1    | Customer Integration Manager navigates to client details page | The client details page loads displaying the client name, description, assigned scopes, credential history, creation timestamp, and available action buttons (Edit, Add Scope, Rotate Credentials, Revoke) |
| 2    | Customer Integration Manager clicks "Edit" button | The client edit form displays with all current client fields (Name, Description) pre-populated with existing values and ready for modification |
| 3    | Customer Integration Manager clears name field | Field becomes empty |
| 4    | Customer Integration Manager enters new name "Updated Workday Client" | New name entered |
| 5    | Customer Integration Manager clears description field | Description field cleared |
| 6    | Customer Integration Manager enters new description "Syncs directory data" | New description entered |
| 7    | Customer Integration Manager verifies clientId field is disabled | Client ID field read-only |
| 8    | Customer Integration Manager verifies scopes cannot be edited here | Scopes field disabled |
| 9    | Customer Integration Manager clicks "Save" button | The edited client information is submitted to the backend API and validated for accuracy |
| 10   | Customer Integration Manager verifies update confirmation message | "The system updates the client record in the database, displays a success notification, and refreshes the page to show the updated values" displayed |


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
| 2    | Customer Integration Manager clicks "Add Scope" button | A modal dialog appears displaying a list of available API scopes with checkboxes for each scope and a Confirm button |
| 3    | Customer Integration Manager verifies available scopes listed | api-incident appears in dropdown |
| 4    | Customer Integration Manager verifies api-directory not shown | Already assigned scopes excluded |
| 5    | Customer Integration Manager selects "api-incident" from dropdown | Scope selected in modal |
| 6    | Customer Integration Manager clicks "Confirm" button | The scope change request is submitted to the backend API and processed |
| 7    | Customer Integration Manager verifies success message | "A success notification confirms the scope has been added, the client's assigned scopes list is updated, and the client can now access that API scope" shown |
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
| 3    | Customer Integration Manager clicks X button next to api-incident | A confirmation dialog appears with details of the pending action and Clear buttons to Confirm or Cancel the operation |
| 4    | Customer Integration Manager verifies warning message | Warning about access revocation shown |
| 5    | Customer Integration Manager clicks "Confirm Remove" button | The scope removal request is submitted to the backend and permanently processed |
| 6    | Customer Integration Manager verifies success message | "A success notification confirms the scope has been removed, the client's scope list is updated to exclude the removed scope, and future requests for that scope receive 403 Forbidden" displayed |
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
| 1    | API Consumer prepares API request with valid credentials | The API request includes all required headers: Authorization (bearer token), X-Signature (HMAC-SHA256), Content-Type (application/json), and User-Agent |
| 2    | API Consumer generates HMAC-SHA256 signature | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
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
| 1    | System API Manager prepares API request with valid credentials | The API request includes all required headers: Authorization (bearer token), X-Signature (HMAC-SHA256), Content-Type (application/json), and User-Agent |
| 2    | System API Manager sets target endpoint to /api/v1/incident/list | The endpoint is configured and set as the target for the API request |
| 3    | System API Manager generates valid signature for client | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
| 4    | System API Manager sends request to APIm layer | The API request with the configured endpoint is transmitted to the APIm gateway |
| 5    | System API Manager checks credential scope | The APIm layer retrieves and checks the client's assigned scopes (api-directory only) |
| 6    | System API Manager identifies scope mismatch | The APIm identifies that the client has scope 'api-directory' but the request requires scope 'api-incident', resulting in a scope mismatch |
| 7    | System API Manager verifies request NOT forwarded to backend | Due to the scope mismatch, the request is NOT forwarded to the backend service; the rejection occurs at the APIm layer |
| 8    | System API Manager verifies 403 error response | The APIm returns HTTP 403 Forbidden to the client due to insufficient scope |
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
| 1    | Customer Integration Manager prepare valid API request | A valid API request is prepared with all required headers and payload for the Directory API endpoint |
| 2    | Customer Integration Manager send request to APIm | The API request is transmitted to the APIm gateway |
| 3    | Customer Integration Manager aPIm validates credentials | The APIm layer validates the client's API Key and HMAC-SHA256 signature, and validation succeeds |
| 4    | Customer Integration Manager aPIm validates scope | The APIm layer verifies that the client has the required 'api-directory' scope, and the scope check passes |
| 5    | Customer Integration Manager aPIm forwards request to backend | After all validations succeed, the APIm forwards the request to the backend service with customer context headers |
| 6    | Customer Integration Manager capture forwarded request headers | The forwarded request headers are captured and inspected, including the X-API-Product header |
| 7    | Customer Integration Manager verify X-API-Product header present | The X-API-Product header is present in the forwarded request |
| 8    | Customer Integration Manager verify header value | The X-API-Product header value is confirmed as 'Directory APIs' |
| 9    | Customer Integration Manager verify backend received header | The backend service receives the X-API-Product header and acknowledges successful receipt by processing the request with the correct product context |


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
| 1    | Customer Integration Manager authenticate as Premium tier customer | The customer is authenticated as a Premium tier user, and the customer context is set in the system |
| 2    | Customer Integration Manager prepare API request with credentials | An API request is prepared with valid API Key and calculated HMAC-SHA256 signature |
| 3    | Customer Integration Manager send request to APIm | The prepared API request is successfully transmitted to the APIm gateway |
| 4    | Customer Integration Manager aPIm validates credentials | The APIm layer validates the credentials, and validation succeeds |
| 5    | Customer Integration Manager aPIm retrieves subscription tier | The APIm retrieves the customer's subscription tier from the database and finds it to be 'Premium' |
| 6    | Customer Integration Manager aPIm includes tier in forwarded request | The APIm adds the X-Subscription-Tier header with value 'Premium' to the forwarded request |
| 7    | Customer Integration Manager forward request to backend | The APIm forwards the request with the X-Subscription-Tier header to the backend service |
| 8    | Customer Integration Manager capture forwarded request headers | The forwarded request headers are captured and inspected for the X-Subscription-Tier header |
| 9    | Customer Integration Manager verify X-Subscription-Tier header | The X-Subscription-Tier header is present in the forwarded request with value 'Premium', confirming the subscription tier is properly communicated to the backend |


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
| 1    | Customer Integration Manager navigate to client details page | The client details page loads displaying the client name, description, assigned scopes, credential history, creation timestamp, and available action buttons (Edit, Add Scope, Rotate Credentials, Revoke) |
| 2    | Customer Integration Manager click "Rotate Credentials" button | A confirmation dialog appears warning that the current API key will be immediately revoked and new credentials will be generated |
| 3    | Customer Integration Manager review rotation warning | A warning message is displayed explaining that rotating credentials will immediately revoke the current API key, existing integrations may fail, and new credentials must be updated in the consumer systems |
| 4    | Customer Integration Manager click "Confirm Rotation" | The credential rotation process is initiated, the system generates new API Key and Secret, and the old credentials are marked as revoked |
| 5    | Customer Integration Manager verify new credentials generated | New API Key (32+ characters) and new API Secret (64+ characters) are generated and displayed in a secure modal |
| 6    | Customer Integration Manager verify new key format (32+ chars) | The new API Key is properly formatted as a 32+ character alphanumeric string using only URL-safe characters (no special characters) |
| 7    | Customer Integration Manager verify new secret format (64+ chars) | The new API Secret is properly formatted as a 64+ character alphanumeric string using only URL-safe characters |
| 8    | Customer Integration Manager verify credentials display once | A modal displays the new credentials with a clear "This is your only chance to copy these credentials" warning and a copy button |
| 9    | Customer Integration Manager copy new credentials to clipboard | The new API Key and Secret are successfully copied to the system clipboard for use in integrations |
| 10    | Customer Integration Manager close credentials modal | The credentials modal closes after the user acknowledges one-time display, and the credentials are no longer retrievable from the system |
| 11    | Customer Integration Manager verify old credentials revoked | The old API key's status is updated to 'revoked' in the system, preventing any future API calls using that key from being accepted |


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
| 1    | System API Manager prepares API request with old credentials | An API request is prepared with the old (revoked) API Key and calculated HMAC-SHA256 signature using the old API Secret |
| 2    | System API Manager calculates signature using old secret | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
| 3    | System API Manager sends request with old credentials   | The API request is transmitted to the APIm gateway with the old credentials in the Authorization header |
| 4    | System API Manager performs APIm validation of old credentials      | The APIm layer performs credential validation, signature verification, and scope checking against the old credential set |
| 5    | System API Manager checks credential status     | The system queries the credential database and finds that the old API Key's status is 'revoked' |
| 6    | System API Manager verifies request rejected                   | The APIm layer rejects the request and returns HTTP 401 Unauthorized with error message 'Credential revoked or invalid' |
| 7    | System API Manager prepares API request with new credentials | An API request is prepared with the new API Key and calculated HMAC-SHA256 signature using the new API Secret |
| 8    | System API Manager calculates signature using new secret | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
| 9    | System API Manager sends request with new credentials   | The API request is transmitted to the APIm gateway with the new credentials in the Authorization header |
| 10   | System API Manager performs APIm validation of new credentials      | The APIm layer performs credential validation, signature verification, and scope checking, and all validations succeed |
| 11   | System API Manager checks credential status     | The system queries the credential database and finds that the new API Key's status is 'active' |
| 12   | System API Manager verifies request forwarded to backend        | The API request is successfully processed by the backend service and returns the appropriate HTTP status code (200 OK, 201 Created, etc.) (200 OK) |


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
| 1    | Customer Integration Manager navigate to client credentials section | The credentials management section loads displaying a list of all active credential sets for the client with options to revoke or rotate each credential |
| 2    | Customer Integration Manager locate specific credential | The specific credential 'credential_id_001' is visible in the credentials list with a revoke button next to it |
| 3    | Customer Integration Manager click revoke button next to credential | A confirmation dialog appears requesting final confirmation to permanently revoke the selected credential set with a warning about impact |
| 4    | Customer Integration Manager verify confirmation dialog | The confirmation dialog displays clearly asking the user to confirm the revocation action and warning about impact on active integrations |
| 5    | Customer Integration Manager click "Confirm Revoke" | The revocation request is submitted to the backend and processed |
| 6    | Customer Integration Manager verify success message | "The system confirms the credential has been permanently revoked, removes it from the active credentials list, logs the revocation event, and future requests using that credential receive 401 Unauthorized" |
| 7    | Customer Integration Manager verify credential status changed | The revoked credential is updated to status 'revoked' in the system and is removed from the active credentials list |
| 8    | Customer Integration Manager attempt API call with revoked key | An API request using the revoked credential is submitted and returns HTTP 401 Unauthorized |
| 9    | Customer Integration Manager attempt API call with other key | An API request using the remaining active credential 'credential_id_002' returns HTTP 200 OK with successful response |


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
| 1    | System API Manager verify customer subscription | The customer's subscription is verified and confirmed to include only 'Directory APIs' |
| 2    | System API Manager prepare API request to incident endpoint | An API request is prepared targeting the 'Incident & Impacts Export API' endpoint |
| 3    | System API Manager include valid credentials and signature | Valid API credentials (Key and HMAC-SHA256 signature) are included in the request headers |
| 4    | System API Manager send request to APIm | The API request is transmitted to the APIm gateway |
| 5    | System API Manager aPIm validates credentials | The APIm layer validates the credentials, and validation succeeds |
| 6    | System API Manager aPIm validates scope | The APIm layer validates that the client has the required scope, and scope validation passes |
| 7    | System API Manager aPIm checks subscription entitlement | The APIm layer checks the customer's subscription products and finds that 'Incident & Impacts Export API' is NOT included in the customer's subscription, failing the entitlement check |
| 8    | System API Manager request rejected | The request is rejected by the APIm and returns HTTP 403 Forbidden due to subscription entitlement failure |
| 9    | System API Manager verify error message | The error response message indicates "Product not in subscription" or similar text informing the customer that they don't have access to this API product |


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
| 1    | System API Manager send request with too short key (3 chars) | An API request is sent with an API key that is only 3 characters long, which fails format validation |
| 2    | System API Manager aPIm validates key format | The APIm layer validates the API key format and finds it does not meet the required format specifications (fails validation) |
| 3    | System API Manager verify rejection | The request is rejected and returns HTTP 400 Bad Request |
| 4    | System API Manager verify error message | The error response includes message "Invalid API key format" or similar text describing the format violation |
| 5    | System API Manager send request with empty key | An API request is sent without an API key in the Authorization header |
| 6    | System API Manager aPIm validates key format | The APIm layer validates the API key and finds that it is missing or empty (fails validation) |
| 7    | System API Manager verify rejection | The request is rejected and returns HTTP 400 Bad Request |
| 8    | System API Manager send request with special characters | An API request is sent with an API key containing special characters like @#$%^&*() |
| 9    | System API Manager aPIm validates key format | The APIm layer validates the API key and finds that it contains invalid characters (fails validation) |
| 10    | System API Manager verify rejection | The request is rejected and returns HTTP 400 Bad Request |
| 11    | System API Manager send request with spaces in key | An API request is sent with an API key containing spaces |
| 12    | System API Manager aPIm validates key format | The APIm layer validates the API key and finds that it contains invalid whitespace characters (fails validation) |


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
| 1    | Customer Integration Manager prepare request body | The request body is prepared and set to {"action": "list_users"} |
| 2    | Customer Integration Manager calculate HMAC-SHA256 with secret | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
| 3    | Customer Integration Manager include signature in X-Signature header | The calculated HMAC-SHA256 signature is included in the X-Signature header of the request |
| 4    | Customer Integration Manager send request with valid signature | The API request with the valid signature is transmitted to the APIm gateway |
| 5    | Customer Integration Manager aPIm calculates signature | The APIm layer recalculates the HMAC-SHA256 signature using the same secret and request payload |
| 6    | Customer Integration Manager aPIm compares signatures (constant-time) | The APIm performs a constant-time comparison between the submitted signature and the calculated signature, and they match |
| 7    | Customer Integration Manager request accepted | The request is accepted and returns HTTP 200 OK with the successful response |
| 8    | Customer Integration Manager modify request body | The request body is modified after the signature was calculated (body altered) |
| 9    | Customer Integration Manager send request with modified body | The API request with the original signature but modified body is transmitted to the APIm |
| 10    | Customer Integration Manager aPIm recalculates signature | The APIm layer recalculates the HMAC-SHA256 signature using the modified body and secret |
| 11    | Customer Integration Manager aPIm compares signatures | The APIm performs constant-time comparison and finds that the submitted signature and recalculated signature DO NOT match |
| 12    | Customer Integration Manager request rejected | The request is rejected and returns HTTP 401 Unauthorized due to signature mismatch |


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
| 1    | API Consumer navigate to client creation form | The integration client creation form loads displaying all required input fields (Client Name, Description, Scope Selection) |
| 2    | API Consumer enter name: "Workday-Integration" | The Client Name field displays the entered value 'Workday-Integration' and is editable for modifications |
| 3    | API Consumer enter description | The Description field is populated with the provided text |
| 4    | API Consumer select scopes | The required API scopes are selected from the available scope checkboxes |
| 5    | API Consumer click "Create" button | The create request is submitted and backend validation is triggered |
| 6    | API Consumer system checks for duplicate name | The backend system checks the customer's account for any existing clients with the name 'Workday-Integration' |
| 7    | API Consumer system finds existing client | The backend finds an existing integration client with the matching name in the customer's account |
| 8    | API Consumer request rejected | The client creation request is rejected and blocked by the system |
| 9    | API Consumer verify error message | The error response displays "Client name already exists" indicating the duplicate name violation |
| 10    | API Consumer try with different case: "workday-integration" | The user attempts to create a client with the same name in different case (lowercase) |
| 11    | API Consumer system performs case-insensitive check | The backend performs a case-insensitive name comparison and finds a match with the existing client name |
| 12    | API Consumer request rejected | The client creation request is rejected due to the case-insensitive duplicate name violation |


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
| 1    | Read-Only User navigate to client details page | The client details page loads and displays all client information including name, description, assigned scopes, and credential history |
| 2    | Read-Only User click "Audit Log" tab or button | The Audit Log tab or section opens displaying a chronological list of all integration client actions including creation, modifications, scope changes, and credential rotations with timestamps |
| 3    | Read-Only User verify log displays events | All events are displayed in reverse chronological order (newest first) |
| 4    | Read-Only User verify CLIENT_CREATED event | The CLIENT_CREATED event is logged showing the client creation details |
| 5    | Read-Only User verify SCOPE_ADDED event | SCOPE_ADDED events are logged showing which scopes were added and when |
| 6    | Read-Only User verify SCOPE_REMOVED event | SCOPE_REMOVED events are logged showing which scopes were removed |
| 7    | Read-Only User verify CREDENTIAL_ROTATED event | CREDENTIAL_ROTATED events are logged showing credential rotation history |
| 8    | Read-Only User verify CREDENTIAL_REVOKED event | CREDENTIAL_REVOKED events are logged showing revoked credentials and revocation times |
| 9    | Read-Only User verify timestamp for each event | Each event displays an accurate, properly formatted timestamp (ISO 8601 format) |
| 10    | Read-Only User verify user/actor for each event | Each event shows the actor/user who performed the action (Admin, Support Lead, System, etc.) |
| 11    | Read-Only User verify event details | Each event record includes before/after values for modified fields (e.g., old scope vs. new scope) |


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
| 1    | API Consumer make initial API request | The API request is successfully processed by the backend service and returns HTTP 200 OK with response headers including rate limit information |
| 2    | API Consumer capture response headers | The response headers are extracted and parsed containing X-RateLimit-Limit, X-RateLimit-Remaining, and X-RateLimit-Reset headers |
| 3    | API Consumer verify X-RateLimit-Limit header | The X-RateLimit-Limit header is present with value 100 (requests per second limit) |
| 4    | API Consumer verify X-RateLimit-Remaining header | The X-RateLimit-Remaining header is present with value 99 (one request used) |
| 5    | API Consumer verify X-RateLimit-Reset header | The X-RateLimit-Reset header is present with a unix timestamp indicating when the rate limit window resets |
| 6    | API Consumer make second API request | The API request is successfully processed by the backend service and returns HTTP 200 OK with updated rate limit headers |
| 7    | API Consumer capture response headers | The response headers are extracted showing updated rate limit values |
| 8    | API Consumer verify X-RateLimit-Remaining | The X-RateLimit-Remaining header shows value 98 (decremented by one from previous request) |
| 9    | API Consumer make third API request | The API request is successfully processed by the backend service and returns HTTP 200 OK with further updated rate limit headers |
| 10    | API Consumer capture response headers | The response headers are extracted showing further updated rate limit values |
| 11    | API Consumer verify X-RateLimit-Remaining | The X-RateLimit-Remaining header shows value 97 (decremented again) |
| 12    | API Consumer verify reset time accuracy | The X-RateLimit-Reset timestamp is accurate and matches the configured quota window reset time |


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
| 2    | System API Manager navigate to Integration Clients | The Integration Clients list page loads displaying all active clients with their metadata and relevant action options |
| 3    | System API Manager locate "New Client" button | The button is either visible in the UI or hidden from the UI based on the user's permission level and role |
| 4    | System API Manager verify button state | The button is either disabled (greyed out and unclickable) or completely hidden from the UI based on role-based access control restrictions |
| 5    | System API Manager attempt to click button | The button click produces no action, no error message is displayed to the user, and the unauthorized operation is silently prevented or tooltip shown |
| 6    | System API Manager attempt direct API call to create | A POST request to /clients endpoint is submitted attempting to create a new integration client |
| 7    | System API Manager aPIm checks user permissions | The APIm layer checks the user's role-based access control permissions and finds that read-only users do not have permission to create clients |
| 8    | System API Manager verify API response | The API returns HTTP 403 Forbidden status code |
| 9    | System API Manager verify error message | The error response includes message "Insufficient permissions" indicating the user lacks the required permission |
| 10    | System API Manager verify no client created | The Integration Clients list is verified to remain unchanged with no new client added |


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
| 1    | API Consumer login as read-only user | The read-only user is successfully authenticated and logged into the system with read-only permissions |
| 2    | API Consumer navigate to client details | The client details page loads displaying the client name, description, assigned scopes, credential history, creation timestamp, and available action buttons (Edit, Add Scope, Rotate Credentials, Revoke) |
| 3    | API Consumer locate "Add Scope" button | The button is either visible in the UI or hidden from the UI based on the user's permission level and role |
| 4    | API Consumer verify button is disabled | The button is visually disabled (greyed out with reduced opacity) and is not clickable or actionable |
| 5    | API Consumer attempt to click "Add Scope" | The button click produces no action, no error message is displayed to the user, and the unauthorized operation is silently prevented |
| 6    | API Consumer attempt direct API call to add scope | A PUT request to /clients/{id}/scopes is submitted to add the 'api-incident' scope |
| 7    | API Consumer aPIm checks permissions | The APIm layer checks the user's role-based access control permissions and finds the user lacks permission to modify scopes |
| 8    | API Consumer verify API response | The API returns HTTP 403 Forbidden status code |
| 9    | API Consumer verify scope list unchanged | The client's scope list remains [api-directory] with no new scopes added |
| 10    | API Consumer verify audit log | The unauthorized modification attempt is logged in the system audit trail |


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
| 3    | Read-Only User locate "Rotate Credentials" button | The button is either visible in the UI or hidden from the UI based on the user's permission level and role |
| 4    | Read-Only User verify button is disabled | The button is visually disabled (greyed out with reduced opacity) and is not clickable or actionable |
| 5    | Read-Only User attempt to click button | The button click produces no action, no error message is displayed to the user, and the unauthorized operation is silently prevented |
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
| 1    | Admin System Administrator login as admin user | The admin user is successfully authenticated and logged into the system with all admin privileges granted |
| 2    | Admin System Administrator navigate to customer management | The Customer Management interface loads displaying a list of all registered customer accounts |
| 3    | Admin System Administrator select Customer-ABC | Customer-ABC is selected and the customer details panel displays showing account information |
| 4    | Admin System Administrator click "Manage Integration Clients" | The Integration Clients management interface loads displaying all clients created by Customer-ABC |
| 5    | Admin System Administrator verify admin can view all clients | All integration clients are visible with their complete metadata including name, ID, scopes, and status |
| 6    | Admin System Administrator click "Create Client" button | The new integration client creation form displays with all required fields ready for input |
| 7    | Admin System Administrator create new client for Customer-ABC | A new integration client is successfully created with a unique identifier, assigned to the customer, stored in the database, and appears immediately in the clients list |
| 8    | Admin System Administrator click "Edit" on existing client | The client edit form displays with all current client fields (Name, Description) pre-populated with existing values and ready for modification |
| 9    | Admin System Administrator modify client details | The client details are successfully modified and saved to the database |
| 10    | Admin System Administrator click "Delete" on existing client | A confirmation dialog appears asking the admin to confirm deletion of the client |
| 11    | Admin System Administrator verify all actions logged | The audit log displays records of all admin actions (create, edit, delete) with timestamps and actor information |


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
| 1    | Admin System Administrator login as support lead | The support lead user is successfully authenticated and logged into the system with support-level permissions (read-only access with limited write capabilities) |
| 2    | Admin System Administrator navigate to customer lookup | The Customer Lookup interface loads displaying a search form to find customer accounts |
| 3    | Admin System Administrator search for customer | The customer search returns matching results and displays the target customer account |
| 4    | Admin System Administrator click "View Clients" for customer | The Integration Clients view for that customer loads displaying all clients without sensitive information |
| 5    | Admin System Administrator verify support can see client names | All client names are displayed and visible to the support lead |
| 6    | Admin System Administrator verify support can see scopes | All assigned API scopes are displayed for each client |
| 7    | Admin System Administrator verify support can see status | Each client's status (Active, Suspended, Retired) is displayed |
| 8    | Admin System Administrator verify support can see lastUsedAt | The last usage timestamp is displayed for each client |
| 9    | Admin System Administrator click on specific client | The client details page opens with limited information available to the support lead |
| 10    | Admin System Administrator verify API secret is masked | The API secret is either masked (hidden with asterisks) or completely hidden from the support lead's view |
| 11    | Admin System Administrator verify credentials not visible | No credential details, keys, or secrets are visible to the support lead on any interface |


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
| 1    | API Consumer login as support lead | The support lead user is successfully authenticated and logged into the system with support-level permissions |
| 2    | API Consumer navigate to customer's client | The customer's client details page loads displaying client information, scopes, and action buttons based on the support lead's limited permissions |
| 3    | API Consumer locate "Rotate Credentials" button | The button is either visible in the UI or hidden from the UI based on the support lead's permission level and role |
| 4    | API Consumer verify button is disabled | The button is either disabled (greyed out and unclickable) or completely hidden from the UI based on role-based access control restrictions |
| 5    | API Consumer attempt direct API call to rotate | A POST request to /clients/{id}/rotate-credentials endpoint is submitted attempting to generate new credentials |
| 6    | API Consumer aPIm checks permissions | The APIm layer checks the support lead's role-based access control permissions and finds the user lacks permission to rotate credentials |
| 7    | API Consumer verify API response | The API returns HTTP 403 Forbidden status code |
| 8    | API Consumer verify credentials unchanged | The integration client's credentials remain unchanged with the old credentials still active and usable |


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
| 1    | API Consumer prepare API request with body | An API request is prepared with the body {"action": "list"} |
| 2    | API Consumer include valid API key in request | A valid API key 'key_valid_xxxxx' is included in the request Authorization header |
| 3    | API Consumer omit X-Signature header | The required X-Signature header is intentionally omitted from the request |
| 4    | API Consumer send request | The API request without a signature header is transmitted to the APIm gateway |
| 5    | API Consumer aPIm validates request | The APIm layer begins validation of the incoming request |
| 6    | API Consumer aPIm checks for signature header | The APIm checks for the required X-Signature header and finds it is missing from the request |
| 7    | API Consumer verify response code | The API returns HTTP 401 Unauthorized status code |
| 8    | API Consumer verify error message | The error response includes message "Missing required signature" indicating the signature header is required |
| 9    | API Consumer prepare request with key and signature | An API request is prepared including both the valid API key and a calculated X-Signature header |
| 10    | API Consumer send request with signature | The API request with both key and signature is transmitted to the APIm gateway |
| 11    | API Consumer aPIm validates request | The APIm layer validates the request with both credentials present, and validation succeeds |
| 12    | API Consumer verify response code | The API returns HTTP 200 OK status code with the successful response data |


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
| 1    | API Consumer login as Customer A | Customer A is successfully authenticated and logged into the system with their customer_id=111 context |
| 2    | API Consumer attempt to access Customer B's client via direct URL | An attempt is made to access Customer B's resources by manipulating the request parameters |
| 3    | API Consumer uRL manipulation (change customer_id) | A direct URL is constructed with /clients?customer_id=222 attempting to change the customer context to Customer B |
| 4    | API Consumer send request to view Customer B's client | The request to /clients/client_id_xyz?customer_id=222 is submitted to the APIm gateway |
| 5    | API Consumer aPIm checks customer context | The APIm layer verifies the customer context from the authenticated session and finds customer_id=111 |
| 6    | API Consumer aPIm validates ownership | The APIm compares the customer context (customer_id=111) with the requested resource owner (customer_id=222) and finds they don't match, failing the ownership check |
| 7    | API Consumer verify response code | The API returns HTTP 403 Forbidden status code |
| 8    | API Consumer verify error message | The error response includes message "Not authorized to access this resource" indicating the customer doesn't own the resource |
| 9    | API Consumer attempt API call to modify Customer B's client | A PUT request to modify Customer B's client is submitted |
| 10    | API Consumer verify request rejected | The request is rejected and returns HTTP 403 Forbidden due to multi-tenant isolation enforcement |


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
| 1    | System Security Manager login as Customer A | An authentication token is generated for Customer A with claims including customer_id=111 |
| 2    | System Security Manager decode token (JWT) | The JWT token is decoded and the claims are visible, showing the token structure and embedded customer context |
| 3    | System Security Manager verify customer_id in token | The customer_id claim in the JWT token is verified to be customer_id=111 |
| 4    | System Security Manager attempt to use Customer A token for Customer B API call | An attempt is made to use Customer A's authentication token to access Customer B's resources |
| 5    | System Security Manager send request to /api/v1/clients with Customer A token | An API request to /api/v1/clients is submitted with Customer A's authentication token |
| 6    | System Security Manager add header: X-Customer-ID = customer_id_222 | The request header is manipulated to include X-Customer-ID=customer_id_222, attempting to override the customer context |
| 7    | System Security Manager send request | The modified request with mismatched customer context is transmitted to the APIm gateway |
| 8    | System Security Manager aPIm validates token scope | The APIm layer validates the token scope and customer context from the token claims |
| 9    | System Security Manager aPIm compares token customer_id with header | The APIm compares the token's customer_id (111) with the X-Customer-ID header value (222) and detects a mismatch |
| 10    | System Security Manager verify response code | The API returns HTTP 403 Forbidden status code |
| 11    | System Security Manager verify error message | The error response includes message "Not authorized for this customer" indicating the customer context mismatch |


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
| 1    | Customer Integration Manager verify API key is past expiration | The API key expiration date is verified in the database to be more than 90 days in the past, confirming the key is past the 90-day expiration threshold |
| 2    | Customer Integration Manager prepare API request with expired key | An API request is prepared to be sent with the expired key |
| 3    | Customer Integration Manager include expired key in request | The expired API key is included in the request Authorization header |
| 4    | Customer Integration Manager generate signature | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
| 5    | Customer Integration Manager send request with expired key | The API request with the expired key and signature is transmitted to the APIm gateway |
| 6    | Customer Integration Manager aPIm validates credentials | The APIm layer performs credential validation on the expired API key |
| 7    | Customer Integration Manager aPIm checks key expiration date | The APIm checks the API key's creation date and expiration threshold (90 days) and finds the key is expired (fails the expiration check) |
| 8    | Customer Integration Manager verify response code | The API returns HTTP 401 Unauthorized status code |
| 9    | Customer Integration Manager verify error message | The error response includes message "API key expired. Please rotate credentials" informing the client to generate new credentials |
| 10    | Customer Integration Manager verify request not forwarded | The request is not forwarded to the backend service; the rejection occurs at the APIm layer due to expired credentials |


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
| 1    | System API Manager verify client is initially active | The client status in the database is confirmed as 'active' |
| 2    | System API Manager admin suspends the client | The admin user triggers the suspension action through the management interface |
| 3    | System API Manager verify client status changed | The client status is updated to 'suspended' in the database with suspension timestamp |
| 4    | System API Manager prepare API request with client credentials | An API request is prepared with the suspended client's credentials and calculated signature |
| 5    | System API Manager send request to APIm | The API request is transmitted to the APIm gateway with the suspended client's credentials |
| 6    | System API Manager aPIm validates credentials | The APIm layer validates the credentials and confirms they are valid but associated with a suspended client |
| 7    | System API Manager aPIm checks client status | The APIm layer checks the client status in the database and finds it is 'suspended', failing the status check |
| 8    | System API Manager verify response code | The API request is rejected and the APIm returns HTTP 403 Forbidden status code |
| 9    | System API Manager verify error message | "Client is suspended. Contact support" |
| 10    | System API Manager verify backend not contacted | The request is not forwarded to the backend service; the rejection occurs at the APIm layer |


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
| 1    | System API Manager navigate to client details | The client details page loads displaying the client information, assigned scopes, credential history, creation timestamp, and retirement/management action buttons |
| 2    | System API Manager click "Retire Client" button | A confirmation dialog appears with details of the pending action and Clear buttons to Confirm or Cancel the operation |
| 3    | System API Manager review retirement warning | A warning message is displayed explaining that retirement is permanent, all API requests will be rejected, and this action cannot be undone |
| 4    | System API Manager click "Confirm Retire" | The client retirement process completes, the client is marked as 'Retired' (not active), and it no longer accepts new API requests |
| 5    | System API Manager verify client status | The client status in the database is confirmed as 'retired', and the retirement timestamp is recorded |
| 6    | System API Manager verify client removed from active list | The retired client no longer appears in the active Integration Clients list, though it may be viewable in a retired/archived clients section |
| 7    | System API Manager attempt to find reactivation option | No 'Reactivate', 'Restore', or 'Undo Retirement' button is present in the UI |
| 8    | System API Manager search for "Reactivate" UI option | No reactivation option is found anywhere in the management interface |
| 9    | System API Manager attempt API call to reactivate | An API call is sent to attempt reactivation (e.g., PUT /clients/{id}/reactivate) |
| 10    | System API Manager verify API response | The API returns HTTP 400 Bad Request or 404 Not Found error, preventing reactivation |
| 11    | System API Manager verify error message | "Cannot reactivate retired client" |
| 12    | System API Manager verify customer can create new client | The customer can still create new integration clients; retirement is permanent and irreversible, but new clients can be added |


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
| 1    | API Consumer prepare API request | An API request is prepared with all standard headers except the API key will be intentionally omitted |
| 2    | API Consumer leave API key field empty | The API Key header field or body parameter is left empty/blank or intentionally omitted |
| 3    | API Consumer include valid signature | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
| 4    | API Consumer send request | The API request with omitted API Key is transmitted to the APIm gateway |
| 5    | API Consumer aPIm validates request format | The APIm layer validates the overall request format and structure |
| 6    | API Consumer aPIm checks for API key | The APIm layer checks for the presence of the required API Key header/parameter and finds it missing, failing validation |
| 7    | API Consumer verify response code | The APIm layer rejects the request and returns HTTP 400 Bad Request status code |
| 8    | API Consumer verify error message | "API key is required" |
| 9    | API Consumer prepare request without key header | A new request is prepared with the API Key header completely omitted (not even present in headers) |
| 10    | API Consumer send request | The API request is sent to the APIm gateway without an API Key header |
| 11    | API Consumer verify response code | The APIm layer rejects the request and returns HTTP 400 Bad Request status code |


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
| 1    | System Security Manager create integration client | An integration client creation request is submitted through the API or UI |
| 2    | System Security Manager observe generated API key | The generated API Key is captured and inspected for character composition |
| 3    | System Security Manager inspect key characters | Each character in the generated API Key is examined against a character whitelist |
| 4    | System Security Manager verify no special characters | The generated API Key contains no special characters such as @, #, $, %, ^, &, or * |
| 5    | System Security Manager verify no spaces | The generated API Key contains no whitespace, tab, or space characters |
| 6    | System Security Manager verify only URL-safe characters | The generated API Key contains only URL-safe characters: alphanumeric (a-z, A-Z, 0-9), hyphen (-), and underscore (_) |
| 7    | System Security Manager test generated key in URL encoding | The generated API Key is used in a URL context to verify it doesn't require percent-encoding |
| 8    | System Security Manager verify no encoding needed | The API Key remains unchanged when used in URLs, confirming it contains no characters requiring URL percent-encoding |
| 9    | System Security Manager create multiple clients | Multiple integration clients are created to generate and inspect several API Keys |
| 10    | System Security Manager inspect all keys | Each of the generated API Keys is inspected to confirm all contain only URL-safe characters |


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
| 1    | API Consumer load integration clients list | The first page of the integration clients list loads successfully displaying the initial set of clients and pagination controls (Previous/Next buttons) |
| 2    | API Consumer verify pagination controls visible | Pagination controls are displayed with Previous and Next buttons, enabled or disabled based on the current page position (first page or last page) |
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
| 1    | System API Manager navigate to client creation form | The client creation form loads displaying the Client Name input field and other required fields |
| 2    | System API Manager generate 500-character string | A test string containing 500 characters is generated for testing length validation |
| 3    | System API Manager attempt to enter string in name field | The 500-character string is attempted to be entered into the Client Name field; depending on implementation, either the UI truncates input or the field rejects excess characters |
| 4    | System API Manager submit client creation form | The form submission is attempted with the name field containing or attempting to contain the 500-character string |
| 5    | System API Manager verify validation error | A validation error is displayed by the system indicating the name exceeds the maximum length |
| 6    | System API Manager verify error message | "Client name cannot exceed 100 characters" |
| 7    | System API Manager verify client not created | The client is not created and does not appear in the clients list; the database shows no new client entry |
| 8    | System API Manager enter 100-character name (valid) | A valid client name containing exactly 100 characters is entered into the Client Name field |
| 9    | System API Manager submit form | The form is submitted with the valid 100-character name |
| 10    | System API Manager verify client created | A new integration client is successfully created with a unique identifier, assigned to the customer, stored in the database, and appears immediately in the clients list |


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
| 1    | Customer Integration Manager navigate to client creation form | The client creation form loads displaying the Client Name input field with Unicode input support |
| 2    | Customer Integration Manager enter Unicode name: "Интеграция 😊 العربية" | The Unicode string containing Russian text, an emoji, and Arabic text is entered and displayed correctly in the Client Name field |
| 3    | Customer Integration Manager submit client creation | The form is submitted with the Unicode client name |
| 4    | Customer Integration Manager verify client created | A new integration client is successfully created with a unique identifier, assigned to the customer, stored in the database with UTF-8 encoding, and appears immediately in the clients list |
| 5    | Customer Integration Manager retrieve client details | The client details page loads displaying the client information |
| 6    | Customer Integration Manager verify name displayed correctly | The client name "Интеграция 😊 العربية" is displayed correctly on the details page with all Unicode characters properly rendered |
| 7    | Customer Integration Manager verify no encoding errors | All characters render properly without encoding errors, mojibake, or character substitution; special characters and emoji display as intended |
| 8    | Customer Integration Manager create client with Name 2 | The second Unicode string "中文 クライアント عميل" containing Chinese, Japanese, and Arabic text is entered into the Client Name field |
| 9    | Customer Integration Manager submit form | The form is submitted with the second Unicode client name |
| 10    | Customer Integration Manager verify second client created | A second integration client is successfully created with the Chinese/Japanese/Arabic name, stored in the database with UTF-8 encoding, and appears in the clients list |
| 11    | Customer Integration Manager verify name displays correctly | The client name "中文 クライアント عميل" is displayed correctly on the details page with all Unicode characters properly rendered |


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
| 1    | System API Manager navigate to client creation | The client creation form loads displaying all available scopes in a dropdown or selection list |
| 2    | System API Manager look for scope "api-directory.v2-beta" in dropdown | The scope "api-directory.v2-beta" is present and listed in the available scopes dropdown |
| 3    | System API Manager select scope "api-directory.v2-beta" | The scope "api-directory.v2-beta" is selected from the dropdown and is marked as selected in the form |
| 4    | System API Manager create client with this scope | The client creation form is submitted with the "api-directory.v2-beta" scope selected and assigned to the new client |
| 5    | System API Manager verify scope assigned correctly | The created client details page displays the assigned scope as "api-directory.v2-beta" with version information correctly shown |
| 6    | System API Manager make API request with this scope | An API request is prepared using credentials from the client with the "api-directory.v2-beta" scope |
| 7    | System API Manager include scope in validation | The scope "api-directory.v2-beta" is included in the API request validation process |
| 8    | System API Manager verify scope parsing | The API Product scope 'api-directory.v2-beta' is correctly parsed, with version/beta information extracted and validated |
| 9    | System API Manager verify request routed correctly | The APIm correctly routes the request to the appropriate backend service (Directory API v1beta1) based on scope parsing |
| 10    | System API Manager verify scope validation passes | The scope validation check confirms the client has the 'api/directory/v1beta1' scope and authorization succeeds |


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
| 1    | API Consumer verify client has current scopes | The client's current scopes are verified as [api-directory, api-incident] in the system |
| 2    | API Consumer initiate Thread A (add scope) | Thread A is initiated to add 'api-analytics' scope to the client |
| 3    | API Consumer initiate Thread B (remove scope) | Thread B is initiated to remove 'api-incident' scope from the client |
| 4    | API Consumer submit both requests simultaneously | Both scope modification requests (add and remove) are submitted to the system at exactly the same time |
| 5    | API Consumer thread A adds api-analytics | Thread A's add scope request is processed, adding 'api-analytics' to the client's scope list |
| 6    | API Consumer thread B removes api-incident | Thread B's remove scope request is processed, removing 'api-incident' from the client's scope list |
| 7    | API Consumer monitor for race conditions | Both concurrent requests are monitored to ensure no race conditions or data corruption occurs |
| 8    | API Consumer verify final scope list | The client's final scope list is verified as [api-directory, api-analytics], confirming both operations completed successfully |
| 9    | API Consumer verify both operations reflected | Both the add-scope and remove-scope operations are confirmed to be reflected in the final client configuration |
| 10    | API Consumer check audit log for events | The audit log is checked and both SCOPE_ADDED and SCOPE_REMOVED events are recorded |
| 11    | API Consumer verify event order | The audit log events are ordered correctly showing the sequence in which the concurrent operations were processed |


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
| 1    | API Consumer disable backend Directory API | The backend Directory API service is stopped or made unavailable for testing |
| 2    | API Consumer prepare client API request | An API request is prepared with valid client credentials and payload |
| 3    | API Consumer send request to APIm | The prepared request is sent to the APIm gateway |
| 4    | API Consumer aPIm validates credentials | The APIm layer validates the client credentials and signature, and validation succeeds |
| 5    | API Consumer aPIm attempts to forward request | The APIm layer attempts to forward the validated request to the backend Directory API service |
| 6    | API Consumer aPIm detects backend unavailability | The APIm detects that the backend service is unavailable (connection timeout or refused) |
| 7    | API Consumer verify response code | The APIm returns HTTP 503 Service Unavailable status code to the client |
| 8    | API Consumer verify error message | "API service temporarily unavailable" |
| 9    | API Consumer verify message includes retry info | "Please try again in 5 minutes" |
| 10    | API Consumer verify backend error not exposed | The error response does not expose internal backend error details, stack traces, or implementation specifics; only a generic error message is returned |
| 11    | API Consumer re-enable backend service | The backend Directory API service is brought back online and becomes available |
| 12    | API Consumer retry same request | The same API request is resubmitted to the APIm gateway |
| 13    | API Consumer verify request now succeeds | The APIm forwards the request to the now-available backend, and the backend returns HTTP 200 OK with the expected response data |


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
| 1    | System API Manager verify customer quota | The customer's remaining daily API quota is verified and shows 1000 requests available |
| 2    | System API Manager make 1000 API requests | Exactly 1000 API requests are submitted by the customer to consume the entire daily quota |
| 3    | System API Manager verify quota exhausted | After 1000 requests, the customer's remaining quota is verified as 0 (quota fully consumed) |
| 4    | System API Manager attempt request at 23:59 UTC | An additional API request is attempted at 23:59:59 UTC (quota period not yet reset) |
| 5    | System API Manager wait for UTC midnight (00:00) | The system time advances from 23:59:59 UTC to 00:00:00 UTC (midnight), crossing the daily quota reset boundary |
| 6    | System API Manager check quota after reset | After UTC midnight, the customer's remaining daily quota is verified and shows 1000 requests (quota reset to daily limit) |
| 7    | System API Manager attempt request at 00:01 UTC | An API request is attempted at 00:01 UTC (after quota reset) and is accepted by the system |
| 8    | System API Manager verify quota decreased | After the new request succeeds, the customer's remaining quota is verified as 999 (one request consumed from fresh daily quota) |


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
| 1    | System Security Manager note current UTC time | The current UTC time is recorded and noted (e.g., 12:00:00 UTC) |
| 2    | System Security Manager prepare API request | An API request is prepared with standard headers and payload |
| 3    | System Security Manager set request timestamp 5 minutes ahead | The request timestamp is set to 5 minutes in the future (12:05:00 UTC when current time is 12:00:00 UTC) |
| 4    | System Security Manager generate signature with timestamp | The HMAC-SHA256 signature is calculated and includes the future timestamp in the request |
| 5    | System Security Manager send request with future timestamp | The API request with the future timestamp is transmitted to the APIm gateway |
| 6    | System Security Manager aPIm extracts timestamp from request | The APIm layer extracts the request timestamp from the request headers |
| 7    | System Security Manager aPIm compares with current time | The APIm compares the request timestamp (12:05:00) with the current server time (12:00:00) and detects the timestamp is in the future |
| 8    | System Security Manager aPIm checks against tolerance (2 min) | The timestamp difference (5 minutes) exceeds the configured tolerance threshold (2 minutes), causing validation to fail |
| 9    | System Security Manager verify response code | The APIm returns HTTP 400 Bad Request status code |
| 10    | System Security Manager verify error message | The error response includes message "Request timestamp is too far in the future" |
| 11    | System Security Manager send request with current timestamp | A new API request is prepared with the current timestamp (12:00:00 UTC) within the tolerance window |
| 12    | System Security Manager verify request accepted | The APIm accepts the request and returns HTTP 200 OK |


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
| 1    | System Security Manager capture valid API request from yesterday | A valid API request from yesterday at 12:00:00 UTC is captured and recorded for replay testing |
| 2    | System Security Manager wait until next day | The system time advances by 24 hours until the next day |
| 3    | System Security Manager attempt to replay old request | The captured API request from yesterday is resent to the system |
| 4    | System Security Manager old request has valid signature | The signature on the old request is verified to still be mathematically valid |
| 5    | System Security Manager send old request to APIm | The old API request with its original signature is transmitted to the APIm gateway |
| 6    | System Security Manager aPIm extracts timestamp | The APIm layer extracts the timestamp from the old request (yesterday 12:00:00 UTC) |
| 7    | System Security Manager aPIm compares with current time | The APIm compares the request timestamp (yesterday 12:00:00) with the current server time (today 12:00:00), detecting a 24-hour time difference |
| 8    | System Security Manager aPIm checks against validation window | The timestamp is verified to be outside the configured 5-minute validation window, causing timestamp validation to fail |
| 9    | System Security Manager verify response code | The APIm returns HTTP 401 Unauthorized status code |
| 10    | System Security Manager verify error message | The error response includes message "Request timestamp expired" indicating the request is too old to be valid |
| 11    | System Security Manager verify request not processed | The request is not forwarded to the backend service; the rejection occurs at the APIm layer |


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
| 1    | System API Manager start 5 API requests with old key | Five concurrent API requests are initiated and submitted to the system using the old credentials (key_old_xxxxx) |
| 2    | System API Manager requests start processing at APIm | The five requests start processing at the APIm layer and begin validation |
| 3    | System API Manager trigger credential rotation | A credential rotation request is submitted to generate new credentials for the integration client |
| 4    | System API Manager new credentials generated | The system generates new credentials (key_new_yyyyy) and creates a new API key and secret |
| 5    | System API Manager old credentials marked revoked | The old credentials (key_old_xxxxx) are marked as 'revoked' status in the database |
| 6    | System API Manager in-flight requests continue processing | The five in-flight requests that started before rotation continue processing using the old credentials |
| 7    | System API Manager verify in-flight requests succeed | All 5 in-flight requests complete successfully and each returns HTTP 200 OK with the expected response data |
| 8    | System API Manager verify no data loss | All responses from the 5 requests are received completely with no lost or corrupted data |
| 9    | System API Manager attempt new requests with old key | New API requests attempted using the old revoked credentials (key_old_xxxxx) are rejected |
| 10    | System API Manager attempt new requests with new key | New API requests using the new credentials (key_new_yyyyy) are accepted and return HTTP 200 OK |


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
| 1    | API Consumer prepare request for large data | An API request is prepared to retrieve a large data export (10 MB) |
| 2    | API Consumer send request to APIm | The API request is submitted to the APIm gateway |
| 3    | API Consumer backend generates 10MB response | The backend service generates a 10 MB JSON response containing the requested data |
| 4    | API Consumer aPIm streams response | The APIm layer initiates streaming the 10 MB response back to the client |
| 5    | API Consumer monitor response delivery | The response data is monitored to verify it is flowing continuously without interruption |
| 6    | API Consumer verify no timeout occurs | The response completes within the configured timeout window without timing out |
| 7    | API Consumer verify complete response received | The complete 10 MB response is received by the client without truncation |
| 8    | API Consumer verify response integrity | The response data integrity is verified and no data corruption has occurred during transmission |
| 9    | API Consumer verify JSON parsing succeeds | The received JSON response is parsed successfully with valid JSON structure throughout |
| 10    | API Consumer calculate checksum | A checksum or hash of the received data is calculated and compared to verify data integrity |


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
| 1    | API Consumer start long-running API request | A long-running API request with 2-5 second processing time is submitted |
| 2    | API Consumer request processing begins | The request begins processing and validation at the APIm layer |
| 3    | API Consumer admin suspends customer account | An admin action is triggered to suspend the customer account during the in-flight request |
| 4    | API Consumer account status = suspended | The customer account status is updated to 'suspended' in the database |
| 5    | API Consumer in-flight request completes | The request that was already in-flight continues processing and completes successfully |
| 6    | API Consumer verify in-flight request succeeds | The in-flight request returns HTTP 200 OK response with the complete result |
| 7    | API Consumer data from in-flight request received | The response data from the in-flight request is received completely and without loss |
| 8    | API Consumer attempt new request after suspension | A new API request is attempted after the account suspension |
| 9    | API Consumer verify new request rejected | The new request is rejected and returns HTTP 403 Forbidden status code |
| 10    | API Consumer verify error message | The error response includes message "Account is suspended" indicating the account is no longer active |


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
| 1    | System API Manager generate integration client | A new integration client is created through the client creation API |
| 2    | System API Manager extract API key | The generated API key is extracted from the response |
| 3    | System API Manager extract API secret | The generated API secret is extracted from the response |
| 4    | System API Manager scan for tab characters (U+0009) | The API key and secret are scanned for tab characters (U+0009) and none are found |
| 5    | System API Manager scan for nbsp (U+00A0) | The API key and secret are scanned for non-breaking space characters (U+00A0) and none are found |
| 6    | System API Manager scan for zero-width space (U+200B) | The API key and secret are scanned for zero-width space characters (U+200B) and none are found |
| 7    | System API Manager verify only ASCII characters | The API key and secret are verified to contain only ASCII characters (no Unicode whitespace) |
| 8    | System API Manager verify alphanumeric + dash/underscore | The credentials are verified to contain only alphanumeric characters (a-zA-Z0-9), hyphens (-), and underscores (_) |
| 9    | System API Manager create 10 more clients | 10 additional integration clients are created to generate and test multiple credential sets |
| 10    | System API Manager scan all 10 credentials | All 10 sets of generated credentials are scanned and verified to pass the whitespace check (no problematic characters) |


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
| 1    | Customer Integration Manager new customer completes signup | A new customer account is successfully created with access to the API management portal |
| 2    | Customer Integration Manager customer navigates to Integration | The Integrations page loads displaying available integration options, onboarding wizards for each integration, and currently active integrations for the customer |
| 3    | Customer Integration Manager customer selects "Workday" | Workday onboarding wizard is started and displays setup instructions |
| 4    | Customer Integration Manager customer creates integration client | An integration client named "Workday Integration" is successfully created and appears in the clients list |
| 5    | Customer Integration Manager customer selects scopes | The scopes 'api-directory' and 'api-incident' are selected and added to the client |
| 6    | Customer Integration Manager credentials displayed once | The generated API key and secret are displayed on the screen (shown only once for security) |
| 7    | Customer Integration Manager customer copies credentials | The API key and secret are copied by the customer for use in Workday configuration |
| 8    | Customer Integration Manager customer accesses Workday config | The Workday middleware configuration interface loads displaying fields for entering API credentials |
| 9    | Customer Integration Manager customer enters API key in Workday | The API key is entered into the Workday configuration and saved |
| 10    | Customer Integration Manager customer enters API secret | The API secret is entered into the Workday configuration and saved |
| 11    | Customer Integration Manager customer tests connection | A test API request is sent from the Workday middleware to the APIm using the provided credentials |
| 12    | Customer Integration Manager connection verified successful | The system responds with "Connection verified" or similar success message, confirming the credentials work |
| 13    | Customer Integration Manager customer completes onboarding | The onboarding flow is completed and the setup wizard is finished |
| 14    | Customer Integration Manager integration shows as active | The Workday integration status shows as "Active" in the customer's integration list |


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
| 1    | API Consumer send request to Directory API | The API request is routed by APIm to the appropriate backend service for the Directory API (https://directory.backend.example.com) |
| 2    | API Consumer verify X-API-Product header | The X-API-Product header is present in the forwarded request with value 'Directory APIs' |
| 3    | API Consumer verify request received | The Directory Backend service receives and logs the API request including all forwarded headers and customer context |
| 4    | API Consumer send request to Incident API | The API request is routed by APIm to the appropriate backend service for the Incident API (https://incident.backend.example.com) |
| 5    | API Consumer verify X-API-Product header | The X-API-Product header is present in the forwarded request with value 'Incident APIs' |
| 6    | API Consumer verify request received | The Incident Backend service receives and logs the API request including all forwarded headers and customer context |
| 7    | API Consumer send request to Analytics API | The API request is routed by APIm to the appropriate backend service for the Analytics API (https://analytics.backend.example.com) |
| 8    | API Consumer verify X-API-Product header | The X-API-Product header is present in the forwarded request with value 'Analytics APIs' |
| 9    | API Consumer verify request received | The Analytics Backend service receives and logs the API request including all forwarded headers and customer context |


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
| 1    | System API Manager call Auth Service /scopes endpoint | The Auth Service's /scopes endpoint is called and returns a JSON response containing all available API scopes |
| 2    | System API Manager verify scopes returned | The response contains exactly 5 available API scopes in a properly formatted array |
| 3    | System API Manager verify TTL value included | The response includes a TTL (Time To Live) value of 3600 seconds, indicating the cache validity period |
| 4    | System API Manager verify cache populated | The scopes list is cached in the APIm cache layer with the 3600-second TTL |
| 5    | System API Manager publish new scope to Auth Service | A new scope 'api-analytics' is published to the Auth Service |
| 6    | System API Manager call /scopes before TTL expires | The /scopes endpoint is called again before the 3600-second cache TTL has expired (e.g., at 1800 seconds) |
| 7    | System API Manager verify old list returned | The cached scopes list is returned (still containing only the original 5 scopes), not the updated list with the new scope |
| 8    | System API Manager wait for TTL to expire | The system waits for the cache TTL to expire (3600+ seconds pass) |
| 9    | System API Manager call /scopes after TTL | The /scopes endpoint is called after the cache TTL expires, forcing a fresh fetch from the Auth Service |
| 10    | System API Manager verify updated list | The updated scopes list is returned, now containing the newly published 'api-analytics' scope in addition to the original 5 scopes |


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
| 1    | Customer Integration Manager verify api-reporting not available | The 'api-reporting' product is confirmed to not appear in the available scopes dropdown |
| 2    | Customer Integration Manager admin publishes api-reporting | The 'api-reporting' API product is published to the Auth Service making it available for assignment |
| 3    | Customer Integration Manager trigger scope cache refresh | The scope cache in the APIm is manually refreshed or the TTL is allowed to expire to fetch updated scopes |
| 4    | Customer Integration Manager navigate to client scope selector | The client details page is opened and the scope selection interface loads displaying available scopes |
| 5    | Customer Integration Manager verify api-reporting now available | The 'api-reporting' product is now visible in the available scopes dropdown menu |
| 6    | Customer Integration Manager add api-reporting to client | The 'api-reporting' scope is selected and added to the client's scope list |
| 7    | Customer Integration Manager save changes | The edited client information is submitted to the backend API and validated for accuracy |
| 8    | Customer Integration Manager verify scope assignment successful | A success notification confirms that the 'api-reporting' scope has been successfully added to the client's scope list |
| 9    | Customer Integration Manager make API call to api-reporting | The API request is successfully processed by the backend service and returns the appropriate HTTP status code (200 OK, 201 Created, etc.) |
| 10    | Customer Integration Manager verify request succeeds | The API request to the 'api-reporting' endpoint returns HTTP 200 OK with expected data |


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
| 1    | API Consumer verify customer tier is Free | The customer's current subscription tier is confirmed to be 'Free' in the system |
| 2    | API Consumer make API request | An API request is sent from the Free tier customer's integration client |
| 3    | API Consumer verify routed to Free backend | The request is routed to and processed by the Free tier backend service (https://backend-free.example.com) |
| 4    | API Consumer admin upgrades customer to Premium | The customer's subscription tier is changed from 'Free' to 'Premium' in the subscription management system |
| 5    | API Consumer verify customer tier updated | The customer's tier is confirmed to be 'Premium' in the system after the upgrade |
| 6    | API Consumer make API request | An API request is sent from the Premium tier customer's integration client |
| 7    | API Consumer verify routed to Premium backend | The request is routed to and processed by the Premium tier backend service (https://backend-premium.example.com) |
| 8    | API Consumer verify different backend used | The request routing URL has changed from the Free tier backend URL to the Premium tier backend URL |
| 9    | API Consumer verify no service interruption | All API requests succeed during the tier upgrade process, with no failed requests or service downtime |


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
| 1    | System API Manager generate 100 requests/sec as Free tier | Load of exactly 100 API requests per second is generated from a Free tier customer's client |
| 2    | System API Manager monitor response codes | All requests return HTTP 200 OK responses (within the Free tier rate limit of 100 req/sec) |
| 3    | System API Manager generate 101 requests/sec as Free tier | Load of 101 API requests per second is generated (exceeding the 100 req/sec Free tier limit) |
| 4    | System API Manager monitor response codes | Excess requests above the 100 req/sec limit are rejected with HTTP 429 Too Many Requests responses |
| 5    | System API Manager generate 1000 requests/sec as Premium | Load of 1000 API requests per second is generated from a Premium tier customer's client (within Premium limit) |
| 6    | System API Manager monitor response codes | All 1000 requests per second return HTTP 200 OK responses (within the Premium tier rate limit) |
| 7    | System API Manager generate 1001 requests/sec as Premium | Load of 1001 API requests per second is generated (exceeding the 1000 req/sec Premium tier limit) |
| 8    | System API Manager monitor response codes | Excess requests above the 1000 req/sec limit are rejected with HTTP 429 Too Many Requests responses |


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
| 1    | System API Manager prepare API request | An API request is prepared with valid credentials and payload for the integration client |
| 2    | System API Manager include valid credentials | Valid API Key and calculated HMAC-SHA256 signature are included in the request headers |
| 3    | System API Manager send request to APIm | The prepared request with credentials is sent to the APIm gateway |
| 4    | System API Manager aPIm forwards request to backend | After validating credentials and scope, the APIm forwards the request to the backend service |
| 5    | System API Manager inspect forwarded headers | The headers in the forwarded request are captured and examined for customer context information |
| 6    | System API Manager verify X-Customer-ID header | The X-Customer-ID header is present in the forwarded request with value 'cust_12345' |
| 7    | System API Manager verify X-Subscription-Tier header | The X-Subscription-Tier header is present in the forwarded request with value 'Premium' |
| 8    | System API Manager verify X-Assigned-Scopes header | The X-Assigned-Scopes header is present in the forwarded request with value '[api-directory, api-incident]' |
| 9    | System API Manager verify backend processes context | The backend service receives and processes the forwarded customer context headers to customize the response |
| 10    | System API Manager backend returns data for tier | The backend returns response data appropriate for the Premium tier (e.g., extended data set, higher limits) |


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
| 1    | System Security Manager create integration client | An integration client named "Workday Integration" is successfully created through the client creation API or UI |
| 2    | System Security Manager query central audit system | The central audit log system is queried for events related to the newly created client |
| 3    | System Security Manager verify CLIENT_CREATED event logged | A CLIENT_CREATED event is found in the audit log with timestamp, client ID, and creation details |
| 4    | System Security Manager add scope to client | The 'api-directory' scope is successfully added to the integration client |
| 5    | System Security Manager query central audit system | The central audit log system is queried for scope-related events |
| 6    | System Security Manager verify SCOPE_ADDED event logged | A SCOPE_ADDED event is found in the audit log recording the addition of 'api-directory' scope with timestamp and actor information |
| 7    | System Security Manager remove scope from client | The 'api-directory' scope is successfully removed from the integration client |
| 8    | System Security Manager query central audit system | The central audit log system is queried for the scope removal event |
| 9    | System Security Manager verify SCOPE_REMOVED event logged | A SCOPE_REMOVED event is found in the audit log recording the removal of 'api-directory' scope with timestamp and actor information |
| 10    | System Security Manager rotate client credentials | The client credentials are successfully rotated, generating new API key and secret |
| 11    | System Security Manager query central audit system | The central audit log system is queried for credential rotation events |
| 12    | System Security Manager verify CREDENTIAL_ROTATED event logged | A CREDENTIAL_ROTATED event is found in the audit log with timestamp and details of the rotation action |
| 13    | System Security Manager verify all events have timestamps | All audit log events include precise timestamps in ISO 8601 format |
| 14    | System Security Manager verify actor/user identified | All audit log events include the actor/user ID or admin username who performed each action |


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
| 1    | Customer Integration Manager rotate integration client credentials | Credential rotation is initiated through the client management interface or API |
| 2    | Customer Integration Manager verify new credentials generated | New API key and secret are successfully generated and issued for the client |
| 3    | Customer Integration Manager monitor email inbox | The customer email inbox is monitored for incoming email notifications |
| 4    | Customer Integration Manager verify email received | An email is received from the system with credential rotation notification |
| 5    | Customer Integration Manager verify email from system | The email is confirmed to be from system@example.com (official notification sender) |
| 6    | Customer Integration Manager verify email subject | The email subject line includes "Credentials Rotated" or similar rotation-related text |
| 7    | Customer Integration Manager verify email content | The email content includes details about the credential rotation event |
| 8    | Customer Integration Manager verify timestamp in email | The email includes a timestamp that matches the credential rotation time |
| 9    | Customer Integration Manager verify no secrets in email | The email does NOT contain the API key or secret for security (credentials are only shown once during generation) |
| 10    | Customer Integration Manager verify action items | The email includes clear next steps or action items (e.g., "Update your middleware configuration with new credentials") |


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
| 1    | Customer Integration Manager create new integration client | A new integration client is successfully created through the API or management portal |
| 2    | Customer Integration Manager monitor email inbox | The customer email inbox is monitored for incoming email notifications |
| 3    | Customer Integration Manager verify email received | An email is received from the system with onboarding instructions |
| 4    | Customer Integration Manager verify email source | The email is confirmed to be from system@example.com (official notification sender) |
| 5    | Customer Integration Manager verify email subject | The email subject line states "Integration Client Created" or similar onboarding-related text |
| 6    | Customer Integration Manager verify client name in email | The created client name (e.g., "My Integration") is mentioned in the email content |
| 7    | Customer Integration Manager verify setup instructions included | The email includes step-by-step setup instructions for configuring the integration |
| 8    | Customer Integration Manager verify documentation link | The email includes a link to the API developer documentation and integration guides |
| 9    | Customer Integration Manager verify support contact included | The email provides support contact information (email, phone, or support portal link) |
| 10    | Customer Integration Manager verify no secrets exposed | The email does NOT contain the API key or secret; credentials are only shown once during client creation |
| 11    | Customer Integration Manager verify clear call-to-action | The email clearly outlines next steps and includes a prominent call-to-action button or link (e.g., "Get Started") |


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
| 1    | Admin System Administrator login as admin user | The admin user is successfully authenticated and logged into the system with full administrative permissions |
| 2    | Admin System Administrator navigate to dashboard | The admin dashboard page loads displaying all integration clients across all customer tenants, system metrics, and relevant management options |
| 3    | Admin System Administrator locate client metrics section | The dashboard client metrics section is visible and accessible with data displayed in card or widget format |
| 4    | Admin System Administrator verify total clients count | The total number of integration clients across all customers is displayed (e.g., "Total Clients: 1,247") |
| 5    | Admin System Administrator verify active clients count | The number of currently active integration clients is displayed (e.g., "Active Clients: 1,105") |
| 6    | Admin System Administrator verify requests last 24h | The total number of API requests received in the last 24 hours is displayed (e.g., "Requests (24h): 542,891") |
| 7    | Admin System Administrator verify metrics are current | The metrics are verified to be recently updated with timestamps showing when they were last refreshed (e.g., "Updated: 2 minutes ago") |
| 8    | Admin System Administrator verify no sensitive data exposed | The dashboard displays only aggregated metrics and no sensitive data such as API keys, customer secrets, or individual customer credentials |
| 9    | Admin System Administrator click on metrics for detail | Clicking on individual metrics provides drill-down functionality showing additional details or historical trends |


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
| 1    | System API Manager free tier customer makes 500 requests | All API requests are successfully processed by the backend without throttling, rate limiting, or rejection due to tier restrictions |
| 2    | System API Manager premium tier customer makes 5000 requests | All API requests are successfully processed by the backend without throttling, rate limiting, or rejection due to tier restrictions |
| 3    | System API Manager query billing system metrics | The billing system is queried to retrieve recorded usage metrics for the customers |
| 4    | System API Manager verify Free tier usage logged | The Free tier customer's usage of 500 requests is recorded in the billing system |
| 5    | System API Manager verify Premium tier usage logged | The Premium tier customer's usage of 5000 requests is recorded in the billing system |
| 6    | System API Manager verify tier correctly identified | The customer tier is correctly identified and logged as "Free" and "Premium" respectively |
| 7    | System API Manager verify timestamp logged | Each usage record includes a timestamp indicating when the requests occurred |
| 8    | System API Manager generate billing report | A billing report is generated from the collected usage metrics |
| 9    | System API Manager verify usage accuracy in report | The billing report shows accurate usage metrics (Free: 500 requests, Premium: 5000 requests) matching the actual API usage |


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
| 1    | Support Lead support user logs in | The support lead user is successfully authenticated and logged into the support portal with appropriate permissions |
| 2    | Support Lead search for customer | The customer is located in the system using search functionality (by company name, customer ID, or email) |
| 3    | Support Lead locate customer's client | The target integration client belonging to the customer is visible in the client list |
| 4    | Support Lead click "Reset Credentials" (support view) | A confirmation dialog is displayed asking for confirmation to proceed with credential reset |
| 5    | Support Lead support enters reason for reset | The support user enters a reason or notes for the credential reset (recorded for audit purposes) |
| 6    | Support Lead confirm credential reset | The credential reset action is confirmed and initiated in the backend |
| 7    | Support Lead verify new credentials generated | New API key and secret are successfully generated for the integration client |
| 8    | Support Lead support provides new credentials | The new credentials are presented to the support user to provide to the customer |
| 9    | Support Lead verify old credentials revoked | The old credentials are marked as revoked and no longer function for API requests |
| 10    | Support Lead verify audit log entry | The credential reset action is logged in the audit trail with the support user ID, timestamp, and reason |


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
| 1    | System API Manager call /metrics endpoint | The metrics endpoint (/metrics) responds with HTTP 200 OK |
| 2    | System API Manager verify response format | The response is in Prometheus metrics format (text-based, TYPE and HELP directives) |
| 3    | System API Manager verify active_clients metric | The 'active_clients' metric is present in the response with current value |
| 4    | System API Manager verify failed_requests metric | The 'failed_requests' metric is present showing count of failed API requests |
| 5    | System API Manager verify avg_latency metric | The 'avg_latency' metric is present showing average request latency in milliseconds |
| 6    | System API Manager verify metric values are current | All metric values are verified to be recently updated (within the last refresh interval) |
| 7    | System API Manager monitoring system scrapes metrics | The monitoring system successfully scrapes metrics from the /metrics endpoint using an HTTP GET request |
| 8    | System API Manager metrics stored in monitoring system | The collected metrics are successfully stored in the time-series database of the monitoring system |
| 9    | System API Manager historical trends available | Historical metric data is available in the monitoring system showing trends over time |


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
| 1    | System API Manager configure JMeter for 100 req/sec | Load test is configured with 100 requests per second load generation |
| 2    | System API Manager run load test for 10 minutes | Load test is executed for 10 minutes duration |
| 3    | System API Manager generate 60000 requests | All API requests are successfully processed by the backend without throttling, rate limiting, or rejection due to tier restrictions |
| 4    | System API Manager collect latency metrics | Request latency metrics are collected and recorded from all 60,000 requests |
| 5    | System API Manager calculate p50 latency | The median (50th percentile) latency is calculated from the collected metrics |
| 6    | System API Manager calculate p95 latency | The 95th percentile latency is calculated from the collected metrics |
| 7    | System API Manager calculate p99 latency | The 99th percentile latency is calculated from the collected metrics |
| 8    | System API Manager verify p99 < 200ms | The p99 latency is verified to be under the 200ms SLA threshold |
| 9    | System API Manager review error rate | The error rate is verified to be under 1% showing excellent request success rate |


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
| 1    | System API Manager generate 10000 requests | 10,000 test requests are generated for scope validation testing |
| 2    | System API Manager include various scope counts | Requests are generated with varying numbers of scopes (1-10 scopes per request) |
| 3    | System API Manager measure scope validation time | The time taken to validate scopes in each request is measured and recorded |
| 4    | System API Manager extract validation latency | Latency metrics are extracted from request processing logs |
| 5    | System API Manager calculate mean validation latency | The mean scope validation latency across all 10,000 requests is calculated and verified to be under 5ms |
| 6    | System API Manager calculate p99 validation latency | The 99th percentile scope validation latency is calculated and verified to be under 5ms |
| 7    | System API Manager verify consistent performance | Scope validation latency remains consistent across requests with no degradation as test progresses |
| 8    | System API Manager verify cache helps performance | Scope validation using cached scope lists is confirmed to be faster than uncached lookups |


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
| 1    | System API Manager generate 10000 requests | 10,000 test requests are generated for credential validation testing |
| 2    | System API Manager vary credential types tested | Requests use various credential types: valid, expired, and revoked credentials |
| 3    | System API Manager measure credential validation time | The time taken to validate each credential is measured and recorded |
| 4    | System API Manager calculate mean validation latency | The mean credential validation latency across all 10,000 requests is calculated and verified to be under 10ms |
| 5    | System API Manager calculate p99 validation latency | The 99th percentile credential validation latency is calculated and verified to be under 10ms |
| 6    | System API Manager verify database query performance | Database queries for credential lookups are confirmed to be fast and efficient |
| 7    | System API Manager verify caching effective | Frequently used credentials are confirmed to be cached, improving validation speed |
| 8    | System API Manager verify signature verification fast | HMAC-SHA256 signature verification is confirmed to be fast and not a performance bottleneck |


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
| 1    | System API Manager configure JMeter: 100 threads | Load test is configured with 100 concurrent threads (client connections) |
| 2    | System API Manager start 100 concurrent clients | 100 concurrent clients successfully establish connections to the API |
| 3    | System API Manager each client makes 50 requests | Each of the 100 clients submits 50 API requests, totaling 5,000 concurrent requests |
| 4    | System API Manager monitor error rate | The error rate during concurrent load is monitored and should remain near 0% |
| 5    | System API Manager monitor response times | Response latencies for all requests are captured and monitored for performance degradation |
| 6    | System API Manager monitor system resources | System resources (CPU, memory, database connections) are monitored to ensure no exhaustion |
| 7    | System API Manager verify no errors or timeouts | Verification shows 0% error rate with no timeouts or failed requests |
| 8    | System API Manager verify response times acceptable | All response times are verified to remain within SLA thresholds despite concurrent load |
| 9    | System API Manager verify system resources stable | System resources remain stable with no CPU spikes, memory leaks, or connection pool exhaustion |


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
| 1    | System API Manager load scaled test data into database | Test database is populated with 100,000 customers, 1,000,000 integration clients, and 5,000,000 credentials |
| 2    | System API Manager query: find client by ID | Query to find a specific client by ID executes in under 10ms |
| 3    | System API Manager query: list clients for customer | Query to list all clients for a specific customer executes in under 100ms |
| 4    | System API Manager query: find credential | Query to find a specific credential by ID executes in under 5ms |
| 5    | System API Manager query: list all credentials | Query to list credentials (with pagination) executes in under 500ms |
| 6    | System API Manager query: find active clients | Query to find all active clients for filtering/searching executes in under 200ms |
| 7    | System API Manager verify index effectiveness | Database query execution analysis confirms that all queries use appropriate indexes to achieve good performance |
| 8    | System API Manager analyze query execution plans | Query execution plans are analyzed and verified to be efficient (avoiding full table scans) |


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
| 1    | System API Manager record baseline memory usage | Initial system memory usage is recorded as a baseline for comparison |
| 2    | System API Manager generate 1000 req/sec load | Load generation is configured and sustained at 1000 requests per second |
| 3    | System API Manager monitor memory usage continuously | Memory usage is continuously monitored throughout the 60-minute test |
| 4    | System API Manager run test for 60 minutes | The load test runs for the full 60-minute duration, generating 3,600,000 total requests |
| 5    | System API Manager check memory at 10 min mark | Memory usage at the 10-minute mark is verified to be stable and near baseline |
| 6    | System API Manager check memory at 30 min mark | Memory usage at the 30-minute mark is verified to remain stable without significant growth |
| 7    | System API Manager check memory at 60 min mark | Memory usage at the 60-minute mark is verified to be stable and not significantly higher than baseline |
| 8    | System API Manager calculate memory growth rate | The memory growth rate is calculated and verified to be less than 1% per hour (acceptable for a production system) |
| 9    | System API Manager check for memory leaks | Final analysis confirms no memory leaks detected; memory remains stable throughout the test |


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
| 1    | System API Manager prepare 10 clients for rotation | 10 integration clients are prepared and confirmed ready for credential rotation |
| 2    | System API Manager initiate 10 concurrent rotations | Credential rotation requests for all 10 clients are initiated simultaneously |
| 3    | System API Manager monitor for race conditions | The concurrent rotations are monitored for race conditions, deadlocks, or data corruption |
| 4    | System API Manager verify all 10 rotations succeed | All 10 credential rotation operations complete successfully without errors |
| 5    | System API Manager verify new credentials unique | Each of the 10 clients receives unique new API key and secret values |
| 6    | System API Manager verify old credentials revoked | All old credentials for the 10 clients are revoked and marked as inactive |
| 7    | System API Manager repeat rotation cycle 10 times | The 10-client concurrent rotation is repeated 10 times, totaling 100 rotation operations |
| 8    | System API Manager verify no duplicates created | All 100 sets of newly generated credentials are verified to be unique with no duplicate keys or secrets |


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
| 1    | System API Manager load first page (page 1) | The first page of 50 clients from the 10,000 total clients loads in less than 1 second |
| 2    | System API Manager load middle page (page 100) | The 100th page (middle of 200 total pages) loads in less than 1 second |
| 3    | System API Manager load last page (page 200) | The final page (page 200 with remaining clients) loads in less than 1 second |
| 4    | System API Manager request page with search filter | A page of results filtered by search criteria loads in less than 1 second |
| 5    | System API Manager request page with sort applied | A page of results sorted by a specific column loads in less than 1 second |
| 6    | System API Manager navigate through 10 consecutive pages | Navigating through 10 consecutive pages takes less than 1 second per page |
| 7    | System API Manager verify accuracy of pagination | Each page displays the correct 50 clients with no duplicates or omissions between pages |
| 8    | System API Manager verify no missing data | All 10,000 clients are accessible through pagination with no inaccessible or orphaned records |


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
| 1    | System API Manager generate valid HMAC-SHA256 signature | A valid HMAC-SHA256 signature is generated for a test request |
| 2    | System API Manager submit request with valid signature | A request with the valid signature is submitted and accepted with HTTP 200 OK |
| 3    | System API Manager generate invalid signature (1-bit flip) | An invalid signature is created by flipping one bit of the valid signature |
| 4    | System API Manager submit request with invalid signature | A request with the invalid signature is submitted and rejected with HTTP 401 Unauthorized |
| 5    | System API Manager measure validation time for valid sig | The time taken to validate and accept the valid signature is measured |
| 6    | System API Manager measure validation time for invalid sig | The time taken to validate and reject the invalid signature is measured |
| 7    | System API Manager calculate time difference | The difference between validation times for valid and invalid signatures is calculated |
| 8    | System API Manager verify constant-time comparison | The timing difference is verified to be negligible (within measurement error), confirming constant-time comparison |
| 9    | System API Manager test with multiple 1-bit variations | Multiple invalid signatures (each with single-bit variations) are tested, and validation times are verified to be equal |


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
| 3    | System Security Manager generate signature | The HMAC-SHA256 signature is calculated correctly using the API secret and request payload, resulting in a 64-character hexadecimal string |
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
| 2    | API Consumer navigate to integrations | The Integrations page loads displaying available integration options, onboarding wizards for each integration, and currently active integrations for the customer |
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
**Feature:** FE#735316 - API Consumer and Scope Management  
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









