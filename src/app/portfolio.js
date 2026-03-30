'use client'
import { useState } from 'react'
import styles from './page.module.css'

const projects = [
  {
    id: 'aurelia-voice',
    tag: 'Voice AI',
    status: 'Active',
    title: 'Aurelia Voice',
    pitch: 'Real-time AI receptionist for med spas built on LiveKit',
    architecture:
`CALLER → LIVEKIT AGENT → DEEPGRAM → OPENAI GPT-4o → TTS VOICE
                                          ↓
                                   @function_tool
                                          ↓
                                  GOOGLE SHEETS API`,
    archNote: 'The @function_tool branch is the product insight: lead capture fires mid-call, async, without pausing the audio stream.',
    description: 'A voice AI agent that handles real-time intake conversations for med spas: service FAQs, pricing, consultation booking. It talks to callers like a receptionist, not a chatbot. When it has collected a caller\'s name, phone number, and service interest, it writes the lead directly to Google Sheets without interrupting the conversation.',
    detail: 'The core problem was making the LLM behave as a reliable receptionist, not a chatbot. This required careful system prompt engineering, turn-taking logic via LiveKit\'s Agents SDK, and a @function_tool decorator that fires when the model has collected enough context. The Sheets write happens asynchronously without dropping the audio stream.',
    signals: [
      'Real-time streaming architecture (WebRTC + audio pipeline)',
      'LLM function calling and autonomous agent orchestration',
      'Multi-service API integration across 4 external systems',
      'Production voice AI built to understand the platform from the inside',
    ],
    stack: ['LiveKit Agents', 'Deepgram', 'OpenAI GPT-4o', 'Google Sheets API', 'Python'],
    github: 'https://github.com/darmstr3',
  },
]

const experience = [
  {
    role: 'Customer Success Manager II',
    company: 'Topline Pro',
    period: '2025–Present',
    metric: { value: '400+', label: 'accounts managed' },
    summary: 'Diagnose lead generation failures across the full acquisition stack: ads, landing pages, GBP, CRM. Supporting rollout of an AI Sales Assistant across voice and SMS. Drive incremental MRR through problem-first recommendations, not upsell pressure.',
  },
  {
    role: 'UX & Digital Strategy Consultant',
    company: 'Independent',
    period: '2023–2025',
    metric: { value: '15+', label: 'client engagements' },
    summary: 'Translated business goals into system architecture for clients across healthcare, services, and e-commerce. Designed and implemented end-to-end acquisition funnels. Owned full implementation from kickoff to launch.',
  },
  {
    role: 'Customer Success Manager',
    company: 'Levelset (Procore)',
    period: '2022–2023',
    metric: { value: '200+', label: 'accounts managed' },
    summary: 'Managed onboarding and renewal for 200+ SaaS accounts. Ran QBR-style reviews with operational and executive stakeholders. Translated complex lien rights workflows into customer outcomes.',
  },
]

const consultingCards = [
  {
    title: 'Discovery & Auditing',
    desc: 'Diagnosing what\'s broken before recommending what to build. Funnel analysis, UX audits, stakeholder interviews.',
  },
  {
    title: 'System Architecture',
    desc: 'Translating business goals into systems that deliver them. From acquisition flows to full product infrastructure.',
  },
  {
    title: 'Stakeholder Alignment',
    desc: 'Making the technical legible to the non-technical. Getting buy-in, setting expectations, running the room.',
  },
  {
    title: 'Implementation & Launch',
    desc: 'Owning the full build. Not handing off a deck. Shipping the thing and measuring what happens next.',
  },
]

