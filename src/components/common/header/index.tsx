import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/logo.svg';
import * as S from './style';

const Header = () => {
    const navigate = useNavigate();
    return (
        <S.Container>
            <S.Header>
                <S.Logo onClick={() => navigate('/')}>
                    <img src={Logo} alt='로고' />
                </S.Logo>
            </S.Header>
        </S.Container>
    );
};

export default Header;