# Avatar

Using an avatar makes it clear to the user they are logged in and provides a natural place for account-related actions (settings, profile, log out).

In many WK products, users can access content without logging in. When authentication is required, the Avatar component serves as a clear, consistent visual indicator of a logged-in state. Positioned prominently in the interface, it provides an intuitive entry point for account-related actions.

## Variants

| Variant | Description | Use Case |
|---------|-------------|----------|
| Photo | User's profile image | When user has uploaded a photo |
| Placeholder | Gray silhouette icon | Default when no image available |
| Initials | Text initials on colored background | Organization/product branding |

## Guidelines

### Do

1. **Show default placeholder when image unavailable**: When an avatar or organization image is unavailable (e.g., due to an error), display a default placeholder

2. **Use brand-compliant colors for initials**: Organization initials should use brand-compliant background colors (WK Blue, Green, Red)

3. **Keep initials short**: Use 2–3 character abbreviations (e.g., "CCH", "TAA", "CT", "UX", "WB")

### Don't

1. **Don't use non-brand colors**: Stick to the WK color palette for initial backgrounds

2. **Don't use long text**: Initials should be brief abbreviations, not full names

## Sizes

| Size | Diameter | Use Case |
|------|----------|----------|
| Small | 32px | Compact layouts, lists |
| Medium | 40px | Standard navigation |
| Large | 48px | Profile pages, prominent display |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `AvatarImage` | Avatar with user photo |
| `AvatarPlaceholder` | Default gray silhouette |
| `AvatarProfile` | Avatar with profile info |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `["AvatarImage", "AvatarPlaceholder", "AvatarProfile"]`
- `get-jumpstart-components-examples` with `["AvatarImage"]`
