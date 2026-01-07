import {Link} from '@tanstack/react-router'

import {FOOTER_LINKS} from '@/constants/componentData.ts'
import {FOOTER} from '@/constants/plainTexts.ts'

const linkStyle = 'block text-gray-400 transition-colors hover:text-white'

const FooterLinks = ({}) => (
    <>
        <div>
            <h4 className={'mb-4 text-lg font-semibold'}>
                {FOOTER.quickLinks}
            </h4>

            <div className={'space-y-2'}>
                {FOOTER_LINKS.quick.map((link, i) => (
                    <Link
                        key={i}
                        to={link.href}
                        className={linkStyle}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>

        <div>
            <h4 className="mb-4 text-lg font-semibold">
                {FOOTER.legalLinks}
            </h4>
            <div className={'space-y-2'}>
                {FOOTER_LINKS.legal.map((link, i) => (
                    <Link
                        key={i}
                        to={link.href}
                        className={linkStyle}
                    >
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    </>
)

export default FooterLinks
