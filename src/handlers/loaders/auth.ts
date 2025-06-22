import { store } from '@/store'
import {ParsedLocation, redirect} from '@tanstack/react-router'

export const validateUser = ({ location }: {
    location: ParsedLocation
}) => {
    const state = store.getState()

    if (!state.auth.isAuthenticated) {
        throw redirect({
            to: '/login',
            search: {
                redirect: location.href
            }
        })
    }
}
