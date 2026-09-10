import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopHeader from '../components/layout/TopHeader';
import OfficerSidebar from '../components/layout/OfficerSidebar';
import LeafletMap from '../components/gis/LeafletMap';
import ParcelSlidePanel from '../components/gis/ParcelSlidePanel';
import { apiService } from '../services/api';

export default function ProjectGISPage() {
  const { id } = useParams();
  const [parcels, setParcels] = useState([]);
  const [project, setProject] = useState(null);
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [panelOpen, setPanelOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const projectId = id || 'prr-phase2';
      const [allParcels, currentProject] = await Promise.all([
        apiService.getParcels(),
        apiService.getProjectById(projectId)
      ]);

      setParcels(allParcels);
      setProject(currentProject);

      // Default selected parcel
      const defaultParcel = allParcels.find(p => p.projectId === projectId) || allParcels[0];
      setSelectedParcel(defaultParcel);
      setPanelOpen(true);
      setLoading(false);
    }
    loadData();
  }, [id]);

  const handleSelectParcel = (parcel) => {
    setSelectedParcel(parcel);
    setPanelOpen(true);
  };

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased">
      <OfficerSidebar />

      <div className="pl-72">
        <TopHeader activeFlowStep="Monitor" />

        <main className="relative pt-16 bg-background w-full px-gutter-desktop py-space-md">
          <div className="flex flex-col w-full space-y-space-sm">
            
            {/* Top Project Sub-bar */}
            <div className="flex items-center justify-between bg-surface-container-lowest px-space-md py-2.5 rounded-xl shadow-sm border border-surface-container-high/60">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[20px]">layers</span>
                <span className="font-subheading text-body-sm font-bold text-on-surface">
                  {project ? project.name : 'Road Expansion – North Bengaluru'}
                </span>
                <span className="text-outline-variant">•</span>
                <span className="text-caption font-caption text-on-surface-variant text-xs">
                  {project ? project.location : 'Devanahalli Taluk'} (K-GIS Cadastral Layer)
                </span>
              </div>

              <div className="flex items-center gap-space-xs">
                <span className="text-caption font-caption text-on-surface-variant text-xs">
                  Selected: <strong>{selectedParcel ? selectedParcel.surveyNo : 'Sy. 142/2A'}</strong>
                </span>
                <button
                  onClick={() => setPanelOpen(!panelOpen)}
                  className="px-2.5 py-1 bg-surface-container hover:bg-surface-container-high rounded-lg text-primary text-xs font-bold transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {panelOpen ? 'visibility_off' : 'visibility'}
                  </span>
                  <span>{panelOpen ? 'Hide Dossier' : 'Show Dossier'}</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Map Viewport with Slide Panel */}
            <section className="relative w-full h-[calc(100vh-8.5rem)] rounded-2xl overflow-hidden shadow-xl bg-surface-container-highest border border-surface-container-high/60">
              {loading ? (
                <div className="w-full h-full flex items-center justify-center bg-surface-container-low text-on-surface-variant">
                  Loading K-GIS Spatial Tiles...
                </div>
              ) : (
                <>
                  <LeafletMap
                    parcels={parcels}
                    selectedParcel={selectedParcel}
                    onSelectParcel={handleSelectParcel}
                    center={selectedParcel?.coordinates || [13.2435, 77.7126]}
                    zoom={14}
                  />

                  {/* Slide-out Parcel Detail Dossier */}
                  <ParcelSlidePanel
                    parcel={selectedParcel}
                    isOpen={panelOpen}
                    onClose={() => setPanelOpen(false)}
                  />
                </>
              )}
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}
