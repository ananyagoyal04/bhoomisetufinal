import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CitizenHeader, { CitizenFooter } from '../components/layout/CitizenHeader';

export default function CitizenMyLand() {
  const [subscribed, setSubscribed] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col justify-between">
      <CitizenHeader />

      <main className="w-full pt-28 bg-background flex-1">
        <div className="flex flex-col w-full">
          
          {/* Landowner Profile Bar */}
          <div className="w-full bg-surface-container-low px-margin-mobile md:px-margin-desktop py-space-md shadow-sm border-b border-surface-container">
            <div className="max-w-container-max mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-space-xs">
                    <span className="font-subheading text-subheading text-primary font-bold">ಶ್ರೀ ಕೆ. ರಾಮಮೂರ್ತಿ</span>
                    <span className="text-on-surface-variant font-caption text-caption">|</span>
                    <span className="font-subheading text-subheading text-on-surface font-bold">Sri K. Ramamurthy</span>
                    <span className="px-space-xs py-0.5 rounded-full bg-secondary text-on-secondary font-caption text-caption text-[10px] font-bold">
                      Aadhaar Linked
                    </span>
                  </div>
                  <span className="font-caption text-caption text-on-surface-variant text-xs">
                    e-Khata Identifier: <span className="font-bold text-primary">BLR-DEV-88219</span> • Hobli: Kasaba • Taluk: Devanahalli
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-space-sm self-start md:self-auto">
                <div className="bg-surface-container-lowest px-space-md py-space-xs rounded-xl shadow-sm flex items-center gap-space-xs border border-surface-container">
                  <span className="material-symbols-outlined text-secondary text-[20px]">account_balance_wallet</span>
                  <div className="flex flex-col text-xs">
                    <span className="text-on-surface-variant">PFMS Disbursal Escrow</span>
                    <span className="font-label-action font-bold text-primary">Bank of Baroda •••• 4409</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate('/citizen/applications')}
                  className="bg-surface-container-lowest hover:bg-surface-container text-primary font-label-action text-xs font-bold px-space-md py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-1 border border-surface-container"
                >
                  <span className="material-symbols-outlined text-[18px]">history</span>
                  <span>Timeline</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-space-lg w-full">
            
            {/* Context Title Banner */}
            <div className="mb-space-lg bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md border border-surface-container-high/60">
              <div className="flex items-start gap-space-sm">
                <div className="p-2.5 rounded-xl bg-primary-container text-on-primary shrink-0 mt-0.5 shadow-sm">
                  <span className="material-symbols-outlined text-[22px]">policy</span>
                </div>
                <div>
                  <div className="flex items-center gap-space-xs">
                    <h1 className="font-headline-sm text-headline-sm text-primary font-bold text-xl">
                      ನನ್ನ ಭೂಮಿ / My Land Holdings
                    </h1>
                    <span className="bg-tertiary-fixed text-on-tertiary-fixed px-space-xs py-0.5 rounded font-caption text-caption font-bold text-xs">
                      2 Registered Parcels
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 text-xs">
                    View statutory acquisition gazettes, real-time satellite survey boundaries, fair market RFCTLARR 2013 compensation calculations, and Direct Benefit Transfer (DBT) statuses.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto text-caption font-caption text-on-surface-variant bg-surface-container px-space-sm py-space-xs rounded-xl text-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                <span>KSRSAC GIS Sync: Today, 09:42 AM</span>
              </div>
            </div>

            {/* Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
              
              {/* Left Column: Spatial Demarcation & Stepper (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                
                {/* Visual Demarcation */}
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-md flex flex-col gap-space-sm relative overflow-hidden border border-surface-container-high/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">map</span>
                      <span className="font-subheading text-body-sm font-bold text-primary">
                        Spatial Survey Demarcation (Devanahalli)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-caption text-caption font-bold text-[11px]">
                      <span className="material-symbols-outlined text-[14px]">done_all</span>
                      <span>DGPS Survey Verified</span>
                    </div>
                  </div>

                  <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-inner border border-surface-container">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8VQHB2y4L3l-b4Qd8XwlsS3viZAFGvI-DGnLO6LIRaolGctxmBGBLLQv1U-_EPKbVtRdSvuMnDPJspe8ExtoKgIsQChVuYEL1ZFQpEwW1B6FJyreOOI1VgH9PCl_UhVoYf-OKgMAg9OlP-k9LCs3xf0goWeG0oDbbWY5e6wAoIMvGa0ni0K8VcwYtTP4wdA_Qzw7dPpn3vLPejpFoGGb-3VFrhw2O7KH6Oo60t6_i5qgRNN-H0w')" }}
                    ></div>
                    <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>

                    {/* SVG Boundaries */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 500 460">
                      <polygon fill="rgba(14, 106, 91, 0.25)" points="40,90 280,60 270,360 30,340" stroke="#0e6a5b" strokeDasharray="6,4" strokeWidth="3"></polygon>
                      <polygon fill="rgba(239, 68, 68, 0.4)" points="120,60 250,55 240,360 110,350" stroke="#ba1a1a" strokeWidth="3"></polygon>
                      <line stroke="#f9bd14" strokeDasharray="8,6" strokeWidth="4" x1="185" x2="175" y1="20" y2="420"></line>
                    </svg>

                    <div className="absolute top-4 left-4 bg-surface-container-lowest/95 backdrop-blur px-3 py-2 rounded-xl shadow-md flex flex-col gap-1 max-w-[240px] text-xs border border-surface-container">
                      <span className="font-bold text-primary flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-sm bg-primary"></span>
                        Sy No. 142/2A (3A 18G)
                      </span>
                      <span className="font-bold text-error flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-sm bg-error"></span>
                        Notified Corridor: 1A 12G (STRR)
                      </span>
                      <span className="font-bold text-secondary flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span>
                        Sy No. 142/2B (2A 06G - Retained)
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 bg-surface-container-lowest/95 backdrop-blur px-3 py-1 rounded-full shadow-md text-caption font-caption text-primary flex items-center gap-1 text-xs">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span>Lat: 13.2482° N, Lon: 77.7126° E</span>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between text-xs border border-surface-container">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-[20px]">pin_drop</span>
                      <div>
                        <span className="font-bold text-primary block">Survey Ground Verification</span>
                        <span className="text-on-surface-variant">Validated by Taluk Surveyor M. Chennappa on 04 Sep 2026</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-sm border border-surface-container-high/60">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-subheading text-body-sm font-bold text-primary">
                      Acquisition Pipeline Stage (Sy No. 142/2A)
                    </span>
                    <span className="text-secondary font-bold">Stage 4 of 6 (65% Complete)</span>
                  </div>
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
                    <div className="flex flex-col items-center">
                      <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center mb-1 font-bold">✓</span>
                      <span className="font-bold text-primary">Sec 11(1)</span>
                      <span className="text-[10px] text-on-surface-variant">Prelim Notice</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="w-6 h-6 rounded-full bg-secondary text-white text-xs flex items-center justify-center mb-1 font-bold">✓</span>
                      <span className="font-bold text-primary">Sec 15</span>
                      <span className="text-[10px] text-on-surface-variant">Objections</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="w-6 h-6 rounded-full bg-primary-container text-white text-xs flex items-center justify-center mb-1 font-bold">4</span>
                      <span className="font-bold text-primary">Sec 19(1)</span>
                      <span className="text-[10px] text-secondary font-bold">Declaration</span>
                    </div>
                    <div className="flex flex-col items-center opacity-50">
                      <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface text-xs flex items-center justify-center mb-1">5</span>
                      <span className="font-medium text-on-surface">Sec 23</span>
                      <span className="text-[10px] text-on-surface-variant">Award/DBT</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Parcel Cards (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-space-lg">
                
                {/* Parcel 1: Sy 142/2A */}
                <div className="bg-surface-container-lowest rounded-2xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg border border-surface-container-high/60">
                  <div className="p-space-lg flex flex-col gap-space-md">
                    <div className="flex flex-wrap items-start justify-between gap-space-xs">
                      <div>
                        <span className="font-label-bilingual-kannada text-secondary block text-xs">ದೇವನಹಳ್ಳಿ • ಕಸಬಾ ಹೋಬಳಿ</span>
                        <h3 className="font-headline-md text-headline-md text-primary font-bold text-xl">
                          Survey No. 142/2A
                        </h3>
                        <span className="font-caption text-caption text-on-surface-variant text-xs">
                          RTC Hissa No: 142/2A • Dry Farmland (ಖುಷ್ಕಿ)
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-error-container text-on-error-container font-caption text-caption font-bold text-xs">
                        <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                        <span>ಸೆಕ್ಷನ್ 19 ಘೋಷಿತ | Sec 19 Declared</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl text-xs border border-surface-container">
                      <div>
                        <span className="text-on-surface-variant block">Total Extent</span>
                        <span className="font-subheading font-bold text-primary text-sm">3A 18G</span>
                      </div>
                      <div>
                        <span className="text-error block">Acquisition Extent</span>
                        <span className="font-subheading font-bold text-error text-sm">1A 12G</span>
                      </div>
                      <div>
                        <span className="text-secondary block">Residual Safe Area</span>
                        <span className="font-subheading font-bold text-secondary text-sm">2A 06G</span>
                      </div>
                    </div>

                    {/* Compensation Banner */}
                    <div className="bg-primary text-on-primary p-space-md rounded-xl shadow-inner relative overflow-hidden">
                      <div className="flex items-start justify-between relative z-10">
                        <div>
                          <span className="font-caption text-on-primary-container uppercase tracking-wider block font-bold text-xs">
                            Statutory Compensation Estimate
                          </span>
                          <div className="font-display-hero text-display-hero font-bold tracking-tight text-white mt-1 text-2xl md:text-3xl">
                            ₹3,92,40,000
                          </div>
                          <span className="font-label-bilingual-kannada text-primary-fixed-dim text-xs">
                            ಮೂರು ಕೋಟಿ ತೊಂಬತ್ತೆರಡು ಲಕ್ಷ ನಲವತ್ತು ಸಾವಿರ ರೂಪಾಯಿಗಳು
                          </span>
                        </div>
                        <div className="px-space-xs py-1 rounded bg-primary-container text-on-primary text-caption font-caption text-[11px] font-bold">
                          RFCTLARR 2013
                        </div>
                      </div>

                      <div className="mt-space-md pt-space-xs flex flex-wrap gap-x-space-md gap-y-1 font-caption text-caption text-on-primary-container text-xs relative z-10">
                        <span>• Base Guideline Value: ₹1.12 Cr</span>
                        <span>• Solatium (100%): ₹1.12 Cr</span>
                        <span>• Multiplication Factor: 1.5x</span>
                        <span>• Additional Interest (12%): ₹24.4 Lakh</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-space-xs p-2.5 bg-surface-container rounded-xl font-caption text-caption text-on-surface-variant text-xs">
                      <span className="material-symbols-outlined text-primary text-[18px]">account_balance</span>
                      <span>Auto-credit Escrow Linked: <strong className="text-primary">Bank of Baroda (••••4409)</strong> | IFSC: BARB0DEVANA</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-space-xs pt-space-xxs text-xs">
                      <button
                        onClick={() => navigate('/citizen/applications')}
                        className="w-full sm:w-auto flex-1 bg-primary hover:bg-secondary text-on-primary font-bold py-2.5 px-space-md rounded-xl shadow-sm transition-colors flex items-center justify-center gap-1"
                      >
                        <span>View Acquisition Stage Tracker</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                      <button
                        onClick={() => navigate('/citizen/applications')}
                        className="w-full sm:w-auto bg-error-container hover:bg-error/20 text-on-error-container font-bold py-2.5 px-space-md rounded-xl transition-colors flex items-center justify-center gap-1"
                      >
                        <span className="material-symbols-outlined text-[18px]">gavel</span>
                        <span>Hearing Notice</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Parcel 2: Sy 142/2B (Safe & Clear) */}
                <div className="bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg flex flex-col gap-space-md transition-all duration-200 hover:shadow-md border border-surface-container-high/60">
                  <div className="flex flex-wrap items-start justify-between gap-space-xs">
                    <div>
                      <span className="font-label-bilingual-kannada text-secondary block text-xs">ದೇವನಹಳ್ಳಿ • ಕಸಬಾ ಹೋಬಳಿ</span>
                      <h3 className="font-headline-md text-headline-md text-primary font-bold text-xl">
                        Survey No. 142/2B
                      </h3>
                      <span className="font-caption text-caption text-on-surface-variant text-xs">
                        RTC Hissa No: 142/2B • Perennial Plantation (ತೋಟಗಾರಿಕೆ)
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption font-bold text-xs">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span>ಹಕ್ಕು ಮುಕ್ತ | Safe & Clear</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-md rounded-xl text-xs border border-surface-container">
                    <div>
                      <span className="text-on-surface-variant block">Total Extent</span>
                      <span className="font-subheading font-bold text-primary text-sm">2A 06G</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant block">Master Plan Zone</span>
                      <span className="font-subheading font-bold text-secondary text-sm">Agri Greenbelt</span>
                    </div>
                    <div>
                      <span className="text-on-surface-variant block">Acquisition Status</span>
                      <span className="font-subheading font-bold text-on-surface text-sm">Unencumbered</span>
                    </div>
                  </div>

                  <p className="font-body-sm text-body-sm text-on-surface-variant text-xs leading-relaxed">
                    This parcel is strictly outside the notified satellite alignment for the Satellite Town Ring Road (STRR). All municipal records, khata certificates, and title boundaries are in active legal standing without encumbrances.
                  </p>

                  <div className="flex items-center justify-between pt-space-xs text-xs">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                      <span>Digitally Certified RTC (ಪಹಣಿ) Updated 2026</span>
                    </div>
                    <span className="px-3 py-1 bg-surface-container-high text-primary rounded-lg font-bold">
                      Clear Standing
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* WhatsApp & SMS Subscription Strip */}
            <div className="mt-space-xl p-space-md bg-surface-container-low rounded-2xl flex flex-col md:flex-row items-center justify-between gap-space-md border border-surface-container">
              <div className="flex items-center gap-space-sm">
                <div className="p-2.5 rounded-full bg-secondary text-on-secondary shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">notifications_active</span>
                </div>
                <div>
                  <span className="font-subheading text-body-sm font-bold text-primary block">
                    Sign up for WhatsApp & SMS Gazette Alerts
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                    Receive automated notifications whenever Revenue Department gazette circulars are published for Devanahalli taluk.
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs w-full md:w-auto">
                <input
                  className="bg-surface-container-lowest px-space-md py-2 rounded-xl text-body-sm font-body-sm text-on-surface shadow-inner w-full md:w-48 text-xs border border-surface-container"
                  readOnly
                  type="text"
                  value="+91 98450 12890"
                />
                <button
                  onClick={() => setSubscribed(!subscribed)}
                  className="bg-primary hover:bg-secondary text-on-primary font-bold px-space-md py-2 rounded-xl transition-colors shrink-0 text-xs shadow-sm"
                >
                  {subscribed ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>

      <CitizenFooter />
    </div>
  );
}
