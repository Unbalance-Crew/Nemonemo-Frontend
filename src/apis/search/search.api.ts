import { motreeAxios } from "@/libs/axios/axios";
import { SearchResponse } from "@/types/search/search";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5177";

export const search = async (requestDto: { keyword: string; page: number; size: number }): Promise<SearchResponse> => {
    try {
        const { data } = await motreeAxios.get<SearchResponse>(`${SERVER_URL}/api/posts/search`, {
            params: requestDto,
        });
        return data;
    } catch (error) {
        throw new Error("검색 요청 실패");
    };
};