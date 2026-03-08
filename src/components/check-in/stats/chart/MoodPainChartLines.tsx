import {moodPainChartConfig} from '@/components/check-in/stats/chart/chartConfig'
import ChartLine from '@/components/check-in/stats/chart/ChartLine.tsx'

const MoodPainChartLines = () => (
    <>
        <ChartLine
            dataKey={'mood'}
            strokeColor={
                moodPainChartConfig.mood.color
            }
            lineWidth={3}
        />

        <ChartLine
            dataKey={'pain'}
            strokeColor={
                moodPainChartConfig.pain.color
            }
        />
    </>
)

export default MoodPainChartLines
