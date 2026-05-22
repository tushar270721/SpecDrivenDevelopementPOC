---
description: "Gherkin syntax and BDD scenario writing guidelines for feature files"
applyTo: "tests/features/**/*.feature"
---

# Feature Files - Gherkin Best Practices

## File Structure
- One feature per file following camelCase naming
- Place files in logical domain folders: `tests/features/[domain]/[feature].feature`
- Use existing files when adding scenarios for the same feature

## Scenario Writing
```gherkin
@featureTag
Feature: Feature Name
  Brief description of the feature capability

  Background:
    # Common preconditions for all scenarios
    Given I am logged in as 'admin'

@testCaseId
Scenario: Test Case Title
```

### Step Patterns
- Use **Given** for preconditions and setup
- Use **When** for actions and user interactions  
- Use **Then** for assertions and verifications
- Use **And** to continue the previous step type

### Declarative Style
Write business-focused steps, not implementation details:

 - ✅ **Good**: `When I create a permit in 'ISSUED' state with ICC attached`
 - ❌ **Avoid**: `When I click the create button and fill title and select status...`

## Data Tables
Use tables for complex inputs with multiple parameters:
```gherkin
When I create user with following details:
  | field    | value           |
  | username | test.user       |
  | email    | user@domain.com |
```

## Scenario Outlines
Use Scenario Outlines to run the same scenario with multiple data sets and to combine multiple test cases that share the same steps.

### Combining Multiple Test Cases
When multiple test cases share the same step structure but differ in test data, combine them into a single Scenario Outline with split Examples sections. Each Examples section should have its own testCaseId tag:

```gherkin
Scenario Outline: Create Permit - <type>
  Given I am logged in as '<role>'
  When I create a permit with status '<status>' and type '<type>'
  Then the permit should be created successfully

@testCaseId_1
Examples:
  | role     | status  | type      |
  | admin    | DRAFT   | HOT_WORK  |

@testCaseId_2
Examples:
  | role     | status  | type      |
  | operator | DRAFT   | GENERAL   |
```

## Search Before Creating
- Always search existing step definitions before writing new scenarios
- Reuse parameterized steps where possible

### Parameterized Steps
Make steps generic for reuse:
- ❌ Specific: `When I move the permit to live status`
- ✅ Generic: `When I move permit to 'LIVE' status`

### Avoid Step Duplication
- Check if similar steps already exist before creating new ones
- Refactor similar steps into parameterized versions when possible
- Create new steps only when existing ones don't match your exact need
