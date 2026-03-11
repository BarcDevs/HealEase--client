import {Link} from '@tanstack/react-router'

import {Button} from '@/components/ui/button'

const QuickActions = () => (
    <section className={'px-4 py-16'}>
        <div className={'mx-auto max-w-7xl'}>
            <div className={'flex flex-col gap-3 sm:flex-row sm:justify-center'}>
                <Button
                    size={'lg'}
                    asChild
                    className={'bg-blue-600 px-6 py-2 text-base hover:bg-blue-700'}
                >
                    <Link to={'/check-in/new'}>
                        Start or Update Check-in
                    </Link>
                </Button>
                <Button
                    size={'lg'}
                    variant={'outline'}
                    asChild
                    className={'border-blue-200 px-6 py-2 text-base text-blue-600 hover:bg-blue-50'}
                >
                    <Link to={'/forum'}>
                        Open Forum
                    </Link>
                </Button>
                <Button
                    size={'lg'}
                    variant={'outline'}
                    asChild
                    className={'border-blue-200 px-6 py-2 text-base text-blue-600 hover:bg-blue-50'}
                >
                    <Link to={'/profile/settings'}>
                        View Profile
                    </Link>
                </Button>
            </div>
        </div>
    </section>
)

export default QuickActions