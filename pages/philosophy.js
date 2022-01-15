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
                    <Link href="mailto:hello@jen-fitch.com">
                        <a>hello@jen-fitch.com</a>
                    </Link>

                </p>
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
