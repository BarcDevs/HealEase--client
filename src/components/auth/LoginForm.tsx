import { Form, FormField, FormItem, FormLabel } from '@/components/ui/form.tsx'
import { Button } from '@/components/ui/button.tsx'
import { getRouteApi, Link, useNavigate } from '@tanstack/react-router'
import { Checkbox } from '@/components/ui/checkbox.tsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginSchema, LoginSchema } from '@/validations/forms/loginSchema.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '@/components/shared/form/FormInput.tsx'
import { useAuth } from '@/hooks/useAuth.ts'
import { BUTTONS, FIELDS } from '@/constants/plainTexts.ts'
import STYLES from '@/lib/styles.ts'
import Error from '@/components/shared/Error.tsx'

const route = getRouteApi('/(auth)/login')

const LoginForm = ({}) => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const search = route.useSearch()
    const redirect = ( search as any ).redirect || '/'
    const [error, setError] = useState('')

    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            remember: false
        }
    })

    const onSubmit = (values: LoginSchema) => {
        console.log('login')
        login(values)
            .then(() => navigate({
                to: redirect,
                replace: true
            }))
            .catch((err) => {
                const errorMessage =
                    err.status === 401 ?
                        'Invalid credentials' :
                        err.message ||
                        err.response.data
                setError(errorMessage)
                console.error(errorMessage)
            })
    }

    return (
        <Form {...form}>
            <form
                className={'space-y-4'}
                onSubmit={form.handleSubmit(onSubmit)}
            >
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
                        <Link className={'ml-auto inline-block text-sm font-semibold text-blue-600 underline hover:text-blue-700'}
                              to={'/forgot-password'}>
                            {FIELDS.forgotPassword}
                        </Link>}
                />

                <FormField
                    control={form.control}
                    name={'remember'}
                    render={({ field }) => (
                        <FormItem className={'flex items-center space-x-2'}>
                            <Checkbox id={'remember'}
                                      className={'mt-1.5'}
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                            />
                            <FormLabel
                                htmlFor={'remember'}>
                                {FIELDS.remember}
                            </FormLabel>
                        </FormItem>
                    )}
                />

                <Button
                    className={STYLES.button}
                    type={'submit'}
                >
                    {BUTTONS.login}
                </Button>

                {error &&
                    <Error error={error}/>
                }
            </form>
        </Form>
    )
}

export default LoginForm
