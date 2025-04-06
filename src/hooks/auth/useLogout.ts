import { useNavigate } from 'react-router-dom';
import { Token } from '@/libs/token/token';
import Toast from '@/libs/toast/toast';

const useLogout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Token.clearToken();
        navigate('/login');
        Toast('로그아웃 되었습니다!', 'SUCCESS');
    };
    return {
        handleLogout,
    };
};

export default useLogout;