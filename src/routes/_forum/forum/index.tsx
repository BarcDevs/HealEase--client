import { createFileRoute } from '@tanstack/react-router'
import ForumHomePage from '@/pages/forum/ForumHomePage.tsx'

export const Route = createFileRoute('/_forum/forum/')({
  component: ForumHomePage
})
