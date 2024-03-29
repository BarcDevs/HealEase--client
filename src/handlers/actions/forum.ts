import {PostSchema} from '@/validations/forms/postSchema.ts'
import {createPost, updatePost} from '@/api/forum.ts'

/**
 * Will handle submission of a form
 * @param post - post data used after validation
 * @param postId - optional. Pass it if you want to update an existing post
 * @returns axios response
 */
export const submitForm = async (post: PostSchema, postId?: string) =>
    postId ?
        (await updatePost(postId, post)).data :
        (await createPost(post)).data

