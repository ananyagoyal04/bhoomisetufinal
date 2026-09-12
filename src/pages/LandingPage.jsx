import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthRole } from '../context/AuthRoleContext';

export default function LandingPage() {
  const { setRole, language, toggleLanguage, setIsTechStackOpen } = useAuthRole();
  const navigate = useNavigate();

  const handleRoleSelect = (roleKey, targetRoute) => {
    setRole(roleKey);
    navigate(targetRoute);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col items-center justify-between p-gutter-mobile md:p-gutter-desktop">
      <main className="w-full max-w-7xl mx-auto bg-surface-container-lowest rounded-2xl shadow-[0_10px_28px_rgba(11,79,74,0.08)] p-space-md md:p-space-xl border border-surface-container-high/60 my-4">
        
        {/* Top Statutory Bar */}
        <header className="w-full bg-surface-container-low px-space-md py-space-xs rounded-xl mb-space-lg shadow-sm border border-surface-container">
          <div className="flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-caption text-caption">
            <div className="flex items-center space-x-space-xs">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span className="font-medium tracking-wide">
                ಕಂದಾಯ ಇಲಾಖೆ | Department of Revenue, Government of Karnataka
              </span>
            </div>
            <div className="flex items-center space-x-space-md">
              <button
                onClick={() => setIsTechStackOpen(true)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-primary font-semibold hover:bg-primary hover:text-white transition-all text-xs border border-surface-container-high cursor-pointer hover:scale-105 active:scale-95"
                title="View Bhoomi Setu Technical Architecture"
              >
                <span className="material-symbols-outlined text-[15px]">account_tree</span>
                <span>Tech Stack</span>
              </button>
              <span className="flex items-center gap-1 font-semibold text-primary">
                <span className="material-symbols-outlined text-[14px]">gavel</span> KLA Act 2013 Compliant
              </span>
              <button
                onClick={toggleLanguage}
                className="px-2.5 py-1 rounded bg-surface-container-highest text-primary font-bold hover:bg-primary hover:text-white transition-colors text-xs cursor-pointer"
              >
                {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Portal Banner */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary-container to-secondary p-space-xl text-on-primary shadow-xl mb-space-xl">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-fixed opacity-10 blur-3xl pointer-events-none"></div>
          <div className="absolute right-1/4 -bottom-20 w-64 h-64 rounded-full bg-tertiary-fixed-dim opacity-10 blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-space-lg">
            <div className="flex items-start gap-space-md max-w-3xl">
              <div className="flex-shrink-0 bg-surface-container-lowest/15 p-3 rounded-2xl shadow-md border border-white/20">
                <span className="material-symbols-outlined text-[42px] text-primary-fixed">
                  satellite_alt
                </span>
              </div>
              <div className="flex flex-col space-y-space-xxs">
                <div className="inline-flex items-center gap-2 px-space-xs py-0.5 rounded-full bg-primary/40 w-fit text-primary-fixed">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  <span className="font-caption text-caption uppercase tracking-wider text-[11px] font-semibold">
                    Official Spatial Governance Portal
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg md:text-3xl text-on-primary font-bold">
                  ಕರ್ನಾಟಕ ಭೂಸ್ವಾಧೀನ ನಿರ್ವಹಣೆ ಮತ್ತು ಪ್ರಾದೇಶಿಕ ಪೋರ್ಟಲ್
                </h1>
                <p className="font-subheading text-subheading text-primary-fixed-dim font-medium text-lg">
                  Karnataka Land Acquisition Management & Spatial Portal (Bhoomi Setu)
                </p>
                <p className="font-body-sm text-body-sm text-surface-container-high pt-space-xxs leading-relaxed max-w-2xl text-xs md:text-sm">
                  Unified state-wide spatial intelligence platform bridging statutory surveys, ML dispute propensity forecasting, direct bank compensation disbursement, and autonomous citizen land accountability.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end justify-center self-stretch md:self-auto gap-space-xs border-t md:border-t-0 md:border-l border-primary-fixed/20 pt-space-sm md:pt-0 md:pl-space-lg">
              <div className="flex items-center gap-2 bg-primary/60 px-space-md py-space-xs rounded-xl text-primary-fixed">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">shield_with_heart</span>
                <span className="font-label-action text-label-action text-right font-bold text-xs">Secured Spatial Mesh</span>
              </div>
              <div className="text-right">
                <p className="font-caption text-caption text-primary-fixed-dim uppercase tracking-wider text-[10px]">Spatial Engine</p>
                <p className="font-body-sm text-body-sm font-semibold text-on-primary text-xs">KSRSAC Geo-Cadastral Sync</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Flow Chevron Strip */}
        <section className="mb-space-xl">
          <div className="bg-surface-container-low rounded-2xl p-space-md shadow-sm border border-surface-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm mb-space-sm">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">account_tree</span>
                <h2 className="font-subheading text-subheading text-primary font-bold">Core Acquisition Engine Lifecycle</h2>
              </div>
              <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold text-[11px]">
                End-to-End Statutory Pipeline
              </span>
            </div>

            {/* Chevron Steps */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-space-xs text-center font-label-action text-label-action">
              <div className="flex flex-col items-center justify-center p-space-sm rounded-xl bg-surface-container-lowest text-primary shadow-sm hover:shadow transition-all border border-surface-container">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-secondary">travel_explore</span>
                  <span className="font-bold">Find</span>
                </div>
                <span className="font-caption text-[11px] text-on-surface-variant mt-0.5">ಹುಡುಕಿ • Survey</span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-sm rounded-xl bg-surface-container-lowest text-primary shadow-sm hover:shadow transition-all border border-surface-container">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-secondary">radar</span>
                  <span className="font-bold">Monitor</span>
                </div>
                <span className="font-caption text-[11px] text-on-surface-variant mt-0.5">ಮೇಲ್ವಿಚಾರಣೆ • GIS</span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-sm rounded-xl bg-tertiary-fixed text-tertiary shadow-sm hover:shadow transition-all border border-amber-300">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-amber-900">psychology</span>
                  <span className="font-bold">Predict</span>
                </div>
                <span className="font-caption text-[11px] text-on-tertiary-fixed-variant mt-0.5 font-semibold">ಊಹಿಸಿ • AI Delay</span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-sm rounded-xl bg-surface-container-lowest text-primary shadow-sm hover:shadow transition-all border border-surface-container">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-secondary">lightbulb</span>
                  <span className="font-bold">Explain</span>
                </div>
                <span className="font-caption text-[11px] text-on-surface-variant mt-0.5">ವಿವರಿಸಿ • XAI SHAP</span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-sm rounded-xl bg-surface-container-lowest text-primary shadow-sm hover:shadow transition-all border border-surface-container">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-secondary">gavel</span>
                  <span className="font-bold">Prevent</span>
                </div>
                <span className="font-caption text-[11px] text-on-surface-variant mt-0.5">ತಡೆಯಿರಿ • Injunction</span>
              </div>

              <div className="flex flex-col items-center justify-center p-space-sm rounded-xl bg-primary text-on-primary shadow-md hover:bg-secondary transition-all">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed">check_circle</span>
                  <span className="font-bold">Act</span>
                </div>
                <span className="font-caption text-[11px] text-primary-fixed-dim mt-0.5">ಕ್ರಮ • Award DBT</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pilot Validation Stats Strip */}
        <section className="mb-space-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs mb-space-sm">
            <div>
              <span className="font-caption text-caption text-secondary uppercase font-bold tracking-wider text-[11px]">
                Pilot Validation Data
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                Bengaluru Rural & Ramanagara Corridor
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 text-on-surface-variant font-caption text-caption bg-surface-container px-space-xs py-1 rounded-md text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Active Pilot Pulse
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Stat 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                <span className="font-caption text-caption uppercase font-semibold text-xs">Parcels Mapped</span>
                <span className="material-symbols-outlined text-secondary">map</span>
              </div>
              <div className="space-y-1">
                <div className="font-display-hero text-headline-lg font-bold text-primary">
                  48.5 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Ha</span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant text-xs">
                  ನಕ್ಷೆ ಮಾಡಲಾದ ಪಾರ್ಸೆಲ್‌ಗಳು • 42 Survey Nos
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-caption font-caption text-secondary text-xs">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[14px]">north_east</span> Pilot Validation
                </span>
                <span className="text-on-surface-variant">K-GIS Validated</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                <span className="font-caption text-caption uppercase font-semibold text-xs">Active Pilot Nodes</span>
                <span className="material-symbols-outlined text-secondary">location_on</span>
              </div>
              <div className="space-y-1">
                <div className="font-display-hero text-headline-lg font-bold text-primary">
                  2 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Districts</span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant text-xs">
                  ಗುರಿ ಪೈಲಟ್ ಜಿಲ್ಲೆಗಳು • 2 Taluk Nodes
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-caption font-caption text-secondary text-xs">
                <span>BLR Rural / RMG</span>
                <span className="px-1.5 py-0.5 bg-secondary-fixed text-on-secondary-fixed-variant rounded font-semibold text-[10px]">
                  ACTIVE REGISTRY
                </span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                <span className="font-caption text-caption uppercase font-semibold text-xs">Compensation Disbursed</span>
                <span className="material-symbols-outlined text-secondary">account_balance</span>
              </div>
              <div className="space-y-1">
                <div className="font-display-hero text-headline-lg font-bold text-primary">
                  ₹14.8 <span className="font-body-sm text-body-sm font-normal text-on-surface-variant">Cr</span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant text-xs">
                  ಪರಿಹಾರ ವಿತರಿಸಲಾಗಿದೆ • DBT Direct Aadhaar
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-caption font-caption text-secondary text-xs">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[14px]">task_alt</span> 100% Escrow Trace
                </span>
                <span className="text-on-surface-variant">Zero Leakage</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container">
              <div className="flex items-center justify-between text-on-surface-variant mb-space-xs">
                <span className="font-caption text-caption uppercase font-semibold text-xs">AI Dispute Accuracy</span>
                <span className="material-symbols-outlined text-secondary">auto_graph</span>
              </div>
              <div className="space-y-1">
                <div className="font-display-hero text-headline-lg font-bold text-primary">
                  94.2<span className="font-body-sm text-body-sm font-normal text-on-surface-variant">%</span>
                </div>
                <p className="font-caption text-caption text-on-surface-variant text-xs">
                  ವಿವಾದ ಮುನ್ಸೂಚನೆ ನಿಖರತೆ • XAI Audited
                </p>
              </div>
              <div className="mt-space-sm pt-space-xs flex items-center justify-between text-caption font-caption text-secondary text-xs">
                <span className="text-amber-800 font-bold">6 Early Injunctions Averted</span>
                <span className="text-on-surface-variant">XGBoost ML</span>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Role Login Cards */}
        <section className="mb-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="px-space-sm py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-caption text-caption uppercase font-bold text-xs">
              ಪಾತ್ರ ಆಯ್ಕೆ | Authorized Role Gateway
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-space-xs font-bold text-2xl md:text-3xl">
              Select Your Governance Access Level
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1 text-sm">
              Seamlessly structured for civic revenue engineers, executive state magistracy, and verified citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-stretch">
            
            {/* Role 1: Government Officer */}
            <div className="group relative flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-xl shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container hover:border-primary">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">engineering</span>
                  </div>
                  <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption font-bold text-xs">
                    ಅಧಿಕಾರಿ • Role 01
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-bold">Government Officer</h3>
                <p className="font-label-bilingual-kannada text-label-bilingual-kannada text-secondary mb-space-sm font-semibold text-xs">
                  ಕ್ಷೇತ್ರ ಮತ್ತು ಪರಿಶೀಲನಾ ಅಧಿಕಾರಿ
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed text-xs">
                  Operational cockpit for field surveyors, revenue inspectors, and nodal verification officers conducting cadastral boundaries, ground validations, and ML risk evaluations.
                </p>

                <ul className="space-y-space-xs mb-space-lg text-body-sm font-body-sm text-on-surface-variant text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">fact_check</span>
                    <span>Cadastral Survey & Geo-tagging Inspections</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">warning</span>
                    <span>AI Delay Forecasts & Parcel Risk Scores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">satellite_alt</span>
                    <span>K-GIS Drone Orthomosaic Overlay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">rule_folder</span>
                    <span>Section 11 & Section 19 Notifications</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-space-sm pt-space-md bg-surface-container-low -mx-space-xl -mb-space-xl p-space-lg rounded-b-2xl border-t border-surface-container">
                <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs">
                  <span>Auth Protocol: <strong>K-Kavach SSO</strong></span>
                  <span className="text-secondary font-semibold">OTP / Bio-key</span>
                </div>
                <button
                  onClick={() => handleRoleSelect('officer', '/officer/dashboard')}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-on-primary font-label-action text-label-action py-space-sm px-space-md rounded-xl shadow-sm hover:shadow transition-all group-hover:scale-[1.01]"
                  type="button"
                >
                  <span className="font-bold">Enter Officer Portal</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Role 2: Senior Official */}
            <div className="group relative flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-xl shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container hover:border-primary">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                    <span className="material-symbols-outlined text-[28px]">account_balance</span>
                  </div>
                  <span className="px-space-xs py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-caption text-caption font-bold text-xs">
                    ಉನ್ನತ ಅಧಿಕಾರಿ • Role 02
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-bold">Senior Official</h3>
                <p className="font-label-bilingual-kannada text-label-bilingual-kannada text-secondary mb-space-sm font-semibold text-xs">
                  ತಾಲೂಕು / ಜಿಲ್ಲಾಧಿಕಾರಿ / ರಾಜ್ಯ ಹಂತ
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed text-xs">
                  High-level analytical dashboard for Taluk Tahsildars, District Deputy Commissioners, and Revenue Secretaries overseeing acquisition velocity, escrow releases, and multi-tier sanctions.
                </p>

                <ul className="space-y-space-xs mb-space-lg text-body-sm font-body-sm text-on-surface-variant text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">insights</span>
                    <span>Cross-District Acquisition Velocity Metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">gavel</span>
                    <span>High Court & Tribunal Injunction Trackers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">currency_rupee</span>
                    <span>Section 19 Award & Escrow Disbursement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">family_restroom</span>
                    <span>R&R Resettlement Colony Compliance</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-space-sm pt-space-md bg-surface-container-low -mx-space-xl -mb-space-xl p-space-lg rounded-b-2xl border-t border-surface-container">
                <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs">
                  <span>Executive Clearance: <strong>IAS / KAS Grade</strong></span>
                  <span className="text-secondary font-semibold">e-Sign 256-bit</span>
                </div>
                <button
                  onClick={() => handleRoleSelect('senior', '/senior/dashboard')}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-on-primary font-label-action text-label-action py-space-sm px-space-md rounded-xl shadow-sm hover:shadow transition-all group-hover:scale-[1.01]"
                  type="button"
                >
                  <span className="font-bold">Enter Executive Portal</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Role 3: Verified Citizen */}
            <div className="group relative flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-space-xl shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container hover:border-primary">
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/40 flex items-center justify-center text-tertiary group-hover:bg-tertiary-container group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[28px]">public</span>
                  </div>
                  <span className="px-space-xs py-1 rounded-full bg-surface-container text-on-surface-variant font-caption text-caption font-bold text-xs">
                    ನಾಗರಿಕ • Role 03
                  </span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary mb-1 font-bold">Verified Citizen</h3>
                <p className="font-label-bilingual-kannada text-label-bilingual-kannada text-secondary mb-space-sm font-semibold text-xs">
                  ಭೂಮಾಲೀಕರು ಮತ್ತು ಸಾರ್ವಜನಿಕರು
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed text-xs">
                  Direct civic portal for surveyed landowners to track survey records, view statutory compensation calculators, check Safe & Clear titles, and discover unencumbered public land banks.
                </p>

                <ul className="space-y-space-xs mb-space-lg text-body-sm font-body-sm text-on-surface-variant text-xs">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">account_balance_wallet</span>
                    <span>My Land Dossier (Sri K. Ramamurthy)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">calculate</span>
                    <span>RFCTLARR 2013 Compensation Calculator</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">travel_explore</span>
                    <span>Public Land Bank & KIADB Search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]">notifications_active</span>
                    <span>Gazette Notices & Hearing Alerts</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-space-sm pt-space-md bg-surface-container-low -mx-space-xl -mb-space-xl p-space-lg rounded-b-2xl border-t border-surface-container">
                <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs">
                  <span>Demo Record: <strong>Sri K. Ramamurthy</strong></span>
                  <span className="text-secondary font-semibold">Sy. 142/2A</span>
                </div>
                <button
                  onClick={() => handleRoleSelect('citizen', '/citizen/my-land')}
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-on-primary font-label-action text-label-action py-space-sm px-space-md rounded-xl shadow-sm hover:shadow transition-all group-hover:scale-[1.01]"
                  type="button"
                >
                  <span className="font-bold">Enter Citizen Portal</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </section>

      </main>

      <footer className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-on-surface-variant border-t border-surface-container">
        <span>© 2026 Department of Revenue, Government of Karnataka • Bhoomi Setu Spatial Portal</span>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsTechStackOpen(true)}
            className="hover:text-primary underline font-medium"
          >
            System Architecture & Roadmap
          </button>
          <span>•</span>
          <span>KLA Act 2013 Statutory Engine</span>
        </div>
      </footer>
    </div>
  );
}
