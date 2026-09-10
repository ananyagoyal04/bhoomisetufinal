# Bhoomi Setu — Karnataka Land Acquisition Management & Spatial Portal
**SIH 2026 · PS 26017 · Prototype**

Bhoomi Setu is an integrated spatial land acquisition management platform combining GIS mapping, ML-based delay risk forecasting, SHAP explainability, multi-tier statutory approval tracking, and transparent citizen dossiers under RFCTLARR 2013.

---

## 🌟 Key Features
- **Role-Based Access Gateway (`/`)**: Government Officer, Senior Official, and Verified Citizen portals.
- **Officer Dashboard (`/officer/dashboard`)**: Acquisition KPIs, delay risk distribution breakdown, and monitored projects.
- **Interactive GIS Map (`/officer/project/:id`)**: React-Leaflet GIS with OpenStreetMap tiles, cadastral boundaries, and slide-out parcel dossier with circle rate vs market valuation spread analysis.
- **ML Delay Explainability (`/officer/parcel/:id/risk`)**: XGBoost timeline breach forecasting (+114 days) and SHAP feature attribution bar chart with 4-tier statutory approval pipeline.
- **Senior Official Dashboard (`/senior/dashboard`)**: Cross-district progress, High Court stay litigation tracker with digital affidavit sign-off, and R&R rehabilitation fulfillment metrics.
- **Citizen My Land Dossier (`/citizen/my-land`)**: Landowner parcel records, RFCTLARR fair compensation calculator (₹3.92 Cr), and unencumbered Safe & Clear verification.
- **Public Land Bank Search (`/citizen/search`)**: Discover unencumbered government reserves by District, Taluk, and Extent with lease application workflow.
- **Citizen Applications & Alerts (`/citizen/applications`)**: 5-stage acquisition stepper, live statutory notifications, and tamper-proof document repository.

---

## 🛠️ Tech Stack
- **Frontend**: React 18, React-Leaflet, Leaflet, Recharts, Lucide Icons, Tailwind CSS, Vite
- **Backend**: FastAPI (Python), CORS middleware, JSON data model
- **ML / XAI**: XGBoost delay forecasting & SHAP attribution schema

---

## 🚀 Getting Started

### 1. Frontend Setup
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend Setup (Optional)
```bash
cd backend
pip install -r requirements.txt
python main.py
```
API running at [http://localhost:8000](http://localhost:8000).

---

## 🏛️ Built for
Department of Revenue, Government of Karnataka • Smart India Hackathon 2026 (PS 26017).
