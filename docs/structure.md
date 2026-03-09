# Project Structure

```
src/
├── api/          # API modules (auth.ts, forum.ts, profile.ts, checkIn.ts)
├── components/   # React components (ui, shared, auth, forum, check-in, layout)
├── pages/        # Page components (check-in, forum, layouts)
├── routes/       # TanStack Router file-based routes
├── hooks/        # Custom React hooks
├── store/        # Redux Toolkit slices (authSlice, tokenSlice)
├── types/        # TypeScript type definitions (forum, profile, checkIn)
├── validations/  # Zod schemas (forms/)
├── services/     # Business logic (checkIn/)
├── utils/        # Utilities (checkIn, redirect, router, sentry)
├── lib/          # Library code (checkIn charts, styles)
├── constants/    # App constants (endpoints, defaults, plainTexts)
├── config/       # Environment & form config (index.ts, schema/)
├── context/      # React Context
├── handlers/     # Route handlers (loaders/, actions/)
├── styles/       # Global CSS (index.css)
├── app.tsx       # App entry point
└── main.tsx      # React DOM root
```

Each directory handles a specific concern. See individual CLAUDE.md files in each directory for detailed conventions.