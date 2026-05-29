# Switch

A toggle control for binary on/off settings.

## When to Use

- Settings that take effect immediately
- Binary choices (on/off, enabled/disabled)
- Preferences toggles

## Guidelines

### Do

1. **Use for immediate effect**: Changes should apply instantly
2. **Label clearly**: Describe what is being toggled
3. **Show current state**: Make on/off state visually obvious

### Don't

1. **Don't use for forms**: Use checkboxes if submission is required
2. **Don't use for multiple options**: Use checkboxes or radio buttons

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `WkSwitch` | Toggle switch control |

**Note:** The component is named `WkSwitch` (not `Switch`) to avoid conflicts with reserved words.

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["WkSwitch"]`
- `get-jumpstart-components-examples` with `["WkSwitch"]`
