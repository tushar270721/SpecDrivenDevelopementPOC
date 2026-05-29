# Modal

A modal is a user interface element that overlays other content, requiring user interaction before allowing access to underlying content.

An application occasionally needs input from the user before it can continue. A modal is an effective way to force the user to provide essential input without losing the context of a particular task.

## When to Use

- Collecting required input before continuing
- Confirmation dialogs for important actions
- Displaying focused content without navigation
- Interrupting workflow for critical information

## Guidelines

### Do

1. **Provide multiple dismissal methods**: Make sure the user has multiple, easy ways to dismiss a modal—the 'x' icon, 'Dismiss' or 'Cancel' buttons, and the 'Esc' key on keyboard

2. **Block underlying UI with overlay**: When a modal appears, always block the underlying UI using a transparent black overlay displayed at 50% opacity

3. **Include expand/fullscreen option**: For content-heavy modals, provide an expand icon to maximize the modal

4. **Focus trap within modal**: Keep keyboard focus within the modal until it's dismissed

### Don't

1. **Don't allow interaction with background**: The overlay should prevent clicks on underlying content

2. **Don't nest modals**: Avoid opening modals from within modals

3. **Don't use for simple messages**: Use notifications or inline messages for non-blocking feedback

## Anatomy

| Element | Description |
|---------|-------------|
| Overlay | Semi-transparent black background (50% opacity) |
| Container | White modal body with content |
| Header | Optional title area |
| Close button | X icon in top-right corner |
| Expand button | Optional maximize icon |
| Content area | Main modal content |
| Footer | Optional action buttons area |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Modal` | Dialog overlay component |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Modal']`
- `get-jumpstart-components-examples` with `["Modal"]`