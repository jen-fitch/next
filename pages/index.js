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
                    content="Technical Project Manager with 15+ years of full-cycle project management experience. Focused on AI tools, program management, and strategic digital transformation."
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
                        <Link href="tel:7075720980">(707) 572-0980</Link>
                    </p>
                </div>
            </header>

            <main className={Layout.main}>
                <section className={Resume.summary}>
                    <p>
                        Strategic Technical Project Manager with 15+ years of full-cycle project management
                        experience and 7+ years managing complex infrastructure across multi-stakeholder
                        environments. Demonstrated success in cross-functional collaboration, process
                        optimization, and delivering high-quality outcomes.
                    </p>
                    <p>
                        Passionate about using technology to improve healthcare outcomes and creating positive
                        societal impact through mission-driven organizations. Currently pursuing ongoing research
                        into emerging AI technologies and AI/ML infrastructure.
                    </p>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Core Competencies</h2>
                    <div className={Cards.grid}>
                        <div className={Resume.competencyCard}>
                            <h3>Infrastructure &amp; Workflow</h3>
                            <p>
                                Enterprise infrastructure management and large-scale migration expertise,
                                workflow optimization with measurable outcomes, and systematic approaches to
                                technical complexity.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Process &amp; Resource Planning</h3>
                            <p>
                                Quality assurance protocols, change management expertise, multi-dimensional
                                project planning, and data-driven decision making across enterprise-level
                                projects.
                            </p>
                        </div>
                        <div className={Resume.competencyCard}>
                            <h3>Leadership &amp; Communication</h3>
                            <p>
                                Cross-functional team leadership, stakeholder alignment, requirements
                                translation between technical and business teams, and transparent communication
                                with vendor accountability.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Experience</h2>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Technical Project Manager</h3>
                            <p>California State Polytechnic University, Humboldt &middot; 2015–Present</p>
                        </div>

                        <h4 className={Resume.subheading}>Strategic Digital Transformation</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Co-led a multi-year digital transformation initiative encompassing 230+ website
                                migrations, coordinating a 5-person cross-functional team through complex
                                technical migration with multiple interdependent phases and stakeholder groups.
                            </li>
                            <li>
                                Achieved $50,000+ annual cost optimization through strategic infrastructure
                                consolidation, eliminating operational complexity and consolidating 92 separate
                                environments.
                            </li>
                            <li>
                                Developed a comprehensive program framework including a three-tiered risk
                                management system balancing technical constraints, business priorities, and
                                resource dependencies.
                            </li>
                            <li>
                                Delivered a 95% project success rate (to date) while managing multiple parallel
                                workstreams and ensuring zero critical service disruptions during enterprise-scale
                                technical migrations.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Cross-Functional Operations &amp; Risk Management</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Managed a complex stakeholder ecosystem across IT services, content strategy
                                teams, accessibility specialists, executive leadership, and external vendors
                                during multi-phase project execution.
                            </li>
                            <li>
                                Implemented systematic project risk mitigation strategies including dependency
                                mapping, contingency planning, and proactive communication protocols.
                            </li>
                            <li>
                                Established governance structures incorporating input from research teams,
                                technical developers, and business stakeholders while translating between
                                technical specifications and strategic business objectives.
                            </li>
                            <li>
                                Coordinated vendor management and accountability during multi-year program
                                phases, maintaining continuity and deliverable quality through external partner
                                transitions.
                            </li>
                        </ul>

                        <h4 className={Resume.subheading}>Performance Measurement &amp; Process Improvement</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Developed data-driven performance tracking systems monitoring resource
                                utilization, delivery timelines, and stakeholder satisfaction across an
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
                                alignment across diverse technical and non-technical team members.
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
                                Conducted comprehensive stakeholder analysis including user research, analytics
                                evaluation, and organizational assessment to optimize program outcomes.
                            </li>
                            <li>
                                Managed resource allocation and planning by coordinating technical staff,
                                infrastructure resources, and program timelines across multiple concurrent
                                initiatives with competing priorities.
                            </li>
                        </ul>
                    </div>

                    <div className={Resume.experienceBlock}>
                        <div className={Resume.roleHeader}>
                            <h3>Technical Project Consultant</h3>
                            <p>Freelance &middot; 2008–Present</p>
                        </div>

                        <h4 className={Resume.subheading}>Full-Cycle Project Management &amp; Strategic Planning</h4>
                        <ul className={Resume.accomplishments}>
                            <li>
                                Manage the complete project lifecycle for annual client engagements, serving as
                                strategic advisor and technical implementation lead for small-to-medium business
                                digital transformations.
                            </li>
                            <li>
                                Develop comprehensive project strategies including resource planning, timeline
                                coordination, and stakeholder management frameworks optimized for client
                                business objectives and technical constraints.
                            </li>
                            <li>
                                Coordinate multi-vendor technical solutions including hosting infrastructure,
                                development resources, and ongoing maintenance strategies while maintaining
                                long-term client partnerships through strategic consultation.
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 className={Resume.sectionHeading}>Education &amp; Development</h2>
                    <div className={Resume.educationGrid}>
                        <div className={Resume.educationCard}>
                            <h3>Technology Leadership Certificate</h3>
                            <p className={Resume.meta}>eCornell University &middot; 2025</p>
                            <p>
                                Advanced program management, cross-functional team leadership, and strategic
                                technology planning.
                            </p>
                        </div>
                        <div className={Resume.educationCard}>
                            <h3>Bachelor of Fine Arts, Web Design + New Media</h3>
                            <p className={Resume.meta}>Academy of Art University, San Francisco &middot; 2015</p>
                            <p>
                                Foundation in systems design, user experience methodology, and strategic
                                technology implementation.
                            </p>
                        </div>
                    </div>

                    <h4 className={Resume.subheading} style={{ textAlign: 'center' }}>
                        Ongoing Professional Learning
                    </h4>
                    <ul className={Resume.learningList}>
                        <li>AI/ML program management &amp; infrastructure strategy</li>
                        <li>Healthcare technology &amp; regulatory compliance</li>
                        <li>Agile &amp; Scrum methodologies</li>
                        <li>Data analytics &amp; KPI development</li>
                    </ul>
                </section>
            </main>
        </div>
    )
}
