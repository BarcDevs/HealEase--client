import {Form, FormField, FormItem, FormLabel} from '@/components/ui/form.tsx'
import {Button} from '@/components/ui/button.tsx'
import {getRouteApi, Link, useNavigate} from '@tanstack/react-router'
import {Checkbox} from '@/components/ui/checkbox.tsx'
import {useForm} from 'react-hook-form'
import {loginSchema, LoginSchema} from '@/validations/forms/loginSchema.ts'
import {zodResolver} from '@hookform/resolvers/zod'
import FormInput from '@/components/shared/form/FormInput.tsx'
import {useAuth} from '@/hooks/useAuth.ts'

const route = getRouteApi('/login')

const LoginForm = ({}) => {
    const {login} = useAuth()
    const navigate = useNavigate()
    const redirect = route.useSearch().redirect || '/'

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            remember: false
        }
    })

    const onSubmit = (values: LoginSchema) => {
        login(values)
            .then(() => navigate({
                to: redirect,
                replace: true
            }))
            .catch((err) => console.error(err.message || err.response.data))
    }

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormInput
                    formControl={form.control}
                    type={'text'}
                    name={'email'}
                    label={'Email'}
                    placeholder={'m@example.com'}
                />
                <FormInput
                    formControl={form.control}
                    type={'password'}
                    name={'password'}
                    label={'Password'}
                    secondaryLabel={
                        <Link className="ml-auto inline-block text-sm underline"
                              to={'/forgot-password'}>
                            Forgot your password?
                        </Link>}
                />
                <FormField
                    control={form.control}
                    name={'remember'}
                    render={({field}) => (
                        <FormItem className="flex items-center space-x-2">
                            <Checkbox id="remember"
                                      className={'mt-1.5'}
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                            />
                            <FormLabel htmlFor="remember">Remember me</FormLabel>
                        </FormItem>
                    )}
                />
                <Button className="w-full" type="submit">
                    Login
                </Button>
            </form>
        </Form>
    )
}

export default LoginForm
