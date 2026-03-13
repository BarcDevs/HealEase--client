import { PLACEHOLDER_TESTIMONIAL } from '@/constants/auth/testimonials.ts'

export const LoginTestimonial = () => (
    <div className={'max-w-md text-center'}>
        <blockquote className={'text-xl font-medium leading-relaxed text-primary-foreground'}>
            {/* TODO: Replace with real testimonials from actual recovered patients */}
            &ldquo;{PLACEHOLDER_TESTIMONIAL.quote}&rdquo;
        </blockquote>
        <div className={'mt-6'}>
            <div className={'font-medium text-primary-foreground'}>
                {PLACEHOLDER_TESTIMONIAL.author}
            </div>
            <div className={'text-sm text-primary-foreground/70'}>
                {PLACEHOLDER_TESTIMONIAL.story}
            </div>
        </div>
    </div>
)
