import React from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function SystemStatusBadge({ compact = false }) {
  const { setIsTechStackOpen } = useAuthRole();

  return (
    <button
      onClick={() => setIsTechStackOpen(true)}
      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary text-[11px] font-bold transition-all border border-surface-container-high shadow-xs cursor-pointer hover:scale-105 active:scale-95"
      title="View Bhoomi Setu System Architecture & Stack"
    >
      <span className="material-symbols-outlined text-[14px]">account_tree</span>
      {!compact && <span>Architecture</span>}
    </button>
  );
}

