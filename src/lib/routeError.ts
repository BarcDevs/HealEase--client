import ErrorPage from '@/pages/error/ErrorPage.tsx'
import * as Sentry from '@sentry/react'

export const routeError = {
    errorComponent: ErrorPage,
    onError: (error: any) => {
        console.error('Route error:', error)
        Sentry.captureException(error)
    }
}
