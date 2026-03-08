# Architecture Diagram

## Placeholder - To Be Replaced with Notion Diagram

**Status**: 🚧 Waiting for high-quality architecture diagram from Notion

A detailed Mermaid diagram showing:
- Frontend components hierarchy
- API integration points
- Data flow
- State management
- Authentication flow
- Real-time communication (future)

---

### Components Flow

```
HealEase Frontend (React 19)
├── Auth System
│   ├── Login/Signup pages
│   ├── JWT + CSRF tokens
│   └── Session management
│
├── Check-in System
│   ├── Daily form (mood, pain, activities)
│   ├── AI insights panel
│   ├── Trend visualization (Recharts)
│   └── History timeline
│
├── Forum System
│   ├── Posts & replies
│   ├── Voting system
│   └── User profiles
│
└── Data Management
    ├── Redux (auth state)
    ├── TanStack Query (server state)
    └── Axios (API client)
```

---

### API Integration

```
Frontend Axios Instance
├── Auth endpoints (login, signup, logout)
├── Check-in endpoints (create, update, list, stats)
├── Forum endpoints (posts, replies, voting)
└── Profile endpoints (get, update, interests)
    ↓
Backend API (Express + Prisma)
    ↓
PostgreSQL Database
```

---

**TODO**: Replace this with a Notion architecture diagram export
