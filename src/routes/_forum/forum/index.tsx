import { createFileRoute } from '@tanstack/react-router'
import ForumHomePage from '@/pages/forum/ForumHomePage.tsx'
import {fetchPosts} from '@/mocks/loaders.ts'

export const Route = createFileRoute('/_forum/forum/')({
  loader: async () => {
    return fetchPosts()
  },
  component: ForumHomePage
})
