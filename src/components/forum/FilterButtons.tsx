import {Filter} from '@/data/forum/filters.ts'
import {Link} from '@tanstack/react-router'
import {Badge} from '@/components/ui/badge.tsx'

const FilterButtons = ({}) => (
    <section className={'flex-row-start gap-3 p-3'}>
        {Object.entries(Filter).map(([filter, label]) => (
            <Link key={filter} to={'/forum'} params={{filter}} className={'flex-center'}>
                <Badge className={'subtle-medium rounded-md border-none px-4 py-2'}>
                    {label}
                </Badge>
            </Link>
        ))}
    </section>
)


export default FilterButtons
