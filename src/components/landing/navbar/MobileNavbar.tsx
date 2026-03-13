import { NavLink } from '@/components/landing/navbar/NavLink.tsx'

import { LANDING_NAV_LINKS } from '@/constants/landingLinks.ts'

type MobileNavbarProps = {
    mobileMenuOpen: boolean
}
// TODO: fix mobile navbar styling and add animation
export const MobileNavbar = ({
    mobileMenuOpen
}: MobileNavbarProps) => (
    <>
        {mobileMenuOpen && (
            <div className={'border-t bg-card md:hidden'}>
                <nav className={'flex flex-col gap-2 px-4 py-4'}>
                    {LANDING_NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.label}
                            link={link}
                            type={'mobile'}
                        />
                    ))}
                    <hr className={'my-2 border-border'}/>
                </nav>
            </div>
        )}
    </>

)