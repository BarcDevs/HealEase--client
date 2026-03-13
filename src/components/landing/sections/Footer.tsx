import { Company } from '@/components/landing/footer/footerLinks/Company.tsx'
import { Product } from '@/components/landing/footer/footerLinks/Product.tsx'
import { Support } from '@/components/landing/footer/footerLinks/Support.tsx'
import { Rights } from '@/components/landing/footer/Rights.tsx'
import { Logo } from '@/components/shared/Logo.tsx'

export const Footer = () => (
    <footer className={'border-t bg-card'}>
        <div className={'mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'}>
            <div className={'grid gap-8 sm:grid-cols-2 lg:grid-cols-4'}>
                <div className={'sm:col-span-2 lg:col-span-1'}>
                    <Logo/>
                    <p className={'mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground'}>
                        Your supportive companion on the road to recovery. Track progress, connect with others, and heal with confidence.
                    </p>
                </div>

                <Product/>

                <Support/>

                <Company/>
            </div>

            <Rights/>
        </div>
    </footer>
)
