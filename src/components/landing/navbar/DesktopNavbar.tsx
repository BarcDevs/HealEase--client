import { LandingNav } from '@/components/landing/navbar/LandingNav.tsx'
import { LandingNavbarAuthLinks } from '@/components/landing/navbar/LandingNavbarAuthLinks.tsx'
import { Logo } from '@/components/shared/Logo.tsx'

export const DesktopNavbar = ({}) => (
    <nav className={'mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'}>
        <Logo/>

        <LandingNav/>

        <div className={'hidden items-center gap-3 md:flex'}>
            <LandingNavbarAuthLinks/>
        </div>
    </nav>
)