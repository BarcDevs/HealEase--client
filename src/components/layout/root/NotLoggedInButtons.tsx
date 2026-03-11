import NavButton from '@/components/layout/root/NavButton.tsx'

import {BUTTONS} from '@/constants/plainTexts.ts'

type NotLoggedInButtonsProps = {
    onClick?: () => void
    isMobile?: boolean
}

const NotLoggedInButtons = ({
    onClick,
    isMobile = false
}: NotLoggedInButtonsProps) => (
    <>
        <NavButton
            to={'/login'}
            search={{redirect: '/'}}
            variant={'outline'}
            onClick={onClick}
            className={isMobile ?
                'w-full' :
                'border-blue-200 text-blue-600 hover:bg-blue-50'}
            size={isMobile ? 'default' : 'default'}
        >
            {BUTTONS.signIn}
        </NavButton>
        <NavButton
            to={'/signup'}
            onClick={onClick}
            className={isMobile ?
                'w-full bg-blue-600 hover:bg-blue-700' :
                'bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'}
            size={isMobile ? 'default' : 'default'}
        >
            {BUTTONS.joinNow}
        </NavButton>
    </>
)

export default NotLoggedInButtons