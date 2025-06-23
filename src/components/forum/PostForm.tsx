import {Form} from '@/components/ui/form.tsx'
import {useForm} from 'react-hook-form'
import {postSchema, PostSchema} from '@/validations/forms/postSchema.ts'
import {zodResolver} from '@hookform/resolvers/zod'
import FormInput from '@/components/shared/form/FormInput.tsx'
import TagInput from '@/components/shared/form/TagInput.tsx'
import schemaConfig from '@/config/schema/postForm.ts'
import {getRouteApi, useNavigate} from '@tanstack/react-router'
import {Button} from '@/components/ui/button.tsx'
import {submitForm} from '@/handlers/actions/forum.ts'
import SelectInput from '@/components/shared/form/SelectInput.tsx'
import categories from '@/data/forum/categories.ts'
import {isPostData} from '@/lib/isPostData.ts'
import {BUTTONS} from '@/constants/plainTexts.ts'
import {useState} from 'react'
import {AxiosError} from 'axios'
import STYLES from '@/lib/styles.ts'
import {twMerge} from 'tailwind-merge'
import {HEADLINES} from '@/constants/headlines.ts'

type PostFormProps = {
    type: 'create' | 'edit'
}

const route = getRouteApi('/_forum/forum/posts/$postId/edit')

const PostForm = ({type}: PostFormProps) => {
    const navigate = useNavigate()
    const oldData = type === 'edit' ? route.useLoaderData() : undefined
    const [error, setError] = useState('')

    const form = useForm<PostSchema>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            category: '',
            title: '',
            body: '',
            tags: []
        },
        values: oldData && isPostData(oldData) ? {
            category: oldData.category,
            title: oldData.title,
            body: oldData.body,
            tags: [...oldData.tags.map(tag => tag.name)]
        } : undefined
    })

    const onSubmit = async (values: PostSchema) => {
        setError('')

        try {
            const res = await submitForm(values, (oldData as any)?.id)

            if (res.data) navigate({
                to: '/forum/posts/$postId',
                params: {postId: res.data.id}
            })
        } catch (err) {
            (err as AxiosError).status === 401 ?
                setError('You are not authorized to perform this action') :
                setError(
                    (err as any).response?.data?.message ||
                    (err as Error).message)
        }
    }

    return (
        <div className={'flex--col gap-6'}>
            <h3 className={'text-3xl font-bold'}>
                {type === 'create' ?
                    HEADLINES.createPost :
                    HEADLINES.editPost}
            </h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={'flex--col gap-4'}>
                    <SelectInput
                        name={'category'}
                        label={'Category'}
                        placeholder={'Select a category'}
                        formControl={form.control}
                        className={'w-1/4 border-blue-200'}
                        values={Object.values(categories)
                            .reduce((acc, category) => {
                                acc[category.key] = category.name
                                return acc
                            }, {} as Record<string, string>)
                        }
                    />

                    <FormInput
                        name={'title'}
                        formControl={form.control}
                        label={'Title'}
                        placeholder={'Add a title'}
                        className={'border-blue-200'}
                    />

                    <FormInput
                        name={'body'}
                        formControl={form.control}
                        label={'Text'}
                        type={'editor'}
                        placeholder={'Add your content here'}
                    />

                    <TagInput
                        name={'tags'}
                        formControl={form.control}
                        label={'Tags'}
                        placeholder={'Add tags'}
                        max={schemaConfig.tags.max}
                        className={'border-blue-200'}
                    />

                    {error &&
                        <p className={'mt-2 text-sm font-semibold text-red-500'}>
                            {error}
                        </p>}

                    <div className={'flex--row mt-6 justify-end gap-4'}>
                        <Button
                            type={'submit'}
                            className={twMerge(STYLES.button, 'w-fit')}
                        >
                            {type === 'create' ?
                                BUTTONS.createPost :
                                BUTTONS.updatePost}
                        </Button>
                        {type === 'edit' &&
                            <Button
                                type={'button'}
                                className={'bg-red-500 text-white'}
                            >
                                {BUTTONS.deletePost}
                            </Button>}
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default PostForm
