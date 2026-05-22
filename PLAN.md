# Plan.md - Developer & QA Implementation Strategy

## 📋 Document Structure

This document bridges **Developer** and **QA** responsibilities for SDD implementation:

| Section | Owner | Purpose |
|---------|-------|----------|
| **PART 1** | **DEVELOPERS & PROJECT TEAM** | Define tech stack and architecture decisions |
| **PART 2** | **QA TEAM** | Define testing strategy and implementation approach |

---

## 🧑‍💻 PART 1: DEVELOPER & PROJECT TEAM DECISIONS

### Technology Stack & Architecture (Defined by Development Team)

# 🏗️ PART 1: PROJECT IMPLEMENTATION DECISIONS (Team-Defined)







---

## 🧪 PART 2: QA IMPLEMENTATION STRATEGY

### Testing & Quality Approach (Defined by QA Team)

# 🚀 PART 2: QA SDD IMPLEMENTATION STRATEGY (Project-Wide)

## 1. Technology Stack (THIS PROJECT)

### Core Testing Framework

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **Test Framework** | TestCafe | Latest | Browser automation and test execution |
| **BDD Framework** | Cucumber | Latest | Gherkin syntax, behavior-driven tests |
| **Test Runner** | @evision/testing-framework-core | Latest | Custom test runner and utilities |
| **Language** | JavaScript ES6+ | - | Test code implementation language |
| **Assertions** | @evision/testing-framework-core | Latest | Built-in assertion library |
| **Reporting** | Cucumber JSON + HTML | Latest | Test execution reports |

### Page Object Model Framework

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| **UI Components** | @evision/testing-framework-core/components | Latest | Predefined UI element types |
| **Selectors** | TestCafe Selector API | Latest | Complex element selection |
| **Element Types** | Button, Input, Label, Dropdown, Table | Latest | Reusable UI components |

### Supporting Tools

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Package Manager** | npm | Dependency management |
| **Version Control** | Git | Code version control |
| **CI/CD** | GitHub Actions | Automated test execution |
| **Test Data** | Fixtures + Factories | Test data generation |
| **Config Management** | config.js | Environment-specific settings |

---

## 2. Test Architecture (3-Layer Model)

### Architecture Pattern

```
┌─────────────────────────────────────┐
│      Feature Files (.feature)       │ Layer 1: Business Language
│  (Gherkin: Given-When-Then)         │
└────────────────┬────────────────────┘
                 │ Maps to / Calls
                 ↓
┌─────────────────────────────────────┐
│   Step Definitions (.js)            │ Layer 2: Glue Layer
│  (Test Orchestration)               │
└────────────────┬────────────────────┘
                 │ Uses / Interacts with
                 ↓
┌─────────────────────────────────────┐
│  Page Objects & Components (.js)    │ Layer 3: Implementation
│  - UI Element Definitions           │
│  - Page Methods, Utilities          │
└─────────────────────────────────────┘
```

### File Organization

```
automation/
├── tests/
│   ├── features/                           # Layer 1: Business Language (Gherkin)
│   │   ├── feature-001-login/
│   │   │   ├── login-positive.feature
│   │   │   ├── login-negative.feature
│   │   │   ├── login-edge-cases.feature
│   │   │   └── login-rate-limit.feature
│   │   ├── feature-002-dashboard/
│   │   └── feature-003-reports/
│   │
│   └── step_definitions/                   # Layer 2: Orchestration (Glue Layer)
│       ├── feature-001-login-steps.js
│       ├── feature-002-dashboard-steps.js
│       ├── common-steps.js
│       └── api-integration-steps.js
│
├── pages/                                   # Layer 3: UI Implementation
│   ├── auth/
│   │   ├── loginPage.js
│   │   ├── forgotPasswordPage.js
│   │   └── twoFactorPage.js
│   ├── dashboard/
│   │   ├── dashboardPage.js
│   │   └── navigationMenu.js
│   └── reports/
│       ├── reportPage.js
│       └── reportFilters.js
│
├── pageComponents/                         # Reusable UI Components
│   ├── modals/
│   │   ├── confirmationModal.js
│   │   └── datePickerModal.js
│   ├── forms/
│   │   ├── loginForm.js
│   │   └── searchForm.js
│   └── tables/
│       └── dataTable.js
│
├── api/                                    # API Testing Layer
│   ├── baseApi.js
│   ├── authApi.js
│   ├── dashboardApi.js
│   └── reportsApi.js
│
├── fixtures/                               # Test Data
│   ├── feature-001-login-data.js
│   ├── feature-002-dashboard-data.js
│   └── commonTestData.js
│
├── utils/                                  # Reusable Utilities
│   ├── authUtil.js                         # Auth helpers
│   ├── dataUtil.js                         # Data generation, transformation
│   ├── rateLimitUtil.js                    # Rate limit validation
│   ├── waitUtil.js                         # Conditional waits (NO hardcoded waits)
│   └── assertionUtil.js                    # Custom assertions
│
├── constants/                              # Configuration Constants
│   ├── environments.js                     # Environment URLs
│   ├── timeouts.js                         # Timeout values
│   ├── testData.js                         # Predefined test data
│   └── messages.js                         # Expected messages/errors
│
├── config.js                               # Main Configuration
├── .testcaferc.json                        # TestCafe Configuration
├── .eslintrc.js                            # Code Quality
├── package.json
└── .gitignore
```

