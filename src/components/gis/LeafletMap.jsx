import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';

// Custom icons using standard HTML divIcon for sharp styling without image asset loading issues
const createCustomMarker = (color, text, isSelected, iconName) => {
  return L.divIcon({
    className: 'custom-leaflet-pin',
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; cursor: pointer;">
        <div style="
          padding: 2px 8px;
          border-radius: 6px;
          background-color: ${color};
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(0,0,0,0.25);
          white-space: nowrap;
          margin-bottom: 2px;
          border: 1px solid rgba(255,255,255,0.4);
        ">
          ${text}
        </div>
        <div style="
          width: ${isSelected ? '32px' : '26px'};
          height: ${isSelected ? '32px' : '26px'};
          border-radius: 50%;
          background-color: ${color};
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          border: 2.5px solid #ffffff;
        ">
          <span class="material-symbols-outlined" style="font-size: 16px;">${iconName || 'location_on'}</span>
        </div>
        <div style="
          width: 0; 
          height: 0; 
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid ${color};
          margin-top: -1px;
        "></div>
      </div>
    `,
    iconSize: [80, 50],
    iconAnchor: [40, 50],
  });
};

function MapRecenter({ center, zoom }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function LeafletMap({
  parcels = [],
  selectedParcel = null,
  onSelectParcel = () => {},
  center = [13.2435, 77.7126],
  zoom = 13,
  activeLayer = 'satellite'
}) {
  const [filterRisk, setFilterRisk] = useState('all'); // all, High, Medium, Low
  const [currentLayer, setCurrentLayer] = useState(activeLayer); // satellite, street, cadastral
  const [activeDistrict, setActiveDistrict] = useState('all');

  const filteredParcels = parcels.filter(p => {
    if (filterRisk !== 'all' && p.risk !== filterRisk) return false;
    if (activeDistrict !== 'all' && p.district !== activeDistrict) return false;
    return true;
  });

  return (
    <div className="relative w-full h-full select-none overflow-hidden rounded-2xl bg-surface-container-highest">
      {/* Top Floating HUD Filter Bar */}
      <div className="absolute top-4 left-4 right-4 z-[400] flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* District Quick Filter */}
        <div className="pointer-events-auto flex items-center gap-2 bg-surface-container-lowest/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-md border border-surface-container-high/60">
          <div className="flex items-center gap-2 pr-2 border-r border-surface-container">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-subheading text-body-sm font-bold text-on-surface">Bengaluru Sub-Division GIS</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveDistrict('all')}
              className={`px-2.5 py-1 rounded-lg text-caption font-caption transition-all ${
                activeDistrict === 'all' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveDistrict('Bengaluru Rural')}
              className={`px-2.5 py-1 rounded-lg text-caption font-caption transition-all ${
                activeDistrict === 'Bengaluru Rural' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              BLR Rural
            </button>
            <button
              onClick={() => setActiveDistrict('Ramanagara')}
              className={`px-2.5 py-1 rounded-lg text-caption font-caption transition-all ${
                activeDistrict === 'Ramanagara' ? 'bg-primary text-on-primary font-bold shadow-sm' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              Ramanagara
            </button>
          </div>
        </div>

        {/* Risk Status Filter Pills */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-surface-container-lowest/95 backdrop-blur-md px-3 py-2 rounded-xl shadow-md border border-surface-container-high/60">
          <span className="font-caption text-caption text-on-surface-variant mr-1 uppercase tracking-wider font-semibold text-[10px]">
            Triage:
          </span>
          <button
            onClick={() => setFilterRisk('all')}
            className={`px-2.5 py-1 rounded-full text-caption font-caption font-bold transition-all flex items-center gap-1 ${
              filterRisk === 'all'
                ? 'bg-primary-container text-on-primary-container shadow-sm'
                : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
            }`}
          >
            <span>All Parcels</span>
            <span className="px-1.5 py-0.2 bg-primary text-on-primary text-[10px] rounded-full font-bold">
              {parcels.length}
            </span>
          </button>
          <button
            onClick={() => setFilterRisk('High')}
            className={`px-2.5 py-1 rounded-full text-caption font-caption font-bold transition-all flex items-center gap-1 ${
              filterRisk === 'High'
                ? 'bg-error text-on-error shadow-sm'
                : 'bg-error-container text-on-error-container hover:shadow-sm'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
            <span>High Risk</span>
          </button>
          <button
            onClick={() => setFilterRisk('Medium')}
            className={`px-2.5 py-1 rounded-full text-caption font-caption font-bold transition-all flex items-center gap-1 ${
              filterRisk === 'Medium'
                ? 'bg-tertiary-container text-white shadow-sm'
                : 'bg-tertiary-fixed text-on-tertiary-fixed hover:shadow-sm'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span>
            <span>Medium</span>
          </button>
          <button
            onClick={() => setFilterRisk('Low')}
            className={`px-2.5 py-1 rounded-full text-caption font-caption font-bold transition-all flex items-center gap-1 ${
              filterRisk === 'Low'
                ? 'bg-secondary text-on-secondary shadow-sm'
                : 'bg-secondary-fixed text-on-secondary-fixed hover:shadow-sm'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span>Low</span>
          </button>
        </div>
      </div>

      {/* React Leaflet Map Canvas */}
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
        className="z-10"
      >
        <MapRecenter center={center} zoom={zoom} />

        {/* Tile Layers based on selected mode */}
        {currentLayer === 'satellite' ? (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Esri Satellite'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
        ) : (
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        )}

        {/* PRR Phase-2 Corridor Alignment Trace (Polyline) */}
        <Polyline
          positions={[
            [13.2350, 77.6950],
            [13.2420, 77.7100],
            [13.2480, 77.7250],
            [13.2550, 77.7400]
          ]}
          pathOptions={{
            color: '#f9bd14',
            weight: 4,
            dashArray: '8, 8',
            opacity: 0.9
          }}
        />

        {/* Render Parcel Polygons */}
        {filteredParcels.map((parcel) => {
          if (!parcel.polygonCoords) return null;
          const isSelected = selectedParcel?.id === parcel.id;
          const strokeColor = parcel.risk === 'High' ? '#ba1a1a' : parcel.risk === 'Medium' ? '#f9bd14' : '#0e6a5b';
          const fillColor = strokeColor;

          return (
            <Polygon
              key={`poly-${parcel.id}`}
              positions={parcel.polygonCoords}
              pathOptions={{
                color: strokeColor,
                fillColor: fillColor,
                fillOpacity: isSelected ? 0.65 : 0.4,
                weight: isSelected ? 3 : 2,
              }}
              eventHandlers={{
                click: () => onSelectParcel(parcel),
              }}
            >
              <Popup>
                <div className="p-1 space-y-1 text-xs">
                  <div className="font-bold text-primary text-sm">{parcel.surveyNo}</div>
                  <div className="text-on-surface-variant">{parcel.location} • {parcel.extent}</div>
                  <div className={`font-semibold ${parcel.risk === 'High' ? 'text-error' : 'text-secondary'}`}>
                    Risk: {parcel.risk} ({parcel.riskScore}/100)
                  </div>
                  <button
                    onClick={() => onSelectParcel(parcel)}
                    className="w-full mt-2 py-1 bg-primary text-white rounded text-[11px] font-semibold"
                  >
                    View Dossier
                  </button>
                </div>
              </Popup>
            </Polygon>
          );
        })}

        {/* Render Parcel Pins */}
        {filteredParcels.map((parcel) => {
          const isSelected = selectedParcel?.id === parcel.id;
          const pinColor = parcel.risk === 'High' ? '#ba1a1a' : parcel.risk === 'Medium' ? '#d97706' : '#0e6a5b';
          const pinIcon = parcel.risk === 'High' ? 'warning' : parcel.risk === 'Medium' ? 'hourglass_top' : 'check';
          const pinLabel = `${parcel.surveyNo} (${parcel.riskScore || 84})`;

          return (
            <Marker
              key={`marker-${parcel.id}`}
              position={parcel.coordinates}
              icon={createCustomMarker(pinColor, pinLabel, isSelected, pinIcon)}
              eventHandlers={{
                click: () => onSelectParcel(parcel),
              }}
            />
          );
        })}
      </MapContainer>

      {/* Bottom Floating Telemetry Bar */}
      <div className="absolute bottom-4 left-4 z-[400] flex items-center gap-3 pointer-events-none">
        <div className="pointer-events-auto bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md flex items-center gap-3 font-caption text-caption text-on-surface-variant border border-surface-container-high/60">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-primary">my_location</span>
            <span className="font-semibold text-on-surface">13.2435° N, 77.7126° E</span>
          </div>
          <div className="h-3 w-px bg-outline-variant"></div>
          <span className="text-on-surface">Zoom: {zoom}x Cadastral</span>
          <div className="h-3 w-px bg-outline-variant"></div>
          <span className="text-secondary font-semibold">Datum: WGS 84 / UTM 43N</span>
        </div>
      </div>

      {/* Layer Switcher Bar Bottom Center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[400] pointer-events-none">
        <div className="pointer-events-auto bg-surface-container-lowest/95 backdrop-blur-md p-1.5 rounded-2xl shadow-xl flex items-center gap-1 border border-surface-container-high/60">
          <button
            onClick={() => setCurrentLayer('satellite')}
            className={`px-3 py-1.5 rounded-xl font-label-action text-body-sm flex items-center gap-1.5 transition-all ${
              currentLayer === 'satellite'
                ? 'bg-primary text-on-primary shadow-sm font-bold'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
            <span>Satellite Hybrid</span>
          </button>
          <button
            onClick={() => setCurrentLayer('street')}
            className={`px-3 py-1.5 rounded-xl font-label-action text-body-sm flex items-center gap-1.5 transition-all ${
              currentLayer === 'street'
                ? 'bg-primary text-on-primary shadow-sm font-bold'
                : 'text-on-surface-variant hover:bg-surface-container'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">crop_square</span>
            <span>Cadastral Street</span>
          </button>
        </div>
      </div>
    </div>
  );
}
