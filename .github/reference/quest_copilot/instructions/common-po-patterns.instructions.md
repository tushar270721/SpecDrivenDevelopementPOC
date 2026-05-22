---
description: "Foundational patterns for elements, methods, and selectors across all components"
applyTo: "pages/**/*.js,pageComponents/**/*.js,tests/step_definitions/**/*.js"
---

# Common Patterns — Guidelines for Page Objects and Their Methods

> **🏗️ FOUNDATIONAL REFERENCE**: This file contains core patterns that MUST be applied across all page objects, page components, and step definitions. Other instruction files reference these patterns to ensure consistency.

## Referenced By
- [`pages.instructions.md`](./pages.instructions.md) - Page object implementation
- [`page-components.instructions.md`](./page-components.instructions.md) - Reusable UI components  
- [`step-definitions.instructions.md`](./step-definitions.instructions.md) - Method usage and separation of concerns

### Element Definition
- Define all elements in constructor using testing framework components instead of raw TestCafe selectors
- Import components from `@evision/testing-framework-core/components` (e.g., `Button`, `Input`, `Label`, `Dropdown`, `Table`)
- Explore available components
```bash
ls node_modules/@evision/testing-framework-core/components/
```

**Allowed patterns:**
1. Direct instantiation: 
```javascript
    this.<propertyName> = new <ComponentType>('<selector>', '<displayName>', this);
```
2. Function returning new instances:
```javascript
    this.workflowStageButton = (stage) => new Button(`#workflowBtn_${stage}`, `Stage ${stage}`, this);
    this.signatureButton = (signatureType) => new Button(`[data-signature-type="${signatureType}"]`, `Signature ${signatureType}`, this);
```

**Notes:** Elements can be defined either as direct component instances or as functions that return new component instances when called with parameters. Both patterns ensure elements are defined in the constructor and can be properly reused. Functions are particularly useful for dynamic selectors that require runtime parameters.

- Property (variable) name pattern: `<elementName><ComponentType>`

✅ GOOD examples:
```javascript
  - this.usernameInput = new Input(...);
  - this.submitButton = new Button(...);
```

❌ BAD examples:
```javascript
  - this.username = new Input(...); (missing ComponentType)
  - this.submit = new Button(...); (missing ComponentType)
```

- `<displayName>` MUST NOT contain `<ComponentType>` from the constructor.

✅ GOOD example:
```javascript
  - this.usernameInput = new Input('#username', 'Username', this);
```

❌ BAD example:
```javascript
  - this.usernameInput = new Input('#username', 'Username Input', this); (displayName contains ComponentType: "Input")
```

### Selector Best Practices
- Use stable selectors: `id`, `data-testid`, unique `class` attributes
- Avoid text-based or index-based selectors
- If several selectors share the same path, it should be stored separately as a constant or in a class constructor with other elements

**TestCafe Selector Usage**
When simple CSS selectors are insufficient, use TestCafe's `Selector` API with framework components:

```javascript
import { Selector } from 'testcafe';
    
    // Complex chaining
    this.removeQuestionButton = (name) => new Button(
        Selector('td').withText(name).nextSibling('.question-actions-column').find('.btn-remove-question'), 
        `Remove ${name}`, this
    );
```

**Common Selector Methods:**
- `.withText(text)` - Contains text
- `.withExactText(text)` - Exact text match
- `.withAttribute(attr, value)` - Attribute matching
- `.find(selector)` - Find descendant
- `.nth(index)` - Get by index
- `.parent([selector])` - Get parent element
- `.sibling([selector])` - Get sibling element
- `.nextSibling([selector])` - Get next sibling
- `.prevSibling([selector])` - Get previous sibling
- `.child([selector])` - Get child element


### Method Design Principles:

**Reuse Existing Component Methods:**

Before creating custom methods, always check the component's actual implementation

1. **Component Definitions**: Explore available components
```bash
ls node_modules/@evision/testing-framework-core/components/
```
   - Example: `node_modules/@evision/testing-framework-core/components/input.js` for Input methods
   - Example: `node_modules/@evision/testing-framework-core/components/dropdown.js` for Dropdown methods

2. **BaseComponent Methods**: All components inherit from `BaseComponent` - check `baseComponent.js` for common methods like:
   - `click()`, `doubleClick()`, `rightClick()`, `hover()`
   - `getTextContent()`, `getTextFromAll()`, `getComponentCount()`
   - `isExists()`, `isEnabled()`, `isDisabled()`
   - `waitUntilComponentIsExisting()`, `waitUntilComponentIsAbsent()`

3. **Component-Specific Methods**: Each component type provides specialized methods:
   - **Input**: `sendKeys()`, `submitText()`, `clear()`, `sendFile()`
   - **Dropdown**: `selectByValue()`, `selectByLabel()`, `selectByIndex()`, `getSelectedValue()`, `getOptionValues()`
   - **Table**: `getRows()`, `hashes()`, `isRowExisting()`, `clickTableElement()`, `findRowInTable()`


**Single Responsibility:**
- Each method should perform only ONE logical operation
- Methods should NOT combine multiple unrelated operations

**Logical Grouping:**
- If multiple actions represent a single logical operation, they should be united under one method
- Consider the business context when grouping actions

**Parameter Handling:**
- Do NOT hardcode values in methods
- Use default parameters or constants instead
- Make methods flexible and reusable

```javascript
// ✅ Good: Using default parameters
async signTakeOverAsGuest(guestName = 'test guest', companyName = 'test company') {
    await this.signatureGuestNameInput.sendKeys(guestName);     // Use Input's sendKeys
    await this.companySelectorInput.sendKeys(companyName);      // Use Input's sendKeys  
    await this.signButton.click();                             // Use BaseComponent's click
}

// ✅ GOOD: Combining component methods for business operation
async fillCompetencyFields(values) {
    if (values.name) {
        await this.nameInput.sendKeys(values.name);            // Use Input's sendKeys
    }
    if (values.roles) {
        for (let role of values.roles) {
            await this.rolesDropdown.selectByValue(role);       // Use Dropdown's selectByValue
            await this.addButton.click();                       // Use BaseComponent's click
        }
    }
}
```

### Waiting Strategies

#### No Hardcoded Waits
- No hardcoded waits (`t.wait()`, `setTimeout`, `sleep()`)
- No additional existence checks before framework actions (actions like `click()`, `getTextContent()`, `setValue()` already include `waitUntilComponentIsExisting`)
- Create condition-based waiting functions if needed using testing framework utilities (`waitForTrue`, `waitWithRefresh`)
- Do not hardcode timeout values in methods, define them in constants/timeout.js and use them in wait functions

**Standard Waiting Pattern:**
```javascript
async waitForSignButtonDisappears(signature) {
    await waitForTrue(async () => !(await this.signButton(signature).isExists()), Timeout.VC_SYNC_TIMEOUT, Timeout.VC_SYNC_POLLING_INTERVAL);
}
```

**Waiting with Page Refresh:**
Use `waitWithRefresh` when elements may need page refresh during wait period

### When to Create Custom Methods

**DON'T create methods that:**
- Reimplement existing component functionality
- Combine unrelated actions without business context

**DO create methods that:**
- Combine multiple component interactions for a single business operation
- Encapsulate complex UI workflows
- Provide meaningful abstractions for test scenarios

**Reference**: Always check the component's actual implementation `node_modules/@evision/testing-framework-core/components/` before implementing custom functionality.
