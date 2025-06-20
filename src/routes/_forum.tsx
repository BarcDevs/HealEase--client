import {createFileRoute} from '@tanstack/react-router'
import ForumLayout from '@/pages/layouts/ForumLayout.tsx'
import {routeError} from '@/lib/routeError.ts'

export const Route = createFileRoute('/_forum')({
    component: ForumLayout,

    ...routeError
})
