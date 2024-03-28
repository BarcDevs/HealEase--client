import {api} from '@/api/index.ts'
import {LoginResponse} from '@/types/responses/auth.ts'
import {handleLogout, handleSuccessLogin} from '@/handlers/auth.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'
import {User} from '@/types'

export const login = async (email: string, password: string) => {
    const {data} =
        await api.get<LoginResponse>('/auth/login', {
            data: {email, password}
        })

    handleSuccessLogin(data)
    return !!data
}

export const signup = async (userData: SignupSchema) => {
    const {data} = await api.post<User>('/auth/signup', userData)
    return !!data
}

export const logout = async () => {
    await api.get('/auth/logout')
    handleLogout()
}

export const getMe = async () =>
    await api.get<User, User>('/auth/me')

