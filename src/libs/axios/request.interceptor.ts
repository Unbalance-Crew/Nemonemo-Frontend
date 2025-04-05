import { InternalAxiosRequestConfig } from "axios";
import { Token } from "@/libs/token/token";
import { 
    ACCESS_TOKEN, 
    REFRESH_TOKEN, 
    REQUEST_TOKEN 
} from "@/constants/token/token.constants";

export const requestInterceptor = async (config: InternalAxiosRequestConfig) => {
    if (
        Token.getToken(ACCESS_TOKEN) !== undefined &&
        Token.getToken(REFRESH_TOKEN) !== undefined
    ) {
        config.headers[REQUEST_TOKEN] = `Bearer ${Token.getToken(ACCESS_TOKEN)}`;
    } else {
        console.log("토큰이 존재하지 않습니다!");
    };
    return config;
};