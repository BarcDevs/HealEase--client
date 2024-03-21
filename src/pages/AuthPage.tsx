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
                {forms[type].reference &&
                    <div className="mt-4 text-center text-sm">
                        {forms[type].reference?.text}
                        <Link to={forms[type].reference?.link || '/'}> <u>
                            {forms[type].reference?.linkText}
                        </u></Link>
                    </div>}
            </CardContent>
        </Card>
        )
    </Page>
)
export default AuthPage
