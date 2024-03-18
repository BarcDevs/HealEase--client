import {Link} from '@tanstack/react-router'
import {Badge} from '@/components/ui/badge.tsx'
import {Tag as TagType} from '@/types/forum'

type RenderTagProps = {
    showCount?: boolean
    tag: TagType
}

const Tag = ({tag: {_id, name, posts}, showCount}: RenderTagProps) => (
    <Link
        to={'/forum/tags/$tagId'}
        params={{tagId: _id}}
        className={'flex justify-between gap-2'}
        key={name}>
        <Badge
            className={'subtle-medium rounded-md border-none px-4 py-2 uppercase'}>
            {name}
        </Badge>

        {showCount && (
            <p className={'small-medium'}>
                {posts.length}
            </p>
        )}
    </Link>
)


export default Tag