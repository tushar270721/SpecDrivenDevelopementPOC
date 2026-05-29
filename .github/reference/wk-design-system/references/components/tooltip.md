# Tooltip

Our products can sometimes include new or unclear icons, workflows, or actions that might need additional explanation. Tooltips provide users with additional information on hover, focus, or when automatically prompted.

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| Indicator | Minimal, single-line text | Quick icon/action clarification |
| Description | Multi-line, more detailed | Additional guidance, definitions |

## Position Options

| Position | Description |
|----------|-------------|
| Top | Above the trigger (default) |
| Right | To the right of trigger |
| Bottom | Below the trigger |
| Left | To the left of trigger |

## Guidelines

### Do

1. **Use to explain unclear UI**: Use tooltips to explain icons, descriptions, actions, or interactions when there's a risk that the meaning or affordance of a UI element isn't clear

2. **Use indicator tooltips for icons**: Use the indicator tooltip to clarify or explain an icon or action. Keep text to an absolute minimum, always on a single line

3. **Use description tooltips for more detail**: Use the description tooltip if you need room for more text, such as providing additional guidance or defining specific terms

4. **Position above by default**: Position the tooltip above the trigger by default. Adjust position based on element's proximity to viewport edge and to avoid overlapping other UI elements

5. **Position tooltips left of right-side actions**: Display tooltips for post-processing to the left of actions, as these actions are always stacked on the right side of the viewport

6. **Adjust for viewport edges**: For horizontally positioned triggers, position tooltips above by default. If the tooltip overlaps important elements or triggers are near the top of viewport, place tooltip below

7. **Keep tooltips short and concise**: Ensure tooltips are short and concise. Use a modal for more elaborate prompts

### Don't

1. **Don't overuse tooltips**: They should be seen as a fallback solution, not the primary way to communicate

2. **Don't wrap text in indicator tooltips**: Never wrap text inside an indicator tooltip; always keep it on a single line

3. **Don't overlap important elements**: Avoid placing tooltips in positions that are intrusive or overlap important elements

4. **Don't use for essential information**: Information critical to completing a task should not be hidden in a tooltip

## Trigger Methods

| Trigger | Description |
|---------|-------------|
| Hover | Mouse enters trigger element |
| Focus | Keyboard focus on trigger |
| Automatic | System-initiated prompt |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Tooltip` | Contextual hint on hover/focus |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Tooltip']`
- `get-jumpstart-components-examples` with `["Tooltip"]`