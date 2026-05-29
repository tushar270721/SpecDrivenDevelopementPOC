# SPECIFICATION: AB#735316 - API Consumer and Scope Management

---

## 📋 FRONTMATTER

| Property | Value |
|----------|-------|
| **Feature ID** | AB#735316 |
| **Feature Title** | [APIm] 6 API Consumer and Scope Management |
| **Project** | ART - New SaaS |
| **State** | Closed |
| **Priority** | 2 (High) |
| **Type** | Feature |
| **Assigned To** | Nicolas, Julien |
| **Created Date** | 11/25/2025 |
| **Last Updated** | 3/11/2026 |
| **Azure DevOps Link** | https://dev.azure.com/enablon/ART%20-%20New%20SaaS/_workitems/edit/735316 |
| **Specification Created** | 5/29/2026 |

---

## 🎯 FEATURE OVERVIEW

### Purpose
Enable services/support leads to manage API consumers and their access levels, providing tailored support and enforcing SLAs through controlled credential provisioning and scope-based access management.

### Business Value
- **Consumer Satisfaction:** Improved onboarding and support experience
- **Security:** Secure, controlled access to APIs through credential management and scope validation
- **Scalability:** Flexible provisioning model supporting multiple integrations (e.g., Workday)
- **Governance:** Subscription-based access control with audit trails

### Key Capabilities
1. Consumer onboarding workflows with credentials
2. API key and OAuth provisioning
3. Support tier definitions and management
4. Scope-based access control ('api-{api-product-name}')
5. Integration with Authentication Service
6. Subscription validation and enforcement

---

## 📌 BUSINESS REQUIREMENTS

### BR1: Consumer Onboarding
- Support customer registration and credential generation
- Provide email-based onboarding journey
- Display credentials on linked registration page or read-only interface
- Enable customers to test and validate integrations

### BR2: Credential Management
- Support API key generation and management
- Support OAuth credential provisioning
- Enable customers to add, manage, retire credentials
- Enable customers to change/rotate secrets for integration clients

### BR3: Scope-Based Access Control
- Define scopes as 'api-{api-product-name}' format
- Map credentials to specific API product scopes
- Validate credential scope against API product entitlements
- Prevent access to APIs outside assigned scopes

### BR4: Subscription Management
- Associate API products with customer subscriptions
- Enforce subscription tier validation
- Support different access levels per subscription tier
- Validate subscription before allowing API calls

### BR5: Backend Integration
- Forward API requests to correct backend service
- Pass API product & subscription tier information via backendURL properties
- Validate customer entitlement to requested API product
- Prevent unauthorized backend service access

### BR6: Integration Client Management
- Enable customers to register integration clients (e.g., Workday middleware)
- Allocate specific API product access rights per client
- Support multiple concurrent clients per customer
- Track and audit client activity

---

## 👥 USER STORIES

### US1: Customer Registers Integration Client
```
As a customer (e.g., Workday administrator),
I want to register an integration client and assign specific API product scopes,
So that the middleware can securely access only the required API products.

Acceptance Criteria:
- Customer can create a new integration client through the platform
- Customer can select which API products the client should access
- System generates unique credentials (API key + secret)
- Credentials are displayed one-time or in secure vault
- Customer receives email confirmation with setup instructions
```

### US2: Customer Manages Integration Client Credentials
```
As a customer,
I want to manage, rotate, and retire credentials for my integration clients,
So that I can maintain security and control over API access.

Acceptance Criteria:
- Customer can view active credentials for each client
- Customer can generate new credentials for a client
- Customer can revoke/retire existing credentials
- Customer can view audit trail of credential changes
- System should enforce credential rotation policies if defined
```

### US3: Integration Client Calls API Product
```
As a customer's integration middleware (e.g., Workday),
I want to call only the API products I'm authorized for,
So that I can retrieve required data without risking unauthorized access.

Acceptance Criteria:
- Middleware submits API request with client credentials
- System validates credential scope matches API product
- System validates customer subscription includes API product
- System forwards request to correct backend service
- System rejects requests with invalid/insufficient scopes
- System includes subscription tier information in forwarded request
```

