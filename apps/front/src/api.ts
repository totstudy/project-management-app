import axios from "axios";
import { config } from "dotenv";

const baseURL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export default api;
