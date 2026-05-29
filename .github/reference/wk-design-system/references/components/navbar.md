# Navbar

The navbar is intended for navigation within a product. Icons can accompany menu labels but should not stand alone. In cases of limited horizontal space, use the 'more' button to indicate overflow of menu items.

## When to Use

- Primary in-product navigation
- Horizontal menu of main sections
- When combined with icons and labels

## Guidelines

### Do

1. **Use the more button for overflow**: When there is insufficient horizontal space to show all menu labels, use the more button (three dots) to indicate overflow

2. **Combine icons with labels**: Icons can accompany menu labels to reinforce meaning

3. **Show active state clearly**: The currently selected item should have a distinct visual treatment (e.g., filled background)

4. **Support dropdown submenus**: Menu items can expand to show additional options with chevron indicators

### Don't

1. **Don't use icons alone**: Icons should always be accompanied by text labels in the navbar

2. **Don't overcrowd**: Limit main navigation items; use overflow menu for additional items

## Anatomy

| Element | Description |
|---------|-------------|
| Nav item | Individual navigation link |
| Active indicator | Visual highlight for current page |
| Dropdown trigger | Chevron indicating submenu |
| More button | Three-dot overflow menu |
| Submenu | Dropdown with additional options |

## States

| State | Description |
|-------|-------------|
| Default | Normal resting state |
| Hover | Slight background change |
| Active | Filled background, indicates current page |
| Expanded | Dropdown menu visible |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Navbar` | Horizontal navigation bar |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Navbar']`
- `get-jumpstart-components-examples` with `["Navbar"]`