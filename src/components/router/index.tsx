import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '@/utils/auth';

import Layout from '@/layouts';
import Home from '@/pages/Home';
import Login from '@/pages/LogIn';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Create from '@/pages/Create';
import Profile from '@/pages/MyProfile';
import UserProfile from '@/pages/UserProfile';
import NotFound from '@/pages/Notfound';

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
                        <Route path="/profile/:username" element={<UserProfile />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;