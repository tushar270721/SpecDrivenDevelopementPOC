# Jumpstart Implementation

Jumpstart (`@wk/components-v3-react16`) is the official React component library that implements the Wolters Kluwer Design System. Use Jumpstart components when building production applications.

## Installation

### Prerequisites
1. Access to WK private npm repository (see NPM Prerequisites)
2. React 16, 17, 18, or 19

### Install Package

```bash
npm i --ignore-scripts @wk/components-v3-react16
```

### Client-Only Version
For client-only components (with `'use-client';` directive):
```tsx
import '@wk/components-v3-react16/client'
```

## Required Setup

### 1. Import Styles

```tsx
// All components styles
import '@wk/components-v3-react16/all.min.css'

// Import the PDS-v3 theme
import '@wk/components-v3-react16/theme-PDS-v3.min.css'
```

**Alternative: Import only what you need:**
```tsx
import '@wk/components-v3-react16/fonts.min.css'
import '@wk/components-v3-react16/accordion.min.css'
```

**Bundled files (if @import rules don't resolve):**
```tsx
import '@wk/components-v3-react16/all.bundle.min.css'
```

**Environments without CDN access:**
```tsx
import '@wk/components-v3-react16/all-no-cdn.min.css'
```

### 2. Apply Theme to Root Element

The root HTML element must have `cg3-theme="PDS-v3"`:

```tsx
<div cg3-theme="PDS-v3">
  {/* Your app content */}
</div>
```

### 3. Include Icon Sprites

Include `WkIconDefaultSprite` somewhere in your HTML to load all icons used in Jumpstart components:

```tsx
import { WkIconDefaultSprite } from '@wk/components-v3-react16';

function App() {
  return (
    <div cg3-theme="PDS-v3">
      <WkIconDefaultSprite />
      {/* Your app content */}
    </div>
  );
}
```

## Basic Usage Example

```tsx
import '@wk/components-v3-react16/all.min.css'
import '@wk/components-v3-react16/theme-PDS-v3.min.css'

import { 
  Accordion, 
  AccordionItem, 
  AccordionItemHeader, 
  WkIconDefaultSprite 
} from '@wk/components-v3-react16';

export function App() {
  return (
    <div cg3-theme="PDS-v3">
      <WkIconDefaultSprite />
      <Accordion>
        <AccordionItem>
          <AccordionItemHeader slot="accordionItemHeading2">
            Accordion Heading
          </AccordionItemHeader>
          <div slot="accordionItemBody">
            Content goes here...
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
```

## Import Pattern

All TypeScript types and components are imported from the package root:

```tsx
import { 
  Button,
  Accordion,
  Modal,
  // ... other components
} from '@wk/components-v3-react16';
```

## CSS Import Options

| File Pattern | Description |
|--------------|-------------|
| `all.min.css` | All component styles (minified) |
| `all.css` | All component styles (unminified) |
| `all.bundle.min.css` | Bundled version (no @import rules) |
| `all-no-cdn.min.css` | For environments without CDN access |
| `[component].min.css` | Individual component styles |
| `fonts.min.css` | Font files only |
| `theme-PDS-v3.min.css` | PDS v3 theme |

## MCP Server for IDE Integration

Jumpstart includes an MCP server for AI-assisted development in VS Code with GitHub Copilot.

### Setup for VS Code + Copilot

1. Create `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "jumpstart-mcp-server": {
      "type": "stdio",
      "command": "node",
      "args": ["node_modules/@wk/components-v3-react16/mcp-server/index.js"]
    }
  },
  "inputs": []
}
```

2. Open `mcp.json` in VS Code and click "Start"
3. Use `#jumpstart-mcp-server` in Copilot requests for explicit context

### Example Copilot Requests
- "Integrate Jumpstart Accordion in the current page"
- "How do I disable particular dates in the Jumpstart Date Picker?"
- "My Jumpstart theming doesn't work, what could be the issue?"
