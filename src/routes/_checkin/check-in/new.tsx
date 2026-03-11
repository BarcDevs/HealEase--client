import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError'

import {hourInMs} from '@/constants/time'

import {validateUser} from '@/handlers/loaders/auth'
import {newCheckInLoader} from '@/handlers/loaders/checkIn'

import NewCheckInPage from '@/pages/check-in/NewCheckInPage'

export const Route = createFileRoute(
    '/_checkin/check-in/new'
)({
    beforeLoad: validateUser,
    loader: newCheckInLoader,
    component: NewCheckInPage,
    gcTime: 2 * hourInMs,
    ...routeError
})