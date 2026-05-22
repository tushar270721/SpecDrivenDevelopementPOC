---
description: "Page Object Model implementation guidelines for complete application pages"
applyTo: "pages/**/*.js"
---

# Pages

Classes in the `/pages/` directory represent complete application pages or views in the web application under test. Each page class encapsulates all UI elements and page-specific actions for a single page, providing a clean interface for test automation.

**Purpose of `/pages/` classes:**
- Represent complete application pages (e.g., LoginPage, DashboardPage, UserProfilePage)
- Encapsulate all UI elements present on that specific page
- Provide page-specific business methods that combine multiple element interactions
- Serve as the primary interface between test scenarios and the application UI
- Follow Page Object Model best practices for maintainable and scalable test automation

## 🔗 Critical Dependencies
**MUST READ FIRST**: This file depends on patterns defined in [`common-po-patterns.instructions.md`](./common-po-patterns.instructions.md). Before implementing page objects, review:
- **Element Definition patterns** - How to properly define elements using framework components
- **Method Design Principles** - Reusing existing component methods and parameter handling  
- **Waiting Strategies** - No hardcoded waits, condition-based waiting
- **Selector Best Practices** - Stable selectors and TestCafe Selector usage

## Base Structure
```javascript
import { BaseComponent, Button, Input, Label } from '@evision/testing-framework-core/components';

class LoginPage extends BaseComponent {
    constructor() {
        super(
            '#page-container',  // CSS selector for the page container
            'Login Page',       // Human-readable name for logging/debugging
            'Page',             // Component type (should be 'Page' for Pages)
            null                // Parent component or null for top-level pages
        );

        // Define all elements in constructor
        this.usernameInput = new Input('#username', 'Username', this);
        this.passwordInput = new Input('#password', 'Password', this);
        this.submitButton = new Button('[data-testid="submit"]', 'Submit', this);
        this.statusLabel = new Label('.status', 'Status', this);
    }

    async login(username, password) {
        await this.usernameInput.sendKeys(username);
        await this.passwordInput.sendKeys(password);
        await this.submitButton.click();
    }

    async getStatus() {
        return await this.statusLabel.getTextContent();
    }
}

export default LoginPage;
export const loginPage = new LoginPage();
```

## Export Patterns

Always export both the Page class and an instance

```javascript
export default LoginPage;
export const loginPage = new LoginPage();
```

Exporting both the class (default) and a pre-instantiated singleton (named) gives flexibility: 
 - tests can import the ready-to-use instance for convenience and consistency, while other code or tests (for example integration tests) can import the class to extend or instantiate with different contexts.

## Implementation Guidelines

**Key Principles:**
- Create page objects containing only elements and methods used in automated tests
- Add additional elements and methods incrementally as needed
- Use existing component methods instead of building custom implementations.
- Focus on reusability and maintainability
- Separate UI interaction logic from test logic
- Return values for assertions (don't assert in page objects)
- Handle waiting automatically through framework components
- Encapsulate implementation details behind business methods
- Context Management: Do NOT use TestCafe's `t.ctx` to share state between tests or steps. Context handling and shared state should be implemented in the step definitions. Page objects must remain stateless and must not rely on `t.ctx`.

**Inheritance Patterns**
Create base page classes when multiple pages share common components and functionality. For example, a `BasePage` class can include common navigation elements, headers, or footers. Other page classes can then extend this base class to inherit shared elements and methods.

**Error Handling**
Do NOT wrap page object methods in try-catch blocks unless absolutely necessary. The framework provides comprehensive error handling with ComponentError, self-healing capabilities, and meaningful error messages with component chains. Let framework errors bubble up naturally. Only use try-catch for optional operations, specific recovery scenarios, or when converting technical errors to business-level context.


### Page Components Integration Patterns
Integrate reusable page components into page objects:
```javascript
import NavigationMenu from '../pageComponents/navigationMenu';
import TopMenu from '../pageComponents/topMenu';
import QuestionnaireModal from '../pageComponents/questionnaireModal';

class WorkspacePage extends BaseComponent {
    constructor() {
        super('#editorContainer', 'Workspace', 'Page', null);
        
        // Individual elements
        this.usernameInput = new Input('#username', 'Username', this);
        
        // Integrated reusable components
        this.navigationMenu = new NavigationMenu(this);
        this.topMenu = new TopMenu(this);
        this.questionnaire = new QuestionnaireModal(this);
    }
    
    // Delegate to component methods
    async navigateToSection(section) {
        await this.navigationMenu.clickSection(section);
    }
}
```

📖 **For comprehensive page components reference and examples, see [page-components.instructions.md](./page-components.instructions.md)**