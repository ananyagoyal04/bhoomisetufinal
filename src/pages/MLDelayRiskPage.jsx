import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TopHeader from '../components/layout/TopHeader';
import OfficerSidebar from '../components/layout/OfficerSidebar';
import RiskGauge from '../components/ml/RiskGauge';
import ShapBarChart from '../components/ml/ShapBarChart';
import ApprovalTimeline from '../components/workflow/ApprovalTimeline';
import { apiService } from '../services/api';

export default function MLDelayRiskPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [delayData, setDelayData] = useState(null);
  const [approvals, setApprovals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionDone, setActionDone] = useState(false);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const parcelKey = id?.includes('89') ? 'ramanagara-corridor' : 'prr-phase2';
      const [delayRes, approvalsRes] = await Promise.all([
        apiService.getDelayExplanation(parcelKey),
        apiService.getApprovals(parcelKey)
      ]);

      setDelayData(delayRes);
      setApprovals(approvalsRes);
      setLoading(false);
    }
    loadData();
  }, [id]);

  if (loading || !delayData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-primary font-bold">
        Computing XGBoost ML Delay & SHAP Attribution...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <OfficerSidebar />

      <div className="pl-72">
        <TopHeader activeFlowStep="Predict" />

        <main className="relative pt-20 bg-background w-full px-gutter-desktop py-space-lg">
          <div className="flex flex-col w-full gap-y-space-lg">
            
            {/* Top Title & Metadata Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-xs">
              <div className="space-y-space-xxs">
                <div className="flex items-center gap-space-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary-container text-on-primary-container font-caption text-caption tracking-wider uppercase font-bold text-xs">
                    AI Spatial Risk Engine
                  </span>
                  <span className="text-outline-variant font-caption text-caption">•</span>
                  <span className="font-label-bilingual-kannada text-label-bilingual-kannada text-on-surface-variant text-xs">
                    ವಿಳಂಬ ಮುನ್ಸೂಚನೆ ಮತ್ತು ಅನುಮೋದನೆ
                  </span>
                </div>

                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold text-2xl md:text-3xl">
                  Parcel Delay Explainability & Clearance Flow
                </h1>

                <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm text-xs">
                  <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
                  <span className="font-bold text-on-surface">Sy. No. {delayData.surveyNo || '142/2A'}</span>
                  <span className="text-outline-variant">•</span>
                  <span>Peripheral Ring Road (PRR Phase-2, Devanahalli)</span>
                  <span className="text-outline-variant">•</span>
                  <span className="font-mono text-caption text-on-surface-variant">UID: KA-BLR-DEV-2026-08941</span>
                </div>
              </div>

              <div className="flex items-center gap-space-xs flex-wrap">
                <button
                  onClick={() => navigate('/officer/project/prr-phase2')}
                  className="px-space-md py-2 rounded-xl bg-surface-container-high text-primary hover:bg-surface-container-highest transition-all flex items-center gap-space-xs font-label-action text-label-action shadow-sm font-bold text-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  <span>GIS Viewport</span>
                </button>
                <button
                  onClick={() => navigate('/senior/dashboard')}
                  className="px-space-md py-2 rounded-xl bg-primary text-on-primary hover:bg-secondary transition-all flex items-center gap-space-xs font-label-action text-label-action shadow-md font-bold text-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                  <span>Senior Sign-Off Flow</span>
                </button>
              </div>
            </div>

            {/* SECTION A: ML Delay Prediction & SHAP Explainer */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
              
              {/* Delay Metric Hero Panel (5 cols) */}
              <div className="xl:col-span-5 flex flex-col gap-space-md">
                <RiskGauge
                  score={delayData.score}
                  breachDays={delayData.breachForecastDays}
                  confidence={delayData.confidenceInterval}
                  targetDate={delayData.targetDeadline}
                  revisedDate={delayData.revisedDeadline}
                />

                {/* Climate & Disaster Mini-Card */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-surface-container-high/60">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[20px] text-secondary">rainy</span>
                      <h2 className="font-subheading text-body-sm text-on-surface font-bold">
                        Spatial Disaster Vulnerability
                      </h2>
                    </div>
                    <span className="text-caption font-caption text-on-surface-variant bg-surface-container px-2 py-0.5 rounded text-xs">
                      KSRSAC Verified
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-space-sm text-xs">
                    <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
                      <div className="font-caption text-on-surface-variant">Flood Exposure</div>
                      <div className="my-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-bold text-on-surface">Zone 1</span>
                      </div>
                      <span className="text-secondary font-medium">Safe / Low</span>
                    </div>

                    <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
                      <div className="font-caption text-on-surface-variant">Waterlogging</div>
                      <div className="my-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span className="font-bold text-on-surface">Moderate</span>
                      </div>
                      <span className="text-amber-800 font-medium truncate">2.1km tributary</span>
                    </div>

                    <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
                      <div className="font-caption text-on-surface-variant">Landslide Index</div>
                      <div className="my-1 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span className="font-bold text-on-surface">Negligible</span>
                      </div>
                      <span className="text-secondary font-medium">Slope &lt; 2°</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SHAP Delay Factors Explainer (7 cols) */}
              <div className="xl:col-span-7 flex flex-col gap-space-md">
                <ShapBarChart
                  drivers={delayData.drivers}
                  summary={delayData.summary}
                />
              </div>

            </div>

            {/* SECTION B: Multi-Level Approval Workflow */}
            <ApprovalTimeline stages={approvals} />

            {/* Recommended Mitigation Action Box */}
            <div className="bg-primary-container text-on-primary rounded-2xl p-space-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg shadow-md border border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-bold text-xs uppercase">
                    AI Mitigation Recommendation
                  </span>
                  <span className="font-label-bilingual-kannada text-primary-fixed-dim text-xs">
                    ಶಿಫಾರಸು ಕ್ರಮ
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg font-bold text-on-primary">
                  {delayData.recommendation || "Convene Special Adalat hearing for Circle Rate Harmonization under Rule 14 before DC Bengaluru Rural."}
                </h3>
                <p className="text-body-sm text-primary-fixed-dim text-xs">
                  Automated SLA impact: Prevents projected 114-day statutory breach and avoids High Court injunction freeze.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActionDone(true)}
                  className={`px-4 py-2.5 rounded-xl font-label-action text-xs font-bold transition-all shadow-md flex items-center gap-2 ${
                    actionDone
                      ? 'bg-secondary text-white'
                      : 'bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {actionDone ? 'check_circle' : 'gavel'}
                  </span>
                  <span>{actionDone ? 'Adalat Hearing Scheduled' : 'Schedule Special Adalat Hearing'}</span>
                </button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
