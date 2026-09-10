import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function TopHeader({ activeFlowStep = "Monitor" }) {
  const { role, setRole, language, toggleLanguage, notificationCount } = useAuthRole();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleRoleSelect = (newRole) => {
    setRole(newRole);
    setRoleDropdownOpen(false);
    if (newRole === 'officer') navigate('/officer/dashboard');
    else if (newRole === 'senior') navigate('/senior/dashboard');
    else if (newRole === 'citizen') navigate('/citizen/my-land');
  };

  const steps = ["Find", "Monitor", "Predict", "Explain", "Prevent", "Act"];

  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-gutter-desktop border-b border-surface-container-high/60">
      <div className="flex items-center gap-space-sm">
        <span className="font-label-bilingual-kannada text-label-bilingual-kannada bg-surface-container px-space-xs py-1 rounded text-on-surface-variant font-medium">
          {language === 'kn' ? 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಭೂಸ್ವಾಧೀನ ವೇದಿಕೆ' : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಭೂಸ್ವಾಧೀನ ವೇದಿಕೆ | Bhoomi Setu'}
        </span>
        
        {/* Core lifecycle ribbon indicator */}
        <div className="hidden xl:flex items-center gap-space-xs text-caption font-caption text-on-surface-variant font-medium">
          {steps.map((step, idx) => {
            const isActive = step === activeFlowStep;
            return (
              <React.Fragment key={step}>
                {idx > 0 && <span className="text-outline-variant">→</span>}
                <span className={`px-2 py-0.5 rounded transition-all ${
                  isActive 
                    ? 'bg-primary text-on-primary font-bold shadow-sm' 
                    : 'text-primary hover:bg-surface-container'
                }`}>
                  {step}
                </span>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-space-md">
        {/* Search Bar */}
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-2.5 top-2 text-[18px] text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            placeholder="Search Survey No. / Khasra..."
            className="pl-8 pr-3 py-1.5 rounded-lg bg-surface-container text-body-sm font-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary w-60 transition-all focus:w-72"
          />
        </div>

        {/* Language switch button */}
        <button
          onClick={toggleLanguage}
          className="px-2.5 py-1 rounded-md bg-surface-container-high hover:bg-primary hover:text-on-primary transition-colors text-caption font-caption font-bold text-primary"
          title="Toggle Language"
        >
          {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
        </button>

        {/* Role Switcher Pill */}
        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-caption font-caption font-bold hover:bg-secondary-fixed-dim transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">switch_account</span>
            <span className="capitalize">{role === 'senior' ? 'Senior Official' : role === 'citizen' ? 'Citizen' : 'Govt Officer'}</span>
            <span className="material-symbols-outlined text-[14px]">expand_more</span>
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-xl border border-surface-container-high py-1 z-50 animate-in fade-in zoom-in-95">
              <div className="px-3 py-1.5 text-[11px] font-bold uppercase text-on-surface-variant tracking-wider">
                Switch Portal Role
              </div>
              <button
                onClick={() => handleRoleSelect('officer')}
                className={`w-full text-left px-3 py-2 text-body-sm hover:bg-surface-container transition-colors flex items-center justify-between ${
                  role === 'officer' ? 'text-primary font-bold bg-primary-container/10' : 'text-on-surface'
                }`}
              >
                <span>Govt Officer</span>
                {role === 'officer' && <span className="material-symbols-outlined text-[16px] text-primary">check</span>}
              </button>
              <button
                onClick={() => handleRoleSelect('senior')}
                className={`w-full text-left px-3 py-2 text-body-sm hover:bg-surface-container transition-colors flex items-center justify-between ${
                  role === 'senior' ? 'text-primary font-bold bg-primary-container/10' : 'text-on-surface'
                }`}
              >
                <span>Senior Official</span>
                {role === 'senior' && <span className="material-symbols-outlined text-[16px] text-primary">check</span>}
              </button>
              <button
                onClick={() => handleRoleSelect('citizen')}
                className={`w-full text-left px-3 py-2 text-body-sm hover:bg-surface-container transition-colors flex items-center justify-between ${
                  role === 'citizen' ? 'text-primary font-bold bg-primary-container/10' : 'text-on-surface'
                }`}
              >
                <span>Citizen</span>
                {role === 'citizen' && <span className="material-symbols-outlined text-[16px] text-primary">check</span>}
              </button>
            </div>
          )}
        </div>

        {/* Notifications Icon */}
        <Link
          to="/citizen/applications"
          aria-label="Notifications"
          className="relative p-space-xs rounded-lg hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error animate-pulse"></span>
          )}
        </Link>

        {/* User Profile Avatar */}
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm">
          <span className="material-symbols-outlined text-[18px]">person</span>
        </div>
      </div>
    </header>
  );
}
