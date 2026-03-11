import {getRouteApi, Link} from '@tanstack/react-router'

import CheckInHistoryList from '@/components/check-in/history/CheckInHistoryList.tsx'
import CheckInHistorySkeleton from '@/components/check-in/history/skeletons/CheckInHistorySkeleton.tsx'
import AIInsightPanel from '@/components/check-in/insights/AIInsightPanel.tsx'
import CheckInStats from '@/components/check-in/stats/CheckInStats'
import MoodPainChart from '@/components/check-in/stats/MoodPainChart.tsx'
import CheckInStatsSkeleton from '@/components/check-in/stats/skeletons/CheckInStatsSkeleton.tsx'
import Page from '@/components/shared/ui/Page.tsx'
import {Button} from '@/components/ui/button.tsx'

import {isTodayCheckIn} from '@/lib/checkIn/loaderHelpers.ts'

import {BUTTONS} from '@/constants/plainTexts'

type CheckInPageProps = {
    isLoading?: boolean
}

const route = getRouteApi('/_checkin/check-in/')

const CheckInPage = ({
    isLoading
}: CheckInPageProps) => {
    const {
        history,
        stats
    } = route.useLoaderData() ?? {
        history: [],
        stats: {} as any
    }

    const todayCheckIn = history.find(
        checkIn => isTodayCheckIn(checkIn)
    )
    const buttonText = todayCheckIn
        ? BUTTONS.updateCheckIn
        : BUTTONS.newCheckIn

    const chartData = history.map(checkIn => ({
        date: checkIn.checkInDate,
        mood: checkIn.moodScore,
        pain: checkIn.painLevel,
        energy: checkIn.energy
    }))

    return (
        <Page>
            <div className={'mb-8 flex items-center justify-between'}>
                <h1 className={'text-2xl font-bold'}>
                    Check-in
                </h1>
                <Button asChild disabled={isLoading}>
                    <Link to={'/check-in/new'}>
                        {buttonText}
                    </Link>
                </Button>
            </div>

            {isLoading ? (
                <>
                    <CheckInStatsSkeleton/>
                    <div className={'mt-8'}/>
                    <CheckInHistorySkeleton/>
                </>
            ) : (
                <>
                    <div className={'mb-8'}>
                        <h2 className={'mb-4 text-lg font-semibold'}>
                            Your Stats
                        </h2>
                        <CheckInStats stats={stats}/>
                    </div>

                    {chartData.length > 0 && (
                        <div className={'mb-8'}>
                            <h2 className={'mb-4 text-lg font-semibold'}>
                                Mood & Pain Trend
                            </h2>
                            <MoodPainChart data={chartData}/>
                        </div>
                    )}

                    <div className={'mb-8'}>
                        <h2 className={'mb-4 text-lg font-semibold'}>
                            AI Insights
                        </h2>
                        <AIInsightPanel insights={todayCheckIn?.insights}/>
                    </div>

                    <div>
                        <h2 className={'mb-4 text-lg font-semibold'}>
                            History
                        </h2>
                        <CheckInHistoryList checkIns={history}/>
                    </div>
                </>
            )}
        </Page>
    )
}

export default CheckInPage