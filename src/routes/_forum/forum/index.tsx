import { createFileRoute } from '@tanstack/react-router'
import HomePage from '@/pages/forum/HomePage.tsx'

export const Route = createFileRoute('/_forum/forum/')({
  component: HomePage
})
