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
                    content="Technical Project Manager with 15+ years leading full-cycle projects and 7+ years directing enterprise infrastructure initiatives. Focused on AI infrastructure systems and scalable technical solutions."
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
                        <Link href="mailto:jenfitch4@gmail.com">Email</Link>
                        <span aria-hidden="true">&nbsp; | &nbsp;</span>
                        <Link href="tel:7076316934">(707) 631-6934</Link>
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
                        Deeply curious about AI infrastructure and the systems that let it scale. I turn tangled
                        technical requirements into clear, durable solutions, and I keep a close eye on emerging
                        AI and AI/ML infrastructure trends.
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
                        <div className={Resume.competencyCard}>
                            <h3>Leadership &amp; Communication</h3>
                            <p>
                                Leading teams across disciplines, bridging technical and business priorities,
                                and keeping vendors and stakeholders clearly informed.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Experience</h2>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Technical Project Manager &amp; Infrastructure Lead</h3>
                            <p>California State Polytechnic University, Humboldt &middot; 2015–Present</p>
                        </div>

                        <ul className={Resume.accomplishments}>
                            <li>
                                Large-scale website migration and consolidation (230+ websites, $50K+ in annual
                                savings, 98% complete).
                            </li>
                            <li>Enterprise platform architecture and SQL database management.</li>
                            <li>
                                Git, cloud infrastructure, and analytics that guide real decisions.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Strategic Digital Transformation &amp; Multi-Phase Infrastructure Initiative</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Co-led a multi-year migration of 230+ websites, guiding a team of five through
                                interdependent technical phases and a wide set of stakeholders.
                            </li>
                            <li>
                                Saved $50,000+ annually by consolidating 92 separate environments into a single
                                platform.
                            </li>
                            <li>
                                Built a migration framework with a three-tiered risk model that balanced
                                technical constraints, business priorities, and resource dependencies.
                            </li>
                            <li>
                                Distributed technical workload across development teams while holding a 98%
                                completion rate and zero critical service disruptions.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Multi-Team Technical Coordination &amp; Project-Level Risk Management</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Put project risk mitigation strategies in place, including dependency mapping,
                                contingency planning, and clear communication protocols for technical and
                                organizational challenges.
                            </li>
                            <li>
                                Designed workflows that pulled requirements from multiple teams and translated
                                them into plain-language objectives the rest of the organization could act on.
                            </li>
                            <li>
                                Managed vendor accountability through several multi-year program phases, keeping
                                continuity and quality intact as partners changed.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Systems Architecture, Optimization &amp; Process Improvement</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Consolidated 92 separate Drupal installations into one unified platform,
                                cutting operational overhead by 80%.
                            </li>
                            <li>
                                Designed multi-site content architecture and taxonomy systems that support 230+
                                sites on shared infrastructure.
                            </li>
                            <li>
                                Executed data migration for 75,000+ webpages using a blend of automated and
                                hands-on migration strategies.
                            </li>
                            <li>
                                Implemented quality assurance for deployment pipelines handling up to 10
                                concurrent deliverables per week during peak periods.
                            </li>
                            <li>
                                Built performance tracking that measured delivery timelines and stakeholder
                                satisfaction across a large portfolio of projects.
                            </li>
                            <li>
                                Established process improvements that let our project management approach work
                                across very different teams and technical domains.
                            </li>
                            <li>
                                Designed communication strategies that kept technical and non-technical teams
                                on the same page about shared goals.
                            </li>
                            <li>
                                Wrote the technical documentation the team relies on, covering infrastructure,
                                deployment procedures, and system maintenance.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Research Collaboration &amp; Requirements Translation</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Partnered with academic staff and researchers to translate their needs into
                                technical specifications and implementation roadmaps.
                            </li>
                            <li>
                                Managed resource allocation and planning across technical staff, infrastructure,
                                and program timelines for multiple simultaneous initiatives that often pulled in
                                different directions.
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
                                        Rebrand and rebuild of <a href="https://humboldt.edu">humboldt.edu</a><br/>
                                        Content strategy partnership<br/>
                                        Site-building partnership<br/>
                                        Redirect implementation<br/>
                                        Close collaboration with agency &amp; PM<br/>
                                        Rebranded 200+ subsites
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
                            <h3>Technical Project Consultant &amp; Website Developer</h3>
                            <p>Freelance &middot; 2008–Present</p>
                        </div>

                        <h4 className={Resume.subheading}>Full-Cycle Project Management &amp; Strategic Planning</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Manage full-cycle projects for annual client engagements, serving as strategic
                                advisor and technical lead for small- to medium-business digital transformations.
                            </li>
                            <li>
                                Develop project strategies covering resource planning, timeline coordination,
                                and stakeholder management, aligned with client business objectives and
                                technical constraints.
                            </li>
                            <li>
                                Build scalable web infrastructure using WordPress and custom development,
                                optimized for performance and maintainability.
                            </li>
                            <li>
                                Coordinate technical resource planning across hosting, development environments,
                                and deployment strategy.
                            </li>
                            <li>
                                Maintain long-term client partnerships through ongoing system optimization,
                                security updates, and performance monitoring.
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
                                        Website redesign<br/>
                                        Website architecture<br/>
                                        Project management<br/>
                                        Strategic consultation
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
                                Foundation in systems design, user experience, and strategic technology
                                implementation.
                            </p>
                        </div>
                        <div className={Resume.educationCard}>
                            <h3>Technology Leadership Certificate</h3>
                            <p className={Resume.meta}>eCornell University &middot; 2025</p>
                            <p>
                                Focused on advanced program management, cross-functional team leadership, and
                                strategic technology planning.
                            </p>
                        </div>
                    </div>

                    <h3 className={Resume.subsectionHeading}>Ongoing Professional Learning</h3>
                    <ul className={Resume.learningList}>
                        <li>AI/ML program management and infrastructure strategy</li>
                        <li>Healthcare technology trends and regulatory compliance</li>
                        <li>Applying Agile and Scrum methodologies to technical project management</li>
                        <li>Data analytics and KPI development for performance measurement</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
