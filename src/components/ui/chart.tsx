import * as React from 'react'

import * as RechartsPrimitive from 'recharts'

import {cn} from '@/lib/utils'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {light: '', dark: '.dark'} as const

export type ChartConfig = {
    [k in string]: {
        label?: React.ReactNode
        icon?: React.ComponentType
    } & (
        | {color?: string; theme?: never}
        | {color?: never; theme: Record<keyof typeof THEMES, string>}
    )
}

type ChartContextProps = {
    config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
    const context = React.useContext(ChartContext)

    if (!context) {
        throw new Error('useChart must be used within a <ChartContainer />')
    }

    return context
}

const ChartContainer = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<'div'> & {
        config: ChartConfig
        children: React.ComponentProps<
            typeof RechartsPrimitive.ResponsiveContainer
        >['children']
    }
>(({className, children, config, ...props}, ref) => (
    <ChartContext.Provider value={{config}}>
        <div
            ref={ref}
            className={cn(
                'flex aspect-video justify-center',
                className
            )}
            {...props}
        >
            <RechartsPrimitive.ResponsiveContainer>
                {children}
            </RechartsPrimitive.ResponsiveContainer>
        </div>
    </ChartContext.Provider>
))
ChartContainer.displayName = 'ChartContainer'

const ChartTooltip = RechartsPrimitive.Tooltip

type ChartTooltipContentProps = {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
    active?: boolean
    payload?: Array< {name?: string; value?: string | number; dataKey?: string} >
    label?: string | number
}

const ChartTooltipContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<'div'> & ChartTooltipContentProps
>(
    (
        {
            active,
            payload,
            label,
            hideLabel = false,
            hideIndicator = false,
            indicator = 'dot',
            nameKey,
            labelKey,
            className
        },
        ref
    ) => {
        const {config} = useChart()

        const tooltipLabel = React.useMemo(() => {
            if (hideLabel) {
                return null
            }

            const key = `${labelKey || label || 'value'}`
            const itemConfig = config[key as keyof typeof config]

            return (
                <div className={'ml-2 font-medium'}>
                    {itemConfig?.label || key}
                </div>
            )
        }, [config, hideLabel, labelKey, label])

        if (!active || !payload || payload.length === 0) {
            return null
        }

        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl',
                    className
                )}
            >
                <div className={'flex flex-col gap-2'}>
                    {!hideLabel && tooltipLabel}
                    {payload && payload.length > 0 && (
                        <div className={'flex flex-col gap-1'}>
                            {payload.map((item: any, index: number) => {
                                const key = `${nameKey || item.name || item.dataKey || 'value'}`
                                const itemConfig = config[key as keyof typeof config]

                                const indicatorColor =
                                    itemConfig?.theme?.['light'] ||
                                    itemConfig?.color

                                return (
                                    <div
                                        key={`${item.dataKey}-${index}`}
                                        className={'flex w-full flex-shrink-0 items-center gap-1.5'}
                                    >
                                        {!hideIndicator && (
                                            <div
                                                className={cn(
                                                    'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                                                    {
                                                        'h-2 w-2': indicator === 'dot',
                                                        'w-1': indicator === 'line',
                                                        'w-0 border-[1.5px] border-dashed bg-transparent': indicator === 'dashed'
                                                    }
                                                )}
                                                style={
                                                    {
                                                        '--color-bg': indicatorColor,
                                                        '--color-border': indicatorColor
                                                    } as React.CSSProperties
                                                }
                                            />
                                        )}
                                        <span className={'flex w-full justify-between gap-8 text-xs'}>
                                            <span className={'text-muted-foreground'}>
                                                {itemConfig?.label || item.name}
                                            </span>
                                            <span className={'font-mono font-medium text-foreground'}>
                                                {item.value}
                                            </span>
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        )
    }
)
ChartTooltipContent.displayName = 'ChartTooltipContent'

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
    HTMLDivElement,
    React.ComponentProps<'div'> &
        React.ComponentProps<typeof RechartsPrimitive.Legend> & {
            hideIcon?: boolean
            nameKey?: string
        }
>(({className, hideIcon = false, payload, nameKey}, ref) => {
    const {config} = useChart()

    if (!payload || payload.length === 0) {
        return null
    }

    return (
        <div
            ref={ref}
            className={cn(
                'flex flex-wrap justify-center gap-4',
                className
            )}
        >
            {payload.map((entry) => {
                const key = `${nameKey || entry.dataKey || 'value'}`
                const itemConfig = config[key as keyof typeof config]

                return (
                    <div
                        key={`legend-${entry.value}`}
                        className={'flex items-center gap-1.5'}
                    >
                        {!hideIcon && (
                            <div
                                className={'h-2 w-2 shrink-0 rounded-[2px]'}
                                style={{
                                    backgroundColor: entry.color
                                }}
                            />
                        )}
                        <span className={'text-xs'}>{itemConfig?.label}</span>
                    </div>
                )
            })}
        </div>
    )
})
ChartLegendContent.displayName = 'ChartLegendContent'

export {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    useChart
}
