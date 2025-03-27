import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Search from '@/pages/search';
import Create from '@/pages/create';
import Profile from '@/pages/profile';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/search' element={<Search />} />
                <Route path='/create' element={<Create />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;