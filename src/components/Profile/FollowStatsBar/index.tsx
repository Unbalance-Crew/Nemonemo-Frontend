import { ProfileProps } from '@/types/Profile/profile';
import * as S from './style';

const FollowStatsBar = ({ followingCount, followerCount }: ProfileProps ) => {
    return (
        <S.Container>
            <S.FollowingCount>
                <S.Count>{ followingCount }</S.Count>
                <S.FollowText>트리</S.FollowText>
            </S.FollowingCount>
            <S.FollowerCount>
                <S.Count>{ followerCount }</S.Count>
                <S.FollowText>트리</S.FollowText>
            </S.FollowerCount>
        </S.Container>
    );
};

export default FollowStatsBar;