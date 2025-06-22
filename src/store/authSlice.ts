import {createSlice} from '@reduxjs/toolkit'
import {User} from '@/types'

type AuthState = {
    isAuthenticated: boolean
    user: User | undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: undefined
    } as AuthState,

    reducers: {
        login: (_, {payload: user}: { payload: User }) => ({
                isAuthenticated: true,
                    user
        }),

        logout: () => ({
            isAuthenticated: false,
            user: undefined
        }),
    }
})

export default authSlice.reducer
export const {
    login: loginAction,
    logout: logoutAction
} = authSlice.actions
