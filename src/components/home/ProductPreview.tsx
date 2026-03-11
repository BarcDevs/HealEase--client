import {useQuery} from '@tanstack/react-query'

import {minuteInMs} from '@/constants/time'

import {fetchCheckInStats} from '@/api/checkIn'

const ProductPreview = () => {
    const {data: response, isLoading} = useQuery({
        queryKey: ['checkInStats'],
        queryFn: () => fetchCheckInStats(),
        staleTime: 5 * minuteInMs
    })

    const stats = response?.data?.data

    if (isLoading || !stats) {
        return null
    }

    return (
        <section className={'px-4 py-16'}>
            <div className={'mx-auto max-w-7xl'}>
                <div className={'rounded-2xl bg-white/80 p-8 shadow-lg'}>
                    <h2 className={'mb-6 text-2xl font-semibold text-gray-800'}>
                        Your Recovery Progress
                    </h2>
                    <div className={'grid grid-cols-2 gap-6 md:grid-cols-4'}>
                        <div className={'text-center'}>
                            <div className={'mb-2 text-3xl font-bold text-blue-600'}>
                                {stats.totalCheckIns}
                            </div>
                            <p className={'text-sm text-gray-600'}>
                                Check-ins
                            </p>
                        </div>
                        <div className={'text-center'}>
                            <div className={'mb-2 text-3xl font-bold text-green-600'}>
                                {stats.currentStreak || 0}
                            </div>
                            <p className={'text-sm text-gray-600'}>
                                Day Streak
                            </p>
                        </div>
                        <div className={'text-center'}>
                            <div className={'mb-2 text-3xl font-bold text-purple-600'}>
                                {Math.round(stats.averageMoodScore * 10) / 10}
                            </div>
                            <p className={'text-sm text-gray-600'}>
                                Avg Mood
                            </p>
                        </div>
                        <div className={'text-center'}>
                            <div className={'mb-2 text-3xl font-bold text-amber-600'}>
                                {Math.round(stats.averagePainLevel * 10) / 10}
                            </div>
                            <p className={'text-sm text-gray-600'}>
                                Avg Pain
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductPreview
