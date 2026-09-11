import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function AffidavitModal({
  isOpen = false,
  onClose = () => {},
  caseId = "WP-4821/2026",
  surveyNo = "Sy. 142/2A"
}) {
  const { isAffidavitSigned, setIsAffidavitSigned } = useAuthRole();

  if (!isOpen) return null;

  const handleSign = () => {
    setIsAffidavitSigned(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[700] flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-2xl max-w-lg w-full p-space-lg shadow-2xl border border-surface-container-high space-y-space-md animate-in fade-in zoom-in-95">
        <div className="flex items-start justify-between border-b border-surface-container pb-3">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-[22px]">gavel</span>
            </div>
            <div>
              <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold text-[10px]">
                High Court Legal Counter-Affidavit
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {caseId} • {surveyNo}
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

        <div className="bg-surface-container-low p-space-md rounded-xl space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-on-surface-variant font-medium">Court Bench:</span>
            <span className="font-semibold text-on-surface">High Court of Karnataka (Principal Bench)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant font-medium">Next Milestone:</span>
            <span className="font-semibold text-error">Hearing: Sep 18, 2026 (Court Hall 4)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant font-medium">Stay Injunction Risk:</span>
            <span className="font-bold text-error">84% Critical Risk</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
            Executive Summary for District Magistrate / DC:
          </span>
          <p className="text-body-sm text-on-surface bg-surface-container-high/40 p-3 rounded-lg text-xs leading-relaxed">
            "Draft counter-affidavit prepared under Section 15(2) validating the 100% Solatium computation of ₹1.45 Cr/Acre and placing on record historical transaction deeds within 2km perimeter. Mitigates interim stay risk and satisfies precedent in <em>Smt. Gowramma vs State of Karnataka (2023)</em>."
          </p>
        </div>

        <div className="flex items-center justify-between p-space-xs bg-surface-container rounded-lg text-xs">
          <span className="text-on-surface-variant">Digital Token: <strong>K-SWAN-DM-092</strong></span>
          <span className="text-secondary font-bold">256-Bit e-Sign Ready</span>
        </div>

        <div className="flex items-center gap-space-xs pt-2">
          <button
            onClick={handleSign}
            className="flex-1 py-2.5 px-4 rounded-xl bg-primary text-on-primary font-label-action text-label-action hover:bg-secondary transition-all font-semibold flex items-center justify-center gap-1.5 shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">draw</span>
            <span>{isAffidavitSigned ? 'Re-Authorize Signature' : 'Sign & Dispatch Counter-Affidavit'}</span>
          </button>
          <button
            onClick={onClose}
            className="py-2.5 px-4 rounded-xl bg-surface-container text-on-surface-variant hover:bg-surface-container-high font-semibold text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
