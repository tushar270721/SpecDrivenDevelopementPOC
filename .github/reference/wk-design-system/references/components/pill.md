# Pill

Dismissible pills assist users in handling applied filters, while suggestion pills assist in refining search queries. They achieve this by either starting a new search with the suggested term or incorporating the suggestion into the current query.

When an application offers many filter options, it can be hard for users to determine which filters are active. When the user clicks a filter from the list, the pill appears at the top of the result list. To remove the pill, the user clicks the pill or the "clear all filters" text button.

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| Filter pill | Shows active filters, dismissible | Applied search filters |
| Suggestion pill | Clickable terms | Search suggestions, related terms |

## When to Use

- Search result pages with filtering
- Showing active filters
- Suggesting related search terms
- Any context where users need to see and manage selections

## Guidelines

### Do

1. **Use pills on search result pages**: Use pills on search result pages and other pages that offer filtering

2. **Position pills at the top**: Always place pills at the top of the element they apply to (e.g., search results list)

3. **Include dismiss functionality**: Filter pills should be dismissible via an X icon

4. **Provide "clear all" option**: When multiple pills are active, include a "clear all" link

5. **Use default styling only**: Keep pills in the default color scheme

### Don't

1. **Don't use custom colors**: Don't use colors other than the default, as the filter pill should not distract the user from the results list

2. **Don't truncate pill labels**: Do not truncate the label within the pill body—show the full text

3. **Don't use for decoration**: Pills are functional, not decorative elements

## Anatomy

| Element | Description |
|---------|-------------|
| Label | Filter or suggestion text |
| Dismiss icon | X icon for removing filter pills |
| Search icon | Optional for suggestion pills |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `PillDismissibleField` | Removable filter pill |
| `PillSuggestionField` | Clickable suggestion pill |
| `PillGroup` | Container for multiple pills |
| `PillTextField` | Text-only pill |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['PillDismissibleField', 'PillSuggestionField', 'PillGroup', 'PillTextField']`
- `get-jumpstart-components-examples` with `["PillDismissibleField"]`