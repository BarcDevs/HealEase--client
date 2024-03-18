import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_forum/forum/profile/$authorId')({
  component: () => <div>Hello /_forum/forum/profile/$authorId!</div>
})