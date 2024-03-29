import {api} from '@/api/index.ts'
import {User} from '@/types'
import {ApiResponse, Response} from '@/types/responses'
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

export const getCsrfToken = async () : ApiResponse<{_csrf: string}> =>
    api.get<Response<{_csrf: string}>>('/auth/csrf')

export const getMe = async () =>
    await api.get<Response<User>, Response<User>>('/auth/me')
