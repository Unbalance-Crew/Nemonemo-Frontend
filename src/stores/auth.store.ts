import { create } from "zustand";
import { isAuthenticated } from "@/utils/auth";
import { getMyInfo, profileImageUpload } from "@/apis/member/member.api";

interface AuthState {
    isAuthenticated: boolean;
    userInfo: { profileImage: string } | null;
    checkAuthStatus: () => void;
    logout: () => void;
    uploadProfileImage: (file: File) => Promise<void>;
};

const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    userInfo: null,
    checkAuthStatus: async () => {
        if (!isAuthenticated()) {
            set({ isAuthenticated: false, userInfo: null });
            return;
        }
        try {
            const { profileImagePath } = await getMyInfo();
            set({ isAuthenticated: true, userInfo: { profileImage: profileImagePath || '' } });
        } catch (error) {
            set({ isAuthenticated: false, userInfo: null });
        }
    },
    logout: () => {
        set({ isAuthenticated: false, userInfo: null });
    },
    uploadProfileImage: async (file: File) => {
        try {
            const updatedUserInfo = await profileImageUpload(file);
            set({ userInfo: { profileImage: updatedUserInfo.profileImagePath || '' } });
        } catch (error) {
            console.error("프로필 이미지 업로드 실패", error);
        }
    },
}));

export default useAuthStore;