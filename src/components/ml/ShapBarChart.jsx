import React from 'react';

export default function ShapBarChart({
  drivers = [],
  summary = "Score driven mainly by disputed valuation (93% spread) and pending statutory gazetting."
}) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm h-full flex flex-col justify-between border border-surface-container-high/60">
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-space-md">
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary">analytics</span>
              <h2 className="font-subheading text-subheading text-on-surface font-bold">
                SHAP-Based Delay Attribution
              </h2>
            </div>
            <p className="font-caption text-caption text-on-surface-variant mt-0.5">
              Relative weighted impact of local land records and legal constraints on milestone delays
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-caption font-caption text-error font-medium">
              <span className="w-2.5 h-2.5 rounded bg-error"></span> Critical
            </span>
            <span className="inline-flex items-center gap-1 text-caption font-caption text-tertiary-container font-medium">
              <span className="w-2.5 h-2.5 rounded bg-tertiary-fixed-dim"></span> Moderate
            </span>
          </div>
        </div>

        {/* SHAP Drivers Bars */}
        <div className="space-y-space-md">
          {drivers.map((driver, idx) => {
            const isCritical = driver.severity === 'Critical' || driver.contribution >= 25;
            const barWidth = `${Math.min(100, driver.contribution * 2)}%`;
            const icon = idx === 0 ? 'trending_up' : idx === 1 ? 'assignment_late' : idx === 2 ? 'balance' : 'folder_off';

            return (
              <div 
                key={driver.factor} 
                className="group relative p-2 rounded-xl transition-all duration-200 hover:bg-surface-container-low/80 hover:shadow-sm border border-transparent hover:border-surface-container cursor-pointer"
                title={`${driver.factor}: +${driver.contribution}% delay impact (+${driver.days || Math.round(driver.contribution * 1.1)} days)`}
              >
                <div className="flex items-center justify-between font-body-sm text-body-sm mb-1.5">
                  <span className="font-medium text-on-surface flex items-center gap-1.5 group-hover:text-primary transition-colors">
                    <span className={`material-symbols-outlined text-[18px] transition-transform group-hover:scale-110 ${isCritical ? 'text-error' : 'text-amber-600'}`}>
                      {icon}
                    </span>
                    <span className="font-semibold">{driver.factor}</span>
                  </span>
                  <span className={`font-bold font-mono text-xs px-2 py-0.5 rounded-full transition-all duration-200 ${
                    isCritical 
                      ? 'text-error bg-error-container/20 group-hover:bg-error group-hover:text-white' 
                      : 'text-amber-700 bg-amber-100/60 group-hover:bg-amber-600 group-hover:text-white'
                  }`}>
                    +{driver.contribution}% Impact (+{driver.days || Math.round(driver.contribution * 1.1)} Days)
                  </span>
                </div>

                <div className="w-full bg-surface-container-high rounded-full h-3.5 overflow-hidden flex p-0.5">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-110 shadow-sm ${
                      isCritical
                        ? 'bg-gradient-to-r from-red-600 to-rose-500'
                        : 'bg-gradient-to-r from-amber-500 to-amber-600'
                    }`}
                    style={{ width: barWidth }}
                  ></div>
                </div>

                <div className="flex justify-between items-center text-caption font-caption text-on-surface-variant mt-1.5 text-[11px]">
                  <span className="truncate pr-2 group-hover:text-on-surface transition-colors">{driver.detail}</span>
                  <span className="font-mono shrink-0 font-semibold text-primary bg-primary/5 px-1.5 py-0.5 rounded border border-primary/10">
                    SHAP: {driver.shapValue}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Plain-Language Explainer Box */}
      <div className="mt-space-md p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm border border-surface-container">
        <span className="material-symbols-outlined text-primary text-[24px] flex-shrink-0 mt-0.5">smart_toy</span>
        <div className="space-y-1">
          <div className="font-label-action text-label-action text-primary font-bold flex items-center gap-2">
            <span>Why This Score? (ಸ್ವಯಂಚಾಲಿತ ವಿಶ್ಲೇಷಣೆ)</span>
            <span className="text-caption font-caption font-normal text-on-surface-variant text-xs">Model Version: XGBoost-KLA-v4.8</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-xs">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
