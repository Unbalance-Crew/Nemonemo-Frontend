import * as S from './style';
import { Outlet } from 'react-router-dom';
import Header from '@/components/common/header';

const Layout = () => {
    return (
        <S.Container>
            <Header />
            <S.Content>
                <Outlet />
            </S.Content>
        </S.Container>
    );
};

export default Layout;