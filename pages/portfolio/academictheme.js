import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../styles/Layout.module.css'
import Page from '../../styles/Page.module.css'
import Components from '../../styles/Cards.module.css'

const menu = [
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Résumé', path: '/resume' },
    { title: 'Philosophy', path: '/philosophy' },
]

export default function Bellathese() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>J. Fitch - Case Study: Academic Department Themes</title>
                <meta name="description" content="Case Study: Academic Department Themes" />

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

                <div className={Layout.intro}>
                    <h1 className={Page.title}>
                        Academic Department Themes
                    </h1>

                    <p className={Page.description}>
                        Designed with {' '}
                        <Link href="https://www.figma.com/">
                            <a>Figma</a>
                        </Link>, built with {' '}
                        <Link href="https://drupal.org/">
                            <a>Drupal</a>
                        </Link> or {' '}
                        <Link href="https://wordpress.org/">
                            <a>Wordpress</a>
                        </Link>, and hosted on {' '}
                        <Link href="https://pantheon.io/">
                            <a>Pantheon</a>
                        </Link>
                    </p>
                </div>

                <div className={Layout.grid}>
                    <div className={Components.detail_section}>

                        <Image
                            src="/images/portfolio/depttheme.jpg"
                            alt="Academic Department Themes"
                            width={500}
                            height={250}
                        />
                    </div>
                    <div className={Components.detail_section}>
                        <h2 className={Components.title}>Wordpress</h2>
                        <p className={Components.text}>
                            Custom design &amp; theme<br/>
                            Content organization<br/>
                            Guidance on photography<br/>
                            Logo design<br/>
                            Business cards &amp; brochures

                        </p>
                    </div>
                    <div className={Components.detail_section}>
                        <p>Nam lacinia augue vel congue varius. Nulla facilisi. Sed dapibus urna dignissim, auctor eros eu, interdum metus. Sed iaculis massa ut iaculis rhoncus. Morbi tincidunt euismod odio, in malesuada odio consectetur et. Ut dapibus felis arcu, non ullamcorper eros facilisis quis. Morbi mauris lorem, consequat et fringilla eget, laoreet sit amet neque. Proin elementum cursus nisi. Aliquam eu vestibulum sem.<br />
                        </p>
                        <p className={Components.text}>
                            <a href="https://bellathese.com">bellathese.com</a><br/>
                            <a href="https://www.figma.com/proto/mBPvZZoqRYncyQhjyRwcsf/Website-Design?node-id=163%3A63&viewport=1428%2C854%2C0.1617431342601776&scaling=min-zoom">Design Mockup</a>
                        </p>
                    </div>
                    <div className={Components.detail_section}>
                        cnrs.humboldt.edu<br/>
                        environment.humboldt.edu<br/>
                        biosci.humboldt.edu<br/>
                        computerscience.humboldt.edu<br/>
                        fisheries.humboldt.edu<br/>
                        fwr.humboldt.edu<br/>
                        geology.humboldt.edu<br/>
                        math.humboldt.edu<br/>
                        oceanography.humboldt.edu<br/>
                        wildlife.humboldt.edu<br/>
                        nursing.humboldt.edu<br/>
                        english.humboldt.edu<br/>
                        education.humboldt.edu


                    </div>



                </div>
            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
