import {Form} from '@/components/ui/form.tsx'
import {Button} from '@/components/ui/button.tsx'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import FormInput from '@/components/shared/form/FormInput.tsx'
import {EmailInputSchema, emailInputSchema} from '@/validations/forms/emailInputSchema.ts'
import {Link} from '@tanstack/react-router'
import {BUTTONS} from '@/constants/plainTexts.ts'
import STYLES from '@/lib/styles'

const ForgotPasswordForm = ({}) => {
    const form = useForm<EmailInputSchema>({
        resolver: zodResolver(emailInputSchema),
        defaultValues: {
            email: ''
        }
    })

    const onSubmit = (values: EmailInputSchema) => {
        // TODO: Add logic
        console.log(values)
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
                    className={'border-blue-200'}
                />

                <Button
                    className={STYLES.button}
                    type={'submit'}>
                    {BUTTONS.resetPassword}
                </Button>

                <Button
                    className={STYLES.outlineButton}
                    type={'button'}
                    variant={'outline'}
                >
                    <Link to={'/login'}>
                        {BUTTONS.backToLogin}
                    </Link>
                </Button>
            </form>
        </Form>
    )
}

export default ForgotPasswordForm
