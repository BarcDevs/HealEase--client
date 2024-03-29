import {api} from '@/api/index.ts'
import {Post, Reply} from '@/types/forum.ts'
import {PostSchema} from '@/validations/forms/postSchema.ts'
import {getCsrfTokenFromStore} from '@/handlers/auth.ts'
import {ApiResponse, Response} from '@/types/responses'

export const fetchPosts = async (query: any): ApiResponse<Post[]> =>
    await api.get<Response<Post[]>>('/forum/posts', {params: query})

export const fetchPost = async (postId: string): ApiResponse<Post> =>
    api.get<Response<Post>>(`/forum/posts/${postId}`)

export const createPost = async (post: PostSchema): ApiResponse<Post> =>
    api.post<Response<Post>>('/forum/posts', {
        csrfToken: getCsrfTokenFromStore(),
        ...post
    })

export const updatePost = async (postId: string, post: PostSchema): ApiResponse<Post> =>
    api.put<Response<Post>>(`/forum/posts/${postId}`, {
        csrfToken: getCsrfTokenFromStore(),
        ...post
    })

export const deletePost = async (postId: string): ApiResponse<object> =>
    api.delete<Response<object>>(`/forum/posts/${postId}`, {data: {csrfToken: getCsrfTokenFromStore()}})

export const fetchReplies = async (postId: string): ApiResponse<Reply[]> =>
    api.get<Response<Reply[]>>(`/forum/posts/${postId}/replies`)

export const createReply = async (postId: string, reply: Reply): ApiResponse<Reply> =>
    api.post<Response<Reply>>(`/forum/posts/${postId}/replies`, {
        csrfToken: getCsrfTokenFromStore(),
        ...reply
    })

export const updateReply = async (postId: string, replyId: string, reply: Reply): ApiResponse<Reply> =>
    api.put<Response<Reply>>(`/forum/posts/${postId}/replies/${replyId}`, {
        csrfToken: getCsrfTokenFromStore(),
        ...reply
    })


