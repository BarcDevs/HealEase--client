# Components — Code Conventions

Keep components small (~40 lines), one per file. Use shadcn/ui components when available.

## Files & Naming
- PascalCase filenames (Button.tsx, PostCard.tsx)
- One component per file
- Export at bottom, never inline

## JSX Style
- Nested content ALWAYS on new line:
- Props (2+): Each on new line
- Single quotes for all props: `prop={'value'}`
- Fragment children don't work with Recharts — keep component logic separate

## Imports
- Don't use `React.*` types — import directly from react
- Order: react → third-party → @/ → relative → styles

## State & Props
- Avoid prop drilling — use context, Redux, or composition
- Use hooks at top of component
- Extract reusable logic and helper functions to separate files

## shadcn/ui
- Always use shadcn/ui components when available
- Components in `src/components/ui/`
- Use Form, FormField, FormItem for form inputs
- `src/components/ui` is out of bound for edits, never edit shadcn/ui components directly