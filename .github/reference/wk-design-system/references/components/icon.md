# Icon

Displays scalable vector icons from the WK icon library.

## When to Use

- Button labels
- Navigation items
- Status indicators
- Action affordances

## Guidelines

### Do

1. **Use meaningful icons**: Icons should reinforce or clarify meaning
2. **Maintain consistent sizing**: Use standard icon sizes (16px, 20px, 24px)
3. **Provide text alternatives**: Include labels or aria-labels for accessibility

### Don't

1. **Don't use icons alone for critical actions**: Pair with text labels
2. **Don't use decorative icons excessively**: Keep interfaces clean

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Icon` | SVG icon renderer |
| `WkIconDefaultSprite` | Icon sprite sheet (required for icons to work) |

**Note:** You must include `<WkIconDefaultSprite />` once in your app for icons to render.

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["Icon"]`
- `get-jumpstart-components-examples` with `["Icon"]`
