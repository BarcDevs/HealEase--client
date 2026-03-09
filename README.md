# HealEase Frontend

Recovery tracking and community platform with AI-powered health insights.

[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

[🌐 Live App](https://healease-client.onrender.com) · [🔧 Backend Repo](https://github.com/BarcDevs/HealEase--server)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup](#setup)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 7 |
| Routing | TanStack Router v1 |
| Styling | TailwindCSS 4 |
| UI Components | shadcn/ui + Radix UI |
| Forms | react-hook-form + Zod |
| State | Redux Toolkit + Redux Persist |
| Data Fetching | Axios + TanStack Query |
| Notifications | Sonner |
| Charts | Recharts |
| HTTP Client | Axios (with CSRF interceptors) |

---

## Features

### ✅ Core
- 🔐 **Secure Authentication** - JWT cookies + CSRF protection
- 📝 **Daily Check-ins** - Mood/pain tracking with 1-10 scales
- 📊 **Health Insights** - AI-powered analysis of check-in trends
- 💬 **Community Forum** - Posts, replies, voting, tags
- 👤 **User Profiles** - Bio, location, timezone, health interests

### ✅ Check-in System (Recovered)
- ✏️ **Form** - Mood/pain sliders, activities, notes
- 📈 **Chart** - Mood & pain over time (Recharts)
- 💡 **AI Insights Panel** - Tips, warnings, positive feedback
- 📋 **History** - Timeline of all check-ins
- ⚡ **Smart Save** - Auto-detects existing check-in for PATCH
- 🔄 **Optimistic Updates** - Instant UI feedback before server confirmation

### ✅ UI
- 🎨 **Responsive Design** - Mobile-first, Tailwind + shadcn/ui
- ♿ **Accessible** - WCAG compliant components
- 🌓 **Dark Mode Support** - Via TailwindCSS
- 📱 **Mobile Optimized** - Touch-friendly interactions

See [docs/structure.md](./docs/structure.md) for detailed project structure.

---

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn
- Backend running on `http://localhost:3000`

### Installation

```bash
# Clone and install
git clone https://github.com/BarcDevs/HealEase--client.git
cd HealEase--client
npm install

# Create .env.local (copy from .env.example)
cp .env.example .env.local

# Start dev server
npm run dev
```

### Environment Variables

```env
VITE_SERVER_URL=http://localhost:3000
VITE_SENTRY_DSN=your-sentry-dsn
```

---

## Development

### Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run typecheck # TypeScript type checking
npm run lint:check # ESLint validation
npm run lint:fix   # Auto-fix linting issues
npm test          # Run Vitest tests
```

### Code Style

- **Quotes**: Single quotes (`'`)
- **Semicolons**: None (except where required)
- **Indentation**: 4 spaces
- **Components**: PascalCase files, functional components with hooks
- **Non-components**: camelCase files
- **JSX Props**: Always `prop={'value'}` with quotes
- **Imports**: Organized via `eslint-plugin-simple-import-sort`

See [CLAUDE.md](./CLAUDE.md) for full conventions.

---

## Testing

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

---

## Building

```bash
# Production build
npm run build

# Output: dist/ directory
# Size: ~1.3 MB (gzipped)

# Preview build locally
npm run preview
```

---

## Check-in System (Recovered Features)

The check-in system was recovered from conversation history after a PC reset. It includes:

### Pages
- **CheckInPage** (`/check-in`) - Main hub showing stats, insights, history
- **NewCheckInPage** (`/check-in/new`) - Create/update daily check-in

### Components
- **MoodPainChart** - Recharts visualization of mood/pain over time
- **AIInsightPanel** - Tips, warnings, positive feedback from AI
- **CheckInForm** - Sliders for mood/pain, activity picker, notes
- **CheckInHistoryList** - Timeline of previous check-ins
- **CheckInStats** - Animated stat cards

### Hooks & Services
- **useCheckInForm** - Form state and validation
- **saveCheckIn** - Smart POST/PATCH logic with conflict handling

### Validation & Types
- Full TypeScript types in `src/types/checkIn.ts`
- Zod validation schema in `src/validations/forms/checkInSchema.ts`
- Form config constraints in `src/config/schema/checkInForm.ts`

---

## Architecture

[Structure diagram](https://www.notion.so/HealEase-structure-diagram-30d9e15469d280468f41e0d8925c6c98?source=copy_link)

See [TECHNICAL_PRD.md](./docs/TECHNICAL_PRD.md) for:
- System architecture diagram
- Data flow diagrams
- Component hierarchy
- API integration points
- Performance considerations

---

## Security

- ✅ CSRF protection via Axios interceptors
- ✅ XSS prevention via sanitized HTML parsing
- ✅ Open redirect validation
- ✅ HTTP-only cookie handling
- ✅ Type-safe forms with Zod validation
- ✅ Content Security Policy ready

---

## Performance

- 🚀 Lazy route loading with TanStack Router
- 📦 Code splitting with Vite
- 🖼️ Image optimization
- 📊 Bundle analysis: `npm run build -- --visualize`
- 🔄 Caching via TanStack Query with 5-60 min staleTime

---

## Deployment

Deployed on **Render**:

```bash
Build: npm install && npm run build
Start: npm run preview
```

---

## Support

For issues or questions:
- 📖 [API Documentation](../HealEase--server#api-endpoints)
- 🐛 [GitHub Issues](https://github.com/BarcDevs/HealEase--client/issues)
- 💬 [Community Forum](https://healease-client.onrender.com/forum)
