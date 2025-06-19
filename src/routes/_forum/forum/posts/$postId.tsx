import {createFileRoute} from '@tanstack/react-router'
import PostPage from '@/pages/forum/PostPage.tsx'
import {postLoader} from '@/handlers/loaders/forum.ts'

export const Route = createFileRoute('/_forum/forum/posts/$postId')({
    loader: async ({params}) => {
        return postLoader((params as {postId: string}).postId)
    },
    component: PostPage
})
