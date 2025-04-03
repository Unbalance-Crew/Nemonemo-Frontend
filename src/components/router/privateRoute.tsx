import { useState, useEffect } from 'react';
import { Outlet, useNavigate, Navigate } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

const PrivateRoute = () => {
    const [ isAuth, setIsAuth ] = useState(isAuthenticated());
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login', { replace: true });
        } else {
            setIsAuth(true);
        }
    }, [ navigate ]);

    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;