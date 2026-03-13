import { useState } from 'react'

import { DesktopNavbar } from '@/components/landing/navbar/DesktopNavbar.tsx'
import { MobileNavbar } from '@/components/landing/navbar/MobileNavbar.tsx'
import { MobileNavbarButton } from '@/components/landing/navbar/MobileNavbarButton.tsx'

export const Navbar = () => {
    const [
        mobileMenuOpen,
        setMobileMenuOpen
    ] = useState(false)

    return (
        <header className={'sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md'}>
            <DesktopNavbar/>

            <MobileNavbarButton
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <MobileNavbar mobileMenuOpen={mobileMenuOpen}/>
        </header>
    )
}
