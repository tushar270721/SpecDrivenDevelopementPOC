# Dropdown

A dropdown displays a list of options that can be used to filter or sort content, or function as a menu. Multiple dropdown variants support advanced user behavior.

The dropdown is a flexible, generic component that can be combined with other components (e.g., buttons) and may contain any type of content (text, links, inputs, images, etc.).

## When to Use

- Filtering or sorting content
- Contextual menus for actions
- Overflow actions from toolbars
- Any scenario requiring a temporary list of options

## Guidelines

### Do

1. **Keep option labels short and concise**: If labels don't fit the dropdown width, truncate them—avoid wrapping text inside a dropdown

2. **Place destructive options at the bottom**: Keep destructive actions (like Delete) at the bottom, preferably separated by a divider (horizontal line) from the main list of actions

3. **Use dividers to group related options**: When there is a need to group options, add categories and/or use dividers inside a dropdown

4. **Include icons for clarity**: Pair options with icons to reinforce meaning (bookmark, share, print, delete, etc.)

5. **Use category headers for grouping**: ALL CAPS headers can label groups of related options (e.g., "SNOOZE NOTIFICATIONS")

### Don't

1. **Don't wrap text**: Long labels should be truncated with ellipsis, not wrapped to multiple lines

2. **Don't mix destructive and non-destructive actions**: Separate them visually with a divider

## Anatomy

| Element | Description |
|---------|-------------|
| Menu item | Individual option row |
| Icon | Optional leading icon |
| Label | Action text |
| Divider | Horizontal line separating groups |
| Category header | ALL CAPS label for option groups |

## Content Types

Dropdowns may contain:
- Text labels
- Icons with labels
- Inputs (for filter dropdowns)
- Images
- Dividers
- Category headers

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Dropdown` | Main dropdown container |
| `DropdownItemField` | Individual menu item |
| `DropdownItemWithSubmenu` | Item with nested submenu |
| `DropdownList` | List container for items |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["Dropdown"]`
- `get-jumpstart-components-examples` with `["Dropdown"]`
