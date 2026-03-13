import Icon from '@/components/shared/ui/Icon.tsx'
import { Button } from '@/components/ui/button.tsx'

import config from '@/config'

const GoogleLoginButton = () => {
    const href = (
        `${config.serverUrl}/api/v1/auth/google`
    )

    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs uppercase my-4">
                    <p className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </p>
                </div>
            </div>

            <Button
                type="button"
                variant="outline"
                className="h-11 w-full"
            >
                <Icon
                    name="google"
                    className="size-5 mr-2"
                    size={5}
                />

                <a href={href}>
                    Continue with Google
                </a>
            </Button>
        </>
    )
}

export default GoogleLoginButton
