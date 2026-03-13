import { AuthType } from '@/types/auth.ts'

import { AuthDisplayContent } from '@/components/auth/authDisplay/AuthDisplayContent.tsx'
import { AuthFormSection } from '@/components/auth/AuthFormSection.tsx'
import { authForms } from '@/components/auth/authFormsIndex.tsx'
import { getFormComponent } from '@/components/auth/getFormComponent.ts'

type AuthPageProps = {
    type: AuthType
}

export const AuthPage = ({
    type
}: AuthPageProps) => {
    const config = authForms[type]
    const isLogin = type === 'login'
    const isSignup = type === 'signup'
    const hasContentSection = isLogin || isSignup
    const FormComponent = getFormComponent(type)

    const formSection = (
        <AuthFormSection
            headline={config.headline}
            description={config.description}
            cta={config.cta}
            FormComponent={FormComponent}
        />
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
