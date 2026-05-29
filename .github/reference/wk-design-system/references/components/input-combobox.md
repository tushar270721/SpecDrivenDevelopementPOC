# Input - Combobox

The combobox is a combination of a text input field and select control. Use the input field to quickly search and find options, which is helpful when there is a large number of items to choose from.

## When to Use

- Large lists of options (more than 6 items)
- When users benefit from typing to filter
- Searchable select scenarios
- When options need to be quickly narrowed down

## Guidelines

### Do

1. **Set max-height to show 6 options**: The listbox has a set max-height to show 6 options by default, with scroll enabled for overflow. Product teams may adjust if accessibility is considered

2. **Consider radio buttons for fewer options**: When there are fewer than 5 options in the listbox, consider using a Radio button group instead—this makes options more visible to users

3. **Keep item labels short and concise**: Labels should be brief and scannable

4. **Show filtered results as user types**: Display matching options that contain the typed text

### Don't

1. **Don't use for very small option sets**: Use radio buttons or a simple select for fewer than 5 options

2. **Don't truncate option labels**: Ensure the dropdown is wide enough to show full labels

## Anatomy

| Element | Description |
|---------|-------------|
| Input field | Text input for typing/filtering |
| Clear button | Icon to clear the input |
| Toggle button | Chevron to open/close listbox |
| Listbox | Dropdown containing options |
| Option | Individual selectable item |

## States

| State | Description |
|-------|-------------|
| Closed | Only input field visible |
| Open | Listbox displayed below input |
| Filtering | Showing filtered results based on input |
| Selected | Input shows selected option text |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Combobox` | Searchable select dropdown |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Combobox']`
- `get-jumpstart-components-examples` with `["Combobox"]`