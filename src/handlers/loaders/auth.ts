import {ParsedLocation, redirect} from '@tanstack/react-router'

import { store } from '@/store'

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
