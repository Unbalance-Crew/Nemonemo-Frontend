import axios from "axios";
import { SearchResponse } from "@/types/Search/search";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

export const search = async (requestDto: { keyword: string; page: number; size: number }): Promise<SearchResponse> => {
    try {
        const { data } = await axios.get<SearchResponse>(`${SERVER_URL}/api/posts/search`, {
            params: requestDto,
        });
        return data;
    } catch (error) {
        throw new Error("포스트 검색 요청 실패");
    };
};