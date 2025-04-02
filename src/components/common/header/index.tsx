import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '@/components/profile/profileImage';
import useAuthStore from '@/stores/auth.store';

const Header = () => {
    const navigate = useNavigate();
    const { isAuthenticated, userInfo, logout } = useAuthStore((state) => ({
        isAuthenticated: state.isAuthenticated,
        userInfo: state.userInfo,
        logout: state.logout,
    }));

    const handleProfileClick = () => {
        if (isAuthenticated) {
            navigate('/profile');
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

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
                    </S.Menu>
                </S.MenuWrap>
                <S.ProfileWrapper>
                    {isAuthenticated ? (
                        <div>
                            <ProfileImage
                                src={userInfo?.profileImage || ''}
                                size={40}
                                onClick={handleProfileClick}
                            />
                            <S.MenuItem onClick={handleLogout}>로그아웃</S.MenuItem>
                        </div>
                    ) : (
                        <S.MenuItem onClick={() => navigate('/login')}>로그인</S.MenuItem>
                    )}
                </S.ProfileWrapper>
            </S.HeaderWrap>
        </S.Container>
    );
};

export default Header;