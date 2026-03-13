import { ComponentType } from 'react'

import { AuthType } from '@/types/auth.ts'

import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.tsx'
import LoginForm from '@/components/auth/LoginForm.tsx'
import OtpForm from '@/components/auth/OtpForm.tsx'
import SignupForm from '@/components/auth/SignupForm.tsx'

export const getFormComponent = (
    type: AuthType
): ComponentType => {
    switch (type) {
        case 'login':
            return LoginForm
        case 'signup':
            return SignupForm
        case 'forgot-password':
            return ForgotPasswordForm
        case 'verify':
            return OtpForm
        case 'update-password':
        default:
            return () => null
    }
}