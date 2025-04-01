import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '@/components/profile/profileImage';

const Header = () => {
    const navigate = useNavigate();

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
            </S.HeaderWrap>
        </S.Container>
    );
};

export default Header;