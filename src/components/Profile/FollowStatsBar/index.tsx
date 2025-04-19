import useFollowCount from '@/hooks/Follow/useFollowCount'
import * as S from './style';

const FollowStatsBar = ({ username }: { username?: string }) => {
    const { followerCount, followingCount } = useFollowCount(username);
    return (
        <S.Container>
            <S.Stat>
                <S.Text>팔로워</S.Text>
                <S.Number>{ followerCount }</S.Number>
            </S.Stat>
            <S.Stat>
                <S.Text>팔로잉</S.Text>
                <S.Number>{ followingCount }</S.Number>
            </S.Stat>
        </S.Container>
    );
};

export default FollowStatsBar;