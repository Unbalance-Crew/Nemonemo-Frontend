import { motreeAxios } from "@/libs/Axios/axios";
import { getInfoResponse } from "@/types/Member/member";

export const getMyInfo = async (): Promise<getInfoResponse> => {
    try {
        const { data } = await motreeAxios.get<getInfoResponse>(`/api/members/me`); 
        return data;
    } catch (error) {
        throw new Error("내 정보 조회 요청 실패");
    };
};

export const getMemberInfo = async (username: string): Promise<getInfoResponse> => {
    try {
        const { data } = await motreeAxios.get<getInfoResponse>(`/api/members/${username}`);
        return data;
    } catch (error) {
        throw new Error("회원 정보 조회 요청 실패");
    };
};