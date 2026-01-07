# Claude Code Preferences

## Project Overview
HealEase - A Vite-powered React health and wellness forum application with user authentication and community features.

## Code Style & Conventions

### Core Principles
- **ALWAYS FOLLOW INDUSTRY STANDARDS**
- **ALWAYS USE SOLID PRINCIPLES** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Clean Code**: Write readable, maintainable code that follows best practices

### TypeScript & JavaScript
- **Quotes**: Use single quotes (`'`) for all strings, imports, and JSX props
- **JSX Props**: Always use `prop={'value'}` instead of `prop="value"`
- **Semicolons**: Not used (except where required)
- **Indentation**: 4 spaces
- **File naming**:
  - **Component files**: PascalCase (e.g., `SignupForm.tsx`, `PostCard.tsx`)
  - **Non-component files**: camelCase (e.g., `emailInputSchema.ts`, `protectedRoutes.ts`)
  - **Folders**: camelCase
- **Functions**: ALWAYS use arrow functions, never regular function declarations
- **Types vs Interfaces**: Prefer `type` over `interface` unless an interface is specifically needed (e.g., for declaration merging)
- **React Types**: Don't use explicit types as `React.*`. Import types directly from React
  ```typescript
  // ❌ Wrong
  const Component: React.FC = () => {}

  // ✅ Correct
  import { FC } from 'react'
  const Component: FC = () => {}
  ```

### React & Vite
- **Framework**: Vite 7 with React 19
- **Build tool**: Vite
- **Component style**: Functional components with hooks and context
- **Component size**: Keep components small, ~40 lines or less
- **Component exports**: Don't use inline export for components; export at the bottom of the file
  ```typescript
  // ❌ Wrong
  export default const MyComponent = () => {}

  // ✅ Correct
  const MyComponent = () => {}
  export default MyComponent
  ```
- **Implicit returns**: Use implicit return for components without a body
  ```typescript
  // ✅ Good
  const SimpleComponent = () => (
      <div>Content</div>
  )
  ```
- **No braces for single statement returns**: Omit braces when possible
- **All components are client-side**: This is a Vite SPA
- **shadcn/ui**: Always use components from shadcn/ui when available
- **Avoid prop drilling**: Use context, Redux, hooks or composition instead
- **Reusable components**: Use reusable components and functions as much as possible
- **One component per file**: Separate components into individual files
- **File structure**:
  - App entry: `src/app.tsx`
  - Routes: `src/routes/` (TanStack Router file-based)
  - Components: `src/components/`
  - Pages: `src/pages/`
  - API client: `src/api/`
  - Utilities: `src/lib/`, `src/utils/`
  - Types: `src/types/`
  - Config: `src/config/`
  - State: `src/store/` (Redux slices)
  - Validations: `src/validations/forms/`

### Environment Variables
- **CRITICAL RULE**: NEVER use `import.meta.env` directly outside of `src/config/index.ts`
- **Vite environment variables**: All env vars must be prefixed with `VITE_`
- **Access pattern**: ONLY access environment variables through `config` object from `@/config`
- **Config file**: `src/config/index.ts` - ONLY place where `import.meta.env` is allowed
- **Adding new variables**:
  1. Add to `.env.local` file with `VITE_` prefix
  2. Add to `config` object in `src/config/index.ts`
  3. Use via `config.yourVariable` throughout the app
- **All variables are client-side**: Vite bundles all `VITE_` prefixed variables into the client bundle

### CSS & Styling
- **Framework**: TailwindCSS 4
- **Prop format**: Always use `className={'...'}` with single quotes
- **Component library**: shadcn/ui components in `src/components/ui/`
- **Custom styles**: Centralized in `src/lib/styles.ts`

### Routing
- **Router**: TanStack Router v1
- **Routing pattern**: File-based routing in `src/routes/`
- **Route naming**: `__root.tsx`, `index.tsx`, `$param.tsx` (dynamic), `_layout.tsx` (layout), `(group)` (route group)
- **Navigation**: ALWAYS use `useNavigate()` hook or `<Link>` component from `@tanstack/react-router`, never `window.location`
- **Loaders**: Route loaders in `src/handlers/loaders/`
- **Actions**: Route actions in `src/handlers/actions/`

