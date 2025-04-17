import { useEffect, useState } from 'react';
import ProfileImage from '@/assets/profile.svg';
import * as S from './style';

const InfoBox = () => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('username');
        setUsername(storedUsername);
        console.log('세션에서 가져온 username:', storedUsername);
    }, []);
    return (
        <S.Container>
            <img src={ ProfileImage } alt='프로필 이미지' />
            <S.Username>{ username }</S.Username>
        </S.Container>
    );
};

export default InfoBox;