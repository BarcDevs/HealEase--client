import {createFileRoute} from '@tanstack/react-router'

import {routeError} from '@/lib/routeError.ts'

import ForumLayout from '@/pages/layouts/ForumLayout.tsx'

export const Route = createFileRoute('/_forum')({
    component: ForumLayout,

    ...routeError
})
