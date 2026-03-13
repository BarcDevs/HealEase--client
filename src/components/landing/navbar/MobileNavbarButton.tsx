import { Menu, X } from 'lucide-react'

type MobileNavbarButtonProps = {
    setMobileMenuOpen: (open: boolean) => void
    mobileMenuOpen: boolean
}

export const MobileNavbarButton = ({
    setMobileMenuOpen,
    mobileMenuOpen
}: MobileNavbarButtonProps) => (
    <button
        className={'flex items-center justify-center md:hidden'}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={'Toggle menu'}
    >
        {mobileMenuOpen
            ? (
                <X className={'size-6'}/>
            ) : (
                <Menu className={'size-6'}/>
            )}
    </button>

)