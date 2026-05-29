# Fishbowl

The fishbowl contains all relevant information related to the logged-in user and the organization they are working for at that time.

When authentication is required, the Fishbowl provides a clear visual indicator of the logged-in state, showing both user identity and organizational context. It serves as an entry point for account-related actions.

## When to Use

- Header/navigation areas where user context is needed
- Applications where users work on behalf of organizations
- Multi-tenant applications with organization switching

## Anatomy

| Element | Description |
|---------|-------------|
| User avatar | Photo or initials of the logged-in user |
| Organization avatar | Logo or initials of the current organization |
| User name | Full name of the logged-in user |
| Organization name | Name of the current organization |

## Avatar Initials Rules

When no organization image is available, use initials with brand-compliant background colors:

| Name Type | Rule | Example |
|-----------|------|---------|
| Single word | First initial used across all sizes | "Boeing" → "B" |
| Two words | Both first initials shown (first only at small sizes) | "Lockheed Martin" → "LM" |
| Multiple words | First and last word initials (middle words ignored) | "Huntington Ingalls Industries" → "HI" |

## Guidelines

### Do

1. **Show default placeholder when image unavailable**: Display a placeholder avatar when user or organization image fails to load

2. **Use brand-compliant colors for organization initials**: Organization avatars should use WK Blue, Green, Red, or dark gray backgrounds

3. **Display both user and organization context**: Show the relationship between the logged-in user and their organization

### Don't

1. **Don't omit organization context**: When relevant, always show which organization the user is working in

2. **Don't use inconsistent avatar sizing**: User and organization avatars should be proportionally sized

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `Fishbowl` | User and organization context display |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["Fishbowl"]`
- `get-jumpstart-components-examples` with `["Fishbowl"]`
