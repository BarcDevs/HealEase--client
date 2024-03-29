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

type PostFormProps = {
    type: 'create' | 'edit'
}

const route = getRouteApi('/_forum/forum/posts/$postId/edit')

const PostForm = ({type}: PostFormProps) => {
    const navigate = useNavigate()
    const oldData = type === 'edit' ? route.useLoaderData() : undefined

    const form = useForm<PostSchema>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            category: '',
            title: '',
            content: '',
            tags: []
        },
        values: oldData ? {
            category: oldData.category,
            title: oldData.title,
            content: oldData.body,
            tags: [...oldData.tags.map(tag => tag.name)]
        } : undefined
    })

    const onSubmit = (values: PostSchema) => {
            submitForm(values, oldData?.id)
                .then(({data}) => navigate({
                    to: '/forum/posts/$postId',
                    params: {postId: data.id},
                }))
                .catch(err => console.log(err.response.data))
    }

    return (
        <div className={'flex--col gap-6'}>
            <h3 className={'text-3xl font-bold'}>
                {type === 'create' ? 'Create a Post' : 'Edit Post'}
            </h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={'flex--col gap-4'}>
                    <SelectInput
                        name={'category'}
                        label={'Category'}
                        placeholder={'Select a category'}
                        formControl={form.control}
                        className={'w-1/4'}
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
                    />
                    <FormInput
                        name={'content'}
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
                    />
                    <div className={'flex--row mt-6 justify-end gap-4'}>
                        <Button type={'submit'}>
                            {type === 'create' ? 'Create Post' : 'Update Post'}
                        </Button>
                        {type === 'edit' &&
                            <Button type={'button'} className={'bg-red-500 text-white'}>
                                Delete Post
                            </Button>}
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default PostForm
