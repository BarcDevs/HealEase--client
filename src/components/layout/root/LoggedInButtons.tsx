import NavButton from '@/components/layout/root/NavButton.tsx'
import {Button} from '@/components/ui/button.tsx'

import {BUTTONS} from '@/constants/plainTexts.ts'

type LoggedInButtonsProps = {
    logout: () => void
    onClick?: () => void
    isMobile?: boolean
}

const LoggedInButtons = ({
    logout,
    onClick,
    isMobile = false
}: LoggedInButtonsProps) => (
    <>
        <NavButton
            to={'/check-in'}
            onClick={onClick}
            className={isMobile ?
                'w-full justify-start' :
                undefined}
            size={isMobile ? 'default' : 'sm'}
        >
            Check-in
        </NavButton>
        <NavButton
            to={'/forum'}
            onClick={onClick}
            className={isMobile ?
                'w-full justify-start' :
                undefined}
            size={isMobile ? 'default' : 'sm'}
        >
            Forum
        </NavButton>
        <NavButton
            to={'/profile/settings'}
            variant={'outline'}
            onClick={onClick}
            className={isMobile ?
                'w-full justify-start' :
                undefined}
            size={isMobile ? 'default' : 'sm'}
        >
            Profile
        </NavButton>
        <Button
            variant={'ghost'}
            size={isMobile ? 'default' : 'sm'}
            className={isMobile ?
                'w-full justify-start text-white bg-red-600' :
                undefined}
            onClick={logout}
        >
            {BUTTONS.logout}
        </Button>
    </>
)

export default LoggedInButtons