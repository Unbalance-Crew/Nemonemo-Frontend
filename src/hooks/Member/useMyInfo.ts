import { useEffect, useState } from "react";
import { getMyInfo } from "@/apis/member/member.api";
import { getInfoResponse } from "@/types/Member/member";

export const useMyInfo = () => {
    const [ data, setData] = useState<getInfoResponse | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getMyInfo();
                setData(response);
            } catch (err) {
                console.error("내 정보 불러오기 실패");
            }
        };
        fetchData();
    }, []);

    return { data };
};