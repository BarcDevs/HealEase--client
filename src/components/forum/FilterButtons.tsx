import {Filter} from '@/data/forum/filters.ts'
import {Link} from '@tanstack/react-router'
import {Badge} from '@/components/ui/badge.tsx'

const FilterButtons = ({}) => (
    <section className={'flex-row-start gap-3 p-3'}>
        {Object.values(Filter).map(filter => (
            <Link key={filter} to={'/forum'}
                  search={search => ({...search, filter})}
                  className={'flex-center'}>
                <Badge className={'rounded-md border-none px-4 py-2 capitalize'}>
                    {filter}
                </Badge>
            </Link>
        ))}
    </section>
)


export default FilterButtons
