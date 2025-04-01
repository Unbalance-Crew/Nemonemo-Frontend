export interface createCommentResponse {
    id: number;
    content: string;
    username: string;
    createdAt: string;
};

export interface CommentResponse {
    content: {
        id: number;
        content: string;
        username: string;
        createdAt: string;
    }[];
    totalElements: number;
    currentPage: number;
    pageSize: number;
    totalPages: number;
};

export interface createCommentRequest {
    content: string;
};