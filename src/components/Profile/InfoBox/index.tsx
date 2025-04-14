import ProfileImage from '@/assets/profile.svg';
import { ProfileProps } from '@/types/Profile/profile';
import * as S from './style';

const InfoBox = ({ name, username }: ProfileProps) => {
    return (
        <S.Container>
            <S.ProfileImage src={ProfileImage} alt="Profile" />
            <S.Name>{ name }</S.Name>
            <S.Username>{ username }</S.Username>
        </S.Container>
    );
};

export default InfoBox;