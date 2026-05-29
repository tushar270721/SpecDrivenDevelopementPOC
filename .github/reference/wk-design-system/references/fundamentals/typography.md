# Wolters Kluwer Typography

Typography guidelines ensure content is highly legible, performs well, and provides a frictionless experience across products.

## Primary Font: Fira Sans

**Fira Sans** is the Wolters Kluwer primary font. It represents the DNA of the brand—highly structured, intelligible, and friendly to the eye.

Use Fira Sans for **all** text elements:
- Titles and headings
- Body copy
- Navigation
- Form elements
- Buttons
- Labels

---

## Font Weights

Only use these four weights:

| Weight | Value | Use |
|--------|-------|-----|
| Light | 300 | Large decorative text, sparingly |
| Regular | 400 | Body text, default |
| Medium | 500 | Subheadings, emphasis |
| Bold | 700 | Headings, strong emphasis |

```css
font-weight: 300; /* Light */
font-weight: 400; /* Regular */
font-weight: 500; /* Medium */
font-weight: 700; /* Bold */
```

---

## Type Scale

The type scale uses **16px (1rem) as the base**. Steps increment by 2px, creating a non-linear progression that provides smaller intervals for smaller type and larger intervals for large type.

### Heading Scale

Line-height formula: `font-size × 1.25`

| Step | Font Size (px) | Font Size (rem) | Line-Height |
|------|----------------|-----------------|-------------|
| 1 | 12px | 0.75rem | 15px |
| 2 | 14px | 0.875rem | 17.5px |
| 3 | 16px | 1rem | 20px |
| 4 | 18px | 1.125rem | 22.5px |
| 5 | 20px | 1.25rem | 25px |
| 6 | 22px | 1.375rem | 27.5px |
| 7 | 24px | 1.5rem | 30px |
| 8 | 26px | 1.625rem | 32.5px |
| 9 | 28px | 1.75rem | 35px |
| 10 | 32px | 2rem | 40px |
| 11 | 40px | 2.5rem | 50px |

### Body Text Scale

Line-height options: `font-size × 1.125` / `1.25` / `1.5`

| Step | Font Size (px) | Line-Height (1.125) | Line-Height (1.25) | Line-Height (1.5) |
|------|----------------|---------------------|--------------------|--------------------|
| 1 | 12px | 13.5px | 15px | 18px |
| 2 | 14px | 15.75px | 17.5px | 21px |
| 3 | 16px | 18px | 20px | 24px |
| 4 | 18px | 20.25px | 22.5px | 27px |
| 5 | 20px | 22.5px | 25px | 30px |

**When to use each line-height:**
- **1.125** — Compact UI, space-constrained areas
- **1.25** — Default for most body text
- **1.5** — Long-form content, improved readability

---

## Recommended Type Styles

### Headings

| Element | Size | Weight | Line-Height |
|---------|------|--------|-------------|
| h1 | 32px (Step 10) | Bold (700) | 40px |
| h2 | 28px (Step 9) | Bold (700) | 35px |
| h3 | 24px (Step 7) | Bold (700) | 30px |
| h4 | 20px (Step 5) | Medium (500) | 25px |
| h5 | 18px (Step 4) | Medium (500) | 22.5px |
| h6 | 16px (Step 3) | Medium (500) | 20px |

### Body Text

| Style | Size | Weight | Line-Height |
|-------|------|--------|-------------|
| Body Large | 18px | Regular (400) | 27px (1.5) |
| Body Default | 16px | Regular (400) | 24px (1.5) |
| Body Small | 14px | Regular (400) | 21px (1.5) |
| Caption | 12px | Regular (400) | 18px (1.5) |

### UI Elements

| Element | Size | Weight |
|---------|------|--------|
| Button | 14-16px | Medium (500) |
| Label | 14px | Medium (500) |
| Input text | 16px | Regular (400) |
| Placeholder | 16px | Regular (400) |
| Link | Inherit | Regular (400) |

