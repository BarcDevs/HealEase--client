import {createFileRoute} from '@tanstack/react-router'
import PostFormPage from '@/pages/forum/PostFormPage.tsx'
import {postLoader} from '@/handlers/loaders/forum.ts'
import {validateUser} from '@/handlers/loaders/auth.ts'
import {routeError} from '@/lib/routeError.ts'

export const Route = createFileRoute('/_forum/forum/posts/$postId_/edit')({
    beforeLoad: validateUser,
    loader: async ({params}) => {
        return postLoader((params as {postId: string}).postId) // todo pass post data through route context
    },
    component: () => <PostFormPage type={'edit'}/>,

    ...routeError
})