### US4: Support Lead Manages Consumer Tiers
```
As a services/support lead,
I want to define and manage API consumer support tiers,
So that I can provide tailored support and enforce SLAs per customer.

Acceptance Criteria:
- Support lead can create support tier definitions
- Support lead can assign customers to support tiers
- Support tiers map to API rate limits and quota
- Support tiers determine priority and response times
- System enforces tier-based throttling and quotas
```

### US5: System Prevents Unauthorized Backend Access
```
As a system security administrator,
I want to ensure customers cannot call internal-only backend APIs,
So that internal system integrity and data remain protected.

Acceptance Criteria:
- Backend APIs for internal APIm use are marked as "internal-only"
- Customer credentials cannot call internal-only APIs
- System rejects calls to internal APIs from customer credentials
- Internal claim validation is enforced at backend service
- Audit log records all unauthorized access attempts
```

---

## ✅ ACCEPTANCE CRITERIA

### AC1: Backend Service Routing
**The system should forward the query to the right backend, even if the backend service was already entitled.**

**What it means:**
- System maintains accurate mapping between API products and backend services
- Routing logic accounts for service availability and failover scenarios
- Customers can call the same API product consistently even if backend changes

**Test Scenarios:**
- Forward request to correct backend for API product
- Handle backend service already entitled from previous request
- Route to backup backend if primary is unavailable
- Maintain consistency across multiple simultaneous requests

---

### AC2: API Product & Subscription Tier Forwarding
**The system should have the ability to forward the API product & subscription tier information to the backend.**

**What it means:**
- Backend services receive product and tier context for each request
- Different backendURL properties used for different subscription tiers
- Backend can customize behavior based on subscription tier

**Test Scenarios:**
- Include API product name in forwarded request
- Include subscription tier in forwarded request header/body
- Use correct backendURL for customer's subscription tier
- Backend receives complete product/tier metadata for decision-making

---

### AC3: Customer Credential & Product Scope Management
**As a customer, I should be able to register and manage a list of integration clients within my platform. I should be able to allocate rights to use specific API products individually.**

**What it means:**
- Customer has dedicated management interface for integration clients
- Customer can create, view, list, edit integration clients
- Customer can independently control which API products each client accesses
- Granular scope assignment per client (not all-or-nothing)

**Test Scenarios:**
- Customer registers new integration client
- Customer views list of all registered clients
- Customer edits client name/description
- Customer adds API product scope to existing client
- Customer removes API product scope from client
- Customer can see active clients vs retired clients
- Multiple clients with different scope combinations

---

### AC4: Internal API Protection
**Customers should NOT be able to call backend APIs designed exclusively for APIm use.**

**What it means:**
- System distinguishes between public APIs and internal-only APIs
- Customer credentials cannot be used to call internal-only APIs
- System validates API classification before forwarding request
- Backend rejects requests without proper internal authorization

**Test Scenarios:**
- Customer attempts to call internal-only API
- System rejects request before forwarding to backend
- Customer with correct scope can call public API
- Internal claim token validation fails for customer credentials
- Audit log records unauthorized internal API access attempts

---

## 🧪 TEST SCENARIOS

### TS1: Happy Path - Workday Integration
**Scenario:** Workday middleware successfully calls Directory APIs within assigned scope

**Preconditions:**
- Customer has active subscription for "Directory APIs" product
- Workday client is registered with "api-directory" scope only
- Valid API key and secret generated for Workday client
- Backend service for Directory APIs is operational

**Steps (Given-When-Then):**
```
Given a Workday middleware with credentials scoped to "api-directory"
When the middleware calls the Directory API endpoint
Then the system validates the credential scope matches "api-directory"
And the system validates the customer subscription includes "Directory APIs"
And the system forwards the request to the Directory API backend
And the request includes "Directory APIs" product and subscription tier
And the backend processes the request successfully
And the response is returned to the client
```

**Expected Result:** API call succeeds (200 OK), data returned

**Test Data:**
- Client ID: workday-integration-001
- Scope: api-directory
- API Product: Directory APIs
- Subscription Tier: Premium
- Endpoint: /api/v1/directory/users

---

