import {posts} from '@/mocks/post.ts'
import {ForumSearchParams} from '@/types/router'
import {Post} from '@/types/forum'
import {Filter} from '@/data/forum/filters.ts'

export const fetchPosts = async ({filter = Filter.newest, category}: ForumSearchParams): Promise<Post[]> => {
    if (category) {
        return sortBy(posts, filter).filter(post => post.category === category)
    }

    return sortBy(posts, filter)
}

export const fetchPost = async (postId: string) => posts.find(post => post._id === postId)

const sortBy = (posts : Post[], sort: Filter) => {
    switch (sort) {
        case Filter.newest:
            return posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        case Filter.popular:
            return posts.sort((a, b) => b.votes.positive - b.votes.negative - (a.votes.positive - a.votes.negative))
        case Filter.hot:
            return posts.sort((a, b) => b.replies.length - a.replies.length)
        case Filter.unanswered:
            return posts.filter(post => post.replies.length === 0)
    }
}
