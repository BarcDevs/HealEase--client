import {createRootRoute} from '@tanstack/react-router'
import RootLayout from '@/pages/layouts/RootLayout.tsx'

export const Route = createRootRoute({
    component: RootLayout,
    notFoundComponent: () => <div className={'flex-center mt-10 w-full'}>Page Not Found</div>
})
