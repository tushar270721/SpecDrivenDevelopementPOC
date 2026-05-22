# Constitution.md - QA SDD Project Governance

---

# 🏗️ PART 1: DEVELOPMENT PRINCIPLES (Team-Defined)





---

# 🧪 PART 2: QA GOVERNANCE STANDARDS (Project-Wide)

## 1. Testing Philosophy

- ✅ **Spec-first development**: Specifications drive tests, not the other way around
- ✅ **Test-driven quality**: Tests created before or during development
- ✅ **Feature-focused testing**: Each feature tested comprehensively per its requirements
- ✅ **No percentage targets**: Test scope determined by feature complexity, not fixed ratios
- ✅ **Quality over quantity**: One meaningful test better than ten meaningless ones

---

## 2. Quality Principles (QA Focus)

- ✅ **Code quality**: Standards from quest_copilot must be met
  - Page Object Model enforced
  - Layer separation enforced
  - No anti-patterns allowed
  
- ✅ **Test quality**: 
  - Meaningful assertions with clear error messages
  - Clear scenarios with Given-When-Then structure
  - Independent tests (can run in any order)
  
- ✅ **Traceability**: Every test must link back to a requirement
  - Feature → SPECIFICATION.md → Test Case → Automation Test
  - Azure DevOps IDs tracked at each level
  
