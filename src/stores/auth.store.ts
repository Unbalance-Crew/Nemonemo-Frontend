import { create } from "zustand";
import { isAuthenticated } from "@/utils/auth";

interface AuthState {
    isAutenticated: boolean;
    userInfo: { username: string; profileImage: string } | null;
    checkAuthStatus: () => void; 
    logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
    isAutenticated: false,
    userInfo: null,
    checkAuthStatus: () => {
        const isAuth = isAuthenticated();
        set({ isAutenticated: isAuth });
    },
    logout: () => {
        set({ isAutenticated: false, userInfo: null });
    },
}));

export default useAuthStore;