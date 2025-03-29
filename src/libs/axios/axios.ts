import axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN, REQUEST_TOKEN } from "@/constants/token/token.constants";
import { Token } from "@/libs/token/token";
import { requestInterceptor } from '@/libs/axios/request.interceptor';
import { responseInterceptor } from "./response.interceptor";

const SERVER_URL = process.env.VITE_SERVER_URL || "http://localhost:5173";

const createCustomAxiosInstance = (baseUrl?: AxiosRequestConfig) => {
    const basecConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return axios.create({
        ...basecConfig,
        ...baseUrl,
        withCredentials: true,
    });
};

export const motreeAxios = createCustomAxiosInstance({
    baseURL: SERVER_URL,
    headers: {
        [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`,
    },
});

motreeAxios.interceptors.request.use((res) => res, requestInterceptor);
motreeAxios.interceptors.response.use((res) => res, responseInterceptor);