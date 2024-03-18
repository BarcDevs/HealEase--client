import {ClassName} from '@/types/react'

type IconProps = {
    name: string
    size: number
    className?: ClassName
}

const Icon = ({name, size, className}: IconProps) => (
    <img
        src={`/assets/icons/${name}.svg`}
        alt={name}
        width={size}
        height={size}
        className={`object-contain ${className}`}
    />
)

export default Icon
