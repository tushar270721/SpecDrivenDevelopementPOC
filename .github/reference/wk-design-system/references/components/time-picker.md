# Time Picker

Allows users to select a time value.

## When to Use

- Scheduling interfaces
- Time-based filtering
- Appointment booking
- Any time input

## Guidelines

### Do

1. **Support keyboard entry**: Allow typing time directly
2. **Use appropriate format**: 12-hour or 24-hour based on locale
3. **Show AM/PM clearly**: When using 12-hour format

### Don't

1. **Don't use for date selection**: Use DatePicker for dates
2. **Don't require excessive precision**: Consider if minutes are needed

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `TimePicker` | Time selection input |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["TimePicker"]`
- `get-jumpstart-components-examples` with `["TimePicker"]`
