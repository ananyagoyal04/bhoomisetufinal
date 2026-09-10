import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function SystemStatusBadge({ compact = false }) {
  const { apiStatus, setIsTechStackOpen } = useAuthRole();

  const isLive = apiStatus === 'live';
  const isCached = apiStatus === 'cached';
  const isConnecting = apiStatus === 'connecting';

  return (
    <div className="flex items-center gap-1.5">
      {/* Status Pill */}
      <div
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all ${
          isLive
            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
            : isCached
            ? 'bg-amber-50 text-amber-900 border-amber-300'
            : 'bg-sky-50 text-sky-800 border-sky-300'
        }`}
        title={
          isLive
            ? 'FastAPI Backend connected at http://localhost:8000'
            : isCached
            ? 'FastAPI offline: Serving resilient bundled JSON datasets'
            : 'Connecting to FastAPI Mock Service...'
        }
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isLive
              ? 'bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse'
              : isCached
              ? 'bg-amber-500'
              : 'bg-sky-500 animate-ping'
          }`}
        ></span>
        <span className="tracking-tight">
          {isLive
            ? 'Mock API: Live'
            : isCached
            ? 'Mock API: Cached (offline)'
            : 'Mock API: Connecting...'}
        </span>
      </div>

      {/* Tech Stack Entry Button */}
      <button
        onClick={() => setIsTechStackOpen(true)}
        className="flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-[11px] font-bold transition-all border border-surface-container-high shadow-xs cursor-pointer hover:scale-105 active:scale-95"
        title="View Bhoomi Setu System Architecture & Stack"
      >
        <span className="material-symbols-outlined text-[14px]">account_tree</span>
        {!compact && <span>Architecture</span>}
      </button>
    </div>
  );
}
