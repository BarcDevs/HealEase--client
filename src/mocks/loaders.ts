import {posts} from '@/mocks/post.ts'
import {ForumSearchParams} from '@/types/router'
import {Post} from '@/types/forum'

export const fetchPosts = async (query?: ForumSearchParams): Promise<Post[]> => {
    if (query?.category) {
        return posts.filter(post => post.category === query.category)
    }

    return posts
}

export const fetchPost = async (postId: string) => posts.find(post => post._id === postId)
