import { motreeAxios } from "@/libs/axios/axios";
import { FollowUnFollowResponse, FollowListResponse, FollowCountResponse } from "@/types/follow/follow";

const SERVER_URL = process.env.VITE_SERVER_URL || "http://localhost:5177";

export const follow = async (followingId: number): Promise<FollowUnFollowResponse> => {
    try {
        const { data } = await motreeAxios.post<FollowUnFollowResponse>(`${SERVER_URL}/api/follows/${followingId}`);
        return data;
    } catch (error) {
        throw new Error("팔로우 요청 실패");
    };
};

export const getFollowList = async (username: string, pageRequestDto: { page: number; size: number }): Promise<FollowListResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowListResponse>(`${SERVER_URL}/api/follows/${username}/following`,{
            params: pageRequestDto,
        });
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로우 리스트 요청 실패");
    };
};

export const getFollowerList = async (username: string, pageRequestDto: { page: number; size: number }): Promise<FollowListResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowListResponse>(`${SERVER_URL}/api/follows/${username}/followers`,{
            params: pageRequestDto,
        });
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로워 리스트 요청 실패");
    };
};

export const getFollowCount = async (username: string): Promise<FollowCountResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowCountResponse>(`${SERVER_URL}/api/follows/${username}/count`);
        return data;
    } catch (error) {
        throw new Error("특정 사용자 팔로우 카운트 요청 실패");
    };
};

export const getMyFollowingList = async (pageReauestDto: { page: number; size: number }): Promise<FollowListResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowListResponse>(`${SERVER_URL}/api/follows/me/following`,{
            params: pageReauestDto,
        });
        return data;
    } catch (error) {
        throw new Error("내 팔로우 리스트 요청 실패");
    };
};

export const getMyFollowerList = async (pageReauestDto: { page: number; size: number }): Promise<FollowListResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowListResponse>(`${SERVER_URL}/api/follows/me/followers`,{
            params: pageReauestDto,
        });
        return data;
    } catch (error) {
        throw new Error("내 팔로워 리스트 요청 실패");
    };
};

export const getMyFollowCount = async (): Promise<FollowCountResponse> => {
    try {
        const { data } = await motreeAxios.get<FollowCountResponse>(`${SERVER_URL}/api/follows/me/count`);
        return data;
    } catch (error) {
        throw new Error("내 팔로우 카운트 요청 실패");
    };
};