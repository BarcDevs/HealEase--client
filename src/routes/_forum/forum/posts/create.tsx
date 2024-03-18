import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_forum/forum/posts/create')({
  component: () => <div>Hello /_forum/forum/posts/create!</div>
})