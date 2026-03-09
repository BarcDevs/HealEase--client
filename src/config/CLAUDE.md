# Config — Environment Variables

CRITICAL: Only `src/config/index.ts` can use `import.meta.env` directly.

## Rules
- All env vars must be prefixed with VITE_
- Access ONLY through config object from `@/config`
- Never use import.meta.env outside `src/config/index.ts`

## Adding Variables
1. Add to .env.local with VITE_ prefix
2. Add to config object in `src/config/index.ts`
3. Use via config.yourVariable throughout app

## Structure
- `src/config/index.ts` — Environment variables
- `src/config/schema/` — Form constraints and config values