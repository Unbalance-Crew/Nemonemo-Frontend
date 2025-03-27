import * as S from './style';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '@/components/common/header';

const Layout = () => {
    const [ showHeader, setShowHeader ] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/login' || path === '/register') {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        };
    }, [navigate]);

    return (
        <S.Container>
            {showHeader && <Header />}
            <S.Content>
                <Outlet />
            </S.Content>
        </S.Container>
    );
};

export default Layout;