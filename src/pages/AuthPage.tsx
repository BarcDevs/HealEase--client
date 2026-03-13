import { AuthType } from '@/types/auth.ts'

import { AuthDisplayContent } from '@/components/auth/authDisplay/AuthDisplayContent.tsx'
import { AuthFormSection } from '@/components/auth/AuthFormSection.tsx'
import { authForms } from '@/components/auth/authFormsIndex.tsx'

type AuthPageProps = {
    type: AuthType
}

export const AuthPage = ({
    type
}: AuthPageProps) => {
    const authFormConfig = authForms[type]
    const isLogin = type === 'login'
    const isSignup = type === 'signup'
    const hasContentSection = isLogin || isSignup

    const formSection = (
        <AuthFormSection {...authFormConfig} />
    )

    const contentSection = hasContentSection && (
        <AuthDisplayContent type={type}/>
    )

    return (
        <div className={'flex min-h-screen'}>
            {hasContentSection ? (
                <>
                    {isLogin ? formSection : contentSection}
                    {isLogin ? contentSection : formSection}
                </>
            ) : (
                formSection
            )}
        </div>
    )
}
