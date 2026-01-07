import { FC } from 'react'

type ErrorProps = {
    error: string
}

const Error: FC<ErrorProps> = ({ error }) => (
    <p className={'mt-2 text-sm font-semibold text-red-500'}>
        {error}
    </p>
)

export default Error