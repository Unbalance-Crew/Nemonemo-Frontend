import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "@/types/Auth/auth";
import { register } from "@/apis/auth/auth.api";
import Toast from "@/libs/Toast/toast";

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

    if (name.length < 2) {
      Toast("이름은 2자 이상이어야 합니다!", "ERROR");
      return;
    }

    if (!isValidateUserName(username)) {
      Toast("아이디는 4자 이상 12자 이하여야 합니다!", "ERROR");
      return;
    }

    if (!isValidatePassword(password)) {
      Toast(
        "비밀번호는 8자 이상, 문자, 숫자, 특수문자를 포함해야 합니다!",
        "ERROR"
      );
      return;
    }

    try {
      const response = await register(registerData);
      console.log("회원가입 성공");
      Toast("회원가입에 성공했습니다!", "SUCCESS");
      navigate("/login");
    } catch (error) {
      console.error("회원가입 실패", error);
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
