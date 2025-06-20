import {FC} from 'react'
import {env} from '@/config'
import {useRouter} from '@tanstack/react-router'
import {IRootState} from '@/store'
import {useSelector} from 'react-redux'
import {AxiosError} from 'axios'

type ErrorPageProps = {
    error: Error
    reset: () => void
}

const ErrorPage: FC<ErrorPageProps> = ({error, reset}) => {
    const router = useRouter()
    const user = useSelector((state: IRootState) => state.auth.user)

    const isAdmin = user?.role === 'ADMIN'
    const isDevMode = env.DEV
    const status =
        error instanceof AxiosError &&
        error.response?.status
    const isServerError = status === 500

    const handleGoHome = () =>
        router.navigate({to: '/'})

    const handleGoBack = () =>
        window.history.back()

    const handleReload = () =>
        window.location.reload()

    // Show error details only to admins or in dev mode
    const showErrorDetails = isAdmin || isDevMode

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-xl">
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-red-100">
                    <svg
                        className="size-8 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                <h1 className="mb-2 text-2xl font-bold text-gray-800">
                    {isServerError ? 'Server Error' : 'Oops!'}
                </h1>

                <p className="mb-3 text-gray-600">
                    Sorry, an unexpected error has occurred.
                </p>

                {showErrorDetails && error?.message && (
                    <div className="mb-4 rounded-md bg-red-50 p-3">
                        <p className="text-sm text-red-700">
                            {error instanceof AxiosError ?
                                error.response?.data.message :
                                error.message}
                        </p>
                    </div>
                )}

                {isDevMode && error?.stack && (
                    <details className="mb-4 text-left">
                        {/*todo: font-cascadia or something else for trace*/}
                        <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                            Show stack trace
                        </summary>
                        <div className="mt-2 max-h-32 overflow-y-auto rounded bg-gray-100 p-2 text-xs text-gray-700">
                            <pre className="whitespace-pre-wrap">
                                {error.stack}
                            </pre>
                        </div>
                    </details>
                )}

                <div className="space-y-3">
                    <button
                        onClick={reset}
                        className="w-full rounded-md bg-blue-500 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Try Again
                    </button>

                    <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
                        <button
                            onClick={handleGoBack}
                            className="w-full rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-800 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        >
                            Go Back
                        </button>

                        <button
                            onClick={handleGoHome}
                            className="w-full rounded-md bg-gray-200 px-4 py-2 font-medium text-gray-800 transition duration-150 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        >
                            Go Home
                        </button>
                    </div>

                    <button
                        onClick={handleReload}
                        className="w-full text-sm text-gray-500 underline hover:text-gray-700"
                    >
                        Reload Page
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
