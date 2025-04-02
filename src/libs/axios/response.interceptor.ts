import { AxiosError } from "axios";
import { Token } from "@/libs/token/token";
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  REQUEST_TOKEN,
} from "@/constants/token/token.constants";
import { refresh } from "@/apis/auth/auth.api";
import { motreeAxios } from "@/libs/axios/axios";

let isRefreshing = false;
let refreshSubscribers: ((accessToken: string) => void)[] = [];

const onTokenRefreshed = (accessToken: string) => {
  refreshSubscribers.map((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback: (accessToken: string) => void) => {
  refreshSubscribers.push(callback);
};

export const responseInterceptor = async (error: AxiosError) => {
  if (error.response) {
    const {
      config: originalRequest,
      response: { status },
    } = error;

    const usingAccessToken = Token.getToken(ACCESS_TOKEN);
    const usingRefreshToken = Token.getToken(REFRESH_TOKEN);

    if (
      usingAccessToken !== undefined &&
      usingRefreshToken !== undefined &&
      status === 401
    ) {
      if (!isRefreshing) {
        isRefreshing = true;

        if (usingRefreshToken === null) {
          return;
        }

        try {
          const newAccessToken = await refresh({
            refreshToken: usingRefreshToken,
          });

          motreeAxios.defaults.headers.common[
            REQUEST_TOKEN
          ] = `Bearer ${newAccessToken}`;

          Token.setToken(ACCESS_TOKEN, newAccessToken.accessToken);

          isRefreshing = false;

          onTokenRefreshed(newAccessToken.accessToken);
        } catch (error) {
          window.alert("세션이 만료되었습니다.");
          Token.clearToken();
          window.location.href = "/sign";
        }
      }
      return new Promise((resolve) => {
        addRefreshSubscriber((accessToken: string) => {
          originalRequest!.headers![REQUEST_TOKEN] = `Bearer ${accessToken}`;
          resolve(motreeAxios(originalRequest!));
        });
      });
    };
  };
  return Promise.reject(error);
};