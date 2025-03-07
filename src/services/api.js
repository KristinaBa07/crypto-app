import axios from "axios";

const API_URL = "https://api.coincap.io/v2/assets";

export const getAssets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching assets", error);
    return [];
  }
};

export const getAssetDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching asset details", error);
    return null;
  }
};

export const getAssetHistory = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/history?interval=h1`);
    return response.data.data.map(item => ({
      time: new Date(item.time).toLocaleTimeString(),
      price: parseFloat(item.priceUsd)
    }));
  } catch (error) {
    console.error("Error fetching asset history", error);
    return [];
  }
};