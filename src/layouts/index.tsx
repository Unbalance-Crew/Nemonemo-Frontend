import { Outlet } from 'react-router-dom';
import * as S from './style';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

const Layouts = () => {
    return (
        <S.Container>
            <Header />
            
            <S.Content>
                <Outlet />
            </S.Content>

            <Footer />
        </S.Container>
    );
};

export default Layouts;