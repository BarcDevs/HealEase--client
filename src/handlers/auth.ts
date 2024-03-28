import store from '@/store'
import {removeTokenAction, setTokenAction} from '@/store/tokenSlice.ts'
import {getMe, login, logout} from '@/api/auth.ts'
import {loginAction, logoutAction} from '@/store/authSlice.ts'
import {LoginSchema} from '@/validations/forms/loginSchema.ts'

export const getCsrfToken = () =>
    store.getState().token.token

export const handleLogin = async (credentials: LoginSchema) => {
    const {data} = await login(credentials)
    if (!data) return

    store.dispatch(setTokenAction(data.token))
    getMe().then(userData =>
        store.dispatch(loginAction(userData)))
}

export const handleLogout = async () => {
    await logout()

    store.dispatch(removeTokenAction())
    store.dispatch(logoutAction())
}
