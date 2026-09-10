import React, { useState, useEffect } from 'react';
import CitizenHeader, { CitizenFooter } from '../components/layout/CitizenHeader';
import { apiService } from '../services/api';

export default function CitizenApplications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploaded, setUploaded] = useState(false);
  const [confirmedHearing, setConfirmedHearing] = useState(false);
  const [activeDocModal, setActiveDocModal] = useState(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await apiService.getNotifications();
      setNotifications(data);
      setLoading(false);
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col justify-between">
      <CitizenHeader />

      <main className="w-full pt-28 bg-background flex-1">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-space-md space-y-space-xl">
          
          {/* Top Administrative Banner */}
          <section className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md border border-surface-container-high/60">
            <div className="flex items-start md:items-center gap-space-md">
              <div className="w-12 h-12 rounded-2xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-sm">
                <span className="material-symbols-outlined text-[28px]">assured_workload</span>
              </div>
              <div className="space-y-space-xxs min-w-0">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold text-xs">
                    Civilian Spatial Registry
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="bg-secondary-container text-on-secondary-container px-space-xs py-0.5 rounded-full font-caption text-caption font-bold text-xs">
                    RFCTLARR 2013 Statutory
                  </span>
                </div>
                <h1 className="font-headline-md text-headline-md text-primary font-bold tracking-tight text-xl md:text-2xl">
                  Citizen Services <span className="text-outline-variant font-normal">/</span> ಅರ್ಜಿ ಸ್ಥಿತಿ ಮತ್ತು ಅಧಿಸೂಚನೆಗಳು
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                  Application Status, Real-Time Cadastral Tracking & Statutory Notifications
                </p>
              </div>
            </div>

            {/* Reference ID Card */}
            <div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col sm:flex-row sm:items-center gap-space-sm border border-surface-container">
              <div className="flex flex-col text-xs">
                <span className="text-outline uppercase font-semibold text-[10px]">Active Reference ID</span>
                <span className="font-subheading font-bold text-primary">APP-LAA-2026-0914</span>
              </div>
              <div className="h-8 w-px bg-surface-container-high hidden sm:block"></div>
              <div className="flex flex-col text-xs">
                <span className="text-outline uppercase font-semibold text-[10px]">Landowner / Parcel</span>
                <span className="font-medium text-on-surface">K. Ramamurthy | Sy. 142/2A</span>
              </div>
              <span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed font-caption text-caption font-bold px-space-sm py-1 rounded-full text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-800 animate-ping"></span>
                <span>Hearing In-Progress</span>
              </span>
            </div>
          </section>

          {/* Section 1: Statutory Acquisition Stepper */}
          <section className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg md:p-space-xl space-y-space-lg border border-surface-container-high/60">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-xs border-b border-surface-container pb-3">
              <div>
                <div className="flex items-center gap-space-xs">
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold text-lg">
                    Statutory Acquisition Lifecycle
                  </h2>
                  <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">| ಭೂ ಸ್ವಾಧೀನ ಪ್ರಕ್ರಿಯೆ</span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                  Under Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013
                </p>
              </div>
              <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption font-bold text-xs">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Official Gazette Sequence</span>
              </div>
            </div>

            {/* Stepper Matrix */}
            <div className="w-full overflow-x-auto pb-space-sm">
              <div className="min-w-[780px] grid grid-cols-5 gap-space-xs relative">
                
                {/* Stage 1 */}
                <div className="flex flex-col items-center text-center space-y-space-xs relative z-10">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-md font-bold text-sm ring-4 ring-surface-container-lowest">
                    ✓
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-caption font-bold text-secondary uppercase tracking-wider text-[10px]">
                      Stage 01 • Sec 11
                    </span>
                    <h3 className="font-subheading text-on-surface font-semibold">Preliminary Notice</h3>
                    <span className="inline-block font-caption text-secondary font-medium bg-secondary-container/40 px-2 py-0.5 rounded text-[10px]">
                      Completed: 15 Oct 2025
                    </span>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="flex flex-col items-center text-center space-y-space-xs relative z-10">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-md font-bold text-sm ring-4 ring-surface-container-lowest">
                    ✓
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-caption font-bold text-secondary uppercase tracking-wider text-[10px]">
                      Stage 02 • Sec 15
                    </span>
                    <h3 className="font-subheading text-on-surface font-semibold">Hearing Objections</h3>
                    <span className="inline-block font-caption text-secondary font-medium bg-secondary-container/40 px-2 py-0.5 rounded text-[10px]">
                      Completed: 20 Nov 2025
                    </span>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="flex flex-col items-center text-center space-y-space-xs relative z-10">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shadow-md font-bold text-sm ring-4 ring-surface-container-lowest">
                    ✓
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-caption font-bold text-secondary uppercase tracking-wider text-[10px]">
                      Stage 03 • Sec 19
                    </span>
                    <h3 className="font-subheading text-on-surface font-semibold">Final Declaration</h3>
                    <span className="inline-block font-caption text-secondary font-medium bg-secondary-container/40 px-2 py-0.5 rounded text-[10px]">
                      Completed: 10 Jan 2026
                    </span>
                  </div>
                </div>

                {/* Stage 4 (Active) */}
                <div className="flex flex-col items-center text-center space-y-space-xs relative z-10">
                  <div className="w-11 h-11 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-md ring-4 ring-amber-300 font-bold text-sm animate-pulse">
                    4
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-caption font-bold text-amber-900 uppercase tracking-wider text-[10px]">
                      Stage 04 • Sec 21-23
                    </span>
                    <h3 className="font-subheading text-primary font-bold">Award Inquiry & Valuation</h3>
                    <span className="inline-flex items-center gap-1 font-caption font-bold bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-800"></span> Active: Feb 2026
                    </span>
                  </div>
                </div>

                {/* Stage 5 */}
                <div className="flex flex-col items-center text-center space-y-space-xs relative z-10 opacity-60">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high text-outline flex items-center justify-center shadow-sm font-bold text-sm">
                    5
                  </div>
                  <div className="space-y-0.5 text-xs">
                    <span className="font-caption font-bold text-outline uppercase tracking-wider text-[10px]">
                      Stage 05 • Disbursal
                    </span>
                    <h3 className="font-subheading text-on-surface-variant font-medium">Direct Benefit Escrow</h3>
                    <span className="inline-block font-caption text-outline bg-surface-container px-2 py-0.5 rounded text-[10px]">
                      Upcoming / Queued
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* SLA Info Alert Box */}
            <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-surface-container">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">info</span>
                <div className="text-xs">
                  <p className="font-semibold text-on-surface">Statutory Time Constraint for Current Stage</p>
                  <p className="text-on-surface-variant">Under Section 25 of the 2013 Act, the SLA to declare an Award lapses on Jan 09, 2027 (12 months from Sec 19 notification).</p>
                </div>
              </div>
              <button className="shrink-0 bg-surface-container-lowest text-primary px-space-md py-1.5 rounded-xl font-bold hover:bg-primary hover:text-on-primary shadow-sm transition-colors text-xs border border-surface-container">
                View SLA Timeline Audit
              </button>
            </div>
          </section>

          {/* Bento Split Section 2 & 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start pb-space-2xl">
            
            {/* Left Column: Notifications Feed (7 cols) */}
            <section className="lg:col-span-7 space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[22px]">notifications_active</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold text-lg">
                    Statutory Notifications & Alerts
                  </h2>
                </div>
                <span className="font-caption text-caption text-secondary font-bold bg-secondary-container px-space-xs py-0.5 rounded text-xs">
                  2 Actions Required
                </span>
              </div>

              <div className="space-y-space-md">
                {/* Notification 1: Section 19 Gazette */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-sm border border-surface-container-high/60">
                  <div className="flex items-start justify-between gap-space-sm text-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                      <span className="font-bold text-secondary uppercase tracking-wider text-[11px]">
                        Statutory Gazette Notification
                      </span>
                    </div>
                    <span className="text-outline">29 Jan 2026, 11:20 AM</span>
                  </div>

                  <div>
                    <h3 className="font-subheading text-on-surface font-bold text-base">Notice under Section 19(1) Published</h3>
                    <p className="text-body-md text-on-surface-variant mt-1 text-xs leading-relaxed">
                      Gazette notification issued for Devanahalli PRR Phase-2. Your parcel <span className="font-bold text-primary">Sy. No. 142/2A</span> has been awarded preliminary base rate of <span className="font-semibold text-on-surface">₹1.45 Cr/Acre</span> with solatium. Please upload Form 14 bank details.
                    </p>
                  </div>

                  <div className="bg-surface-container-low rounded-xl p-space-sm flex flex-wrap items-center justify-between gap-space-xs font-caption text-caption text-on-surface-variant text-xs border border-surface-container">
                    <span>Order No: <strong>RD-104-AQ-BLR-2026</strong></span>
                    <span className="text-secondary font-bold">Digital Signature Validated</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-xs">
                    <div className="flex items-center gap-1 text-outline">
                      <span className="material-symbols-outlined text-[16px]">timer</span>
                      <span>Mandate deadline: 15 Feb 2026</span>
                    </div>
                    <button
                      onClick={() => setUploaded(true)}
                      className="inline-flex items-center gap-1 bg-primary text-on-primary px-space-md py-2 rounded-xl font-bold hover:bg-secondary shadow-sm transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {uploaded ? 'check' : 'cloud_upload'}
                      </span>
                      <span>{uploaded ? 'Bank Mandate Uploaded ✓' : 'Upload Bank Mandate / Aadhaar'}</span>
                    </button>
                  </div>
                </div>

                {/* Notification 2: AI Discrepancy Hearing */}
                <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-sm border border-surface-container-high/60">
                  <div className="flex items-start justify-between gap-space-sm text-xs">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
                      <span className="font-bold text-amber-800 uppercase tracking-wider text-[11px]">
                        Proactive Dispute Mitigation Alert
                      </span>
                    </div>
                    <span className="text-outline">27 Jan 2026, 04:45 PM</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-subheading text-on-surface font-bold text-base">AI Valuation Discrepancy Alert</h3>
                      <span className="bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[10px] px-2 py-0.5 rounded">
                        Algorithm Flagged
                      </span>
                    </div>
                    <p className="text-body-md text-on-surface-variant mt-1 text-xs leading-relaxed">
                      Our ML algorithm detected a <span className="font-bold text-error">93% deviation</span> between claimed rate and local circle rate. Tahsildar has scheduled a Circle Rate Harmonization Hearing on <span className="font-bold text-on-surface">Feb 12</span> to prevent tribunal escalation.
                    </p>
                  </div>

                  {/* Spark bar */}
                  <div className="bg-tertiary-fixed/30 rounded-xl p-space-sm space-y-space-xs text-xs border border-amber-200">
                    <div className="flex items-center justify-between text-on-tertiary-fixed-variant">
                      <span>Circle Rate Standard: ₹75.2 L/Acre</span>
                      <span className="font-bold">Claimed: ₹1.45 Cr/Acre (+93%)</span>
                    </div>
                    <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden flex">
                      <div className="bg-secondary h-full w-1/2"></div>
                      <div className="bg-amber-500 h-full w-1/2"></div>
                    </div>
                    <p className="text-[11px] text-on-surface-variant">Preventive mediation avoids estimated 14-month district court freeze.</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-xs">
                    <div className="flex items-center gap-1 text-outline">
                      <span className="material-symbols-outlined text-[16px]">gavel</span>
                      <span>Sub-Divisional Officer Forum (Bangalore Rural)</span>
                    </div>
                    <button
                      onClick={() => setConfirmedHearing(true)}
                      className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed px-space-md py-2 rounded-xl font-bold hover:bg-tertiary-fixed-dim shadow-sm transition-colors"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        {confirmedHearing ? 'how_to_reg' : 'event'}
                      </span>
                      <span>{confirmedHearing ? 'Attendance Confirmed ✓' : 'Confirm Attendance Online'}</span>
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* Right Column: Document Repository (5 cols) */}
            <section className="lg:col-span-5 space-y-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[22px]">folder_special</span>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold text-lg">
                    Document Repository
                  </h2>
                </div>
                <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">ದಾಖಲೆಗಳ ಖಜಾನೆ</span>
              </div>

              <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-md border border-surface-container-high/60">
                <p className="text-body-sm text-on-surface-variant text-xs">
                  Tamper-proof statutory records certified via Karnataka e-Pothi and Bhoomi Cadastral Ledger.
                </p>

                {/* Doc 1 */}
                <div className="bg-surface-container-low rounded-xl p-space-md transition-all hover:bg-surface-container space-y-space-xs border border-surface-container">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[26px]">task</span>
                      <div>
                        <h3 className="font-subheading text-primary font-bold text-sm">Form 14 Compensation Claim</h3>
                        <p className="font-caption text-on-surface-variant text-[11px]">Reference: CLM-142-2A-2025</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container font-bold px-2 py-0.5 rounded-full text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Verified
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs text-xs text-on-surface-variant">
                    <span>Timestamp: 18 Jan 2026</span>
                    <button
                      onClick={() => setActiveDocModal('Form 14 Claim Receipt')}
                      className="text-secondary font-bold hover:underline flex items-center gap-0.5"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span> View Receipt
                    </button>
                  </div>
                </div>

                {/* Doc 2 */}
                <div className="bg-surface-container-low rounded-xl p-space-md transition-all hover:bg-surface-container space-y-space-xs border border-surface-container">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[26px]">map</span>
                      <div>
                        <h3 className="font-subheading text-primary font-bold text-sm">Revenue Sketch (Akarbandh)</h3>
                        <p className="font-caption text-on-surface-variant text-[11px]">Reference: AKAR-DEV-8819</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-primary-container text-on-primary font-bold px-2 py-0.5 rounded-full text-[10px]">
                      Certified
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs text-xs text-on-surface-variant">
                    <span>KSRSAC DGPS Synchronized</span>
                    <button
                      onClick={() => setActiveDocModal('Revenue Akarbandh Sketch')}
                      className="text-primary font-bold hover:underline flex items-center gap-0.5"
                    >
                      <span className="material-symbols-outlined text-[14px]">download</span> Download PDF
                    </button>
                  </div>
                </div>

                {/* Doc 3 */}
                <div className="bg-surface-container-low rounded-xl p-space-md transition-all hover:bg-surface-container space-y-space-xs border border-surface-container">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-amber-800 text-[26px]">gavel</span>
                      <div>
                        <h3 className="font-subheading text-primary font-bold text-sm">Section 19 Gazette Copy</h3>
                        <p className="font-caption text-on-surface-variant text-[11px]">Notification: RD-104-AQ-BLR</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-tertiary-fixed text-on-tertiary-fixed font-bold px-2 py-0.5 rounded-full text-[10px]">
                      Gazetted
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs text-xs text-on-surface-variant">
                    <span>Govt Press Karnataka</span>
                    <button
                      onClick={() => setActiveDocModal('Gazette Notification RD-104')}
                      className="text-amber-800 font-bold hover:underline flex items-center gap-0.5"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span> View Gazette
                    </button>
                  </div>
                </div>

              </div>
            </section>

          </div>

        </div>
      </main>

      <CitizenFooter />

      {/* Doc Modal */}
      {activeDocModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[700] flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-space-lg shadow-2xl border border-surface-container-high space-y-space-md animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-surface-container pb-2">
              <div>
                <span className="text-caption font-bold text-secondary uppercase text-[10px]">e-Pothi Authenticated</span>
                <h3 className="font-headline-sm font-bold text-primary text-base">{activeDocModal}</h3>
              </div>
              <button onClick={() => setActiveDocModal(null)} className="p-1 rounded-lg text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="p-4 bg-surface-container-low rounded-xl text-xs space-y-2">
              <div className="flex justify-between"><span>Issuing Authority:</span><strong className="text-primary">Devanahalli Revenue Sub-Division</strong></div>
              <div className="flex justify-between"><span>Certificate ID:</span><span className="font-mono font-bold">CERT-2026-BLR-0941</span></div>
              <div className="flex justify-between"><span>Hash:</span><span className="font-mono text-[10px] text-outline">SHA256:7f9a88...c231</span></div>
            </div>
            <p className="text-xs text-on-surface-variant">
              This document is cryptographically anchored to Karnataka Revenue Department State GIS Master Ledger.
            </p>
            <button
              onClick={() => setActiveDocModal(null)}
              className="w-full py-2 bg-primary text-white rounded-xl font-bold text-xs hover:bg-secondary transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
