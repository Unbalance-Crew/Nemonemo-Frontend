import { useState, useEffect } from "react";
import { getMyFollowingList, getMyFollowersList } from "@/api/follow/follow.api";
import { getFollowListResponse } from "@/types/follow/follow";

const useMyFollow = () => {
    const [myFollowingList, setMyFollowingList] = useState<getFollowListResponse[]>([]);
    const [myFollowersList, setMyFollowersList] = useState<getFollowListResponse[]>([]);

    const fetchFollowingList = async () => {
        const data = await getMyFollowingList();
        setMyFollowingList(data);
    };

    const fetchFollowersList = async () => {
        const data = await getMyFollowersList();
        setMyFollowersList(data);
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