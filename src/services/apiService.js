// services/apiService.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAll = async (url) => {
  const response = await apiClient.get(url);
  return response.data;
};

export const fetchById = async (url, id) => {
  const response = await apiClient.get(`${url}/${id}`);
  return response.data;
};

export const createItem = async (url, data) => {
  const response = await apiClient.post(url, data);
  return response.data;
};

export const updateItem = async (url, id, data) => {
  const response = await apiClient.put(`${url}/${id}`, data);
  return response.data;
};

export const deleteItem = async (url, id) => {
  const response = await apiClient.delete(`${url}/${id}`);
  return response.data;
};
