import {
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis
} from 'recharts'

import type {MoodPainSeriesPoint} from '@/types/checkIn'

import {
    type ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from '@/components/ui/chart'

type MoodPainChartProps = {
    data: MoodPainSeriesPoint[]
}

const chartConfig = {
    mood: {
        label: 'Mood',
        color: '#2FAF9E'
    },
    pain: {
        label: 'Pain',
        color: '#F26D6D'
    }
} satisfies ChartConfig

const formatChartDate = (value: string) =>
    new Date(value)
        .toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        })

const MoodPainChart = ({
    data
}: MoodPainChartProps) => (
    <section className={'w-full'}>
        <ChartContainer
            config={chartConfig}
            className={'h-70 w-full'}
        >
            <LineChart data={data}>
                <CartesianGrid vertical={false}/>

                <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={formatChartDate}
                />

                <YAxis
                    domain={[0, 10]}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    width={32}
                />

                <ChartTooltip content={<ChartTooltipContent/>}/>

                <Line
                    type={'linear'}
                    dataKey={'mood'}
                    stroke={chartConfig.mood.color}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                        r: 5
                    }}
                    connectNulls={false}
                />

                <Line
                    type={'linear'}
                    dataKey={'pain'}
                    stroke={chartConfig.pain.color}
                    strokeWidth={3}
                    dot={false}
                    activeDot={{
                        r: 5
                    }}
                    connectNulls={false}
                />

                <ChartLegend content={<ChartLegendContent/>}/>
            </LineChart>
        </ChartContainer>
    </section>
)

export default MoodPainChart