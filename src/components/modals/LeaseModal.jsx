import React, { useState } from 'react';

export default function LeaseModal({
  isOpen = false,
  onClose = () => {},
  land = null
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !land) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[700] flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl border border-surface-container-high space-y-space-md animate-in fade-in zoom-in-95">
        <div className="flex items-start justify-between border-b border-surface-container pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">domain_verification</span>
            </div>
            <div>
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold text-[10px]">
                Public Land Bank Allotment
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                Sy. No. {land.surveyNo} • {land.location}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center mx-auto shadow-md">
              <span className="material-symbols-outlined text-[32px]">task_alt</span>
            </div>
            <h4 className="font-headline-sm text-headline-sm font-bold text-primary">
              Allotment Request Logged!
            </h4>
            <p className="text-body-sm text-on-surface-variant text-xs max-w-xs mx-auto">
              Your expression of interest for <strong className="text-on-surface">{land.extent}</strong> in {land.district} has been queued with KIADB Single Window Portal (Ref: <strong>E-LEAS-2026-881</strong>).
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="py-2 px-6 bg-primary text-on-primary rounded-xl font-semibold text-xs hover:bg-secondary transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="bg-surface-container-low p-space-md rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Available Extent:</span>
                <span className="font-bold text-primary">{land.extent} ({land.classification})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Guidance Value:</span>
                <span className="font-semibold text-on-surface">{land.guidanceValue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Encumbrance Status:</span>
                <span className="font-bold text-secondary">{land.encumbrance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Connectivity:</span>
                <span className="text-on-surface">{land.nhDistance}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                Intended Utilization Scope:
              </span>
              <select className="w-full bg-surface-container p-2.5 rounded-lg text-body-sm text-on-surface text-xs focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Industrial Ancillary Manufacturing</option>
                <option>Agro-processing & Cold Storage</option>
                <option>Logistics & Warehousing Park</option>
                <option>Civic / Renewable Energy Project</option>
              </select>
            </div>

            <div className="flex items-center gap-space-xs pt-2">
              <button
                onClick={() => setSubmitted(true)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-on-primary font-label-action text-label-action hover:bg-secondary transition-all font-semibold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Submit Allotment Application</span>
              </button>
              <button
                onClick={onClose}
                className="py-2.5 px-4 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-semibold text-xs transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
