import axios from "axios";
import { createCommentResponse, CommentResponse, createCommentRequest } from "@/types/comments/comments";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

export const createComment = async (postId: number, requestDto: createCommentRequest): Promise<createCommentResponse> => {
    try {
        const { data } = await axios.post<createCommentResponse>(`${SERVER_URL}/api/posts/${postId}/comments`, requestDto);
        return data;
    } catch (error) {
        throw new Error("댓글 작성 요청 실패");
    };
};

export const getComments = async (postId: number, pageRequestDto: { page: number; size: number }): Promise<CommentResponse> => {
    try {
        const { data } = await axios.get<CommentResponse>(`${SERVER_URL}/api/posts/${postId}/comments`, {
            params: pageRequestDto,
        });
        return data;
    } catch (error) {
        throw new Error("댓글 조회 요청 실패");
    };
};