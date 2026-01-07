import { createFileRoute } from '@tanstack/react-router'

import AuthPage from '@/pages/AuthPage.tsx'

export const Route = createFileRoute('/(auth)/signup')({
    component: () => <AuthPage type={'signup'}/>
})
