import { createFileRoute } from '@tanstack/react-router'
import PostFormPage from '@/pages/forum/PostFormPage.tsx'
import {validateUser} from '@/handlers/loaders/auth.ts'
import {routeError} from '@/lib/routeError.ts'

export const Route = createFileRoute('/_forum/forum/posts/create')({
  beforeLoad: validateUser,
  component: () => <PostFormPage type={'create'}/>,

  ...routeError
})
