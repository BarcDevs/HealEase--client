import {ParsedLocation, redirect} from '@tanstack/react-router'
import {RouterContext} from '@/types/router.ts'

export const validateUser = ({context, location}:{
    context: RouterContext,
    location: ParsedLocation
}) => {
    if (!context.auth.isLoggedIn) {
        throw redirect({
            to: '/login',
            search: {
                redirect: location.href
            }
        })
    }
}
