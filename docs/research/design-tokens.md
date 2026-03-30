# CoinFello Design Tokens

## Color Palette

### Primary Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#FFFFFF` | Main background |
| `--color-bg-secondary` | `#F5F5F5` | Section backgrounds (gray-50) |
| `--color-bg-dark` | `#111111` | Dark sections |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-text-primary` | `#111111` | Headlines, primary text |
| `--color-text-secondary` | `#666666` | Body text, descriptions |
| `--color-text-muted` | `#999999` | Captions, labels |
| `--color-text-inverse` | `#FFFFFF` | Text on dark backgrounds |

### Accent Colors
| Token | Value | Usage |
|-------|-------|-------|
| `--color-accent` | `#111111` | Buttons, links, icons |
| `--color-accent-hover` | `#333333` | Hover states |
| `--color-border` | `#E5E5E5` | Borders, dividers |

## Typography

### Font Family
- **Primary**: System UI, -apple-system, sans-serif
- **Monospace**: SF Mono, Monaco, monospace

### Font Sizes
| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| H1 | 48-64px | 700 | 1.1 | Hero headline |
| H2 | 32-40px | 600 | 1.2 | Section titles |
| H3 | 20-24px | 600 | 1.3 | Feature titles |
| Body | 16-18px | 400 | 1.6 | Paragraphs |
| Caption | 14px | 400 | 1.5 | Labels, badges |
| Small | 12-13px | 400 | 1.4 | Fine print |

## Spacing

### Section Spacing
| Size | Value | Usage |
|------|-------|-------|
| Section Y | 80-120px | Vertical padding |
| Section X | 24-48px | Horizontal padding |

### Component Spacing
| Size | Value | Usage |
|------|-------|-------|
| Gap Large | 48-64px | Between major elements |
| Gap Medium | 24-32px | Between related elements |
| Gap Small | 12-16px | Between inline elements |
| Gap XSmall | 8px | Tight spacing |

### Container
- Max width: 1200px
- Center aligned
- Responsive padding

## Effects

### Shadows
- None (flat design)

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12-16px | Cards, containers |
| `--radius-full` | 9999px | Pills, badges |

### Transitions
| Property | Duration | Easing |
|----------|----------|--------|
| Color | 200ms | ease |
| Transform | 300ms | ease-out |
| Opacity | 200ms | ease |

## Layout

### Grid
- 12-column grid system
- Gap: 24-48px
- Responsive breakpoints

### Breakpoints
| Name | Width | Usage |
|------|-------|-------|
| Mobile | < 640px | Single column |
| Tablet | 640-1024px | 2 columns |
| Desktop | > 1024px | Full layout |

## Components

### Buttons
- Background: `#111111`
- Text: `#FFFFFF`
- Padding: 12px 24px
- Border radius: 8px
- Font weight: 500

### Trust Badges
- Dot: 6px circle, bg: `#111111`
- Text: 14px, color: `#666666`
- Gap: 8px

### Cards
- Background: transparent or `#FFFFFF`
- Border: 1px solid `#E5E5E5` (optional)
- Border radius: 12-16px
- Padding: 24-32px

### Code Blocks
- Background: `#111111`
- Text: `#FFFFFF`
- Border radius: 12px
- Font: monospace
- Padding: 16px
