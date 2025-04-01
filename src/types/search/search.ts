export interface SearchResponse {
    posts: {
        id: number;
        title: string;
        content: string;
        filePath: string;
        username: string;
        createdAt: string;
        likeCount: number;
        commentCount: number;
    }[];
    totalCount: number;
    currentPage: number;
    pageSize: number;
    totalPage: number;
};