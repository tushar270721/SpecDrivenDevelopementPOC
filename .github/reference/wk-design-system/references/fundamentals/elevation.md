# Wolters Kluwer Elevation System

Elevation through shadows creates groupings and associations between content, as well as hierarchy and focus through depth.

## Elevation Levels

There are four levels of elevation, each with a specific purpose:

| Level | Name | Purpose |
|-------|------|---------|
| 0 | **Flat** | Default/resting state for components on the stage |
| 1 | **Raised** | Alternative resting state, or to highlight a specific component |
| 2 | **Overlay** | Components displayed on top of the UI (modals, dialogs, dropdowns) |
| 3 | **Pop-out** | Highest elevation, makes a component stand out from the rest of the UI |

---

## Elevation Specifications

### Flat (Level 0)
- **Shadow**: None
- **Use for**: Default component state, resting UI elements
- **Example**: Cards, panels, form fields in default state

```css
.elevation-flat {
  box-shadow: none;
}
```

### Raised (Level 1)
- **Shadow**: Subtle shadow to lift component slightly
- **Use for**: 
  - Alternative resting state
  - Highlighting a specific component on the stage
  - Pricing cards, featured items
- **Example**: Selected card, featured pricing tier

```css
.elevation-raised {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 
              0 1px 2px rgba(0, 0, 0, 0.08);
}
```

### Overlay (Level 2)
- **Shadow**: Medium shadow for floating components
- **Use for**: Components displayed on top of the UI
- **Example**: Modals, dialogs, dropdown menus, popovers

```css
.elevation-overlay {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 
              0 2px 4px rgba(0, 0, 0, 0.06);
}
```

### Pop-out (Level 3)
- **Shadow**: Prominent shadow for maximum emphasis
- **Use for**: Making a component stand out from the rest of the UI
- **Example**: Active/focused elements, tooltips, notifications that need attention

```css
.elevation-pop-out {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 
              0 4px 6px rgba(0, 0, 0, 0.05);
}
```

---

## The Stage

The **stage** is the surface of the application on which content and components live.

### Stage Background Colors
| Color | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Primary stage background |
| Gray 25 | `#F6F6F6` | Secondary stage background |

**Important**: Avoid using colors other than white (`#FFFFFF`) and gray-25 (`#F6F6F6`) for the stage background.

---

## Usage Guidelines

### Do ✓

1. **Use shadows to respond to user input or system events**
   - Hover states, focus states, active states
   - Opening menus, dialogs, modals

2. **Follow elevation logic when adding shadows**
   - Keep the design consistent and structured
   - Higher elevation = more prominent shadow

3. **Use flat for default/resting state**
   - Components on the stage in their normal state

4. **Use raised to highlight specific components**
   - Featured items, selected cards
   - Alternative resting state when differentiation is needed

5. **Use overlay for floating components**
   - Modals, dialogs, dropdown menus
   - Any component that appears on top of the UI

6. **Use pop-out for maximum emphasis**
   - Components that need to stand out from everything else
   - Active states requiring high visibility

### Don't ✗

1. **Don't use shadows for aesthetic reasons only**
   - Shadows should have functional purpose
   - They respond to user input or system events

2. **Don't mix elevation levels inconsistently**
   - Follow the logical hierarchy
   - A dropdown (overlay) shouldn't have less shadow than a card (raised)

3. **Don't apply shadows without purpose**
   - Every shadow should communicate something
   - State change, hierarchy, or interaction feedback

---

## CSS Variables

```css
:root {
  /* Elevation Shadows */
  --wk-elevation-flat: none;
  --wk-elevation-raised: 0 1px 3px rgba(0, 0, 0, 0.12), 
                         0 1px 2px rgba(0, 0, 0, 0.08);
  --wk-elevation-overlay: 0 4px 6px rgba(0, 0, 0, 0.1), 
                          0 2px 4px rgba(0, 0, 0, 0.06);
  --wk-elevation-pop-out: 0 10px 15px rgba(0, 0, 0, 0.1), 
                          0 4px 6px rgba(0, 0, 0, 0.05);
  
  /* Stage Backgrounds */
  --wk-stage-primary: #FFFFFF;
  --wk-stage-secondary: #F6F6F6;
}
```

## Tailwind CSS Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'wk-flat': 'none',
        'wk-raised': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)',
        'wk-overlay': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'wk-pop-out': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
};
```

---

## Interactive States & Elevation

| Component State | Starting Elevation | On Interaction |
|-----------------|-------------------|----------------|
| Card (default) | Flat | Raised (on hover) |
| Card (featured) | Raised | Pop-out (on hover) |
| Button | Flat | Raised (on hover) |
| Dropdown trigger | Flat | — |
| Dropdown menu | — | Overlay (when open) |
| Modal | — | Overlay (when open) |
| Tooltip | — | Pop-out (when visible) |
