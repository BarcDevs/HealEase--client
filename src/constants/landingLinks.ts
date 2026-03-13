export type NavLink = {
    label: string
    href: string
    search?: {redirect?: string}
}

export const LANDING_NAV_LINKS: NavLink[] = [
    {
        label: 'Features',
        href: '#features'
    },
    {
        label: 'How It Works',
        href: '#how-it-works'
    },
    {
        label: 'Stories',
        href: '#testimonials'
    },
    {
        label: 'Community',
        href: '/forum'
    }
]