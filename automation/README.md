# Automation Test Suite - QA SDD POC

**3-Layer Page Object Model with TestCafe + Cucumber**

## Overview

This is a production-grade automation test framework implementing the 3-layer architecture pattern:
- **Layer 1**: Gherkin feature files (business language)
- **Layer 2**: Step definitions (test orchestration)
- **Layer 3**: Page objects & components (UI implementation)

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd automation
npm install
```

### Running Tests

```bash
# Run all tests
npm test

# Run smoke tests only
npm run test:smoke

# Run specific feature
npm run test:feature-001

# Run with debugging
npm run debug

# Generate reports
npm run report
```

## Project Structure

```
automation/
├── tests/                          # Test execution layer
│   ├── features/                   # Layer 1: Gherkin scenarios
│   └── step_definitions/           # Layer 2: Step implementations
├── pages/                          # Layer 3: Page objects
├── pageComponents/                 # Reusable UI components
├── api/                            # API testing classes
├── fixtures/                       # Test data
├── utils/                          # Shared utilities
├── constants/                      # Constants & configuration
├── artifacts/                      # Screenshots & logs
├── reports/                        # Test reports
├── config.js                       # Main configuration
└── package.json
```

## Architecture Patterns

### ✅ DO
- ✅ Use stable selectors (id, data-testid, unique classes)
- ✅ Keep assertions in step definitions only
- ✅ Use configuration for all values
- ✅ Use condition-based waits (no t.wait(5000))
- ✅ Tag tests for filtering (@smoke, @feature-001, etc.)
- ✅ Validate rate limits for all APIs

### ❌ DON'T
- ❌ No assertions in page objects
- ❌ No business logic in page objects
- ❌ No hardcoded values (URLs, credentials, timeouts)
- ❌ No hardcoded waits (t.wait is forbidden)
- ❌ No XPath or text-based selectors
- ❌ No test data in code

## Environment Setup

Set environment variables for your target:

```bash
# .env file
TARGET_ENVIRONMENT=local
TEST_USERNAME=testuser
TEST_PASSWORD=Test@12345
AZDO_ENABLED=false
```

**Available environments**: local, development, staging, production

## Tagging Convention

```gherkin
@feature-001 @smoke @positive
Scenario: Login with valid credentials

@feature-001 @negative @edge-case
Scenario: Login with invalid password

@feature-001 @rate-limit @integration
Scenario: Login API respects rate limiting
```

## Test Execution Modes

| Mode | Command | Duration | When |
|------|---------|----------|------|
| Smoke | `npm run test:smoke` | 5-10 min | Quick validation |
| Feature | `npm run test:feature-001` | 5-10 min | Feature development |
| Full Regression | `npm test` | 20-30 min | Before release |
| Debug | `npm run debug` | Manual | Debugging tests |

## Configuration

All configuration managed in `config.js`:
- Base URLs per environment
- Timeout settings
- Browser configuration
- Authentication credentials
- Azure DevOps integration
- Feature flags

**Never hardcode values!** Use config.js or environment variables.

## Writing Tests

### 1. Create Feature File
```gherkin
# tests/features/feature-001-login/login-positive.feature

@feature-001 @smoke @positive
Feature: User Login
  
  Scenario: User logs in with valid credentials
    Given User is on login page
    When User enters valid credentials
    And User clicks sign in button
    Then User is redirected to dashboard
```

### 2. Create Page Object
```javascript
// pages/auth/loginPage.js

import { BaseComponent, Button, Input } from '@evision/testing-framework-core/components';

class LoginPage extends BaseComponent {
    constructor() {
        super('#main', 'Login', 'Page', null);
        this.usernameInput = new Input('#username', 'Username', this);
        this.passwordInput = new Input('#password', 'Password', this);
        this.signInButton = new Button('[name="signIn"]', 'Sign In', this);
    }

    async enterUsername(username) {
        await this.usernameInput.sendKeys(username);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }
}

export default new LoginPage();
```

### 3. Create Step Definition
```javascript
// tests/step_definitions/feature-001-login-steps.js

import { Given, When, Then } from '@evision/testing-framework-core/cucumber';
import { assert } from '@evision/testing-framework-core/utils/assertions';
import loginPage from '../../pages/auth/loginPage';
import config from '../../config';

When('User enters valid credentials', async function() {
    await loginPage.enterUsername(config.authCredentials.username);
    await loginPage.enterPassword(config.authCredentials.password);
});

Then('User is redirected to dashboard', async function() {
    assert(await dashboardPage.isDisplayed(), 'Dashboard should be visible');
});
```

## API Testing

For API-only tests, use the `api/` layer:

```javascript
// api/authApi.js
import { BaseApiEndpoint } from '@evision/testing-framework-core/api';

class AuthApi extends BaseApiEndpoint {
    async login(credentials) {
        return await this.post('/auth/login', {
            data: credentials,
            validateStatus: false,
        });
    }
}
```

## Rate Limit Testing

All APIs must validate rate limiting:

```javascript
// Step definition with rate limit validation
Then('Login API respects rate limiting', async function() {
    // Make 50 requests in quick succession
    for (let i = 0; i < 50; i++) {
        const response = await authApi.login(credentials);
        assert(response.status === 200, 'Request should succeed');
    }
    
    // Next request should be rate limited
    const overLimit = await authApi.login(credentials);
    assert(overLimit.status === 429, 'Should return 429 Too Many Requests');
    assert(overLimit.headers['retry-after'], 'Should have Retry-After header');
});
```

## Reporting

Reports generated in `reports/` directory after test execution:

```bash
npm run report
```

Reports include:
- Summary (Pass/Fail count, duration)
- Metrics (Pass rate, execution timeline)
- Failed test details with screenshots
- Links to acceptance criteria

## CI/CD Integration

Tests are executed in GitHub Actions on:
- Pull requests
- Merge to main
- Scheduled nightly runs

See `.github/workflows/` for configuration.

## Troubleshooting

### Tests not running
```bash
# Verify dependencies installed
npm install

# Check for syntax errors
npm run lint

# Run with verbose output
npm test -- --verbose
```

### Timeout errors
- Increase elementTimeout or pageLoadTimeout in config.js
- Check if elements have stable selectors
- Add explicit waits in step definitions

### Selector not found
- Use browser devtools to verify selector
- Use data-testid attributes if available
- Consider using TestCafe Selector API for complex queries

## Documentation

- [PLAN.md](../PLAN.md) - Implementation strategy and tech stack
- [CONSTITUTION.md](../CONSTITUTION.md) - QA governance principles
- Feature specifications in `specs/feature-*/SPECIFICATION.md`

## Support

For questions or issues:
1. Check the [PLAN.md](../PLAN.md) documentation
2. Review existing tests for patterns
3. Consult the reference materials in `.github/reference/`

---

**Last Updated**: May 22, 2026  
**Owner**: QA Team  
**Status**: Foundation Ready
