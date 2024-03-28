import {api} from '@/api/index.ts'
import {User} from '@/types'
import {Response} from '@/types/responses'
import {LoginResponse} from '@/types/responses/auth.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'

export const login = async (credentials: LoginSchema) => {
    const {data} =
        await api.post<Response<LoginResponse>>('/auth/login', credentials)

    return data
}

export const signup = async (userData: Omit<SignupSchema, 'confirmPassword'>) => {
    const {data} =
        await api.post<Response<User>>('/auth/signup', userData)
    return data
}

export const logout = async () => {
    await api.get('/auth/logout')
}

export const getMe = async () =>
    await api.get<User, User>('/auth/me')

