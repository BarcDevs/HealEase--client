import {Card, CardContent} from '@/components/ui/card'
import {FEATURES} from '@/constants/componentData.ts'
import {HEADLINES} from '@/constants/headlines.ts'
import {DESCRIPTIONS} from '@/constants/plainTexts.ts'

const Features = () =>
    (
        <section id={'features'}
                 className={'bg-white/50 px-4 py-20'}>
            <div className={'container mx-auto'}>
                <div className={'mb-16 text-center'}>
                    <h2 className={'mb-4 text-3xl font-bold text-gray-800 md:text-4xl'}>
                        {HEADLINES.features}
                    </h2>
                    <p className={'mx-auto max-w-2xl text-xl text-gray-600'}>
                        {DESCRIPTIONS.features}
                    </p>
                </div>

                <div className={'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'}>
                    {FEATURES.map((feature, index) => (
                        <Card key={index}
                              className={'border-blue-100 bg-white/80 transition-shadow duration-300 hover:shadow-lg'}>
                            <CardContent className={'p-6 text-center'}>
                                <div
                                    className={'mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-linear-to-r from-blue-600 to-green-500'}>
                                    <feature.icon className={'size-6 text-white'}/>
                                </div>
                                <h3 className={'mb-3 text-xl font-semibold text-gray-800'}>
                                    {feature.title}
                                </h3>
                                <p className={'leading-relaxed text-gray-600'}>
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )

export default Features
