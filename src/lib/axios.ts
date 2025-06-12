import axios from "axios";

const API_BASE_URL =
  typeof window !== "undefined"
    ? window?.env?.NEXT_PUBLIC_API_BASE_URL
    : process.env.NEXT_PUBLIC_API_BASE_URL;

console.log(window);

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
