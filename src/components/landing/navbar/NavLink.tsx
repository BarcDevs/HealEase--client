import { Link } from '@tanstack/react-router'

import { NavButtonHoverEffect } from '@/components/landing/navbar/NavButtonHoverEffect.tsx'

import type { NavLink as TNavLink } from '@/constants/landingLinks'

type NavLinkProps = {
    link: TNavLink
    type: 'desktop' | 'mobile' | 'footer'
}

const linkStyle = (type: 'desktop' | 'mobile' | 'footer') => {
    switch (type) {
        case 'desktop':
            return 'relative group text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
        case 'mobile':
            return 'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
        case 'footer':
            return 'text-sm text-muted-foreground transition-colors hover:text-foreground'
    }
}

export const NavLink = ({
    link,
    type = 'desktop'
}: NavLinkProps) => {
    const isPageRef = link.href.startsWith('#')
    const LinkElement = isPageRef ? 'a' : Link

    return (
        <LinkElement
            key={link.label}
            href={link.href}
            to={link.href}
            className={linkStyle(type)}
        >
            {link.label}
            <NavButtonHoverEffect/>
        </LinkElement>
    )
}