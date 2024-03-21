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
    bottomButtonText?: string
    bottomButtonLink?: React.ComponentProps<typeof Link>['to']
}> = {
    login: {
        headline: 'Login',
        description: 'Enter your email below to login to your account',
        component: <LoginForm/>,
        bottomButtonText: 'Login with Google',
        bottomButtonLink: '/google'
    },
    signup: {
        headline: 'Sign up',
        description: 'Enter your information to create an account',
        component: <SignupForm/>,
        bottomButtonText: 'Sign up with Google',
        bottomButtonLink: '/google'
    },
    'forgot-password': {
        headline: 'Forgot password',
        description: 'Enter your email to reset your password',
        component: <ForgotPasswordForm/>,
        bottomButtonText: 'Go Back to Login',
        bottomButtonLink: '/login'
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
