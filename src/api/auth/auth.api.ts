import { motreeAxios } from "@/libs/axios/axios";
import { Login, Register, AuthResponse, NewAccessToken } from "@/types/auth/auth";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const login = async (loginData: Login): Promise<AuthResponse> => {
    try {
        const { data } = await motreeAxios.post<AuthResponse>(`${SERVER_URL}/api/auth/login`, loginData);
        return data;
    } catch (error) {
        throw new Error("로그인 요청 실패");
    };
};

export const register = async (registerData: Register): Promise<AuthResponse> => {
    try {
        const { data } = await motreeAxios.post<AuthResponse>(`${SERVER_URL}/api/auth/signup`, registerData);
        return data;
    } catch (error) {
        throw new Error("회원가입 요청 실패");
    };
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    try {
        const { data } = await motreeAxios.post<NewAccessToken>(`${SERVER_URL}/api/auth/reissue`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("토큰 재발급 요청 실패");
    };
};