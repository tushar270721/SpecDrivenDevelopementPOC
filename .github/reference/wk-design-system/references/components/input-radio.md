# Input - Radio Button

Radio buttons are used when a list of two or more options are mutually exclusive, meaning the user can select only one option.

## When to Use

- Mutually exclusive choices (only one selection allowed)
- 2–5 visible options
- When users should see all options at once
- Alternative to combobox for small option sets

## Guidelines

### Do

1. **Always present in groups of 2 or more**: Radio buttons are always presented in groups (2 minimum)

2. **Select a default option in most cases**: Select a single radio button by default to indicate the recommended or most common choice

3. **Include heading and description**: Provide a group label and optional helper text describing the selection

### Don't

1. **Never show only one radio button**: A single radio button defeats the purpose—use a checkbox instead for single binary choices

2. **Don't use for multiple selections**: Use checkboxes when users can select more than one option

3. **Don't use for large lists**: For more than 5 options, consider using a combobox

## Anatomy

| Element | Description |
|---------|-------------|
| Group label | Heading describing the selection category |
| Helper text | Optional description below the label |
| Radio button | Circular selection indicator |
| Option label | Text describing each option |

## States

| State | Description |
|-------|-------------|
| Unselected | Empty circle |
| Selected | Circle with filled center |
| Disabled | Reduced opacity, non-interactive |
| Focus | Visible focus ring |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `RadioField` | Radio input with label |
| `FormFieldLabel` | Associated label component |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['RadioField', 'FormFieldLabel']`
- `get-jumpstart-components-examples` with `["RadioField"]`