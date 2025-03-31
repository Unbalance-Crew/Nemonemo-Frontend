import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/utils/auth';
import { getMyInfo } from '@/api/member/member.api';

const useAuth = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<{ username: string, profileImage: string } | null>(null);

    useEffect(() => {
        const checkLoginStatus = async () => {
            const authenticated = await isAuthenticated();

            if (authenticated) {
                setIsLogin(true);

                try {
                    const { username, profileImagePath } = await getMyInfo();
                    setUserInfo({
                        username, 
                        profileImage: profileImagePath || '',  
                    });
                } catch (error) {
                    setUserInfo(null);
                }
            } else {
                setIsLogin(false);
                setUserInfo(null);
            }
        };

        checkLoginStatus();
    }, []);
    return { isLogin, userInfo };
};

export default useAuth;