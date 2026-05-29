# Accordion

The accordion component delivers large amounts of content in a small space through progressive disclosure. The header title gives users a high-level overview of the content, allowing them to decide which sections to read.

Accordions can make information processing and discovery more effective. However, they hide content from users—account for users potentially not noticing or reading all included content.

## When to Use

- Vertical space is limited
- Page contains a large amount of information
- Mobile devices where scrolling should be minimized
- Content can be logically grouped into discrete sections

## Anatomy

| Element | Description |
|---------|-------------|
| Header | Contains the section heading text |
| Chevron | Indicator showing expanded/collapsed state (right side) |
| Content area | Revealed content when expanded |

## Guidelines

### Do

1. **Use for space efficiency**: Accordions work especially well on mobile devices—placing content inside an accordion makes it more digestible as users scroll less

2. **Write clear, concise headings**: Create section headings that inform users what type of information the accordion contains. Use sentence case for all headings

3. **Place chevron on the right**: Always position the chevron at the far right of the accordion row. Chevron points up when expanded, down when collapsed

4. **Support varied content types**: Expanded rows may contain any content type—text, video, images, etc.

5. **Use appropriate row counts**: Aim for 2–6 rows per accordion

### Don't

1. **Don't use single-row accordions**: At minimum, an accordion should have two rows

2. **Don't make accordions too large**: Recommended size is 2–6 rows

3. **Don't nest accordions**: Placing accordions inside accordions increases cognitive load and causes usability issues

4. **Don't truncate headings**: Allow long headings to wrap rather than truncating with ellipsis

5. **Don't expand by default**: Accordions should be collapsed by default

## States

| State | Description |
|-------|-------------|
| Collapsed (default) | Content hidden, chevron pointing down |
| Expanded | Content visible, chevron pointing up |
| Disabled | Non-interactive, reduced opacity |

## Accessibility

- Use `aria-expanded` to indicate state
- Use `aria-controls` to associate header with content panel
- Ensure chevron has sufficient contrast (3:1 minimum)
- Support keyboard navigation (Enter/Space to toggle)

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Accordion` | Main container |
| `AccordionItem` | Individual collapsible section |
| `AccordionItemHeader` | Clickable header (use slot `accordionItemHeading2`) |
| `AccordionItemIconWrapper` | Optional icon wrapper |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["Accordion"]`
- `get-jumpstart-components-examples` with `["Accordion"]`
