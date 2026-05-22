# Page Components Directory

## Purpose
Reusable UI components used across multiple pages (Layer 3).

## Subdirectories

### modals/
Reusable modal dialog components
- confirmationModal.js
- datePickerModal.js
- alertModal.js
- inputModal.js

### forms/
Reusable form components
- loginForm.js
- searchForm.js
- filterForm.js
- uploadForm.js

### tables/
Reusable table components
- dataTable.js
- sortableTable.js
- filterableTable.js
- paginatedTable.js

## Component Guidelines

✅ DO
- Extend from BaseComponent
- Make components reusable
- Define common interactions
- Use data attributes for selectors

❌ DON'T
- NO assertions
- NO page-specific logic
- NO hardcoded values

## Template

```javascript
// pageComponents/modals/confirmationModal.js

import { BaseComponent, Button, Label } from '@evision/testing-framework-core/components';

class ConfirmationModal extends BaseComponent {
    constructor() {
        super('[role="dialog"]', 'Confirmation Modal', 'Component', null);
        this.title = new Label('[class*="modal-title"]', 'Title', this);
        this.message = new Label('[class*="modal-message"]', 'Message', this);
        this.confirmButton = new Button('[data-testid="confirmBtn"]', 'Confirm', this);
        this.cancelButton = new Button('[data-testid="cancelBtn"]', 'Cancel', this);
    }

    async clickConfirm() {
        await this.confirmButton.click();
    }

    async clickCancel() {
        await this.cancelButton.click();
    }

    async getText() {
        return await this.message.getText();
    }
}

export default new ConfirmationModal();
```
