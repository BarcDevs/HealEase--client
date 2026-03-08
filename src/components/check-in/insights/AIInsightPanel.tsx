import { Lightbulb } from 'lucide-react'

import type { CheckInInsight as CheckInInsightType } from '@/types/checkIn'

import CheckInInsight from '@/components/check-in/insights/CheckInInsight'
import AIInsightPanelSkeleton from '@/components/check-in/insights/skeletons/AIInsightPanelSkeleton'

import { cn } from '@/lib/utils'

type AIInsightPanelProps = {
    insights?: CheckInInsightType[]
    isLoading?: boolean
}

const AIInsightPanel = ({ insights, isLoading }: AIInsightPanelProps) => {
    if ( isLoading ) {
        return <AIInsightPanelSkeleton />
    }

    const displayInsights = insights && insights.length > 0

    return (
        <div className={'rounded-lg border p-4'}>
            {displayInsights ? (
                <>
                    <h3 className={'mb-4 font-bold text-sm'}>AI Insights</h3>
                    <div className={'space-y-3'}>
                        {insights.slice(0, 3).map((insight) => (
                            <div
                                key={insight.id}
                                className={'flex items-start gap-3'}
                            >
                                <div className={'flex-shrink-0'}>
                                    <CheckInInsight insight={insight} />
                                </div>
                                <p className={cn(
                                    'text-sm leading-relaxed',
                                    'text-foreground'
                                )}>
                                    {insight.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className={'flex flex-col items-center gap-2 py-6 text-center'}>
                    <Lightbulb className={'h-5 w-5 text-muted-foreground'} />
                    <p className={'text-sm text-muted-foreground'}>
                        Your AI insights will appear here after your next check-in.
                    </p>
                </div>
            )}
        </div>
    )
}

export default AIInsightPanel
