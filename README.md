#  Bhoomi Setu — Karnataka Land Acquisition Management & Spatial Portal

### Department of Revenue, Government of Karnataka

**Bhoomi Setu** is an integrated spatial land acquisition management platform combining **GIS mapping, ML-based delay risk forecasting, SHAP explainability, statutory approval tracking, and transparent citizen services** under the **RFCTLARR / KLA Act 2013** framework.

## 🚀 Live Demo

🌐 **[bhoomisetufinal.vercel.app](https://bhoomisetufinal.vercel.app/)**

## 🌟 Key Features

* 🔐 **Role-Based Access** — Government Officer, Senior Official, and Verified Citizen portals.
* 📊 **Officer Dashboard** — Acquisition KPIs, project monitoring, and delay risk analysis.
* 🗺️ **Interactive GIS Map** — Cadastral boundaries, parcel details, and valuation analysis.
* 🤖 **ML Delay Prediction** — XGBoost-based delay risk forecasting.
* 🔎 **SHAP Explainability** — Feature-level explanation of predicted risks.
* ⚖️ **Statutory Tracking** — Multi-stage acquisition and approval pipeline.
* 🏛️ **Senior Dashboard** — Cross-district progress, litigation, and R&R tracking.
* 👤 **Citizen Land Dossier** — Parcel records, compensation calculator, and Safe & Clear verification.
* 🔍 **Public Land Bank** — Search government land by district, taluk, and extent.
* 🔔 **Applications & Alerts** — Acquisition progress, notifications, and document tracking.

## 🛠️ Tech Stack

**Frontend:** React 18, Vite, React-Leaflet, Leaflet, Recharts, Tailwind CSS, Lucide Icons

**Backend:** FastAPI, Python 3.10+, CORS, JSON-based Mock API with offline fallback

**Data & ML:** Pandas, XGBoost, SHAP

## 🏗️ Architecture

```text
React Frontend
      ↓
FastAPI Mock API
      ↓
JSON Data Repository
      ↓
Pandas Data Processing
      ↓
XGBoost Risk Prediction
      ↓
SHAP Explainability
```

## 🔮 Planned Production Stack

* PostgreSQL + PostGIS
* GeoServer WMS/WFS
* Ray Serve / Triton for ML serving
* K-Kavach SSO
* PKI-based Digital Signatures
* Automated ML monitoring and retraining

## 🏛️ Governance

**Department of Revenue, Government of Karnataka**

Bhoomi Setu demonstrates how **GIS, machine learning, explainable AI, and citizen-centric services** can be integrated into a unified land acquisition management platform.

##🎯 Project Vision

Making land acquisition more transparent, spatially intelligent, explainable, and citizen-centric.

Bhoomi Setu aims to bridge the gap between government acquisition workflows, spatial land intelligence, predictive analytics, statutory compliance, and citizen transparency through a single digital platform.
