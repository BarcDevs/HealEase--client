import { createFileRoute } from '@tanstack/react-router'
import PostFormPage from '@/pages/forum/PostFormPage.tsx'
import {fetchPost} from '@/mocks/loaders.ts'

export const Route = createFileRoute('/_forum/forum/posts/$postId/edit')({
  loader: async ({params}) => {
    return fetchPost(params.postId)
  },
  component: () => <PostFormPage type={'edit'}/>,
})
