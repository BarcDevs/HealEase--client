import { BRAND_NAME, FOOTER } from '@/constants/plainTexts.ts'
import FooterLinks from '@/components/layout/root/FooterLinks.tsx'
import Logo from '@/components/shared/Logo.tsx'
import SocialLinks from '@/components/layout/root/SocialLinks.tsx'

const Footer = () => (
    <footer className={'bg-gray-800 px-4 py-16 text-white'}>
        <div className={'container mx-auto'}>
            <div className={'mb-8 grid grid-cols-1 gap-8 md:grid-cols-4'}>
                <div className={'md:col-span-2'}>
                    <div className={'mb-4 flex items-center space-x-2'}>
                        <div
                            className={'flex size-8 items-center justify-center'}>
                            <Logo/>
                        </div>
                        <span className={'text-xl font-bold'}>
                                {BRAND_NAME}
                            </span>
                    </div>
                    <h3 className={'mb-4 text-lg text-gray-400'}>
                        {FOOTER.h3}
                    </h3>
                    <p className={'max-w-md text-gray-400'}>
                        {FOOTER.desc}
                    </p>
                </div>

                <FooterLinks/>
            </div>

            <div className={'flex flex-col items-center justify-between border-t border-gray-700 pt-8 md:flex-row'}>
                <p className={'text-sm text-gray-400'}>
                    {FOOTER.rights}
                </p>

                <SocialLinks/>
            </div>
        </div>
    </footer>
)

export default Footer
