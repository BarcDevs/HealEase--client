import {Fragment, ReactNode} from 'react'

import {Link} from '@tanstack/react-router'

import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.tsx'
import LoginForm from '@/components/auth/LoginForm.tsx'
import OtpForm from '@/components/auth/OtpForm.tsx'
import SignupForm from '@/components/auth/SignupForm.tsx'

export type AuthType = 'login' | 'signup' | 'forgot-password' | 'update-password' | 'verify'

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
        component: <LoginForm/>,
        googleLogin: true,
        reference: {
            text: 'Don\'t have an account?',
            linkText: 'Sign up',
            link: '/signup'
        }
    },
    signup: {
        headline: 'Sign up',
        description: 'Enter your information to create an account',
        component: <SignupForm/>,
        googleLogin: true,
        reference: {
            text: 'Already have an account?',
            linkText: 'Login',
            link: '/login'
        }
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
    verify: {
        headline: 'Verify email',
        description: 'Enter the verification code sent to your email',
        component: <OtpForm/>,
        reference: {
            text: 'Didn\'t receive the code?',
            linkText: 'Resend code',
            link: '/resend-code'
        }
    }
}
