import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

import {validateUser} from '@/handlers/loaders/auth'
import {checkInLoader} from '@/handlers/loaders/checkIn.ts'

import CheckInPage from '@/pages/check-in/CheckInPage.tsx'

export const Route = createFileRoute(
    '/_checkin/check-in/'
)({
    beforeLoad: validateUser,
    loader: checkInLoader,
    pendingComponent: () => (
        <CheckInPage isLoading />
    ),
    component: CheckInPage,
    ...routeError
})