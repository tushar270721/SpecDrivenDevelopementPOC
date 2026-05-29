# Tag

Users need good information architecture and visual cues for quick recognition and navigation. Tags help avoid cognitive overload and increase work efficiency.

Note: Tags increase visual noise, particularly when combined with other visual labeling elements. Use them in moderation or select the text variant in cases of high visual density.

## When to Use

- Categorizing content items
- Showing metadata or status
- Labeling items in lists or cards
- Visual indicators for content types

## Guidelines

### Do

1. **Use for categorization**: Tags help users quickly identify content categories or types

2. **Keep labels concise**: Tag text should be short and scannable

3. **Use consistent styling**: Apply the same tag styles across similar contexts

4. **Consider text variant for density**: In visually dense areas, use text-only tags without background

### Don't

1. **Don't overuse tags**: Too many tags create visual noise and reduce effectiveness

2. **Don't use for actions**: Tags are for labeling, not triggering actions (use buttons or pills)

3. **Don't combine many labeling elements**: Avoid using tags alongside many other visual indicators

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| Filled | Background color with text | Standard categorization |
| Outlined | Border only, no fill | Lower visual emphasis |
| Text | Text only, no background | High-density layouts |

## Status Colors

| Status | Color | Use Case |
|--------|-------|----------|
| Default | Gray | Neutral categorization |
| Info | Blue | Informational labels |
| Success | Green | Positive status |
| Warning | Orange | Caution indicators |
| Error | Red | Critical or error status |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Tag` | Individual tag |
| `TagGroup` | Container for multiple tags |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Tag', 'TagGroup']`
- `get-jumpstart-components-examples` with `["Tag"]`