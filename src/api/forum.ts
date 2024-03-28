import {api} from '@/api/index.ts'
import {Post, Reply} from '@/types/forum.ts'
import {ForumSearchParams} from '@/types/router.ts'
import {PostSchema} from '@/validations/forms/postSchema.ts'
import {getCsrfToken} from '@/handlers/auth.ts'
import {AxiosPromise} from 'axios'

export const fetchPosts = async (query: ForumSearchParams): AxiosPromise<Post[]> =>
    api.get<Post[]>('/forum/posts', {data: query})

export const fetchPost = async (postId: string) : AxiosPromise<Post> =>
    api.get<Post>(`/forum/posts/${postId}`)

export const createPost = async (post: PostSchema) : AxiosPromise<Post> =>
    api.post<Post>('/forum/posts', {
        csrfToken: getCsrfToken(),
        post
    })

export const updatePost = async (postId: string, post: PostSchema) : AxiosPromise<Post> =>
    api.put<Post>(`/forum/posts/${postId}`, {
        csrfToken: getCsrfToken(),
        post
    })

export const deletePost = async (postId: string) =>
    api.delete(`/forum/posts/${postId}`, {data: {csrfToken: getCsrfToken()}})

export const fetchReplies = async (postId: string) : AxiosPromise<Reply[]> =>
    api.get<Reply[]>(`/forum/posts/${postId}/replies`)

export const createReply = async (postId: string, reply: Reply) : AxiosPromise<Reply> =>
    api.post<Reply>(`/forum/posts/${postId}/replies`, {
        csrfToken: getCsrfToken(),
        reply
    })

export const updateReply = async (postId: string, replyId: string, reply: Reply) : AxiosPromise<Reply> =>
    api.put<Reply>(`/forum/posts/${postId}/replies/${replyId}`, {
        csrfToken: getCsrfToken(),
        reply
    })


