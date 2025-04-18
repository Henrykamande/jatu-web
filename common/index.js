import axios from "axios";

// export const backendUrl = "https://portal.jatumarket.com";
// export const websiteUrl = "https://shambaniconnect.com";
export const websiteUrl = "http://localhost:8182";
export const backendUrl = "http://localhost:7800";

export const http = axios.create({
  baseURL: backendUrl,
  timeout: 50000,
});




