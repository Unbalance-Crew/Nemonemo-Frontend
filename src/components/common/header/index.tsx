import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/auth/useAuth';
import ProfileImage from '@/components/profile/profileImage';

const Header = () => {
    const navigate = useNavigate();
    const { isLogin, userInfo } = useAuth();

    return (
        <S.Container>
            <S.HeaderWrap>
                <S.Logo onClick={() => navigate('/')}>
                    <img src={Logo} alt="로고" />
                </S.Logo>
                <S.MenuWrap>
                    <S.Menu>
                        <S.MenuItem onClick={() => navigate('/')}>홈</S.MenuItem>
                        <S.MenuItem onClick={() => navigate('/search')}>포스트 검색</S.MenuItem>
                        <S.MenuItem onClick={() => navigate('/create')}>게시물 생성</S.MenuItem>

                        {isLogin ? (
                            <S.UserInfo>
                                <ProfileImage src={userInfo?.profileImage || ''} size={30} />
                                <S.Username>{userInfo?.username}</S.Username>
                            </S.UserInfo>
                        ) : (
                            <S.MenuItem onClick={() => navigate('/login')}>로그인</S.MenuItem>
                        )}
                    </S.Menu>
                </S.MenuWrap>
            </S.HeaderWrap>
        </S.Container>
    );
};

export default Header;