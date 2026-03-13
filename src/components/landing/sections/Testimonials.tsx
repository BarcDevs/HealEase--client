import { Quote } from 'lucide-react'

import { LandingSection } from '@/components/landing/LandingSection.tsx'
import { LandingSectionHeading } from '@/components/landing/LandingSectionHeading.tsx'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

import { LANDING_PAGE_HEADINGS } from '@/constants/landing/landingPageHeadings'
import { LANDING_TESTIMONIALS } from '@/constants/landing/testimonials'

export const Testimonials = () => (
    <LandingSection id={'testimonials'}>
        <LandingSectionHeading
            badge={LANDING_PAGE_HEADINGS.testimonials.badge}
            heading={LANDING_PAGE_HEADINGS.testimonials.heading}
            description={LANDING_PAGE_HEADINGS.testimonials.description}
        />

        <div className={'mx-auto mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'}>
            {LANDING_TESTIMONIALS.map((testimonial) => (
                <Card
                    key={testimonial.name}
                    className={'relative overflow-hidden border-0 bg-card shadow-sm'}
                >
                    <CardContent className={'p-6'}>
                        <Quote className={'mb-4 size-8 text-primary/20'}/>
                        <blockquote className={'text-base leading-relaxed text-foreground'}>
                            &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className={'mt-6 flex items-center gap-3'}>

                            <Avatar className={`size-10 ${testimonial.avatarColor}`}>
                                <AvatarFallback className={testimonial.avatarColor}>
                                    {testimonial.initials}
                                </AvatarFallback>
                            </Avatar>

                            <div>
                                <div className={'font-medium text-foreground'}>
                                    {testimonial.name}
                                </div>

                                <div className={'text-sm text-muted-foreground'}>
                                    {testimonial.recovery}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    </LandingSection>
)
