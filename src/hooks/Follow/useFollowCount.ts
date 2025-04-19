import { useEffect, useState } from 'react';
import { getFollowCount, getMyFollowCount } from '@/apis/follow/follow.api';
import { FollowCountResponse } from '@/types/Follow/follow';

const useFollowCount = (username?: string) => {
    const [ data, setData ] = useState<FollowCountResponse>({
        followerCount: 0,
        followingCount: 0,
    });

    useEffect(() => {
        const fetchFollowCount = async () => {
            try {
                const response = username
                    ? await getFollowCount(username)
                    : await getMyFollowCount();
                setData(response);
                console.log('팔로잉 팔로워 수 조회 성공', response);
            } catch (error) {
                console.error('내 팔로잉 팔로워 수 조회 요청 실패', error);
            };
        };
        fetchFollowCount();
    }, [ username ]);

    return {
        followerCount: data.followerCount,
        followingCount: data.followingCount,
    };
};

export default useFollowCount;