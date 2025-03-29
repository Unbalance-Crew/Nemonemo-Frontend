import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/utils/auth';

export const useAuth = () => {
    const [ isLogged, setIsLogged ] = useState<boolean>(false);

    useEffect(() => {
        setIsLogged(isAuthenticated());
    }, []);

    return { isLogged };
};