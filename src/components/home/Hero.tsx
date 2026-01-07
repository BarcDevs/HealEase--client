import {Button} from '@/components/ui/button'
import {HEADLINES} from '@/constants/headlines.ts'
import {BUTTONS, DESCRIPTIONS} from '@/constants/plainTexts.ts'
import {Link} from '@tanstack/react-router'

const Hero = () => {
    return (
        <section className={'px-4 py-20'}>
            <div className={'container mx-auto max-w-4xl text-center'}>
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
                    <Button
                        size={'lg'}
                        className={'bg-linear-to-r from-blue-600 to-blue-700 px-8 py-3 text-lg hover:from-blue-700 hover:to-blue-800'}
                    >
                        <Link to={'/signup'}>
                            {BUTTONS.joinNow}
                        </Link>
                    </Button>

                    <Button
                        size={'lg'}
                        variant={'outline'}
                        className={'border-blue-200 px-8 py-3 text-lg text-blue-600 hover:bg-blue-50'}
                    >
                        <Link to={'/forum'}>
                            {BUTTONS.exploreForum}
                        </Link>
                    </Button>
                </div>

                <div className={'mt-16'}>
                    <img
                        src={'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop'}
                        alt={'Person using laptop for recovery support'}
                        className={'mx-auto w-full max-w-3xl rounded-2xl shadow-2xl'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
