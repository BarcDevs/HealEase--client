import {ReactNode} from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card.tsx'

type StatCardProps = {
    title: string
    value: ReactNode
    delay?: string
}

const StatCard = ({
    title,
    value,
    delay
}: StatCardProps) => (
    <Card
        className={
            'animate-in fade-in-0 slide-in-from-bottom-4 duration-300'
        }
        style={delay ? { animationDelay: delay } : undefined}
    >
        <CardHeader className={'pb-2'}>
            <CardTitle
                className={'text-sm font-medium text-muted-foreground'}
            >
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className={'text-2xl font-bold'}>
                {value}
            </div>
        </CardContent>
    </Card>
)

export default StatCard