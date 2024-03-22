import {posts} from '@/mocks/post.ts'
import {ForumSearchParams} from '@/types/router'
import {Post} from '@/types/forum'

export const fetchPosts = async ({category}: ForumSearchParams): Promise<Post[]> => {
    if (category) {
        return posts.filter(post => post.category === category)
    }

    return posts
}

export const fetchPost = async (postId: string) => posts.find(post => post._id === postId)
