import { getFollowingList, getFollowerList } from "@/api/follow/follow.api";
import { useState, useEffect } from "react";
import { getFollowListResponse } from "@/types/follow/follow";

const useUserFollow = (id: number) => {
    const [followingList, setFollowingList] = useState<getFollowListResponse[]>([]);
    const [followerList, setFollowerList] = useState<getFollowListResponse[]>([]);

    const fetchFollowingList = async () => {
        try {
            const data = await getFollowingList(id);
            setFollowingList(data);
        } catch (error) {
            console.error("팔로잉 목록 가져오기 실패", error);
        }
    };

    const fetchFollowerList = async () => {
        try {
            const data = await getFollowerList(id);
            setFollowerList(data);
        } catch (error) {
            console.error("팔로워 목록 가져오기 실패", error);
        }
    };

    useEffect(() => {
        fetchFollowingList();
        fetchFollowerList();
    }, [id]);

    return {
        followingList,
        followerList,
    };
};

export default useUserFollow;