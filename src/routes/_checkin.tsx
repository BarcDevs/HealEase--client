import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

import {validateUser} from '@/handlers/loaders/auth.ts'

import CheckInLayout from '@/pages/layouts/CheckInLayout.tsx'

export const Route =
    createFileRoute('/_checkin')({
        beforeLoad: validateUser,
        component: CheckInLayout,
        ...routeError
    })