### API & Data Fetching
- **HTTP Client**: Axios with centralized instance
- **API instance**: `src/api/index.ts` - Singleton axios instance with interceptors
- **CSRF protection**: Automatically injected via axios interceptor for mutating requests (POST, PUT, PATCH, DELETE)
- **API modules**: Organized by domain in `src/api/` (e.g., `auth.ts`, `forum.ts`)
- **Pattern**: ALWAYS use the centralized `api` instance from `@/api`, never create new axios instances or use fetch directly

### Authentication
- **Custom authentication**: Session management via Redux with CSRF protection
- **CSRF tokens**: Automatically handled by axios interceptor
- **Auth state**: Redux store (`src/store/authSlice.ts`, `src/store/tokenSlice.ts`)
- **Auth handlers**: `src/handlers/auth.ts`
- **Protected routes**: Route guards via TanStack Router loaders

### Form Handling
- **Library**: react-hook-form
- **Validation**: Zod schemas in `src/validations/forms/`
- **Components**: Reusable form components in `src/components/shared/form/`
- **shadcn/ui forms**: Use Form component from `src/components/ui/form.tsx`

### State Management
- **Global state**: Redux Toolkit with redux-persist
- **Slices**: Store slices in `src/store/` (e.g., `authSlice.ts`, `tokenSlice.ts`)
- **Local state**: React hooks (useState, useReducer)
- **Context**: React Context for cross-cutting concerns (e.g., `src/context/langContext.tsx`)
- **URL state**: useSearch from TanStack Router for filters and pagination

### TypeScript Types
- **Location**: `src/types/` directory
- **Organization**: Organized by domain (e.g., `forum.ts`, `responses/`)
- **Module augmentation**: Use for extending third-party types (e.g., TanStack Router)
- **Naming**: PascalCase for types and interfaces
- **Exports**: Named exports preferred

## Code Formatting Rules

### Line Breaking & Formatting
- **Component props**: If 2 or more props, put each prop on a new line
  ```typescript
  // ❌ Wrong
  <Button
  className={'btn'}
  onClick={handleClick}
  disabled={loading}>

  // ✅ Correct
  <Button
      className={'btn'}
      onClick={handleClick}
      disabled={loading}
  >
  ```
- **Long lines**: Break long lines into multiple lines for readability
- **Method arguments**: Break long method arguments/parameters onto new lines
- **Curly braces**: Add space around variables in curly-braces
  ```typescript
  import { useState } from 'react'
  const { var1, var2 } = variable
  ```
- **Conditional statements**: If 2+ conditions in an if statement, split them one per line
  ```typescript
  // ❌ Wrong
  if (condition1 && condition2 && condition3) {

  // ✅ Correct
  if (
      condition1 &&
      condition2 &&
      condition3
  ) {...
  ```
- **Nested content**: If content is wrapped with another component, always put it on a new line
  ```typescript
  // ❌ Wrong
  <div><Component>Content</Component></div>

  // ✅ Correct
  <div>
      <Component>
          Content
      </Component>
  </div>
  ```

### Import Organization
Follow the eslint-plugin-simple-import-sort configuration:
1. React imports (react, react-dom)
2. Third-party packages (non-scoped)
3. Third-party @-scoped packages
4. Custom @/ imports (grouped by subdirectory):
   - `@/types`
   - `@/components`
   - `@/hooks`
   - `@/lib`
   - `@/utils`
   - `@/services`
   - `@/constants`
   - `@/config`
   - `@/context`
   - `@/handlers`
   - `@/pages`
   - Other `@/` imports
5. Relative imports (parent directories)
6. Relative imports (same directory)
7. Style imports (CSS files) - always last

