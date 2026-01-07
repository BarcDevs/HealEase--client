import { createLazyFileRoute } from '@tanstack/react-router'

import ErrorPage from '@/pages/error/ErrorPage.tsx'
import HomePage from '@/pages/HomePage.tsx'

export const Route = createLazyFileRoute('/')({
  component: HomePage,

  errorComponent: ErrorPage
})
