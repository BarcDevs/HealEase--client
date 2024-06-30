import {groupedCategories} from '@/data/forum/categories.ts'
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion.tsx'
import {Link} from '@tanstack/react-router'
import {ForumSearchParams} from '@/types/router.ts'
import {Filter} from '@/constants/filter.ts'

const LeftSidebar = ({}) => {
    const categoryGroups = Object.keys(groupedCategories)

    return (
        <aside
            className={'flex--col sticky top-0 min-h-screen w-64 overflow-y-auto border-gray-200 p-4 ltr:left-0 ltr:border-r rtl:right-0 rtl:border-l'}>
            <nav className={'flex--col gap-4'}>
                <Accordion type={'single'} collapsible>
                    <AccordionItem value={'all'}>
                        <Link to={'/forum'}
                              className={'flex flex-1 items-center justify-between py-4 font-bold'}>
                            <p>All Posts</p>
                        </Link>
                    </AccordionItem>
                    {categoryGroups.map(group => (
                        <AccordionItem key={group} value={group}>
                            <AccordionTrigger className={'font-bold hover:no-underline'}>
                                {group}
                            </AccordionTrigger>
                            {
                                groupedCategories[group]?.map(category => (
                                    <AccordionContent
                                        key={category.key}
                                    >
                                        <Link to={'/forum'}
                                              search={search => ({
                                                  ...search,
                                                  category: category.key,
                                                  filter:
                                                      (search as ForumSearchParams).filter ?? Filter.newest
                                              })}
                                        >
                                            {category.name}
                                        </Link>
                                    </AccordionContent>
                                ))
                            }
                        </AccordionItem>
                    ))}
                </Accordion>
            </nav>
        </aside>
    )
}

export default LeftSidebar
