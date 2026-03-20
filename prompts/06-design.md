# Design

The template uses Tailwind CSS v4 (already configured). Follow these guidelines for professional results.

## Design Reference

For professional design quality, fetch and apply the principles from:
https://raw.githubusercontent.com/jdeworks/make-it-look-good/main/CONSULT.md

Read that file and apply its design principles to the user's project.

## Tailwind CSS v4

- Config is CSS-based in Tailwind v4 — customize in `src/style.css` using `@theme {}`:
  ```css
  @import "tailwindcss";
  @theme {
    --color-primary: #3b82f6;
    --color-secondary: #64748b;
  }
  ```
- No `tailwind.config.js` needed in v4

## Mobile-First Design

- Design for mobile screens first, then add breakpoints for larger screens
- Breakpoint prefixes: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- Example: `class="text-sm md:text-base lg:text-lg"`

## Typography

- Use Inter font or system fonts (`font-sans` in Tailwind)
- Limit body text to 2 sizes: base for content, sm for secondary text
- Clear heading hierarchy: one `h1` per page, then `h2`, `h3` as needed
- Line height: use `leading-relaxed` for body text

## Color

- Pick **one primary color** from Tailwind's palette (blue, indigo, emerald, etc.)
- Pick **one neutral palette** (slate, gray, zinc)
- Use 3-4 shades of each: light for backgrounds, medium for borders, dark for text
- Example palette: `bg-blue-600` primary, `bg-slate-50` background, `text-slate-900` text

## Spacing

- Use Tailwind's spacing scale consistently
- Common pattern: `p-4` for cards, `p-6` for sections, `p-8` for page margins
- Don't mix arbitrary values — stick to the scale (4, 6, 8, 12, 16)
- Use `gap-4` or `gap-6` for flex/grid layouts

## Accessibility

- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Proper heading order: `h1` > `h2` > `h3` (never skip levels)
- All images need `alt` text
- Color contrast: minimum 4.5:1 ratio for text
- Interactive elements need focus styles (Tailwind's `focus:ring-2`)
- Buttons need descriptive text (not just icons)

## Layout Patterns

- **Container:** `max-w-7xl mx-auto px-4`
- **Card:** `rounded-lg border p-6 shadow-sm`
- **Section:** `py-16` or `py-24` for vertical rhythm
- **Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

## Images

- Use `loading="lazy"` on images below the fold
- Add `width` and `height` attributes to prevent layout shift
- For responsive images: `class="w-full h-auto object-cover"`
- Optimize images before adding: compress JPG/PNG, use WebP where possible
- For galleries: use CSS grid with `aspect-ratio` for consistent sizing

## Contact Forms on Static Sites

Static sites can't process forms server-side. Use one of these:
- **Formspree** (formspree.io) — free tier, add `action="https://formspree.io/f/YOUR_ID"` to your form
- **mailto: link** — simplest option: `<a href="mailto:you@example.com">Email me</a>`
- **Netlify Forms** — if hosting on Netlify, add `netlify` attribute to your form tag
