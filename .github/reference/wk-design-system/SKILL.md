---
name: wk-design-system
description: Wolters Kluwer Design System guidelines for building UI components, web applications, and digital products. Use when creating HTML, React, CSS, or any UI that should follow WK brand standards including colors, accessibility, and component styling.
---

# Wolters Kluwer Design System

This skill provides design system guidelines for creating UI that aligns with Wolters Kluwer's brand identity and accessibility standards.

## Requirements

**Jumpstart MCP Server** - This skill provides *design guidelines only*. For implementation code (component APIs, props, examples), you must also configure the Jumpstart MCP server in Claude Code on Amazon Bedrock. See [Jumpstart MCP Setup](#jumpstart-mcp-setup) section below.

Without the MCP server configured, Claude Code on Amazon Bedrock will have design guidance but won't be able to generate accurate Jumpstart component code.

## Quick Reference

### Primary Brand Colors
| Color | Hex | RGB | Use |
|-------|-----|-----|-----|
| WK Blue | `#007AC3` | rgb(0, 122, 195) | Primary brand, links, navigation |
| WK Green | `#85BC20` | rgb(133, 188, 32) | Success states |
| WK Red | `#E5202E` | rgb(229, 32, 46) | Errors, alerts |
| Black | `#000000` | rgb(0, 0, 0) | Primary text |
| White | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds |

### Background Colors
| Color | Hex | Use |
|-------|-----|-----|
| White | `#FFFFFF` | Primary background |
| Light Gray | `#F6F6F6` | Secondary/card backgrounds |
| Decorative Lines | `#DADADA` | Borders, dividers |

### Elevation Levels
| Level | Name | Use |
|-------|------|-----|
| 0 | Flat | Default/resting state |
| 1 | Raised | Highlight specific component, alternative resting state |
| 2 | Overlay | Modals, dialogs, dropdowns |
| 3 | Pop-out | Maximum emphasis, stand out from UI |

### Icon Sizes
| Size | Value | Use |
|------|-------|-----|
| Default | 1.5rem (24px) | Standard icons |
| Small | 1rem (16px) | Compact contexts |

Icon-to-label spacing: minimum 0.5rem (8px)

### Typography
| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headings | Fira Sans | Bold (700) | 20-32px |
| Body | Fira Sans | Regular (400) | 14-18px |
| Labels | Fira Sans | Medium (500) | 14px |

Base: 16px (1rem). Line-height: headings × 1.25, body × 1.125/1.25/1.5

## Instructions

### Step 1: Apply Color Guidelines

When creating UI components:

1. **Use semantic colors for status indicators**:
   - Red (`#E5202E`) for errors
   - Orange/Yellow for warnings  
   - Green (`#85BC20`) for success

2. **Use blue for interactive elements**:
   - Links and navigation: `#007AC3`
   - Visited/hover states: use darker blue variants

3. **Background colors**:
   - Primary backgrounds: White (`#FFFFFF`)
   - Secondary backgrounds: Light Gray (`#F6F6F6`)
   - Decorative lines/borders: Gray (`#DADADA`)

4. **Avoid**:
   - Overusing colors (creates visual noise)
   - Using highlight colors for non-highlight purposes
   - Insufficient contrast ratios

### Step 2: Apply Elevation Guidelines

Use shadows purposefully to communicate hierarchy and state:

1. **Flat (no shadow)**: Default resting state for components
2. **Raised**: Highlight a component or provide alternative resting state
3. **Overlay**: Floating UI (modals, dropdowns, dialogs)
4. **Pop-out**: Maximum emphasis, component stands out from everything

**Key rules**:
- Use shadows to respond to user input or system events
- Follow elevation logic—don't use shadows for aesthetics only
- Stage backgrounds: only white (`#FFFFFF`) or gray-25 (`#F6F6F6`)

For detailed shadow specifications, see [Elevation](references/fundamentals/elevation.md).

### Step 3: Apply Icon Guidelines

1. **Use only two icon sizes**:
   - Default: 1.5rem (24px)
   - Small: 1rem (16px)

2. **Spacing**: Minimum 0.5rem (8px) between icon and label

3. **Accessibility**:
   - Ensure 3:1 contrast ratio for icons
   - Add tooltips on hover for standalone icons (no label)

4. **Consistency**: Same icon = same meaning throughout the app

For icon specifications, see [Icons](references/fundamentals/icons.md).

### Step 4: Apply Typography Guidelines

1. **Font**: Fira Sans for everything (titles, copy, navigation, forms, buttons)

2. **Weights**: Only use Light (300), Regular (400), Medium (500), Bold (700)

3. **Base size**: 16px (1rem)

4. **Line-height formulas**:
   - Headings: `font-size × 1.25`
   - Body text: `font-size × 1.125 / 1.25 / 1.5`

5. **Don'ts**:
   - Don't end headers/labels with periods
   - Don't use ALL CAPS (except eyebrow headings)

For complete type scale, see [Typography](references/fundamentals/typography.md).

### Step 5: Ensure WCAG 2.2 AA Compliance

All UI must meet these contrast requirements:

| Element | Minimum Ratio |
|---------|---------------|
| Regular text (≤18px) | 4.5:1 |
| Large text (>18px) | 3:1 |
| UI components (borders, focus) | 3:1 |
| Enhanced (AAA) | 7:1 |

**Safe text/background combinations**:
- Black text on white/light gray backgrounds ✓
- White text on WK Blue (`#007AC3`) ✓
- White text on WK Red (`#E5202E`) ✓
- White text on WK Green (`#85BC20`) ✓

### Step 6: Reference Detailed Specs

**Fundamentals:**
- [Colors](references/fundamentals/colors.md)
- [Elevation](references/fundamentals/elevation.md)
- [Icons](references/fundamentals/icons.md)
- [Typography](references/fundamentals/typography.md)

**Components:**
- [Accordion](references/components/accordion.md) - Progressive disclosure for large content
- [Action Bar](references/components/action-bar.md) - Grouped action buttons for toolbars
- [Avatar](references/components/avatar.md) - User/organization identity indicator
- [Badge](references/components/badge.md) - Count and status indicators
- [Breadcrumb](references/components/breadcrumb.md) - Hierarchical navigation path
- [Brand Architecture](references/components/brand-architecture.md) - WK brand display
- [Button](references/components/button.md) - Action triggers with variants
- [Button Group](references/components/button-group.md) - Responsive grouped buttons
- [Card](references/components/card.md) - Content container surface
- [Checkmark Group](references/components/checkmark-group.md) - Feature/completion lists
- [Date Picker](references/components/date-picker.md) - Calendar date selection
- [Dropdown](references/components/dropdown.md) - Option lists for filtering, sorting, menus
- [File Upload](references/components/file-upload.md) - File selection and upload
- [Fishbowl](references/components/fishbowl.md) - User and organization context display
- [Hamburger Menu](references/components/hamburger-menu.md) - Responsive navigation for mobile
- [Icon](references/components/icon.md) - Scalable vector icons
- [Input - Checkbox](references/components/input-checkbox.md) - Multi-select and binary choices
- [Input - Combobox](references/components/input-combobox.md) - Searchable select for large lists
- [Input - Radio](references/components/input-radio.md) - Mutually exclusive selections
- [Input - Search](references/components/input-search.md) - Content discovery and filtering
- [Input - Slider](references/components/input-slider.md) - Value selection from ranges
- [Link Field](references/components/link-field.md) - Styled text links
- [Logo](references/components/logo.md) - WK product logos
- [Modal](references/components/modal.md) - Overlay dialogs requiring user interaction
- [Multiselect](references/components/multiselect.md) - Multiple option selection dropdown
- [Nav Tree](references/components/nav-tree.md) - Hierarchical tree navigation
- [Navbar](references/components/navbar.md) - In-product horizontal navigation
- [Notification](references/components/notification.md) - Inline and toast feedback messages
- [Pagination](references/components/pagination.md) - Navigation for large result sets
- [Password Field](references/components/password-field.md) - Secure text input with toggle
- [Pill](references/components/pill.md) - Filter tags and search suggestions
- [Popup](references/components/popup.md) - Floating container for custom content
- [Portal](references/components/portal.md) - DOM rendering escape hatch
- [Segmented Control](references/components/segmented-control.md) - Single-select button group (≤5 options)
- [Select Field](references/components/select-field.md) - Single-select dropdown
- [Side Modal](references/components/side-modal.md) - Slide-out panel from viewport edge
- [Simple Table](references/components/simple-table.md) - Basic data table
- [Spine](references/components/spine.md) - Vertical navigation for workflow apps
- [Splitpane](references/components/splitpane.md) - Resizable side panels for research apps
- [Sr Only](references/components/sr-only.md) - Screen reader only content
- [Switch](references/components/switch.md) - Toggle on/off control
- [Tabs](references/components/tabs.md) - Content organization into sections
- [Tag](references/components/tag.md) - Categorization and status labels
- [Text Field](references/components/text-field.md) - Single-line text input
- [Textarea Field](references/components/textarea-field.md) - Multi-line text input
- [Time Picker](references/components/time-picker.md) - Time selection input
- [Tooltip](references/components/tooltip.md) - Contextual hints on hover/focus
- [Vertical Layout](references/components/vertical-layout.md) - Page layout structure

**Development:**
- [Jumpstart](references/development/jumpstart.md) - React component library implementation

## Implementation with Jumpstart MCP

The design guidelines in this skill are implemented by the **Jumpstart component library** (`@wk/components-v3-react16`).

When generating code for WK components, use the **Jumpstart MCP tools** to get accurate component APIs, props, and code examples:

| Tool | Purpose |
|------|---------|
| `get-jumpstart-components-list` | See all available components |
| `get-jumpstart-components-apis` | Get component props/events |
| `get-jumpstart-components-anatomy` | Get component structure |
| `get-jumpstart-components-examples` | Get code examples |
| `get-jumpstart-components-instructions` | Get special usage notes |
| `get-jumpstart-common-classes` | Get utility CSS classes |
| `get-jumpstart-theme-variables` | Get CSS theme variables |

**Workflow:** Use this skill for design decisions (when to use a component, dos/don'ts), then use the Jumpstart MCP for implementation details (APIs, code).

### Jumpstart MCP Setup

The Jumpstart package includes an MCP server that provides component documentation. However, the server has a `console.log("Starting MCP server")` statement that breaks JSON-RPC communication with Claude Code on Amazon Bedrock. A wrapper script is required to filter this output.

**Step 1: Install the Jumpstart package**

```bash
# Login to WK Artifactory (one-time setup)
npm login --registry=https://packages.wolterskluwer.io/artifactory/api/npm/npm-dev/

# Install the package
npm install @wk/components-v3-react16
```

**Step 2: Install MCP SDK dependencies**

The wrapper script needs the Anthropic MCP SDK:

```bash
npm install @anthropic-ai/sdk
```

Or if creating a standalone wrapper directory:

```bash
mkdir jumpstart-mcp
cd jumpstart-mcp
npm init -y
npm install @anthropic-ai/sdk
```

**Step 3: Create the wrapper script**

Create `wrapper.js` (either in your project or in a dedicated directory like `~/jumpstart-mcp/`):

```javascript
const { spawn } = require('child_process');
const path = require('path');

// Path to the actual MCP server in node_modules
const mcpServerPath = path.join(
  __dirname, 
  'node_modules', 
  '@wk', 
  'components-v3-react16', 
  'mcp-server', 
  'index.js'
);

const child = spawn('node', [mcpServerPath], {
  stdio: ['pipe', 'pipe', 'inherit']
});

// Filter out the "Starting MCP server" message that breaks JSON-RPC
child.stdout.on('data', (data) => {
  const str = data.toString();
  if (!str.includes('Starting MCP server')) {
    process.stdout.write(data);
  }
});

process.stdin.pipe(child.stdin);

child.on('close', (code) => {
  process.exit(code);
});
```

**Step 4: Configure Claude Code on Amazon Bedrock**

Add to `~/.claude/mcp_servers.json` (create if it doesn't exist):

```json
{
  "mcpServers": {
    "jumpstart": {
      "command": "node",
      "args": ["C:/path/to/your/wrapper.js"]
    }
  }
}
```

Replace the path with your actual wrapper location.

**Step 5: Restart Claude Code on Amazon Bedrock**

The MCP tools will be available after restart. Verify with `get-jumpstart-components-list`.

### Troubleshooting

| Issue | Solution |
|-------|----------|
| MCP shows "failed" in Claude Code on Amazon Bedrock | Check wrapper.js path is correct and absolute |
| "Unexpected token 'S'" JSON error | Wrapper not filtering the startup message - verify wrapper.js code |
| Components not found | Run `get-jumpstart-components-list` to verify connection |
| npm install fails | Check WK Artifactory login: `npm login --registry=https://packages.wolterskluwer.io/artifactory/api/npm/npm-dev/` |
| Permission denied | Ensure node has execute permissions on wrapper.js |

**Key setup for Jumpstart React:**
```jsx
import '@wk/components-v3-react16/all.min.css';
import '@wk/components-v3-react16/theme-PDS-v3.min.css';
import { WkIconDefaultSprite } from '@wk/components-v3-react16';

// Add cg3-theme="PDS-v3" to body or root element
<div cg3-theme="PDS-v3">
  <WkIconDefaultSprite />
  {/* Your components */}
</div>
```

## Best Practices

### Do
- Ensure product color schemes align with WK visual identity
- Check sufficient contrast (WCAG 2.1 AA) between text and background
- Use blue to convey navigation, links, and information
- Use red for errors, orange for warnings, green for success
- Use white (`#FFFFFF`) and lightest gray (`#F6F6F6`) for backgrounds
- Use gray (`#DADADA`) for decorative lines

### Don't
- Overuse colors — avoid visual noise that distracts users
- Use highlight colors for anything other than highlighting text
- Use color as the only means of conveying information
- Ignore contrast requirements for text legibility

## CSS Variables Template

```css
:root {
  /* Primary Brand Colors */
  --wk-blue-500: #007AC3;
  --wk-green-500: #85BC20;
  --wk-red-500: #E5202E;
  
  /* Semantic Colors */
  --wk-color-error: #E5202E;
  --wk-color-warning: #F29097;
  --wk-color-success: #85BC20;
  --wk-color-info: #007AC3;
  
  /* Text Colors */
  --wk-text-primary: #000000;
  --wk-text-secondary: #474747;
  --wk-text-muted: #757575;
  --wk-text-inverse: #FFFFFF;
  
  /* Background Colors */
  --wk-bg-primary: #FFFFFF;
  --wk-bg-secondary: #F6F6F6;
  --wk-bg-tertiary: #EDEDED;
  
  /* Border Colors */
  --wk-border-light: #DADADA;
  --wk-border-medium: #BFBFBF;
  --wk-border-dark: #A3A3A3;
  
  /* Link Colors */
  --wk-link-default: #007AC3;
  --wk-link-hover: #005B92;
  --wk-link-visited: #003D61;
  
  /* Elevation Shadows */
  --wk-elevation-flat: none;
  --wk-elevation-raised: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
  --wk-elevation-overlay: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --wk-elevation-pop-out: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  
  /* Icon Sizes */
  --wk-icon-size-default: 1.5rem;
  --wk-icon-size-small: 1rem;
  --wk-icon-label-gap: 0.5rem;
  
  /* Typography */
  --wk-font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --wk-font-weight-light: 300;
  --wk-font-weight-regular: 400;
  --wk-font-weight-medium: 500;
  --wk-font-weight-bold: 700;
  --wk-font-size-base: 1rem;
  --wk-line-height-tight: 1.125;
  --wk-line-height-normal: 1.25;
  --wk-line-height-relaxed: 1.5;
}
```

## Tailwind CSS Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'wk-blue': {
          25: '#F2F8FC',
          50: '#E6F2F9',
          100: '#CCE4F3',
          175: '#A6D1EA',
          250: '#80BDE1',
          375: '#409BD2',
          500: '#007AC3',
          625: '#005B92',
          750: '#003D61',
        },
        'wk-green': {
          100: '#E7F2D2',
          175: '#D4E8B1',
          250: '#C2DE90',
          375: '#A4CD58',
          500: '#85BC20',
          625: '#648D18',
          750: '#425E10',
        },
        'wk-red': {
          100: '#FAD2D5',
          175: '#F6B1B6',
          250: '#F29097',
          375: '#EC5862',
          500: '#E5202E',
          625: '#AC1822',
          750: '#721017',
        },
        'wk-gray': {
          25: '#F6F6F6',
          50: '#EDEDED',
          100: '#DADADA',
          175: '#BFBFBF',
          250: '#A3A3A3',
          375: '#757575',
          500: '#474747',
          575: '#3C3C3C',
          625: '#353535',
          675: '#2E2E2E',
          750: '#232323',
          825: '#191919',
        },
      },
      boxShadow: {
        'wk-flat': 'none',
        'wk-raised': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        'wk-overlay': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'wk-pop-out': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};
```
