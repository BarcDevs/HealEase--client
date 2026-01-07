import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

import {postLoader} from '@/handlers/loaders/forum.ts'

import PostPage from '@/pages/forum/PostPage.tsx'

export const Route = createFileRoute('/_forum/forum/posts/$postId')({
    loader: async ({params}) => {
        return postLoader((params as {postId: string}).postId)
    },
    component: PostPage,

    ...routeError
})
