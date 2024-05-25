import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'
import Cards from '../styles/Cards.module.css'

const menu = [

    { title: 'Website Building', path: '/' },
    { title: 'Print/Marketing', path: '/' },
    { title: 'Website Hosting', path: '/' },
    { title: 'Maintenance', path: '/' },
    { title: 'Contact', path: '/' },
]

export default function Portfolio() {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Jennifer Fitch | Websites and More.</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>


            <header className={`${Layout.logo_wrap}`}>
                <div className={Page.logo}>
                        <h1>JENNIFER FITCH</h1>
                        <p>Freelance Website Professional</p>
                </div>

                <div className={Page.about}>
                    <p>
                        <Link href="https://www.linkedin.com/in/jenniferfitch2/">
                            LinkedIn Profile
                        </Link>
                    </p>
                    <p>
                        {' '}
                        <Link href="tel:7075720980">
                            (707) 572-0980 &nbsp;
                        </Link><span> | </span>&nbsp;
                        <Link href="mailto:jenfitch4@gmail.com">
                            jenfitch4@gmail.com &nbsp;
                        </Link>
                    </p>
                </div>
            </header>
            <main className={Layout.main}>
                <div className={Cards.grid}>
                    <div className={Cards.card}>
                        <Link href="https://humboldt.edu" passHref>
                            <Image
                                src="/images/portfolio/humboldt.jpg"
                                alt="screenshots of website"
                                width={500}
                                height={250}
                                className={"pointer"}
                            />
                        </Link>
                        <div className={Cards.info}>

                            <p className={Cards.text}>
                                <strong>Drupal 9 </strong><br/>
                                Rebranding / Rebuilding <a href="https://humboldt.edu">humboldt.edu</a><br/>
                                Content strategy partner<br/>
                                Site building partner<br/>
                                Redirect implementation<br/>
                                Worked closely with agency & PM<br/>
                                Assisted with implementing strategy<br/>
                                Rebranded over 200 sub sites<br/>
                                Assising with 200 website migration (CURRENT)

                            </p>
                            <p className={Cards.text}>
                                <strong>Website:</strong> <a href="https://humboldt.edu">humboldt.edu</a><br/>
                                {/*/!*<strong>Case Study:</strong> <a href="#">Academic Theme</a>*!/*/}
                            </p>
                        </div>
                    </div>

                    <div className={Cards.card}>
                        <Link href="https://hafoundation.org" passHref>
                            <Image
                                src="/images/portfolio/haf.jpg"
                                alt="screenshots of website"
                                width={500}
                                height={250}
                                className={"pointer"}
                            />
                        </Link>
                        <div className={Cards.info}>
                            <p className={Cards.text}>
                                <strong>Drupal 7 </strong><br/>
                                Overall Website strategy<br/>
                                Research for architecture<br/>
                                Project management<br/>
                                Consultation on goals<br/>
                                Full website design<br/>
                                Custom WordPress theme<br/>
                                Full site build<br/>
                                Custom post types and templates<br/>

                            </p>
                            <p className={Cards.text}>
                                {/*<a href="#">List of all Websites</a><br/><br/>*/}
                                <strong>Website:</strong> <a href="https://hafoundation.org">hafoundation.org</a><br/>
                                <strong>Design:</strong> <a
                                href="https://www.figma.com/proto/iHQs4WnivGAYTQ5tYTRsP4/HAF?page-id=106%3A2&type=design&node-id=406-2&viewport=137%2C191%2C0.07&t=m9OiaABeR9roAvIh-1&scaling=min-zoom&starting-point-node-id=126%3A2&mode=design">Full
                                Website - Figma</a><br/>
                                {/*/!*<strong>Case Study:</strong> <a href="#">Academic Theme</a>*!/*/}
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

                            <p className={Cards.text}>
                                <strong>Wordpress</strong><br/>
                                Consultation<br/>
                                Rebuilding from Drupal to Wordpress<br/>
                                Theme & plugin research<br/>
                                Design sketches & mockups<br/>
                                Figma full site design<br/>
                                Organizing MLS layout<br/>
                                MLS & custom real estate listings<br/>
                                Troubleshooting and themeing MLS<br/>
                                Agent post type
                            </p>
                            <p className={Cards.text}>
                                <strong>Website:</strong> <a
                                href="https://www.humboldtlandman.com/">humboldtlandman.com</a><br/>
                                <strong>Design:</strong> <a
                                href="https://www.figma.com/proto/f0odyM3HbwfkmmKpm0JyPS/website?node-id=1%3A1028&viewport=823%2C182%2C0.125&scaling=min-zoom">Land
                                Man - Figma</a><br/>
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

                            <p className={Cards.text}>
                                <strong>Drupal 7</strong><br/>
                                Utilized Drupal profile/distribution<br/>
                                Consultation & Design Research<br/>
                                Full content inventory<br/>
                                New sitemap based on research<br/>
                                Organizing content<br/>
                                Gathering & migrating content<br/>
                                Content types & views<br/>
                                Photo research & selection<br/>
                                Figma homepage layout<br/>
                            </p>
                            <p className={Cards.text}>
                                <strong>Website:</strong> <a
                                href="https://registrar.humboldt.edu/">registrar.humboldt.edu</a><br/>
                                <strong>Sitemap & Design:</strong> <a
                                href="https://www.figma.com/proto/PK4yKE34iPOCtcuGCQhS3f/registrar.humboldt.edu?page-id=0%3A1&node-id=146%3A186&viewport=241%2C48%2C0.08&scaling=min-zoom">Registrar
                                - Figma</a>
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
                            <p className={Cards.text}>
                                <strong>Drupal 7</strong><br/>
                                Complex report design<br/>
                                Unique homepage layout<br/>
                                Built custom report navigation<br/>
                                Themed in Drupal<br/>
                                Figma homepage layout<br/>
                                Photo research & selection
                            </p>
                            <p className={Cards.text}>
                                <strong>Website:</strong> <a href="https://impact.humboldt.edu/">impact.humboldt.edu</a><br/>
                                <strong>Design:</strong> <a
                                href="https://www.figma.com/proto/VAic44leZYZcW1nLaDXY9T/impact.humboldt.edu?page-id=63%3A2&node-id=63%3A3&viewport=241%2C48%2C0.12&scaling=scale-down">Economic
                                Impact - Figma</a><br/>
                                {/*<strong>Case Study:</strong> <a href="#">Economic Impact Report</a>*/}
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

                            <p className={Cards.text}>
                                <strong>Drupal 8</strong><br/>
                                Bootstrap WP child theme<br/>
                                Custom post types<br/>
                                PHP template files<br/>
                                Product photography<br/>
                                Figma full site design<br/>
                                Custom sitemap<br/>
                                Assistance with logo & graphics<br/>

                            </p>
                            <p className={Cards.text}>
                                <a href="https://www.jewelldistillery.com/">jewelldistillery.com</a><br/><br/>
                                <strong>Design:</strong> <a
                                href="https://www.figma.com/proto/0wwHgCMoBv39HXw3Tlf3xnOH/JD-Website-Mockup?node-id=106%3A2&viewport=140%2C238%2C0.1249595358967781&scaling=min-zoom">Jewell
                                Distillery - Figma</a>
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

                            <p className={Cards.text}>
                                <strong>Wordpress</strong><br/>
                                Bootstrap WP child theme<br/>
                                Custom resource section<br/>
                                PHP template files<br/>
                                Organized content<br/>
                                Color exploration<br/>
                                Figma full site design<br/>
                                {/*Theme built on <Link href="https://understrap.com/"><a>Understrap</a></Link><br/>*/}
                                Site build<br/>
                                Provided Photography
                            </p>
                            <p className={Cards.text}>
                                <strong>Website:</strong> <a href="https://jmcktaxes.com/">jmcktaxes.com</a><br/>
                                <strong>Colors:</strong> <a
                                href="https://www.figma.com/proto/DbAMKbrf8V9oogPKtm1lTo/Jessica-McKnight?node-id=82%3A299&viewport=749%2C439%2C0.06971913576126099&scaling=min-zoom">JMCK
                                - Figma (colors)</a><br/>
                                <strong>Design:</strong> <a
                                href="https://www.figma.com/proto/DbAMKbrf8V9oogPKtm1lTo/Jessica-McKnight?node-id=163%3A63&viewport=1314%2C1040%2C0.12526367604732513&scaling=min-zoom">JMCK
                                - Figma</a><br/>
                                {/*<strong>Case Study:</strong> <a href="#">Jessica McKnight</a>*/}
                            </p>
                        </div>
                    </div>


                </div>
            </main>

        </div>
    )
}
