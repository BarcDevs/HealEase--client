import { createLazyFileRoute } from '@tanstack/react-router'
import HomePage from '@/pages/HomePage.tsx'
import ErrorPage from '@/pages/error/ErrorPage.tsx'

export const Route = createLazyFileRoute('/')({
  component: HomePage,

  errorComponent: ErrorPage
})
