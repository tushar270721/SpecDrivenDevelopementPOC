# Breadcrumb

Breadcrumbs show the user's current location within the application hierarchy and allow navigation to parent pages.

## When to Use

- Deep navigation hierarchies
- When users need to understand their location
- To provide quick access to parent levels

## Guidelines

### Do

1. **Show current page last**: The current page should be the last item, not a link
2. **Keep labels concise**: Use short, descriptive labels
3. **Use separator icons**: Chevrons or slashes between items

### Don't

1. **Don't use for flat navigation**: Only use when there's a clear hierarchy
2. **Don't make current page clickable**: It's already where the user is

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Breadcrumb` | Main container |
| `BreadcrumbBack` | Back navigation button |
| `BreadcrumbDropdown` | Overflow dropdown |
| `BreadcrumbDropdownItem` | Item in overflow dropdown |
| `BreadcrumbItem` | Individual breadcrumb link |
| `BreadcrumbList` | List container |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["Breadcrumb"]`
- `get-jumpstart-components-examples` with `["Breadcrumb"]`
