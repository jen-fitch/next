import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'
import Components from '../styles/Components.module.css'

const menu = [
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Résumé', path: '/resume' },
    { title: 'Philosophy', path: '/philosophy' },
]

export default function Home() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Jen&apos;s Portfolio - About</title>
                <meta name="description" content="About portfolio" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <header>
                <div className={Layout.logo_wrap}>
                    <div className={Page.logo}>
                        <Link href="/">
                            <a>
                                <Image
                                    src="/images/logo.png"
                                    alt="Jenifer Fitch Logo"
                                    width={377*.5}
                                    height={92*.5}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={Page.about}>
                        {' '}
                        <Link href="tel:17076316934">
                            <a>(707) 631-6934</a>
                        </Link>
                    </div>
                    <div className={Page.about}>
                        {' '}
                        <Link href="mailto:contact@jeniferfitch.com">
                            <a>contact@jeniferfitch.com</a>
                        </Link>
                    </div>
                    <div className={Page.about}>
                        {' '}
                        <Link href="https://www.linkedin.com/in/jeniferfitch/">
                            <a>LinkedIn Profile</a>
                        </Link>
                    </div>


                </div>
                <div className={Layout.nav_wrap}>
                    <ul className={Page.nav}>
                        {menu.map((item, index) => {
                            return (
                                    <Link key={index} href={item.path}>
                                        <li>
                                            <a
                                            className={`nav-item ${
                                                router.pathname === item.path
                                                    ? 'active'
                                                    : ''
                                                }`}
                                            >
                                                {item.title}
                                            </a>
                                        </li>
                                    </Link>

                            )
                        })}
                    </ul>
                </div>

            </header>
            <main className={Layout.main}>

                <div className={Layout.content_wrap}>

                    <h1 className={Page.title}>
                        About
                    </h1>
                    <p>At Humboldt State University I research, organize, design, and build websites using Figma, Drupal, and Pantheon.</p>
                    <p>I also do freelance under the name&nbsp;
                        <Link href="https://studio1062.com">
                            <a>Studio 1062</a>
                        </Link>
                        , where I research, organize, design, and build websites using Figma, Wordpress, and Pantheon.</p>

                    <h2>Education</h2>
                    <p>In 2015 I graduated from the&nbsp;
                        {""}
                        <Link href="https://www.academyart.edu/">
                            <a>Academy of Art University, San Francisco</a>
                        </Link>
                        &nbsp;with a BFA in Web Design & New Media.</p>

                    <p>An excerpt from AAU:<br/>
                        &quot;The School of Web Design & New Media provides in depth study of web & interactive design, visual design for new media, motion graphics, font design, audio creation and video production. The program emphasizes a professional, multidisciplinary approach to design and problem-solving.&quot;</p>
                    {""}
                    <Link href="/pdf/aau_bfa_curriculum_8-06.pdf">
                        <a>View a PDF of the Courses</a>
                    </Link>
                    <p>This degree gave me a foundation in design concepts & principals, visual design strategies, user experience design, typography design, the basic of web design, and motion graphics. <br/>My favorite classes were (… list favorite classes).</p>

                </div>
            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
