import {Link} from '@tanstack/react-router'
import Page from '@/components/shared/ui/Page.tsx'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card.tsx'
import {AuthType, forms} from '@/components/auth/authFormsIndex.tsx'
import GoogleLoginButton from '@/components/auth/GoogleLoginButton.tsx'


const AuthPage = ({type}: { type: AuthType }) => (
    <Page>
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">
                    {forms[type].headline}
                </CardTitle>
                <CardDescription>
                    {forms[type].description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {forms[type].component}
                    {forms[type].googleLogin &&
                        <GoogleLoginButton type={type === 'signup' ? 'signup' : 'login'}/>}
                </div>
                {(type === 'login' || type === 'signup') &&
                    <div className="mt-4 text-center text-sm">
                        {type === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
                        <Link to={`/${type === 'login' ? 'signup' : 'login'}`}> <u>
                            {type === 'login' ? 'Sign up' : 'Login'}
                        </u></Link>
                    </div>}
            </CardContent>
        </Card>
        )
    </Page>
)
export default AuthPage
