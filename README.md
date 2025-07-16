# Live Insight Scraper

A full-stack app to fetch, summarize, and present live web insights using FastAPI (backend) and React (frontend).

## Features
- Query the web for live information
- Summarize results using HuggingFace transformers
- Modern React UI
- Free hosting: Backend on Render, Frontend on GitHub Pages

---

## Backend (FastAPI)

### Local Setup
```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

### Deploy to Render
- Push your code to GitHub
- Create a new Web Service on [Render](https://render.com/)
- Use the following settings:
  - Build Command: `pip install -r requirements.txt`
  - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- Or use the provided `render.yaml`

---

## Frontend (React)

### Local Setup
```bash
cd frontend
npm install
npm run dev
```

### Deploy to GitHub Pages
1. Set the correct `homepage` in `package.json` (already set for `rogueTex`)
2. Add your Render backend URL to `frontend/.env` as `VITE_API_URL`
3. Build and deploy:
   ```bash
   npm run deploy
   ```
4. Enable GitHub Pages in your repo settings (branch: `gh-pages`)

---

## Connecting Frontend to Backend
- The React app uses the `VITE_API_URL` environment variable to call the backend.
- When running locally, you can use `http://localhost:8000`.
- When deployed, it will use your Render backend URL.

---

## License
MIT 