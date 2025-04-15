import { useEffect } from 'react';
import ProfileImage from '@/assets/profile.svg';
import * as S from './style';
import { useMyInfo } from '@/hooks/Member/useMyInfo';

const InfoBox = () => {
    const { data } = useMyInfo();

    if (!data) {
        useEffect(() => {
            console.error("내 정보 없음");
        }, []);
        return null;
    };

    return (
        <S.Container>
            <S.ProfileImage src={ ProfileImage } alt="Profile" />
            <S.Username>{ data.username }</S.Username>
        </S.Container>
    );
};

export default InfoBox;