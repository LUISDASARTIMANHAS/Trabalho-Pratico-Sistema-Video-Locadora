// src/service/api.js
import axios from "axios";
import { get, getDebug } from "./apiFunctions";

// 🌐 Define ambiente e URL base
const { VITE_ENV } = import.meta.env;
const url =
  VITE_ENV === "development"
    ? "https://jsonplaceholder.typicode.com/"
    : "/api";


// ⚙️ Instância Axios
export const api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${new Date().toISOString()}`,
    "Content-Type": "application/json",
  },
});
