# Spine

The spine contains the main navigation and helps users find and understand the main functional areas of a workflow-based application. The spine is part of the workflow-based application chrome and is always positioned flush left of the viewport.

The spine should always be used in combination with the banner for workflow-based applications.

## When to Use

- Primary navigation for workflow-based applications
- Desktop applications with multiple functional areas
- When combined with the Banner component

## Anatomy

| Element | Description |
|---------|-------------|
| Container | Dark vertical bar on left edge |
| Nav items | Icon buttons for main sections |
| Active indicator | Blue highlight for current section |
| Expand toggle | Chevron to expand/collapse spine |
| Tooltips | Labels shown on hover when collapsed |

## States

| State | Description |
|-------|-------------|
| Collapsed | Icons only, tooltips on hover |
| Expanded | Icons with text labels visible |

## Guidelines

### Do

1. **Use as primary navigation**: Use the spine primarily as the way for users to navigate your product

2. **Choose meaningful icons**: Choose meaningful, unambiguous icons to represent navigation items in the spine

3. **Show tooltips when collapsed**: Use tooltips on hover and focus to reveal the menu item's function when the spine is collapsed

4. **Show labels when expanded**: Always show the label next to the menu item icon when the spine is expanded

5. **Truncate with ellipsis**: Truncate labels with an ellipsis (...) when there is not enough horizontal space—do not wrap labels

### Don't

1. **Don't customize colors or fonts**: Do not change the spine's colors, fonts, or other aesthetics that are tied to branding guidelines

2. **Don't duplicate header icons**: Do not duplicate icons used in the header in the spine (e.g., search, log in/out, history)

3. **Don't wrap labels**: Labels should truncate, never wrap to multiple lines

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Spine` | Main vertical navigation |
| `SpineItem` | Navigation item |
| `SpineItemParent` | Parent item with children |
| `SpineToggle` | Expand/collapse toggle |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Spine', 'SpineItem', 'SpineItemParent', 'SpineToggle']`
- `get-jumpstart-components-examples` with `["Spine"]`