- ✅ **Maintainability**: 
  - DRY (Don't Repeat Yourself): No duplicate test logic
  - Reusable page objects and components
  - Clear naming conventions

---

## 3. Testing Standards (Framework-Agnostic)

### Test Type Requirements

| Test Type | Requirement | When Required |
|-----------|------------|---------------|
| **Unit Tests** | Required for all new code | Every new function/method |
| **Integration Tests** | Required for API/DB interactions | API calls, database operations |
| **E2E Tests** | Required for critical workflows | Important user journeys |
| **Code Coverage** | Minimum 90% for new code | Before PR merge |

### Coverage Definition

- **Line Coverage**: 90% of code lines executed in tests
- **Branch Coverage**: 90% of conditional branches tested
- **Feature Coverage**: 100% of acceptance criteria have tests

---

## 4. QA Governance Rules (from quest_copilot)

### Mandatory Patterns

✅ **Page Object Model (POM)**
- All UI elements defined in page objects
- No raw selectors in test code
- Reusable components for common patterns

✅ **Layer Separation (3-Layer Architecture)**
- **Feature Files** (.feature): Business scenarios in Gherkin
- **Step Definitions** (.js): Glue layer connecting Gherkin to page objects
- **Page Objects**: UI elements and interactions

✅ **Assertion Standards**
- Assertions ONLY in step definitions (Then steps)
- Never in page objects or utilities
- Every assertion must have a meaningful error message

✅ **Selector Standards**
- Preferred: `id`, `data-testid`, stable class names
- Avoid: XPath, text-based, index-based selectors
- Use TestCafe Selector API for complex selections

### Mandatory Validations

✅ **Rate Limiting Validation** (for all APIs)
- Validate 429 (Too Many Requests) responses
- Check Retry-After header presence
- Test graceful degradation under rate limit

✅ **Error Handling Validation**
- Test 4xx error scenarios (400, 401, 403, 404)
- Test 5xx error scenarios (500, 502, 503)
- Test timeout scenarios

✅ **Data Validation**
- Response structure matches contract
- Data types correct
- Required fields present

---

## 5. Quality Checklist (All Features, All Projects)

**This checklist must be completed for EVERY feature before testing:**

### Requirements Review
- [ ] Acceptance criteria clear and testable (no ambiguity)
- [ ] Test scenarios derived from acceptance criteria
- [ ] Edge cases identified and documented
- [ ] Dependencies on other features identified
- [ ] Data requirements documented

### API Requirements (if applicable)
- [ ] API endpoints documented
- [ ] Request/response contracts defined
- [ ] Rate limiting requirements documented
- [ ] Authentication/authorization requirements documented
- [ ] Error response formats documented

### Test Data Preparation
- [ ] Test data created and organized
- [ ] Sensitive data masked (no PII in tests)
- [ ] Test data cleanup procedures documented
- [ ] Edge case data prepared

### Security Review
- [ ] No hardcoded secrets in test data
- [ ] Authentication tested
- [ ] Authorization tested
- [ ] Input validation tested

### Accessibility Review (if UI feature)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG standards

---

## 6. Anti-Patterns (Prohibited Across All Projects)

### Code Anti-Patterns
- ❌ **Hardcoded waits**: Use framework's condition-based waits instead (`waitUntilComponentIsExisting`)
- ❌ **Hardcoded environment values**: Use `config.js` for all URLs, timeouts, settings
- ❌ **Test data in code**: Use fixtures and factories, not inline data
- ❌ **Duplicate test logic**: Refactor common patterns into utilities
- ❌ **Hardcoded secrets**: Use environment variables for credentials

### Architecture Anti-Patterns
- ❌ **Assertions in page objects**: Assertions belong ONLY in step definitions
- ❌ **UI selectors in step definitions**: Selectors belong in page objects
- ❌ **Business logic in tests**: Tests should call methods, not implement logic
- ❌ **Direct DOM access**: Use page object methods, not `document.getElementById`

### Test Anti-Patterns
- ❌ **Test interdependencies**: Tests must run independently
- ❌ **No error messages in assertions**: Every assertion needs context
- ❌ **Unclear test names**: Names must describe what is being tested
- ❌ **Missing rate limit validation**: All APIs must check rate limiting
- ❌ **No negative test coverage**: Test error cases, not just happy paths

---

## 7. Test Categories Definition

### By Test Type

**Positive Tests**
- Definition: Valid input, expected success scenario
- Expected: Test passes with successful result
- Example: Login with correct credentials → Success

**Negative Tests**
- Definition: Invalid input, error handling validation
- Expected: System handles error gracefully
- Example: Login with wrong password → Error message shown

**Edge Cases**
- Definition: Boundary conditions, special scenarios
- Expected: System handles edge cases correctly
- Example: Login with empty username → Validation error
- Example: Password exactly at character limit → Success

### By Test Scope

**Unit Tests**
- Definition: Test individual functions/methods
- Scope: Single function, isolated
- Example: `calculateDiscount()` with various inputs

**Integration Tests**
- Definition: Test component interactions, API calls, database operations
- Scope: Multiple components working together
- Example: API call → Response processing → Database storage

**End-to-End Tests**
- Definition: Test complete user workflows
- Scope: From user action to final result
- Example: User login → Browse items → Add to cart → Checkout

**API Tests**
- Definition: Test API endpoints directly
- Scope: Request validation, response validation, rate limiting
- Example: POST /api/users → Validate response structure

**Database Tests**
- Definition: Test data persistence and integrity
- Scope: Data creation, updates, queries
- Example: Create record → Query → Verify data

**Rate Limit Tests**
- Definition: Validate API rate limiting behavior
- Scope: Request throttling, retry logic
- Example: Send 100 requests in 1 minute → 429 received

---

## 8. Test Execution Standards

### Test Naming Convention
```
feature-{feature-id}-{test-type}-{test-scenario}.feature
feature-001-positive-login-with-valid-credentials.feature
feature-001-negative-login-with-invalid-password.feature
feature-001-edge-case-empty-username.feature
```

### Test Organization
```
tests/
├── features/
│   ├── feature-001/
│   │   ├── login-positive.feature
│   │   ├── login-negative.feature
│   │   └── login-edge-cases.feature
│   └── feature-002/
│       └── ...
├── step_definitions/
│   ├── feature-001-steps.js
│   ├── feature-002-steps.js
│   └── ...
└── page_objects/
    ├── feature-001-page.js
    ├── feature-002-page.js
    └── ...
```

### Test Execution Modes

**Feature-Only Mode** (Recommended for development)
- Execution time: 5-10 minutes
- Scope: Only new feature's tests
- When: During development, feature testing
- Command: `npm run test -- feature-{id}-tests.js`

**Full Regression Mode** (For releases)
- Execution time: 20-30 minutes
- Scope: All feature tests
- When: Before release, major updates
- Command: `npm run test -- feature-*-tests.js`

---

## 9. Quality Gates (Must Pass Before Merge)

| Gate | Condition | Action |
|------|-----------|--------|
| **Code Quality** | All code review checks pass | BLOCK if fails |
| **Test Coverage** | ≥90% code coverage | BLOCK if fails |
| **Unit Tests** | 100% pass | BLOCK if fails |
| **Integration Tests** | 100% pass | BLOCK if fails |
| **Security Scan** | No critical vulnerabilities | BLOCK if fails |
| **Spec Traceability** | All tests linked to requirements | BLOCK if fails |

---

## 10. Governance Enforcement

### Code Review Requirements
- ✅ All PRs must pass automated code review
- ✅ All PRs must have human approval
- ✅ All violations must be fixed before merge

### Test Requirements
- ✅ All new features must have tests
- ✅ Tests must pass before merge
- ✅ Code coverage must be ≥90%

### Documentation Requirements
- ✅ SPECIFICATION.md required for every feature
- ✅ Test cases documented in test-cases.md
- ✅ README.md updated if behavior changes

### Audit Trail
- ✅ Every test run logged with feature ID
- ✅ Test results linked to Azure DevOps
- ✅ Failures tracked with root cause
- ✅ Audit log maintained for compliance

---

## 11. Continuous Improvement

### Metrics Tracked
- Test pass rate (%) per feature
- Test execution time trends
- Code coverage trends
- Defect escape rate (bugs found in production)
- Test maintenance cost (changes needed per sprint)

### Review Cycle
- **Monthly**: Review test metrics and identify improvements
- **Quarterly**: Review automation strategy and update Plan.md
- **Annually**: Review Constitution.md and update principles

### Feedback Loop
- Developers → QA: Report test maintenance issues
- QA → Developers: Report test coverage gaps
- Team → Architecture: Recommend framework upgrades

---

## 12. Contact & Escalation

**Questions about Constitution?** → Technical Lead  
**Questions about specific feature testing?** → QA Engineer  
**Questions about framework/tools?** → QA Architect  
**Process improvements?** → Team Meeting (Monthly Review)

---

**Last Updated**: May 22, 2026  
**Next Review**: August 22, 2026  
**Owner**: QA Team  
**Approval**: [Technical Lead Signature]
