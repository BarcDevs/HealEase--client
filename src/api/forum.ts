import {api} from '@/api/index.ts'
import {Post} from '@/types/forum'

export const fetchPosts = async () => api.get<Post[]>('/forum/posts')

export const fetchPost = async (postId: string) => api.get<Post>(`/forum/posts/${postId}`)
