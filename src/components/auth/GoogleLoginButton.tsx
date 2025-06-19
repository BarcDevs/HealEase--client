import {Button} from '@/components/ui/button.tsx'
import {Link} from '@tanstack/react-router'

const GoogleLoginButton = ({type} : {type: 'login' | 'signup'}) => (
    <Button className="w-full" variant="outline">
        {/* @ts-ignore todo add google login */}
        <Link to={'/google'}>
            {`${type === 'login' ? 'Login' : 'Sign up'} with Google`}
        </Link>
    </Button>
)

export default GoogleLoginButton
