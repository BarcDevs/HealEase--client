import {twMerge} from 'tailwind-merge'

import {Card, CardContent} from '@/components/ui/card'

import {BENEFITS} from '@/constants/componentData.ts'
import {HEADLINES} from '@/constants/headlines.ts'
import {DESCRIPTIONS} from '@/constants/plainTexts.ts'

const Benefits = () =>
    (
        <section id={'benefits'} className={'px-4 py-20'}>
            <div className={'container mx-auto'}>
                <div className={'mb-16 text-center'}>
                    <h2 className={'mb-4 text-3xl font-bold text-gray-800 md:text-4xl'}>
                        {HEADLINES.benefits}
                    </h2>
                    <p className={'mx-auto max-w-2xl text-xl text-gray-600'}>
                        {DESCRIPTIONS.benefits}
                    </p>
                </div>

                <div className={'mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3'}>
                    {BENEFITS.map((benefit, index) => (
                        <Card key={index}
                              className={'border-0 bg-white/80 shadow-lg transition-shadow duration-300 hover:shadow-xl'}>
                            <CardContent className={'p-8 text-center'}>
                                <div
                                    className={twMerge(
                                        'size-16 bg-linear-to-r mx-auto mb-6 flex items-center justify-center rounded-2xl',
                                        benefit.gradient)}>
                                    <span className={'text-xl font-bold text-white'}>
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className={'mb-4 text-2xl font-semibold text-gray-800'}>
                                    {benefit.title}
                                </h3>
                                <p className={'text-lg leading-relaxed text-gray-600'}>
                                    {benefit.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )

export default Benefits
