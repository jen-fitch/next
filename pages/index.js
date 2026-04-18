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
                <title>Jennifer Fitch | Technical Program Manager</title>
                <meta
                    name="description"
                    content="Technical Program Manager with 15+ years of experience leading enterprise-level infrastructure migration and consolidation. Passionate about emerging AI technologies and scalable technical solutions."
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <header className={`${Layout.logo_wrap}`}>
                <div className={Page.logo}>
                    <p>Technical Program Manager &middot; Infrastructure &amp; AI &middot; Cross-Functional Leadership</p>
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
                        <span>&nbsp; | &nbsp;</span>
                        <Link href="/pdf/jennifer-fitch_resume_2026.pdf">Résumé</Link>
                        <span>&nbsp; | &nbsp;</span>
                        <Link href="mailto:jenfitch4@gmail.com">Email</Link>
                        <span>&nbsp; | &nbsp;</span>
                        <Link href="tel:7076316934">(707) 631-6934</Link>
                    </p>
                </div>
            </header>

            <main className={Layout.main}>
                <section className={Resume.summary}>
                    <p>
                        Technical Program Manager with 15+ years of experience progressing from website
                        development to enterprise-level infrastructure migration and consolidation. Proven
                        expertise in coordinating complex technical transitions across diverse stakeholder
                        environments while optimizing resources and minimizing operational disruption.
                    </p>
                    <p>
                        Passionate about emerging AI technologies and their infrastructure requirements, with
                        demonstrated ability to translate needs into scalable technical solutions.
                    </p>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Core Competencies</h2>
                    <div className={Cards.grid}>
                        <div className={Resume.competencyCard}>
                            <h3>Migration &amp; Consolidation</h3>
                            <p>
                                Large-scale website migration and consolidation across 230+ websites, delivering
                                $50K+ in savings with a 95% completion rate.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Platform Architecture</h3>
                            <p>
                                Enterprise platform architecture and database management (SQL) supporting unified,
                                scalable systems across complex organizational environments.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Infrastructure &amp; Data</h3>
                            <p>
                                Version control systems (Git), cloud infrastructure, analytics, and data-driven
                                decision making to guide program strategy and execution.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Experience</h2>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Technical Program Manager &amp; Infrastructure Lead (Web Designer)</h3>
                            <p>California State Polytechnic University, Humboldt &middot; 2015–Present</p>
                        </div>

                        <h4 className={Resume.subheading}>Multi-Phase Infrastructure Initiative Leadership</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Led comprehensive platform migration of 230+ websites across 92 separate
                                installations to a unified Drupal 10 platform, managing a 5-person team through
                                a 2-year phase within a 5-year infrastructure modernization initiative.
                            </li>
                            <li>
                                Achieved $50,000+ annual cost reduction through strategic infrastructure
                                consolidation, eliminating complex multi-system maintenance overhead and
                                optimizing resource allocation.
                            </li>
                            <li>
                                Developed a systematic migration framework with a three-tiered classification
                                system balancing technical complexity, resource constraints, and stakeholder
                                requirements—applicable to any large-scale infrastructure transition.
                            </li>
                            <li>
                                Coordinated technical workload distribution across development teams while
                                maintaining a 95% project completion rate (to date) and zero critical service
                                disruptions.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Cross-Functional Technical Coordination</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Co-managed a complex stakeholder ecosystem including technical developers,
                                content strategists, accessibility specialists, department leadership, and
                                external vendors during major infrastructure transitions.
                            </li>
                            <li>
                                Designed and implemented systematic workflows incorporating requirements from
                                multiple technical teams while translating between technical specifications and
                                organizational objectives.
                            </li>
                            <li>
                                Established quality assurance processes managing deployment pipelines for up to
                                10 system migrations per week during peak implementation phases.
                            </li>
                            <li>
                                Coordinated vendor relationship management during multi-year infrastructure
                                modernization, maintaining project continuity through external team changes.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Systems Architecture &amp; Optimization</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Implemented a unified platform strategy consolidating 92 disparate Drupal
                                installations into scalable, maintainable infrastructure, reducing operational
                                complexity by 80%.
                            </li>
                            <li>
                                Implemented data migration strategies for 75,000+ webpages using SQL
                                optimization and automated migration tools.
                            </li>
                            <li>
                                Created technical documentation frameworks for infrastructure requirements,
                                deployment procedures, and system maintenance protocols.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Research Collaboration &amp; Requirements Translation</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Collaborated with academic departments to understand diverse computational and
                                content management requirements, translating research needs into technical
                                specifications.
                            </li>
                            <li>
                                Conducted user experience research including analytics analysis, stakeholder
                                interviews, and usability testing to optimize system performance for end users.
                            </li>
                            <li>
                                Managed resource allocation planning by coordinating technical staff,
                                infrastructure resources, and project timelines across multiple concurrent
                                initiatives.
                            </li>
                        </ul>
                    </div>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Technical Consultant &amp; Website Developer</h3>
                            <p>Freelance &middot; 2008–Present</p>
                        </div>

                        <h4 className={Resume.subheading}>Full-Stack Technical Project Management</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Manage end-to-end technical implementations for projects, serving as technical
                                lead, project manager, and website architect.
                            </li>
                            <li>
                                Develop scalable web infrastructure solutions using WordPress and custom
                                development, optimizing for performance and maintainability.
                            </li>
                            <li>
                                Coordinate technical resource planning including hosting infrastructure,
                                development environments, and deployment strategies.
                            </li>
                            <li>
                                Maintain long-term client technical partnerships providing ongoing system
                                optimization, security updates, and performance monitoring.
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Education &amp; Professional Development</h2>
                    <div className={Resume.educationGrid}>
                        <div className={Resume.educationCard}>
                            <h3>Technology Leadership Certificate</h3>
                            <p className={Resume.meta}>eCornell University &middot; 2025</p>
                            <p>
                                Advanced technical team leadership, project delegation, and strategic technology
                                management.
                            </p>
                        </div>
                        <div className={Resume.educationCard}>
                            <h3>Bachelor of Fine Arts, Web Design + New Media</h3>
                            <p className={Resume.meta}>Academy of Art University, San Francisco &middot; 2015</p>
                            <p>
                                Foundation in systems design, user experience methodology, and technical
                                implementation strategies.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
