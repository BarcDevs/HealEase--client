import { useSelector } from 'react-redux'

import { useRouterState } from '@tanstack/react-router'

import { User } from '@/types'

import protectedRoutes from '@/config/protectedRoutes.ts'

import {
    handleLogin,
    handleLogout,
    handleSignup
} from '@/handlers/auth.ts'

import { IRootState } from '@/store'
import {
    LoginSchema
} from '@/validations/forms/loginSchema.ts'
import {
    SignupSchema
} from '@/validations/forms/signupSchema.ts'

export const useAuth = () => {
    const location = useRouterState({
        select: state => state.location.pathname
    })

    const isLoggedIn =
        useSelector<IRootState>(state =>
            state.auth.isAuthenticated) as boolean

    const user =
        useSelector<IRootState>(state =>
            state.auth.user) as User | null

    const expiresAt =
        useSelector<IRootState>(state =>
            state.auth.expiresAt) as number | null

    /**
     * checks if the JWT token has expired
     */
    const checkAuth = async () => {
        if (expiresAt && Date.now() > expiresAt) {
            await logout()
        }
    }

    const login = async (credentials: LoginSchema) =>
        await handleLogin(credentials)

    const register = async (data: SignupSchema) =>
        await handleSignup(data)

    const isProtectedRoute = (path: string) => {
        return protectedRoutes.some(
            pattern => pattern.test(path)
        )
    }


    const logout = async () => {
        await handleLogout()

        if (isProtectedRoute(location)) {
            window.location.href = '/'
        }
    }

    return {
        user,
        isLoggedIn,
        checkAuth,
        login,
        logout,
        register
    }
}
