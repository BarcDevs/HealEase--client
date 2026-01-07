import {Activity, BarChart2, MessageSquare, Users} from 'lucide-react'

const FEATURES = [
    {
        icon: MessageSquare,
        title: 'Forum',
        description: 'Share, learn, and connect with others in similar recovery journeys.'
    },
    {
        icon: Activity,
        title: 'AI Recovery Support',
        description: 'Receive smart, structured plans tailored to your injury.'
    },
    {
        icon: Users,
        title: 'Live Chat',
        description: 'Talk directly with peers or personal supporters in real-time.'
    },
    {
        icon: BarChart2,
        title: 'Progress Tracking',
        description: 'Monitor your healing and celebrate milestones.'
    }
]

const BENEFITS = [
    {
        title: 'For Patients',
        description: 'Faster, more supported recovery with real guidance.',
        gradient: 'from-blue-500 to-blue-600'
    },
    {
        title: 'For Community',
        description: 'Find people who truly understand your experience.',
        gradient: 'from-green-500 to-green-600'
    },
    {
        title: 'For Simplicity',
        description: 'No complexity, just real help – anytime, anywhere.',
        gradient: 'from-purple-500 to-purple-600'
    }
]

const NAV_LINKS = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Forum',
        href: '/forum'
    },
    {
        homepageLink: true,
        title: 'Features',
        href: '/#features'
    },
    {
        homepageLink: true,
        title: 'Benefits',
        href: '/#benefits'
    },
    {
        homepageLink: true,
        title: 'About',
        href: '/#about'
    }
]

const FOOTER_LINKS = {
    quick: [
        {
            title: 'About',
            href: '/about'
        },
        {
            title: 'Contact',
            href: '/contact'
        },
        {
            title: 'Support',
            href: '/support'
        }
    ],
    legal: [
        {
            title: 'Terms',
            href: '/terms'
        },
        {
            title: 'Privacy',
            href: '/privacy'
        },
        {
            title: 'Cookies',
            href: '/cookies'
        }
    ]
}

const SOCIAL_LINKS = [
    {
        title: 'Facebook',
        href: 'https://www.facebook.com/HealEase-109044114129580'
    },
    {
        title: 'X',
        href: 'https://www.instagram.com/healease.co/'
    },
    {
        title: 'linkedin',
        href: 'https://www.linkedin.com/company/healease/'
    }
]

export {
    BENEFITS,
    FEATURES,
    FOOTER_LINKS,
    NAV_LINKS,
    SOCIAL_LINKS
}
