import { motreeAxios } from "@/libs/axios/axios";
import { CommentResponse } from "@/types/comments/comments";

const SERVER_URL = process.env.VITE_SERVER_URL || "http://localhost:5173";

export const createComments = async (postId: number, content: string): Promise<CommentResponse> => {
    try {
        const { data } = await motreeAxios.post<CommentResponse>(`${SERVER_URL}/api/comments/${postId}`, { content });
        return data;
    } catch (error) {
        throw new Error("댓글 생성 요청 실패");
    };
};

export const getComments = async (postId: number): Promise<CommentResponse[]> => {
    try {
        const { data } = await motreeAxios.get<CommentResponse[]>(`${SERVER_URL}/api/comments/${postId}`);
        return data;
    } catch (error) {
        throw new Error("댓글 조회 요청 실패");
    };
};