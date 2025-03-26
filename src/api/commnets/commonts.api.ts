import { nemonemoAxios } from "@/libs/axios/axios";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const getComments = async (postId: number) => {
    try {
        const { data } = await nemonemoAxios.get(`${SERVER_URL}/api/posts/${postId}/comments`);
        return data;
    } catch (error) {
        throw new Error("댓글 로딩 실패");
    };
};

export const createComments = async (postId: number, comment: string) => {
    try {
        const { data } = await nemonemoAxios.post(`${SERVER_URL}/api/posts/${postId}/comments`, { postId, comment });
        return data;
    } catch (error) {
        throw new Error("댓글 생성 실패");
    };
};