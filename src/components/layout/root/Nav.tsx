import {useLocation} from '@tanstack/react-router'

import NavLink from '@/components/layout/root/NavLink.tsx'

import {useAuth} from '@/hooks/useAuth.ts'

import {NAV_LINKS} from '@/constants/componentData.ts'

const Nav = () => {
    const location = useLocation()
    const {isLoggedIn} = useAuth()
    const isHomePage = location.pathname === '/'

    const visibleLinks = NAV_LINKS.filter(link => {
        if (link.homepageLink && !isHomePage) {
            return false
        }
        if (link.authenticatedOnly && !isLoggedIn) {
            return false
        }
        return true
    })

    if (visibleLinks.length === 0) {
        return null
    }

    return (
        <section className={'flex items-center justify-center gap-10 px-8'}>
            {
                visibleLinks.map(link => (
                    <NavLink
                        key={link.title}
                        label={link.title}
                        to={link.href}
                        className={'inline-flex items-center justify-center text-gray-600 transition-colors hover:text-blue-600'}
                    />
                ))
            }
        </section>
    )
}

export default Nav