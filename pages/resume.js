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

export default function Resume() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Jen Fitch - Résumé</title>
                <meta name="description" content="Résumé" />
                <link rel="icon" href="/images/favicon.ico" />
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
                    Résumé
                </h1>
                <p><a href={"/pdf/jenniferFitch_resume.pdf"}>Download PDF</a></p>
                <Link href="/pdf/jenniferFitch_resume.pdf">
                    <a>
                        <Image
                            src="/images/resume-image.jpg"
                            alt="Image of Resume"
                            width={1600*.7}
                            height={2071*.7}
                        />
                    </a>
                </Link>
            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
