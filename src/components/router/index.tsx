import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

import Layout from '@/layouts';
import Home from '@/pages/home';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Search from '@/pages/search';
import Create from '@/pages/create';
import Profile from '@/pages/profile';
import NotFound from '@/pages/notfound';

const RequireAuth = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route element={<RequireAuth />}>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;