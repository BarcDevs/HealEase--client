import { CTA } from '@/components/landing/sections/CTA.tsx'
import { Features } from '@/components/landing/sections/Features.tsx'
import { Footer } from '@/components/landing/sections/Footer.tsx'
import { Hero } from '@/components/landing/sections/Hero.tsx'
import { HowItWorks } from '@/components/landing/sections/HowItWorks.tsx'
import { Navbar } from '@/components/landing/sections/Navbar.tsx'
import { Testimonials } from '@/components/landing/sections/Testimonials.tsx'

export const LandingPage = ({}) => (
    <div className={'min-h-screen flex flex-col bg-background'}>
        <Navbar/>

        <main className={'flex-1'}>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Testimonials/>
            <CTA/>
        </main>

        <Footer/>
    </div>
)