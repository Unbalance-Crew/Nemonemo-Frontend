import * as S from './style';
import Logo from '@/assets/logo.svg';

const Login = () => {
    return (
        <S.Container>
            <S.LogoContainer>
                <img src={Logo} alt="로고" />
            </S.LogoContainer>
            
            <S.LoginContainer>
            </S.LoginContainer>
        </S.Container>
    );
};

export default Login;