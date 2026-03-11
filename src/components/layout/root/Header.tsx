import {useState} from 'react'

import {Link, useLocation} from '@tanstack/react-router'

import MobileMenu from '@/components/layout/root/MobileMenu.tsx'
import MobileMenuButton from '@/components/layout/root/MobileMenuButton.tsx'
import Nav from '@/components/layout/root/Nav.tsx'
import Logo from '@/components/shared/Logo.tsx'

import {useAuth} from '@/hooks/useAuth.ts'

import {BRAND_NAME} from '@/constants/plainTexts.ts'

const Header = () => {
    const {isLoggedIn, logout} = useAuth()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const closeMobileMenu = () => setMobileMenuOpen(false)

    return (
        <header className={'sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur-sm'}>
            <div className={'flex items-center justify-between px-4 py-3'}>
                <Link to={'/'} className={'ml-4 flex items-center gap-2'}>
                    <div className={'flex size-8 items-center justify-center'}>
                        <Logo/>
                    </div>
                    <span className={'text-lg font-bold text-gray-800'}>
                        {BRAND_NAME}
                    </span>
                </Link>

                <Nav/>

                <div className={'hidden items-center gap-2 sm:flex'}>
                    {isLoggedIn ? (
                        <>
                            <Link
                                to={'/check-in/new'}
                                className={'rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'}
                            >
                                Check-in
                            </Link>
                            <button
                                onClick={logout}
                                className={'rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700'}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to={'/login'}
                                search={{redirect: location.pathname}}
                                className={'rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900'}
                            >
                                Sign In
                            </Link>
                            <Link
                                to={'/signup'}
                                className={'rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700'}
                            >
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                <MobileMenuButton
                    isOpen={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
            </div>

            {mobileMenuOpen && (
                <MobileMenu
                    isLoggedIn={isLoggedIn}
                    logout={logout}
                    onNavigate={closeMobileMenu}
                />
            )}
        </header>
    )
}

export default Header
