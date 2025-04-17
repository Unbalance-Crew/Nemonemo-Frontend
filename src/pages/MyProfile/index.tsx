import InfoBox from '@/components/Profile/InfoBox';
import FollowStatsBar from '@/components/Profile/FollowStatsBar';
import * as S from './style';

const myProfile = () => {
    return (
        <S.Container>
            <S.Content>
                <InfoBox />
                <FollowStatsBar />
            </S.Content>
        </S.Container>
    );
};

export default myProfile;