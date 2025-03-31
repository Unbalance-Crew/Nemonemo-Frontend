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
        const newLikeStatus = !isLiked;
        const newLikeCount = newLikeStatus ? likeCount + 1 : likeCount - 1;

        setIsLiked(newLikeStatus);
        setLikeCount(newLikeCount);

        try {
            const response = await Like(postId);
            setIsLiked(response.liked);
            setLikeCount(response.likeCount);
        } catch (error) {
            console.error("좋아요 토글 실패", error);
            setIsLiked(prev => !prev);
            setLikeCount(prevCount => newLikeStatus ? prevCount - 1 : prevCount + 1);
        }
    }, [postId, isLiked, likeCount]);

    return {
        isLiked,
        likeCount,
        toggleLike,
    };
};

export default useLike;