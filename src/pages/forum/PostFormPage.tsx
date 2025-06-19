import Page from '@/components/shared/ui/Page.tsx'
import PostForm from '@/components/forum/PostForm.tsx'

const PostFormPage = ({type}: { type: 'create' | 'edit' }) => (
    <Page>
        <PostForm type={type}/>
    </Page>
)

export default PostFormPage
