import { motreeAxios } from "@/libs/Axios/axios";
import { FollowUnFollowResponse, FollowCountResponse } from "@/types/Follow/follow";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

export const followToggle = async (followingId: number): Promise<FollowUnFollowResponse> => {
    try {
        const { data } = await motreeAxios.post<FollowUnFollowResponse>(`/api/follows/${followingId}`);
        return data;
    } catch (error) {
        throw new Error("팔로우 요청 실패");
    };
};

export const getFollowCount = async (username: string): Promise<FollowCountResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowCountResponse>(`/api/follows/${username}/count`);
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로잉 팔로워 카운트 요청 실패");
    };
};

export const getMyFollowCount = async (): Promise<FollowCountResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowCountResponse>(`/api/follows/my/count`);
        return data;
    } catch (error) {
        throw new Error("내 팔로잉 팔로워 카운트 요청 실패");
    };
};