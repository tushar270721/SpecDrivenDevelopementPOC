# Input - Slider

Sliders provide a quick and easy way for users to pick a specific value when there are many options to choose from.

## When to Use

- Selecting a value from a continuous range
- When approximate values are acceptable
- Volume, brightness, or similar controls
- Rating scales with moderate ranges

## Guidelines

### Do

1. **Use a label to indicate what value is changing**: Always include a label that describes what the slider controls (e.g., "Satisfaction scale")

2. **Display the current value**: Show the selected value alongside the slider (e.g., "1 / 5")

3. **Use appropriate ranges**: Choose ranges that make sense for the use case (e.g., 1–5, 1–10)

### Don't

1. **Don't use extremely large ranges**: Avoid ranges like 1–1000 where precise selection becomes difficult

2. **Don't use very small ranges**: Avoid ranges like 1–3 where radio buttons would be more appropriate

3. **Don't hide the current value**: Users should always see what value they've selected

## Anatomy

| Element | Description |
|---------|-------------|
| Label | Text describing what the slider controls |
| Track | Horizontal line representing the range |
| Fill | Colored portion showing selected range |
| Thumb | Draggable handle for selection |
| Value display | Current value / max value (e.g., "1 / 5") |

## Recommended Ranges

| Range | Use Case |
|-------|----------|
| 1–5 | Satisfaction scales, ratings |
| 1–10 | Detailed ratings |
| 0–100 | Percentages, progress |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Slider` | Range slider input |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Slider']`
- `get-jumpstart-components-examples` with `["Slider"]`