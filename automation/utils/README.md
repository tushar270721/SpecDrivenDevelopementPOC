# Utils Directory

## Purpose
Reusable utility functions shared across the entire test suite.

## Files to Create

### authUtil.js
Authentication helpers
- `login()` - Authenticate user
- `logout()` - End user session
- `getToken()` - Retrieve auth token
- `refreshToken()` - Refresh expired token

### dataUtil.js
Test data generation and transformation
- `generateString()` - Generate random strings
- `generateEmail()` - Generate unique emails
- `generateTimestamp()` - Generate timestamps
- `convertDataTable()` - Convert Cucumber data tables
- `faker` utilities for realistic test data

### rateLimitUtil.js
Rate limit validation
- `validateRateLimiting()` - Test rate limit enforcement
- `waitForRateLimit()` - Wait for rate limit window
- `verifyRetryAfter()` - Verify Retry-After headers

### waitUtil.js
Conditional waits (NEVER hardcoded delays)
- `waitForElement()` - Wait for element to exist
- `waitForCondition()` - Wait for custom condition
- `waitUntilStable()` - Wait until element stable

### assertionUtil.js
Custom assertion helpers
- `assertElementVisible()` - Element visibility check
- `assertElementText()` - Text content verification
- `assertResponseStatus()` - HTTP status assertion
- Meaningful error messages

## Guidelines

✅ DO
- Keep functions reusable across multiple tests
- Export functions for import in step definitions
- Use meaningful function names
- Document with JSDoc comments

❌ DON'T
- Don't add hardcoded values
- Don't put business logic here
- Don't mix concerns (auth + data generation)
