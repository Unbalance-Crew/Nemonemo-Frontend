import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLinkRegister = () => {
        navigate('/register');
    };

    return (
        <S.Container>
            <S.LogoContainer>
                <img src={Logo} alt="로고" />
            </S.LogoContainer>
            <S.LoginForm>
                <S.InputGroup>
                    <S.InputTitle>아이디</S.InputTitle>
                    <S.LoginInput type="text" placeholder="아이디 입력" />
                </S.InputGroup>
                <S.InputGroup>
                    <S.InputTitle>비밀번호</S.InputTitle>
                    <S.LoginInput type="password" placeholder="비밀번호 입력" />
                </S.InputGroup>
                <S.ButtonContainer>
                    <S.LoginButton type='button'>로그인</S.LoginButton>
                </S.ButtonContainer>
            </S.LoginForm>
            <S.LinkContainer>
                <S.LinkText>계정이 없다면 <span onClick={handleLinkRegister}>회원가입</span></S.LinkText>
            </S.LinkContainer>
        </S.Container>
    );
};

export default Login;