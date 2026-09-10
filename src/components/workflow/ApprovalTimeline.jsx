import React, { useState } from 'react';

export default function ApprovalTimeline({ stages = [] }) {
  const [selectedStage, setSelectedStage] = useState(null);

  const completedCount = stages.filter(s => s.status === 'Approved' || s.status === 'Verified').length;
  const activeCount = stages.filter(s => s.status === 'Active').length;
  const pendingCount = stages.filter(s => s.status === 'Pending').length;

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm space-y-space-lg border border-surface-container-high/60">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs border-b border-surface-container pb-3">
        <div>
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[20px] text-secondary">flowsheet</span>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              Statutory Clearance Pipeline
            </h2>
          </div>
          <p className="font-caption text-caption text-on-surface-variant mt-0.5">
            Four-tier state land verification and gazette certification lifecycle under RFCTLARR 2013
          </p>
        </div>

        <div className="flex items-center gap-space-xs text-caption font-caption">
          <span className="px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-semibold flex items-center gap-1 text-xs">
            <span className="material-symbols-outlined text-[14px]">check_circle</span> {completedCount} Completed
          </span>
          <span className="px-2.5 py-1 rounded-md bg-tertiary-fixed text-on-tertiary-fixed font-semibold flex items-center gap-1 text-xs">
            <span className="material-symbols-outlined text-[14px]">hourglass_top</span> {activeCount} Active
          </span>
          <span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-medium text-xs">
            {pendingCount} Queued
          </span>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
        {stages.map((stageItem) => {
          const isApproved = stageItem.status === 'Approved' || stageItem.status === 'Verified';
          const isActive = stageItem.status === 'Active';
          const isPending = stageItem.status === 'Pending';

          return (
            <div
              key={stageItem.stageIndex || stageItem.stage}
              onClick={() => setSelectedStage(stageItem)}
              className={`relative rounded-xl p-space-md flex flex-col justify-between transition-all cursor-pointer hover:shadow-md ${
                isActive
                  ? 'bg-surface-container-lowest shadow-md ring-2 ring-primary'
                  : isApproved
                  ? 'bg-surface-container-low hover:bg-surface-container'
                  : 'bg-surface-container-low/60 opacity-80 hover:opacity-100'
              }`}
            >
              {isActive && (
                <div className="absolute -top-2.5 left-4 bg-primary text-on-primary font-caption text-caption px-2 py-0.5 rounded font-bold uppercase tracking-wider text-[10px] shadow-sm">
                  Current Active Node
                </div>
              )}

              <div className="space-y-space-xs mt-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-caption font-caption font-bold tracking-wider uppercase flex items-center gap-1 text-[11px] ${
                      isApproved ? 'text-secondary' : isActive ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isApproved ? 'check_circle' : isActive ? 'hourglass_empty' : 'lock_clock'}
                    </span>
                    Stage 0{stageItem.stageIndex}
                  </span>

                  <span
                    className={`px-2 py-0.5 rounded text-caption font-caption font-semibold text-[11px] ${
                      isApproved
                        ? 'bg-secondary-container text-on-secondary-container'
                        : isActive
                        ? 'bg-error-container text-on-error-container font-bold'
                        : 'bg-surface-container text-on-surface-variant'
                    }`}
                  >
                    {isApproved ? 'Approved' : isActive ? 'In Progress' : 'Queued'}
                  </span>
                </div>

                <div>
                  <div className={`font-label-action text-label-action font-bold text-sm ${isActive ? 'text-primary' : 'text-on-surface'}`}>
                    {stageItem.stage}
                  </div>
                  <div className="text-caption font-caption text-on-surface-variant text-xs">
                    {stageItem.designation}
                  </div>
                </div>

                <p className="text-body-sm font-body-sm text-on-surface-variant bg-surface-container-lowest p-2.5 rounded-lg text-xs leading-relaxed border border-surface-container/60 line-clamp-3">
                  "{stageItem.remarks}"
                </p>
              </div>

              <div className="mt-space-md pt-space-xs flex items-center justify-between text-caption font-caption text-on-surface-variant text-[11px] border-t border-surface-container/40">
                <span>{stageItem.date}</span>
                <span className={`font-semibold ${isApproved ? 'text-secondary' : isActive ? 'text-primary' : 'text-outline'}`}>
                  {stageItem.ref}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Stage Detail Modal */}
      {selectedStage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[600] flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl max-w-md w-full p-space-lg shadow-2xl border border-surface-container-high space-y-space-md animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider text-[11px]">
                  {selectedStage.stageName || `Stage 0${selectedStage.stageIndex}`}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {selectedStage.stage}
                </h3>
                <p className="text-body-sm text-on-surface-variant text-xs">{selectedStage.designation}</p>
              </div>
              <button
                onClick={() => setSelectedStage(null)}
                className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="p-space-md bg-surface-container-low rounded-xl space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Statutory Status:</span>
                <span className="font-bold text-primary">{selectedStage.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Timestamp:</span>
                <span className="font-medium text-on-surface">{selectedStage.date} {selectedStage.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Docket Reference:</span>
                <span className="font-mono text-primary font-bold">{selectedStage.ref}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant font-semibold text-[11px]">
                Officer Assessment Notes:
              </span>
              <p className="text-body-sm text-on-surface bg-surface-container p-3 rounded-lg text-xs leading-relaxed">
                "{selectedStage.remarks}"
              </p>
            </div>

            <button
              onClick={() => setSelectedStage(null)}
              className="w-full py-2 bg-primary text-on-primary rounded-lg font-semibold text-xs hover:bg-secondary transition-colors"
            >
              Close Dossier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
