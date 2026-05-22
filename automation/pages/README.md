# Pages Directory

## Purpose
Page Object Model (Layer 3) - UI interaction classes.

## Subdirectories

### auth/
Authentication-related pages
- loginPage.js
- forgotPasswordPage.js
- twoFactorPage.js
- resetPasswordPage.js

### dashboard/
Dashboard-related pages
- dashboardPage.js
- navigationMenu.js
- userProfilePage.js
- settingsPage.js

### reports/
Reports-related pages
- reportPage.js
- reportFilters.js
- reportGeneratorPage.js
- reportExportPage.js

## Page Object Guidelines

✅ DO
- Extend from BaseComponent
- Define elements as class properties
- Create methods for user interactions
- Use meaningful method names
- Keep methods simple (single responsibility)

❌ DON'T
- NO assertions in page objects
- NO business logic
- NO hardcoded selectors outside class
- NO test data in page objects
- NO complex conditional logic

## Template

```javascript
// pages/auth/loginPage.js

import { BaseComponent, Button, Input } from '@evision/testing-framework-core/components';

class LoginPage extends BaseComponent {
    constructor() {
        super('#main', 'Login', 'Page', null);
        this.usernameInput = new Input('#username', 'Username', this);
        this.passwordInput = new Input('#password', 'Password', this);
        this.signInButton = new Button('[data-testid="signInBtn"]', 'Sign In', this);
    }

    async enterUsername(username) {
        await this.usernameInput.sendKeys(username);
    }

    async enterPassword(password) {
        await this.passwordInput.sendKeys(password);
    }

    async clickSignIn() {
        await this.signInButton.click();
    }
}

export default new LoginPage();
```
