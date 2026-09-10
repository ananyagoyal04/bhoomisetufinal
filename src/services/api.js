import {
  projectsData,
  parcelsData,
  delayData,
  approvalsData,
  availableLandData,
  notificationsData
} from '../data';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

/**
 * Fetch helper with graceful fallback to local bundled mock data
 */
async function fetchWithFallback(endpoint, fallbackData) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1200); // quick 1.2s timeout
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
      }
    });
    clearTimeout(timeoutId);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    // Graceful fallback on network failure or server absence
    console.debug(`API endpoint ${endpoint} unavailable, using offline mock data.`, error.message);
  }
  return fallbackData;
}

export const apiService = {
  // Fetch all projects
  async getProjects() {
    return await fetchWithFallback('/projects', projectsData);
  },

  // Fetch project by ID
  async getProjectById(projectId) {
    const projects = await this.getProjects();
    return projects.find(p => p.id === projectId) || projects[0];
  },

  // Fetch all parcels
  async getParcels(projectId = null) {
    const parcels = await fetchWithFallback(
      projectId ? `/parcels?project_id=${projectId}` : '/parcels',
      parcelsData
    );
    if (projectId) {
      return parcels.filter(p => p.projectId === projectId);
    }
    return parcels;
  },

  // Fetch single parcel by survey/id
  async getParcelById(parcelId) {
    const parcels = await this.getParcels();
    return parcels.find(p => p.id === parcelId || p.surveyNo.replace('/', '-') === parcelId) || parcels[0];
  },

  // Fetch ML delay explanation & SHAP values
  async getDelayExplanation(itemId = 'prr-phase2') {
    const defaultData = delayData[itemId] || delayData['prr-phase2'];
    return await fetchWithFallback(`/delay/${itemId}`, defaultData);
  },

  // Fetch 4-tier approval flow stages
  async getApprovals(itemId = 'prr-phase2') {
    const defaultData = approvalsData[itemId] || approvalsData['prr-phase2'];
    return await fetchWithFallback(`/approvals/${itemId}`, defaultData);
  },

  // Fetch available land bank
  async getAvailableLand(district = null) {
    const lands = await fetchWithFallback(
      district ? `/available-land?district=${district}` : '/available-land',
      availableLandData
    );
    if (district) {
      return lands.filter(l => l.district.toLowerCase().includes(district.toLowerCase()));
    }
    return lands;
  },

  // Fetch notifications
  async getNotifications() {
    return await fetchWithFallback('/notifications', notificationsData);
  }
};