```typescript
// Example
import { useState } from 'react'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'

import { User } from '@/types'

import FormInput from '@/components/shared/form/FormInput'

import { useAuth } from '@/hooks/useAuth'

import config from '@/config'

import { signupSchema } from '@/validations/forms/signupSchema'

import '@/styles/index.css'
```

### Hooks Usage
- **Hook spreading**: Avoid spreading hooks everywhere, only when it looks obvious
- Keep hooks at the top of components
- Custom hooks should be in separate files in `src/hooks/`

### Clean Code Practices
- **Cleaner code output**: Always output clean, readable code
- **Reusability**: Extract reusable logic into separate functions or components
- **Single responsibility**: One function/component per file when possible
- **No code snippets**: Provide complete, production-ready code, not snippets
- **CRITICAL: Delete unused code - NEVER comment it out**:
  - ❌ WRONG: Leaving commented out code like `// const oldFunction = () => {}`
  - ❌ WRONG: Commenting out imports like `// import { oldApi } from '@/lib/api'`
  - ❌ WRONG: Commenting out environment variables like `# OLD_API_URL=...`
  - ❌ WRONG: Commenting as removed/deprecated/etc., like `// REMOVED: oldFunction()`:
  - ✅ CORRECT: **DELETE** unused code completely
  - Why: Commented code creates clutter, confusion, and makes codebase harder to maintain
  - Exception: Only comment code if explicitly documenting WHY something was removed for historical context (very rare)

## Project Structure

```
src/
├── api/                    # API client and endpoints
│   ├── index.ts           # Axios instance with interceptors
│   ├── auth.ts            # Auth API calls
│   └── forum.ts           # Forum API calls
├── app.tsx                # Main app entry point
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── shared/           # Shared components
│   ├── auth/             # Auth-specific components
│   ├── forum/            # Forum-specific components
│   ├── home/             # Home-specific components
│   └── layout/           # Layout components
├── config/               # Configuration
│   └── index.ts         # Environment variables (ONLY place for import.meta.env)
├── constants/           # Constants and static data
├── context/            # React contexts
├── data/              # Static data
├── handlers/          # Route handlers
│   ├── loaders/      # TanStack Router loaders
│   └── actions/      # Route actions
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
│   ├── styles.ts    # Centralized styles
│   └── utils.ts     # Utility functions
├── mocks/           # Mock data
├── pages/           # Page components
│   ├── error/      # Error pages
│   ├── forum/      # Forum pages
│   └── layouts/    # Page layouts
├── routes/         # TanStack Router routes
│   ├── __root.tsx # Root route
│   ├── (auth)/    # Auth route group
│   └── _forum/    # Forum layout route
├── store/          # Redux Toolkit slices
│   ├── authSlice.ts
│   └── tokenSlice.ts
├── styles/         # Global styles
│   └── index.css  # Global CSS
├── types/          # TypeScript types
│   ├── forum.ts
│   ├── router.ts
│   └── responses/
├── utils/          # Utility functions
│   ├── router.ts  # Router setup
│   └── sentry.ts  # Sentry setup
└── validations/    # Zod schemas
    └── forms/     # Form validation schemas
```

## Key Features

### Forum System
- Post creation and editing
- Categories and tags
- Replies and nested comments
- Voting system
- User profiles

### Authentication
- Email/password login
- Google OAuth (configured)
- Session management with Redux
- CSRF protection via axios interceptors

## Development Guidelines

### Before Committing
1. Run TypeScript check: `npm run typecheck`
2. Run lint check: `npm run lint:check`
3. Ensure all imports use `@/` path alias
4. Verify environment variables are accessed via config
5. Check that all JSX props use single quotes
6. Verify arrow functions are used throughout
7. Check component sizes (keep under ~40 lines)
8. Ensure SOLID principles are followed
9. Verify import order follows eslint-plugin-simple-import-sort

### API Client Pattern
```typescript
// ❌ Wrong - Don't create new axios instances
import axios from 'axios'
const { data } = await axios.get('/posts')

// ❌ Wrong - Don't use fetch directly
const response = await fetch('/api/posts')

// ✅ Correct - Use centralized API instance
import { api } from '@/api'
const { data } = await api.get('/posts')

// ✅ Correct - Use domain-specific API modules
import { getPosts } from '@/api/forum'
const posts = await getPosts()
```

