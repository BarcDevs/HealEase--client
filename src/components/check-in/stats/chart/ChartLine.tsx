import {Line} from 'recharts'

type ChartLineProps = {
    dataKey: 'mood' | 'pain'
    strokeColor: string
    lineWidth?: number
    dot?: boolean
    dotOptions?: {
        r?: number
        stroke?: string
        strokeWidth?: number
    }
}

const ChartLine = ({
    dataKey,
    strokeColor,
    lineWidth = 2,
    dot = false,
    dotOptions = {
        r: 5
    }
}: ChartLineProps) => (
    <Line
        type="linear"
        dataKey={dataKey}
        stroke={strokeColor}
        strokeWidth={lineWidth}
        dot={dot}
        activeDot={dotOptions}
        connectNulls={false}
    />
)


export default ChartLine