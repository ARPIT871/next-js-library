import api from "./axiosintercepter";
async function getWebsiteData(userId) {
  try {
    const BlogData = await api.get(`/domain/data`);
    return BlogData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
