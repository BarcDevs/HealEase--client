import {Menu, X} from 'lucide-react'

type MobileMenuButtonProps = {
    isOpen: boolean
    onClick: () => void
}

const MobileMenuButton = ({
    isOpen,
    onClick
}: MobileMenuButtonProps) => (
    <button
        className={'inline-flex items-center justify-center sm:hidden'}
        onClick={onClick}
    >
        {isOpen ? (
            <X className={'size-6 text-gray-600'}/>
        ) : (
            <Menu className={'size-6 text-gray-600'}/>
        )}
    </button>
)

export default MobileMenuButton
