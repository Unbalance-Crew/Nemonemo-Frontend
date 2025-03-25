export interface Login {
    username: string;
    password: string;
};

export interface SignUp {
    username: string;
    password: string;
    athority: string;
};

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
};

export interface NewAccessToken {
    accessToken: string;
};