export default function Home() {
  const [activeProject, setActiveProject] = useState(null)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formState, _replyto: formState.email }),
      })
      if (res.ok) setSubmitted(true)
    } catch (err) {
      console.error(err)
    }
    setSubmitting(false)
  }

  return (
    <main className={styles.main}>

      {/* NAV */}
      <nav className={styles.nav}>
        <span className={styles.navName}>DA</span>
        <div className={styles.navLinks}>
          <a href="#work">Work</a>
          <a href="#consulting">Consulting</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <span className={styles.dot} />
          New York, NY · Builder
        </div>
        <h1 className={styles.heroTitle}>
          CSM by day.<br />Builder by night.
        </h1>
        <p className={styles.heroSub}>
          Started in customer success. Went independent, built real systems for clients. Now I build AI products on the side because the problems are interesting and I want to understand these platforms from the inside.
        </p>
        <div className={styles.heroBottom}>
          <div className={styles.heroMeta}>
            <span>New York, NY</span>
            <span className={styles.heroDivider}>·</span>
            <span>Customer Success</span>
            <span className={styles.heroDivider}>·</span>
            <span>Builder</span>
          </div>
          <div className={styles.heroLinks}>
            <a href="https://github.com/darmstr3" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>GitHub ↗</a>
            <a href="https://www.linkedin.com/in/donovan-armstrong-06144b20b/" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>LinkedIn ↗</a>
          </div>
        </div>
      </section>

      {/* ARC */}
      <section className={styles.arcSection}>
        <div className={styles.arcLeft}>
          <span className={styles.sectionLabel}>The arc</span>
          <h2 className={styles.arcHeading}>From understanding people to building for them.</h2>
        </div>
        <div className={styles.arcRight}>
          <p className={styles.arcText}>
            My career started in customer success, learning how software actually gets used, where it breaks down, and what good implementation looks like from the other side of the table.
          </p>
          <p className={styles.arcText}>
            That background gave me something most builders don't have: I know what breaks in the real world, I know how to explain a system to someone who doesn't care how it works, and I know what good implementation looks like from the customer's side.
          </p>
          <p className={styles.arcText}>
            In between, I went independent. Ran my own UX and digital strategy practice, working directly with clients to design and build the systems they needed. Not freelancing on the side. Actually running a business.
          </p>
          <p className={styles.arcText}>
            Now I build. Voice agents, API integrations, full-stack products. The problems are interesting and building is the fastest way to actually understand how these platforms work.
          </p>
        </div>
      </section>

      {/* WORK */}
      <section className={styles.section} id="work">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>01 — Work</span>
        </div>
        <div className={styles.projects}>
          {projects.map((p) => (
            <article
              key={p.id}
              className={`${styles.projectCard} ${activeProject === p.id ? styles.projectCardOpen : ''}`}
            >
              <div className={styles.projectMeta}>
                <div className={styles.projectMetaLeft}>
                  <span className={styles.projectTag}>{p.tag}</span>
                  <span className={`${styles.projectStatus} ${p.status === 'Live' ? styles.statusLive : styles.statusActive}`}>
                    <span className={p.status === 'Live' ? styles.statusDotGreen : styles.statusDotAmber} />
                    {p.status}
                  </span>
                </div>
              </div>

              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectPitch}>{p.pitch}</p>

              <div className={styles.archBlock}>
                <span className={styles.archLabel}>// system pipeline</span>
                <pre className={styles.archPre}>{p.architecture}</pre>
                {p.archNote && <p className={styles.archNote}>{p.archNote}</p>}
              </div>

              <p className={styles.projectDesc}>{p.description}</p>

              <button
                className={styles.projectExpand}
                onClick={() => setActiveProject(activeProject === p.id ? null : p.id)}
              >
                <span className={styles.expandIcon}>{activeProject === p.id ? '−' : '+'}</span>
                {activeProject === p.id ? 'Hide technical detail' : 'Show technical detail'}
              </button>

              {activeProject === p.id && (
                <div className={styles.projectDetail}>
                  <div className={styles.projectDetailGrid}>
                    <div className={styles.detailBlock}>
                      <span className={styles.detailLabel}>// Technical depth</span>
                      <p className={styles.detailText}>{p.detail}</p>
                    </div>
                    <div className={styles.detailBlock}>
                      <span className={styles.detailLabel}>// What this demonstrates</span>
                      <ul className={styles.signalList}>
                        {p.signals.map((s, i) => (
                          <li key={i} className={styles.signalItem}>
                            <span className={styles.signalBullet}>→</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles.projectFooter}>
                    <div className={styles.stackList}>
                      {p.stack.map(s => (
                        <span key={s} className={styles.stackTag}>{s}</span>
                      ))}
                    </div>
                    <div className={styles.projectLinks}>
                      {p.github && (
                        <a href={p.github} className={styles.projectLink} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CONSULTING */}
      <section className={styles.section} id="consulting">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>02 — Consulting</span>
        </div>
        <div className={styles.consultingGrid}>
          <div className={styles.consultingLeft}>
            <h2 className={styles.consultingHeading}>Shaping digital strategy<br />on my own terms.</h2>
            <p className={styles.consultingDesc}>
              For over a year I ran an independent UX and digital strategy practice. Not a side project. A real business. I worked directly with clients to translate what they were trying to accomplish into systems that actually delivered it.
            </p>
            <p className={styles.consultingDesc}>
              15+ client engagements. Every one owned end to end: discovery, architecture, implementation, launch.
            </p>
          </div>
          <div className={styles.consultingRight}>
            <div className={styles.consultingCards}>
              {consultingCards.map(card => (
                <div key={card.title} className={styles.consultingCard}>
                  <span className={styles.consultingCardTitle}>{card.title}</span>
                  <span className={styles.consultingCardDesc}>{card.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section} id="experience">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>03 — Experience</span>
        </div>
        <div className={styles.expList}>
          {experience.map((e, i) => (
            <div key={i} className={styles.expItem}>
              <div className={styles.expLeft}>
                {e.metric && (
                  <div className={styles.expMetric}>
                    <span className={styles.expMetricValue}>{e.metric.value}</span>
                    <span className={styles.expMetricLabel}>{e.metric.label}</span>
                  </div>
                )}
                <span className={styles.expPeriod}>{e.period}</span>
              </div>
              <div className={styles.expRight}>
                <div className={styles.expHeader}>
                  <span className={styles.expRole}>{e.role}</span>
                  <span className={styles.expCompany}>{e.company}</span>
                </div>
                <p className={styles.expSummary}>{e.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className={styles.aboutSection} id="about">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <span className={styles.sectionLabel}>04 — About</span>
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.aboutText}>
              I spent years in customer success at SaaS companies: managing portfolios, diagnosing broken systems, translating what a product can do into outcomes customers actually care about. I got good at understanding how things work end to end.
            </p>
            <p className={styles.aboutText}>
              So I went independent. Then I started building. A voice AI agent on LiveKit's platform. A full-stack website generator on the Claude API. Real products, real APIs, real deployments.
            </p>
            <p className={styles.aboutText}>
              I'm most interested in work where technical depth and customer impact overlap. Specifically developer infrastructure, where understanding the API is what makes you useful.
            </p>
            <div className={styles.aboutTargets}>
              <span className={styles.aboutTargetLabel}>Ecosystem</span>
              <div className={styles.aboutTags}>
                {['LiveKit', 'Stripe', 'Twilio', 'Datadog', 'Cloudflare'].map(t => (
                  <span key={t} className={styles.aboutTag}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.section} id="contact">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>05 — Contact</span>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <h2 className={styles.contactTitle}>Let's talk.</h2>
            <p className={styles.contactSub}>Open to the right role. If it's a fit, I'll know quickly.</p>
            <a href="mailto:armstrongdonovan3@gmail.com" className={styles.contactEmail}>
              armstrongdonovan3@gmail.com
            </a>
            <div className={styles.contactSocials}>
              <a href="https://github.com/darmstr3" target="_blank" rel="noopener noreferrer" className={styles.contactSocial}>GitHub ↗</a>
              <a href="https://www.linkedin.com/in/donovan-armstrong-06144b20b/" target="_blank" rel="noopener noreferrer" className={styles.contactSocial}>LinkedIn ↗</a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.contactSocial}>Resume ↗</a>
            </div>
          </div>
          <div className={styles.contactRight}>
            {submitted ? (
              <div className={styles.successMsg}>
                <span className={styles.successIcon}>✓</span>
                <p>Got it. I'll be in touch.</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <textarea
                    className={styles.textarea}
                    placeholder="What's on your mind?"
                    rows={4}
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    required
                  />
                </div>
                <button className={styles.submitBtn} type="submit" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span>Donovan Armstrong © 2026</span>
        <div className={styles.footerLinks}>
          <a href="https://github.com/darmstr3" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/donovan-armstrong-06144b20b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:armstrongdonovan3@gmail.com">Email</a>
        </div>
      </footer>

    </main>
  )
}
