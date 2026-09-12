import React, { useState, useEffect, useMemo } from 'react';
import { useAuthRole } from '../../context/AuthRoleContext';

export default function TerminologyLegendModal() {
  const { isLegendOpen, setIsLegendOpen, language } = useAuthRole();
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'basic' | 'intermediate' | 'advanced'
  const [searchQuery, setSearchQuery] = useState('');

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isLegendOpen) {
        setIsLegendOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLegendOpen, setIsLegendOpen]);

  // Comprehensive, plain-language definitions for terms genuinely used across Bhoomi Setu
  const terms = useMemo(() => [
    // --- BASIC ---
    {
      id: 'survey-no',
      level: 'basic',
      name: 'Survey Number',
      kannada: 'ಸರ್ವೆ ನಂಬರ್ (Sy. No.)',
      context: 'GIS Map • Citizen Dossiers',
      definition: 'Unique identifier assigned to a specific parcel of land in government revenue records.',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'extent',
      level: 'basic',
      name: 'Extent (Area)',
      kannada: 'ವಿಸ್ತೀರ್ಣ (Acres / Guntas)',
      context: 'My Land • Public Land Bank',
      definition: 'The measured physical size of a land parcel, typically recorded in Acres and Guntas (1 Acre = 40 Guntas).',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'acquisition',
      level: 'basic',
      name: 'Land Acquisition',
      kannada: 'ಭೂಸ್ವಾಧೀನ ಪ್ರಕ್ರಿಯೆ',
      context: 'Statutory Stepper • Officer Portal',
      definition: 'The statutory process where the government acquires private land for public infrastructure projects with legally mandated compensation.',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'unencumbered',
      level: 'basic',
      name: 'Unencumbered / Safe & Clear',
      kannada: 'ಹಕ್ಕು ಮುಕ್ತ ಜಮೀನು',
      context: 'My Land • Public Land Bank',
      definition: 'Land that is completely free of ownership disputes, bank mortgages, court litigations, or acquisition corridors.',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'rtc-pahani',
      level: 'basic',
      name: 'RTC / Pahani',
      kannada: 'ಪಹಣಿ (Record of Rights)',
      context: 'Civilian Spatial Registry • e-Pothi',
      definition: 'Record of Rights, Tenancy and Crops — the official digital land title document issued by Karnataka’s Bhoomi system.',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },
    {
      id: 'ekhata',
      level: 'basic',
      name: 'e-Khata / Khata',
      kannada: 'ಇ-ಖಾತಾ ನೋಂದಣಿ',
      context: 'Landowner Profile • Revenue Sub-Division',
      definition: 'Electronic municipal or panchayat property account ledger that certifies the registered person liable to pay property tax.',
      badgeClass: 'bg-emerald-100 text-emerald-900 border-emerald-300'
    },

    // --- INTERMEDIATE ---
    {
      id: 'sec-11',
      level: 'intermediate',
      name: 'Section 11 Preliminary Notice',
      kannada: 'ಸೆಕ್ಷನ್ 11 ಪ್ರಾಥಮಿಕ ಅಧಿಸೂಚನೆ',
      context: 'Statutory Stepper (Stage 01)',
      definition: 'First statutory gazette notification under the RFCTLARR 2013 Act announcing the government’s intent to acquire land.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'sec-15',
      level: 'intermediate',
      name: 'Section 15 Hearing Objections',
      kannada: 'ಸೆಕ್ಷನ್ 15 ಆಕ್ಷೇಪಣೆ ವಿಚಾರಣೆ',
      context: 'Statutory Stepper (Stage 02)',
      definition: 'Statutory 60-day window allowing affected landowners to submit objections regarding survey boundaries, public necessity, or valuation.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'sec-19',
      level: 'intermediate',
      name: 'Section 19 Final Declaration',
      kannada: 'ಸೆಕ್ಷನ್ 19 ಅಂತಿಮ ಘೋಷಣೆ',
      context: 'Statutory Stepper (Stage 03) • Gazette Feed',
      definition: 'Conclusive declaration published in the Official Gazette stating that identified parcels are officially required for public infrastructure.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'sec-25-sla',
      level: 'intermediate',
      name: 'Section 25 Statutory SLA',
      kannada: 'ಶಾಸನಬದ್ಧ ಅವಧಿ ಮಿತಿ (12 Months)',
      context: 'Timeline Audit • Compliance Bar',
      definition: 'Legal rule under RFCTLARR 2013 requiring the Land Acquisition Officer to announce the final Award within 12 months of Section 19 notification.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'guidance-value',
      level: 'intermediate',
      name: 'Guidance Value / Circle Rate',
      kannada: 'ಮಾರ್ಗದರ್ಶಿ ಮೌಲ್ಯ (Circle Rate)',
      context: 'Valuation Comparison • Compensation Banner',
      definition: 'The government-set minimum baseline market value for land in a specific taluk/hobli, used as the foundation for statutory compensation.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'solatium',
      level: 'intermediate',
      name: 'Solatium (100% Statutory Bonus)',
      kannada: 'ಶೇಕಡ 100ರಷ್ಟು ಸೊಲೇಷಿಯಂ ಪರಿಹಾರ',
      context: 'Fair Compensation Breakdown',
      definition: 'Mandatory 100% additional bonus paid on top of the base market valuation under RFCTLARR 2013 to compensate for compulsory acquisition.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'rr-package',
      level: 'intermediate',
      name: 'Rehabilitation & Resettlement (R&R)',
      kannada: 'ಪುನರ್ವಸತಿ ಮತ್ತು ಪುನರ್ನಿರ್ಮಾಣ (R&R)',
      context: 'Senior Official Dashboard • Displaced Families',
      definition: 'Statutory welfare benefits, housing assistance, and livelihood grants provided to families and project-affected individuals.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    {
      id: 'risk-score',
      level: 'intermediate',
      name: 'Risk Score (0–100 Index)',
      kannada: 'ಅಪಾಯ ಸೂಚ್ಯಂಕ (Risk Metric)',
      context: 'Officer Dashboard • Map Pins',
      definition: 'Calibrated score assessing how likely a parcel or corridor is to experience administrative, legal, or valuation timeline delays.',
      badgeClass: 'bg-amber-100 text-amber-900 border-amber-300'
    },

    // --- ADVANCED ---
    {
      id: 'delay-forecast',
      level: 'advanced',
      name: 'Timeline Breach Forecast',
      kannada: 'ವಿಳಂಬ ಮುನ್ಸೂಚನೆ (+Days)',
      context: 'ML Delay Risk Page • Project Cards',
      definition: 'Machine-learning predicted extra days (+42d, +18d) a parcel will exceed its statutory SLA if administrative or judicial friction is unaddressed.',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    {
      id: 'shap-drivers',
      level: 'advanced',
      name: 'SHAP / Delay Drivers',
      kannada: 'ವಿಳಂಬ ಕಾರಣಗಳ ವಿಶ್ಲೇಷಣೆ (SHAP)',
      context: 'Feature Attribution Chart • Magistracy Dossier',
      definition: 'Explainable AI method that breaks down a parcel’s delay score into percentage root causes (e.g. circle rate contest, HC stay, joint khata heirship).',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    {
      id: 'cadastral-gis',
      level: 'advanced',
      name: 'Cadastral GIS & DGPS Mapping',
      kannada: 'ಕ್ಯಾಡಾಸ್ಟ್ರಲ್ ನಕ್ಷೆ & DGPS ಸಮೀಕ್ಷೆ',
      context: 'Interactive Leaflet Map • KSRSAC GIS',
      definition: 'High-precision satellite mapping that superimposes exact physical land boundary vectors and road corridors onto digital cadastral tiles.',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    {
      id: 'akarbandh',
      level: 'advanced',
      name: 'Akarbandh Revenue Sketch',
      kannada: 'ಆಕಾರಬಂಧ್ ನಕ್ಷೆ (Akarbandh)',
      context: 'Document Repository • Revenue Sub-Division',
      definition: 'Certified official revenue survey demarcation map depicting parcel sub-divisions (hissa), boundary coordinates, and road alignments.',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    {
      id: 'pfms-dbt',
      level: 'advanced',
      name: 'PFMS Direct Benefit Escrow',
      kannada: 'ಡಿಬಿಟಿ ಪರಿಹಾರ ಜಮೆ (PFMS Escrow)',
      context: 'Direct Benefit Escrow Stage • Bank of Baroda Link',
      definition: 'Public Financial Management System escrow channel facilitating automated, direct compensation transfers to verified Aadhaar-linked beneficiary accounts.',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300'
    },
    {
      id: 'postgis',
      level: 'advanced',
      name: 'PostGIS & Spatial Mesh',
      kannada: 'ಪೋಸ್ಟ್‌ಜಿಐಎಸ್ ಪ್ರಾದೇಶಿಕ ದತ್ತಸಂಚಯ',
      context: 'Planned Production Architecture Roadmap',
      definition: 'High-performance spatial database extension designed to store and query millions of geographic polygon vectors for instant alignment checks.',
      badgeClass: 'bg-sky-100 text-sky-900 border-sky-300'
    }
  ], []);

  // Filter terms by category and search query
  const filteredTerms = useMemo(() => {
    return terms.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.level === activeCategory;
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.kannada.toLowerCase().includes(query) ||
        item.definition.toLowerCase().includes(query) ||
        item.context.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [terms, activeCategory, searchQuery]);

  const counts = useMemo(() => {
    return {
      all: terms.length,
      basic: terms.filter((t) => t.level === 'basic').length,
      intermediate: terms.filter((t) => t.level === 'intermediate').length,
      advanced: terms.filter((t) => t.level === 'advanced').length
    };
  }, [terms]);

  return (
    <>
      {/* Persistent Floating 💡 Bulb Trigger Button */}
      <div className="fixed bottom-5 right-5 z-[550] flex items-center group">
        {/* Tooltip on hover */}
        <div className="opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 absolute right-14 bg-surface-container-lowest text-primary px-3 py-1.5 rounded-xl shadow-lg border border-surface-container text-xs font-bold whitespace-nowrap">
          <span>Terminology Legend | ಪದಕೋಶ</span>
        </div>

        <button
          onClick={() => setIsLegendOpen(!isLegendOpen)}
          aria-label="Toggle Terminology Legend"
          title="Bhoomi Setu Terminology Legend (ಪದಕೋಶ)"
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 ${
            isLegendOpen
              ? 'bg-amber-400 text-primary border-primary shadow-amber-300/50 ring-4 ring-amber-300/30'
              : 'bg-primary hover:bg-secondary text-white border-tertiary-fixed-dim/80 hover:shadow-primary/30'
          }`}
        >
          <span className="text-xl leading-none select-none transition-transform duration-300 group-hover:rotate-12">
            💡
          </span>
        </button>
      </div>

      {/* Modal / Slide-in Panel */}
      {isLegendOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[700] flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
          <div
            className="bg-surface-container-lowest rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-surface-container-high overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legend-title"
          >
            {/* Header */}
            <div className="p-space-lg bg-surface-container-low border-b border-surface-container flex flex-col gap-space-sm shrink-0">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center text-xl shrink-0 shadow-sm">
                    💡
                  </div>
                  <div>
                    <div className="flex items-center gap-space-xs">
                      <span className="font-caption text-caption uppercase tracking-wider text-secondary font-bold text-[11px]">
                        Statutory, Spatial & ML Glossary
                      </span>
                      <span className="text-outline-variant">•</span>
                      <span className="font-label-bilingual-kannada text-on-surface-variant text-xs">
                        ಪದಕೋಶ ಮತ್ತು ವಿವರಣೆ
                      </span>
                    </div>
                    <h2 id="legend-title" className="font-headline-sm text-headline-sm text-primary font-bold text-lg sm:text-xl">
                      Bhoomi Setu Terminology Legend
                    </h2>
                  </div>
                </div>

                <button
                  onClick={() => setIsLegendOpen(false)}
                  aria-label="Close Terminology Legend"
                  className="p-1.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[22px]">close</span>
                </button>
              </div>

              {/* Search Bar & Category Filter Pills */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-xs pt-1">
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-bold">
                  <button
                    onClick={() => setActiveCategory('all')}
                    className={`px-3 py-1.5 rounded-xl transition-all ${
                      activeCategory === 'all'
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    All ({counts.all})
                  </button>
                  <button
                    onClick={() => setActiveCategory('basic')}
                    className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                      activeCategory === 'basic'
                        ? 'bg-emerald-700 text-white shadow-sm'
                        : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                    }`}
                  >
                    <span>Basic</span>
                    <span className="text-[10px] opacity-80">({counts.basic})</span>
                  </button>
                  <button
                    onClick={() => setActiveCategory('intermediate')}
                    className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                      activeCategory === 'intermediate'
                        ? 'bg-amber-700 text-white shadow-sm'
                        : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    <span>Intermediate</span>
                    <span className="text-[10px] opacity-80">({counts.intermediate})</span>
                  </button>
                  <button
                    onClick={() => setActiveCategory('advanced')}
                    className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 ${
                      activeCategory === 'advanced'
                        ? 'bg-sky-700 text-white shadow-sm'
                        : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
                    }`}
                  >
                    <span>Advanced</span>
                    <span className="text-[10px] opacity-80">({counts.advanced})</span>
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative shrink-0 sm:w-56">
                  <span className="material-symbols-outlined absolute left-2.5 top-2 text-[18px] text-on-surface-variant">
                    search
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search terms / ಹುಡುಕಿ..."
                    className="w-full pl-8 pr-3 py-1.5 bg-surface-container rounded-xl text-xs text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/40 border border-surface-container"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 top-2 text-on-surface-variant hover:text-on-surface text-xs"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Terms List Body */}
            <div className="p-space-md sm:p-space-lg overflow-y-auto space-y-space-sm flex-1">
              {filteredTerms.length === 0 ? (
                <div className="text-center py-12 text-on-surface-variant space-y-2">
                  <span className="material-symbols-outlined text-[36px] text-outline">search_off</span>
                  <p className="text-xs font-semibold">No terminology matching "{searchQuery}"</p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="text-xs text-primary font-bold hover:underline"
                  >
                    Reset Search & Filters
                  </button>
                </div>
              ) : (
                filteredTerms.map((term) => (
                  <div
                    key={term.id}
                    className="bg-surface-container-low hover:bg-surface-container p-space-md rounded-2xl border border-surface-container transition-all flex flex-col gap-1.5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-subheading font-bold text-primary text-sm sm:text-base">
                          {term.name}
                        </h3>
                        <span className="font-label-bilingual-kannada text-on-surface-variant text-xs font-medium">
                          {term.kannada}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border capitalize ${term.badgeClass}`}>
                          {term.level}
                        </span>
                        <span className="bg-surface-container px-2 py-0.5 rounded-full text-[10px] font-medium text-on-surface-variant border border-surface-container-high hidden sm:inline-block">
                          {term.context}
                        </span>
                      </div>
                    </div>

                    <p className="text-body-sm text-on-surface text-xs leading-relaxed">
                      {term.definition}
                    </p>

                    <div className="sm:hidden pt-0.5">
                      <span className="text-[10px] text-outline">
                        Used in: <strong className="text-on-surface-variant">{term.context}</strong>
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-space-md bg-surface-container-low border-t border-surface-container flex flex-wrap items-center justify-between gap-space-xs text-xs shrink-0">
              <div className="flex items-center gap-1.5 text-on-surface-variant text-[11px]">
                <span className="material-symbols-outlined text-[16px] text-primary">info</span>
                <span>Plain-language statutory definitions mapped to RFCTLARR 2013 & KSRSAC GIS specs.</span>
              </div>

              <button
                onClick={() => setIsLegendOpen(false)}
                className="bg-primary hover:bg-secondary text-on-primary font-bold px-space-md py-1.5 rounded-xl transition-colors text-xs shadow-sm cursor-pointer"
              >
                Close Legend
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
