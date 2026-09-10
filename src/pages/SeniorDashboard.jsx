import React, { useState } from 'react';
import TopHeader from '../components/layout/TopHeader';
import OfficerSidebar from '../components/layout/OfficerSidebar';
import AffidavitModal from '../components/modals/AffidavitModal';
import { useAuthRole } from '../context/AuthRoleContext';

export default function SeniorDashboard() {
  const { isAffidavitSigned, setIsAffidavitSigned } = useAuthRole();
  const [affidavitModalOpen, setAffidavitModalOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState({ id: 'WP-4821/2025', survey: 'Sy. 142/2A' });

  const handleOpenAffidavit = (caseId, survey) => {
    setSelectedCase({ id: caseId, survey });
    setAffidavitModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <OfficerSidebar />

      <div className="pl-72">
        <TopHeader activeFlowStep="Prevent" />

        <main className="relative pt-20 bg-background w-full px-gutter-desktop py-space-lg">
          <div className="flex flex-col w-full space-y-space-lg">
            
            {/* Top Statutory Executive Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/60">
              <div className="flex items-center gap-space-xs text-on-surface-variant text-body-sm">
                <span className="material-symbols-outlined text-[20px] text-primary">account_balance</span>
                <span className="font-semibold text-primary">State Executive Magistracy</span>
                <span className="text-outline-variant">/</span>
                <span className="text-on-surface font-subheading font-bold">Cabinet & DC Strategic Oversight</span>
                <span className="ml-space-xs px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold text-[10px]">
                  STATEWIDE PULSE
                </span>
              </div>

              {/* Status Toggle indicator */}
              <div className="flex items-center gap-2">
                <span className="text-caption font-caption text-on-surface-variant text-xs">
                  DM Sign-off Status:
                </span>
                <button
                  onClick={() => setIsAffidavitSigned(!isAffidavitSigned)}
                  className={`px-3 py-1 rounded-full text-caption font-caption font-bold transition-all flex items-center gap-1.5 shadow-sm text-xs ${
                    isAffidavitSigned
                      ? 'bg-secondary text-white'
                      : 'bg-amber-100 text-amber-900 border border-amber-300'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isAffidavitSigned ? 'bg-white' : 'bg-amber-600 animate-pulse'}`}></span>
                  <span>{isAffidavitSigned ? 'Approved & Signed (IAS Token Valid)' : 'Pending Executive Review'}</span>
                </button>
              </div>
            </div>

            {/* Four KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              
              {/* KPI 1 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">ತಡೆಗಟ್ಟಲಾದ ವ್ಯಾಜ್ಯಗಳು</span>
                    <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                      Bottlenecks Neutralized
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed">
                    <span className="material-symbols-outlined text-[22px]">gavel</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-display-hero text-headline-lg text-on-surface font-bold text-3xl">14</span>
                  <span className="font-label-action text-label-action text-error font-bold uppercase text-xs">High-Impact</span>
                </div>
                <div className="mt-space-sm pt-space-xs bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs border-t border-surface-container">
                  <span>Court Injunctions Forestalled</span>
                  <span className="font-bold text-secondary">₹340 Cr Saved</span>
                </div>
              </div>

              {/* KPI 2 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">ಪರಿಹಾರ ವಿತರಣೆ ಸಾಮರ್ಥ್ಯ</span>
                    <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                      Compensation Efficiency
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[22px]">account_balance</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-display-hero text-headline-lg text-on-surface font-bold text-3xl">92.6%</span>
                  <span className="font-subheading text-secondary font-bold text-xs">DBT Rate</span>
                </div>
                <div className="mt-space-sm pt-space-xs bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs border-t border-surface-container">
                  <span>Aadhaar-Linked Escrow</span>
                  <span className="font-bold text-secondary">Zero Leakage</span>
                </div>
              </div>

              {/* KPI 3 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">ಸರಾಸರಿ ಸ್ವಾಧೀನ ವೇಗ</span>
                    <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                      Median Velocity
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">speed</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-display-hero text-headline-lg text-on-surface font-bold text-3xl">8.4</span>
                  <span className="font-subheading text-on-surface-variant font-bold text-xs">Months</span>
                </div>
                <div className="mt-space-sm pt-space-xs bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs border-t border-surface-container">
                  <span>Statewide Baseline: 14.8 Mo</span>
                  <span className="font-bold text-secondary">↓ 43.2% faster</span>
                </div>
              </div>

              {/* KPI 4 */}
              <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-all border border-surface-container-high/60">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">ಒಟ್ಟು ಎಸ್ಕ್ರೊ ನಿಧಿ</span>
                    <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                      Active Escrow Pool
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                    <span className="material-symbols-outlined text-[22px]">account_balance_wallet</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-display-hero text-headline-lg text-primary font-bold text-3xl">₹4,650</span>
                  <span className="font-subheading text-on-surface-variant font-bold text-xs">Cr</span>
                </div>
                <div className="mt-space-sm pt-space-xs bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg pb-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs border-t border-surface-container">
                  <span>Treasury Bank Synchronized</span>
                  <span className="font-bold text-primary">100% Trace</span>
                </div>
              </div>

            </div>

            {/* Visual Analytics & Cross-District Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
              
              {/* District Stacked Progress (7 cols) */}
              <div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <div>
                      <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">ಜಿಲ್ಲಾವಾರು ಯೋಜನೆಗಳ ಸ್ಥಿತಿ</span>
                      <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg">
                        Acquisition Projects by District
                      </h2>
                    </div>
                    <div className="flex items-center gap-space-xs text-caption font-caption text-xs">
                      <span className="inline-flex items-center gap-1 font-semibold text-secondary">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span> Low
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-amber-700 ml-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span> Med
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-error ml-1">
                        <span className="w-2 h-2 rounded-full bg-error"></span> High
                      </span>
                    </div>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md text-xs">
                    Active acquisition projects segregated by institutional friction risk scoring in Karnataka southern revenue division.
                  </p>

                  <div className="space-y-space-md text-xs">
                    {/* Bengaluru Rural */}
                    <div className="bg-surface-container-low p-space-sm rounded-xl space-y-space-xs border border-surface-container">
                      <div className="flex items-center justify-between font-bold text-on-surface">
                        <span>Bengaluru Rural (ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ)</span>
                        <span className="text-on-surface-variant font-normal">6 Active Projects</span>
                      </div>
                      <div className="h-5 w-full bg-surface-container-highest rounded-lg overflow-hidden flex shadow-inner">
                        <div className="h-full bg-secondary flex items-center justify-center text-white font-bold" style={{ width: '50%' }}>3 Low</div>
                        <div className="h-full bg-amber-500 flex items-center justify-center text-white font-bold" style={{ width: '33.3%' }}>2 Med</div>
                        <div className="h-full bg-error flex items-center justify-center text-white font-bold" style={{ width: '16.7%' }}>1 High</div>
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant">
                        <span>PRR Phase-2, Dobbspet Ind. Exp</span>
                        <span className="font-bold text-error">Devanahalli Sy 142 Action Required</span>
                      </div>
                    </div>

                    {/* Bengaluru Urban */}
                    <div className="bg-surface-container-low p-space-sm rounded-xl space-y-space-xs border border-surface-container">
                      <div className="flex items-center justify-between font-bold text-on-surface">
                        <span>Bengaluru Urban (ಬೆಂಗಳೂರು ನಗರ)</span>
                        <span className="text-on-surface-variant font-normal">4 Active Projects</span>
                      </div>
                      <div className="h-5 w-full bg-surface-container-highest rounded-lg overflow-hidden flex shadow-inner">
                        <div className="h-full bg-secondary flex items-center justify-center text-white font-bold" style={{ width: '75%' }}>3 Low</div>
                        <div className="h-full bg-amber-500 flex items-center justify-center text-white font-bold" style={{ width: '25%' }}>1 Med</div>
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant">
                        <span>Metro Phase 3A, Peripheral Link</span>
                        <span className="font-bold text-secondary">On Track (98% Awarded)</span>
                      </div>
                    </div>

                    {/* Ramanagara */}
                    <div className="bg-surface-container-low p-space-sm rounded-xl space-y-space-xs border border-surface-container">
                      <div className="flex items-center justify-between font-bold text-on-surface">
                        <span>Ramanagara (ರಾಮನಗರ)</span>
                        <span className="text-on-surface-variant font-normal">2 Active Projects</span>
                      </div>
                      <div className="h-5 w-full bg-surface-container-highest rounded-lg overflow-hidden flex shadow-inner">
                        <div className="h-full bg-amber-500 flex items-center justify-center text-white font-bold" style={{ width: '50%' }}>1 Med</div>
                        <div className="h-full bg-secondary flex items-center justify-center text-white font-bold" style={{ width: '50%' }}>1 Low</div>
                      </div>
                      <div className="flex justify-between text-[11px] text-on-surface-variant">
                        <span>Bidadi Industrial Corridor</span>
                        <span className="font-bold text-amber-800">R&R Plot Allotment In Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Stage Split (5 cols) */}
              <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container-high/60">
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface text-lg mb-1">
                    State Statutory Stage Split
                  </h3>
                  <p className="text-caption font-caption text-on-surface-variant text-xs mb-space-md">
                    Parcels currently progressing through RFCTLARR 2013 milestones
                  </p>

                  <div className="space-y-space-sm text-xs">
                    <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low border border-surface-container">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-primary flex-shrink-0"></span>
                        <div>
                          <div className="font-bold text-on-surface">Section 11(1)</div>
                          <span className="text-on-surface-variant">Preliminary Notification</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-primary text-sm">42%</span>
                        <span className="block text-on-surface-variant">68 Parcels</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low border border-surface-container">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-secondary flex-shrink-0"></span>
                        <div>
                          <div className="font-bold text-on-surface">Section 19(1)</div>
                          <span className="text-on-surface-variant">Declaration of Acquisition</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-secondary text-sm">33%</span>
                        <span className="block text-on-surface-variant">54 Parcels</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-space-sm rounded-xl bg-surface-container-low border border-surface-container">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim flex-shrink-0"></span>
                        <div>
                          <div className="font-bold text-on-surface">Section 23 / 30</div>
                          <span className="text-on-surface-variant">Award & Escrow Disbursal</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-amber-800 text-sm">25%</span>
                        <span className="block text-on-surface-variant">40 Parcels</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-space-md pt-space-xs bg-surface-container-high/50 p-space-xs rounded-xl flex items-center gap-space-xs text-caption font-caption text-on-surface-variant text-xs">
                  <span className="material-symbols-outlined text-[16px] text-secondary">info</span>
                  <span>Average time in Section 19 reduced by 48 days via automated public objection hearings.</span>
                </div>
              </div>

            </div>

            {/* High-Court & Tribunal Legal Disputes Tracker */}
            <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm space-y-space-md border border-surface-container-high/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-bilingual-kannada text-error font-semibold text-xs">
                      ಉಚ್ಚ ನ್ಯಾಯಾಲಯ ಮತ್ತು ನ್ಯಾಯಮಂಡಳಿ ವ್ಯಾಜ್ಯ ಟ್ರ್ಯಾಕರ್
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-space-xs text-lg">
                    <span>High-Court & Tribunal Legal Disputes Tracker</span>
                    <span className="px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-caption text-caption font-bold text-xs">
                      2 Active Alerts
                    </span>
                  </h2>
                </div>

                <div className="flex items-center gap-space-xs">
                  <span className="text-caption font-caption text-on-surface-variant text-xs">
                    Automated Stay Risk Prediction Engine Active
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-body-sm font-body-sm text-xs">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-caption text-caption uppercase tracking-wider font-bold">
                      <th className="py-space-sm px-space-md rounded-l-xl">Case ID & Court</th>
                      <th className="py-space-sm px-space-md">Survey No. / Location</th>
                      <th className="py-space-sm px-space-md">Dispute Type</th>
                      <th className="py-space-sm px-space-md">Stay Injunction Risk</th>
                      <th className="py-space-sm px-space-md">Next Statutory Milestone</th>
                      <th className="py-space-sm px-space-md rounded-r-xl text-right">Preventive Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    
                    {/* Row 1 */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-space-md px-space-md font-bold text-primary">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2 h-2 rounded-full bg-error"></span>
                          <span>WP-4821/2025</span>
                        </div>
                        <span className="block text-caption font-caption text-on-surface-variant font-normal">
                          High Court of Karnataka (Principal Bench)
                        </span>
                      </td>

                      <td className="py-space-md px-space-md">
                        <div className="font-bold text-on-surface">Sy. 142/2A</div>
                        <div className="text-caption font-caption text-on-surface-variant">Devanahalli (BLR Rural)</div>
                      </td>

                      <td className="py-space-md px-space-md">
                        <span className="px-space-xs py-0.5 rounded bg-surface-container font-caption text-caption font-semibold text-on-surface">
                          Circle Rate Valuation Contest
                        </span>
                        <div className="text-caption font-caption text-on-surface-variant mt-0.5">Disparity claimed on NH-648 frontage</div>
                      </td>

                      <td className="py-space-md px-space-md">
                        <span className="px-space-sm py-0.5 rounded-full bg-error-container text-on-error-container font-caption text-caption font-bold">
                          84% Critical Stay Risk
                        </span>
                        <div className="w-28 h-1.5 bg-surface-container-highest rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-error h-full rounded-full" style={{ width: '84%' }}></div>
                        </div>
                      </td>

                      <td className="py-space-md px-space-md">
                        <div className="font-bold text-on-surface">Hearing: Feb 12, 2026</div>
                        <span className="text-caption font-caption text-secondary font-medium">Court Hall 4 (Hon. Justice Rao)</span>
                      </td>

                      <td className="py-space-md px-space-md text-right">
                        <button
                          onClick={() => handleOpenAffidavit('WP-4821/2025', 'Sy. 142/2A')}
                          className="inline-flex items-center gap-1 px-space-md py-space-xs bg-primary text-on-primary rounded-xl font-label-action text-xs font-bold hover:bg-secondary transition-colors shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[16px]">draw</span>
                          <span>{isAffidavitSigned ? 'Affidavit Signed' : 'Review Affidavit'}</span>
                        </button>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-surface-container-low transition-colors">
                      <td className="py-space-md px-space-md font-bold text-primary">
                        <div className="flex items-center gap-space-xs">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          <span>OBJ-RMG-2026-19</span>
                        </div>
                        <span className="block text-caption font-caption text-on-surface-variant font-normal">
                          SLAO Revenue Court Bidadi
                        </span>
                      </td>

                      <td className="py-space-md px-space-md">
                        <div className="font-bold text-on-surface">Sy. 89/1B</div>
                        <div className="text-caption font-caption text-on-surface-variant">Bidadi Hub (Ramanagara)</div>
                      </td>

                      <td className="py-space-md px-space-md">
                        <span className="px-space-xs py-0.5 rounded bg-surface-container font-caption text-caption font-semibold text-on-surface">
                          R&R Commercial Shed Tranche
                        </span>
                        <div className="text-caption font-caption text-on-surface-variant mt-0.5">Plot allocation harmonization</div>
                      </td>

                      <td className="py-space-md px-space-md">
                        <span className="px-space-sm py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-bold">
                          45% Moderate Risk
                        </span>
                        <div className="w-28 h-1.5 bg-surface-container-highest rounded-full mt-1.5 overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </td>

                      <td className="py-space-md px-space-md">
                        <div className="font-bold text-on-surface">Hearing: Feb 18, 2026</div>
                        <span className="text-caption font-caption text-secondary font-medium">SLAO Chambers Bidadi</span>
                      </td>

                      <td className="py-space-md px-space-md text-right">
                        <button
                          onClick={() => handleOpenAffidavit('OBJ-RMG-2026-19', 'Sy. 89/1B')}
                          className="inline-flex items-center gap-1 px-space-md py-space-xs bg-surface-container-high text-primary rounded-xl font-label-action text-xs font-bold hover:bg-surface-container-highest transition-colors"
                        >
                          <span className="material-symbols-outlined text-[16px]">visibility</span>
                          <span>Review Hearing</span>
                        </button>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </section>

            {/* Rehabilitation & Resettlement (R&R) Progress per Major Project */}
            <section className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm space-y-space-md border border-surface-container-high/60">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                <div>
                  <div className="flex items-center gap-space-xs">
                    <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">
                      ಪುನರ್ವಸತಿ ಮತ್ತು ಪುನರ್ನಿರ್ಮಾಣ (R&R) ಪ್ರಗತಿ
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg">
                    Rehabilitation & Resettlement (R&R) per Major Project
                  </h2>
                </div>
                <div className="flex items-center gap-space-xs text-caption font-caption text-on-surface-variant text-xs">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Sec. 31 to 38 Compliance Audit Synchronized</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {/* Major Project 1 */}
                <div className="bg-surface-container-low p-space-md rounded-2xl space-y-space-sm flex flex-col justify-between border border-surface-container">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-caption font-caption font-bold uppercase text-secondary tracking-wider text-[10px]">
                          Priority Corridor A-1
                        </span>
                        <h3 className="font-subheading text-subheading text-on-surface font-bold text-base">
                          Peripheral Ring Road (PRR) Phase 2
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                          BDA / Karnataka Urban Infrastructure Development
                        </p>
                      </div>
                      <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-bold text-xs">
                        74% Completed
                      </span>
                    </div>

                    <div className="mt-space-md space-y-space-xxs">
                      <div className="flex justify-between text-caption font-caption text-on-surface font-medium text-xs">
                        <span>Overall R&R Fulfillment</span>
                        <span className="font-bold text-secondary">74% Target Achieved</span>
                      </div>
                      <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: '74%' }}></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-xs text-xs">
                      <div className="bg-surface-container-lowest p-space-xs rounded-xl border border-surface-container/60">
                        <span className="font-caption text-on-surface-variant block">Disbursed via Direct Escrow</span>
                        <span className="font-label-action font-bold text-primary">₹1,240 Crores</span>
                      </div>
                      <div className="bg-surface-container-lowest p-space-xs rounded-xl border border-surface-container/60">
                        <span className="font-caption text-on-surface-variant block">Allotted Civic Plots</span>
                        <span className="font-label-action font-bold text-on-surface">480 / 648 Families</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs border-t border-surface-container/60">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                      Layout No. 4, Doddajala Layout
                    </span>
                    <button className="text-primary font-bold hover:underline">Inspect Escrow Ledger →</button>
                  </div>
                </div>

                {/* Major Project 2 */}
                <div className="bg-surface-container-low p-space-md rounded-2xl space-y-space-sm flex flex-col justify-between border border-surface-container">
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-caption font-caption font-bold uppercase text-secondary tracking-wider text-[10px]">
                          Industrial Growth Node
                        </span>
                        <h3 className="font-subheading text-subheading text-on-surface font-bold text-base">
                          Ramanagara Industrial Corridor (KIADB)
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                          Karnataka Industrial Areas Development Board
                        </p>
                      </div>
                      <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-caption text-caption font-bold text-xs">
                        88% Completed
                      </span>
                    </div>

                    <div className="mt-space-md space-y-space-xxs">
                      <div className="flex justify-between text-caption font-caption text-on-surface font-medium text-xs">
                        <span>Overall R&R Fulfillment</span>
                        <span className="font-bold text-secondary">88% Target Achieved</span>
                      </div>
                      <div className="h-2.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                        <div className="bg-secondary h-full rounded-full transition-all duration-500" style={{ width: '88%' }}></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-space-sm mt-space-md pt-space-xs text-xs">
                      <div className="bg-surface-container-lowest p-space-xs rounded-xl border border-surface-container/60">
                        <span className="font-caption text-on-surface-variant block">Disbursed via Direct Escrow</span>
                        <span className="font-label-action font-bold text-primary">₹680 Crores</span>
                      </div>
                      <div className="bg-surface-container-lowest p-space-xs rounded-xl border border-surface-container/60">
                        <span className="font-caption text-on-surface-variant block">Commercial Job Sanctions</span>
                        <span className="font-label-action font-bold text-on-surface">312 Beneficiaries</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-xs border-t border-surface-container/60">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-secondary">work</span>
                      Commercial Quota Sanctions Active
                    </span>
                    <button className="text-primary font-bold hover:underline">Inspect Employment Rolls →</button>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </main>
      </div>

      {/* Affidavit Modal */}
      <AffidavitModal
        isOpen={affidavitModalOpen}
        onClose={() => setAffidavitModalOpen(false)}
        caseId={selectedCase.id}
        surveyNo={selectedCase.survey}
      />
    </div>
  );
}
