import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../styles/Layout.module.css'
import Page from '../../styles/Page.module.css'
import Components from '../../styles/Components.module.css'

const menu = [
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Résumé', path: '/resume' },
    { title: 'Philosophy', path: '/philosophy' },
]

export default function Portfolio() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Jenifer Fitch - Portfolio test</title>
                <meta name="description" content="Portfolio" />
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

                <div className={Layout.grid}>

                    <div className={Components.card}>
                        <a href="https://talentsearch.humboldt.edu">
                            <Image
                                src="/images/portfolio/trio.jpg"
                                alt="Michael standing in front of his still"
                                width={500}
                                height={250}
                            />
                        </a>

                        <a href="https://talentsearch.humboldt.edu"><h2 className={Components.title}>Trio Talent Search</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Color Palette<br/>
                            Homepage design<br/>
                            Content organization<br/>
                            Assistance with Graphics<br/>
                            Product photography<br/>
                            Content types & views
                        </p>
                        <p className={Components.text}>
                            <a href="#">talentsearch.humboldt.edu</a><br/>
                            <a href="#">Design Mockup</a><br/>
                            <a href="#">Case Study</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="/portfolio/academictheme">
                            <Image
                                src="/images/portfolio/depttheme.jpg"
                                alt="Michael standing in front of his still"
                                width={500}
                                height={250}
                            />
                        </a>

                        <a href="/portfolio/academictheme"><h2 className={Components.title}>Academic Department Themes</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Site structure template<br/>
                            Homepage design template<br/>
                            Three Color Palettes<br/>
                            Content organization for each site<br/>
                            Collaborating with content creators<br />
                            Photo Research and Choices<br/>
                            Content types & views
                        </p>
                        <p className={Components.text}>
                            <a href="#">List of Websites</a><br/>
                            <a href="#">Design Mockup</a><br/>
                            <a href="#">Case Study</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://gettingtocollege.humboldt.edu">
                            <Image
                                src="/images/portfolio/gtc2.jpg"
                                alt="blocks of grade levels 6, 7, 8, 9, 10, 11, 12"
                                width={500}
                                height={250}
                            />
                        </a>

                        <a href="https://gettingtocollege.humboldt.edu"><h2 className={Components.title}>Getting to College</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Customized homepage design<br/>
                            Customized Checklist page design<br/>
                            Content organization<br/>
                            Assistance with Graphics<br/>
                            Content types & views
                        </p>
                        <p className={Components.text}>
                            <a href="https://gettingtocollege.humboldt.edu">gettingtocollege.humboldt.edu</a><br/>
                            <a href="#">Design Mockup</a><br/>
                            <a href="#">Case Study</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://www.jewelldistillery.com/">
                            <Image
                                src="/images/portfolio/jewell2.jpg"
                                alt="Michael standing in front of his still"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://www.jewelldistillery.com/"><h2 className={Components.title}>Jewell Distillery</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Custom design & theme<br/>
                            Content organization<br/>
                            Assistance with Graphics<br/>
                            Product photography<br/>
                            Content types & views
                        </p>
                        <p className={Components.text}>
                            <a href="https://www.jewelldistillery.com/">jewelldistillery.com</a><br/>
                            <a href="https://www.figma.com/proto/0wwHgCMoBv39HXw3Tlf3xnOH/JD-Website-Mockup?node-id=106%3A2&viewport=140%2C238%2C0.1249595358967781&scaling=min-zoom">Design Mockup</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://impact.humboldt.edu/">
                            <Image
                                src="/images/portfolio/impact2.jpg"
                                alt="Humboldt State Impact Report - with arial photo of university"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://impact.humboldt.edu/"><h2 className={Components.title}>Economic Impact Report</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Custom design<br/>
                            Content organization<br/>
                            Content layout & structure<br/>
                            Complex report design<br/>
                            Photo research & selection
                        </p>
                        <p className={Components.text}>
                            <a href="https://impact.humboldt.edu/">impact.humboldt.edu</a><br/>
                            <a href="https://www.figma.com/proto/VAic44leZYZcW1nLaDXY9T/impact.humboldt.edu?page-id=63%3A2&node-id=63%3A3&viewport=241%2C48%2C0.12&scaling=scale-down">Design Mockup</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://registrar.humboldt.edu/">
                            <Image
                                src="/images/portfolio/registrar2.jpg"
                                alt="Two students sitting in front of a computer in a classroom"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://registrar.humboldt.edu/"><h2 className={Components.title}>Office of the Registrar</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Custom homepage layout<br/>
                            Content organization<br/>
                            Content gathering & migration<br/>
                            Content types & views<br/>
                            Photo research & selection<br/>
                        </p>
                        <p className={Components.text}>
                            <a href="https://registrar.humboldt.edu/">registrar.humboldt.edu</a><br/>
                            <a href="https://www.figma.com/proto/8zRNWn9yYUYlCF5jeUOq87/Office-of-the-Registrar-Sitemap-and-Mockups-Copy?node-id=15%3A0&viewport=833%2C189%2C0.06513118743896484&scaling=min-zoom">Sitemap &amp; Homepage Design</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://natmus.humboldt.edu/">
                            <Image
                                src="/images/portfolio/natmus2.jpg"
                                alt="Natural History Museum"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://natmus.humboldt.edu/"><h2 className={Components.title}>Natural History Museum</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Custom design<br/>
                            Content organization<br/>
                            Content gathering & migration<br/>
                            Content types & views<br/>
                            Special exhibit sub-site
                        </p>
                        <p className={Components.text}>
                            <a href="https://natmus.humboldt.edu/">natmus.humboldt.edu</a><br/>
                            <a href="https://www.figma.com/proto/OtgyU1WvGgXviuDTm0gPqg/natmus.humboldt.edu?node-id=26%3A0&viewport=649%2C910%2C0.2332824468612671&scaling=min-zoom&page-id=0%3A1">Wireframes &amp; Colors</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://www.humboldtlandman.com/">
                            <Image
                                src="/images/portfolio/landman2.jpg"
                                alt="Land Man logo with a forest behind it"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://www.humboldtlandman.com/"><h2 className={Components.title}>The Land Man Office</h2></a>
                        <p className={Components.text}>
                            <strong>Wordpress</strong><br/>
                            Custom Design & Theme<br/>
                            Content organization<br/>
                            MLS integration<br/>
                            Real estate listings<br/>
                            Agent listing section
                        </p>
                        <p className={Components.text}>
                            <a href="https://www.humboldtlandman.com/">humboldtlandman.com</a><br/>
                            <a href="https://www.figma.com/proto/f0odyM3HbwfkmmKpm0JyPS/website?node-id=1%3A1028&viewport=823%2C182%2C0.125&scaling=min-zoom">Design Mockup</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://jmcktaxes.com/">
                            <Image
                                src="/images/portfolio/jmck2.jpg"
                                alt="Jessica McKnight logo with the ocean view behind it"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://jmcktaxes.com/"><h2 className={Components.title}>Jessica McKnight - Tax Consultant</h2></a>
                        <p className={Components.text}>
                            <strong>Wordpress</strong><br/>
                            Custom design
                            Child theme for <Link href="https://understrap.com/"><a>Understrap</a></Link><br/>
                            Content organization<br/>
                            Guidance on writing<br/>
                            Photography<br/>
                            Resources post type
                        </p>
                        <p className={Components.text}>
                            <a href="https://jmcktaxes.com/">jmcktaxes.com</a><br/>
                            <a href="https://www.figma.com/proto/DbAMKbrf8V9oogPKtm1lTo/Jessica-McKnight?node-id=82%3A299&viewport=749%2C439%2C0.06971913576126099&scaling=min-zoom">Color Explorations</a> &amp; <a href="https://www.figma.com/proto/DbAMKbrf8V9oogPKtm1lTo/Jessica-McKnight?node-id=163%3A63&viewport=1314%2C1040%2C0.12526367604732513&scaling=min-zoom">Design</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="https://kamome.humboldt.edu/">
                            <Image
                                src="/images/portfolio/kamome2.jpg"
                                alt="kids holding it up a tsunami boat - illustration"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="https://kamome.humboldt.edu/"><h2 className={Components.title}>The Extraordinary Voyage of Kamome</h2></a>
                        <p className={Components.text}>
                            <strong>Drupal</strong><br/>
                            Custom design &amp; theme<br/>
                            Content organization<br/>
                            Content gathering<br/>
                            Online Reading Experience<br/>
                            Content types & views
                        </p>
                        <p className={Components.text}>
                            <a href="https://kamome.humboldt.edu/">kamome.humboldt.edu</a>
                        </p>
                    </div>
                    <div className={Components.card}>
                        <a href="/portfolio/bellathese">
                            <Image
                                src="/images/portfolio/bellathese2.jpg"
                                alt="Bella TheSe Logo"
                                width={500}
                                height={250}
                            />
                        </a>
                        <a href="/portfolio/bellathese"><h2 className={Components.title}>Bella TheSe Day Spa</h2></a>
                        <p className={Components.text}>
                            <strong>Wordpress</strong><br/>
                            Custom design &amp; theme<br/>
                            Content organization<br/>
                            Guidance on photography<br/>
                            Logo design<br/>
                            Business cards &amp; brochures
                        </p>
                        <p className={Components.text}>
                            <a href="https://bellathese.com">bellathese.com</a><br/>
                            <a href="https://www.figma.com/proto/mBPvZZoqRYncyQhjyRwcsf/Website-Design?node-id=163%3A63&viewport=1428%2C854%2C0.1617431342601776&scaling=min-zoom">Design Mockup</a>
                        </p>
                    </div>

                </div>
            </main>

            <footer className={Layout.footer}>

            </footer>
        </div>
    )
}