### TS2: Scope Violation - Incident API Access Denied
**Scenario:** Workday middleware attempts to call Incident API but only has Directory scope

**Preconditions:**
- Workday client only has "api-directory" scope
- "Incident & Impacts Export API" is available but not assigned to Workday client
- System enforces scope-based access control

**Steps (Given-When-Then):**
```
Given a Workday middleware with "api-directory" scope only
When the middleware attempts to call the Incident & Impacts Export API
Then the system validates the credential scope
And the system detects scope mismatch (needs "api-incident", has "api-directory")
And the system REJECTS the request before forwarding to backend
And an authorization error (403 Forbidden) is returned
And the attempt is logged for audit trail
```

**Expected Result:** API call rejected (403 Forbidden), authorization error message

**Test Data:**
- Client ID: workday-integration-001
- Current Scope: api-directory
- Requested Endpoint: /api/v1/incident/export
- Required Scope: api-incident
- Expected Error: "Insufficient scope: api-directory. Required: api-incident"

---

### TS3: Subscription Validation
**Scenario:** Customer attempts to use API product they don't have in subscription

**Preconditions:**
- Customer subscription includes only "Directory APIs"
- Customer subscription does NOT include "Incident & Impacts Export API"
- Credentials are valid but scoped to unavailable product
- Attempt to validate subscription entitlement

**Steps (Given-When-Then):**
```
Given a customer without "Incident & Impacts Export API" in subscription
When an integration client attempts to call the Incident API
Then the system validates customer subscription for this product
And the system detects missing subscription entitlement
And the system REJECTS the request
And a subscription error (402 Payment Required or 403 Forbidden) is returned
And subscription sales opportunity is logged
```

**Expected Result:** API call rejected (403), "Product not included in subscription"

**Test Data:**
- Customer ID: customer-001
- Subscription Products: [Directory APIs]
- Attempted Product: Incident & Impacts Export API
- Expected Error Code: 403 Forbidden

---

### TS4: Credential Rotation
**Scenario:** Customer rotates API credentials and old credentials stop working

**Preconditions:**
- Integration client has active credentials
- New credentials were just generated
- Old credentials should be revoked or expired

**Steps (Given-When-Then):**
```
Given an integration client with old and new credentials
When the customer generates new credentials for the client
And the customer revokes the old credentials
Then new credentials work for subsequent API calls
And old credentials are rejected (401 Unauthorized)
And the system logs both rotation and revocation events
```

**Expected Result:** 
- New credentials: 200 OK (successful)
- Old credentials: 401 Unauthorized (revoked)

**Test Data:**
- Client ID: workday-integration-001
- Old Key: old-key-xxx-xxx-xxx
- New Key: new-key-yyy-yyy-yyy
- Revocation Timestamp: [specific time]

---

### TS5: Internal API Protection
**Scenario:** Customer credentials cannot call internal-only backend APIs

**Preconditions:**
- System has internal-only API endpoints (e.g., /admin/system-health)
- Internal APIs require internal claim token, not customer credentials
- Customer has valid credentials for public APIs

**Steps (Given-When-Then):**
```
Given a customer with valid API credentials (not internal token)
When the customer attempts to call an internal-only API endpoint
Then the system identifies the endpoint as internal-only
And the system REJECTS the request without forwarding to backend
And a 403 Forbidden error is returned
And the unauthorized attempt is logged for security audit
```

**Expected Result:** API call rejected (403 Forbidden), "Internal API - Access Denied"

**Test Data:**
- Endpoint Type: internal-only
- Customer Credential: valid-customer-key-xxx
- Attempted Endpoint: /admin/system-health
- Expected Error: 403 Forbidden, "Internal API access requires administrative authorization"

---

### TS6: Multiple Clients with Different Scopes
**Scenario:** Customer manages multiple integration clients with different scope combinations

**Preconditions:**
- Customer has multiple integration clients (Workday, Salesforce, custom app)
- Each client has different API product scope assignments
- Each client has independent credentials

**Steps (Given-When-Then):**
```
Given a customer with multiple integration clients:
  - Workday: api-directory, api-incident
  - Salesforce: api-directory only
  - Custom-App: api-analytics, api-reporting
When each client makes API calls within their assigned scopes
Then each client can access only their permitted products
And the system correctly enforces scope isolation
And each client's credentials work independently
And there is no scope bleed between clients
```

