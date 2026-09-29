# Design System & Visual Guidelines

## Visual Direction
**European Premium Healthcare Corporate Design**:
- Luxury editorial typography combined with clean, modern medical clarity.
- Natural earthy color palette: deep forest green, warm ivory surfaces, and champagne gold accents.
- Restrained, purposeful micro-interactions with 200–300ms transitions.
- No SaaS clichés (no bloated border radiuses, no startup gradients, no neon glassmorphism).

## Color Tokens
| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--color-forest-950` | `#0D1910` | Deepest brand dark background |
| `--color-forest-900` | `#112117` | Primary dark surface, hero cards |
| `--color-forest-850` | `#14271B` | Medium dark green elements |
| `--color-forest-800` | `#1A3021` | Secondary dark green |
| `--color-forest-700` | `#253B2D` | Dark borders & botanical accents |
| `--color-ivory-50` | `#FBFAF6` | Warm off-white page background |
| `--color-ivory-100` | `#F5F2ED` | Neutral light container backgrounds |
| `--color-ivory-200` | `#EAE6DD` | Soft surface divider |
| `--color-gold-300` | `#DFC89E` | Light champagne gold highlights |
| `--color-gold-400` | `#D7BF95` | Secondary gold accents |
| `--color-gold-500` | `#BEA06B` | Primary metallic brand gold |
| `--color-gold-600` | `#A79163` | Darker gold for light text readability |
| `--color-text-primary` | `#132018` | High contrast body text |
| `--color-text-secondary` | `#5E625A` | Neutral body and subtitle text |

## Typography Hierarchy
- **Editorial / Display Serif**: Cormorant Garamond (`var(--font-serif)`)
  - Hero Headline: `clamp(52px, 6vw, 84px)`, `line-height: 0.98`, `letter-spacing: -0.02em`
  - Section Headings: `32px – 48px`, `line-height: 1.1`
  - Stat Numbers: `48px – 56px`
- **Body & UI Sans-Serif**: Plus Jakarta Sans (`var(--font-sans)`)
  - Eyebrows: `11px – 12px`, `letter-spacing: 0.22em`, uppercase
  - Body Text: `15px – 17px`, `line-height: 1.65`
  - Navigation & Buttons: `13px – 15px`, `font-semibold`

## Interactive UI Elements
- **Solid Gold Button**: Gradient `#D7BF95` to `#BEA06B`, rounded-full, with right-arrow translating `+4px` on hover.
- **Gold Outline Button**: Hairline border `border-gold-400/50`, transparent background, gentle hover fill.
- **Card Action Pill**: Circular button (`ArrowButton`) with subtle scale and icon translation.
