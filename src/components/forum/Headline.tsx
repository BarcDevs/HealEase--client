import {Link} from '@tanstack/react-router'

import {Badge} from '@/components/ui/badge.tsx'

import STYLES from '@/lib/styles.ts'

import {BUTTONS} from '@/constants/plainTexts.ts'

type HeadlineProps = {
    title: string
    createPost?: boolean
}

const Headline = ({title, createPost}: HeadlineProps) => (
    <section className={'flex-row-between w-full p-3 sm:p-5'}>
        <h3 className={'text-3xl font-bold'}>
            {title}
        </h3>
        {createPost &&
            <Link to={'/forum/posts/create'}>
                <Badge className={STYLES.badgeHover}>
                    {BUTTONS.createPost}
                </Badge>
            </Link>}
    </section>
)

export default Headline
