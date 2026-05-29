# Input - Checkbox

An input for selecting from predetermined options. When used independently, it offers a binary choice (selected/deselected). Within a group, it enables users to choose multiple values from a list of options.

## When to Use

- Multiple selections allowed from a list
- Binary choices (agree/disagree, enable/disable)
- Hierarchical selections with parent/child relationships
- Terms and conditions acceptance

## Variants

| Variant | Description |
|---------|-------------|
| Unchecked | Empty checkbox |
| Checked | Checkbox with checkmark |
| Indeterminate | Partial selection (parent with some children selected) |

## Guidelines

### Do

1. **Include a heading label (legend) for groups**: A group of checkboxes should be accompanied by a heading label that describes the category

2. **Allow individual checkbox use**: Checkboxes may appear individually (e.g., "Accept Terms & Conditions" below a form)

3. **Support hierarchical nesting**: Use indentation to show parent-child relationships in checkbox trees

4. **Use indeterminate state for partial selections**: When a parent has some but not all children selected, show the indeterminate (minus) state

### Don't

1. **Don't pre-select options in groups**: A group of checkboxes should never have any option pre-selected

2. **Don't use for mutually exclusive options**: Use radio buttons instead when only one option can be selected

## States

| State | Description |
|-------|-------------|
| Unchecked | Default empty state |
| Checked | Selected with checkmark |
| Indeterminate | Minus icon for partial parent selection |
| Disabled | Reduced opacity, non-interactive |
| Focus | Visible focus ring |

## Accessibility

- Use `<fieldset>` and `<legend>` for checkbox groups
- Ensure 3:1 contrast ratio for checkbox borders
- Support keyboard navigation (Space to toggle)

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `CheckboxField` | Checkbox input with label |
| `FormFieldLabel` | Associated label component |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['CheckboxField', 'FormFieldLabel']`
- `get-jumpstart-components-examples` with `["CheckboxField"]`
- `get-jumpstart-components-instructions` with `["CheckboxField"]`