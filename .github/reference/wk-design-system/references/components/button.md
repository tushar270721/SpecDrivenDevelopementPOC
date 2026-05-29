# Button

A button allows users to interact with an application by taking an action such as submitting a form, canceling a task, creating a document, dismissing a dialog, or moving to the next step in a linear process.

Buttons signal actions on a screen and allow users to control and access the interface. While buttons may seem simple, their characteristics can be combined to enhance the user experience.

## Variants

| Variant | Appearance | Use Case |
|---------|------------|----------|
| Primary | Solid blue (`#007AC3`) | Main actions (Save, Download, Submit) |
| Secondary | Outlined with border | Alternative actions (Settings, Cancel) |
| Danger | Solid red (`#E5202E`) | Destructive actions (Delete, Remove) |

## Guidelines

### Do

1. **Use clear, concise labels with active verbs**: Labels like "Add", "Delete", "Save", "Download" clearly communicate the action

2. **Use danger buttons for destructive actions**: Red buttons inform users of potentially destructive actions

3. **Use sentence-case capitalization**: Only the first word and proper nouns should be capitalized (e.g., "Upload file(s)")

4. **Use buttons to initiate actions**: Actions like download, save, print, upload, etc.

5. **Pair with icons when helpful**: Icons can reinforce the action (download arrow, trash for delete, gear for settings)

### Don't

1. **Don't use more than three words**: Keep button labels concise—"Save" not "Submit your form for processing"

2. **Don't use buttons for navigation**: Use links for navigation between pages

3. **Don't overuse danger styling**: Reserve red buttons only for truly destructive actions

## States

| State | Description |
|-------|-------------|
| Default | Normal resting state |
| Hover | Slightly darker background |
| Active/Pressed | Darker background, slight inset |
| Focus | Visible focus ring for keyboard navigation |
| Disabled | Reduced opacity, non-interactive |

## Icons

Buttons may include icons to reinforce the action:
- Download: Arrow pointing down
- Upload: Arrow pointing up
- Delete: Trash can
- Settings: Gear/cog
- Save: Floppy disk

Icon placement: Left of label with `0.5rem` gap.

## Button Groups

When multiple buttons appear together, use overflow menu (three-dot icon) for additional actions to avoid cluttering the interface.

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `ButtonField` | Main button component |

**Key props:**
- `type`: `'primary'` | `'secondary'` | `'tertiary'` | `'text'` | `'icon'`
- `color`: `'info'` (blue) | `'danger'` (red)
- `size`: `'small'` | `'medium'` | `'large'`

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["ButtonField"]`
- `get-jumpstart-components-examples` with `["ButtonField"]`
- `get-jumpstart-components-instructions` with `["ButtonField"]`
