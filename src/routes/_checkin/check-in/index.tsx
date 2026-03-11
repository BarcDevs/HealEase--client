import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError'

import {hourInMs} from '@/constants/time'

import {validateUser} from '@/handlers/loaders/auth'
import {checkInLoader} from '@/handlers/loaders/checkIn'

import CheckInPage from '@/pages/check-in/CheckInPage'

export const Route = createFileRoute(
    '/_checkin/check-in/'
)({
    beforeLoad: validateUser,
    loader: checkInLoader,
    pendingComponent: () => (
        <CheckInPage isLoading />
    ),
    component: CheckInPage,
    gcTime: 2 * hourInMs,
    ...routeError
})