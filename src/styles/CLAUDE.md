# Styles — CSS & Tailwind

TailwindCSS 4 for styling with centralized utility classes.

## Rules
- Use className={'...'} with single quotes
- Tailwind utilities for all styling
- Centralize complex styles in src/lib/styles.ts
- Dark mode support via TailwindCSS
- Avoid inline styles

## Tailwind
- Responsive prefixes (sm:, md:, lg:, etc.)
- Dark mode: dark:
- Group variants: group-hover:
- Dynamic classes via clsx or condition checks

## Custom Styles
- `src/lib/styles.ts` — Reusable utility functions
- Named exports for style compositions
- Export as functions or objects

## Global Styles
- `src/styles/index.css` — Global resets and imports
- Tailwind directives only
- No custom selectors unless necessary