import API from "./axios";

// Upload dataset
export const uploadDataset = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/api/upload", formData);

  return response.data;
};

// Profile uploaded dataset
export const profileDataset = async (fileId) => {
  const response = await API.get(`/api/profile/${encodeURIComponent(fileId)}`);

  return response.data;
};