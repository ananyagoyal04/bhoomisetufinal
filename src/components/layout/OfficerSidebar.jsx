import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function OfficerSidebar() {
  const { language, toggleLanguage, setIsTechStackOpen } = useAuthRole();

  const navItems = [
    {
      to: "/officer/dashboard",
      label: "Officer Overview",
      kannada: "ಅಧಿಕಾರಿ ಅವಲೋಕನ",
      icon: "dashboard"
    },
    {
      to: "/officer/project/prr-phase2",
      label: "Spatial GIS & Map",
      kannada: "ಪ್ರಾದೇಶಿಕ ಜಿಐಎಸ್ ನಕ್ಷೆ",
      icon: "layers"
    },
    {
      to: "/officer/parcel/142-2A/risk",
      label: "ML Delay & Approval",
      kannada: "ವಿಳಂಬ ಮುನ್ಸೂಚನೆ",
      icon: "psychology"
    },
    {
      to: "/senior/dashboard",
      label: "Senior Official Portal",
      kannada: "ಉನ್ನತ ಅಧಿಕಾರಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      icon: "analytics"
    },
    {
      to: "/citizen/my-land",
      label: "Citizen Portal",
      kannada: "ನಾಗರಿಕ ಪೋರ್ಟಲ್",
      icon: "public"
    }
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-lowest z-50 flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-surface-container-high/60 transition-all">
      {/* Brand Header */}
      <Link to="/" className="p-space-lg flex items-center gap-space-sm bg-primary text-on-primary hover:bg-primary-container transition-colors group">
        <div className="w-9 h-9 rounded-xl bg-surface-container-lowest/15 flex items-center justify-center text-primary-fixed p-1 group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-[24px]">satellite_alt</span>
        </div>
        <div className="flex flex-col">
          <span className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight">
            {language === 'kn' ? 'ಭೂಮಿ ಸೇತು' : 'ಭೂಮಿ ಸೇತು | Bhoomi Setu'}
          </span>
          <span className="font-caption text-caption text-on-primary-container tracking-wider uppercase font-semibold text-[10px]">
            Spatial Operations • KLA 2013
          </span>
        </div>
      </Link>

      {/* Portal Context Pill */}
      <div className="px-space-md py-space-sm bg-surface-container-low border-b border-surface-container">
        <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant">
          <span className="font-medium">Context: K-GIS Spatial Node</span>
          <button
            onClick={() => setIsTechStackOpen(true)}
            className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold text-[10px] hover:bg-secondary hover:text-white transition-colors cursor-pointer"
          >
            ARCHITECTURE
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-space-sm py-space-md space-y-space-xxs overflow-y-auto">
        <div className="px-space-sm py-space-xxs text-caption font-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
          Acquisition Lifecycle
        </div>

        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-space-sm px-space-md py-space-sm rounded-xl transition-all duration-150 ${
                isActive
                  ? 'bg-primary-container text-on-primary font-bold shadow-sm translate-x-1'
                  : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface hover:translate-x-0.5'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <div className="flex flex-col">
              <span className="font-label-action text-label-action leading-tight">{item.label}</span>
              {language === 'kn' && (
                <span className="font-label-bilingual-kannada text-[10px] text-primary-fixed-dim">{item.kannada}</span>
              )}
            </div>
          </NavLink>
        ))}

        <div className="pt-space-md px-space-sm py-space-xxs text-caption font-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
          Statutory Stages
        </div>

        <Link
          to="/officer/dashboard"
          className="flex items-center gap-space-sm px-space-md py-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all text-body-sm hover:translate-x-0.5"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary">travel_explore</span>
          <span>1. Find & Survey</span>
        </Link>
        <Link
          to="/officer/project/prr-phase2"
          className="flex items-center gap-space-sm px-space-md py-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all text-body-sm hover:translate-x-0.5"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary">radar</span>
          <span>2. Monitor Progress</span>
        </Link>
        <Link
          to="/officer/parcel/142-2A/risk"
          className="flex items-center gap-space-sm px-space-md py-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all text-body-sm hover:translate-x-0.5"
        >
          <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">psychology</span>
          <span>3. Predict & Explain</span>
        </Link>
        <Link
          to="/senior/dashboard"
          className="flex items-center gap-space-sm px-space-md py-space-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all text-body-sm hover:translate-x-0.5"
        >
          <span className="material-symbols-outlined text-[18px] text-secondary">gavel</span>
          <span>4. Prevent & Act</span>
        </Link>
      </nav>

      {/* Footer Info & Kannada Toggle */}
      <div className="p-space-md bg-surface-container-low border-t border-surface-container">
        <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant mb-space-xxs">
          <span className="font-medium text-xs">Kannada Mode</span>
          <button
            onClick={toggleLanguage}
            className="px-space-xs py-space-xxs rounded bg-surface-container-highest text-caption font-caption font-semibold hover:bg-primary hover:text-on-primary transition-colors text-xs cursor-pointer"
          >
            {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
          </button>
        </div>
        <div className="text-caption font-caption text-on-surface-variant text-[11px]">
          Revenue Dept, Govt. of Karnataka
        </div>
      </div>
    </aside>
  );
}
