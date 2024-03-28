import {configureStore} from '@reduxjs/toolkit'
import authSlice from '@/store/authSlice.ts'
import tokenSlice from '@/store/tokenSlice.ts'

const store = configureStore({
    reducer: {
        token: tokenSlice,
        auth: authSlice
    }
})

export default store
export type IRootState = ReturnType<typeof store.getState>
