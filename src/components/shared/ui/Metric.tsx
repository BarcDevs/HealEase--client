import Icon from '@/components/shared/ui/Icon.tsx'
import {ClassName} from '@/types/react'


type MetricProps = {
    image: string
    value: string | number
    title: string
    isAuthor?: boolean
    textStyles: ClassName
}

const Metric = ({image, title, value, isAuthor, textStyles}: MetricProps) => {
    return (
        <div className={'flex-center flex-row flex-wrap gap-1'}>
            {isAuthor ?
                <img
                    src={image}
                    alt={'avatar'}
                    width={20}
                    height={20}
                    className={'rounded-full'}
                /> :
                <Icon
                    name={image}
                    size={16}
                />}

            <p className={`${textStyles} flex items-center gap-1`}>
                {value}

                <span className={`line-clamp-1 ${isAuthor ? 'max-sm:hidden' : ''}`}
                >
                    {title}
                </span>
            </p>
        </div>
    )
}

export default Metric
