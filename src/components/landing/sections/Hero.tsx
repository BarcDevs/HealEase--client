import { ArrowRight } from 'lucide-react'

import { Link } from '@tanstack/react-router'

import { BackgroundGradient } from '@/components/landing/hero/BackgroundGradient.tsx'
import { DashboardPreview } from '@/components/landing/hero/DashboardPreview.tsx'
import { HeroBenefits } from '@/components/landing/hero/HeroBenefits.tsx'
import { LandingSection } from '@/components/landing/LandingSection.tsx'
import { Button } from '@/components/ui/button'

import { LANDING_PAGE_HEADINGS } from '@/constants/landing/landingPageHeadings'

export const Hero = () => (
    <LandingSection
        additionalStyles={'relative overflow-hidden lg:py-32'}
        background={<BackgroundGradient/>}
    >
        <div className={'mx-auto max-w-3xl text-center'}>
            <div className={'mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm'}>
                <span className={'flex size-2 rounded-full bg-accent'}/>
                {LANDING_PAGE_HEADINGS.hero.badge}
            </div>

            <h1 className={'font-(family-name:--font-heading) text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl'}>
                {LANDING_PAGE_HEADINGS.hero.heading
                    .split(',')[0]},{' '}
                <span className={'bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent'}>
                      {LANDING_PAGE_HEADINGS.hero.heading
                          .split(',')[1]}
                    </span>
            </h1>

            <p className={'mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl'}>
                {LANDING_PAGE_HEADINGS.hero.description}
            </p>

            <div className={'mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'}>
                <Button
                    size={'lg'}
                    asChild
                    className={'w-full sm:w-auto'}
                >
                    <Link
                        to={'/signup'}
                        search={{}}
                    >
                        {LANDING_PAGE_HEADINGS.hero.cta1}
                        <ArrowRight className={'ml-2 size-4'}/>
                    </Link>
                </Button>
                <Button
                    variant={'outline'}
                    size={'lg'}
                    asChild
                    className={'w-full sm:w-auto'}
                >
                    <a href={'#how-it-works'}>
                        {LANDING_PAGE_HEADINGS.hero.cta2}
                    </a>
                </Button>
            </div>

            <HeroBenefits/>
        </div>

        <DashboardPreview/>
    </LandingSection>
)
