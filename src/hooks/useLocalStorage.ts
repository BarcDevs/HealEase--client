import {useDispatch, useSelector} from 'react-redux'
import {IRootState} from '@/store'
import {useEffect, useState} from 'react'
import {loadAuthState} from '@/store/authSlice.ts'
import config from '@/config'
import {refreshAuthData} from '@/handlers/auth.ts'

const localStorageKeys = {
    isLoggedIn: 'is-logged-in',
    loginExpiration: 'login-expiration'
}

export const useLocalStorage = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state: IRootState) => state.auth.isAuthenticated)

    const [isInitial, setIsInitial] = useState(true)

    // retrieve data on app load
    useEffect(() => {
        const isLoggedIn = JSON.parse(localStorage.getItem(localStorageKeys.isLoggedIn) as string)
        const expiration = Number(JSON.parse(localStorage.getItem(localStorageKeys.loginExpiration) as string))

        if (isLoggedIn && expiration > Date.now()) {
            refreshAuthData()
                .then(() => dispatch(loadAuthState(true)))
                .catch(() => {
                        dispatch(loadAuthState(false))
                        localStorage.setItem(localStorageKeys.isLoggedIn, 'false')
                    }
                )
        }
        setIsInitial(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (isInitial) return
        if (auth) {
            localStorage.setItem(localStorageKeys.isLoggedIn, 'true')
            // todo remember me
            localStorage.setItem(localStorageKeys.loginExpiration,
                new Date(Date.now() + config.loginDuration).getTime().toString())
        } else {
            localStorage.setItem(localStorageKeys.isLoggedIn, 'false')
            localStorage.removeItem(localStorageKeys.loginExpiration)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])
}
