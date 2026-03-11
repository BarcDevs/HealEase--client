import {Link} from '@tanstack/react-router'

import {Button} from '@/components/ui/button'

import {useAuth} from '@/hooks/useAuth.ts'

import {HEADLINES} from '@/constants/headlines.ts'
import {BUTTONS, DESCRIPTIONS} from '@/constants/plainTexts.ts'

const Hero = () => {
    const {isLoggedIn} = useAuth()

    return (
        <section className={'px-4 py-20'}>
            <div className={'mx-auto max-w-4xl text-center'}>
                <h1 className={'mb-6 text-4xl font-bold leading-tight text-gray-800 md:text-6xl'}>
                    {HEADLINES.hero}&nbsp;
                    <span className={'bg-linear-to-r from-blue-600 to-green-500 bg-clip-text text-transparent'}>
                    {HEADLINES.heroBolded}
                    </span>.
                </h1>

                <p className={'mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600'}>
                    {DESCRIPTIONS.hero}
                </p>

                <div className={'flex flex-col justify-center gap-4 sm:flex-row'}>
                    {!isLoggedIn && (
                        <Button
                            size={'lg'}
                            asChild
                            className={'bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 text-lg hover:from-blue-700 hover:to-blue-800'}
                        >
                            <Link to={'/signup'}>
                                {BUTTONS.joinNow}
                            </Link>
                        </Button>
                    )}

                    <Button
                        size={'lg'}
                        variant={isLoggedIn ? 'default' : 'outline'}
                        asChild
                        className={isLoggedIn ?
                            'bg-blue-600 px-8 py-3 text-lg hover:bg-blue-700' :
                            'border-blue-200 px-8 py-3 text-lg text-blue-600 hover:bg-blue-50'}
                    >
                        <Link to={'/check-in'}>
                            See Check-ins
                        </Link>
                    </Button>
                </div>

                <div className={'mt-16'}>
                    <img
                        src={'/assets/heroImage.webp'}
                        alt={'Person using laptop for recovery support'}
                        className={'mx-auto w-full max-w-3xl rounded-2xl shadow-2xl'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
