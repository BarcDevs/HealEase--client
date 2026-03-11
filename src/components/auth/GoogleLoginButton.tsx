import {Button} from '@/components/ui/button.tsx'

import STYLES from '@/lib/styles.ts'

import config from '@/config'

const GoogleLoginButton = ({type}: {
    type: 'login' | 'signup'
}) => {
    const href = (
        `${config.serverUrl}/api/v1/auth/google`
    )

    return (
        <Button
            asChild
            className={STYLES.outlineButton}
            variant={'outline'}
        >
            <a href={href}>
                {`${type === 'login' ?
                    'Login' :
                    'Sign up'
                } with Google`}
            </a>
        </Button>
    )
}

export default GoogleLoginButton
