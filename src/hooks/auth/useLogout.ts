import { useNavigate } from "react-router-dom";
import { Token } from "@/libs/Token/token";
import Toast from "@/libs/Toast/toast";

const useLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Token.clearToken();
    navigate("/login");
    Toast("로그아웃 되었습니다!", "SUCCESS");
  };
  return {
    handleLogout,
  };
};

export default useLogout;
