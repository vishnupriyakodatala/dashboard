# Mini Local Business Dashboard

This project is a **full-stack assignment** for GrowthProAI. It demonstrates how a small business might view simulated Google rating, reviews and an AI-generated SEO headline.

## Tech Stack

* **Frontend:** React, Vite, Tailwind CSS, Axios
* **Backend:** Node.js, Express, CORS

---

## Local Development

### Prerequisites

* Node.js ≥ 18 (both apps use native ES modules)
* npm ≥ 9 (or yarn / pnpm)

### 1. Clone / Download

```bash
git clone <repo-url>
cd dashboard
```

### 2. Install dependencies

```bash
# backend deps
cd backend
npm install

# frontend deps
cd ../frontend
npm install
```

### 3. Run the apps

```bash
# Terminal 1 – backend
cd backend
npm run dev
# runs on http://localhost:5000

# Terminal 2 – frontend
cd ../frontend
npm run dev
# opens http://localhost:5173
```

The frontend is already configured to talk to the backend at `http://localhost:5000`.

---

## Deployment (bonus)

* **Frontend** – deploy the `frontend` folder to Vercel or Netlify (static build via `npm run build`).
* **Backend** – deploy the `backend` folder to Render, Railway, Fly.io, etc.

---

## API Reference

### POST /business-data

```
Request body  : { "name": "Cake & Co", "location": "Mumbai" }
Response (200): {
  "name": "Cake & Co",
  "location": "Mumbai",
  "rating": 4.3,
  "reviews": 127,
  "headline": "Discover the Taste of Happiness at Cake & Co in Mumbai!"
}
```

### GET /regenerate-headline?name=...&location=...

```
Response (200): { "headline": "Get the Best Deals at Cake & Co – Serving Mumbai Proudly" }
```

---

Feel free to improve styling, add validation or animations ✨
