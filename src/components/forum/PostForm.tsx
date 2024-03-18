import {Form} from '@/components/ui/form.tsx'
import {useForm} from 'react-hook-form'
import {postSchema, PostSchema} from '@/validations/forms/postSchema.ts'
import {zodResolver} from '@hookform/resolvers/zod'
import FormInput from '@/components/shared/form/FormInput.tsx'
import TagInput from '@/components/shared/form/TagInput.tsx'
import schemaConfig from '@/config/schema/postForm.ts'

type PostFormProps = {
    type: 'create' | 'edit'
}

const PostForm = ({type}: PostFormProps) => {
    const form = useForm<PostSchema>({
        resolver: zodResolver(postSchema),
        defaultValues: {
            category: '',
            title: '',
            content: '',
            tags: []
        }
    })

    const onSubmit = (values: PostSchema) => {
        // TODO: Add logic
        console.log(values)
    }

    return (
        <div className={'flex--col gap-6'}>
            <h3 className={'text-3xl font-bold'}>
                {type === 'create' ? 'Create a Post' : 'Edit Post'}
            </h3>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className={'flex--col gap-4'}>
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
                </form>
            </Form>
        </div>
    )
}

export default PostForm
