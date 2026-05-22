# API Directory

## Purpose
API client classes for testing backend services.

## Files to Create

### baseApi.js
Base class for all API endpoints
- HTTP methods (GET, POST, PUT, DELETE)
- Header management
- Authentication
- Error handling
- Response validation

### authApi.js
Authentication API client
- Login
- Logout
- Token refresh
- User verification

### dashboardApi.js
Dashboard API client
- Fetch dashboard data
- Update preferences
- Manage widgets

### reportsApi.js
Reports API client
- Generate reports
- Fetch report data
- Export reports

## Guidelines

✅ DO
- Extend from BaseApi
- Handle authentication
- Validate responses
- Include rate limit handling
- Return consistent response format

❌ DON'T
- Don't include assertions here
- Don't hardcode URLs
- Don't skip error handling
- Don't repeat code
