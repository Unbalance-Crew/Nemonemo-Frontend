import { motreeAxios } from "@/libs/axios/axios";
import { FollowUnFollowResponse, getFollowListResponse } from "@/types/follow/follow";

const SERVER_URL = process.env.VITE_SERVER_URL || "http://localhost:5173";

export const follow = async (followingId: number): Promise<FollowUnFollowResponse> => {
    try {
        const { data } = await motreeAxios.post<FollowUnFollowResponse>(`${SERVER_URL}/api/follow/${followingId}`);
        return data;
    } catch (error) {
        throw new Error("팔로우/언팔로우 요청 실패");
    };
};

export const getFollowingList = async (id: number): Promise<getFollowListResponse[]> => {
    try {
        const { data } = await motreeAxios.get<getFollowListResponse[]>(`${SERVER_URL}/api/follow/${id}/following`);
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로우 목록 요청 실패");
    };
};

export const getFollowerList = async (id: number): Promise<getFollowListResponse[]> => {
    try {
        const { data } = await motreeAxios.get<getFollowListResponse[]>(`${SERVER_URL}/api/follow/${id}/followers`);
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로워 목록 요청 실패");
    };
};

export const getMyFollowingList = async (): Promise<getFollowListResponse[]> => {
    try {
        const { data } = await motreeAxios.get<getFollowListResponse[]>(`${SERVER_URL}/api/follows/my/following`);
        return data;
    } catch (error) {
        throw new Error("내 팔로우 목록 요청 실패");
    };
};

export const getMyFollowersList = async (): Promise<getFollowListResponse[]> => {
    try {
        const { data } = await motreeAxios.get<getFollowListResponse[]>(`${SERVER_URL}/api/follows/my/followers`);
        return data;
    } catch (error) {
        throw new Error("내 팔로워 목록 요청 실패");
    };
};