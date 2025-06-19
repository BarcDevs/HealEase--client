import {useRouter} from '@tanstack/react-router'

const NotFoundPage = () => {
    const {state} = useRouter()

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-yellow-600">
                Page Not Found
            </h1>
            <p className="mt-4 text-gray-700">
                You tried to access:&nbsp;
                <strong>
                    {state.location.pathname}
                </strong>
            </p>
        </div>
    )
}

export default NotFoundPage
