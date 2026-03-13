import { Link } from '@tanstack/react-router'

import { AuthFormConfig } from '@/types/auth.ts'

type AuthCtaProps = Exclude<
    AuthFormConfig['login']['cta'],
    undefined
>

export const AuthCta = ({
    text,
    linkText,
    link
}: AuthCtaProps) => (
    <p className={'mt-8 text-center text-sm text-muted-foreground'}>
        {text}
        {' '}
        <Link
            to={link || '/'}
            className={'font-medium text-primary hover:text-primary/80'}
        >
            {linkText}
        </Link>
    </p>
)