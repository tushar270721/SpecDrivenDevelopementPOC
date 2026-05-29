# Popup

A floating container that appears relative to a trigger element. Used as a base for dropdowns, tooltips, and popovers.

## When to Use

- Custom dropdown content
- Rich tooltips or popovers
- Context menus
- Any floating UI anchored to an element

## Guidelines

### Do

1. **Position intelligently**: Flip/shift to stay in viewport
2. **Close on outside click**: Allow dismissal by clicking away
3. **Support keyboard**: Close on Escape key

### Don't

1. **Don't use for simple tooltips**: Use Tooltip component instead
2. **Don't create nested popups**: Keep interactions simple

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Popup` | Floating container |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["Popup"]`
- `get-jumpstart-components-examples` with `["Popup"]`
