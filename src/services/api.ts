import axios from "axios";

const api = axios.create({
  baseURL: "https://cnab-conversion-production.up.railway.app",
  timeout: 5000,
});

export default api;
