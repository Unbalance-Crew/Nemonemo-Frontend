import { Outlet } from 'react-router-dom';
import * as S from './style';
import Footer from '@/components/common/footer';

const Layouts = () => {
    return (
        <S.Container>
            
            <S.Content>
                <Outlet />
            </S.Content>
            
            <Footer />
        </S.Container>
    );
};

export default Layouts;