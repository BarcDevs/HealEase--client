import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {Form} from '@/components/ui/form.tsx'
import FormInput from '@/components/shared/form/FormInput.tsx'
import {Link, useNavigate} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'
import {SignupSchema, signupSchema} from '@/validations/forms/signupSchema.ts'
import {useAuth} from '@/hooks/useAuth.ts'
import {BUTTONS, FIELDS} from '@/constants/plainTexts.ts'
import STYLES from '@/lib/styles.ts'

const SignupForm = ({}) => {
    const {register} = useAuth()
    const navigate = useNavigate()

    const form = useForm<SignupSchema>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (values: SignupSchema) => {
        register(values)
            .then(() => navigate({
                to: '/login',
                replace: true,
                search: { redirect: '/' }
            }))
            .catch((err) =>
                console.error(err.message || err.response.data
                ))
    }

    return (
        <Form {...form}>
            <form
                className={'space-y-4'}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <div className={'grid grid-cols-2 gap-4'}>
                    <FormInput
                        formControl={form.control}
                        type={'text'}
                        name={'firstName'}
                        label={'First name'}
                        placeholder={'Lee'}
                    />
                    <FormInput
                        formControl={form.control}
                        type={'text'}
                        name={'lastName'}
                        label={'Last name'}
                        placeholder={'Robinson'}
                    />
                </div>
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
                        <Link
                            className={'ml-auto inline-block text-sm font-semibold text-blue-600 underline hover:text-blue-700'}
                            to={'/forgot-password'}
                        >
                            {FIELDS.forgotPassword}
                        </Link>}
                />
                <FormInput
                    formControl={form.control}
                    type={'password'}
                    name={'confirmPassword'}
                    label={'Confirm Password'}
                />
                <Button
                    className={STYLES.button}
                    type={'submit'}
                >
                    {BUTTONS.signUp}
                </Button>
            </form>
        </Form>
    )
}

export default SignupForm
