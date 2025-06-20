import {NAV_LINKS} from '@/constants/componentData.ts'
import {Link, useLocation} from '@tanstack/react-router'
import {useEffect, useState} from 'react'

const Nav = ({}) => {
    const location = useLocation()

    const [isHomePage, setIsHomePage] = useState(location.pathname === '/')

    useEffect(() => {
        setIsHomePage(location.pathname === '/')
        console.log(location.pathname)
    }, [location.pathname])

    return (
        <section className={'flex-center w-full gap-10 px-8'}>{
              NAV_LINKS.map(link => {
                      return link.homepageLink && !isHomePage ?
                          null :
                          <Link
                              key={link.title}
                              to={link.href}
                              className={'text-gray-600 transition-colors hover:text-blue-600'}
                          >
                              {link.title}
                          </Link>
                  }
              )
          }</section>
    )
}

export default Nav
