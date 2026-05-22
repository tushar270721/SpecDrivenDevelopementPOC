# Constants Directory

## Purpose
Centralized configuration constants and predefined values.

## Files to Create

### environments.js
Environment-specific URLs and endpoints
- Base URLs
- API endpoints
- Authentication services
- Third-party service URLs

### timeouts.js
Timeout values (all in milliseconds)
- Element wait timeout
- Page load timeout
- API call timeout
- Visual regression timeout

### testData.js
Predefined test data sets
- Valid user credentials
- Invalid input examples
- Edge case values
- Sample datasets

### messages.js
Expected messages and error texts
- Success messages
- Error messages
- Validation messages
- Toast notifications

## Guidelines

✅ DO
- Keep values in this directory
- Use meaningful constant names
- Group related values together
- Document complex values

❌ DON'T
- Don't hardcode values in test files
- Don't mix with configuration
- Don't include secrets here
