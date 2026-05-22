---
description: "Implementation guidelines for Cucumber step definitions and test orchestration"
applyTo: "tests/step_definitions/**/*.js"
---

# Step Definitions - Implementation Guidelines

Step definitions serve as the glue layer between Gherkin feature files and the actual test implementation. They translate business-readable scenarios into executable automation code, orchestrating interactions between page objects and performing assertions to validate expected behavior.

## Core Imports
```javascript
// Step definition keywords
import { Given, When, Then, Before, After, BeforeAll, AfterAll } from '@evision/testing-framework-core/cucumber';
// Assertions
import { assertIsExisting, assertTextEquals } from '@evision/testing-framework-core/utils/assertions';
// Utils
import { convertDataTableToObject, populateDataTable, parseDate } from '@evision/testing-framework-core/utils/dataUtils';
// Page Objects:e.g. homePage 
import { homePage } from '../../../pages/homePage';
```

## Step Definition Patterns

### Parameter Extraction
Parametrize steps to maximize reusability. Extract parameters from step regex and pass them to page object methods.
```javascript
When(/^I create a user with name "([^"]*)" and email "([^"]*)"$/, async (t, [name, email]) => {
    const userDetails = { name, email };
    await userPage.fillInUserDetails(userDetails);
    await userPage.createButton.click();
});
```

### Data Table Handling
Use data tables for complex inputs with multiple parameters. Convert tables to objects using built-in utils and pass them to page object methods.
```javascript
When(/^I create a user with the following details:$/, async (t, [_], dataTable) => {
    const userDetails = convertDataTableToObject(dataTable);
    await userPage.fillInUserDetails(userDetails);
    await userPage.createButton.click();
});
```

### Context Storage Pattern
Use `t.ctx` to share data between steps.

Make it explicit by adding keys to the step. Do NOT “hide” it in a step. It’s not obvious and you can override it later in following steps without noticing it.
```javascript
When(/^I create a new user and store it to '(.*)':$/, async (t, [storeKey], dataTable) => {
    const userDetails = convertDataTableToObject(dataTable);
    await userPage.fillInUserDetails(userDetails);
    await userPage.createButton.click();
    // Store user data in context
    t.ctx[storeKey] = userDetails;
});

Then(/^the user stored in '(.*)' should be displayed in the user list$/, async (t, [storeKey]) => {
    const userDetails = t.ctx[storeKey];
    await assertIsExisting(userPage.userByEmail(userDetails.email), `User with email ${userDetails.email} does not exist`);
});
```

### Hooks

**Before Hooks:**
- Set up test preconditions that apply to multiple scenarios

**After Hooks:**
- Clean up test data (delete created records, files, etc.)
- Reset application state (reload pages, clear filters)
- Restore original system settings

**Tag-Specific Hooks:**
Use `@tag` parameter to run hooks only for scenarios with specific tags:
```javascript
Before('@email_notifications', async (t) => {
    // Only runs for scenarios tagged with @email_notifications
});

After('@switch_online_mode', async (t) => {
    await switchOnlineMode(t);
});
```

## Best Practices

### No Hardcoded Waits
- No hardcoded waits (`t.wait()`, `setTimeout`, `sleep()`)
- No additional existence checks before framework actions (actions like `click()`, `getTextContent()`, `setValue()` already include `waitUntilComponentIsExisting`)
- Create condition-based waiting functions if needed using testing framework utilities (`waitForTrue`, `waitWithRefresh`)
- Do not hardcode timeout values in methods, define them in constants/timeout.js and use them in wait functions

### Error Handling
- **Do NOT wrap step definition logic in try-catch blocks unless absolutely necessary**
- The framework provides comprehensive error handling with ComponentError, self-healing capabilities, and meaningful error messages with component chains
- Let framework errors bubble up naturally to maintain proper test reporting and diagnostics
- Only use try-catch for optional operations, specific recovery scenarios, or when converting technical errors to business-level context

### UI Element Management
- **NEVER define UI elements in step definitions** - All element definitions belong in page objects or page components
- **Use existing page object methods** - Follow method design principles from [`common-po-patterns.instructions.md`](./common-po-patterns.instructions.md)
- **Delegate to page objects** - Keep step logic thin and focused on test orchestration
- **No direct TestCafe selector usage** - Always go through page objects that use framework components

### Utility Functions
- **Search existing utilities first** - Always check both framework and project utilities before creating new functions
- **Framework utilities**: Explore `@evision/testing-framework-core/utils/` for data manipulation, PDF processing, Excel handling, network throttling, and more
- **Project utilities**: Check `utils/` folder for project-specific helper functions and business logic
- **Import and reuse**: Import existing utility functions instead of duplicating functionality
- **Follow established patterns**: When creating new utilities, follow the patterns established in existing utility files

```javascript
// Import framework utilities
import { parseDate, generateString } from '@evision/testing-framework-core/utils/dataUtils';
import { getTextFromPdf } from '@evision/testing-framework-core/utils/pdf';

// Import project utilities
import { createPermitData } from '../../../utils/permitHelpers';
```

📖 **For comprehensive utility reference and guidelines, see [utilities.instructions.md](./utilities.instructions.md)**

### Logging
- **No `console.log`** - Use framework logging only
- Access logger through test context: `t.ctx.logger`
- Import message utilities: `import { createInfoMessage } from '@evision/testing-framework-core/utils/loggerMessages';`
- Use `createInfoMessage()` for informational logs: `t.ctx.logger.info(createInfoMessage('Message text'));`

## Reusability
- **Search the entire codebase** for existing steps and similar step patterns before creating new ones
   ```bash
   # Use grep search to find existing patterns
   grep -r "pattern_keywords" tests/step_definitions/
   ```
- **Use semantic search** to find functionally similar steps:
   - Look for steps that perform the same business action
   - Check for parameterized versions of the step you need
- **NEVER** create duplicate step definitions with the same regex pattern
- **ONLY ONE** step definition should exist for each unique pattern across the entire project
- If a step exists, **REUSE** it or **PARAMETERIZE** it for broader use

- **Parameterize steps** for maximum reusability

❌ **BAD - Multiple similar steps:**
```javascript
When(/^User creates group 'TestGroup'$/, async () => { ... });
When(/^User creates group 'ProductionGroup'$/, async () => { ... });
```

✅ **GOOD - Single parameterized step:**
```javascript
When(/^User creates group '(.*)'$/, async (t, [groupName]) => { ... });
```

### Assertions

**CRITICAL RULES:**
- Only use testing framework assertions in step definitions
- Perform assertions only in Then step definitions. Do not place asserts in PO or utils
- Always import assertions before using them

#### Import Required Assertions
```javascript
import { 
    assertIsEnabled,
    // Import only the assertions you need in your step file
} from '@evision/testing-framework-core/utils/assertions';
```

#### Example Assertions in Step Definitions
```javascript
Then(/^the submit button should be enabled$/, async (t) => {
    await assertIsEnabled(formPage.submitButton);
});
```

📖 **For comprehensive assertion reference and examples, see [assertions.instructions.md](./assertions.instructions.md)**

