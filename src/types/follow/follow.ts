export interface FollowUnFollowResponse {
    followerId: number;
    followingId: number;
    followed: boolean;
};

export interface getFollowResponse {
    id: number;
    username: string;
    name: string;
};