import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TopHeader from '../components/layout/TopHeader';
import OfficerSidebar from '../components/layout/OfficerSidebar';
import { apiService } from '../services/api';

export default function OfficerDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await apiService.getProjects();
      setProjects(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <OfficerSidebar />

      <div className="pl-72">
        <TopHeader activeFlowStep="Monitor" />

        <main className="relative pt-20 bg-background w-full px-gutter-desktop py-space-lg">
          <div className="flex flex-col w-full space-y-space-lg">
            
            {/* Top Breadcrumb & Executive Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/60">
              <div className="flex items-center gap-space-xs text-on-surface-variant text-body-sm font-body-sm">
                <span className="material-symbols-outlined text-[18px] text-primary">account_balance</span>
                <span className="hover:text-primary cursor-pointer transition-colors font-medium">Officer Workspace</span>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-subheading font-bold">Land Acquisition Operations</span>
                <span className="ml-space-xs px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-bilingual-kannada text-xs">
                  ಕಾರ್ಯನಿರ್ವಾಹಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್
                </span>
              </div>

              {/* Active Step Flow Ribbon */}
              <div className="flex items-center bg-surface-container px-space-md py-1.5 rounded-xl text-caption font-caption text-on-surface-variant text-xs">
                <span className="font-medium">Find</span>
                <span className="mx-1.5 text-outline-variant">→</span>
                <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-bold shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse"></span>
                  Monitor
                </span>
                <span className="mx-1.5 text-outline-variant">→</span>
                <span className="font-medium">Predict</span>
                <span className="mx-1.5 text-outline-variant">→</span>
                <span className="font-medium">Explain</span>
                <span className="mx-1.5 text-outline-variant">→</span>
                <span className="font-medium">Prevent</span>
                <span className="mx-1.5 text-outline-variant">→</span>
                <span className="font-medium">Act</span>
              </div>
            </div>

            {/* Quick Operational Tabs */}
            <div className="flex items-center justify-between border-b border-surface-container-highest pb-space-xxs overflow-x-auto">
              <div className="flex items-center gap-space-xs min-w-max">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-space-xs px-space-md py-2 rounded-xl font-label-action text-label-action transition-all ${
                    activeTab === 'overview'
                      ? 'bg-primary text-on-primary font-bold shadow-sm'
                      : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">space_dashboard</span>
                  Dashboard Overview
                </button>

                <button
                  onClick={() => navigate('/officer/project/prr-phase2')}
                  className="flex items-center gap-space-xs px-space-md py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-action text-label-action"
                >
                  <span className="material-symbols-outlined text-[18px]">map</span>
                  Map View
                </button>

                <button
                  onClick={() => navigate('/officer/parcel/142-2A/risk')}
                  className="flex items-center gap-space-xs px-space-md py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-action text-label-action relative"
                >
                  <span className="material-symbols-outlined text-[18px]">rule</span>
                  Approvals
                  <span className="ml-1 px-1.5 py-0.2 rounded-full bg-error text-on-error text-[10px] font-bold">
                    3 Pending
                  </span>
                </button>

                <button
                  onClick={() => navigate('/senior/dashboard')}
                  className="flex items-center gap-space-xs px-space-md py-2 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-label-action text-label-action"
                >
                  <span className="material-symbols-outlined text-[18px]">gavel</span>
                  Disputes & Claims
                </button>
              </div>

              <div className="hidden lg:flex items-center gap-space-xs text-caption font-caption text-on-surface-variant text-xs">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Live Sync: K-GIS & Bhoomi Core Engine</span>
              </div>
            </div>

            {/* Four Key Stat Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              {/* Card 1 */}
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider font-bold text-xs">
                      Active Acquisitions
                    </span>
                    <div className="text-headline-md font-headline-md font-bold text-on-surface mt-1 group-hover:text-primary transition-colors text-2xl">
                      2 Projects
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[22px]">source</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant text-xs border-t border-surface-container/40">
                  <span className="truncate">Bengaluru Rural & Ramanagara</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-bold text-[11px]">
                    2 Active
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider font-bold text-xs">
                      Pending Approvals
                    </span>
                    <div className="text-headline-md font-headline-md font-bold text-on-surface mt-1 group-hover:text-primary transition-colors text-2xl">
                      3 Notices
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                    <span className="material-symbols-outlined text-[22px]">pending_actions</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant text-xs border-t border-surface-container/40">
                  <span>Section 11 & 19 Gazettes</span>
                  <span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[11px]">
                    1 Action Req.
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider font-bold text-xs">
                      Delay Prediction
                    </span>
                    <div className="text-headline-md font-headline-md font-bold text-error mt-1 flex items-baseline gap-1 text-2xl">
                      2
                      <span className="text-caption font-caption text-on-surface-variant font-normal text-xs">Parcels flagged</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-on-error-container">
                    <span className="material-symbols-outlined text-[22px]">warning</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant text-xs border-t border-surface-container/40">
                  <span className="text-error font-bold">Flagged by Spatial ML</span>
                  <span className="text-caption font-caption">Avg delay +30d</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-caption font-caption text-on-surface-variant uppercase tracking-wider font-bold text-xs">
                      Disbursal Audit
                    </span>
                    <div className="text-headline-md font-headline-md font-bold text-secondary mt-1 text-2xl">
                      91.4%
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant text-xs border-t border-surface-container/40">
                  <span>Direct Beneficiary PFMS</span>
                  <span className="text-secondary font-bold text-[11px]">On Schedule</span>
                </div>
              </div>
            </div>

            {/* Central Intelligence AI Alert Bar */}
            <div className="bg-gradient-to-r from-primary-container via-primary to-primary-container p-space-md rounded-2xl shadow-sm text-on-primary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm border border-white/10">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0 animate-bounce">
                  <span className="material-symbols-outlined text-[22px]">smart_toy</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-caption font-caption uppercase font-bold text-[10px]">
                      Predictive AI Alert
                    </span>
                    <span className="font-label-bilingual-kannada text-primary-fixed-dim text-xs">
                      ಸ್ವಯಂಚಾಲಿತ ಮುನ್ಸೂಚನೆ
                    </span>
                  </div>
                  <p className="text-body-sm font-body-sm text-surface-container-lowest mt-0.5 text-xs md:text-sm">
                    ML Model flagged <span className="font-bold text-secondary-fixed">1 parcel</span> in Ramanagara Industrial Sub-Corridor with <span className="underline decoration-secondary-fixed font-bold">+18 days projected legal bottleneck</span> due to circle rate escalation claims.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs flex-shrink-0">
                <button
                  onClick={() => navigate('/officer/parcel/142-2A/risk')}
                  className="px-space-md py-1.5 rounded-xl bg-secondary-fixed text-on-secondary-fixed font-label-action text-label-action hover:bg-secondary-fixed-dim transition-colors shadow-sm font-bold text-xs"
                >
                  Review Mitigations
                </button>
              </div>
            </div>

            {/* Primary Operations Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              
              {/* LEFT COLUMN (7 Cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-space-lg">
                
                {/* Risk Breakdown Bar Card */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/60">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-md">
                    <div>
                      <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                        Acquisition Projects by Delay Risk
                      </h2>
                      <p className="text-caption font-caption text-on-surface-variant text-xs">
                        Real-time risk scoring across 42 total monitored land parcels in active gazettes
                      </p>
                    </div>
                    <span className="px-2 py-1 rounded-lg bg-surface-container text-caption font-caption font-bold text-on-surface-variant text-xs">
                      Total: 42 Parcels
                    </span>
                  </div>

                  {/* Distribution Bar */}
                  <div className="w-full h-4 rounded-full bg-surface-container flex overflow-hidden p-0.5">
                    <div className="h-full bg-secondary rounded-l-full transition-all duration-500 hover:opacity-90" style={{ width: '57.1%' }} title="Low Risk: 24 parcels (57.1%)"></div>
                    <div className="h-full bg-amber-500 transition-all duration-500 hover:opacity-90 mx-0.5" style={{ width: '28.6%' }} title="Medium Risk: 12 parcels (28.6%)"></div>
                    <div className="h-full bg-error rounded-r-full transition-all duration-500 hover:opacity-90" style={{ width: '14.3%' }} title="High Risk: 6 parcels (14.3%)"></div>
                  </div>

                  {/* Breakdown Blocks */}
                  <div className="grid grid-cols-3 gap-space-sm mt-space-md pt-space-sm border-t border-surface-container text-xs">
                    <div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center gap-1.5 font-medium text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        <span>Low Risk</span>
                      </div>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-secondary">24</span>
                        <span className="text-on-surface-variant">57.1%</span>
                      </div>
                      <span className="text-[11px] text-on-surface-variant block mt-0.5">On Schedule</span>
                    </div>

                    <div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center gap-1.5 font-medium text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span>Medium Risk</span>
                      </div>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-amber-700">12</span>
                        <span className="text-on-surface-variant">28.6%</span>
                      </div>
                      <span className="text-[11px] text-on-surface-variant block mt-0.5">Notice Review</span>
                    </div>

                    <div className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors">
                      <div className="flex items-center gap-1.5 font-medium text-on-surface-variant">
                        <span className="w-2 h-2 rounded-full bg-error"></span>
                        <span>High Risk</span>
                      </div>
                      <div className="mt-1 flex items-baseline justify-between">
                        <span className="text-lg font-bold text-error">6</span>
                        <span className="text-on-surface-variant">14.3%</span>
                      </div>
                      <span className="text-[11px] text-error font-bold block mt-0.5">Intervention Req.</span>
                    </div>
                  </div>
                </div>

                {/* High-Risk Critical Projects Section */}
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/60">
                  <div className="flex items-center justify-between mb-space-md">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-error text-[22px]">notification_important</span>
                      <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold">
                        Critical Projects Requiring Action
                      </h2>
                    </div>
                    <span className="text-caption font-caption text-on-surface-variant text-xs">
                      {projects.length} Projects Monitored
                    </span>
                  </div>

                  <div className="space-y-space-md">
                    {loading ? (
                      <div className="py-8 text-center text-on-surface-variant text-sm">
                        Loading monitored projects...
                      </div>
                    ) : (
                      projects.map((project) => {
                        const isHigh = project.risk === 'High';

                        return (
                          <div
                            key={project.id}
                            className="p-space-md rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col space-y-space-sm group border border-surface-container"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 rounded-md bg-surface-container-highest text-primary font-caption font-bold text-xs">
                                    {project.code || project.id}
                                  </span>
                                  <span
                                    className={`px-2 py-0.5 rounded-full font-caption font-bold text-xs flex items-center gap-1 ${
                                      isHigh
                                        ? 'bg-red-100 text-error'
                                        : 'bg-amber-100 text-amber-900'
                                    }`}
                                  >
                                    <span className={`w-1.5 h-1.5 rounded-full ${isHigh ? 'bg-error animate-ping' : 'bg-amber-500'}`}></span>
                                    {project.risk} Risk ({project.riskScore}%)
                                  </span>
                                </div>
                                <h3 className="text-subheading font-subheading text-on-surface mt-1 group-hover:text-primary transition-colors font-bold text-base">
                                  {project.name} ({project.taluk || project.location})
                                </h3>
                              </div>

                              <span
                                className={`px-2.5 py-1 rounded-lg text-caption font-bold self-start sm:self-center text-xs ${
                                  isHigh ? 'bg-error-container text-on-error-container' : 'bg-tertiary-fixed text-on-tertiary-fixed'
                                }`}
                              >
                                {project.status}
                              </span>
                            </div>

                            {/* Context Details */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs text-body-sm font-body-sm text-on-surface-variant bg-surface-container-lowest p-space-sm rounded-xl text-xs border border-surface-container/60">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-outline">report</span>
                                <span><strong>Bottleneck:</strong> {project.primaryBottleneck}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] text-outline">schedule</span>
                                <span><strong>Projected Delay:</strong> +{project.breachForecastDays} Days beyond Gazette</span>
                              </div>
                            </div>

                            {/* Footer Action */}
                            <div className="flex items-center justify-between pt-space-xs">
                              <div className="flex items-center gap-space-xs text-caption font-caption text-on-surface-variant text-xs">
                                <span>Affected: {project.affectedLandowners} Landowners</span>
                                <span>•</span>
                                <span>Survey No. {project.surveyRange}</span>
                              </div>
                              <button
                                onClick={() => navigate(`/officer/project/${project.id}`)}
                                className="flex items-center gap-1 px-space-md py-1.5 rounded-xl bg-primary text-on-primary font-label-action text-label-action hover:bg-secondary transition-all shadow-sm font-bold text-xs"
                              >
                                <span>Inspect Project & Parcels</span>
                                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN (5 Cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-space-lg">
                
                {/* Quick Spatial Preview Widget */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/60 flex flex-col">
                  <div className="flex items-center justify-between mb-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">map</span>
                      <h3 className="font-subheading text-body-sm font-bold text-on-surface">
                        Spatial Quick-Trace View
                      </h3>
                    </div>
                    <Link
                      to="/officer/project/prr-phase2"
                      className="text-caption font-caption text-primary hover:text-secondary font-bold text-xs"
                    >
                      Open Full GIS →
                    </Link>
                  </div>

                  <div className="relative h-56 rounded-xl overflow-hidden bg-primary/10 border border-surface-container">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8VQHB2y4L3l-b4Qd8XwlsS3viZAFGvI-DGnLO6LIRaolGctxmBGBLLQv1U-_EPKbVtRdSvuMnDPJspe8ExtoKgIsQChVuYEL1ZFQpEwW1B6FJyreOOI1VgH9PCl_UhVoYf-OKgMAg9OlP-k9LCs3xf0goWeG0oDbbWY5e6wAoIMvGa0ni0K8VcwYtTP4wdA_Qzw7dPpn3vLPejpFoGGb-3VFrhw2O7KH6Oo60t6_i5qgRNN-H0w')" }}>
                      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[0.5px]"></div>
                      <div className="absolute top-3 left-3 bg-surface-container-lowest/95 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-bold text-primary shadow">
                        Road Expansion – North Bengaluru Corridor
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-surface-container-lowest/95 backdrop-blur p-2 rounded-xl text-xs">
                        <span>High Risk Polygon: <strong>Sy. 142/2A</strong></span>
                        <Link
                          to="/officer/project/prr-phase2"
                          className="px-2 py-1 bg-primary text-white rounded-lg font-semibold text-[11px]"
                        >
                          Trace
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statutory Activity Feed Mini */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/60 space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="font-subheading text-body-sm font-bold text-on-surface">
                      Recent Statutory Audit Events
                    </h3>
                    <span className="text-caption font-caption text-secondary font-bold text-xs">
                      Live Stream
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-surface-container-low border border-surface-container">
                      <div className="flex justify-between font-semibold text-primary">
                        <span>Section 19 Declaration Gazetted</span>
                        <span className="text-on-surface-variant font-normal">2h ago</span>
                      </div>
                      <p className="text-on-surface-variant mt-0.5">
                        Devanahalli Taluk: Sy. 142/2A prelim award published for review.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-container-low border border-surface-container">
                      <div className="flex justify-between font-semibold text-amber-800">
                        <span>XGBoost Delay Risk Triggered</span>
                        <span className="text-on-surface-variant font-normal">4h ago</span>
                      </div>
                      <p className="text-on-surface-variant mt-0.5">
                        SHAP driver detected +93% circle rate disparity in Ramanagara.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