**Expected Result:** All clients work independently with correct scope enforcement

**Test Data:**
- Client 1: workday-integration → scopes: [api-directory, api-incident]
- Client 2: salesforce-crm → scopes: [api-directory]
- Client 3: analytics-app → scopes: [api-analytics, api-reporting]

---

## 🔧 EDGE CASES

### EC1: Null/Empty Values
- Empty API key or secret → System rejects with "Invalid credentials"
- Customer with no registered clients → Display "No clients registered" message
- API product with no backend service mapped → System returns 503 Service Unavailable

### EC2: Boundary Conditions
- Customer attempts to register 1000+ integration clients → System enforces reasonable limit
- API key length exceeds maximum → System rejects during generation
- Subscription tier with zero quota → API calls are rate-limited to 0 (rejected immediately)

### EC3: Concurrent Operations
- Customer rotates credentials while middleware is making requests → Requests fail with 401, retry succeeds with new key
- Multiple clients requesting same API product simultaneously → System handles concurrency correctly
- Backend service failover during request → System routes to backup service correctly

### EC4: Special Characters
- API product name with special characters (e.g., "api-product.v2-beta") → Scope parsing handles correctly
- Customer company name with Unicode characters → Stored and displayed correctly
- Error messages with special characters in API response → Properly escaped in return value

### EC5: Temporal Conditions
- API key expires and customer attempts to use expired key → 401 Unauthorized
- Backend service temporarily unavailable → System returns 503 or retries
- Rate limit quota resets at day boundary → Quota count resets correctly at UTC midnight

### EC6: Authorization Bypass Attempts
- Customer modifies scope claim in JWT token → System validates signature, rejects tampering
- Customer attempts to inject another customer's ID in request → System validates context isolation
- Customer attempts to call internal API with craft credentials → Backend validation catches and rejects

---

## 📊 API REQUIREMENTS

### API Endpoint: Register Integration Client

```
POST /api/v1/integration-clients
Authorization: Bearer {customer_token}
Content-Type: application/json

Request Body:
{
  "clientName": "Workday Integration",
  "description": "Workday middleware for Directory sync",
  "apiProductScopes": ["api-directory", "api-incident"]
}

Response (201 Created):
{
  "clientId": "workday-integration-001",
  "clientName": "Workday Integration",
  "credentials": {
    "apiKey": "key_xxxxxxxxxxxxxxxxxx",
    "apiSecret": "secret_yyyyyyyyyyyyyyyyy",
    "createdAt": "2026-05-29T10:30:00Z"
  },
  "scopes": ["api-directory", "api-incident"],
  "status": "active",
  "createdAt": "2026-05-29T10:30:00Z"
}
```

### API Endpoint: Validate API Request

```
POST /api/v1/validate-request
Authorization: Bearer {customer_token}
Content-Type: application/json

Request Body:
{
  "apiKey": "key_xxxxxxxxxxxxxxxxxx",
  "apiProduct": "Directory APIs",
  "endpoint": "/api/v1/directory/users"
}

Response (200 OK):
{
  "valid": true,
  "clientId": "workday-integration-001",
  "apiProduct": "Directory APIs",
  "subscriptionTier": "Premium",
  "backendUrl": "https://backend-premium.api.example.com",
  "rateLimit": {
    "requestsPerSecond": 100,
    "dailyQuota": 1000000
  }
}

Response (403 Forbidden):
{
  "valid": false,
  "error": "INSUFFICIENT_SCOPE",
  "message": "Client scope 'api-directory' does not include requested product 'api-incident'"
}
```

### API Endpoint: List Integration Clients

```
GET /api/v1/integration-clients
Authorization: Bearer {customer_token}

Response (200 OK):
{
  "clients": [
    {
      "clientId": "workday-integration-001",
      "clientName": "Workday Integration",
      "scopes": ["api-directory", "api-incident"],
      "status": "active",
      "createdAt": "2026-05-29T10:30:00Z",
      "lastUsedAt": "2026-05-29T14:22:15Z"
    },
    {
      "clientId": "salesforce-crm-001",
      "clientName": "Salesforce CRM",
      "scopes": ["api-directory"],
      "status": "active",
      "createdAt": "2026-05-28T09:15:00Z",
      "lastUsedAt": "2026-05-29T12:45:30Z"
    }
  ],
  "totalCount": 2
}
```

