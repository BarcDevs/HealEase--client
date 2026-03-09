# HealEase — Recovery Support Platform

Recovery is difficult to manage without structure. HealEase provides patients transitioning from hospital or clinical care with daily check-in rituals, progress visibility, and community support.

---

## Problem Statement

Patients leaving hospital or clinical care face a critical gap: the loss of daily medical oversight and structured routine. Between appointments, motivation declines, progress becomes invisible, and recovery drifts without reinforcement. The result is disengagement and setbacks.

HealEase addresses this by creating a structured daily check-in ritual, making recovery progress visible through charts, and providing community connection with others in similar circumstances.

---

## Product Philosophy

**Structure**: Recovery benefits from daily routine. A single check-in per day creates the behavioral anchor needed for consistency.

**Visibility**: Progress is often hard to feel day by day. Charts and trends make recovery visible over time, revealing patterns individual days cannot show.

**Early Detection**: Pattern analysis can identify when engagement or mood is declining, helping catch setbacks early.

**Community**: Connection with others going through recovery reduces isolation during a vulnerable time.

---

## Key Features

**Daily Check-Ins**
Users log mood (1-10), pain level (1-10), activities, and notes in a single daily ritual. The system enforces one check-in per calendar day; subsequent submissions update the existing entry.

**Progress Visualization**
Mood and pain charts display trends over time, making recovery visible and tangible.

**Community Forum**
A space for patients to share experiences, ask questions, and connect with others in recovery. Includes posts, replies, voting, and tag-based filtering.

**User Profiles**
Profiles capture bio, location, timezone, and emerging personalization through health interests and activity preferences. These support improved recommendations and community connection.

**Insights**
Lightweight, supportive insights generated from check-in patterns help detect trends and maintain motivation. Insights are explicitly labeled as AI-assisted suggestions, not medical advice.

---

## Technology Stack

| Layer | Technology                                            |
|---|-------------------------------------------------------|
| **Frontend** | React 19, TypeScript, TanStack Router, TanStack Query |
| **Styling** | TailwindCSS 4, shadcn/ui                              |
| **Backend** | Node.js, Express, PostgreSQL, Prisma ORM              |
| **AI** | Google AI API for lightweight insights                |
| **Deployment** | Render (current), AWS (future production)             |

---

## Local Setup

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

# Create environment file
cp .env.example .env.local

# Start dev server
npm run dev
```

### Environment Variables

```env
VITE_SERVER_URL=http://localhost:3000
VITE_SENTRY_DSN=your-sentry-dsn
```

### Commands

```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run typecheck # TypeScript checking
npm run lint:fix  # Format & lint
npm test          # Run tests
```

---

## Folder Structure

See [docs/structure.md](./docs/structure.md) for complete structure.

Key directories:
- **src/api/** — API client modules by domain
- **src/components/** — React components
- **src/routes/** — TanStack Router file-based routes
- **src/store/** — Redux state management
- **src/handlers/** — Route loaders and actions
- **src/validations/** — Zod validation schemas
- **src/types/** — TypeScript type definitions

---

## Architecture & Documentation

[Architecture Diagram](https://www.notion.so/HealEase-structure-diagram-30d9e15469d280468f41e0d8925c6c98?source=copy_link)

See [docs/TECHNICAL_PRD.md](./docs/TECHNICAL_PRD.md) for:
- System architecture
- Data models
- API specification
- Check-in model and constraints
- User flows

---

## Code Standards

Code follows [CLAUDE.md](./CLAUDE.md) conventions:
- TypeScript with strict typing
- React 19 functional components
- Single quotes, no semicolons, 4-space indentation
- shadcn/ui for UI components
- Centralized API client with CSRF protection
- Redux for global state

---

## Security

- CSRF protection via Axios interceptors
- XSS prevention via HTML sanitization (DOMPurify)
- Open redirect validation
- HTTP-only JWT cookies
- Type-safe forms with Zod validation

---

## Deployment

Currently deployed on **Render** with automatic builds from main branch. Future production infrastructure planned on **AWS**.

---

## Support & Contribution

- 📖 [Backend Repository](https://github.com/BarcDevs/HealEase--server)
- 📋 [Technical PRD](./docs/TECHNICAL_PRD.md)
- 🐛 [Issues](https://github.com/BarcDevs/HealEase--client/issues)
- 💬 [Community Forum](https://healease-client.onrender.com/forum)