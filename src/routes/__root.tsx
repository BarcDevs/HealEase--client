import {createRootRouteWithContext} from '@tanstack/react-router'

import {RouterContext} from '@/types/router.ts'
import RootLayout from '@/pages/layouts/RootLayout.tsx'

import NotFoundPage from '@/pages/error/NotFoundPage.tsx'
import {routeError} from '@/lib/routeError.ts'

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,

    notFoundComponent: NotFoundPage,
    ...routeError
})
