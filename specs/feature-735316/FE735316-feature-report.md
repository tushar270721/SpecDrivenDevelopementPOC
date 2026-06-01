# Feature Report: FE#735316

**Generated:** 6/1/2026

## Metadata

| Property | Value |
|---|---|
| ID | 735316 |
| Title | [APIm] 6 API Consumer and Scope Management |
| State | Closed |
| Priority | 2 |
| Type | Feature |
| Assigned To | Nicolas, Julien |
| Created | 11/25/2025 |
| Updated | 3/11/2026 |

## Description

### User Story

As a services or support lead, I want to manage API consumers and their access levels, so that I can provide tailored support and enforce SLAs.

**Description:**
This feature introduces consumer onboarding workflows, access provisioning (API keys, OAuth), and support tier definitions. It also includes feedback and issue tracking mechanisms.

**User Value:**
Improves consumer satisfaction and ensures secure, controlled access to APIs.

### Onboarding with Credentials

As a customer, when I set up an integration of the Directory with Workday, I want the Workday middleware to have only access to the "Directory APIs" product, and not to the "Incident & Impacts Export API" product.

**Key Requirement:** As a customer, I need to be able to generate client application credentials that have a specific scope of "API products" that they can call.

This means we need to validate, in addition to the subscription, that the specific credentials have access to the API Product. This is assigned by a customer as a specific scope:

- The scope required to call an external API is 'api-{api-product-name}', which is an external scope that customers can select
- Assumption: Client manages the client application in the Authentication Service
- Authentication Service has access to a list of the existing API Product subscriptions for that customer
- The list of available scopes doesn't necessarily have to be filtered at first
- When introducing a new API product, pipelines must make the scopes available in the Auth list

**Technical Requirements:**
- Token exchange endpoint availability with Auth Service
- Location of scope list
- CI-CD capability to push api-xxx scopes when API product yaml is published
- Runtime initialization when new auth is deployed

### Customer Validation Flow

When a request comes in (with a tenant id):
- Validate the product is associated with the tenant (they must have it provisioned)
- Check the relevant authority for that tenant (which auth service)
- Validate on the corresponding authentication service that the client application has the proper scope (scope: api-something)
- Validate the rules based on the subscription associated with the tenant for that product
- Apply reject rule, throttling, quota

### Implementation Includes

**API "user" onboarding journey:**
- Initial email linked to the APIm registration OR read-only page with credentials
- How to setup and control APIs on their end
- Test it works functionality
- Subscription mechanisms to ensure customer has access only to entitled APIs
- Role in authentication service for azure apim credentials manager

## Acceptance Criteria

### AC-1: API Consumer Registration and Management

- System Administrator should be able to register and manage a list of integration clients within their platform
- System should forward the query to the right backend, even if the backend service was already entitled

### AC-2: API Product Access Control

- Customers should be able to allocate rights to use specific API products individually
- System should have the ability to forward the API product & subscription tier information to the backend through different backendURL properties

### AC-3: Integration Client Credentials Management

- Customers should be able to add, manage, retire, change secrets for each integration client
- System should support credential lifecycle management

### AC-4: Backend API Protection

- Customers should NOT be able to call backend APIs designed exclusively for APIm use
- Backend API responsibility is to verify the internal claim token

## Comments

**Productboard Reference:**
https://enablon.productboard.com/entity-detail/features/74cb9fd3-73da-4214-b98d-3f94ff99c739
