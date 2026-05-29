# Pagination

Pagination allows content to be broken up into smaller sets, making it easier for users to move between records or search results when there are too many to show at once.

Running a search through vast amounts of content could result in many search results. Similarly, a single table could contain many records. Pagination is especially useful on tables and search results pages.

## When to Use

- More than 10 items displayed in one view
- Search results pages
- Data tables with many records
- Any list that benefits from chunking

## Guidelines

### Do

1. **Use pagination for more than 10 items**: Use pagination if there are more than 10 items displayed in one view

2. **Show current page clearly**: Clearly identify which page the user is on by displaying the current page number with distinct styling (underline or highlight)

3. **Show all pages when 7 or fewer**: Show a direct link to all pages when there are 7 pages or less

4. **Disable arrows at boundaries**: Disable the back arrow when the first page number is active; disable the next arrow when the very last page number is active

5. **Use ellipsis for many pages**: When there are more than 7 pages, use an ellipsis after page 5 (before the last page). When the fifth page is active, add a second ellipsis after the first page number

6. **Include results count and page size selector**: Show "1 - 10 of 100 results" with a dropdown to change items per page

### Don't

1. **Don't show too many page numbers**: Use ellipsis to truncate long page ranges

2. **Don't hide navigation arrows**: Always show prev/next arrows, just disable when at boundaries

## Anatomy

| Element | Description |
|---------|-------------|
| Results count | "1 - 10 of 100 results" |
| Page size selector | Dropdown to change items per page (10, 25, 50) |
| Previous arrow | Navigate to previous page |
| Page numbers | Direct links to specific pages |
| Ellipsis | Indicates hidden pages |
| Next arrow | Navigate to next page |

## Ellipsis Rules

| Scenario | Display Pattern |
|----------|-----------------|
| ≤7 pages | Show all: 1 2 3 4 5 6 7 |
| >7 pages, early pages | 1 2 3 4 5 ... 12 |
| >7 pages, page 5 active | 1 ... 4 5 6 ... 12 |
| >7 pages, late pages | 1 ... 8 9 10 11 12 |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `PaginationBar` | Page navigation controls |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['PaginationBar']`
- `get-jumpstart-components-examples` with `["PaginationBar"]`