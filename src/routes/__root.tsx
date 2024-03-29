import {createRootRouteWithContext} from '@tanstack/react-router'
import RootLayout from '@/pages/layouts/RootLayout.tsx'
import {RouterContext} from '@/types/router.ts'

export const Route = createRootRouteWithContext<RouterContext>()({
    component: RootLayout,
    notFoundComponent: () => <div className={'flex-center mt-10 w-full'}>Page Not Found</div>
})
