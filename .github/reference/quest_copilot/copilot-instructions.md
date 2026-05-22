---
applyTo: '**'
---

# GitHub Copilot Instructions - E2E Testing Framework

## 🛠️ Technology Stack & Architecture

### Core Technologies
- **Testing Framework**: TestCafe with `@evision/testing-framework-core`
- **BDD Framework**: Cucumber with Gherkin syntax
- **Architecture Pattern**: Page Object Model (POM) with 3-layer separation
- **Language**: JavaScript ES6+
- **Test Runner**: Custom runner via `@evision/testing-framework-core`
- **Reporting**: Cucumber JSON reports


### Framework Architecture
| Layer | Responsibility | Contains | Must NOT Contain |
|-------|----------------|----------|------------------|
| **Feature Files** (.feature) | Business behavior (WHAT) | Gherkin scenarios, business language | Implementation details, selectors |
| **Step Definitions** | Glue layer (map Gherkin → actions) | Test orchestration, assertions | UI selectors, hardcoded waits |
| **Page Objects & Components** | Implementation (HOW) | UI elements, page methods | Business logic, assertions |

### File-Specific Guidelines
This framework includes detailed instruction files for specific file types:

| File Type | Instruction File | Applies To |
|-----------|------------------|------------|
| **Feature Files** | [`.github/instructions/feature-files.instructions.md`](./instructions/feature-files.instructions.md) | `tests/features/**/*.feature` |
| **Step Definitions** | [`.github/instructions/step-definitions.instructions.md`](./instructions/step-definitions.instructions.md) | `tests/step_definitions/**/*.js` |
| **Pages** | [`.github/instructions/pages.instructions.md`](./instructions/pages.instructions.md) | `pages/**/*.js` |
| **Page Components** | [`.github/instructions/page-components.instructions.md`](./instructions/page-components.instructions.md) | `pageComponents/**/*.js` |
| **Assertions** | [`.github/instructions/assertions.instructions.md`](./instructions/assertions.instructions.md) | `tests/step_definitions/**/*.js` |
| **Common PO Patterns** | [`.github/instructions/common-po-patterns.instructions.md`](./instructions/common-po-patterns.instructions.md) | `pages/**/*.js`, `pageComponents/**/*.js`, `tests/step_definitions/**/*.js` |
| **Utilities** | [`.github/instructions/utilities.instructions.md`](./instructions/utilities.instructions.md) | `utils/**/*.js` |

**📝 Important**: Always read the relevant instruction file before modifying code in the specified file types.

### Testing Framework Core Knowledge Base

#### Testing Framework Core Reference
Use `node_modules/@evision/testing-framework-core` as your primary knowledge base for available functions, components, and utilities. This package contains:

##### Core UI Components for Page Elements (`/components`)
- **BaseComponent**: Foundation for all page objects and components
- **Button, Input, Label, Link, Dropdown, Checkbox, Table, etc.**: Specialized UI components

##### API Testing (`/api`)
- **BaseApiEndpoint**: Foundation for API testing classes
- **API assertions**: `assertResponseCode`, `assertResponseBodyType`, `assertResponseBodyContainsKey`
- **HTTP utilities**: Request builders, response handlers, authentication helpers

##### Cucumber Integration (`/cucumber`)
- **Step definitions**: `Given`, `When`, `Then` imports
- **Hooks**: `Before`, `After` lifecycle management
- **Context utilities**: Test data sharing and cleanup

### Testing Framework Core Exploration Commands
```bash
# Explore available components
ls node_modules/@evision/testing-framework-core/components/

# Check utility functions
ls node_modules/@evision/testing-framework-core/utils/

# Review API testing tools
ls node_modules/@evision/testing-framework-core/api/
```

---

## 📁 Project Structure & Organization

### Key Directories
```
├── 📁 tests/
│   ├── features/           # Gherkin feature files (.feature)
│   └── step_definitions/   # Step definition implementations (.js)
├── 📁 pages/              # Page object classes for complete pages
├── 📁 pageComponents/     # Reusable UI components (modals, forms, etc.)
├── 📁 api/               # API utilities and endpoints
├── 📁 utils/             # Helper functions and utilities
│   └── roles.js            # User roles for test authentication
├── 📁 constants/         # Business constants (permits, certificates, etc.)
├── 📁 artifacts/         # Test outputs (screenshots, reports, logs)
├── 📄 config.js            # Main configuration (URLs, timeouts, browser settings)
└── 📄 globals.json         # User credentials and role definitions
```

## Environments
daily: https://enablon-ovp-auth-id-linux-daily.pv.dev.evision.io

## 🔧 Development Standards & Patterns

