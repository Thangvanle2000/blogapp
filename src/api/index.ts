import axios, { AxiosRequestConfig } from "axios";
import { checkToken } from "../Types/checkToken";
import RateLimit from 'axios-rate-limit';

const axiosInstance = axios.create({
  baseURL: "https://realword.ducpv.click/api/",
});

axiosInstance.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    const accessToken = checkToken();
    const currentTime = new Date().getTime() / 1000; // convert to seconds
    const expirationTime = localStorage.getItem("expirationTime"); // get expiration time from storage
    if (accessToken && expirationTime && currentTime >= Number(expirationTime)) {
      // session has expired
      localStorage.clear(); // clear storage
      window.location.reload(); // reload page to force login
    }
    config.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
  // Any status codse that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
});

// set session expiration time
const expirationTime:any = new Date().getTime() / 1000 + 3600; // 1 hour from now
localStorage.setItem("expirationTime", expirationTime);
const rateLimitedAxiosInstance = RateLimit(axiosInstance, { maxRequests: 60, perMilliseconds: 1000 });

export default rateLimitedAxiosInstance;