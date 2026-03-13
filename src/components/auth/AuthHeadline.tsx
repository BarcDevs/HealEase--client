import Logo from '@/components/shared/Logo.tsx'

type AuthHeadlineProps = {
    headline: string
    description?: string
}

export const AuthHeadline = ({
    headline,
    description
}: AuthHeadlineProps) => (
    <div className={'mb-8'}>
        <Logo/>
        <h1 className={'mt-8 text-2xl font-bold tracking-tight text-foreground'}>
            {headline}
        </h1>
        {description &&
            <p className={'mt-2 text-sm text-muted-foreground'}>
                {description}
            </p>
        }
    </div>
)