### Critical Rules (Non-Negotiable)
1. **Search Before Creating**: Always search existing step definitions before creating new ones
2. **No Hardcoded Waits**: Use condition-based waits, never `t.wait(milliseconds)`
3. **Config-Driven**: All environment values must come from `config.js`
4. **Single Source of Truth**: One step definition per pattern - no duplicates
5. **Layer Separation**: Maintain clear boundaries between feature/step/page layers

### Configuration & Environment Variables

**Secrets and Environment-Specific Values:**
- **Never hardcode** secrets, URLs, or environment-specific variables in `config.js`
- Use environment variables for sensitive data: `process.env.ENV_VAR`
- Use CLI arguments with defaults for flexible configuration:

```javascript
const { getProcessArgv } = require('@evision/testing-framework-core/tools/stepDefinitionsParser/utils');
// `getProcessArgv(arg, defaultValue)` takes two arguments:
//  - `arg`: the argument name (e.g. '--smtpUserEmail')
//  - `defaultValue`: the value to use if the argument is not provided

const smtpUserEmail = getProcessArgv('--smtpUserEmail', 'ena-engineering-smtp@enablon.org');
const smtpUserPassword = getProcessArgv('--smtpUserPassword', '');
```

**Best Practices:**
- Set environment variables in your CI/CD pipeline or local `.env` files
- Provide sensible defaults for development environments
- Document required environment variables in your README

### Naming Conventions

#### Files:
- **Feature files**: `moduleName.feature`
- **Step definitions**: `moduleName.js`
- **Page objects**: `moduleNamePage.js`
- **Popup/Modal pages**: `modalNameModal.js`

#### Variables & Methods:
- **camelCase** for variables and methods
- **PascalCase** for class names
- **Descriptive names** reflecting business domain

---

## Adding New Tests - Required Workflow

### Before Creating Any New Code
1. **Read Instructions**: Check relevant `.github/instructions/*.md` file
2. **Search Existing**: Look for similar step definitions and patterns
3. **Follow Architecture**: Maintain layer separation (Feature → Step → Page)
4. **Use Existing Patterns**: Leverage established conventions

### Step-by-Step Process
1. **Draft Feature Scenario** in appropriate `tests/features/` location
2. **Search & Reuse** existing step definitions before creating new ones
3. **Add Page/Component Elements** following established patterns
4. **Implement Step Definitions** if new ones are needed
5. **Validate & Test** ensure no hardcoded waits or anti-patterns

---

### Test Execution:
```bash
npm run test                       # Run all tests
npm run test -- -- --tags "@12345" # Run tests with specific tag (e.g. @testCaseId)
npm run report                     # Generate reports
```

---

## Debugging & Error Handling

### Debugging Resources
- **Test Artifacts**: Located in `artifacts/` folder
- **Screenshots**: Captured on failures
- **Logs**: Winston logs in `artifacts/winstonLogs/`
- **Reports**: Test reports in `artifacts/reports/`

### Self-Healing Feature
When self-healing is enabled, the framework automatically attempts to recover from element location failures by using AI to find alternative selectors.

**Self-Healing Logs:**
- Look for logs that start with `[SELF-HEALING]` to understand the healing process and find healed locators
- All self-healing activity is logged in the `artifacts/selfHealing/` directory
- Each AI request during self-healing contains the HTML of the page, which can be used to:
  - Understand the current state of the application during failure
  - Analyze what information was sent to AI and what response was received
  - Debug complex selector issues by examining the page structure at the time of failure

---

## 🚫 Anti-Patterns (Prohibited)

| Anti-Pattern | Why It's Wrong | Correct Alternative |
|--------------|----------------|---------------------|
| Hardcoded waits (`t.wait(5000)`) | Flaky & slow | Condition-based waits |
| Direct selectors in step definitions | Breaks abstraction | Use page object methods |
| Duplicate step definitions | Code duplication | Search & reuse existing steps |
| Hardcoded environment values | Inflexible | Use `config.js` values |

---

## ✅ Quality Checklist

Before submitting any changes, ensure:
- [ ] Followed relevant `.github/instructions/*.md` guidelines
- [ ] Searched for existing similar code before creating new
- [ ] No hardcoded waits or environment values
- [ ] Used established naming conventions
- [ ] Maintained layer separation (Feature/Step/Page)
- [ ] Added meaningful assertion messages
- [ ] Tested locally with appropriate tags

---

## 🎯 Success Criteria

A well-implemented test should:
- ✅ Follow established project patterns and conventions
- ✅ Use appropriate page objects and components
- ✅ Include meaningful assertions with business context
- ✅ Be maintainable and reusable
- ✅ Provide clear failure information
- ✅ Handle test data appropriately
- ✅ Follow the BDD approach with clear Given-When-Then structure

---

