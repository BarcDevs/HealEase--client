import { createFileRoute } from '@tanstack/react-router'
import PostFormPage from '@/pages/forum/PostFormPage.tsx'

export const Route = createFileRoute('/_forum/forum/posts/create')({
  component: () => <PostFormPage type={'create'}/>
})
