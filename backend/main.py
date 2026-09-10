"""
Bhoomi Setu — FastAPI Backend
Karnataka Land Acquisition Management & Spatial Portal (SIH 2026 PS 26017)
"""

import json
from pathlib import Path
from typing import Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Bhoomi Setu API",
    description="Karnataka Land Acquisition Management & Spatial Portal Mock Service",
    version="1.0.0"
)

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_DIR = Path(__file__).parent / "data"

def load_json(filename: str):
    file_path = DATA_DIR / filename
    if not file_path.exists():
        raise HTTPException(status_code=404, detail=f"File {filename} not found")
    with open(file_path, "r", encoding="utf-8") as f:
        return json.load(f)

@app.get("/")
def root():
    return {
        "status": "healthy",
        "service": "Bhoomi Setu Backend API",
        "version": "1.0.0",
        "department": "Department of Revenue, Government of Karnataka",
        "compliance": "KLA Act 2013 / RFCTLARR Compliant"
    }

@app.get("/api/projects")
def get_projects():
    """Returns all acquisition projects with risk scores and delay forecasts."""
    return load_json("projects.json")

@app.get("/api/projects/{project_id}")
def get_project(project_id: str):
    projects = load_json("projects.json")
    for project in projects:
        if project.get("id") == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")

@app.get("/api/parcels")
def get_parcels(project_id: Optional[str] = None):
    """Returns land parcels, optionally filtered by project_id."""
    parcels = load_json("parcels.json")
    if project_id:
        return [p for p in parcels if p.get("projectId") == project_id]
    return parcels

@app.get("/api/parcels/{parcel_id}")
def get_parcel(parcel_id: str):
    parcels = load_json("parcels.json")
    for parcel in parcels:
        if parcel.get("id") == parcel_id or parcel.get("surveyNo").replace("/", "-") == parcel_id:
            return parcel
    raise HTTPException(status_code=404, detail="Parcel not found")

@app.get("/api/delay/{item_id}")
def get_delay_explanation(item_id: str):
    """Returns XGBoost delay score, forecast breach days, and SHAP drivers."""
    delays = load_json("delay-explanation.json")
    if item_id in delays:
        return delays[item_id]
    # Fallback to default if not found
    return delays.get("prr-phase2")

@app.get("/api/approvals/{item_id}")
def get_approvals(item_id: str):
    """Returns 4-tier statutory clearance workflow stages."""
    approvals = load_json("approvals.json")
    if item_id in approvals:
        return approvals[item_id]
    return approvals.get("prr-phase2")

@app.get("/api/available-land")
def get_available_land(district: Optional[str] = None):
    """Returns unencumbered public land bank reserves."""
    lands = load_json("available-land.json")
    if district:
        return [l for l in lands if l.get("district", "").lower() == district.lower()]
    return lands

@app.get("/api/notifications")
def get_notifications():
    """Returns citizen and officer statutory notifications and ML alerts."""
    return load_json("notifications.json")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
