import { createFileRoute } from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

import {validateUser} from '@/handlers/loaders/auth.ts'

import PostFormPage from '@/pages/forum/PostFormPage.tsx'

export const Route = createFileRoute('/_forum/forum/posts/create')({
  beforeLoad: validateUser,
  component: () => <PostFormPage type={'create'}/>,

  ...routeError
})
