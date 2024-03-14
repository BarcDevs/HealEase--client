import {createFileRoute} from '@tanstack/react-router'
import {fetchPost} from '@/mocks/loaders.ts'
import PostPage from '@/pages/forum/PostPage.tsx'

export const Route = createFileRoute('/_forum/forum/posts/$postId')({
    loader: async ({params}) => {
        return fetchPost(params.postId)
    },
    component: PostPage
})




