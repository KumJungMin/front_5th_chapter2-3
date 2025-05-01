import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_PATH

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
})
