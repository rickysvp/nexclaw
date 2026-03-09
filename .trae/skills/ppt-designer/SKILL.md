---
name: "ppt-designer"
description: "Creates professional HTML-based presentation slides with modern design. Invoke when user wants to create, design, or redesign presentation slides, PPT, or deck."
---

# PPT Designer Skill

This skill creates professional, modern HTML-based presentation slides that can be viewed in browser or exported to PDF.

## When to Invoke

- User wants to create a new presentation
- User wants to redesign existing PPT
- User asks for "PPT design", "presentation design", "slides design"
- User mentions "做PPT", "设计PPT", "改PPT样式"

## Design System

### Color Palettes

#### 1. Medical/Beauty (医美)
- Primary: `#E8B4B8` (Rose Pink)
- Secondary: `#F5E6E0` (Champagne)
- Accent: `#D4A574` (Warm Gold)
- Background: `#FAF7F5` (Off White)
- Text: `#4A4A4A` (Dark Gray)

#### 2. Tech/Developer (科技)
- Primary: `#22d3ee` (Cyan)
- Secondary: `#0891b2` (Dark Cyan)
- Accent: `#06b6d4` (Light Cyan)
- Background: `#0a0a0f` (Dark)
- Text: `#ffffff` (White)

#### 3. Business/Professional (商务)
- Primary: `#2563eb` (Blue)
- Secondary: `#1e40af` (Dark Blue)
- Accent: `#3b82f6` (Light Blue)
- Background: `#ffffff` (White)
- Text: `#1f2937` (Gray 800)

### Typography

- **Headings**: system-ui, -apple-system, sans-serif
- **Body**: system-ui, -apple-system, sans-serif
- **Code**: ui-monospace, SFMono-Regular, monospace

### Slide Types

1. **Cover Slide**: Title, subtitle, date, logo
2. **Table of Contents**: Section overview with icons
3. **Content Slide**: Title + bullet points + image/chart
4. **Data Slide**: Large numbers, charts, statistics
5. **Comparison Slide**: Before/after, pros/cons
6. **Quote Slide**: Testimonial or key message
7. **Closing Slide**: CTA, contact info, QR code

## Output Format

Create a single HTML file with:
- Reveal.js or custom slide system
- Full-screen slides
- Keyboard navigation (arrow keys)
- Professional animations
- Print-friendly for PDF export

## Example Usage

When user says "帮我做一个医美行业的PPT":

1. Ask for: topic, number of slides, key content
2. Choose Medical/Beauty color palette
3. Create HTML presentation with:
   - Cover slide
   - Table of contents
   - Content slides
   - Data visualization slides
   - Closing slide
4. Save to `public/presentation.html`
5. Provide viewing instructions
