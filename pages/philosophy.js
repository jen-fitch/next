import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'

const menu = [
    { title: 'Portfolio', path: '/' },
    { title: 'Philosophy', path: '/philosophy' },
    { title: 'Résumé', path: '/resume' },
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
                <div className={Layout.row}>
                    <div className={Layout.left}>
                        <h2>Honest Design = Positive Experiences</h2>
                        <p>I am passionate about my job for many reasons but the most important reason is that honest interactions build trust and positive experiences. In turn, this helps my clients meet their needs in a sustainable way and to develop long term relationships with their users.</p>
                        {/*<h2></h2>If I can help make someone (or a thousand someones) day more fluid, I believe that is a success.</p>*/}
                        {/*<p>With research, good design, content organization, and time spent polishing content, I develop websites that solve problems and are easy to understand.</p>*/}
                        <h2>Building Seamless Experiences</h2>
                        <p>A seamless experience reflects positively on a brand or product and helps build a company&apos;s reputation. This indirectly tells the user you care about their needs, respect their time, and know how to solve problems. The majority of an amazing website is invisible to the user and will be subconsciously digested to develop a positive overall experience.</p>
                        <h2>Understanding User&apos;s Needs</h2>
                        <p>Successful websites must start with understanding the audience&apos;s needs and this is done by caring about their experience, valuing their time, and understanding the problems that need to be solved.</p>
                        <h2>Caring. Respect. Problem Solving.</h2>
                        <p>This is the foundation for why I am passionate about user experience design. These qualities create trust and a positive relationships. Design that people trust builds loyalty.</p>
                        {/*<h2>Collaboration</h2>*/}
                        {/*<p>On a personal level, getting to know clients and coworkers is a wonderful adventure. I enjoy learning about people&apos;s needs and enmeshing myself with how they perceive the world. I strive to understand how to meet their needs and pair that with find feasible solutions based on the project&apos;s limitations. Each individual has different life experiences and predispositions which result in different ways of looking at tasks and projects. Getting to know clients helps me with problem solving and building trust with them directly as well.</p>*/}
                    </div>
                    <div className={Layout.right}>
                        <h2>My Beginnings</h2>
                        <p>I have had a natural instinct and passion for organizing things since I was a child. When I was in elementary school I remember organizing my stuffed animals into groups and arranging them very neatly on my shelves. I often also like to change the organization just to get a fresh look and then make a final decision what was the best organization, sometimes putting them back the way they originally were. </p>
                        <p>In my 20&apos;s I worked as a visual merchandiser at a music store in San Francisco (Virgin Mega Store) which re-emphasized my passion for organization and added the extra layer of doing it with purpose! I was able to improve the aesthetics of the store, make it easy for people to find what they were looking for, and increase sales. This was my introduction to the amazing world of wayfinding and usability. </p>
                        <p>While working at the music store, I made a few musician friends and started doing graphics for their bands and helped with merchandising at their shows. This launched my design freelance business, which I still am doing a small amount of today. </p>
                        <p>In my late 20’s I started design school at the Academy of Art where I earned my BFA in Web Design & New media. Since graduating, I have been designing websites for <a href="https://humboldt.edu">Cal Poly Humboldt</a>.</p>
                        <p><strong>My passion for web design is built out of the desire to making things simple, easy to use, and visually appealing.</strong></p>
                    </div>
                </div>

                <div className={Layout.row}>
                    <p><a href={"/resume"}>View Jen&apos;s resume</a></p>
                    <Link href="tel:17076316934">
                        <a>(707) 631-6934</a>
                    </Link>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                    {' '}
                    <Link href="mailto:jenfitch4@gmail.com">
                        <a>jenfitch4@gmail.com</a>
                    </Link>
                </div>
            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
