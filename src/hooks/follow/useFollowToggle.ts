import { useState, useEffect, useCallback } from 'react';
import { follow } from '@/api/follow/follow.api';
import { FollowUnFollowResponse } from '@/types/follow/follow';

const useFollowToggle = (userId: number) => {
    const [isFollowing, setIsFollowing] = useState<boolean>(false);

    const toggleFollow = useCallback(async () => {
        const newFollowStatus = !isFollowing;
        setIsFollowing(newFollowStatus);

        try {
            const response: FollowUnFollowResponse = await follow(userId);

            if (response && response.followingId === userId) {
                setIsFollowing(true);
            } else {
                setIsFollowing(false);
            }
        } catch (error) {
            console.error("팔로우 토글 실패", error);
            setIsFollowing(prev => !prev);
        }
    }, [userId, isFollowing]);

    useEffect(() => {
        const checkFollowStatus = async () => {
            try {
                const response: FollowUnFollowResponse = await follow(userId);
                if (response && response.followingId === userId) {
                    setIsFollowing(true);
                } else {
                    setIsFollowing(false);
                }
            } catch (error) {
                console.error("팔로우 상태 확인 실패", error);
            }
        };
        checkFollowStatus();
    }, [userId]);

    return {
        isFollowing,
        toggleFollow,
    };
};

export default useFollowToggle;