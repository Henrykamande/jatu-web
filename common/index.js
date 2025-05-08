import axios from "axios";

export const websiteUrl = "https://jubilantafrofarms.com";
export const backendUrl = "https://portal.jubilantafrofarms.com";

export const http = axios.create({
  baseURL: backendUrl,
  timeout: 50000,
});




