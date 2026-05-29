# Password Field

A text input specifically designed for password entry with show/hide toggle.

## When to Use

- Login forms
- Registration forms
- Password change dialogs
- Any secure text entry

## Guidelines

### Do

1. **Include show/hide toggle**: Let users verify their input
2. **Show password requirements**: Display validation rules
3. **Indicate password strength**: Provide visual feedback on strength

### Don't

1. **Don't limit password length unnecessarily**: Allow long passwords
2. **Don't disable paste**: Users should be able to paste from password managers

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `PasswordField` | Password input with toggle |
| `FormFieldIconWrapper` | Icon container |
| `FormFieldStatusIcon` | Validation status icon |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["PasswordField"]`
- `get-jumpstart-components-examples` with `["PasswordField"]`
