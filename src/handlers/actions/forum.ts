import {Post} from '@/types/forum.ts'
import {Response} from '@/types/responses'

import {createPost, updatePost} from '@/api/forum.ts'
import {PostSchema} from '@/validations/forms/postSchema.ts'

/**
 * Will handle submission of a form
 * @param post - post data used after validation
 * @param postId - optional. Pass it if you want to update an existing post
 * @returns axios response
 */
export const submitForm = async (post: PostSchema, postId?: string)
    : Promise<Response<Post>> =>
    postId ?
        (await updatePost(postId, post)).data :
        (await createPost(post)).data