### Data Validation Rules

| Field | Rule | Example |
|-------|------|---------|
| Client Name | 1-100 characters, alphanumeric + spaces/hyphens | "Workday Integration" |
| API Key | 32+ alphanumeric characters, URL-safe | "key_xxxxxxxxxxxxxxxxxx" |
| API Secret | 64+ alphanumeric characters, URL-safe | "secret_yyyyyyyyyyyyyyyyy" |
| Scope Format | Must match "api-{product-name}" pattern | "api-directory", "api-incident" |
| Subscription Tier | One of: Free, Starter, Professional, Enterprise, Premium | "Premium" |
| Rate Limit | Non-negative integer | 100, 1000 |

---

## 🔐 SECURITY REQUIREMENTS

### Authentication & Authorization
- All API endpoints require valid customer token or API key + signature
- API keys expire after 90 days (configurable per tier)
- Credentials stored using industry-standard hashing (bcrypt or argon2)
- No plain-text secrets stored in database

### Scope Validation
- Every API request must validate credential scope before forwarding to backend
- Scope validation happens in APIm layer, not delegated to backend
- Scope violations logged for audit trail and security monitoring

### Internal API Protection
- Backend APIs marked as "internal-only" cannot be called with customer credentials
- Internal APIs require special internal claim token issued only within system
- Scope "api-internal" or similar explicitly forbidden for customer credentials

### Audit Logging
- All credential rotations logged with timestamp, user, old key, new key
- All scope modifications logged with before/after values
- All authorization failures logged with attempted scope and actual scope
- All internal API access attempts logged (success and failure)

---

## 📋 DATA REQUIREMENTS

### Customer Scope Table
- `customerId` (PK)
- `subscribedProducts` (array of product IDs)
- `subscriptionTier` (enum: Free, Starter, Professional, Enterprise, Premium)
- `subscriptionStartDate` (timestamp)
- `subscriptionEndDate` (nullable timestamp)
- `rateLimit` (object: requestsPerSecond, dailyQuota)

### Integration Client Table
- `clientId` (PK)
- `customerId` (FK)
- `clientName` (string)
- `description` (string)
- `scopes` (array: ["api-directory", "api-incident"])
- `status` (enum: active, suspended, retired)
- `createdAt` (timestamp)
- `retiredAt` (nullable timestamp)

### Credential Vault Table
- `credentialId` (PK)
- `clientId` (FK)
- `apiKey` (hashed)
- `apiSecret` (encrypted)
- `status` (enum: active, revoked)
- `createdAt` (timestamp)
- `revokedAt` (nullable timestamp)

### Audit Log Table
- `auditId` (PK)
- `timestamp` (timestamp)
- `eventType` (enum: CLIENT_CREATED, SCOPE_ADDED, SCOPE_REMOVED, CREDENTIAL_ROTATED, CREDENTIAL_REVOKED, AUTH_FAILED, INTERNAL_API_ACCESS_DENIED)
- `customerId` (FK, nullable)
- `clientId` (FK, nullable)
- `details` (JSON object)
- `statusCode` (HTTP status or internal code)

---

## ⚙️ INTEGRATION REQUIREMENTS

### Authentication Service Integration
**Dependency:** External Authentication Service manages OAuth tokens and scopes

**Requirements:**
- APIm system must integrate with Auth Service
- Auth Service maintains list of available scopes (e.g., "api-directory", "api-incident")
- When new API product published, corresponding scope must be added to Auth Service
- Auth Service must support token exchange endpoint (if applicable)
- Query: Can Auth Service be CI/CD-driven to push new scopes automatically?
- Alternative: Initialize scopes at Auth Service runtime when deployed

**Interface:**
- List available scopes: GET /auth/scopes
- Validate credential scope: POST /auth/validate-scope
- Exchange token: POST /auth/token/exchange (if supported)

