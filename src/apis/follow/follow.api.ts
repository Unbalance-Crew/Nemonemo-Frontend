import axios from "axios";
import { FollowUnFollowResponse, FollowListResponse, FollowCountResponse } from "@/types/follow/follow";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

export const followToggle = async (followingId: number): Promise<FollowUnFollowResponse> => {
    try {
        const { data } = await axios.post<FollowUnFollowResponse>(`${SERVER_URL}/api/follows/${followingId}`);
        return data;
    } catch (error) {
        throw new Error("팔로우 요청 실패");
    };
};

export const getFollowCount = async (username: string): Promise<FollowCountResponse> => {
    try {
        const { data } = await axios.get<FollowCountResponse>(`${SERVER_URL}/api/follows/${username}/count`);
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로잉 팔로워 카운트 요청 실패");
    };
};

export const getMyFollowCount = async (): Promise<FollowCountResponse> => {
    try {
        const { data } = await axios.get<FollowCountResponse>(`${SERVER_URL}/api/follows/me/count`);
        return data;
    } catch (error) {
        throw new Error("내 팔로잉 팔로워 카운트 요청 실패");
    };
};