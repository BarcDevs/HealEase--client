import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis
} from 'recharts'

import {MoodPainSeriesPoint} from '@/types/checkIn.ts'

import {
    moodPainChartConfig
} from '@/components/check-in/stats/chart/chartConfig'
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart'

type MoodAndPainChartProps = {
    data: MoodPainSeriesPoint[]
}

const dateFormatter = (value: string) =>
    new Date(value)
        .toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })

const MoodPainChart = ({
    data
}: MoodAndPainChartProps) => (
    <section className={'w-full'}>
        <ChartContainer
            config={moodPainChartConfig}
            className={'h-70 w-full'}
        >
            <LineChart data={data}>
                <CartesianGrid vertical={false}/>

                <XAxis
                    dataKey={'date'}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={dateFormatter}
                />

                <YAxis
                    domain={[0, 10]}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    width={32}
                />

                <ChartTooltip
                    content={<ChartTooltipContent/>}
                />

                <ChartLegend content={<ChartLegendContent/>}/>

                <Line
                    type={'linear'}
                    dataKey={'mood'}
                    stroke={moodPainChartConfig.mood.color}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{r: 5}}
                />

                <Line
                    type={'linear'}
                    dataKey={'pain'}
                    stroke={moodPainChartConfig.pain.color}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{r: 5}}
                />
            </LineChart>
        </ChartContainer>
    </section>
)

export default MoodPainChart
