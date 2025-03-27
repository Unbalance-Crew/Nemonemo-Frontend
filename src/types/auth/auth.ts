export interface Login {
    username: string;
    password: string;
};

export interface Register {
    username: string;
    password: string;
    name: string;
};

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
};

export interface NewAccessToken extends Response {
    accessToken: string;
};