---

## 3. Testing Strategy (Feature-Driven)

### Core Principle
**Test scope determined by feature requirements, NOT by fixed percentages.**

### Test Scope Determination

For **EACH FEATURE**, determine required tests by answering:

1. **What are the critical user workflows?** 
   → Determines E2E test count

2. **What APIs/databases are involved?** 
   → Determines Integration/API test count

3. **What are the edge cases?** 
   → Determines Edge Case test count

4. **What rate limits exist?** 
   → Determines Rate Limit test count

### Test Scope Examples

#### Example 1: Simple UI Feature (Login Screen)
```
Feature: User Login
- 2 E2E tests (happy path + error path)
- 1 Integration test (API authentication)
- 3 Edge case tests (empty fields, special chars, rate limit)
Total: 6 tests
Ratio: 1 API, 5 UI (mostly UI - simple feature)
```

#### Example 2: Medium Feature (Shopping Cart)
```
Feature: Shopping Cart
- 4 E2E tests (add, remove, checkout, discount)
- 3 Integration tests (inventory, pricing, payment APIs)
- 2 Edge case tests (decimals, bulk quantities)
- 1 Rate limit test (add 100 items/min)
Total: 10 tests
Ratio: 4 API, 6 UI (balanced - mixed concerns)
```

#### Example 3: Complex API Feature (Data Sync)
```
Feature: Real-time Data Sync
- 2 E2E tests (verify UI updates after sync)
- 6 Integration tests (sync API, conflict resolution, retry)
- 3 Edge case tests (network loss, timeout, partial sync)
- 2 Rate limit tests (sync frequency, batch size)
Total: 13 tests
Ratio: 11 API, 2 UI (mostly API - data-driven feature)
```

### Test Coverage Requirements

| Metric | Requirement | Rationale |
|--------|-----------|-----------|
| **Code Coverage** | ≥90% of new code | Catch bugs early |
| **AC Coverage** | 100% of acceptance criteria | Every AC must have tests |
| **Edge Case Coverage** | All identified edge cases | Prevent production issues |
| **Error Scenario Coverage** | All documented errors | Ensure graceful degradation |
| **Rate Limit Coverage** | All APIs tested | Prevent abuse, ensure reliability |

---

## 4. API Testing Strategy

### Mandatory for ALL APIs

1. **Success Scenarios**
   - Valid request → 200/201 response
   - Response structure matches contract
   - All required fields present

2. **Error Scenarios**
   - Invalid input → 400
   - Unauthorized → 401
   - Forbidden → 403
   - Not found → 404
   - Server error → 500/502/503

3. **Rate Limiting** (Mandatory)
   - Normal load: Requests succeed
   - At limit: Request succeeds but at threshold
   - Over limit: 429 Too Many Requests
   - Retry-After: Header present and valid
   - Graceful degradation: Client handles backoff

4. **Data Validation**
   - Response structure matches contract
   - Data types correct
   - Required fields present
   - Optional fields can be null

### Rate Limit Testing (Code Example)

```javascript
// Test: Check rate limit on API
async function testRateLimiting() {
  // Setup: Understand rate limit rules (e.g., 50 req/min)
  const RATE_LIMIT = 50;
  const TIME_WINDOW = 60; // seconds
  
  // Test 1: Normal usage (under limit)
  for (let i = 0; i < RATE_LIMIT - 5; i++) {
    const response = await apiCall();
    assert(response.status === 200);
  }
  
  // Test 2: At limit boundary
  const response = await apiCall();
  assert(response.status === 200);
  
  // Test 3: Over limit
  const overLimitResponse = await apiCall();
  assert(overLimitResponse.status === 429);
  assert(overLimitResponse.headers['retry-after']);
  
  // Test 4: Retry after backoff
  const retryAfter = parseInt(overLimitResponse.headers['retry-after']);
  await wait(retryAfter * 1000);
  const retryResponse = await apiCall();
  assert(retryResponse.status === 200);
}
```

---

## 5. UI Testing Strategy

### Scope: Critical Workflows Only

- ✅ Critical user journeys (login, purchase, data entry)
- ✅ Core functionality
- ✅ Error scenarios
- ✅ Edge cases
- ❌ Not every page, not every button

### Selector Standards

- ✅ Use stable: `id`, `data-testid`, unique class names
- ✅ Use TestCafe Selector API for complex queries
- ❌ Avoid unstable: XPath, text content, positional indexes

### Wait Standards

- ✅ Condition-based: Wait for element to exist
- ✅ Use framework: `waitUntilComponentIsExisting()`
- ❌ Never hardcoded waits: No `t.wait(5000)`

