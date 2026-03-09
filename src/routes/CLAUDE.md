# Routes — TanStack Router v1

File-based routing. Route files in src/routes/.

## Naming Conventions
- __root.tsx — Root route
- index.tsx — Default child route
- $param.tsx — Dynamic segments
- _layout.tsx — Layout wrapper (inherits to children)
- (group) — Route group (non-visual grouping)

## Patterns
- Loaders: src/handlers/loaders/
- Actions: src/handlers/actions/
- Use beforeLoad for auth guards on layout routes
- Child routes inherit parent loaders via getRouteApi()

## Navigation
- ALWAYS use useNavigate() or Link from @tanstack/react-router
- Never use window.location
- Use validated redirect URLs via redirect.ts utils

## After Changes
Run `npx @tanstack/router-cli generate` to regenerate routeTree.gen.ts