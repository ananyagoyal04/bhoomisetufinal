# Bhoomi Setu — Karnataka Land Acquisition Management & Spatial Portal
**Department of Revenue, Government of Karnataka**

Bhoomi Setu is an integrated spatial land acquisition management platform combining GIS mapping, ML-based delay risk forecasting, SHAP explainability, multi-tier statutory approval tracking, and transparent citizen dossiers under RFCTLARR / KLA Act 2013.

---

## 🌟 Key Features
- **Role-Based Access Gateway (`/`)**: Government Officer, Senior Official, and Verified Citizen portals.
- **Officer Dashboard (`/officer/dashboard`)**: Acquisition KPIs, delay risk distribution breakdown, and monitored projects (`Road Expansion – North Bengaluru` & `Ramanagara Industrial Corridor`).
- **Interactive GIS Map (`/officer/project/:id`)**: React-Leaflet GIS with OpenStreetMap tiles, cadastral boundaries, and slide-out parcel dossier with circle rate vs market valuation spread analysis.
- **ML Delay Explainability (`/officer/parcel/:id/risk`)**: XGBoost timeline breach forecasting (+114 days, 78% risk) and SHAP feature attribution bar chart with 4-tier statutory approval pipeline.
- **Senior Official Dashboard (`/senior/dashboard`)**: Cross-district progress, High Court stay litigation tracker with digital affidavit sign-off, and R&R rehabilitation fulfillment metrics.
- **Citizen My Land Dossier (`/citizen/my-land`)**: Landowner parcel records, RFCTLARR fair compensation calculator (₹3.92 Cr), and unencumbered Safe & Clear verification.
- **Public Land Bank Search (`/citizen/search`)**: Discover unencumbered government reserves by District, Taluk, and Extent with lease application workflow.
- **Citizen Applications & Alerts (`/citizen/applications`)**: 5-stage acquisition stepper, live statutory notifications, and tamper-proof document repository.
- **Interactive Tech Stack & Status (`System Status`)**: Live indicator showing `Mock API: Live` or `Mock API: Cached (offline)` with full architectural modal separating Prototype Stack from Planned Production Roadmap.

---

## 🛠️ Architecture & Tech Stack

### Current Live Prototype Stack
- **Frontend**: React 18, React-Leaflet, Leaflet, Recharts, Lucide Icons, Material Symbols, Tailwind CSS, Vite
- **Mock Backend**: FastAPI (Python 3.10+), CORS middleware, Flat JSON repository (1.2s timeout fallback to bundled cache)
- **Data Engine**: Pandas for preprocessing and derived fields
- **ML & Explainability**: XGBoost delay scoring (78% calibrated risk score) & SHAP feature attributions

### Planned Production Stack
- **Database & Spatial Mesh**: PostgreSQL 16 + PostGIS for state-wide vector polygons and GeoServer WMS/WFS layers
- **Live Model Serving**: Ray Serve / Triton with automated drift re-training
- **Identity & Auth**: K-Kavach Single Sign-On (SSO) with Aadhaar-based OTP and PKI e-Sign 256-bit certificates

---

## 🚀 Getting Started

### 1. Frontend Setup
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Backend Mock Service (Optional)
```bash
cd backend
pip install -r requirements.txt
python main.py
```
API runs at [http://localhost:8000](http://localhost:8000).

---

## 🏛️ Governance
Department of Revenue, Government of Karnataka • KLA Act 2013 Statutory Spatial Engine.
