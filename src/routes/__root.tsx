import {createRootRouteWithContext} from '@tanstack/react-router'
import * as Sentry from '@sentry/react'

import {RouterContext} from '@/types/router.ts'
import RootLayout from '@/pages/layouts/RootLayout.tsx'

import NotFoundPage from '@/pages/error/NotFoundPage.tsx'
import ErrorPage from '@/pages/error/ErrorPage.tsx'

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
    notFoundComponent: NotFoundPage,
    errorComponent: ErrorPage,
    onError: (error) => {
        console.error('Root route error:', error)
        Sentry.captureException(error)
    }
})
