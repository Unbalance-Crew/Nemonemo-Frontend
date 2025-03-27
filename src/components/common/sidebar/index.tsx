import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Sidebar>
                <S.LogoContainer>
                    <img src={Logo} alt="logo" />
                </S.LogoContainer>
                <S.MenuContainer>
                    <S.Menu onClick={() => navigate('/') }>홈</S.Menu>
                    <S.Menu onClick={() => navigate('/search')}>검색</S.Menu>
                    <S.Menu onClick={() => navigate('/create')}>만들기</S.Menu>
                    <S.Menu onClick={() => navigate('/profile')}>프로필</S.Menu>
                </S.MenuContainer>
            </S.Sidebar>
        </S.Container>
    );
};

export default Sidebar;