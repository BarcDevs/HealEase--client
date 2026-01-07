import {useEffect, useState} from 'react'

import {useLocation} from '@tanstack/react-router'

import NavLink from '@/components/layout/root/NavLink.tsx'

import {NAV_LINKS} from '@/constants/componentData.ts'

const Nav = ({}) => {
    const location = useLocation()

    const [isHomePage, setIsHomePage] = useState(location.pathname === '/')

    useEffect(() => {
        setIsHomePage(location.pathname === '/')
    }, [location.pathname])

    return (
        <section className={'flex-center w-full gap-10 px-8'}>{
              NAV_LINKS.map(link =>
                  link.homepageLink && !isHomePage ?
                      null :
                      <NavLink
                          key={link.title}
                          label={link.title}
                          to={link.href}
                          className={'inline-flex-center text-gray-600 transition-colors hover:text-blue-600'}
                      />
              )
          }</section>
    )
}

export default Nav
