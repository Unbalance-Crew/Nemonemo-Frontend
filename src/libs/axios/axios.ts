import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN, REQUEST_TOKEN } from "@/constants/token/token.constants";
import { Token } from "@/libs/Token/token";
import { requestInterceptor } from "@/libs/Axios/request.interceptor";
import { responseInterceptor } from "./response.interceptor";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

const createCustomAxiosInstance = (config?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };
  return axios.create({
    ...baseConfig,
    ...config,
    withCredentials: true,
  });
};

export const motreeAxios = createCustomAxiosInstance({
  baseURL: SERVER_URL,
  headers: {
    [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`,
  },
});

motreeAxios.interceptors.request.use(requestInterceptor, (error) =>
  Promise.reject(error)
);
motreeAxios.interceptors.response.use(
  (response) => response,
  responseInterceptor
);
