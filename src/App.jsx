import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OfficerDashboard from './pages/OfficerDashboard';
import ProjectGISPage from './pages/ProjectGISPage';
import MLDelayRiskPage from './pages/MLDelayRiskPage';
import SeniorDashboard from './pages/SeniorDashboard';
import CitizenMyLand from './pages/CitizenMyLand';
import CitizenSearch from './pages/CitizenSearch';
import CitizenApplications from './pages/CitizenApplications';
import TechStackModal from './components/modals/TechStackModal';
import TerminologyLegendModal from './components/modals/TerminologyLegendModal';

export default function App() {
  return (
    <>
      <Routes>
        {/* 1. Landing / Role Select */}
        <Route path="/" element={<LandingPage />} />

        {/* 2. Officer Workflow */}
        <Route path="/officer/dashboard" element={<OfficerDashboard />} />
        <Route path="/officer/project/:id" element={<ProjectGISPage />} />
        <Route path="/officer/parcel/:id/risk" element={<MLDelayRiskPage />} />

        {/* 3. Senior Official Workflow */}
        <Route path="/senior/dashboard" element={<SeniorDashboard />} />

        {/* 4. Citizen Portal Workflow */}
        <Route path="/citizen/my-land" element={<CitizenMyLand />} />
        <Route path="/citizen/search" element={<CitizenSearch />} />
        <Route path="/citizen/applications" element={<CitizenApplications />} />

        {/* Catch-all fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Interactive Architecture & Tech Stack Modal */}
      <TechStackModal />

      {/* Persistent Global Floating Terminology Legend */}
      <TerminologyLegendModal />
    </>
  );
}
