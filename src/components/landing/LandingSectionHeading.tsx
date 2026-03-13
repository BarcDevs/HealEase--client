type LandingSectionHeadingProps = {
    badge: string
    heading: string
    description: string
}

export const LandingSectionHeading = ({
    badge,
    heading,
    description
}: LandingSectionHeadingProps) => (
    <div className={'mx-auto max-w-2xl text-center'}>
        <div className={'mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground'}>
            {badge}
        </div>
        <h2 className={'font-(family-name:--font-heading) text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl'}>
            {heading}
        </h2>
        <p className={'mt-4 text-pretty text-lg leading-relaxed text-muted-foreground'}>
            {description}
        </p>
    </div>
)
