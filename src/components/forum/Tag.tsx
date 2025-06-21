import {Link} from '@tanstack/react-router'
import {Badge} from '@/components/ui/badge.tsx'
import {PartialTag} from '@/types/forum.ts'
import STYLES from '@/lib/styles.ts'

type RenderTagProps = {
    showCount?: boolean
    tag: PartialTag
}

const Tag = ({tag: {id, name, _count}, showCount}: RenderTagProps) => (
    <Link
        to={'/forum/'}
        search={{tag: id}}
        className={'flex justify-between gap-2'}
        key={name}>
        <Badge
            className={`${STYLES.badge} uppercase`}>
            {name}
        </Badge>

        {showCount && (
            <p className={''}>
                {_count?.posts || 0}
            </p>
        )}
    </Link>
)

export default Tag
