import LoggedInButtons from '@/components/layout/root/LoggedInButtons.tsx'
import NotLoggedInButtons from '@/components/layout/root/NotLoggedInButtons.tsx'

type MobileMenuProps = {
    isLoggedIn: boolean
    logout: () => void
    onNavigate: () => void
}

const MobileMenu = ({
    isLoggedIn,
    logout,
    onNavigate
}: MobileMenuProps) => (
    <div className={'mt-4 space-y-2 border-t border-blue-100 pt-4 sm:hidden'}>
        {isLoggedIn ?
            <LoggedInButtons
                logout={logout}
                onClick={onNavigate}
                isMobile
            /> : <NotLoggedInButtons
                onClick={onNavigate}
                isMobile
            />
        }
    </div>
)

export default MobileMenu
