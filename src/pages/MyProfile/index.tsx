import InfoBox from '@/components/Profile/InfoBox';
import * as S from './style';

const myProfile = () => {
    return (
        <S.Container>
            <S.Content>
                <InfoBox />
            </S.Content>
        </S.Container>
    );
};

export default myProfile;