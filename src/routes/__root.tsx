import {createRootRouteWithContext} from '@tanstack/react-router'

import {RouterContext} from '@/types/router.ts'

import {routeError} from '@/lib/routeError.ts'

import NotFoundPage from '@/pages/error/NotFoundPage.tsx'
import RootLayout from '@/pages/layouts/RootLayout.tsx'

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,

    notFoundComponent: NotFoundPage,
    ...routeError
})
