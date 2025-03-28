import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/token/token.constants';
import { Login } from '@/types/auth/auth';
import { login } from '@/api/auth/auth.api';
import { Token } from '@/libs/token/token';
import Toast from '@/libs/toast/toast';

const useLogin = () => {
    const navigate = useNavigate();

    const [ loginData, setLoginData ] = useState<Login>({
        username: '',
        password: '',
    });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setLoginData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        const { username, password } = loginData;

        if (!username || !password) {
            Toast('모든 항목을 입력해주세요!', 'ERROR');
            return;
        };

        try {
            const response = await login(loginData);

            const accessToken = response.accessToken;
            const refreshToken = response.refreshToken;

            Token.setToken(ACCESS_TOKEN, accessToken);
            Token.setToken(REFRESH_TOKEN, refreshToken);

            Toast('로그인에 성공했습니다!', 'SUCCESS');

            navigate('/');

        } catch (error) {
            Toast('로그인에 실패했습니다!', 'ERROR');
        };
    };
    return {
        loginData,
        onChange,
        handleLogin,
    }
};

export default useLogin;