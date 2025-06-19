import Icon from '@/components/shared/ui/Icon.tsx'
import {ClassName} from '@/types/react.ts'

type MetricProps = {
    image: string
    value: string | number
    title: string
    textStyles?: ClassName
}

const Metric = ({image, title, value, textStyles}: MetricProps) => (
    <div className={'flex-center flex-row flex-wrap gap-1'}>
        <Icon
            name={image}
            size={16}
        />
        <p className={`${textStyles} flex items-center gap-1`}>
            {value}

            <span className={'line-clamp-1'}>
               {title}
            </span>
        </p>
    </div>
)

export default Metric
