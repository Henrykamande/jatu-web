import axios from "axios";
import { backendUrl, websiteUrl } from "./constants";

// export const websiteUrl = "https://jubilantafrofarms.com";
// export const backendUrl = "https://portal.jubilantafrofarms.com";

export const http = axios.create({
  baseURL: backendUrl,
  timeout: 50000,
});

// Add a response interceptor to gracefully handle empty JSON responses.
// The "Unexpected end of JSON input" error occurs when an empty response
// body is parsed as JSON. This can happen with 204 No Content responses.
http.interceptors.response.use(
  (response) => {
    // If response data is an empty string, set it to null.
    if (response.data === "") {
      response.data = null;
    }
    return response;
  },
  (error) => Promise.reject(error)
);

export { websiteUrl, backendUrl };
