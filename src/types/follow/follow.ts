export interface FollowUnFollowResponse {
    followerId: number;
    followingId: number;
    followed: boolean;
};

export interface getFollowListResponse {
    id: number;
    username: string;
    name: string;
};