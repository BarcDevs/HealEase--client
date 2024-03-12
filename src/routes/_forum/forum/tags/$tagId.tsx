import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_forum/forum/tags/$tagId')({
  component: () => <div>Hello /_forum/forum/tags/$tagId!</div>
})