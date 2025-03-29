import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleLinkLogin = () => {
        navigate('/login');
    };

    return (
        <S.Container>
            <S.LogoContainer>
                <img src={Logo} alt="로고" />
            </S.LogoContainer>
            <S.RegisterForm>
                <S.InputGroup>
                    <S.InputTitle>본명</S.InputTitle>
                    <S.RegisterInput type="text" placeholder="본명을 입력하세요" />
                </S.InputGroup>
                <S.InputGroup>
                    <S.InputTitle>아이디</S.InputTitle>
                    <S.RegisterInput type="text" placeholder="아이디를 입력하세요" />
                </S.InputGroup>
                <S.InputGroup>
                    <S.InputTitle>비밀번호</S.InputTitle>
                    <S.RegisterInput type="password" placeholder="비밀번호를 입력하세요" />
                </S.InputGroup>
                <S.ButtonContainer>
                    <S.RegisterButton>회원가입</S.RegisterButton>
                </S.ButtonContainer>
            </S.RegisterForm>
            <S.LinkContainer>
                <S.LinkText>이미 계정이 있다면 <span onClick={handleLinkLogin}>로그인</span></S.LinkText>
            </S.LinkContainer>
        </S.Container>
    );
};

export default Register;