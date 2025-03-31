export interface PostsResponse {
    id: number;
    title: string;
    content: string;
    filePath: string;
    username: string;
    createdAt: string;
    likeCount: number;
    commentCount: number;
};