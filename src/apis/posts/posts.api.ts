import { motreeAxios } from "@/libs/axios/axios";
import { PostsResponse, AllPostsResponse } from "@/types/posts/posts";

const SERVER_URL = import.meta.env.VITE_SERVER_URL || "http://localhost:5173";

export const getPosts = async (postId: number): Promise<PostsResponse> => {
    try {
        const { data} = await motreeAxios.get<PostsResponse>(`${SERVER_URL}/api/posts/${postId}`);
        return data;
    } catch (error) {
        throw new Error("게시글 조회 요청 실패");
    };
};

export const getAllPosts = async (pageRequestDto: { page: number; size: number }): Promise<AllPostsResponse> => {
    try {
        const { data } = await motreeAxios.get<AllPostsResponse>(`${SERVER_URL}/api/posts`, {
            params: pageRequestDto,
        });
        return data;
    } catch (error) {
        throw new Error("게시글 목록 조회 요청 실패");
    };
};

export const updatePosts = async (postId: number, postRequestDto: { post: object; file: File }): Promise<PostsResponse> => {
    try {     
       const formData = new FormData();
       formData.append("post", JSON.stringify(postRequestDto.post));
       formData.append("file", postRequestDto.file);

       const { data } = await motreeAxios.put<PostsResponse>(`${SERVER_URL}/api/posts/${postId}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (error) {
        throw new Error("게시글 수정 요청 실패");
    };
};

export const deletePosts = async (postId: number) => {
    try {
        const { data } = await motreeAxios.delete(`${SERVER_URL}/api/posts/${postId}`);
    } catch (error) {
        throw new Error("게시글 삭제 요청 실패");
    };
};

export const createPosts = async (createPostRequestDto: { post: object; file: File }): Promise<PostsResponse> => {
    try {
        const formData = new FormData();
        formData.append("post", JSON.stringify(createPostRequestDto.post));
        formData.append("file", createPostRequestDto.file);

        const { data } = await motreeAxios.post<PostsResponse>(`${SERVER_URL}/api/posts`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return data;
    } catch (error) {
        throw new Error("게시글 생성 요청 실패");
    };
};