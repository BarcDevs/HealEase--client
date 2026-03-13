import { NavLink } from '@/components/landing/navbar/NavLink.tsx'

import { LANDING_NAV_LINKS } from '@/constants/landingLinks.ts'

export const LandingNav = ({}) => (
    <nav className={'hidden items-center gap-8 md:flex'}>
        {LANDING_NAV_LINKS.map((link) => (
                <NavLink
                    key={link.label}
                    link={link}
                    type={'desktop'}
                />
            )
        )}
    </nav>
)