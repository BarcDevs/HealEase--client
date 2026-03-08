import {FC, useMemo} from 'react'

import {getRouteApi, Link} from '@tanstack/react-router'

import CheckInHistoryList from '@/components/check-in/history/CheckInHistoryList.tsx'
import CheckInHistorySkeleton from '@/components/check-in/history/skeletons/CheckInHistorySkeleton.tsx'
import CheckInStats from '@/components/check-in/stats/CheckInStats'
import MoodPainChart from '@/components/check-in/stats/MoodPainChart.tsx'
import CheckInsChartSkeleton from '@/components/check-in/stats/skeletons/CheckInsChartSkeleton.tsx'
import CheckInStatsSkeleton from '@/components/check-in/stats/skeletons/CheckInStatsSkeleton.tsx'
import Page from '@/components/shared/ui/Page.tsx'
import {Button} from '@/components/ui/button.tsx'

import {buildMoodPainSeries} from '@/lib/checkIn/buildMoodPainSeries.ts'

import {BUTTONS} from '@/constants/plainTexts'

type CheckInPageProps = {
    isLoading?: boolean
}

const route = getRouteApi('/_checkin/check-in/')

const CheckInPage: FC<CheckInPageProps> = ({
    isLoading
}) => {
    const {
        history,
        stats
    } = route.useLoaderData() ?? { history: [], stats: {} as any }

    const moodPainSeries = useMemo(
        () => history ? buildMoodPainSeries(history) : [],
        [history]
    )

    return (
        <Page>
            <div className={'mb-6 flex items-center justify-between'}>
                <h1 className={'text-2xl font-bold'}>
                    Check-in
                </h1>
                <Button
                    asChild
                    disabled={isLoading}
                    className={`${isLoading ? 'pointer-events-none cursor-not-allowed opacity-50' : ''}`}
                >
                    <Link to={'/check-in/new'}>
                        {BUTTONS.newCheckIn}
                    </Link>
                </Button>
            </div>

            {isLoading ? <>
                    <CheckInStatsSkeleton/>
                    <CheckInsChartSkeleton/>
                    <CheckInHistorySkeleton/>
                </> :
                <>
                    <CheckInStats stats={stats}/>
                    <MoodPainChart data={moodPainSeries}/>
                    <CheckInHistoryList checkIns={history}/>
                </>
            }
        </Page>
    )
}

export default CheckInPage
