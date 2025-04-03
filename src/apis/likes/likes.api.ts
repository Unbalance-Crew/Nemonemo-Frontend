import { motreeAxios } from "@/libs/axios/axios";
import { LikeResponse } from "@/types/like/like";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5177";

export const Like = async (postId: number): Promise<LikeResponse> => {
    try {
        const { data } = await motreeAxios.post<LikeResponse>(`${SERVER_URL}/api/like/${postId}`);
        return data;
    } catch (error) {
        throw new Error("좋아요 토글 요청 실패");
    };
};