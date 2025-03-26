export interface Post {
    id: number;
    title: string;
    content: string;
    filePath: string;
    username: string;
    createdAt: string;
    likeCount: number;
    commentCount: number;
};

export interface PostResponse {
    id: number;
    title: string;
    content: string;
    filePath: string;
    username: string;
    createdAt: string;
    likeCount: number;
    commentCount: number;
};