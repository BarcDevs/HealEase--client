import {LoginResponse} from '@/types/responses/auth.ts'
import store from '@/store'
import {removeTokenAction, setTokenAction} from '@/store/tokenSlice.ts'
import {getMe} from '@/api/auth.ts'
import {loginAction, logoutAction} from '@/store/authSlice.ts'

export const getCsrfToken = () =>
    store.getState().token.token

export const handleSuccessLogin = (data: LoginResponse) => {
    store.dispatch(setTokenAction(data.token))
    getMe().then(userData =>
        store.dispatch(loginAction(userData)))
}

export const handleLogout = () => {
    store.dispatch(removeTokenAction())
    store.dispatch(logoutAction())
}
