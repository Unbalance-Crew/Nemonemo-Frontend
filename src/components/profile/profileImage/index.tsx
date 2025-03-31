import * as S from './style';

interface ProfileImageProps {
    src: string;
    size: number;
}

const ProfileImage = ({ src, size }: ProfileImageProps) => {
    return (
        <S.Container size={size}>
            <img src={src} alt="프로필 이미지" />
        </S.Container>
    );
};

export default ProfileImage;