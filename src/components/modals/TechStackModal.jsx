import React, { useState } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function TechStackModal() {
  const { isTechStackOpen, setIsTechStackOpen } = useAuthRole();
  const [activeTab, setActiveTab] = useState('current'); // 'current' | 'roadmap'
  const [expandedCard, setExpandedCard] = useState('leaflet');

  if (!isTechStackOpen) return null;

  const currentStack = [
    {
      id: 'leaflet',
      name: 'React-Leaflet + Leaflet GIS',
      category: 'Spatial Mapping & GIS',
      status: 'Live (Client-side)',
      icon: 'layers',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: 'Interactive tile canvas rendering Bengaluru Rural & Ramanagara parcels with cadastral vector boundaries.',
      details: 'Utilizes OpenStreetMap/Esri Satellite hybrid raster layers with SVG polygon overlays, custom HTML risk pins, and responsive viewport telemetry (WGS 84 / UTM 43N).'
    },
    {
      id: 'fastapi',
      name: 'Structured REST Schema',
      category: 'Mock Data Service',
      status: 'In-Memory Client Schema',
      icon: 'api',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: 'Structured mock dataset serving standard REST schemas for acquisition entities.',
      details: 'Serves structured endpoints for projects, parcels, delay explanations, approvals, and available-land. Fully structured so frontend can swap to real database endpoints without schema changes.'
    },
    {
      id: 'pandas',
      name: 'Pandas Data Engine',
      category: 'Data Preparation & Derivations',
      status: 'Precomputed / Seed Data',
      icon: 'table_chart',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: 'Prepares two verified project records, computes circle-rate variance spreads (+93.1%), and derives RFCTLARR compensation tables.',
      details: 'Computes Base Guideline Values, 100% statutory solatium factors, and interest accrual rates for Sri K. Ramamurthy and co-heir records.'
    },
    {
      id: 'xgboost',
      name: 'XGBoost Delay Scoring Model',
      category: 'Predictive ML Engine',
      status: 'Simulated Model Output (Score: 78/100)',
      icon: 'psychology',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
      summary: 'Gradient-boosted decision trees predicting timeline breaches (+42 days) based on cadastral friction features.',
      details: 'Trained on statutory milestones (Section 11 to Section 19 SLA window). Outputs a calibrated 0-100 risk score and breach day confidence intervals.'
    },
    {
      id: 'shap',
      name: 'SHAP (Explainable AI)',
      category: 'Feature Attribution & XAI',
      status: 'Precomputed Attribution Values',
      icon: 'analytics',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: 'Decomposes model delay predictions into human-readable statutory root causes for officers and magistracy.',
      details: 'Attributes weights across Circle Rate Contests (+38%), Section 19 Gazetting Delays (+26%), High Court Stays (+14%), and Joint Khata Heirship Friction (+6%).'
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS & Recharts',
      category: 'Design System & Visuals',
      status: 'Live (Client-side)',
      icon: 'palette',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      summary: 'Official Karnataka Revenue Department design tokens with Kannada bilingual typography and accessible SVG gauges.',
      details: 'Includes responsive sidebars, slide-out parcel inspection drawers, 4-tier approval flow pipelines, and interactive SVG circular score meters.'
    }
  ];

  const roadmapStack = [
    {
      id: 'postgis',
      name: 'PostgreSQL + PostGIS',
      category: 'Production Spatial Database',
      status: 'Roadmap (Phase 2)',
      icon: 'database',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300',
      summary: 'Enterprise spatial relational database for 10M+ Karnataka cadastral survey polygons and spatial queries.',
      details: 'Will replace flat JSON files with PostGIS spatial tables (ST_Contains, ST_Intersects), GiST spatial indexing, and automated Bhoomi RTC sync.'
    },
    {
      id: 'liveml',
      name: 'Real-time ML Inference Microservice',
      category: 'Live Model Serving on K-SWAN',
      status: 'Roadmap (Phase 2)',
      icon: 'memory',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300',
      summary: 'Continuous online inference pipeline serving live delay probabilities across all 31 Karnataka districts.',
      details: 'Integrated with MLflow model registry and automatic retraining on newly concluded Land Tribunal arbitration awards.'
    },
    {
      id: 'kkavach',
      name: 'K-Kavach SSO & Aadhaar e-Sign',
      category: 'Enterprise Statutory Security',
      status: 'Roadmap (Phase 2)',
      icon: 'security',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300',
      summary: 'Official Government of Karnataka Single Sign-On with 256-bit digital token signatures for District Magistrates.',
      details: 'Replaces client-side role toggle with K-SWAN VPN verification, Aadhaar-based OTP authentication, and non-repudiable audit trails.'
    },
    {
      id: 'ksrsac',
      name: 'KSRSAC Automated Drone Sync',
      category: 'Photogrammetry Ingestion Pipeline',
      status: 'Roadmap (Phase 2)',
      icon: 'satellite_alt',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300',
      summary: 'Direct streaming of high-resolution drone orthomosaics and flood vulnerability grids from state remote sensing servers.',
      details: 'Automated ingestion of multi-spectral drone imagery for instant ground truth validation against preliminary survey records.'
    }
  ];

  const cardsToDisplay = activeTab === 'current' ? currentStack : roadmapStack;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[800] flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface-container-lowest rounded-3xl max-w-3xl w-full p-space-lg shadow-2xl border border-surface-container-high/80 space-y-space-md my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-surface-container pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[28px]">account_tree</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-caption uppercase tracking-wider text-secondary font-bold text-xs">
                  Bhoomi Setu Engineering Architecture
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-mono text-[10px] font-bold">
                  v1.0 Architecture Audit
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary font-bold text-xl">
                System Technology Stack & Execution Architecture
              </h2>
            </div>
          </div>
          <button
            onClick={() => setIsTechStackOpen(false)}
            className="p-1.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">close</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between bg-surface-container-low p-1.5 rounded-2xl border border-surface-container">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'current'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">check_circle</span>
              <span>Current Prototype Stack (Live Demo)</span>
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'roadmap'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">upcoming</span>
              <span>Planned Production Stack (Roadmap)</span>
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-surface-container-lowest text-[11px] text-on-surface-variant border border-surface-container">
            <span className="font-semibold text-primary">Data Layer:</span>
            <span className="text-secondary font-bold">Standard GeoJSON Schema</span>
          </div>
        </div>

        {/* Architecture Notice Banner */}
        <div className="p-3 rounded-2xl bg-surface-container-low border border-surface-container text-xs flex items-start gap-2.5">
          <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">info</span>
          <p className="text-on-surface-variant leading-relaxed">
            {activeTab === 'current' ? (
              <span>
                <strong>Transparent Architectural Disclosure:</strong> The active demonstration operates on a structured in-memory mock schema. Precomputed XGBoost scores and SHAP attributions simulate live machine learning outputs.
              </span>
            ) : (
              <span>
                <strong>Production Scaling Strategy:</strong> For statewide deployment across all 31 Karnataka districts, the architecture replaces flat JSON stores with PostgreSQL/PostGIS spatial clustering, live model inference on K-SWAN, and K-Kavach SSO authentication.
              </span>
            )}
          </p>
        </div>

        {/* Clickable Stack Cards Grid */}
        <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
          {cardsToDisplay.map((item) => {
            const isExpanded = expandedCard === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setExpandedCard(isExpanded ? null : item.id)}
                className={`p-3.5 rounded-2xl bg-surface-container-lowest border transition-all cursor-pointer ${
                  isExpanded
                    ? 'border-primary ring-2 ring-primary/15 shadow-md bg-surface-container-lowest'
                    : 'border-surface-container-high hover:border-primary/50 hover:shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-on-surface text-sm">{item.name}</h4>
                        <span className="text-on-surface-variant text-[11px]">• {item.category}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-snug">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] border ${item.badgeClass}`}>
                      {item.status}
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                      {isExpanded ? 'expand_less' : 'expand_more'}
                    </span>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-surface-container text-xs space-y-1.5 text-on-surface bg-surface-container-low/50 p-3 rounded-xl animate-in fade-in duration-150">
                    <div className="font-semibold text-primary text-[11px] uppercase tracking-wider">
                      Technical Implementation Details:
                    </div>
                    <p className="text-on-surface-variant leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-surface-container text-xs text-on-surface-variant">
          <span>Department of Revenue, Government of Karnataka</span>
          <button
            onClick={() => setIsTechStackOpen(false)}
            className="px-4 py-2 rounded-xl bg-primary text-on-primary font-bold hover:bg-secondary transition-colors cursor-pointer shadow-sm"
          >
            Close Architecture Panel
          </button>
        </div>

      </div>
    </div>
  );
}
