import { nemonemoAxios } from "@/libs/axios/axios";

const SERVER_URL = process.env.VITE_SERVER_URL;

export const getPosts = async (postId: number) =>{
    try {
        const { data } = await nemonemoAxios.get(`${SERVER_URL}/api/posts/${postId}`);
        return data;
    } catch (error) {
        throw new Error("게시글 로딩 실패");
    };
};