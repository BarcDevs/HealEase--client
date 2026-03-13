import {
    ComponentProps,
    ComponentType
} from 'react'

import { Link } from '@tanstack/react-router'

export type AuthType =
    'login' |
    'signup' |
    'forgot-password' |
    'update-password' |
    'verify'

export type AuthFormConfig = Record<AuthType, {
    headline: string
    description?: string
    component: ComponentType
    googleLogin?: boolean
    cta?: {
        text: string
        linkText: string
        link: ComponentProps<typeof Link>['to']
    }
}>