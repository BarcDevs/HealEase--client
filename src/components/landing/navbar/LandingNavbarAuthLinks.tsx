import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button.tsx'

export const LandingNavbarAuthLinks = ({}) => (
    <>
        <Button
            variant={'outline'}
            asChild
        >
            <Link to={'/login'}>
                Log in
            </Link>
        </Button>
        <Button asChild>
            <Link to={'/signup'}>
                Start Your Journey
            </Link>
        </Button>
    </>
)