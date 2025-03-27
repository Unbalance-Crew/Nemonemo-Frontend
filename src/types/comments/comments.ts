export interface Comment {
    content: string;
};

export interface CommentResponse {
    id: number;
    content: string;
    username: string;
    createdAt: string;
};