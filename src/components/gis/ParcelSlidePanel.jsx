import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ParcelSlidePanel({
  parcel = null,
  isOpen = false,
  onClose = () => {}
}) {
  const navigate = useNavigate();

  if (!parcel) return null;

  const isHighRisk = parcel.risk === 'High';
  const isMedRisk = parcel.risk === 'Medium';

  return (
    <aside
      className={`absolute top-0 right-0 bottom-0 w-[440px] max-w-full bg-surface-container-lowest shadow-2xl z-[500] flex flex-col transform transition-transform duration-300 ease-in-out border-l border-surface-container-high overflow-hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
    >
      {/* Panel Header */}
      <div className="p-space-lg bg-surface-container-low flex flex-col gap-2 border-b border-surface-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">account_balance</span>
            <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
              State Cadastral Registry
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div>
          <span className="font-label-bilingual-kannada text-label-bilingual-kannada text-secondary font-medium">
            {parcel.kannadaSurvey || 'ಸರ್ವೆ ನಂ: ೧೪೨/೨ಎ'} | {parcel.location}
          </span>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
            Parcel Dossier: Sy. No. {parcel.surveyNo}
          </h2>
        </div>

        {/* Risk Status Badge */}
        <div className="mt-1 flex items-center justify-between">
          <div
            className={`px-3 py-1 rounded-full flex items-center gap-2 ${
              isHighRisk
                ? 'bg-error-container text-on-error-container'
                : isMedRisk
                ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                : 'bg-secondary-container text-on-secondary-container'
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isHighRisk ? 'bg-error animate-pulse' : isMedRisk ? 'bg-tertiary' : 'bg-secondary'
              }`}
            ></span>
            <span className="font-label-action text-caption font-bold">
              {parcel.risk} Delay Risk (Score: {parcel.riskScore || 84}/100)
            </span>
          </div>
          <span className="font-caption text-caption text-on-surface-variant">Updated: 2 hrs ago</span>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 p-space-lg overflow-y-auto space-y-space-md">
        {/* Acquisition Project Assignment */}
        <div className="bg-surface-container-low p-space-md rounded-xl space-y-1">
          <div className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold text-[11px]">
            Acquisition Purpose / Project
          </div>
          <div className="font-subheading text-subheading text-primary font-bold">
            {parcel.projectName || 'Peripheral Ring Road Phase-2'}
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            Executing Body: Bangalore Development Authority (BDA)
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-2 gap-space-xs">
          <div className="p-space-sm bg-surface-container rounded-xl">
            <span className="font-caption text-caption text-on-surface-variant block">District & Taluk</span>
            <span className="font-label-action text-body-sm text-on-surface font-semibold">
              {parcel.district}, {parcel.taluk}
            </span>
          </div>
          <div className="p-space-sm bg-surface-container rounded-xl">
            <span className="font-caption text-caption text-on-surface-variant block">Cadastral Extent</span>
            <span className="font-label-action text-body-sm text-on-surface font-semibold">
              {parcel.extent} (Dry Ag)
            </span>
          </div>
          <div className="p-space-sm bg-surface-container rounded-xl col-span-2">
            <span className="font-caption text-caption text-on-surface-variant block">Current Statutory Lifecycle Stage</span>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
              <span className="font-label-action text-body-sm text-on-surface font-semibold">
                {parcel.stageDescription || parcel.stage}
              </span>
            </div>
          </div>
        </div>

        {/* Ownership & Title Disputes */}
        <div className="p-space-md bg-surface-container-low rounded-xl space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold text-[11px]">
              Ownership Verification
            </span>
            <span className="px-2 py-0.5 rounded text-caption font-caption bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
              {parcel.gapPercent > 0 ? 'Title Conflict' : 'Clear Title'}
            </span>
          </div>
          <div className="font-body-md text-body-md text-on-surface">
            <span className="font-semibold text-primary">Landowner of Record:</span> {parcel.owner} {parcel.coSharers && `& ${parcel.coSharers}`}
          </div>
          <div className="text-body-sm font-body-sm text-on-surface-variant flex items-start gap-1.5">
            <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">gavel</span>
            <span>{parcel.disputeSummary}</span>
          </div>
        </div>

        {/* Circle Rate vs Market Demand Spread Matrix */}
        {parcel.gapPercent > 0 && (
          <div className="p-space-md bg-surface-container rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold text-[11px]">
                Valuation Differential (Spread)
              </span>
              <span className="text-caption font-caption text-error font-bold">
                +{parcel.gapPercent}% Gap
              </span>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between text-body-sm font-body-sm">
                <span className="text-on-surface-variant">Govt Circle Rate (Guidance):</span>
                <span className="font-semibold text-on-surface">₹{parcel.circleRate} Cr / Acre</span>
              </div>
              <div className="flex justify-between text-body-sm font-body-sm">
                <span className="text-on-surface-variant">Claimant Market Demand:</span>
                <span className="font-bold text-error">₹{parcel.marketValuation} Cr / Acre</span>
              </div>
              {/* Spread Bar */}
              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden flex">
                <div className="bg-primary h-full w-1/2" title="Circle Rate Share"></div>
                <div className="bg-error h-full w-1/2" title="Demanded Gap"></div>
              </div>
              <div className="flex justify-between text-caption font-caption text-on-surface-variant">
                <span>Guidance Anchor</span>
                <span>Disputed Variance: ₹{(parcel.marketValuation - parcel.circleRate).toFixed(2)} Cr/A</span>
              </div>
            </div>
          </div>
        )}

        {/* AI Delay Probability Indicators */}
        <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm space-y-2 border border-surface-container">
          <div className="flex items-center justify-between">
            <span className="font-caption text-caption uppercase tracking-wider text-primary font-bold text-[11px]">
              Predictive Risk Vector Breakdown
            </span>
            <span className="font-caption text-caption text-on-surface-variant">Model: XGBoost</span>
          </div>
          <div className="space-y-2 text-body-sm font-body-sm">
            <div>
              <div className="flex justify-between text-caption font-caption mb-0.5">
                <span className="text-on-surface-variant">Litigation Likelihood</span>
                <span className="font-semibold text-error">91% (High)</span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-error h-full rounded-full w-[91%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-caption font-caption mb-0.5">
                <span className="text-on-surface-variant">Gram Panchayat Consent Friction</span>
                <span className="font-semibold text-tertiary-fixed-dim">74% (Medium)</span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-tertiary-fixed-dim h-full rounded-full w-[74%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-caption font-caption mb-0.5">
                <span className="text-on-surface-variant">Disbursement Bottleneck Risk</span>
                <span className="font-semibold text-secondary">32% (Low)</span>
              </div>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-[32%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-space-md bg-surface-container-low flex flex-col gap-2 border-t border-surface-container">
        <button
          onClick={() => navigate(`/officer/parcel/${parcel.id}/risk`)}
          className="w-full py-2.5 px-4 rounded-xl bg-primary text-on-primary font-label-action text-label-action hover:bg-secondary transition-all flex items-center justify-center gap-2 shadow-md hover:scale-[1.01]"
        >
          <span className="material-symbols-outlined text-[18px]">psychology</span>
          <span>Deep ML Delay Prediction & SHAP Analysis →</span>
        </button>
      </div>
    </aside>
  );
}
