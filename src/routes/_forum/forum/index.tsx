import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_forum/forum/')({
  component: () => <div>Hello /(forum)/_forumLayout/forum/!</div>
})
