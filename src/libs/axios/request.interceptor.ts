import { InternalAxiosRequestConfig } from "axios";
import { Token } from "@/libs/Token/token";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
} from "@/constants/token/token.constants";

export const requestInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  const accessToken = Token.getToken(ACCESS_TOKEN);
  const refreshToken = Token.getToken(REFRESH_TOKEN);

  if (accessToken && refreshToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    console.log("토큰이 존재하지 않습니다!");
  }

  return config;
};