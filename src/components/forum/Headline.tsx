import {Link} from '@tanstack/react-router'
import {Badge} from '@/components/ui/badge.tsx'


type HeadlineProps = {
    title: string
    createPost?: boolean
}

const Headline = ({title, createPost}: HeadlineProps) => (
    <section className={'flex-row-between w-full p-3 sm:p-5'}>
        <h3 className={'text-3xl font-bold'}>{title}</h3>
        {createPost && <Link to={'/forum/posts/create'}>
            <Badge className={'rounded-md border-none px-4 py-2'}>
            Create Post
            </Badge>
        </Link>}
    </section>
)

export default Headline
