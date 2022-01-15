import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'
import Cards from '../styles/Cards.module.css'

const menu = [
    { title: 'Portfolio', path: '/' },
    { title: 'Résumé', path: '/resume' },
    { title: 'Philosophy', path: '/philosophy' },
]

export default function Portfolio() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>J.Fitch - Portfolio</title>
                <meta name="description" content="Portfolio" />
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
                    <Link href="mailto:hello@jen-fitch.com">
                        <a>hello@jen-fitch.com</a>
                    </Link>

                </p>
            </header>
            <main className={Layout.main}>

                <div className={Layout.intro}>
                    <h1 className={Page.title}>
                        Websites
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
                <div className={Cards.grid}>
                    <div className={Cards.card}>
                        <Link href="/portfolio/academictheme" passHref>
                            <Image
                                src="/images/portfolio/depttheme.jpg"
                                alt="screenshots of website and colorpalette"
                                width={500}
                                height={250}
                                className={"pointer"}
                            />
                        </Link>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Academic Department Themes</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7 (OpenHSU)</strong><br/>
                                Site structure template<br/>
                                Homepage design & template<br/>
                                Three color palettes<br/>
                                Organizing content for each site<br/>
                                Collaborating with content creators<br />
                                Photo research and choices<br/>
                                Content types & views
                            </p>
                            <p className={Cards.text}>
                                <a href="#">List of all Websites</a><br/><br/>
                                <strong>Design:</strong> <a href="#">Academic Theme - Figma</a><br/>
                                <strong>Case Study:</strong> <a href="#">Academic Theme</a>
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://www.humboldtlandman.com/">
                            <Image
                                src="/images/portfolio/landman2.jpg"
                                alt="Land Man logo with a forest behind it"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>The Land Man Office</h2>
                            <p className={Cards.text}>
                                <strong>Wordpress</strong><br/>
                                Figma full site design<br/>
                                Theme built on <Link href="https://understrap.com/"><a>Understrap</a></Link><br/>
                                Organizing content<br/>
                                MLS & custom real estate listings<br/>
                                Agent post type
                            </p>
                            <p className={Cards.text}>
                                <a href="https://www.humboldtlandman.com/">humboldtlandman.com</a><br/><br/>
                                <strong>Design:</strong> <a href="https://www.figma.com/proto/f0odyM3HbwfkmmKpm0JyPS/website?node-id=1%3A1028&viewport=823%2C182%2C0.125&scaling=min-zoom">Land Man - Figma</a><br/>
                                <strong>Case Study:</strong> <a href="#">The Land Man Office</a>
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://impact.humboldt.edu/">
                            <Image
                                src="/images/portfolio/impact2.jpg"
                                alt="Humboldt State Impact Report - with arial photo of university"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Economic Impact Report</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7 (OpenHSU)</strong><br/>
                                Figma homepage layout<br/>
                                Complex report design<br/>
                                Photo research & selection
                            </p>
                            <p className={Cards.text}>
                                <a href="https://impact.humboldt.edu/">impact.humboldt.edu</a><br/><br/>
                                <strong>Design:</strong> <a href="https://www.figma.com/proto/VAic44leZYZcW1nLaDXY9T/impact.humboldt.edu?page-id=63%3A2&node-id=63%3A3&viewport=241%2C48%2C0.12&scaling=scale-down">Economic Impact - Figma</a><br/>
                                <strong>Case Study:</strong> <a href="#">Economic Impact Report</a>
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://registrar.humboldt.edu/">
                            <Image
                                src="/images/portfolio/registrar2.jpg"
                                alt="Two students sitting in front of a computer in a classroom"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Office of the Registrar</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7 (OpenHSU)</strong><br/>
                                Figma homepage layout<br/>
                                Organizing content<br/>
                                Gathering & migrating content<br/>
                                Content types & views<br/>
                                Photo research & selection<br/>
                            </p>
                            <p className={Cards.text}>
                                <a href="https://registrar.humboldt.edu/">registrar.humboldt.edu</a><br/><br/>
                                <strong>Sitemap & Design:</strong> <a href="https://www.figma.com/proto/PK4yKE34iPOCtcuGCQhS3f/registrar.humboldt.edu?page-id=0%3A1&node-id=146%3A186&viewport=241%2C48%2C0.08&scaling=min-zoom">Registrar - Figma</a>
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://www.jewelldistillery.com/">
                            <Image
                                src="/images/portfolio/jewell2.jpg"
                                alt="Michael standing in front of his still"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Jewell Distillery</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 8</strong><br/>
                                Figma full site design<br/>
                                Bootstrap child theme<br/>
                                Organizing content<br/>
                                Assistance with graphics<br/>
                                Product photography<br/>
                                Content types & views
                            </p>
                            <p className={Cards.text}>
                                <a href="https://www.jewelldistillery.com/">jewelldistillery.com</a><br/><br/>
                                <strong>Design:</strong> <a href="https://www.figma.com/proto/0wwHgCMoBv39HXw3Tlf3xnOH/JD-Website-Mockup?node-id=106%3A2&viewport=140%2C238%2C0.1249595358967781&scaling=min-zoom">Jewell Distillery - Figma</a>
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://gettingtocollege.humboldt.edu">
                            <Image
                                src="/images/portfolio/gtc2.jpg"
                                alt="blocks of grade levels 6, 7, 8, 9, 10, 11, 12"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Getting to College</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7 (OpenHSU)</strong><br/>
                                Figma homepage design<br/>
                                Checklist design<br/>
                                Organizing content<br/>
                                Assistance with graphics<br/>
                                Content types & views
                            </p>
                            <p className={Cards.text}>
                                <a href="https://gettingtocollege.humboldt.edu">gettingtocollege.humboldt.edu</a><br/><br/>
                                <strong>Design:</strong> <a href="#">Getting to College - Figma</a><br/>
                                {/*<strong>Case Study:</strong> <a href="#">Getting to College</a>*/}
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://natmus.humboldt.edu/">
                            <Image
                                src="/images/portfolio/natmus2.jpg"
                                alt="Natural History Museum"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Natural History Museum</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7 (OpenHSU)</strong><br/>
                                Figma homepage design<br/>
                                Organizing content<br/>
                                Gathering & migrating content<br/>
                                Content types & views<br/>
                                Special exhibit sub-site
                            </p>
                            <p className={Cards.text}>
                                <a href="https://natmus.humboldt.edu/">natmus.humboldt.edu</a><br/><br/>
                                <strong>Wireframe & Colors:</strong><br/><a href="https://www.figma.com/proto/OtgyU1WvGgXviuDTm0gPqg/natmus.humboldt.edu?node-id=26%3A0&viewport=649%2C910%2C0.2332824468612671&scaling=min-zoom&page-id=0%3A1">Natural History Museum - Figma</a>
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://jmcktaxes.com/">
                            <Image
                                src="/images/portfolio/jmck2.jpg"
                                alt="Jessica McKnight logo with the ocean view behind it"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Jessica McKnight - Tax Consultant</h2>
                            <p className={Cards.text}>
                                <strong>Wordpress</strong><br/>
                                Figma full site design<br/>
                                Theme built on <Link href="https://understrap.com/"><a>Understrap</a></Link><br/>
                                Organizing content<br/>
                                Color exploration<br/>
                                Photography<br/>
                                Resources post type
                            </p>
                            <p className={Cards.text}>
                                <a href="https://jmcktaxes.com/">jmcktaxes.com</a><br/><br/>
                                <strong>Colors:</strong> <a href="https://www.figma.com/proto/DbAMKbrf8V9oogPKtm1lTo/Jessica-McKnight?node-id=82%3A299&viewport=749%2C439%2C0.06971913576126099&scaling=min-zoom">JMCK - Figma (colors)</a><br/>
                                <strong>Design:</strong> <a href="https://www.figma.com/proto/DbAMKbrf8V9oogPKtm1lTo/Jessica-McKnight?node-id=163%3A63&viewport=1314%2C1040%2C0.12526367604732513&scaling=min-zoom">JMCK - Figma</a><br/>
                                {/*<strong>Case Study:</strong> <a href="#">Jessica McKnight</a>*/}
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://talentsearch.humboldt.edu">
                            <Image
                                src="/images/portfolio/trio.jpg"
                                alt="screenshot of the talent search website"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Trio Talent Search</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7 (OpenHSU)</strong><br/>
                                Color Palette<br/>
                                Figma homepage design<br/>
                                Organizing content<br/>
                                Assistance with graphics<br/>
                                Product photography<br/>
                                Content types & views
                            </p>
                            <p className={Cards.text}>
                                <a href="#">talentsearch.humboldt.edu</a><br/><br/>
                                <strong>Design:</strong> <a href="#">Talent Search - Figma</a><br/>
                                {/*<strong>Case Study:</strong> <a href="#">Talent Search</a>*/}
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <a href="https://kamome.humboldt.edu/">
                            <Image
                                src="/images/portfolio/kamome2.jpg"
                                alt="kids holding it up a tsunami boat - illustration"
                                width={500}
                                height={250}
                            />
                        </a>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>The Extraordinary Voyage of Kamome</h2>
                            <p className={Cards.text}>
                                <strong>Drupal 7</strong><br/>
                                Theme building<br/>
                                Organizing content<br/>
                                Gathering content<br/>
                                Online reading experience<br/>
                                Content types & views
                            </p>
                            <p className={Cards.text}>
                                <a href="https://kamome.humboldt.edu/">kamome.humboldt.edu</a>
                            </p>
                        </div>
                    </div>
                    <div className={Cards.card}>
                        <Link href="/portfolio/bellathese" passHref>
                            <Image
                                src="/images/portfolio/bellathese2.jpg"
                                alt="Bella TheSe Logo"
                                width={500}
                                height={250}
                                className={"pointer"}
                            />
                        </Link>
                        <div className={Cards.info}>
                            <h2 className={Cards.title}>Bella TheSe Day Spa</h2>
                            <p className={Cards.text}>
                                <strong>Wordpress</strong><br/>
                                Figma full site design<br/>
                                Theme built on <Link href="https://understrap.com/"><a>Understrap</a></Link><br/>
                                Organizing content<br/>
                                Guidance on photography<br/>
                                Logo design<br/>
                                Business cards &amp; brochures
                            </p>
                            <p className={Cards.text}>
                                <a href="https://bellathese.com">bellathese.com</a><br/><br/>
                                <strong>Design:</strong> <a href="https://www.figma.com/proto/mBPvZZoqRYncyQhjyRwcsf/Website-Design?node-id=163%3A63&viewport=1428%2C854%2C0.1617431342601776&scaling=min-zoom">Day Spa - Figma</a>
                            </p>
                        </div>
                    </div>

                </div>
            </main>

            <footer className={Layout.footer}>
                {' '}
                <Link href="https://www.linkedin.com/in/jeniferfitch/">
                    <a>LinkedIn Profile</a>
                </Link>
            </footer>
        </div>
    )
}
