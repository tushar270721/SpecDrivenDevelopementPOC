# Tabs

Many of our products are content-heavy, which makes it a challenge for users to find specific information. Tabs help organize content into logical sections.

## When to Use

- Organizing related content into sections
- Reducing page scrolling
- When users need to switch between views of similar content
- Content that can be logically grouped

## Anatomy

| Element | Description |
|---------|-------------|
| Tab list | Container for all tab items |
| Tab | Individual selectable tab with label |
| Active indicator | Underline showing current selection |
| Tab panel | Content area for active tab |

## States

| State | Description |
|-------|-------------|
| Default | Unselected tab |
| Active | Currently selected tab with underline |
| Hover | Slight color change |
| Focus | Visible focus ring |
| Disabled | Reduced opacity |

## Guidelines

### Do

1. **Use clear, concise labels**: Tab labels should clearly describe the content within

2. **Keep tab count manageable**: Limit to 2–7 tabs for easy scanning

3. **Show active state clearly**: Use underline to indicate the active tab

4. **Maintain consistent tab width**: Tabs can be equal width or auto-width based on content

### Don't

1. **Don't use tabs for sequential steps**: Use a stepper component for workflows

2. **Don't wrap tabs to multiple lines**: If tabs don't fit, consider alternative navigation

3. **Don't use for unrelated content**: Tabs should group related information

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Tabs` | Main container |
| `Tablist` | Tab button container |
| `Tab` | Individual tab button |
| `TabLine` | Active indicator line |
| `TabPanels` | Content panels container |
| `TabPanel` | Individual content panel |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Tabs', 'Tablist', 'Tab', 'TabLine', 'TabPanels', 'TabPanel']`
- `get-jumpstart-components-examples` with `["Tabs"]`