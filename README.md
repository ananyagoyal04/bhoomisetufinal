# Bhoomi Setu — Karnataka Land Acquisition Management & Spatial Portal

### Department of Revenue, Government of Karnataka

**Bhoomi Setu** is an integrated spatial land acquisition management platform combining **GIS mapping, ML-based delay risk forecasting, SHAP explainability, statutory approval tracking, and transparent citizen services** under the **RFCTLARR / KLA Act 2013** framework.

## 🚀 Live Demo

🌐 **[bhoomisetufinal.vercel.app](https://bhoomisetufinal.vercel.app/)**

---

## 🌟 Key Features

- **Role-Based Access Gateway (`/`)**: Government Officer, Senior Official, and Verified Citizen portals.
- **Officer Dashboard (`/officer/dashboard`)**: Acquisition KPIs, delay risk distribution breakdown, and monitored projects (`Road Expansion – North Bengaluru` & `Ramanagara Industrial Corridor`).
- **Interactive GIS Map (`/officer/project/:id`)**: React-Leaflet GIS with OpenStreetMap tiles, cadastral boundaries, and slide-out parcel dossier with circle rate vs market valuation spread analysis.
- **ML Delay Explainability (`/officer/parcel/:id/risk`)**: XGBoost timeline breach forecasting (+114 days, 78% risk) and SHAP feature attribution bar chart with 4-tier statutory approval pipeline.
- **Senior Official Dashboard (`/senior/dashboard`)**: Cross-district progress, High Court stay litigation tracker with digital affidavit sign-off, and R&R rehabilitation fulfillment metrics.
- **Citizen My Land Dossier (`/citizen/my-land`)**: Landowner parcel records, RFCTLARR fair compensation calculator (₹3.92 Cr), and unencumbered Safe & Clear verification.
- **Public Land Bank Search (`/citizen/search`)**: Discover unencumbered government reserves by District, Taluk, and Extent with lease application workflow.
- **Citizen Applications & Alerts (`/citizen/applications`)**: 5-stage acquisition stepper, statutory notifications, and tamper-proof document repository.
- **Interactive Tech Stack Architecture**: Modal detailing the Current Prototype Stack vs Planned Production Roadmap.

---

## 🛠️ Architecture & Tech Stack

### Current Live Prototype Stack
- **Frontend**: React 18, React-Leaflet, Leaflet, Recharts, Lucide Icons, Material Symbols, Tailwind CSS, Vite
- **Data Layer**: Direct client-bundled statutory JSON data repository (deterministic pilot dataset)
- **ML & Explainability**: XGBoost delay risk scoring & SHAP feature attributions

### Planned Production Stack
- **Database & Spatial Mesh**: PostgreSQL 16 + PostGIS for state-wide vector polygons and GeoServer WMS/WFS layers
- **Live Model Serving**: Ray Serve / Triton with automated drift re-training
- **Identity & Auth**: K-Kavach Single Sign-On (SSO) with Aadhaar-based OTP and PKI e-Sign 256-bit certificates

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏛️ Governance

**Department of Revenue, Government of Karnataka**

Bhoomi Setu demonstrates how **GIS, machine learning, explainable AI, and citizen-centric services** can be integrated into a unified land acquisition management platform.

## 🎯 Project Vision

Making land acquisition more transparent, spatially intelligent, explainable, and citizen-centric.

Bhoomi Setu aims to bridge the gap between government acquisition workflows, spatial land intelligence, predictive analytics, statutory compliance, and citizen transparency through a single digital platform.
