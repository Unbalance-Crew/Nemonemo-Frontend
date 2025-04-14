import * as S from "./style";
import Logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import useRegister from "@/hooks/Auth/useRegister";
import { useEffect } from "react";
import Toast from "@/libs/Toast/toast";

const Register = () => {
  const navigate = useNavigate();
  const { registerData, onChange, handleRegister } = useRegister();

  const handleLinkLogin = () => {
    navigate("/login");
  };

  useEffect(() => {
    Toast("토스트 확인", "SUCCESS");
  }, []);

  return (
    <S.Container>
      <S.LogoContainer>
        <img src={Logo} alt="로고" />
      </S.LogoContainer>
      <S.RegisterForm>
        <S.InputGroup>
          <S.InputTitle>이름</S.InputTitle>
          <S.RegisterInput
            type="text"
            name="name"
            value={registerData.name}
            onChange={onChange}
            placeholder="이름을 입력하세요"
          />
        </S.InputGroup>
        <S.InputGroup>
          <S.InputTitle>아이디</S.InputTitle>
          <S.RegisterInput
            type="text"
            name="username"
            value={registerData.username}
            onChange={onChange}
            placeholder="아이디를 입력하세요"
          />
        </S.InputGroup>
        <S.InputGroup>
          <S.InputTitle>비밀번호</S.InputTitle>
          <S.RegisterInput
            type="password"
            name="password"
            value={registerData.password}
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
          />
        </S.InputGroup>
        <S.ButtonContainer>
          <S.RegisterButton type="button" onClick={handleRegister}>
            회원가입
          </S.RegisterButton>
        </S.ButtonContainer>
      </S.RegisterForm>
      <S.LinkContainer>
        <S.LinkText>
          이미 계정이 있다면 <span onClick={handleLinkLogin}>로그인</span>
        </S.LinkText>
      </S.LinkContainer>
    </S.Container>
  );
};

export default Register;