---

## Usage Guidelines

### Do ✓

1. **Use Fira Sans exclusively**
   - All titles, copy, navigation, form elements, and buttons

2. **Use only the four approved weights**
   - Light (300), Regular (400), Medium (500), Bold (700)

3. **Follow the type scale**
   - Use the defined steps for consistency
   - Base calculations on 16px (1rem)

4. **Apply correct line-height formulas**
   - Headings: font-size × 1.25
   - Body text: font-size × 1.125 / 1.25 / 1.5

5. **Create clear hierarchy**
   - Use size and weight to guide users through content

### Don't ✗

1. **Don't end headers or labels with a period**
   - Only use periods for sentences, paragraphs, and copy
   - ❌ "Expert solutions for leading professionals."
   - ✅ "Expert solutions for leading professionals"

2. **Don't use ALL CAPS**
   - Exception: Eyebrow heading style only
   - ❌ "EXPERT SOLUTIONS FOR LEADING PROFESSIONALS"
   - ✅ "Expert solutions for leading professionals"

3. **Don't use other fonts**
   - Fira Sans only

4. **Don't use weights outside 300, 400, 500, 700**
   - No Extra Light, Semi-Bold, Extra Bold, etc.

---

## CSS Variables

```css
:root {
  /* Font Family */
  --wk-font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Font Weights */
  --wk-font-weight-light: 300;
  --wk-font-weight-regular: 400;
  --wk-font-weight-medium: 500;
  --wk-font-weight-bold: 700;
  
  /* Font Sizes */
  --wk-font-size-xs: 0.75rem;   /* 12px */
  --wk-font-size-sm: 0.875rem;  /* 14px */
  --wk-font-size-base: 1rem;    /* 16px */
  --wk-font-size-lg: 1.125rem;  /* 18px */
  --wk-font-size-xl: 1.25rem;   /* 20px */
  --wk-font-size-2xl: 1.375rem; /* 22px */
  --wk-font-size-3xl: 1.5rem;   /* 24px */
  --wk-font-size-4xl: 1.625rem; /* 26px */
  --wk-font-size-5xl: 1.75rem;  /* 28px */
  --wk-font-size-6xl: 2rem;     /* 32px */
  --wk-font-size-7xl: 2.5rem;   /* 40px */
  
  /* Line Heights */
  --wk-line-height-tight: 1.125;
  --wk-line-height-normal: 1.25;
  --wk-line-height-relaxed: 1.5;
}
```

## Tailwind CSS Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Fira Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      bold: '700',
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1.25' }],     // 12px
      'sm': ['0.875rem', { lineHeight: '1.25' }],    // 14px
      'base': ['1rem', { lineHeight: '1.5' }],       // 16px
      'lg': ['1.125rem', { lineHeight: '1.5' }],     // 18px
      'xl': ['1.25rem', { lineHeight: '1.25' }],     // 20px
      '2xl': ['1.375rem', { lineHeight: '1.25' }],   // 22px
      '3xl': ['1.5rem', { lineHeight: '1.25' }],     // 24px
      '4xl': ['1.625rem', { lineHeight: '1.25' }],   // 26px
      '5xl': ['1.75rem', { lineHeight: '1.25' }],    // 28px
      '6xl': ['2rem', { lineHeight: '1.25' }],       // 32px
      '7xl': ['2.5rem', { lineHeight: '1.25' }],     // 40px
    },
    lineHeight: {
      'tight': '1.125',
      'normal': '1.25',
      'relaxed': '1.5',
    },
  },
};
```

---

## Loading Fira Sans

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

```css
/* CSS Import */
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap');

body {
  font-family: var(--wk-font-family);
  font-size: var(--wk-font-size-base);
  font-weight: var(--wk-font-weight-regular);
  line-height: var(--wk-line-height-relaxed);
  color: #000000;
}
```