### Assertion Standards

- ✅ Meaningful messages: "Login button should be enabled"
- ✅ Business language: Describe user perspective
- ❌ Avoid generic: "Element found", "Value correct"

---

## 6. Test Environment

### Environment Configuration

| Environment | URL | Purpose | Browser |
|-------------|-----|---------|---------|
| **Daily** | https://enablon-ovp-auth-id-linux-daily.pv.dev.evision.io | Development | Chrome |
| **Staging** | https://staging-envision.evision.io | Pre-release | Chrome, Firefox |
| **Production** | https://production.evision.io | Smoke tests only | Chrome |

### Configuration Management

```
config.js
├── Environment-specific values
│   ├── BASE_URL
│   ├── API_ENDPOINT
│   └── TIMEOUT_VALUES
│
├── Test settings
│   ├── Browser type
│   ├── Parallel execution count
│   └── Screenshot on failure
│
└── Never hardcode
    ├── URLs → Use config.js
    ├── Credentials → Use environment variables
    ├── Timeouts → Use constants
    └── Secrets → Use environment variables
```

---

## 7. Test Execution Modes

### Mode 1: Feature-Only (RECOMMENDED)
- **Scope**: Only tests for current feature
- **Duration**: 5-10 minutes
- **When**: During feature development
- **Command**: `npm run test -- feature-{id}-tests.js`

### Mode 2: Full Regression (for Release)
- **Scope**: All feature tests
- **Duration**: 20-30 minutes
- **When**: Before release, major updates
- **Command**: `npm run test -- feature-*-tests.js`

### Mode 3: Specific Test Suite
- **Scope**: Tests matching pattern
- **Duration**: Variable
- **When**: Testing specific component
- **Command**: `npm run test -- --tags @tag-name`

### Test Tagging Convention

```gherkin
@feature-001 @positive @smoke
Scenario: User logs in with valid credentials

@feature-001 @negative @edge-case
Scenario: User sees error with invalid credentials

@feature-001 @rate-limit @integration
Scenario: Login API respects rate limiting
```

---

## 8. Reporting & Artifacts

### Reports Generated

| Report | Format | Location | Content |
|--------|--------|----------|---------|
| **Execution** | HTML | `reports/test-report-{date}-{feature-id}.html` | Pass/Fail, duration, metrics |
| **Details** | Markdown | `reports/test-report-{date}-{feature-id}.md` | Steps, errors, links |
| **Screenshots** | PNG | `artifacts/screenshots/` | Failure evidence |
| **Logs** | JSON | `artifacts/logs/` | Detailed output |

### Report Contents

1. **Summary**
   - Feature ID, Test scope, Total/Passed/Failed
   - Pass rate %, Execution duration

2. **Metrics**
   - Pass rate by category (E2E, Integration, API)
   - Slowest/fastest tests
   - Execution timeline

3. **Failed Test Details**
   - Test name, failure message
   - Screenshot of failure
   - Step where failure occurred

4. **Traceability**
   - Links to Azure test cases
   - Links to specification
   - Links to acceptance criteria

---

## 9. CI/CD Pipeline

### GitHub Actions Workflow

| Trigger | Stage | Action | Duration |
|---------|-------|--------|----------|
| **Pull Request** | 1. Code Review | Run automated code review | 5 min |
| | 2. Lint | Syntax and style checks | 2 min |
| | 3. Feature Tests | Run feature-specific tests | 10 min |
| **Merge to main** | 1. Full Regression | Run all tests | 30 min |
| | 2. Generate Report | Create reports | 5 min |
| | 3. Link Results | Link to Azure DevOps | 2 min |
| **Nightly (10 PM)** | 1. Full Regression | Run all tests | 30 min |
| | 2. Email Report | Send to team | 1 min |

### Test Blocking Rules

Tests **BLOCK merge** if:
- ❌ Any CRITICAL test fails
- ❌ Code coverage < 90%
- ❌ Code review violations exist

Tests **WARN but don't block** if:
- ⚠️ Any HIGH test fails
- ⚠️ Code coverage 85-90%

---

## 10. Implementation Checklist

Before starting automation for a feature:

- [ ] Feature SPECIFICATION.md created
- [ ] Acceptance criteria finalized
- [ ] Test scenarios documented
- [ ] Test data prepared
- [ ] Edge cases identified
- [ ] Rate limit requirements known
- [ ] Test environment accessible
- [ ] Team has framework knowledge
- [ ] Azure DevOps test case IDs assigned
- [ ] Page objects for screens exist

---

## Success Criteria

Implementation succeeds when:
- ✅ All feature tests pass
- ✅ Code coverage ≥90%
- ✅ All acceptance criteria covered
- ✅ All rate limits validated
- ✅ All tests linked to Azure DevOps
- ✅ Reports generated and shared

---

**Last Updated**: May 22, 2026  
**Next Review**: August 22, 2026  
**Owner**: QA Team  
**Status**: Active
