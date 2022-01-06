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

export default function Philosophy() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Jenifer Fitch - Philosophy</title>
                <meta name="description" content="Philosophy" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <header>
                <div className={`${Layout.nav_wrap} ${Layout.nav_sticky}`}>
                    <div className={Page.nav}>
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
                    </div>
                </div>
                <div className={`${Layout.logo_wrap} ${Layout.logo_sticky}`}>
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
            </header>
            <main className={Layout.main}>
                <h1 className={Page.title}>
                    Philosophy
                </h1>




            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
