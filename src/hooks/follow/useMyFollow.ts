import { useState, useEffect } from "react";
import { getMyFollowingList, getMyFollowersList } from "@/api/follow/follow.api";
import { getFollowListResponse } from "@/types/follow/follow";

const useMyFollow = () => {
    const [myFollowingList, setMyFollowingList] = useState<getFollowListResponse[]>([]);
    const [myFollowersList, setMyFollowersList] = useState<getFollowListResponse[]>([]);

    const fetchFollowingList = async () => {
        try {
            const data = await getMyFollowingList();
            setMyFollowingList(data);
        } catch (error) {
            console.error("내 팔로잉 목록 가져오기 실패", error);
        };
    };

    const fetchFollowersList = async () => {
        try {
            const data = await getMyFollowersList();
            setMyFollowersList(data);
        } catch (error) {
            console.error("내 팔로워 목록 가져오기 실패", error);
        };
    };

    useEffect(() => {
        fetchFollowingList();
        fetchFollowersList();
    }, []);

    return {
        myFollowingList,
        myFollowersList,
    };
};

export default useMyFollow;