import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Register } from '@/types/auth/auth';
import { register } from '@/api/auth/auth.api';
import Toast from '@/libs/toast/toast';

const useSignup = () => {
    const navigate = useNavigate();

    const [ registerData, setRegisterData ] = useState<Register>({
        name: '',
        username: '',
        password: '',
    })

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
            Toast('모든 항목을 입력해주세요!', 'ERROR');
            return;
        };

        try {
            const response = await register(registerData);

            Toast('회원가입에 성공했습니다!', 'SUCCESS');

            navigate('/login');

        } catch (error) {
            Toast('회원가입에 실패했습니다!', 'ERROR');
        };
    };

    return {
        registerData,
        onChange,
        handleRegister,
    };
};