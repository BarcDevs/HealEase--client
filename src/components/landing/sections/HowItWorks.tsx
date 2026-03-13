import { HowItWorksSteps } from '@/components/landing/HowItWorksSteps.tsx'
import { LandingSection } from '@/components/landing/LandingSection.tsx'
import { LandingSectionHeading } from '@/components/landing/LandingSectionHeading.tsx'

import { LANDING_PAGE_HEADINGS } from '@/constants/landing/landingPageHeadings'

export const HowItWorks = () => (
    <LandingSection
        id={'how-it-works'}
        bgColor={'bg-muted/30'}
    >
        <LandingSectionHeading
            badge={LANDING_PAGE_HEADINGS.howItWorks.badge}
            heading={LANDING_PAGE_HEADINGS.howItWorks.heading}
            description={LANDING_PAGE_HEADINGS.howItWorks.description}
        />

        <HowItWorksSteps/>
    </LandingSection>
)
