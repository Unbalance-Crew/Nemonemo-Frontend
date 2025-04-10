import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import useLogout from '@/hooks/auth/useLogout';

const Header = () => {
    const navigate = useNavigate();
    const { handleLogout } = useLogout();

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
                        <S.MenuItem onClick={() => navigate('/profile')}>프로필</S.MenuItem>
                        <S.LogoutButton onClick={handleLogout}>로그아웃</S.LogoutButton>
                    </S.Menu>
                </S.MenuWrap>
            </S.HeaderWrap>
        </S.Container>
    );
};

export default Header;