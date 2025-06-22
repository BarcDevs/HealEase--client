import {store} from '@/store'
import {removeTokenAction, setTokenAction} from '@/store/tokenSlice.ts'
import {getCsrfToken, getMe, login, logout, signup} from '@/api/auth.ts'
import {loginAction, logoutAction} from '@/store/authSlice.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'
import {SignupSchema} from '@/validations/forms/signupSchema.ts'

export const getCsrfTokenFromStore = () =>
    store.getState().token.token

export const handleLogin = async (credentials: LoginSchema) => {
    const {data} = (await login(credentials)).data
    if (!data) return false

    store.dispatch(setTokenAction(data._csrf))
    getMe().then(({data: response}) =>
        store.dispatch(loginAction(response.data.user)))
    return true
}

export const handleSignup = async (
    userData: Omit<SignupSchema, 'confirmPassword'> & { confirmPassword?: string }) => {
    delete userData.confirmPassword
    const {data} = (await signup(userData)).data

    return !!data
}

export const refreshAuthData = async () => {
    const {data} = (await getCsrfToken()).data
    if (!data) return false

    store.dispatch(setTokenAction(data._csrf))
    getMe().then(({data: response}) =>
        // console.log('data', userData))
        store.dispatch(loginAction(response.data.user)))
    return true
}

export const handleLogout = async () => {
    await logout()

    store.dispatch(removeTokenAction())
    store.dispatch(logoutAction())
}
