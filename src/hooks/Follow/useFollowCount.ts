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
            } catch (error) {
                console.error('Error fetching follow count:', error);
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