import {posts} from '@/mocks/post.ts'

export const fetchPosts = async () => posts

export const fetchPost = async (postId: string) => posts.find(post => post._id === postId)
