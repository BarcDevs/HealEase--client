# HealEase Frontend — Technical PRD

**Status**: v0.9.0 - POC → MVP
**Last Updated**: March 2026
**Owner**: @BarcDevs

---

## Executive Summary

HealEase is a **healthcare community platform** enabling patients to track recovery with AI-powered insights while connecting with a supportive community forum. The frontend is a React 19 SPA built with Vite, providing:

- ✅ Secure JWT authentication
- ✅ Daily check-in tracking (mood, pain, activities)
- ✅ AI-generated health insights
- ✅ Community forum (posts, replies, voting)
- ✅ User profiles with interests/preferences
- ✅ Real-time notifications
- ✅ Fully responsive design

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Routing | TanStack Router v1 |
| Styling | TailwindCSS 4 + shadcn/ui |
| Forms | react-hook-form + Zod |
| State | Redux Toolkit + TanStack Query |
| HTTP | Axios with CSRF protection |
| Charts | Recharts |
| Notifications | Sonner |

---

## Key Features

### Check-in System (Recovered)
- Daily mood/pain tracking (1-10 scales)
- Activity logging & suggestions
- AI-powered health insights
- 7-day trend visualization
- Smart save (POST/PATCH conflict handling)

### Forum
- Reddit-style posts & replies
- Voting system
- Tag-based filtering
- User profiles

### Profiles
- Bio, location, timezone
- Health interests (many-to-many)
- Activity preferences
- Check-in history

---

## Architecture

```
React Router (TanStack)
    ↓
Redux (Auth + CSRF) + TanStack Query (Server State)
    ↓
Axios Instance (CSRF Interceptor)
    ↓
Backend API (Express + Prisma)
```

---

## Security

- ✅ CSRF protection (auto-injected)
- ✅ XSS prevention (DOMPurify)
- ✅ Open redirect validation
- ✅ JWT in HTTP-only cookies
- ✅ Environment variables isolated

---

## Development

```bash
npm run dev         # Start dev server
npm run typecheck   # Type checking
npm run lint:fix    # Format & lint
npm test           # Run tests
npm run build      # Production build
```

---

## Deployment

**Render** with automatic deploys from GitHub:
```
npm install && npm run build
npm run preview
```

---

For detailed information, see:
- Backend: [HealEase Server](../../HealEase--server/README.md)
- Frontend: [README.md](../README.md)
- CLAUDE.md: [Code Standards](../CLAUDE.md)
