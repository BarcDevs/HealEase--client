import { LandingSection } from '@/components/landing/LandingSection.tsx'
import { LandingSectionHeading } from '@/components/landing/LandingSectionHeading.tsx'
import { Card, CardContent } from '@/components/ui/card'

import { LANDING_FEATURES } from '@/constants/landing/features'
import { LANDING_PAGE_HEADINGS } from '@/constants/landing/landingPageHeadings'

export const Features = () => (
    <LandingSection id={'features'}>
        <LandingSectionHeading
            badge={LANDING_PAGE_HEADINGS.features.badge}
            heading={LANDING_PAGE_HEADINGS.features.heading}
            description={LANDING_PAGE_HEADINGS.features.description}
        />

        <div className={'mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'}>
            {LANDING_FEATURES.map((feature) => (
                <Card
                    key={feature.title}
                    className={'group relative overflow-hidden border-0 bg-card shadow-sm transition-all hover:shadow-lg hover:shadow-primary/5'}
                >
                    <CardContent className={'p-6'}>
                        <div className={`mb-4 inline-flex size-12 items-center justify-center rounded-xl ${feature.color}`}>
                            <feature.icon className={'size-6'}/>
                        </div>
                        <h3 className={'font-(family-name:--font-heading) mb-2 text-lg font-semibold text-foreground'}>
                            {feature.title}
                        </h3>
                        <p className={'text-sm leading-relaxed text-muted-foreground'}>
                            {feature.description}
                        </p>
                    </CardContent>
                    <div className={'absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-primary via-secondary to-accent opacity-0 transition-opacity group-hover:opacity-100'}/>
                </Card>
            ))}
        </div>
    </LandingSection>
)
