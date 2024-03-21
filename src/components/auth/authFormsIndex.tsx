import LoginForm from '@/components/auth/LoginForm.tsx'
import SignupForm from '@/components/auth/SignupForm.tsx'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.tsx'
import {Fragment, ReactNode} from 'react'
import {Link} from '@tanstack/react-router'

export type AuthType = 'login' | 'signup' | 'forgot-password' | 'update-password' | 'otp'

export const forms: Record<AuthType, {
    headline: string
    description?: string
    component: ReactNode
    googleLogin?: boolean
    reference?: {
        text: string
        linkText: string
        link: React.ComponentProps<typeof Link>['to']
    }
}> = {
    login: {
        headline: 'Login',
        description: 'Enter your email below to login to your account',
        component: <LoginForm/>
    },
    signup: {
        headline: 'Sign up',
        description: 'Enter your information to create an account',
        component: <SignupForm/>
    },
    'forgot-password': {
        headline: 'Forgot password',
        description: 'Enter your email to reset your password',
        component: <ForgotPasswordForm/>
    },
    'update-password': {
        headline: 'Update password',
        description: 'Enter your new password below',
        component: <Fragment/>
    },
    otp: {
        headline: 'OTP',
        description: 'Enter your OTP below',
        component: <Fragment/>
    }
}
