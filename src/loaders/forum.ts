import {ForumSearchParams} from '@/types/router.ts'
import {fetchPost, fetchPosts} from '@/api/forum.ts'
import {Post} from '@/types/forum.ts'
import {AxiosPromise} from 'axios'

export const postsLoader = async (search: ForumSearchParams) : AxiosPromise<Post[]> =>
    await fetchPosts(search)

export const postLoader = async (postId: string) : AxiosPromise<Post> =>
    await fetchPost(postId)
