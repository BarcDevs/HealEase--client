import { ReactNode } from 'react'

import { AuthType } from '@/types/auth.ts'

import { LoginTestimonial }
    from '@/components/auth/authDisplay/LoginTestimonial.tsx'
import { SignupStats }
    from '@/components/auth/authDisplay/SignupStats.tsx'

export const renderGradientContent = (
    type: AuthType
): ReactNode => {
    if (type === 'login') {
        return <LoginTestimonial/>
    }

    if (type === 'signup') {
        return <SignupStats/>
    }

    return null
}

export const getGradientClass = (
    type: AuthType
): string => {
    if (type === 'login') {
        return 'from-primary via-primary to-secondary'
    }
    return 'from-secondary via-primary to-primary'
}
