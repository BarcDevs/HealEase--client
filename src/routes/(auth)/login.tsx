import {createFileRoute} from '@tanstack/react-router'
import AuthPage from '@/pages/AuthPage.tsx'

export const Route = createFileRoute('/(auth)/login')({
    validateSearch: (params: Record<string, string>) => {
        // TODO: Add validation
        return {
            redirect: params.redirect
        } as { redirect: string }
    },
    component: () => <AuthPage type={'login'}/>
})
