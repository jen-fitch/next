import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'

const menu = [
    { title: 'Portfolio', path: '/' },
    { title: 'Résumé', path: '/resume' },
    { title: 'Philosophy', path: '/philosophy' },
]

export default function Philosophy() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Jenifer Fitch - Philosophy</title>
                <meta name="description" content="Philosophy" />
            </Head>

            <div className={`${Layout.nav_wrap}`}>
                <nav className={Page.main}>
                    {menu.map((item, index) => {
                        return (
                            <Link key={index} href={item.path}>
                                <a
                                    className={`nav-item ${
                                        router.pathname === item.path
                                            ? 'active'
                                            : ''
                                    }`}
                                >
                                    {item.title}
                                </a>
                            </Link>
                        )
                    })}
                </nav>
            </div>

            <header className={`${Layout.logo_wrap}`}>
                <div className={Page.logo}>
                    <Link href="/">
                        <a>
                            <Image
                                src="/images/logo.png"
                                alt="J.Fitch Logo"
                                width={377*.5}
                                height={92*.5}
                            />
                        </a>
                    </Link>
                </div>
                <p className={Page.about}>
                    {' '}
                    <Link href="tel:17076316934">
                        <a>(707) 631-6934</a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                    {' '}
                    <Link href="mailto:jenfitch4@gmail.com">
                        <a>jenfitch4@gmail.com</a>
                    </Link>

                </p>
            </header>
            <main className={Layout.main}>
                <h1 className={Page.title}>
                    Philosophy
                </h1>
                <p>Honest design is the basis for a positive experience.</p>

                <p>I am passionate about design for many reasons but one important concept is that good organization makes life easier to live and often more pleasurable. If I can help organize a user experience to make someone’s day a bit easier I believe that is a success. And helping 100&apos;s or 1000&apos;s of people have a better experience on a website is a great achievement! With research, good design, and time spent polishing content, I can make websites a more pleasurable experience.</p>
                <p>Building pleasurable experiences reflects positively on a brand, product, or company’s reputation. That pleasure is interpreted by the viewer as caring which translates to caring about your customer (them). Successful websites must start with understand the audience and this is done first by caring about them, their time, and their needs.</p>
                <p><strong>This is the basis for why I design. Caring. Compassion. Pleasure.</strong> The core of usability these qualities create trust and a positive relationship with your user. It make them want to come back and seek your services again, helps them to know that you are on their side, and that you will be there to help them. This builds loyalty. Honesty builds loyalty. Design that promotes honesty also builds loyalty. Therefore, the root of good design is honesty.</p>
                <p>I have a natural instinct and passion for organizing things. When I was a child I remember organizing my stuffed animals into groups and putting them very neatly on my shelves. I often also like to change the organization just to get a fresh look at them all. Then in my 20’s I worked as a visual merchandiser at a music store in SF which re-emphasized my passion for organizing things and added the layer of doing it to benefit the aesthetics of the store and also make it easy for people to navigate the store and find what they were looking for. This was my unknown introduction to way finding and usability. Then I made some musician friends and started doing graphics for them and helping with merchandising at their shows. This was the start of design freelance business which I still am doing a bit of today. In my late 20’s I started design school at the Academy of Art where I earned my BFA in Web Design & New media. Since graduating, I have been designing websites for Humboldt State University.</p>
                <p>My passion for web design is built our of the desire to making things simple, easy to use, and visually appealing.</p>
                <p>On a personal level, meeting and getting to know new people is something that feeds my soul. I enjoy learning about people’s individual journeys and try to enmesh myself with how they perceive the world. Each person has a different way of looking at things as a result of their life experiences and predispositions. Getting to know clients helps me to identify their needs and work with them to find solutions for their projects.</p>
                <p><a href={"/resume"}>View Jen&apos;s resume</a></p>
                <Link href="tel:17076316934">
                    <a>(707) 631-6934</a>
                </Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                {' '}
                <Link href="mailto:jenfitch4@gmail.com">
                    <a>jenfitch4@gmail.com</a>
                </Link>
            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
