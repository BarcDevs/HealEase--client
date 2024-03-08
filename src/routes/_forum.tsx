import {createFileRoute} from '@tanstack/react-router'
import ForumLayout from '@/pages/layouts/ForumLayout.tsx'

export const Route = createFileRoute('/_forum')({
    component: ForumLayout
})
