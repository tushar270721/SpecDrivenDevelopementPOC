# Hamburger Menu

The Hamburger Menu is a key part of responsive design, complementing the Navbar and Spine on desktop. It combines navigation items and Banner actions into a compact, user-friendly interface for smaller screens, ensuring a consistent experience across devices.

## When to Use

- Screen sizes below 1024px
- Mobile and tablet interfaces
- When navigation needs to collapse to save space

## Guidelines

### Do

1. **Use for screens below 1024px**: The Hamburger Menu saves space and improves navigation on smaller devices, maintaining a clean, user-friendly interface for mobile and tablet users

2. **Position consistently in top-left**: Place the Hamburger Menu where users expect to find it—typically in the top-left corner of the header

3. **Be consistent with icons**: Either all navigation items have icons, or none do

### Don't

1. **Don't mix icons and non-icons**: Avoid a combination of navigation items where some have icons and some don't—maintain visual consistency

2. **Don't mix banner actions inconsistently**: Similar to navigation items, banner actions should either all have icons or all be text-only

3. **Don't use on large screens**: The Hamburger Menu is specifically for responsive/mobile contexts

## Anatomy

| Element | Description |
|---------|-------------|
| Hamburger icon | Three horizontal lines (trigger) |
| Navigation items | Links from the Navbar |
| Banner actions | Actions from the Banner component |
| Dividers | Separate navigation from actions |

## Behavior

| State | Description |
|-------|-------------|
| Closed | Only hamburger icon visible |
| Open | Slide-out panel with navigation and actions |

## Jumpstart Implementation

| Jumpstart Component | Description |
|---------------------|-------------|
| `HamburgerMenu` | Main container |
| `HamburgerMenuItem` | Individual menu item |
| `HamburgerMenuItemWrapper` | Item wrapper |
| `HamburgerMenuItemWrapperFixed` | Fixed position wrapper |
| `HamburgerMenuNavigation` | Navigation container |
| `HamburgerMenuSeparator` | Visual separator |

For code examples and API details, use the Jumpstart MCP tools:
- `get-jumpstart-components-apis` with `['HamburgerMenu', 'HamburgerMenuItem', 'HamburgerMenuItemWrapper', 'HamburgerMenuItemWrapperFixed', 'HamburgerMenuNavigation', 'HamburgerMenuSeparator']`
- `get-jumpstart-components-examples` with `["HamburgerMenu"]`