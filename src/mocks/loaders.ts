import {posts} from '@/mocks/post.ts'
import {ForumSearchParams} from '@/types/router'

export const fetchPosts = async (query?: ForumSearchParams) => {
    if (query?.category) {
        return posts.filter(post => post.category === query.category)
    }

    return posts
}

export const fetchPost = async (postId: string) => posts.find(post => post._id === postId)
