---
description: "Assertion patterns for test validations in step definitions"
applyTo: "tests/step_definitions/**/*.js"
---

# Assertions - Comprehensive Reference

> **⚠️ IMPORTANT**: Use assertions ONLY in step definitions (Then steps), never in Page Objects or utilities.

#### UI Component Assertions

**Text Verification:**
```javascript
await assertTextEquals(component, expectedText, 'Custom error message');
await assertTextContains(component, partialText, 'Custom error message');
await assertTextMatches(component, /pattern/, 'Custom error message');
```

**Element State Assertions:**
```javascript
await assertIsExisting(component, 'Custom error message');
await assertIsNotExisting(component, 'Custom error message');
await assertIsEnabled(component);
await assertIsDisabled(component);
```

**Element Count Assertions:**
```javascript
// Exact number of elements
await assertElementCount(links, 5);
// Custom comparison function - Use for range checks
// Asserts that link count greater than 5
await assertElementCount(links, 5, (exp, act) => exp > act);
// 5 = exp, act = actual component count (that could be changed while loading)
```

**Table Data Verification:**
```javascript
// Verify specific rows exist in table - Use for data grid validation
const expectedRows = [
    { 'Column 1': 'Value 1', 'Column 2': 'Value 2' },
    { 'Column 1': 'Value 3', 'Column 2': 'Value 4' }
];
await assertTable(tableComponent, expectedRows, 'Custom error message');
```

#### Data Validation Assertions

**Conditional Assertions:**
```javascript
// IMPORTANT: assertTrue returns a Promise and MUST be awaited.
// If you pass a function, the framework will poll it (using waitForTrue) until it returns true or timeout expires.
// In contrast, assertFalse is synchronous (no internal waiting) and should NOT be awaited.
// You should prepare the value you pass to assertFalse (await the call yourself if it is async):
await assertTrue(someCondition, 'Custom error message');
assertFalse(condition, 'Custom error message');
```

**Value Comparisons:**
```javascript
assertEqual(actualValue, expectedValue, 'Custom error message');
assertNotEqual(actualValue, unexpectedValue, 'Custom error message');
```

**Object and Array Comparisons:**
```javascript
// Object equality (all properties) - Use for complete object validation
assertObjectsEqual(actualObj, expectedObj, 'Custom error message');
// Object equality (specific properties only) - Use for partial object validation
assertObjectsEqual(actualObj, expectedObj, ['prop1', 'prop2'], 'Custom error message');

// Array content equality (order ignored) - Use when order doesn't matter
assertArraysEqual(actualArray, expectedArray, 'Custom error message');
// Array content and order equality - Use when order is important
assertArraysOrderEqual(actualArray, expectedArray, 'Custom error message');
```

**Group Multiple Assertions:**
- If there are several asserts in one step you can use assertMultiple
```javascript
await assertMultiple([
    () => assertTextEquals(title, 'Expected Title'),
    () => assertIsExisting(submitButton)
], 'Custom error message for the group');
```

#### API Response Assertions

**Status Code Verification:**
```javascript
assertResponseCode(response, 200, 'Custom error message');
assertResponseCode(response, 404, 'Resource not found');
```

**Response Body Type Verification:**
```javascript
assertResponseBodyType(response, 'object', 'Custom error message');
assertResponseBodyType(response, 'string', 'Expected string response');
```

**Response Body Key Verification:**
```javascript
assertResponseBodyContainsKey(response, 'id', 'Custom error message');
assertResponseBodyContainsKey(response, 'status', 'Status key missing');
```

**Response Headers Key Verification:**
```javascript
assertResponseHeadersContainKey(response, 'content-type', 'Custom error message');
assertResponseHeadersContainKey(response, 'authorization', 'Auth header missing');
```

**Response Body Object Verification:**
```javascript
assertResponseBodyContainsObject(response, { status: 'success' }, 'Custom error message');
assertResponseBodyContainsObject(response, { id: 123 }, 'ID mismatch');
```

**Response Headers Object Verification:**
```javascript
assertResponseHeadersContainObject(response, { 'content-type': 'application/json' }, 'Custom error message');
assertResponseHeadersContainObject(response, { server: 'nginx' }, 'Server header mismatch');
```