import {Control, FieldValues, Path} from 'react-hook-form'

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form.tsx'
import {Slider} from '@/components/ui/slider.tsx'

const DEFAULT_MIN = 1
const DEFAULT_MAX = 10
const SLIDER_STEP = 1

type ScoreSliderProps<T extends FieldValues> = {
    name: Path<T>
    label: string
    formControl: Control<T & FieldValues, unknown>
    min?: number
    max?: number
}

const ScoreSlider = <T extends FieldValues>({
    name,
    label,
    formControl,
    min = DEFAULT_MIN,
    max = DEFAULT_MAX
}: ScoreSliderProps<T>) => (
    <FormField
        control={formControl}
        name={name}
        render={({ field }) => (
            <FormItem>
                <div className={'flex items-center justify-between'}>
                    <FormLabel>{label}</FormLabel>
                    <span className={'text-2xl font-bold text-blue-600'}>
                        {field.value ?? min}
                    </span>
                </div>
                <FormControl>
                    <Slider
                        min={min}
                        max={max}
                        step={SLIDER_STEP}
                        value={[ field.value ?? min ]}
                        onValueChange={(vals) => field.onChange(vals[ 0 ])}
                        className={'transition-all duration-150'}
                    />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />
)

export default ScoreSlider
