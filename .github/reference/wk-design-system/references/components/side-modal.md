# Side Modal

A side modal is a user interface element designed to provide additional information or functionality without disrupting the main user flow. Unlike traditional modal windows that appear in the center of the screen, a side modal is positioned on the side of the main content area, often overlaying a portion of it.

## When to Use

- Displaying supplementary content without full context switch
- Detail views that relate to main content
- Forms or editing panels
- Secondary navigation or filters

## Guidelines

### Do

1. **Slide from viewport edge**: A side modal slides out from the left or right of the viewport and sits on top of the UI, including the Chrome

2. **Use 50% opacity overlay**: When a side modal is active, the UI should be covered by an overlay that is black at 50% opacity

3. **Maintain context**: Unlike center modals, side modals keep part of the main content visible

4. **Include close mechanism**: Provide clear ways to dismiss (X button, overlay click, Esc key)

### Don't

1. **Don't use for critical confirmations**: Use center modals for important confirmations that require full attention

2. **Don't nest side modals**: Avoid opening side modals from within side modals

## Anatomy

| Element | Description |
|---------|-------------|
| Overlay | Semi-transparent background (50% black) |
| Panel | Side-positioned content container |
| Header | Title and close button area |
| Content | Main panel content |
| Footer | Optional action buttons |

## Position Options

| Position | Description |
|----------|-------------|
| Left | Slides in from left edge |
| Right | Slides in from right edge (more common) |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `SideModal` | Slide-out panel from viewport edge |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['SideModal']`
- `get-jumpstart-components-examples` with `["SideModal"]`