import {Link} from '@tanstack/react-router'

import {Button} from '@/components/ui/button.tsx'

import STYLES from '@/lib/styles.ts'

const GoogleLoginButton = ({type}: { type: 'login' | 'signup' }) => (
    <Button
        className={STYLES.outlineButton}
        variant={'outline'}
    >
        {/* @ts-ignore todo add google login */}
        <Link to={'/google'}>
            {`${type === 'login' ? 'Login' : 'Sign up'} with Google`}
        </Link>
    </Button>
)

export default GoogleLoginButton
