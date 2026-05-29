# Notification

When interacting with an application, users require information back from the application to understand whether a task was successful or not.

Notifications are messages that communicate general information, give feedback on user input and application status, and provide other valuable pieces of information.

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| Inline | Embedded in page content | Important info or required actions |
| Toast | Floating overlay | Event-driven alerts |

## Guidelines

### Do

1. **Use inline notifications for important information**: Use inline notifications to alert users that important information is available or an action is required to complete the current task

2. **Position inline notifications near the task**: Position inline notifications at the top of the page or near the current user task

3. **Use toast notifications for event-driven alerts**: Toast notifications are for in-application alerts. These event-driven messages generally appear at the top right of the screen and overlay the content

4. **Stack multiple toast notifications**: Stack toast notifications when more than one is showing

5. **Include clear explanation text**: Provide a clear explanation that drops to the next line if it's too long

6. **Provide action buttons when needed**: Include buttons like "Go to message center" or "Dismiss" for actionable notifications

### Don't

1. **Don't overuse toast notifications**: Reserve for important, time-sensitive events

2. **Don't block user workflow unnecessarily**: Inline notifications should not prevent users from continuing their task

## Anatomy

| Element | Description |
|---------|-------------|
| Icon | Status indicator (info, success, warning, error) |
| Title | Bold heading text |
| Message | Explanatory description |
| Close button | X icon to dismiss |
| Action buttons | Optional CTAs |

## Status Types

| Status | Icon Color | Use Case |
|--------|------------|----------|
| Info | Blue (`#007AC3`) | General information |
| Success | Green (`#85BC20`) | Task completed successfully |
| Warning | Orange | Potential issues |
| Error | Red (`#E5202E`) | Failures or errors |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Notification` | Inline notification message |
| `NotificationToastContainer` | Toast notification container |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['Notification', 'NotificationToastContainer']`
- `get-jumpstart-components-examples` with `["Notification"]`
- `get-jumpstart-components-instructions` with `["Notification"]`