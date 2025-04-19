import InfoBox from '@/components/profile/InfoBox';
import FollowStatsBar from '@/components/profile/FollowStatsBar';
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