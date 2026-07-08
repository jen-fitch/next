import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../styles/Layout.module.css'
import Page from '../styles/Page.module.css'
import Cards from '../styles/Cards.module.css'
import Resume from '../styles/Resume.module.css'

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Jennifer Fitch | Technical Project Manager</title>
                <meta
                    name="description"
                    content="Technical Project Manager with 15+ years leading full-cycle projects and 7+ years directing enterprise infrastructure initiatives, focused on scalable technical solutions and cross-functional delivery."
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <a href="#main" className="skipLink">Skip to main content</a>

            <header className={`${Layout.logo_wrap}`}>
                <div className={Page.logo}>
                    <p>Technical Project Manager &middot; Strategy &amp; Execution &middot; Team Leadership</p>
                    <div className={`${Layout.header_image}`}>
                        <Image
                            src="/images/jen-portrait-square.jpg"
                            alt="Portrait of Jennifer Fitch"
                            width={150}
                            height={150}
                            className={"circle"}
                        />
                    </div>
                    <h1>JENNIFER FITCH</h1>
                </div>

                <div className={Page.about}>
                    <p>
                        <Link href="https://www.linkedin.com/in/jenniferfitch2/">LinkedIn</Link>
                        <span aria-hidden="true">&nbsp; | &nbsp;</span>
                        <Link href="/pdf/jennifer-fitch_resume_2026.pdf">Résumé</Link>
                        <span aria-hidden="true">&nbsp; | &nbsp;</span>
                        <Link href="mailto:contact@jennifer-fitch.com">Email</Link>
                    </p>
                </div>
            </header>

            <main id="main" className={Layout.main}>
                <section className={Resume.summary}>
                    <p>
                        Strategic Technical Project Manager with 15+ years of full-cycle delivery, including
                        7+ years steering enterprise infrastructure initiatives through complex, multi-stakeholder
                        environments. I thrive on cross-functional coordination, process optimization, and
                        shipping high-quality outcomes even when timelines are tight.
                    </p>
                    <p>
                        I turn tangled technical requirements into clear, durable solutions, translating
                        complex needs into plain-language objectives that teams across an organization can
                        act on.
                    </p>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Core Competencies</h2>
                    <div className={Cards.grid}>
                        <div className={Resume.competencyCard}>
                            <h3>Web Infrastructure Management &amp; Workflow Development</h3>
                            <p>
                                Enterprise web infrastructure, complex migrations, and workflow design that
                                delivers measurable results.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Process Innovation &amp; Resource Planning</h3>
                            <p>
                                Quality assurance protocols, change management, thoughtful project planning,
                                and decisions grounded in real data.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Experience</h2>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Web Designer &amp; Technical Project Manager</h3>
                            <p>California State Polytechnic University, Humboldt &middot; 2015–Present</p>
                        </div>

                        <h4 className={Resume.subheading}>Enterprise Drupal Management, Migrations &amp; Technical Planning</h4>
                        <ul className={Resume.accomplishments}>
                            <li>Co-administer our Drupal 10 codebase, a portfolio of 230+ websites.</li>
                            <li>
                                Planned, designed, and built many high-traffic campus sites, roughly one-third
                                of the previous Drupal 7 portfolio.
                            </li>
                            <li>
                                Technical consultant on the agency-led university rename and rebrand (2022), then
                                co-led the small in-house team that carried the new sub-brand across 230+ Drupal 7
                                sites, replacing the university name and acronym inside 50+ databases; that success
                                led to my selection as project manager for the mass migration.
                            </li>
                            <li>
                                Finalizing our multi-year migration of 230+ websites across 92 Drupal installations
                                to one unified Drupal 10 platform, as both project manager and one of its two
                                developers, working with content strategists and accessibility specialists.
                            </li>
                            <li>
                                Built a three-tier site classification system for the migration so each site was
                                scoped honestly, weighing technical complexity, team capacity, and what stakeholders
                                actually need, before any timeline was promised.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Client Strategy &amp; Collaboration</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Collaborate with campus clients to uncover and meet their goals and manage their
                                complex site redesigns.
                            </li>
                            <li>
                                Manage vendor relationships across a multi-year rebranding project and kept work on
                                track with our rebrand in spite of turnover on external teams.
                            </li>
                            <li>
                                Explain and translate technical details and organizational goals to stakeholders and
                                vendors, flagging risks early so scope can shift before problems grow.
                            </li>
                            <li>
                                Carry projects from intake and estimate through build, training sessions (in person
                                or Zoom), and post-launch support.
                            </li>
                            <li>Offer ongoing technical maintenance and support to campus clients.</li>
                        </ul>

                        <h4 className={Resume.subheading}>Web Design &amp; Development</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Design and build Drupal websites for recruiting and campus audiences, working closely
                                with our editorial team, campus photographer, and faculty and staff.
                            </li>
                            <li>
                                Build new content types, views, and paragraphs and develop Drupal templates with Twig
                                and PHP.
                            </li>
                            <li>Troubleshoot Drupal updates and any issues with our current codebase.</li>
                            <li>Work from the command line and use Git daily.</li>
                            <li>Write and maintain front-end code (HTML, CSS/SCSS, Bootstrap).</li>
                            <li>Prototype in Figma.</li>
                            <li>Meet WCAG accessibility standards.</li>
                            <li>
                                Plan information architecture for new and migrated sites: sitemaps, wireframes, and
                                content inventories.
                            </li>
                        </ul>

                        <h4 className={Resume.subsectionHeading}>Featured Project</h4>
                        <div className={Cards.grid}>
                            <div className={Cards.card}>
                                <Link href="https://humboldt.edu" passHref>
                                    <Image
                                        src="/images/portfolio/humboldt.jpg"
                                        alt="Screenshot of humboldt.edu website"
                                        width={500}
                                        height={250}
                                        className={"pointer"}
                                    />
                                </Link>
                                <div className={Cards.info}>
                                    <p className={Cards.text}>
                                        A multi-year partnership with an outside branding agency to rebrand and
                                        rebuild <a href="https://humboldt.edu">humboldt.edu</a>, the flagship
                                        university site and the destination for a consolidation effort that
                                        brought 200+ subsites onto one platform.
                                    </p>
                                    <p className={Cards.text}>
                                        The work spanned content strategy, information architecture, site
                                        building, and redirect planning, with careful attention to brand
                                        consistency, accessibility, and preserving years of SEO equity across a
                                        sprawling university ecosystem. Coordinated closely with the agency&apos;s
                                        project manager and internal leadership to keep momentum across many
                                        simultaneous workstreams and stakeholder groups.
                                    </p>
                                    <p className={Cards.text}>
                                        <strong>Website:</strong> <a href="https://humboldt.edu">humboldt.edu</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Web Designer &amp; Technical Consultant</h3>
                            <p>Studio 1062 (Freelance) &middot; 2008–Present</p>
                        </div>

                        <ul className={Resume.accomplishments}>
                            <li>
                                Run projects end to end for nonprofit and small business clients: discovery,
                                proposal, scope and estimate, design, build, and long-term maintenance.
                            </li>
                            <li>
                                Turn loosely defined client goals into realistic scopes, clear assumptions, and
                                budgets grounded in what the work actually takes.
                            </li>
                            <li>
                                Design and build WordPress sites with custom themes; manage hosting, deployments,
                                and performance.
                            </li>
                            <li>
                                Keep an ongoing client roster through honest scope conversations and reliable
                                support after launch.
                            </li>
                        </ul>

                        <h4 className={Resume.subsectionHeading}>Featured Project</h4>
                        <div className={Cards.grid}>
                            <div className={Cards.card}>
                                <Link href="https://hafoundation.org" passHref>
                                    <Image
                                        src="/images/portfolio/haf.jpg"
                                        alt="Screenshot of hafoundation.org website"
                                        width={500}
                                        height={250}
                                        className={"pointer"}
                                    />
                                </Link>
                                <div className={Cards.info}>
                                    <p className={Cards.text}>
                                        Partnered with the Humboldt Area Foundation on a full redesign of
                                        <a href="https://hafoundation.org"> hafoundation.org</a>, combining two
                                        large websites into one and rethinking the site architecture.
                                    </p>
                                    <p className={Cards.text}>
                                        The project covered strategic consultation on the foundation&apos;s goals,
                                        a new site structure that made programs and grant information easier to
                                        find, and hands-on project management through design and development.
                                        The Figma prototype captures the design direction that anchored the
                                        build.
                                    </p>
                                    <p className={Cards.text}>
                                        <strong>Website:</strong> <a href="https://hafoundation.org">hafoundation.org</a><br/>
                                        <strong>Design:</strong> <a href="https://www.figma.com/proto/iHQs4WnivGAYTQ5tYTRsP4/HAF?page-id=106%3A2&type=design&node-id=406-2&viewport=137%2C191%2C0.07&t=m9OiaABeR9roAvIh-1&scaling=min-zoom&starting-point-node-id=126%3A2&mode=design">Website - Figma</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Education &amp; Professional Development</h2>
                    <div className={Resume.educationGrid}>
                        <div className={Resume.educationCard}>
                            <h3>Bachelor of Fine Arts, Web Design + New Media</h3>
                            <p className={Resume.meta}>Academy of Art University, San Francisco &middot; 2015</p>
                            <p>
                                A foundation in systems thinking, user experience, and strategic technology
                                implementation.
                            </p>
                        </div>
                        <div className={Resume.educationCard}>
                            <h3>Technology Leadership Certificate</h3>
                            <p className={Resume.meta}>eCornell University &middot; 2025</p>
                            <p>
                                A deep dive into leadership techniques, leading teams functionally across
                                disciplines, and strategic technology development &amp; planning.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={Layout.footer}>
                <p className={Page.footerLinks}>
                    <Link href="https://www.linkedin.com/in/jenniferfitch2/">LinkedIn</Link>
                    <span aria-hidden="true">&nbsp; | &nbsp;</span>
                    <Link href="/pdf/jennifer-fitch_resume_2026.pdf">Résumé</Link>
                    <span aria-hidden="true">&nbsp; | &nbsp;</span>
                    <Link href="mailto:contact@jennifer-fitch.com">Email</Link>
                </p>
            </footer>
        </div>
    )
}
