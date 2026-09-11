import React, { useState, useEffect } from 'react';
import CitizenHeader, { CitizenFooter } from '../components/layout/CitizenHeader';
import LeaseModal from '../components/modals/LeaseModal';
import { apiService } from '../services/api';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';

// Formatter to display coordinates in human-readable notation (e.g. 13.0984° N, 77.3925° E)
const formatCoordinates = (lat, lng) => {
  if (lat == null || lng == null) return '';
  const latDir = lat >= 0 ? 'N' : 'S';
  const lngDir = lng >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
};

// Reusable dark-teal pin matching the Bhoomi Setu design system with active highlight state
const createPinIcon = (isSelected = false) => L.divIcon({
  className: 'custom-leaflet-green-pin',
  html: `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: transform 0.25s ease;">
      <div style="
        width: ${isSelected ? '34px' : '28px'};
        height: ${isSelected ? '34px' : '28px'};
        border-radius: 50%;
        background-color: #0e6a5b;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        box-shadow: ${isSelected ? '0 0 0 4px rgba(14,106,91,0.35), 0 6px 16px rgba(14,106,91,0.5)' : '0 4px 12px rgba(14,106,91,0.4)'};
        border: 2px solid ${isSelected ? '#f9bd14' : '#ffffff'};
        transform: ${isSelected ? 'scale(1.15)' : 'scale(1)'};
        transition: all 0.25s ease;
      ">
        <span class="material-symbols-outlined" style="font-size: ${isSelected ? '18px' : '16px'};">domain</span>
      </div>
      <div style="
        width: 0; 
        height: 0; 
        border-left: ${isSelected ? '6px' : '5px'} solid transparent;
        border-right: ${isSelected ? '6px' : '5px'} solid transparent;
        border-top: ${isSelected ? '7px' : '6px'} solid #0e6a5b;
        margin-top: -1px;
      "></div>
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

// Map Controller to fit map bounds to the selected parcel's polygon boundary or pan to coordinates
function MapController({ selectedLand }) {
  const map = useMap();

  useEffect(() => {
    if (selectedLand) {
      if (selectedLand.boundary && selectedLand.boundary.length > 0) {
        map.fitBounds(selectedLand.boundary, {
          padding: [50, 50],
          maxZoom: 15,
          animate: true,
          duration: 1.0
        });
      } else {
        const lat = selectedLand.latitude ?? selectedLand.coordinates?.[0];
        const lng = selectedLand.longitude ?? selectedLand.coordinates?.[1];
        if (lat != null && lng != null) {
          const currentZoom = map.getZoom();
          const targetZoom = currentZoom < 12 ? 13 : currentZoom;
          map.flyTo([lat, lng], targetZoom, {
            duration: 1.0,
            easeLinearity: 0.25
          });
        }
      }
    }
  }, [selectedLand, map]);

  return null;
}

export default function CitizenSearch() {
  const [landList, setLandList] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [selectedLand, setSelectedLand] = useState(null);
  const [leaseModalOpen, setLeaseModalOpen] = useState(false);
  
  // Filter States
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedTaluk, setSelectedTaluk] = useState('all');
  const [maxExtent, setMaxExtent] = useState(50);
  const [classification, setClassification] = useState('all');

  useEffect(() => {
    async function loadData() {
      const data = await apiService.getAvailableLand();
      setLandList(data);
      setFilteredLands(data);
      if (data.length > 0) setSelectedLand(data[0]);
    }
    loadData();
  }, []);

  // Client-side filtering logic
  useEffect(() => {
    let result = landList;
    if (selectedDistrict !== 'all') {
      result = result.filter(l => l.district?.toLowerCase().includes(selectedDistrict.toLowerCase()));
    }
    if (selectedTaluk !== 'all') {
      result = result.filter(l => l.taluk?.toLowerCase().includes(selectedTaluk.toLowerCase()));
    }
    if (classification !== 'all') {
      result = result.filter(l => l.classification?.toLowerCase().includes(classification.toLowerCase()));
    }
    result = result.filter(l => (l.extentAcres || 2) <= maxExtent);
    setFilteredLands(result);
  }, [selectedDistrict, selectedTaluk, classification, maxExtent, landList]);

  const handleApplyLease = (land) => {
    setSelectedLand(land);
    setLeaseModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col justify-between">
      <CitizenHeader />

      <main className="w-full pt-28 bg-background flex-1">
        <div className="flex flex-col w-full">
          
          {/* Header Banner */}
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-space-md pb-space-lg w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="space-y-space-xxs">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-caption text-caption text-xs font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>ಅಧಿಕೃತ ಸಾರ್ವಜನಿಕ ಭೂ ಬ್ಯಾಂಕ್ • KSRSAC Verified Spatial Registry</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold text-2xl md:text-3xl">
                  Public Land Bank / ಲಭ್ಯವಿರುವ ಸರ್ಕಾರಿ ಜಮೀನುಗಳ ಹುಡುಕಾಟ
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl text-xs md:text-sm">
                  Empowering entrepreneurs, civic infrastructure developers, and registered citizens to transparently discover unencumbered Karnataka Government & KIADB institutional reserve parcels across Bengaluru Rural and Ramanagara districts.
                </p>
              </div>

              {/* Stats Chips */}
              <div className="flex items-center gap-space-sm self-start md:self-auto shrink-0 bg-surface-container-lowest shadow-sm rounded-2xl p-space-xs border border-surface-container">
                <div className="px-space-sm py-space-xxs text-right">
                  <div className="font-caption text-caption text-on-surface-variant text-[11px]">Active Land Pool</div>
                  <div className="font-headline-sm text-headline-sm text-primary font-bold text-lg">
                    7.6 <span className="font-body-sm font-normal text-on-surface-variant text-xs">Acres</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-surface-container-high"></div>
                <div className="px-space-sm py-space-xxs text-right">
                  <div className="font-caption text-caption text-on-surface-variant text-[11px]">Total Unencumbered</div>
                  <div className="font-headline-sm text-headline-sm text-secondary font-bold text-lg">100%</div>
                </div>
              </div>
            </div>

            {/* Filter Control Console */}
            <div className="mt-space-lg bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg border border-surface-container-high/60">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-space-md items-end">
                
                {/* District */}
                <div className="md:col-span-3 space-y-space-xxs">
                  <label className="block font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                    District / ಜಿಲ್ಲೆ
                  </label>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full bg-surface-container-low text-on-surface text-body-md rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container"
                  >
                    <option value="all">All Pilot Districts</option>
                    <option value="Bengaluru Rural">Bengaluru Rural (ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ)</option>
                    <option value="Ramanagara">Ramanagara (ರಾಮನಗರ)</option>
                  </select>
                </div>

                {/* Taluk */}
                <div className="md:col-span-3 space-y-space-xxs">
                  <label className="block font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                    Taluk / ತಾಲೂಕು
                  </label>
                  <select
                    value={selectedTaluk}
                    onChange={(e) => setSelectedTaluk(e.target.value)}
                    className="w-full bg-surface-container-low text-on-surface text-body-md rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container"
                  >
                    <option value="all">All Taluks</option>
                    <option value="Nelamangala">Nelamangala (ನೆಲಮಂಗಲ)</option>
                    <option value="Bidadi">Bidadi (ಬಿದಡಿ)</option>
                    <option value="Devanahalli">Devanahalli (ದೇವನಹಳ್ಳಿ)</option>
                  </select>
                </div>

                {/* Classification */}
                <div className="md:col-span-3 space-y-space-xxs">
                  <label className="block font-caption text-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                    Classification / ಭೂ ವರ್ಗೀಕರಣ
                  </label>
                  <select
                    value={classification}
                    onChange={(e) => setClassification(e.target.value)}
                    className="w-full bg-surface-container-low text-on-surface text-body-md rounded-xl py-2.5 px-3 text-xs focus:outline-none focus:ring-1 focus:ring-primary border border-surface-container"
                  >
                    <option value="all">All Classifications</option>
                    <option value="KIADB">KIADB Industrial Bank</option>
                    <option value="Gomala">Government Gomala (ಗೋಮಾಳ)</option>
                    <option value="Kharab">Govt Kharab Reserve</option>
                  </select>
                </div>

                {/* Extent Slider */}
                <div className="md:col-span-3 space-y-space-xxs">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-caption uppercase tracking-wider text-on-surface-variant font-bold text-[11px]">
                      Extent / ವಿಸ್ತೀರ್ಣ
                    </label>
                    <span className="font-bold text-secondary">Up to {maxExtent} Acres</span>
                  </div>
                  <div className="pt-2 px-1">
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={maxExtent}
                      onChange={(e) => setMaxExtent(Number(e.target.value))}
                      className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>

              </div>

              {/* Tag bar */}
              <div className="mt-space-md pt-space-sm flex flex-wrap items-center justify-between gap-space-sm border-t border-surface-container text-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant">
                  <span>Found: <strong className="text-primary">{filteredLands.length} Available Plots</strong></span>
                  <span>•</span>
                  <span>100% Clear Title Verification</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedDistrict('all');
                    setSelectedTaluk('all');
                    setClassification('all');
                    setMaxExtent(50);
                  }}
                  className="text-primary font-bold hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Split Map & Cards */}
            <div className="mt-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start pb-space-3xl">
              
              {/* GIS Map Canvas (7 cols) */}
              <div className="lg:col-span-7 flex flex-col space-y-space-sm">
                <div className="relative w-full h-[540px] rounded-2xl overflow-hidden shadow-md bg-surface-container-highest border border-surface-container-high/60">
                  <MapContainer
                    center={[13.0984, 77.3925]}
                    zoom={11}
                    scrollWheelZoom={false}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    <MapController selectedLand={selectedLand} />

                    {/* Render Polygon boundary for selected land parcel only */}
                    {selectedLand?.boundary && (
                      <Polygon
                        positions={selectedLand.boundary}
                        pathOptions={{
                          color: '#0e6a5b',       // Solid darker teal/green border
                          weight: 2.5,
                          fillColor: '#22C55E',   // Light green fill
                          fillOpacity: 0.25,
                          dashArray: '4, 4'
                        }}
                      >
                        <Tooltip sticky direction="top">
                          <div className="font-sans text-xs p-1">
                            <strong className="text-primary block font-bold">{selectedLand.surveyNo} ({selectedLand.extent})</strong>
                            <span className="text-on-surface-variant text-[11px] block">{selectedLand.classification}</span>
                            <span className="text-secondary font-mono text-[10px] block font-semibold mt-0.5">
                              {formatCoordinates(selectedLand.latitude ?? selectedLand.coordinates?.[0], selectedLand.longitude ?? selectedLand.coordinates?.[1])}
                            </span>
                          </div>
                        </Tooltip>
                      </Polygon>
                    )}

                    {filteredLands.map((land) => {
                      const isMarkerSelected = selectedLand?.id === land.id;
                      const lat = land.latitude ?? land.coordinates?.[0];
                      const lng = land.longitude ?? land.coordinates?.[1];

                      return (
                        <Marker
                          key={land.id}
                          position={[lat, lng]}
                          icon={createPinIcon(isMarkerSelected)}
                          zIndexOffset={isMarkerSelected ? 1000 : 0}
                          eventHandlers={{
                            click: () => setSelectedLand(land),
                          }}
                        >
                          <Popup>
                            <div className="p-1 text-xs">
                              <div className="font-bold text-primary">{land.surveyNo} ({land.extent})</div>
                              <div className="text-on-surface-variant">{land.location}, {land.district}</div>
                              <div className="text-secondary font-bold mt-1">{land.type}</div>
                              <div className="text-on-surface-variant font-mono text-[10px] mt-0.5">
                                {formatCoordinates(lat, lng)}
                              </div>
                              <button
                                onClick={() => handleApplyLease(land)}
                                className="w-full mt-2 py-1 bg-primary text-white rounded font-bold text-[10px]"
                              >
                                Apply for Lease
                              </button>
                            </div>
                          </Popup>
                        </Marker>
                      );
                    })}
                  </MapContainer>

                  <div className="absolute bottom-3 left-3 bg-surface-container-lowest/95 backdrop-blur px-3 py-1.5 rounded-xl shadow-md text-caption font-caption text-primary flex items-center gap-2 text-xs z-[400] border border-surface-container">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span>
                      {selectedLand 
                        ? `Selected: Sy. ${selectedLand.surveyNo} (${formatCoordinates(selectedLand.latitude ?? selectedLand.coordinates?.[0], selectedLand.longitude ?? selectedLand.coordinates?.[1])})`
                        : 'KSRSAC Unencumbered Cadastral Reserves Active'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Land Cards (5 cols) */}
              <div className="lg:col-span-5 flex flex-col space-y-space-md">
                {filteredLands.map((land) => {
                  const isSelected = selectedLand?.id === land.id;

                  return (
                    <div
                      key={land.id}
                      onClick={() => setSelectedLand(land)}
                      className={`p-space-md rounded-2xl bg-surface-container-lowest shadow-sm transition-all duration-200 cursor-pointer border ${
                        isSelected 
                          ? 'border-primary border-l-4 border-l-primary bg-primary/[0.03] ring-2 ring-primary/20 shadow-md' 
                          : 'border-surface-container-high/60 hover:border-surface-container-highest hover:bg-surface-container-low/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-caption text-caption text-secondary font-bold uppercase text-[11px]">
                              {land.district} • {land.taluk}
                            </span>
                            {isSelected && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                Active on Map
                              </span>
                            )}
                          </div>
                          <h3 className="font-headline-sm text-headline-sm font-bold text-primary text-lg mt-0.5">
                            Survey No. {land.surveyNo} ({land.extent})
                          </h3>
                          <span className="text-xs text-on-surface-variant font-medium">
                            {land.classification}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[11px] shrink-0">
                          {land.encumbrance}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 bg-surface-container-low p-2.5 rounded-xl my-space-sm text-xs border border-surface-container">
                        <div>
                          <span className="text-on-surface-variant block">Guidance Value:</span>
                          <span className="font-bold text-primary">{land.guidanceValue}</span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant block">Connectivity:</span>
                          <span className="font-bold text-on-surface">{land.nhDistance}</span>
                        </div>
                      </div>

                      {/* Coordinates display */}
                      <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant font-mono bg-surface-container-low/60 px-2.5 py-1 rounded-lg border border-surface-container/50 mb-space-xs">
                        <span className="material-symbols-outlined text-[14px] text-secondary">explore</span>
                        <span>Center: <strong className="text-on-surface">{formatCoordinates(land.latitude ?? land.coordinates?.[0], land.longitude ?? land.coordinates?.[1])}</strong></span>
                      </div>

                      <div className="flex items-center justify-between pt-1 text-xs">
                        <span className="text-on-surface-variant text-[11px]">
                          {land.powerInfra}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleApplyLease(land);
                          }}
                          className="px-3 py-1.5 bg-primary text-on-primary rounded-xl font-bold hover:bg-secondary transition-colors shadow-sm"
                        >
                          Apply for Lease
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </main>

      <CitizenFooter />

      <LeaseModal
        isOpen={leaseModalOpen}
        onClose={() => setLeaseModalOpen(false)}
        land={selectedLand}
      />
    </div>
  );
}
