# Fixtures Directory

## Purpose
Test data fixtures used by test scenarios.

## Files to Create

### feature-001-login-data.js
Login test data
- Valid credentials
- Invalid credentials
- Edge case inputs
- Special character tests

### feature-002-dashboard-data.js
Dashboard test data
- Widget configurations
- User preferences
- Sample datasets

### commonTestData.js
Shared test data
- Common user data
- Standard test values
- Reusable datasets

## Guidelines

✅ DO
- Group data by feature
- Use meaningful variable names
- Export as modules
- Keep data realistic

❌ DON'T
- Don't include production data
- Don't hardcode sensitive values
- Don't duplicate data across files
