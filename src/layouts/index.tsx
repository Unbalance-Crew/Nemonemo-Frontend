import { Outlet } from 'react-router-dom';
import * as S from './style';
import Sidebar from '@/components/common/sidebar';
import Footer from '@/components/common/footer';

const Layouts = () => {
    return (
        <S.Container>

            <S.SidebarContainer>
                <Sidebar />
            </S.SidebarContainer>

            <S.MainContainer>
                <S.Content>
                    <Outlet />
                </S.Content>
                <Footer />
            </S.MainContainer>

        </S.Container>
    );
};

export default Layouts;