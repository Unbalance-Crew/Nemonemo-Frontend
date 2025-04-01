export interface FollowUnFollowResponse {
    followerId: number;
    followingId: number;
    followed: boolean;
};

export interface FollowListResponse {
    content: {
        username: string;
        profileImage: string;
        id: number;
    }[];
    totalElements: number;
    currentPage: number;
    pageSize: number;
    totalPage: number;
};

export interface FollowCountResponse {
    followerCount: number;
    followingCount: number;
};