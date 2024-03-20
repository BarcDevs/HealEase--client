import {Link} from '@tanstack/react-router'
import Page from '@/components/shared/ui/Page.tsx'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card.tsx'
import {Button} from '@/components/ui/button.tsx'
import LoginForm from '@/components/auth/LoginForm.tsx'
import SignupForm from '@/components/auth/SignupForm.tsx'

const AuthPage = ({type}: { type: 'login' | 'signup' }) =>(
    <Page>
        <Card className="mx-auto max-w-sm">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold">
                    {type === 'login' ? 'Login' : 'Sign up'}
                </CardTitle>
                <CardDescription>
                    {type === 'login' ?
                        'Enter your email below to login to your account' :
                        'Enter your information to create an account.'}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {type === 'login' ?
                        <LoginForm /> :
                        <SignupForm />}
                    <Button className="w-full" variant="outline">
                        {`${type === 'login' ? 'Login' : 'Sign up'} with Google`}
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    {type === 'login' ? 'Don\'t have an account?' : 'Already have an account?'}
                    <Link to={`/${type === 'login' ? 'signup' : 'login'}`}> <u>
                        {type === 'login' ? 'Sign up' : 'Login'}
                    </u></Link>
                </div>
            </CardContent>
        </Card>
        )
    </Page>
)
export default AuthPage
