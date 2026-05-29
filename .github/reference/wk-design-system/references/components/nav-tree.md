# Nav Tree

A hierarchical tree navigation for nested content structures.

## When to Use

- File/folder navigation
- Nested category browsing
- Hierarchical menu structures
- Table of contents

## Guidelines

### Do

1. **Limit nesting depth**: Keep hierarchy to 3-4 levels max
2. **Show expand/collapse indicators**: Use chevrons for expandable items
3. **Highlight current location**: Show which item is currently active

### Don't

1. **Don't create deep hierarchies**: Users get lost beyond 4 levels
2. **Don't auto-expand all levels**: Start collapsed, let users explore

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `NavTree` | Main tree container |
| `NavTreeItem` | Individual tree node |
| `NavTreeSeparator` | Visual divider |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["NavTree"]`
- `get-jumpstart-components-examples` with `["NavTree"]`
- `get-jumpstart-components-instructions` with `["NavTree"]`
