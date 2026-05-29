# Splitpane

A splitpane is a resizable divider that splits the screen into two sections, allowing users to adjust the size of each section by dragging the divider. This component is typically used in information-based (research) applications and usually contains a table of contents or browse tree.

The splitpane is related to the side modal but is placed on the left and/or right of the main content and does not disappear when dismissed—you can only expand and collapse the splitpane.

## When to Use

- Research applications with browse trees
- Table of contents alongside main content
- Document viewers with navigation panels
- Any layout requiring resizable side panels

## Key Differences from Side Modal

| Feature | Splitpane | Side Modal |
|---------|-----------|------------|
| Persistence | Always present, expand/collapse | Appears/disappears |
| Overlay | No overlay | 50% black overlay |
| Resizable | Yes, drag to resize | Fixed width |
| Context | Part of main layout | Overlays content |

## Anatomy

| Element | Description |
|---------|-------------|
| Panel | Content area (left or right) |
| Divider | Draggable resize handle |
| Collapse toggle | Button to collapse/expand panel |
| Main content | Primary content area |

## States

| State | Description |
|-------|-------------|
| Expanded | Panel visible at set width |
| Collapsed | Panel hidden, toggle visible |
| Resizing | User dragging divider |

## Guidelines

### Do

1. **Use for persistent navigation**: Splitpanes work well for content that users need to reference while viewing main content

2. **Allow resize**: Let users adjust the panel width to their preference

3. **Remember user preference**: Store collapsed/expanded state and width preference

4. **Set sensible min/max widths**: Prevent panels from becoming too narrow or too wide

### Don't

1. **Don't use for temporary content**: Use side modal for content that should dismiss

2. **Don't block main content**: Splitpanes share space, they don't overlay

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Splitpane` | Main container |
| `SplitpanePanel` | Resizable panel |
| `SplitpaneSeparator` | Draggable divider |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Splitpane', 'SplitpanePanel', 'SplitpaneSeparator']`
- `get-jumpstart-components-examples` with `["Splitpane"]`
- `get-jumpstart-components-instructions` with `["Splitpane"]`