import * as S from './style';
import likebutton from '@/assets/likebutton.svg';
import unlikebutton from '@/assets/unlikebutton.svg';
import useLike from '@/hooks/likes/useLike';

const LikeButton = ({ postId }: { postId: number }) => {
    const { isLiked, toggleLike, likeCount } = useLike(postId);
    return (
        <S.Container>
            <S.LikeIcon src={ isLiked ? likebutton : unlikebutton } onClick={toggleLike} alt='좋아요 버튼'/>
            <S.LikeCount>{likeCount}</S.LikeCount>
        </S.Container>
    );
};

export default LikeButton;