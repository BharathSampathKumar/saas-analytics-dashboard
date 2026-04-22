# SaaS Analytics Dashboard – Backend

A modular, production-inspired backend for a multi-tenant analytics platform built with Node.js, Express, and MongoDB.

This service handles:
- Authentication (JWT)
- Multi-tenant workspaces
- Project management with API keys
- Event ingestion pipeline
- Analytics aggregation APIs

---

## 🚀 Features

- 🔐 JWT-based authentication
- 🏢 Multi-tenant workspace system
- 🔑 Project-level API keys
- 📥 Event ingestion endpoint (high-frequency ready)
- 📊 Analytics APIs (aggregation pipelines)
- 🧱 Modular architecture (controller → service → model)
- 🛡️ Basic validation & security middleware

---

## 🧠 Architecture
```
Client (React)
|
| JWT / API Key
↓
Express API Layer
|
├── Auth Module
├── Workspace Module
├── Project Module
├── Events Module
└── Analytics Module
|
MongoDB (Raw Events + Queries)
```

---

## 📁 Project Structure

```
server/
src/
modules/
auth/
workspaces/
projects/
events/
analytics/
models/
middlewares/
utils/
config/
```

---

## 🔐 Authentication

- JWT-based auth for users
- Middleware protects workspace/project APIs

```
Authorization: Bearer <token>
```

---

## 🔑 API Key System

Each project has a unique API key:

```
x-api-key: proj_abc123...
```

Used for:
- Event ingestion (external clients)
- Decoupled from user auth

---

## 📥 Event Ingestion

### Endpoint

```
POST /api/events
```

### Headers

```
x-api-key: <project-api-key>
```

### Body
```
{
  "event": "page_view",
  "metadata": {
    "url": "/home",
    "device": "mobile"
  }
}
```
## 📊 Analytics APIs
### Events Over Time
GET /api/analytics/events-over-time?projectId=xxx&range=7d
### Top Events
GET /api/analytics/top-events?projectId=xxx
### Top Pages
GET /api/analytics/top-pages?projectId=xxx

## ⚙️ Setup
1. Install dependencies

    ```npm install```

2. Environment variables

    Create .env:
    ```
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/analytics
    JWT_SECRET=your_secret
    ```

3. Run server

    ```npm run dev```

## 🧪 Scripts
```npm run dev      # start with nodemon
npm start        # production
npm run lint     # lint code
npm test         # run tests
```

## ⚠️ Known Limitations (Intentional)

This project is designed as a clean MVP, not a fully scaled system.

❌ Direct DB writes (no queue)
❌ No batching of events
❌ No rate limiting
❌ API keys stored in plain text
❌ Aggregations run on raw events

## 🚀 Production Improvements (Planned)

These are intentionally deferred and covered in articles:

 - Queue-based ingestion (Kafka / BullMQ)
 - Precomputed aggregations
 - Redis caching layer
 - API key hashing + rotation
 - Rate limiting & abuse protection
 - Horizontal scaling

## 🧠 Design Decisions
API key over JWT for ingestion
→ external clients should not depend on user auth
Aggregation via Mongo pipelines
→ simple, readable, good for MVP
Workspace-based multi-tenancy
→ clear data isolation boundary

## 📌 Why This Project

This backend demonstrates:

System design thinking
Multi-tenant architecture
API security patterns
Data modeling for analytics

## 📄 License

MIT