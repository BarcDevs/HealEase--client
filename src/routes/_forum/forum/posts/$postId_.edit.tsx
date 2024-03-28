import {createFileRoute} from '@tanstack/react-router'
import PostFormPage from '@/pages/forum/PostFormPage.tsx'
import {postLoader} from '@/handlers/loaders/forum.ts'

export const Route = createFileRoute('/_forum/forum/posts/$postId/edit')({
    loader: async ({params}) => {
        return postLoader(params.postId) // todo pass post data through route context
    },
    component: () => <PostFormPage type={'edit'}/>
})
