import {useSelector} from 'react-redux'
import {IRootState} from '@/store'
import {User} from '@/types'
import {handleLogin, handleLogout, handleSignup} from '@/handlers/auth.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'

export const useAuth = () => {
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
        expiresAt && Date.now() > expiresAt &&
        await handleLogout()
    }

    const login = async (credentials: LoginSchema) =>
        await handleLogin(credentials)

    const register = async (data: SignupSchema) =>
        await handleSignup(data)

    const logout = async () =>
        await handleLogout()

    return {
        user,
        isLoggedIn,
        checkAuth,
        login,
        logout,
        register
    }
}
