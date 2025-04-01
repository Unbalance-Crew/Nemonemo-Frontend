import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "@/types/auth/auth";
import { register } from "@/apis/auth/auth.api";
import Toast from "@/libs/toast/toast";

const isValidateUserName = (username: string) => {
  return /^[a-zA-Z0-9]{4,12}$/.test(username);
};

const isValidatePassword = (password: string) => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
};

const useRegister = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState<Register>({
    name: "",
    username: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    const { name, username, password } = registerData;

    if (!name || !username || !password) {
      Toast("모든 항목을 입력해주세요!", "ERROR");
      return;
    }

    if (!isValidateUserName(username)) {
      Toast("아이디는 4자 이상 12자 이하여야 합니다!", "ERROR");
      return;
    }

    if (!isValidatePassword(password)) {
      Toast(
        "error",
        "비밀번호는 8자 이상, 숫자, 문자, 특수문자를 포함해야합니다!"
      );
      return;
    }

    try {
      await register(registerData);

      Toast("회원가입에 성공했습니다!", "SUCCESS");

      navigate("/login");
    } catch (error) {
      Toast("회원가입에 실패했습니다!", "ERROR");
    }
  };

  return {
    registerData,
    onChange,
    handleRegister,
  };
};

export default useRegister;
