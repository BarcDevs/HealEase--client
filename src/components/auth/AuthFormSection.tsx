import { AuthFormConfig } from '@/types/auth.ts'

import { AuthCta } from '@/components/auth/AuthCta.tsx'
import { AuthHeadline } from '@/components/auth/AuthHeadline.tsx'
import GoogleLoginButton from '@/components/auth/GoogleLoginButton.tsx'

type AuthFormSectionProps = 
    AuthFormConfig['login']

export const AuthFormSection = ({
    headline,
    description,
    cta,
    component: FormComponent,
    googleLogin
}: AuthFormSectionProps) => (
    <div className={'flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'}>
        <div className={'mx-auto w-full max-w-sm lg:w-96'}>
            <AuthHeadline
                headline={headline}
                description={description}
            />

            <FormComponent/>

            {googleLogin && (
                <GoogleLoginButton/>
            )}

            {cta && <AuthCta {...cta}/>}
        </div>
    </div>
)