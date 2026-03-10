import {
    createFileRoute,
    Outlet
} from '@tanstack/react-router'

import {validateUser} from '@/handlers/loaders/auth'

export const Route = createFileRoute('/_profile')({
    beforeLoad: validateUser,
    component: () => (
        <Outlet/>
    )
})