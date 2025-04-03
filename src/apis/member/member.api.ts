import { motreeAxios } from "@/libs/axios/axios";
import { getInfoResponse } from "@/types/member/member";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5177";

export const getMyInfo = async (): Promise<getInfoResponse> => {
    try {
        const { data } = await motreeAxios.get<getInfoResponse>(`${SERVER_URL}/api/members/me`);
        return data;
    } catch (error) {
        throw new Error("내 정보 조회 요청 실패");
    };
};

export const getMemberInfo = async (username: string): Promise<getInfoResponse> => {
    try {
        const { data } = await motreeAxios.get<getInfoResponse>(`${SERVER_URL}/api/members/${username}`);
        return data;
    } catch (error) {
        throw new Error("회원 정보 조회 요청 실패");
    };
};

export const profileImageUpload = async (file: File): Promise<getInfoResponse> => {
    try {
        const formData = new FormData();
        formData.append("file", file);

        const { data } = await motreeAxios.post<getInfoResponse>(
            `${SERVER_URL}/api/members/me/profile-image`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return data;
    } catch (error) {
        throw new Error("프로필 이미지 업로드 요청 실패");
    };
};