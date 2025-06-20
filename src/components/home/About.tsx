import {DESCRIPTIONS} from '@/constants/plainTexts.ts'
import {HEADLINES} from '@/constants/headlines.ts'

const About = () =>
    (
        <section id={'about'} className={'bg-white/50 px-4 py-20'}>
            <div className={'container mx-auto max-w-4xl text-center'}>
                <h2 className={'mb-8 text-3xl font-bold text-gray-800 md:text-4xl'}>
                    {HEADLINES.about}
                </h2>
                <div className={'rounded-2xl bg-white/80 p-8 shadow-lg md:p-12'}>
                    <p className={'text-lg leading-relaxed text-gray-700 md:text-xl'}>
                        {DESCRIPTIONS.about}
                    </p>
                </div>
            </div>
        </section>
    )

export default About
