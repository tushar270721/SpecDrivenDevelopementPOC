# Segmented Control

A segmented control allows users to choose one out of a range of available options. It is a button group of equal options where only one can be selected and active at a time.

Segmented controls have limitations to the number of options displayed. Only single selection is supported.

## When to Use

- Quick switching between different views
- Sorting or filtering options (e.g., "Most relevant" / "Most recent")
- Chart type selection
- 2–5 mutually exclusive options with enough display space

## Guidelines

### Do

1. **Use for quick view switching**: Use segmented controls when users need to quickly switch between different views

2. **Prefer over dropdowns for ≤5 options**: Choose segmented controls over dropdowns when there are 5 or fewer options and there's enough space to display them

3. **Keep segment widths equal**: Keep content size consistent for each segment, as the container will remain the same size for each option

4. **Always have one option selected**: One option must always be selected—never leave the control with no active options

### Don't

1. **Don't use for more than 5 options**: Don't use segmented controls if there are more than 5 options or insufficient space

2. **Don't allow text wrapping or truncation**: Don't allow text in segmented controls to wrap or truncate

3. **Don't select multiple options**: Don't have more than one option selected and active at a time

4. **Don't leave unselected**: Don't leave segmented control with no active options

## Anatomy

| Element | Description |
|---------|-------------|
| Container | Border around all segments |
| Segment | Individual option button |
| Label | Text describing the option |
| Active indicator | Visual highlight for selected segment |

## States

| State | Description |
|-------|-------------|
| Default | Unselected segment |
| Active | Currently selected segment (darker background) |
| Hover | Slight background change on unselected segments |
| Disabled | Reduced opacity, non-interactive |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `SegmentedControl` | Main container |
| `SegmentedControlItem` | Individual segment option |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['SegmentedControl', 'SegmentedControlItem']`
- `get-jumpstart-components-examples` with `["SegmentedControl"]`