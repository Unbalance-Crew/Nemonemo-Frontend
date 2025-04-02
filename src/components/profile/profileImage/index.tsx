import * as S from './style';

interface ProfileImageProps {
    src: string;
    size: number;
    onClick?: () => void;
}

const ProfileImage = ({ src, size, onClick }: ProfileImageProps) => {
    return (
        <S.Container size={size}>
            <img src={src} alt="프로필 이미지" />
        </S.Container>
    );
};

export default ProfileImage;