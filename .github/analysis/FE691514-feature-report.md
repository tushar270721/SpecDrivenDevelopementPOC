# Feature Report: FE#691514

**Generated:** 6/5/2026, 5:28:17 PM

## Metadata

| Property | Value |
|---|---|
| ID | 691514 |
| Title | 3 API Custom handler development (redirect to right backend) |
| State | Closed |
| Priority | 2 |
| Type | Feature |
| Assigned To | Nicolas, Julien |
| Created | 9/25/2025, 8:07:03 AM |
| Updated | 1/5/2026, 2:48:06 PM |
| URL | https://dev.azure.com/enablon/7977ed3d-15c4-4782-b1f7-d1f70660ff0c/_apis/wit/workItems/691514 |

## Description

### User Story

- **As a** Product Engineer,
**I want to** create a custom handler for requests made from the API management layer to the backend service APIs
****so that** I** can redirect the requests as needed to the right customer platform, without tying them to a single URL (especially in the context of single-tenant customers)
**Description**
- Needs to incorporate the versions/subscriptions inside the logic of the custom handler
- fix an issue with the limits that are introduced dynamically
- was originally created as a web app, but could be better as a container app or Azure function
- only APIm should be able to call that custom handler, no one else.
- monitoring and logging to be able to trace the request end-to-end
- URL needs to be constructed from the domain URI + endpoint address
- When calling the backend API, we need to know the scopes required by that API endoint. Would be part of the API product configuration to tell the system what is needed to make the call
Checks that we want to perform:
- Tenant Validation
- Subscription validation
- Connect to the Authentication Service
Failure Behavior? How should the system react ?
- Handling generic responses (limit exceeded, bad format, etc.) shoud be done as the APIm level and stay generic **so that** applications don't have to worry about it
https://enablon.atlassian.net/wiki/spaces/Architecture/pages/135511965785/Web+API+Development+Guidelines#Error-Responses
- Return the limits and the quotas based on the configuration, provide them to APIm (APIm checks it)
- Need to have it load-tested in isolation (APIm volumetry handling, regardless of backend)
------------------------------------------------------------------------------------------
Requests made to the API management service undergo inbound transformations, then are forwarded to a backend URL (generally a private API on a specific server).
Typically, the target backend URL is managed directly in APIm, but we do not do this, because
- we don't want to introduce deep dependencies on a specific service provider
- we want to be able to route requests as needed
Instead, we are implementing a custom handler which will re-route the request to the right environment. It should work for both multitenant environments managed on our Azure subscription, and for public cloud single-tenant environments managed on our Azure subscription.
Note: The job size of 2 was based on a generic custom handler that does not include EHS-specific needs, such as splitting data, avoiding timeouts, etc. This would need to be handled as a dedicated EHS feature, with either a custom custom handler or a dedicated service.
**User value**
*Products will be able to create APIs in their API Products, that are forwarded to the right backend platform able to answer that request.*

## Acceptance Criteria

An incoming request should be automatically checked against the customer's own authentication service based on the tenant Id in order to be authenticated, using a client application in the AuthSvc If authenticated, the request should be authorized based on the customer's current entitlement status (APIm entitled, API product & subscription entitled within APIm options) Any limits and quotas defined should be provided to APIm for checking - If authorized, the request should be forwarded to the right internal product backend URL, whether multitenant or single-tenant, with the necessary scopes to call that URL endpoint

## Comments (1)

### Comment 1
**By:** EU-s-productboard
**Date:** 9/25/2025, 8:07:03 AM

Productboard referencehttps://enablon.productboard.com/entity-detail/features/b4418056-208c-4d84-931e-0140c2803b12

