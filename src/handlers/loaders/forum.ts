import {ForumSearchParams} from '@/types/router.ts'
import {fetchPost, fetchPosts} from '@/api/forum.ts'
import {Post} from '@/types/forum.ts'

export const postsLoader = async (search: ForumSearchParams): Promise<Post[]> =>
    (await fetchPosts(search)).data.data

export const postLoader = async (postId: string): Promise<Post> =>
    (await fetchPost(postId)).data.data
