import axios, { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN, REQUEST_TOKEN } from '@/constants/token/token.constants';
import { Token } from '@/libs/token/session';

const SERVER_URL = process.env.VITE_SERVER_URL;

const createCustomAxiosInstance = (baseUrl: AxiosRequestConfig) => {
    const baseConfig: AxiosRequestConfig = {
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    return axios.create({
        ...baseConfig,
        ...baseUrl,
        withCredentials: true,
    });
};

const nemonemoAxios = createCustomAxiosInstance({
    baseURL: SERVER_URL,
    headers: {
        [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`,
    },
});

let isRefreshing = false;
let refreshSubscribers: (( token: string ) => void)[] = [];

const onRefreshed = ( token: string ) => {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
};

const addRefreshSubscriber = ( callback: ( token: string ) => void ) => {
    refreshSubscribers.push(callback);
};

nemonemoAxios.interceptors.request.use(
    (config) => {
        const token = Token.getToken(ACCESS_TOKEN);
        if (token) {
            config.headers[REQUEST_TOKEN] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

nemonemoAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    const refreshToken = Token.getToken(REFRESH_TOKEN);
                    const response = await axios.post(`${SERVER_URL}/api/auth/reissue`, {
                        refreshToken,
                    });
                    const newAccessToken = response.data.accessToken;
                    Token.setToken(ACCESS_TOKEN, newAccessToken);
                    onRefreshed(newAccessToken);
                    originalRequest.headers[REQUEST_TOKEN] = `Bearer ${newAccessToken}`;
                    return nemonemoAxios(originalRequest);
                } catch (error) {
                    return Promise.reject(error);
                } finally {
                    isRefreshing = false;
                }
            }
            return new Promise((resolve) => {
                addRefreshSubscriber((token) => {
                    originalRequest.headers[REQUEST_TOKEN] = `Bearer ${token}`;
                    resolve(nemonemoAxios(originalRequest));
                });
            });
        }
        return Promise.reject(error);
    },
);

export default nemonemoAxios;