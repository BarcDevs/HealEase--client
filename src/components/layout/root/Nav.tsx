import {NAV_LINKS} from '@/constants/componentData.ts'
import {useLocation} from '@tanstack/react-router'
import {useEffect, useState} from 'react'
import NavLink from '@/components/layout/root/NavLink.tsx'

const Nav = ({}) => {
    const location = useLocation()

    const [isHomePage, setIsHomePage] = useState(location.pathname === '/')

    useEffect(() => {
        setIsHomePage(location.pathname === '/')
    }, [location.pathname])

    return (
        <section className={'flex-center w-full gap-10 px-8'}>{
              NAV_LINKS.map(link => {
                      return link.homepageLink && !isHomePage ?
                          null :
                          <NavLink
                              key={link.title}
                              label={link.title}
                              to={link.href}
                              className={'text-gray-600 transition-colors hover:text-blue-600'}
                          />
                  }
              )
          }</section>
    )
}

export default Nav