### Backend Service Integration
**Dependency:** Backend services receive forwarded requests with product/tier context

**Requirements:**
- Backend receives request with X-API-Product header (e.g., "Directory APIs")
- Backend receives request with X-Subscription-Tier header (e.g., "Premium")
- Backend URLs differ by subscription tier (backendURL_Free, backendURL_Premium, etc.)
- Backend validates internal claim for internal-only operations
- Backend enforces rate limits per subscription tier

**Interface:**
- All customer API requests forwarded to backend with product + tier headers
- Backend rejects requests without proper authorization headers

---

## 🚫 OUT OF SCOPE

- **Phase 2 Implementation:** This specification covers current feature; Phase 2 enhancements TBD
- **Real-time Analytics:** Detailed analytics dashboard not included; basic audit logs only
- **Custom Rate Limiting:** Fixed rates per tier; dynamic/custom limits out of scope
- **Multi-tenancy per Account:** Single tenant per customer account; cross-tenant sharing not included
- **Mobile Apps:** API credential management web interface only; mobile app future enhancement

---

## 📝 ASSUMPTIONS

1. **Authentication Service Exists:** External Auth Service is available and can manage scopes
2. **Backend Services Support Forwarding:** Backend services accept product/tier metadata in request headers
3. **Customer Email is Valid:** Email validation for onboarding journey works correctly
4. **API Keys are Long-lived:** No need for short-lived tokens for integration clients (only customer login tokens)
5. **Subscription Data is Accurate:** Subscription info in system is current and authoritative

---

## ⚠️ RISKS & MITIGATIONS

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **Scope Creep:** Feature becomes bloated with tier-specific logic | High | Enforce strict scope definition; defer tier customization to Phase 2 |
| **Auth Service Unavailability:** Scope validation fails if Auth Service down | High | Implement caching of scopes; fallback to cached scopes for 5 min |
| **Credential Leak:** API key/secret exposed in logs or error messages | Critical | Mask secrets in logs; never return full secret after initial generation |
| **Scope Bypass:** Customer credentials crafted to bypass scope validation | Critical | Validate signature on credentials; implement cryptographic verification |
| **Backend Service Misconfiguration:** Wrong backend called for API product | High | Implement backend URL validation; test routing for each product |
| **Rate Limit Exhaustion:** Legitimate customers hit rate limit | Medium | Implement grace period; allow customer to request tier upgrade |

---

## 🔗 TRACEABILITY

### Requirements to Acceptance Criteria
- BR1 (Onboarding) → AC3 (Client Management)
- BR2 (Credentials) → AC3 (Client Management)
- BR3 (Scopes) → AC3 (Client Management)
- BR4 (Subscriptions) → AC2 (Subscription Forwarding)
- BR5 (Backend Integration) → AC1 (Backend Routing)
- BR6 (Client Management) → AC3 (Client Management) + AC4 (Internal API Protection)

### Acceptance Criteria to User Stories
- AC1 → US1, US3
- AC2 → US3
- AC3 → US1, US2
- AC4 → US5

### User Stories to Test Scenarios
- US1 → TS1 (happy path), TS2 (scope validation), TS6 (multiple clients)
- US2 → TS4 (credential rotation)
- US3 → TS1 (happy path), TS2 (scope violation), TS5 (internal protection)
- US4 → TS1 (subscription tier), TS3 (subscription validation)
- US5 → TS5 (internal API protection)

---

## 📌 SPECIFICATION STATUS

| Phase | Status | Notes |
|-------|--------|-------|
| Requirements Analysis | ✅ Complete | 12-phase analysis completed |
| Specification | ✅ Complete | This document |
| Test Case Generation | ⏳ Pending | Next phase: generate test cases from this spec |
| Work Item Creation | ⏳ Pending | Awaiting test case approval |
| Development | ⏳ Not Started | Feature already closed (completed) |
| Testing | ⏳ Not Started | Retroactive validation of completed feature |

---

**Specification created: 5/29/2026**
**Reviewed by:** AI Assistant (GitHub Copilot)
**Status:** ✅ DRAFT - Ready for Test Case Generation
