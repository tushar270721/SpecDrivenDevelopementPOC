# Input - Search

Search enables users to specify a word or phrase to find relevant content without using navigation. Search can be the primary means of discovering content, or a filter to aid users in finding specific items.

## When to Use

- Primary content discovery
- Filtering large datasets
- Finding specific items in lists
- Global site/application search

## Guidelines

### Do

1. **Use on all pages as a navigation means**: Search is typically found in the Banner and should be consistently available

2. **Show suggestions when available**: When performing a search, display suggestions to help users find what they're looking for faster

3. **Show loading indicator for delays**: If search requires a load or delay, indicate that the system is working by showing a loading indicator inline in the search input

4. **Clear button for easy reset**: Include a clear button when there's text in the input

### Don't

1. **Don't hide search in unexpected locations**: Keep search in predictable locations (header/banner)

2. **Don't delay showing results unnecessarily**: Display results as quickly as possible

## Anatomy

| Element | Description |
|---------|-------------|
| Search icon | Magnifying glass indicating search function |
| Input field | Text input for search query |
| Clear button | X icon to clear the input |
| Loading indicator | Spinner shown during search processing |
| Suggestions dropdown | List of suggested results |

## States

| State | Description |
|-------|-------------|
| Empty | Placeholder text visible |
| Focused | Active cursor in input |
| Typing | User entering query |
| Loading | Spinner visible during search |
| Results | Suggestions dropdown shown |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `SearchField` | Main search input |
| `SearchPreFilterButtonField` | Pre-filter button |
| `SearchSuggestions` | Autocomplete suggestions |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['SearchField', 'SearchPreFilterButtonField', 'SearchSuggestions']`
- `get-jumpstart-components-examples` with `["SearchField"]`