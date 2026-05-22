# New Page Component Prompt

## Purpose
Create reusable page component by analyzing current page with Playwright MCP.

## Workflow

### 1. Understand Page Structure
```javascript
mcp_playwright_browser_snapshot
```
📋 Use snapshot to understand element hierarchy, roles, and page structure

### 2. Extract Full HTML
```javascript
mcp_playwright_browser_evaluate: () => document.documentElement.outerHTML
```

### 3. Read Instructions
**MUST READ before coding:**
- `.github/instructions/page-components.instructions.md`
- `.github/instructions/common-po-patterns.instructions.md`

### 3. Verify Available Components to instantiate Elements
**MUST CHECK before coding using bash commands (NOT JavaScript):**
```bash
# List available framework components
ls node_modules/@evision/testing-framework-core/components/
```

### 5. Generate Component
**File**: `pageComponents/[ComponentName].js`

**Key rules from instructions:**
- Static elements: `this.submitButton = new Button(...)`  
- Dynamic elements: `this.itemButton = (name) => new Button(...)`
- **NEVER** instantiate in async methods
- Use existing framework component methods

### 6. Document
**Provide:**
- Element table (name, type, selector, purpose)
- Integration example with page object
- Usage example in step definition

## Output Checklist
- [ ] Full HTML extracted with `outerHTML`
- [ ] Instructions read and followed
- [ ] Elements defined in constructor (static or arrow functions)
- [ ] Only existing framework components used (no assumptions)
- [ ] Integration example provided
