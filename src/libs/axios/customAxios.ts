import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN, REQUEST_TOKEN } from '@/constants/token/token.constants';
import { BaseResponse } from '@/types/response/base.response';
import { TokenResponse } from '@/types/auth/auth';
import { Token } from '@/libs/token/session';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    retry?: boolean;
};

const nemonemoAxios = axios.create({
    baseURL: process.env.VITE_SERVER_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
    },
    withCredentials: true,
});

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const onRefreshed = (token: string) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

nemonemoAxios.interceptors.request.use(
    async (config) => {
        const token = Token.getToken(ACCESS_TOKEN);
        if (token) {
            config.headers[REQUEST_TOKEN] = `Bearer ${token}`;
        };

        if (config.data instanceof FormData) {
            config.headers["Content-Type"] = "multipart/form-data";
        } else {
            config.headers["Content-Type"] = "application/json";
        };

        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

nemonemoAxios.interceptors.response.use(

);

export default nemonemoAxios;