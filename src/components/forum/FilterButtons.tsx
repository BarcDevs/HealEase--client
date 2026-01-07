import {twMerge} from 'tailwind-merge'

import {getRouteApi, Link} from '@tanstack/react-router'

import {Badge} from '@/components/ui/badge.tsx'

import STYLES from '@/lib/styles.ts'

import {Filter} from '@/constants/filter.ts'

const route = getRouteApi('/_forum/forum/')

const FilterButtons = ({}) => {
    const search = route.useSearch()
    const selectedFilter = ('filter' in search ? search.filter : '') as string

    return (
        <section className={'flex-row-start gap-3 p-3'}>
            {Object.values(Filter).map(filter => (
                <Link key={filter} to={'/forum'}
                      search={search => ({...search, filter})}
                      className={'flex-center'}
                      disabled={filter?.includes(selectedFilter)}>
                    <Badge className={twMerge(
                        filter?.includes(selectedFilter) ?
                            STYLES.badge :
                            STYLES.badgeHover,
                        'from-blue-500 to-blue-600',
                        'capitalize',
                        filter?.includes(selectedFilter) && 'from-blue-800 to-blue-900'
                    )}>
                        {filter}
                    </Badge>
                </Link>
            ))}
        </section>
    )
}

export default FilterButtons
