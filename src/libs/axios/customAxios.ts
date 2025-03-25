import axios, { AxiosRequestConfig } from 'axios';
import { ACCESS_TOKEN, REQUEST_TOKEN } from '@/constants/token/token.constants';
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

);

nemonemoAxios.interceptors.response.use(

);

export default nemonemoAxios;