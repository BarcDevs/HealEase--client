import {Link} from '@tanstack/react-router'
import {Badge} from '@/components/ui/badge.tsx'
import {Tag as TagType} from '@/types/forum.ts'

type RenderTagProps = {
    showCount?: boolean
    tag: TagType
}

const Tag = ({tag: {id, name, posts}, showCount}: RenderTagProps) => (
    <Link
        to={'/forum/'}
        search={{tag: id}}
        className={'flex justify-between gap-2'}
        key={name}>
        <Badge
            className={'rounded-md border-none px-4 py-2 uppercase'}>
            {name}
        </Badge>

        {showCount && (
            <p className={''}>
                {posts.length}
            </p>
        )}
    </Link>
)


export default Tag
