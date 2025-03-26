import axios, { AxiosRequestConfig } from "axios";
import { REQUEST_TOKEN, ACCESS_TOKEN } from "@/constants/token/token.constants";
import { Token } from "@/libs/token/token";

const SERVER_URL = process.env.VITE_SERVER_URL;

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

export const nemonemoAxios = createCustomAxiosInstance({
    baseURL: SERVER_URL,
    headers: {
        [REQUEST_TOKEN]: `Bearer ${Token.getToken(ACCESS_TOKEN)}`,
    },
});