# AI Website Cloner Skill

Clone any website with AI coding agents. Extract design tokens, component specs, and rebuild as a pixel-perfect clone.

## Usage

```
/clone-website <target-url>
```

## Workflow

### Phase 1: Reconnaissance
- Screenshot capture
- Design token extraction (colors, typography, spacing)
- Interaction analysis (scroll, hover, click)
- Responsive breakpoint detection
- Asset inventory

### Phase 2: Foundation
- Setup project structure
- Configure fonts and colors
- Download all assets (images, icons, videos)
- Setup global styles

### Phase 3: Component Specs
- Write detailed component specifications
- Document computed CSS values
- Define interaction models
- Map responsive behaviors

### Phase 4: Parallel Build
- Build each section/component independently
- Extract and recreate SVG icons
- Implement animations and transitions

### Phase 5: Assembly & QA
- Merge all components
- Wire up navigation and interactions
- Visual diff comparison
- Performance optimization

## Design Token Extraction

### Colors
- Primary palette
- Secondary/Accent colors
- Background colors
- Text colors
- Border colors

### Typography
- Font families
- Font sizes (heading hierarchy)
- Font weights
- Line heights
- Letter spacing

### Spacing
- Section padding
- Component gaps
- Grid systems
- Container max-widths

### Effects
- Shadows
- Border radius
- Transitions
- Animations

## Component Analysis

For each component, document:
- HTML structure
- CSS properties (exact values)
- Responsive behavior
- Hover/active states
- Animation specs
- Content structure

## Output Structure

```
docs/research/
  ├── design-tokens.md
  ├── component-specs/
  │   ├── hero.md
  │   ├── features.md
  │   └── ...
  └── assets/
      ├── images/
      └── icons/
```

## Commands

- `/clone-website <url>` - Start cloning process
- `/extract-tokens` - Extract design tokens only
- `/build-component <name>` - Build specific component
- `/visual-diff` - Compare with original
