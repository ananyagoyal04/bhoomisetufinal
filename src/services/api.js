import {
  projectsData,
  parcelsData,
  delayData,
  approvalsData,
  availableLandData,
  notificationsData
} from '../data';

export const apiService = {
  // Fetch all projects
  async getProjects() {
    return projectsData;
  },

  // Fetch project by ID
  async getProjectById(projectId) {
    return projectsData.find(p => p.id === projectId) || projectsData[0];
  },

  // Fetch all parcels
  async getParcels(projectId = null) {
    if (projectId) {
      return parcelsData.filter(p => p.projectId === projectId);
    }
    return parcelsData;
  },

  // Fetch single parcel by survey/id
  async getParcelById(parcelId) {
    return parcelsData.find(p => p.id === parcelId || p.surveyNo.replace('/', '-') === parcelId) || parcelsData[0];
  },

  // Fetch ML delay explanation & SHAP values
  async getDelayExplanation(itemId = 'prr-phase2') {
    return delayData[itemId] || delayData['prr-phase2'];
  },

  // Fetch 4-tier approval flow stages
  async getApprovals(itemId = 'prr-phase2') {
    return approvalsData[itemId] || approvalsData['prr-phase2'];
  },

  // Fetch available land bank
  async getAvailableLand(district = null) {
    if (district) {
      return availableLandData.filter(l => l.district.toLowerCase().includes(district.toLowerCase()));
    }
    return availableLandData;
  },

  // Fetch notifications
  async getNotifications() {
    return notificationsData;
  }
};

