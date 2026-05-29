# Wolters Kluwer Color Palette Reference

Complete color specifications for all WK brand colors with tints and shades.

## Color Scale System

Colors are organized on a scale from 100 (lightest) to 750 (darkest), with 500 being the primary brand color. Some palettes include additional stops (25, 50, 175, 375, 575, 625, 675, 825).

---

## Red Palette

Used for errors, alerts, and important callouts.

| Scale | Hex | RGB | Usage |
|-------|-----|-----|-------|
| 100 | `#FAD2D5` | rgb(250, 210, 213) | Light backgrounds, subtle highlights |
| 175 | `#F6B1B6` | rgb(246, 177, 182) | Hover states on light red |
| 250 | `#F29097` | rgb(242, 144, 151) | Warning accents |
| 375 | `#EC5862` | rgb(236, 88, 98) | Secondary alerts |
| **500** | `#E5202E` | rgb(229, 32, 46) | **Primary red - errors, critical alerts** |
| 625 | `#AC1822` | rgb(172, 24, 34) | Hover/pressed states |
| 750 | `#721017` | rgb(114, 16, 23) | Dark mode, high contrast |

---

## Green Palette

Used for success states, growth, and positive actions.

| Scale | Hex | RGB | Usage |
|-------|-----|-----|-------|
| 100 | `#E7F2D2` | rgb(231, 242, 210) | Success backgrounds |
| 175 | `#D4E8B1` | rgb(212, 232, 177) | Light success accents |
| 250 | `#C2DE90` | rgb(194, 222, 144) | Secondary success |
| 375 | `#A4CD58` | rgb(164, 205, 88) | Charts, data viz |
| **500** | `#85BC20` | rgb(133, 188, 32) | **Primary green - success states** |
| 625 | `#648D18` | rgb(100, 141, 24) | Hover/pressed states |
| 750 | `#425E10` | rgb(66, 94, 16) | Dark mode, high contrast |

---

## Blue Palette

Primary brand color. Used for navigation, links, information, and interactive elements.

| Scale | Hex | RGB | Usage |
|-------|-----|-----|-------|
| 25 | `#F2F8FC` | rgb(242, 248, 252) | Subtle backgrounds |
| 50 | `#E6F2F9` | rgb(230, 242, 249) | Light info backgrounds |
| 100 | `#CCE4F3` | rgb(204, 228, 243) | Selected state backgrounds |
| 175 | `#A6D1EA` | rgb(166, 209, 234) | Light accents |
| 250 | `#80BDE1` | rgb(128, 189, 225) | Secondary blue |
| 375 | `#409BD2` | rgb(64, 155, 210) | Charts, data viz |
| **500** | `#007AC3` | rgb(0, 122, 195) | **Primary blue - links, navigation, brand** |
| 625 | `#005B92` | rgb(0, 91, 146) | Hover/pressed states |
| 750 | `#003D61` | rgb(0, 61, 97) | Dark mode, high contrast |

---

## Gray Palette

Used for text, borders, backgrounds, and UI structure.

| Scale | Hex | RGB | Usage |
|-------|-----|-----|-------|
| 25 | `#F6F6F6` | rgb(246, 246, 246) | Secondary backgrounds, cards |
| 50 | `#EDEDED` | rgb(237, 237, 237) | Tertiary backgrounds |
| 100 | `#DADADA` | rgb(218, 218, 218) | **Decorative lines, borders** |
| 175 | `#BFBFBF` | rgb(191, 191, 191) | Disabled states |
| 250 | `#A3A3A3` | rgb(163, 163, 163) | Placeholder text |
| 375 | `#757575` | rgb(117, 117, 117) | Secondary text |
| 500 | `#474747` | rgb(71, 71, 71) | Primary text (alternative) |
| 575 | `#3C3C3C` | rgb(60, 60, 60) | Dark UI elements |
| 625 | `#353535` | rgb(53, 53, 53) | Dark backgrounds |
| 675 | `#2E2E2E` | rgb(46, 46, 46) | Darker backgrounds |
| 750 | `#232323` | rgb(35, 35, 35) | Very dark backgrounds |
| 825 | `#191919` | rgb(25, 25, 25) | Near-black backgrounds |

---

## Monochrome

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Black | `#000000` | rgb(0, 0, 0) | Primary text, icons |
| White | `#FFFFFF` | rgb(255, 255, 255) | Primary backgrounds, text on dark |

---

## Semantic Color Mapping

### Status Colors
| Status | Color | Hex |
|--------|-------|-----|
| Error | Red 500 | `#E5202E` |
| Warning | Red 250 (or orange if available) | `#F29097` |
| Success | Green 500 | `#85BC20` |
| Info | Blue 500 | `#007AC3` |

### UI Element Colors
| Element | Color | Hex |
|---------|-------|-----|
| Primary background | White | `#FFFFFF` |
| Secondary background | Gray 25 | `#F6F6F6` |
| Borders/dividers | Gray 100 | `#DADADA` |
| Primary text | Black | `#000000` |
| Secondary text | Gray 375 | `#757575` |
| Links | Blue 500 | `#007AC3` |
| Link hover | Blue 625 | `#005B92` |

---

## Contrast Ratios (WCAG 2.2 AA)

### Text on White Background (#FFFFFF)
| Text Color | Hex | Ratio | Pass AA? |
|------------|-----|-------|----------|
| Black | `#000000` | 21:1 | ✅ Yes |
| Gray 500 | `#474747` | 9.1:1 | ✅ Yes |
| Gray 375 | `#757575` | 4.6:1 | ✅ Yes (regular text) |
| Blue 500 | `#007AC3` | 4.5:1 | ✅ Yes (borderline) |
| Green 500 | `#85BC20` | 3.0:1 | ⚠️ Large text only |
| Red 500 | `#E5202E` | 4.0:1 | ⚠️ Large text only |

### Text on Blue Background (#007AC3)
| Text Color | Hex | Ratio | Pass AA? |
|------------|-----|-------|----------|
| White | `#FFFFFF` | 4.5:1 | ✅ Yes |
| Black | `#000000` | 4.7:1 | ✅ Yes |

### Text on Green Background (#85BC20)
| Text Color | Hex | Ratio | Pass AA? |
|------------|-----|-------|----------|
| White | `#FFFFFF` | 3.0:1 | ⚠️ Large text only |
| Black | `#000000` | 7.0:1 | ✅ Yes |

### Text on Red Background (#E5202E)
| Text Color | Hex | Ratio | Pass AA? |
|------------|-----|-------|----------|
| White | `#FFFFFF` | 4.0:1 | ⚠️ Large text only |
| Black | `#000000` | 5.3:1 | ✅ Yes |

**Recommendation**: Use white text on WK Blue. For Red and Green backgrounds, use larger text (18px+) or choose darker/lighter variants for better contrast.

---

## Chart/Data Visualization Palette

When creating charts, use colors in this order for multiple data series:

1. Blue 500 `#007AC3` (primary)
2. Green 500 `#85BC20` (secondary)
3. Blue 175 `#A6D1EA` (tertiary)
4. Green 250 `#C2DE90` (quaternary)
5. Red 500 `#E5202E` (alerts/negative values)
6. Gray 375 `#757575` (neutral/comparison)
