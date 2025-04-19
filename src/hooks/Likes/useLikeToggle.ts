import { useState } from 'react';
import { likeToggle } from '@/apis/likes/likes.api';

const useLikeToggle = (iniatialLiked: boolean, initialLikeCount: number, postId: number) => {
    const [ liked, setLiked ] = useState<boolean>(iniatialLiked);
    const [ likeCount, setLikeCount ] = useState<number>(initialLikeCount);

    const toggleLike = async () => {
        try {
            const response = await likeToggle(postId);
            setLiked(response.liked);
            setLikeCount(response.likeCount);
            console.log('좋아요 토글 성공', response);
        } catch (error) {
            console.error('좋아요 토글 요청 실패', error);
        };
    };

    return {
        liked,
        likeCount,
        toggleLike,
    };
};

export default useLikeToggle;