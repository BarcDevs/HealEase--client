import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

import {validateUser} from '@/handlers/loaders/auth.ts'
import {postLoader} from '@/handlers/loaders/forum.ts'

import PostFormPage from '@/pages/forum/PostFormPage.tsx'

export const Route = createFileRoute('/_forum/forum/posts/$postId/edit')({
    beforeLoad: validateUser,
    loader: async ({params}) => {
        return postLoader((params as {postId: string}).postId) // todo pass post data through route context
    },
    component: () => <PostFormPage type={'edit'}/>,

    ...routeError
})
