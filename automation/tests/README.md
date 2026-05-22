# Tests Directory

## Purpose
Test specifications (Layer 1 & 2) - Feature files and step definitions.

## Subdirectories

### features/
Layer 1: Gherkin feature files (business language)

**Structure:**
```
features/
├── feature-001-login/
│   ├── login-positive.feature
│   ├── login-negative.feature
│   ├── login-edge-cases.feature
│   └── login-rate-limit.feature
├── feature-002-dashboard/
│   ├── dashboard-navigation.feature
│   └── dashboard-widgets.feature
└── feature-003-reports/
    ├── report-generation.feature
    └── report-export.feature
```

### step_definitions/
Layer 2: Step definitions (glue layer & orchestration)

**Structure:**
```
step_definitions/
├── feature-001-login-steps.js
├── feature-002-dashboard-steps.js
├── feature-003-reports-steps.js
├── common-steps.js              (Shared steps)
└── api-integration-steps.js     (API-specific steps)
```

## Feature File Guidelines

✅ DO
- Write in Gherkin syntax (Given-When-Then)
- Use business language
- One feature per file
- Tag scenarios appropriately
- Keep scenarios independent

❌ DON'T
- NO technical implementation details
- NO hardcoded values
- NO assertions in Gherkin
- NO dependencies between scenarios

## Feature File Template

```gherkin
@feature-001 @smoke @positive
Feature: User Login

  Background:
    Given User is on login page

  Scenario: Login with valid credentials
    When User enters valid username
    And User enters valid password
    And User clicks sign in
    Then User is redirected to dashboard
    And Dashboard title is visible

  @negative
  Scenario: Login with invalid password
    When User enters valid username
    And User enters invalid password
    And User clicks sign in
    Then Error message appears
    And User stays on login page
```

## Step Definition Guidelines

✅ DO
- Map Gherkin steps to actions
- Call page objects (not selectors)
- Add assertions in Then steps
- Store test data in context (t.ctx)
- Handle asynchronous operations

❌ DON'T
- NO page selectors here
- NO hardcoded values
- NO complex business logic
- NO duplicate steps

## Step Definition Template

```javascript
// tests/step_definitions/feature-001-login-steps.js

import { Given, When, Then } from '@evision/testing-framework-core/cucumber';
import { assert } from '@evision/testing-framework-core/utils/assertions';
import loginPage from '../../pages/auth/loginPage';
import dashboardPage from '../../pages/dashboard/dashboardPage';
import config from '../../config';

Given('User is on login page', async () => {
    await loginPage.navigateTo();
    assert(await loginPage.isDisplayed(), 'Login page should be visible');
});

When('User enters valid username', async function() {
    await loginPage.enterUsername(config.authCredentials.username);
});

When('User enters valid password', async function() {
    await loginPage.enterPassword(config.authCredentials.password);
});

When('User clicks sign in', async () => {
    await loginPage.clickSignIn();
});

Then('User is redirected to dashboard', async () => {
    assert(await dashboardPage.isDisplayed(), 'Dashboard should be visible');
});
```

## Tagging Convention

```gherkin
@feature-001          # Feature identifier
@smoke                # Test category (smoke, regression, etc.)
@positive             # Scenario type (positive, negative, edge-case)
@integration          # Test type (integration, api, ui, e2e)
@rate-limit           # Specific concern
@slow                 # Performance indicator
```

**Execution:**
```bash
npm test -- --tags "@feature-001,@smoke"
npm test -- --tags "@integration"
npm test -- --tags "~@slow"
```
