# API — Conventions

Centralized Axios instance with CSRF interceptors auto-injected for mutations.

## Core Rules
- ALWAYS use api instance from @/api
- Never create new axios instances or use fetch directly
- One module per domain (auth.ts, forum.ts, profile.ts, checkIn.ts)
- Export functions, not raw api calls

## CSRF
- Auto-injected by axios interceptor for POST, PUT, PATCH, DELETE
- No manual handling needed in components