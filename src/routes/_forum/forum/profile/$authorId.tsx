import { createFileRoute } from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

export const Route = createFileRoute('/_forum/forum/profile/$authorId')({
  component: () => <div>Hello /_forum/forum/profile/$authorId!</div>,

  ...routeError
})
