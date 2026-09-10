import React from 'react';

export default function RiskGauge({
  score = 84,
  maxScore = 100,
  breachDays = 114,
  confidence = "91.4% (XGBoost v4.8)",
  targetDate = "15 Mar 2026",
  revisedDate = "07 Jul 2026"
}) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius; // 314.159
  const offset = circumference - (score / maxScore) * circumference;

  const isHigh = score >= 70;
  const isMed = score >= 40 && score < 70;
  const colorClass = isHigh ? 'stroke-error text-error' : isMed ? 'stroke-amber-500 text-amber-600' : 'stroke-secondary text-secondary';
  const bgBadgeClass = isHigh ? 'bg-error-container text-on-error-container' : isMed ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-secondary-container text-on-secondary-container';

  return (
    <div className="relative overflow-hidden bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between border border-surface-container-high/60">
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-error-container/20 blur-2xl pointer-events-none"></div>
      
      <div className="flex items-start justify-between">
        <div>
          <span className={`font-caption text-caption uppercase tracking-wider font-bold flex items-center gap-1 ${isHigh ? 'text-error' : 'text-secondary'}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${isHigh ? 'bg-error' : 'bg-secondary'}`}></span>
            {isHigh ? 'Severe Bottleneck Risk' : isMed ? 'Moderate Delay Risk' : 'Low Delay Risk'}
          </span>
          <div className="font-subheading text-subheading text-on-surface mt-1 font-semibold">
            Acquisition Velocity Index
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full text-caption font-caption font-semibold flex items-center gap-1.5 ${bgBadgeClass}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          <span>{isHigh ? 'ಅಧಿಕ ಅಪಾಯ | High Risk' : isMed ? 'ಮಧ್ಯಮ ಅಪಾಯ | Medium' : 'ಕಡಿಮೆ ಅಪಾಯ | Low'}</span>
        </div>
      </div>

      <div className="my-space-md flex flex-col sm:flex-row items-center gap-space-lg">
        {/* Circular SVG Risk Gauge */}
        <div className="relative w-32 h-32 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
            <circle
              className="stroke-surface-container-high"
              cx="60"
              cy="60"
              fill="transparent"
              r={radius}
              strokeWidth="10"
            />
            <circle
              className={`${colorClass} transition-all duration-1000 ease-out`}
              cx="60"
              cy="60"
              fill="transparent"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              strokeWidth="10"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className={`font-display-hero text-headline-lg font-bold leading-none ${isHigh ? 'text-error' : 'text-secondary'}`}>
              {score}
            </span>
            <span className="font-caption text-caption text-on-surface-variant font-medium mt-0.5">
              / 100
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center text-center sm:text-left">
          <div className="font-caption text-caption uppercase tracking-wide text-on-surface-variant font-semibold">
            Predicted Timeline Breach
          </div>
          <div className={`font-headline-md text-headline-md font-bold mt-0.5 ${isHigh ? 'text-error' : 'text-secondary'}`}>
            +{breachDays} Days
          </div>
          <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug">
            Beyond standard statutory SLA threshold (Sec 11 to Sec 19 gazetting window)
          </div>
          <div className="mt-2 text-caption font-caption text-outline">
            Confidence Interval: <span className="font-semibold text-on-surface">{confidence}</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center justify-between text-body-sm">
        <div className="flex items-center gap-space-xs text-on-surface-variant text-xs">
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">schedule</span>
          <span>Target Statutory Deadline:</span>
        </div>
        <div className="text-right text-xs">
          <span className="font-semibold text-on-surface line-through text-caption">{targetDate}</span>
          <span className={`ml-2 font-bold font-body-sm ${isHigh ? 'text-error' : 'text-secondary'}`}>{revisedDate}</span>
        </div>
      </div>
    </div>
  );
}
