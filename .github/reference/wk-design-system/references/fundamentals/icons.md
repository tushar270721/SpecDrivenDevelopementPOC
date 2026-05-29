# Wolters Kluwer Icons

Icons serve as visual representations of common actions, providing visual context and enhancing usability.

## Icon Philosophy

Icons should be:
- **Simple** — Clean, uncluttered design
- **Bold** — Grab attention and leave a lasting impression
- **Meaningful** — Consistently convey specific actions or messages
- **Efficient** — Save screen real estate, push back UI to foreground content

## Icon Source

Our icon set is based on **Lightly Icons** by Timothy Miller, adapted to meet WK-specific needs with custom icons following the 'Helvetica Neue' aesthetic.

**Icon variants**:
- Open (outline) icons
- Filled icons

Note: Not all open icons have filled variants, and vice versa.

---

## Icon Sizes

Icons are limited to **two sizes only** for consistency:

| Size | Value | Use |
|------|-------|-----|
| Default | `1.5rem` (24px) | Standard icons |
| Small | `1rem` (16px) | Smaller/compact contexts |

```css
.icon-default {
  width: 1.5rem;  /* 24px */
  height: 1.5rem; /* 24px */
}

.icon-small {
  width: 1rem;  /* 16px */
  height: 1rem; /* 16px */
}
```

**Important**: Do not use other icon sizes. Maintain consistency by limiting to these two options.

---

## Icon Spacing

### Icon + Label

Use a minimum of **0.5rem (8px)** margin between an icon and its label.

```css
.icon-with-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem; /* 8px minimum */
}
```

---

## Icon Colors

Icons follow the same color palette as other UI elements:

| Context | Color | Hex |
|---------|-------|-----|
| Default | Black | `#000000` |
| Primary action | WK Blue | `#007AC3` |
| Success | WK Green | `#85BC20` |
| Error/Destructive | WK Red | `#E5202E` |
| Disabled | Gray 250 | `#A3A3A3` |
| On dark background | White | `#FFFFFF` |

---

## Accessibility Guidelines

### Contrast Requirements

Check for sufficient contrast (WCAG 2.1 AA guidelines) between icon and background:

| Element | Minimum Ratio |
|---------|---------------|
| Icons (functional) | 3:1 against background |
| Icons with text | Follow text contrast rules |

### Tooltips for Standalone Icons

**Include a tooltip on hover** for standalone icons, unless the icon is supported by a label description.

```html
<!-- Standalone icon - needs tooltip -->
<button aria-label="More information" title="More information">
  <svg class="icon">...</svg>
</button>

<!-- Icon with label - no tooltip needed -->
<button>
  <svg class="icon">...</svg>
  <span>Label</span>
</button>
```

---

## Usage Guidelines

### Do ✓

1. **Use consistent icon meanings**
   - Same icon = same action throughout the application
   - Document icon meanings for team consistency

2. **Use the two standard sizes only**
   - 24px (default) or 16px (small)
   - No custom sizes

3. **Maintain proper spacing**
   - Minimum 8px gap between icon and label

4. **Ensure accessibility**
   - Check contrast ratios
   - Add tooltips for standalone icons
   - Include aria-labels for interactive icons

5. **Choose appropriate variant**
   - Use open (outline) or filled consistently within a context
   - Filled icons can indicate active/selected state

### Don't ✗

1. **Don't use inconsistent icon sizes**
   - Stick to 24px and 16px only

2. **Don't use icons without meaning**
   - Every icon should convey a clear action or message

3. **Don't mix icon styles inconsistently**
   - Be deliberate about open vs. filled usage

4. **Don't skip tooltips on standalone icons**
   - Users need context for unlabeled icons

---

## CSS Variables

```css
:root {
  /* Icon Sizes */
  --wk-icon-size-default: 1.5rem;  /* 24px */
  --wk-icon-size-small: 1rem;      /* 16px */
  
  /* Icon Spacing */
  --wk-icon-label-gap: 0.5rem;     /* 8px */
  
  /* Icon Colors */
  --wk-icon-default: #000000;
  --wk-icon-primary: #007AC3;
  --wk-icon-success: #85BC20;
  --wk-icon-error: #E5202E;
  --wk-icon-disabled: #A3A3A3;
  --wk-icon-inverse: #FFFFFF;
}
```

## Tailwind CSS Utilities

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      width: {
        'icon': '1.5rem',
        'icon-sm': '1rem',
      },
      height: {
        'icon': '1.5rem',
        'icon-sm': '1rem',
      },
      gap: {
        'icon': '0.5rem',
      },
    },
  },
};
```

---

## Icon Button Pattern

```html
<!-- Icon-only button -->
<button 
  class="icon-button" 
  aria-label="Delete item"
  title="Delete item"
>
  <svg class="icon icon-default">...</svg>
</button>

<!-- Icon + text button -->
<button class="button-with-icon">
  <svg class="icon icon-small">...</svg>
  <span>Label</span>
</button>
```

```css
.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
}

.button-with-icon {
  display: inline-flex;
  align-items: center;
  gap: var(--wk-icon-label-gap);
}

.icon-default {
  width: var(--wk-icon-size-default);
  height: var(--wk-icon-size-default);
}

.icon-small {
  width: var(--wk-icon-size-small);
  height: var(--wk-icon-size-small);
}
```
