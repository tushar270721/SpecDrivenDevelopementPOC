---
description: "Guidelines for creating reusable UI components like modals, forms, and widgets"
applyTo: "pageComponents/**/*.js"
---

# Page Components - Reusable UI Elements

Page components are reusable UI elements that encapsulate specific functionality within a larger page. Create a page component when:

- **Complex UI Patterns**: Multiple related elements that work together (forms, modals, sidebars)
- **Reusable Across Pages**: Component used in multiple page objects or contexts
- **Business Logic Encapsulation**: Component has specific business rules or complex interactions
- **State Management**: Component needs to manage its own internal state or complex waiting logic
- **High-Level Actions**: Component provides meaningful business operations beyond basic element interactions

## 🔗 Critical Dependencies
**MUST READ FIRST**: This file depends on patterns defined in [`common-po-patterns.instructions.md`](./common-po-patterns.instructions.md). Before implementing page components, review:
- **Element Definition patterns** - How to properly define elements using framework components
- **Method Design Principles** - Reusing existing component methods and parameter handling
- **Waiting Strategies** - No hardcoded waits, condition-based waiting
- **Selector Best Practices** - Stable selectors and TestCafe Selector usage

## Base Structure
```javascript
import { BaseComponent, Button, Input, Label, Dropdown } from '@evision/testing-framework-core/components';

/**
 * Description of the component's purpose and functionality
 */
export default class SideBar extends BaseComponent {
    /**
     * Constructor description
     * @param {BaseComponent} parent - the parent of this component
     */
    constructor(parent) {
        super(
            '[data-testid="sidebar"]',  // CSS selector for the component container
            'Sidebar',                  // Human-readable name for logging/debugging
            'Component',                // Component type (can be 'Modal', 'Form', 'Component', etc.)
            parent
            );

        this.homeButton = new Button('[data-testid="home-nav"]', 'Home', this);
        this.appSwitcherDropdown = new Dropdown('[data-testid="app-switcher"]', 'App Switcher', this);
    }

    /**
     * Navigate to home page
     * @return {Promise<void>}
     */
    async navigateToHome() {
        await this.homeButton.click();
    }

    /**
     * Select application from dropdown
     * @param {string} application - the application name to select
     * @return {Promise<void>}
     */
    async selectApplication(application) {
        await this.appSwitcherDropdown.selectByLabel(application);
    }
}
```

## Export Patterns

Use default export for components that are primarily used as classes:

```javascript
export default class ComponentName extends BaseComponent {
    // ... component implementation
}
```

### Modal Component Example
```javascript
/**
 * Confirmation modal component for user interactions
 */
export default class ConfirmationModal extends BaseComponent {
    /**
     * Confirmation modal constructor
     * @param {BaseComponent} parent - the parent of this modal
     */
    constructor(parent) {
        super('[data-testid="confirmation-modal"]', 'Confirmation Modal', 'Modal', parent);
        
        this.messageLabel = new Label('[data-testid="message"]', 'Message', this);
        this.confirmButton = new Button('[data-testid="confirm"]', 'Confirm', this);
        this.cancelButton = new Button('[data-testid="cancel"]', 'Cancel', this);
    }

    /**
     * Confirm the modal action
     * @return {Promise<void>}
     */
    async confirm() {
        await this.confirmButton.click();
    }

    /**
     * Cancel the modal action
     * @return {Promise<void>}
     */
    async cancel() {
        await this.cancelButton.click();
    }

    /**
     * Get the message text from the modal
     * @return {Promise<string>}
     */
    async getMessage() {
        return this.messageLabel.getTextContent();
    }
}
```

### Structure and Organization
- Group related components in folders by feature or page area
- Use clear, descriptive class and method names
- Include JSDoc comments for public methods
- Keep components focused on single responsibility

### Constructor Design
- Always accept parent as constructor parameter
- Pass parent to BaseComponent super() call
