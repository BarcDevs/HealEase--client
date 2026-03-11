import {ComponentProps} from 'react'

import {Link} from '@tanstack/react-router'

import {Button} from '@/components/ui/button.tsx'

type NavButtonProps = ComponentProps<typeof Button> & {
    to: string
    search?: Record<string, unknown>
    children: string
}

const NavButton = ({
    to,
    search,
    variant = 'ghost',
    size = 'sm',
    children,
    ...buttonProps
}: NavButtonProps) => (
    <Button
        variant={variant}
        size={size}
        {...buttonProps}
    >
        <Link
            to={to}
            search={search}
        >
            {children}
        </Link>
    </Button>
)

export default NavButton