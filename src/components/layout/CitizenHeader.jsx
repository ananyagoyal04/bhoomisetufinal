import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useAuthRole } from '../../context/AuthRoleContext';
import SystemStatusBadge from './SystemStatusBadge';

export default function CitizenHeader() {
  const { role, setRole, language, toggleLanguage, setIsTechStackOpen } = useAuthRole();
  const navigate = useNavigate();

  const handleRoleSwitch = (newRole) => {
    setRole(newRole);
    if (newRole === 'officer') navigate('/officer/dashboard');
    else if (newRole === 'senior') navigate('/senior/dashboard');
    else if (newRole === 'citizen') navigate('/citizen/my-land');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-primary text-on-primary shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-all">
      {/* Top Statutory Sub-bar */}
      <div className="bg-primary-container/60 px-margin-desktop py-space-xxs hidden lg:flex items-center justify-between text-caption font-caption text-on-primary-container border-b border-white/5">
        <div className="flex items-center gap-space-sm">
          <span>ಕರ್ನಾಟಕ ಸರ್ಕಾರ | Government of Karnataka</span>
          <span className="opacity-40">•</span>
          <span>Bhoomi Spatial Records Governance</span>
        </div>
        <div className="flex items-center gap-space-md">
          {/* System Status in Citizen Bar */}
          <SystemStatusBadge compact={true} />

          <div className="flex items-center gap-space-xxs text-on-primary-fixed-variant">
            <button
              onClick={toggleLanguage}
              className={`hover:text-on-primary font-medium transition-colors cursor-pointer ${language === 'kn' ? 'text-on-primary font-bold underline' : 'text-on-primary-container'}`}
            >
              ಕನ್ನಡ
            </button>
            <span className="opacity-40">/</span>
            <button
              onClick={toggleLanguage}
              className={`hover:text-on-primary font-medium transition-colors cursor-pointer ${language === 'en' ? 'text-on-primary font-bold underline' : 'text-on-primary-container'}`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex items-center justify-between gap-space-md">
        <Link to="/" className="flex items-center gap-space-md group">
          <div className="w-10 h-10 rounded-xl bg-surface-container-lowest/20 flex items-center justify-center text-primary-fixed group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-[26px]">public</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-on-primary font-bold tracking-tight">
                ಭೂಮಿ ಸೇತು
              </span>
              <span className="text-on-primary-container opacity-60 font-light">|</span>
              <span className="font-headline-sm text-headline-sm text-on-primary font-semibold tracking-tight">
                BHOOMI SETU
              </span>
            </div>
            <span className="font-label-bilingual-kannada text-label-bilingual-kannada text-on-primary-container hidden sm:inline text-xs">
              Karnataka Spatial Land Acquisition & Citizen Portal
            </span>
          </div>
        </Link>

        {/* Citizen Navigation Items */}
        <nav className="hidden md:flex items-center gap-space-xs p-space-xxs bg-primary-container/30 rounded-2xl border border-white/10">
          <NavLink
            to="/citizen/my-land"
            className={({ isActive }) =>
              `px-space-md py-space-xs text-label-action font-label-action rounded-xl transition-all ${
                isActive
                  ? 'bg-primary-container text-on-primary shadow-sm font-bold scale-[1.02]'
                  : 'text-on-primary-container hover:bg-primary-container/50 hover:text-on-primary'
              }`
            }
          >
            My Land Dossier
          </NavLink>
          <NavLink
            to="/citizen/search"
            className={({ isActive }) =>
              `px-space-md py-space-xs text-label-action font-label-action rounded-xl transition-all ${
                isActive
                  ? 'bg-primary-container text-on-primary shadow-sm font-bold scale-[1.02]'
                  : 'text-on-primary-container hover:bg-primary-container/50 hover:text-on-primary'
              }`
            }
          >
            Public Land Bank
          </NavLink>
          <NavLink
            to="/citizen/applications"
            className={({ isActive }) =>
              `px-space-md py-space-xs text-label-action font-label-action rounded-xl transition-all ${
                isActive
                  ? 'bg-primary-container text-on-primary shadow-sm font-bold scale-[1.02]'
                  : 'text-on-primary-container hover:bg-primary-container/50 hover:text-on-primary'
              }`
            }
          >
            Applications & Alerts
          </NavLink>
        </nav>

        {/* Action Controls & Role Switcher */}
        <div className="flex items-center gap-space-sm">
          <button
            onClick={() => handleRoleSwitch('officer')}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary text-caption font-caption font-semibold transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">admin_panel_settings</span>
            <span>Officer View</span>
          </button>

          <button
            onClick={() => setIsTechStackOpen(true)}
            className="p-space-xs rounded-lg hover:bg-primary-container text-on-primary-container hover:text-on-primary transition-colors cursor-pointer"
            title="System Architecture"
          >
            <span className="material-symbols-outlined text-[20px]">account_tree</span>
          </button>
          
          <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs shadow-sm hover:opacity-90 transition-opacity cursor-pointer">
            KR
          </div>
        </div>
      </div>

      {/* Step Ribbon */}
      <div className="bg-surface-container-low text-on-surface-variant py-space-xs px-margin-desktop overflow-x-auto shadow-[0_1px_4px_rgba(0,0,0,0.02)] hidden lg:block border-b border-surface-container-high/40">
        <div className="max-w-container-max mx-auto flex items-center justify-center gap-space-md text-caption font-caption tracking-wider uppercase font-semibold text-on-surface-variant">
          <span className="flex items-center gap-space-xxs text-primary"><span className="material-symbols-outlined text-[16px]">search</span> Find</span>
          <span className="text-outline-variant">→</span>
          <span className="flex items-center gap-space-xxs text-primary"><span className="material-symbols-outlined text-[16px]">visibility</span> Monitor</span>
          <span className="text-outline-variant">→</span>
          <span className="flex items-center gap-space-xxs text-primary"><span className="material-symbols-outlined text-[16px]">insights</span> Predict</span>
          <span className="text-outline-variant">→</span>
          <span className="flex items-center gap-space-xxs text-primary"><span className="material-symbols-outlined text-[16px]">description</span> Explain</span>
          <span className="text-outline-variant">→</span>
          <span className="flex items-center gap-space-xxs text-primary"><span className="material-symbols-outlined text-[16px]">gshield</span> Prevent</span>
          <span className="text-outline-variant">→</span>
          <span className="flex items-center gap-space-xxs text-primary font-bold"><span className="material-symbols-outlined text-[16px]">gavel</span> Act</span>
        </div>
      </div>
    </header>
  );
}

export function CitizenFooter() {
  const { setIsTechStackOpen } = useAuthRole();

  return (
    <footer className="w-full bg-surface-container-low text-on-surface-variant mt-space-3xl border-t border-surface-container-high/60">
      <div className="max-w-container-max mx-auto px-margin-desktop py-space-2xl grid grid-cols-1 md:grid-cols-4 gap-space-xl">
        <div className="space-y-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">
              ಭೂಮಿ ಸೇತು
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Karnataka State Integrated Spatial Land Acquisition & Governance Information System. Department of Revenue, Government of Karnataka.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setIsTechStackOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-on-primary text-xs font-bold hover:bg-secondary transition-all cursor-pointer shadow-sm"
            >
              <span className="material-symbols-outlined text-[16px]">account_tree</span>
              <span>Engineering & Tech Stack</span>
            </button>
          </div>
        </div>

        <div>
          <h4 className="font-subheading text-subheading text-primary mb-space-sm font-semibold">
            Public Access
          </h4>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <li><Link to="/citizen/my-land" className="hover:text-primary transition-colors">Check Parcel Status</Link></li>
            <li><Link to="/citizen/applications" className="hover:text-primary transition-colors">Public Notification Gazette</Link></li>
            <li><Link to="/citizen/my-land" className="hover:text-primary transition-colors">Landowner Compensation Calculator</Link></li>
            <li><Link to="/citizen/search" className="hover:text-primary transition-colors">Public Land Bank Discovery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-subheading text-subheading text-primary mb-space-sm font-semibold">
            Statutory Administration
          </h4>
          <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
            <li><span className="text-on-surface-variant">Revenue Department Circulars</span></li>
            <li><span className="text-on-surface-variant">Karnataka Land Reforms Guidelines</span></li>
            <li><span className="text-on-surface-variant">Survey Cadastral Maps</span></li>
            <li><span className="text-on-surface-variant">High Court Directives</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-subheading text-subheading text-primary mb-space-sm font-semibold">
            Security & Compliance
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm leading-relaxed">
            Certified Geo-Spatial Ledger powered by Karnataka State Remote Sensing Applications Centre (KSRSAC).
          </p>
          <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xxs rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>Official Government Portal</span>
          </div>
        </div>
      </div>

      <div className="bg-surface-container py-space-sm px-margin-desktop text-center font-caption text-caption text-on-surface-variant border-t border-surface-container-high/40 flex flex-wrap items-center justify-between gap-2 max-w-container-max mx-auto">
        <span>© 2026 Revenue Department, Government of Karnataka. All Rights Reserved.</span>
        <SystemStatusBadge />
      </div>
    </footer>
  );
}
