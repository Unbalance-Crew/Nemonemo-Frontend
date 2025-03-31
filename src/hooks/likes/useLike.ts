import { useState, useEffect, useCallback } from 'react';
import { Like } from '@/api/likes/likes.api';

const useLike = (postId: number) => {
    const [ isLiked, setIsLiked ] = useState<boolean>(false);
    const [ likeCount, setLikeCount ] = useState<number>(0);

    useEffect(() => {
        const fetchLikeData = async () => {
            try {
                const response = await Like(postId);
                setIsLiked(response.liked);
                setLikeCount(response.likeCount);
            } catch (error) {
                console.error("좋아요 데이터 요청 실패", error);
            };
        };
        fetchLikeData();
    }, [postId]);

    const toggleLike = useCallback(async () => {
        try {
            const response = await Like(postId);
            setIsLiked(response.liked);
            setLikeCount(response.likeCount);
        } catch (error) {
            console.error("좋아요 토글 실패", error);
        }
    }, [postId]);

    return {
        isLiked,
        likeCount,
        toggleLike,
    };
};

export default useLike;