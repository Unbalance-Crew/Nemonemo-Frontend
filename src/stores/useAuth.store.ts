import { create } from 'zustand';
import { User } from '@/types/user/user';

interface AuthState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
    
}))