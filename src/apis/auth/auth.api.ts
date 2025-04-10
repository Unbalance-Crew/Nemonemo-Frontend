import axios from "axios";
import { Login, Register, AuthResponse, NewAccessToken } from "@/types/auth/auth";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

console.log("SERVER_URL:", SERVER_URL);

export const login = async (loginData: Login): Promise<AuthResponse> => {
    try {
        const { data } = await axios.post<AuthResponse>(`${SERVER_URL}/api/auth/login`, loginData);
        console.log("보내는 데이터:", loginData);
        return data;
    } catch (error) {
        throw new Error("로그인 요청 실패");
    };
};

export const register = async (registerData: Register): Promise<AuthResponse> => {
    try {
        const { data } = await axios.post<AuthResponse>(`${SERVER_URL}/api/auth/signup`, registerData);
        return data;
    } catch (error) {
        throw new Error("회원가입 요청 실패");
    };
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    try {
        const { data } = await axios.post<NewAccessToken>(`${SERVER_URL}/api/auth/reissue`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("토큰 재발급 요청 실패");
    };
};