import { ReactNode } from 'react'

type SectionProps = {
    children: ReactNode
    id?: string
    bgColor?: string
    additionalStyles?: string
    background?: ReactNode
}

export const LandingSection = ({
    children,
    id,
    bgColor = '',
    additionalStyles = '',
    background
}: SectionProps) => (
    <section
        id={id}
        className={`px-4 py-20 sm:px-6 sm:py-28 lg:px-8 ${bgColor} ${additionalStyles}`}
    >
        {background}
        <div className={'mx-auto max-w-7xl'}>
            {children}
        </div>
    </section>
)