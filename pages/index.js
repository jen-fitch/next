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
                    content="Technical Project Manager with 15+ years of full-cycle project management experience and 7+ years leading enterprise-level infrastructure initiatives. Passionate about AI infrastructure systems and scalable technical solutions."
                />
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

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
                        Strategic Technical Project Manager with 15+ years of full-cycle project management
                        experience and 7+ years managing enterprise-level infrastructure initiatives and
                        deployment processes across multi-stakeholder environments. Demonstrated success in
                        cross-functional coordination, process optimization, and delivering high quality
                        outcomes.
                    </p>
                    <p>
                        Passionate about AI infrastructure systems with demonstrated ability to translate
                        technical requirements into scalable solutions. Currently pursuing ongoing research
                        into emerging AI technologies and AI/ML infrastructure.
                    </p>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Core Competencies</h2>
                    <div className={Cards.grid}>
                        <div className={Resume.competencyCard}>
                            <h3>Infrastructure Management &amp; Workflow Development</h3>
                            <p>
                                Enterprise infrastructure management and large-scale migration expertise,
                                workflow optimization with measurable outcomes, and systematic approaches to
                                technical complexity.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Process Innovation &amp; Resource Planning</h3>
                            <p>
                                Quality assurance protocols, change management expertise, multi-dimensional
                                project planning, and data-driven decision making across enterprise-level
                                projects.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Leadership &amp; Communication</h3>
                            <p>
                                Cross-functional team leadership and stakeholder alignment, multi-stakeholder
                                project management with proven results, requirements translation between
                                technical and business teams, and transparent communication strategies with
                                vendor accountability.
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
                                Large-scale website migration and consolidation (230+ websites, $50K+ savings,
                                98% completion).
                            </li>
                            <li>Enterprise platform architecture and database management (SQL).</li>
                            <li>
                                Version control systems (Git), cloud infrastructure, analytics and data-driven
                                decision making.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Strategic Digital Transformation &amp; Multi-Phase Infrastructure Initiative</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Co-led multi-year digital transformation initiative encompassing 230+ website
                                migrations, coordinating a 5-person cross-functional team through complex
                                technical migration with multiple interdependent phases and stakeholder groups.
                            </li>
                            <li>
                                Achieved $50,000+ annual cost optimization through strategic infrastructure
                                consolidation program, eliminating operational complexity and consolidating 92
                                separate environments.
                            </li>
                            <li>
                                Developed systematic migration framework including a three-tiered risk
                                management system balancing technical constraints, business priorities, and
                                resource dependencies—applicable to any large-scale infrastructure transition.
                            </li>
                            <li>
                                Coordinated technical workload distribution across development teams while
                                maintaining a 98% project completion rate (to date) and zero critical service
                                disruptions.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Cross-Functional Technical Coordination &amp; Project Level Risk Management</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Co-managed complex stakeholder ecosystem across IT services, content strategy
                                teams, accessibility specialists, executive leadership, and external vendors
                                during multi-phase project execution.
                            </li>
                            <li>
                                Implemented systematic project risk mitigation strategies including dependency
                                mapping, contingency planning, and proactive communication protocols to address
                                technical and organizational challenges.
                            </li>
                            <li>
                                Designed and implemented systematic workflows incorporating requirements from
                                multiple technical teams while translating between technical specifications and
                                organizational objectives.
                            </li>
                            <li>
                                Coordinated cross-functional input from research teams, technical developers,
                                and business stakeholders, translating between technical specifications and
                                strategic business objectives.
                            </li>
                            <li>
                                Coordinated vendor management and accountability during several multi-year
                                program phases, maintaining continuity and deliverable quality through external
                                partner transitions.
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

                        <h4 className={Resume.subheading}>Performance Measurement &amp; Process Improvement</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Developed data-driven performance tracking systems monitoring resource
                                utilization, delivery timelines, and stakeholder satisfaction across
                                enterprise-scale portfolio.
                            </li>
                            <li>
                                Created systematic process improvement frameworks enabling scalable project
                                management methodologies applicable across different technical domains and
                                organizational contexts.
                            </li>
                            <li>
                                Implemented quality assurance protocols managing deployment pipelines for up to
                                10 concurrent deliverables weekly during peak execution phases.
                            </li>
                            <li>
                                Designed stakeholder communication strategies ensuring transparency and
                                alignment with goals across diverse technical and non-technical team members.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Research Collaboration &amp; Requirements Translation</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Collaborated with academic stakeholders to understand content requirements,
                                translating research needs into actionable technical program specifications and
                                implementation roadmaps.
                            </li>
                            <li>
                                Managed resource allocation and planning by coordinating technical staff,
                                infrastructure resources, and program timelines across multiple concurrent
                                initiatives with competing priorities.
                            </li>
                        </ul>

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
                                        Rebranding / Rebuilding <a href="https://humboldt.edu">humboldt.edu</a><br/>
                                        Content strategy partner<br/>
                                        Site building partner<br/>
                                        Redirect implementation<br/>
                                        Worked closely with agency &amp; PM<br/>
                                        Assisted with implementing strategy<br/>
                                        Rebranded over 200 sub sites
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

                        <h4 className={Resume.subheading}>Full-cycle Project Management &amp; Strategic Planning</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Manage complete project lifecycle for annual client engagements, serving as
                                strategic advisor and technical implementation lead for small-to-medium business
                                digital transformations.
                            </li>
                            <li>
                                Develop comprehensive project strategies including resource planning, timeline
                                coordination, and stakeholder management frameworks optimized for client
                                business objectives and technical constraints.
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
                                        Consultation on goals<br/>
                                        Website design<br/>
                                        Custom WordPress theme<br/>
                                        Site build
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
                                Foundation in systems design, user experience methodology, and strategic
                                technology implementation.
                            </p>
                        </div>
                        <div className={Resume.educationCard}>
                            <h3>Technology Leadership Certificate</h3>
                            <p className={Resume.meta}>eCornell University &middot; 2025</p>
                            <p>
                                Advanced program management, cross-functional team leadership, and strategic
                                technology planning.
                            </p>
                        </div>
                    </div>

                    <h3 className={Resume.subsectionHeading}>Ongoing Professional Learning</h3>
                    <ul className={Resume.learningList}>
                        <li>AI/ML program management and infrastructure strategy research</li>
                        <li>Healthcare technology trends and regulatory compliance frameworks</li>
                        <li>Agile and Scrum methodology application in technical project management</li>
                        <li>Data analytics and KPI development for performance measurement</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
