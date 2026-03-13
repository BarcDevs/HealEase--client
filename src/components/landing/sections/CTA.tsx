import { ArrowRight } from 'lucide-react'

import { Link } from '@tanstack/react-router'

import { CtaBackgroundDecorations } from '@/components/landing/CtaBackgroundDecorations.tsx'
import { LandingSection } from '@/components/landing/LandingSection.tsx'
import { Button } from '@/components/ui/button'

import { LANDING_PAGE_HEADINGS } from '@/constants/landing/landingPageHeadings'

export const CTA = () => (
    <LandingSection>
        <div className={'relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-secondary px-6 py-16 sm:px-12 sm:py-20 lg:px-16'}>
            <CtaBackgroundDecorations/>

            <div className={'relative z-10 mx-auto max-w-2xl text-center'}>
                <h2 className={'font-(family-name:--font-heading) text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl'}>
                    {LANDING_PAGE_HEADINGS.cta.heading}
                </h2>
                <p className={'mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80'}>
                    {LANDING_PAGE_HEADINGS.cta.description}
                </p>
                <div className={'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'}>
                    <Button
                        size={'lg'}
                        variant={'secondary'}
                        asChild
                        className={'w-full bg-white text-primary hover:bg-white/90 sm:w-auto'}
                    >
                        <Link
                            to={'/signup'}
                            search={{}}
                        >
                            {LANDING_PAGE_HEADINGS.cta.cta1}
                            <ArrowRight className={'ml-2 size-4'}/>
                        </Link>
                    </Button>
                    <Button
                        size={'lg'}
                        variant={'ghost'}
                        asChild
                        className={'w-full text-primary-foreground hover:bg-white/10 hover:text-primary-foreground sm:w-auto'}
                    >
                        <Link
                            to={'/login'}
                            search={{ redirect: '/' }}
                        >
                            {LANDING_PAGE_HEADINGS.cta.cta2}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </LandingSection>
)
