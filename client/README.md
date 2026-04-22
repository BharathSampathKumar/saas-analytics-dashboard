# SaaS Analytics Dashboard – Frontend

A modern React + TypeScript dashboard for visualizing analytics data from a multi-tenant backend.

Built with:
- React (Vite)
- TypeScript
- Recharts
- Axios
- ESLint + strict TS config
- Vitest + React Testing Library

---

## 🚀 Features

- 🔐 Authentication (login)
- 📊 Analytics dashboard (charts)
- ⚡ API integration with backend
- 🧪 Component testing (Vitest + RTL)
- 🧹 ESLint + strict TypeScript setup

---

## 🧠 Architecture

```
src/
api/ # API layer (axios)
pages/ # Route-level components
components/ # Reusable UI
types/ # TypeScript types
hooks/ # Custom hooks
```

---

## 📊 Dashboard

Displays:
- Event counts over time
- Data fetched from analytics API
- Rendered using Recharts

---

## 🔌 API Integration

Axios client with interceptor:

```
Authorization: Bearer <token>
```

---

## 🧾 Type Safety

Strict TypeScript setup:
- No `any`
- Explicit API response types
- Typed state

Example:
```
useState<EventsOverTimeFormatted[]>([])
```

## 🧪 Testing

Framework:

Vitest
React Testing Library

Run tests

```npm run test```

CI mode

```npm run test:run```

## ⚙️ Setup

1. Install dependencies
  ```npm install```

2. Run app
  ```npm run dev```

  App runs on:
  ```http://localhost:5173```

## 🔧 Scripts
```
npm run dev        # start dev server
npm run build      # production build
npm run lint       # eslint
npm run test       # interactive tests
npm run test:run   # CI tests
```

## ⚠️ Known Limitations
❌ No global state management (React Query/Zustand)
❌ No project/workspace selector UI
❌ Hardcoded projectId
❌ Minimal error handling
❌ No loading states

## 🚀 Production Improvements
React Query for data fetching
Global state management
Dynamic project/workspace selection
Better UX (loading, skeletons)
E2E testing (Playwright)
Component library (UI consistency)

## 🧠 Design Decisions
Minimal UI, maximum clarity
→ focus on functionality over styling
Typed API layer
→ avoids runtime surprises
Strict ESLint + TS rules
→ enforce code quality

## 📌 Why This Project

This frontend demonstrates:

Type-safe React development
API integration patterns
Data visualization
Testing discipline

## 📄 License

MIT