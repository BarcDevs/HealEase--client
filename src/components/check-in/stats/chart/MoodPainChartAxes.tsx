import {
    CartesianGrid,
    XAxis,
    YAxis
} from 'recharts'

const MoodPainChartAxes = () => (
    <>
        <CartesianGrid vertical={false}/>

        <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value: string) =>
                new Date(value)
                    .toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                    })
            }
        />

        <YAxis
            domain={[0, 10]}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            width={32}
        />
    </>
)

export default MoodPainChartAxes