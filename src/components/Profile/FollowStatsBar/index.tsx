import * as S from './style';

const FollowStatsBar = () => {
    return (
        <S.Container>
            <S.Stat>
                <S.Text>팔로워</S.Text>
                <S.Number>340</S.Number>
            </S.Stat>
            <S.Stat>
                <S.Text>팔로잉</S.Text>
                <S.Number>340</S.Number>
            </S.Stat>
        </S.Container>
    );
};

export default FollowStatsBar;