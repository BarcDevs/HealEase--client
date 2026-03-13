import { Fragment } from 'react'

import { AuthFormConfig } from '@/types/auth.ts'

import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm.tsx'
import LoginForm from '@/components/auth/LoginForm.tsx'
import OtpForm from '@/components/auth/OtpForm.tsx'
import SignupForm from '@/components/auth/SignupForm.tsx'

export const authForms: AuthFormConfig = {
    login: {
        component: <LoginForm/>,
        headline: 'Welcome back',
        description:
            'Continue your recovery journey. Enter your details below.',
        googleLogin: true,
        cta: {
            text: `Don't have an account?`,
            linkText: 'Start your journey',
            link: '/signup'
        }
    },
    signup: {
        headline: 'Start your recovery journey',
        description:
            'Create your account and take the first step towards better health.',
        component: <SignupForm/>,
        googleLogin: true,
        cta: {
            text: 'Already have an account?',
            linkText: 'Sign in',
            link: '/login'
        }
    },
    'forgot-password': {
        headline: 'Forgot password',
        description:
            'Enter your email to reset your password',
        component: <ForgotPasswordForm/>
    },
    'update-password': {
        headline: 'Update password',
        description:
            'Enter your new password below',
        component: <Fragment/> // todo: create update password form
    },
    verify: {
        headline: 'Verify email',
        description:
            'Enter the verification code sent to your email',
        component: <OtpForm/>,
        cta: {
            text: `Didn't receive the code?`,
            linkText: 'Resend code',
            link: '/resend-code'
        }
    }
}