### Environment Variables Pattern
```typescript
// ❌ WRONG - NEVER use import.meta.env outside config
const apiUrl = import.meta.env.VITE_SERVER_URL
const sentryDsn = import.meta.env.VITE_SENTRY_DSN

// ✅ CORRECT - Always use config
import config from '@/config'
const apiUrl = config.serverUrl
const sentryDsn = config.sentryDsn
```

### Component Props
```typescript
// ❌ Wrong
<Button className="bg-blue-500" type="submit">

// ✅ Correct
<Button className={'bg-blue-500'} type={'submit'}>
```

### Routing Pattern
```typescript
// ❌ Wrong - Don't use window.location or manual routing
window.location.href = '/login'

// ✅ Correct - Use TanStack Router
import { useNavigate, Link } from '@tanstack/react-router'

const navigate = useNavigate()
navigate({ to: '/login', search: { redirect: '/' } })

// Or use Link component
<Link to={'/login'}>Login</Link>
```

## Dependencies

### Core
- Vite 7
- React 19
- TypeScript 5
- TailwindCSS 4
- TanStack Router v1

### State & Data
- Redux Toolkit 2
- redux-persist
- Axios 1.9

### UI & Forms
- shadcn/ui components
- Radix UI primitives
- react-hook-form 7
- Zod validation
- React Quill editor
- lucide-react (icons)

### Performance & Monitoring
- Million.js (React optimization)
- Sentry (error tracking)

### Utilities
- class-variance-authority (CVA)
- clsx & tailwind-merge
- date-fns
- html-react-parser

## Configuration Files

- `.env.local` - Environment variables (not committed, use `VITE_` prefix)
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - Tailwind configuration
- `vite.config.ts` - Vite configuration
- `eslint.config.mjs` - ESLint configuration (flat config)

## Important Notes

1. **Never commit sensitive data** like API keys or secrets
2. **Always use config file** for environment variables
3. **Maintain consistent prop syntax** with single quotes
4. **Use type-safe forms** with Zod and react-hook-form
5. **Use centralized API instance** for all HTTP requests
6. **Follow TanStack Router patterns** for routing and navigation
7. **Use Redux for global state**, Context for cross-cutting concerns
8. **All environment variables** must be prefixed with `VITE_`
9. **Test CSRF token handling** in forms and mutations

## Quick Reference Checklist

### Must Follow
- ✅ Use arrow functions ALWAYS
- ✅ No semicolons (unless necessary)
- ✅ Single quotes for all strings
- ✅ Props on new lines (if 2+)
- ✅ JSX props: `prop={'value'}`
- ✅ Export at bottom of file
- ✅ Components under ~40 lines
- ✅ One component/function per file
- ✅ SOLID principles
- ✅ Use shadcn/ui components
- ✅ Use existing `api` instance from `@/api`
- ✅ Config file for env vars (`VITE_` prefix)
- ✅ TanStack Router for navigation
- ✅ Redux for global state
- ✅ Avoid prop drilling
- ✅ Clean, formatted code
- ✅ Import organization (eslint-plugin-simple-import-sort)
- ✅ Industry standards
- ✅ PascalCase for components, camelCase for non-components

### Must Avoid
- ❌ Regular function declarations
- ❌ Inline exports
- ❌ Double quotes
- ❌ `import.meta.env` outside config
- ❌ Direct axios/fetch usage (use `api` instance)
- ❌ `React.*` type syntax
- ❌ Interface (prefer type)
- ❌ Prop drilling
- ❌ Long files/components
- ❌ Multiple components per file
- ❌ Code snippets (provide full code)
- ❌ window.location for navigation (use TanStack Router)
- ❌ `NEXT_PUBLIC_` prefix (use `VITE_` prefix)
- ❌ Server/Client component directives (this is a Vite SPA)
