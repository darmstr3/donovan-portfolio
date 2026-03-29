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
    description: 'A voice AI agent that handles live intake conversations — FAQs, pricing, consultation booking — and writes captured leads to Google Sheets mid-call via an LLM-triggered function tool, without interrupting the audio stream.',
    architecture:
`CALLER → LIVEKIT AGENT → DEEPGRAM → OPENAI GPT-4o → TTS VOICE
                                          ↓
                                   @function_tool
                                          ↓
                                  GOOGLE SHEETS API`,
    detail: 'The core problem was making the LLM behave as a reliable receptionist — not a chatbot. This required careful system prompt engineering, turn-taking logic via LiveKit\'s Agents SDK, and a @function_tool decorator that fires when the model has collected name, phone, and service interest. The Sheets write happens asynchronously without dropping the audio stream.',
    signals: [
      'Real-time streaming architecture (WebRTC + audio pipeline)',
      'LLM function calling and autonomous agent orchestration',
      'Multi-service API integration across 4 external systems',
      'Production voice AI — not a prototype',
    ],
    stack: ['LiveKit Agents', 'Deepgram', 'OpenAI GPT-4o', 'Google Sheets API', 'Python'],
    link: null,
    github: '#',
  },
  {
    id: 'med-spa-generator',
    tag: 'Full Stack',
    status: 'Live',
    title: 'Med Spa Website Generator',
    pitch: 'AI-powered website builder from a single brand prompt',
    description: 'A full-stack web app that generates complete, brand-aligned med spa websites from a single input. Uses the Claude API to produce structured content across 8 defined sections — hero, services, about, testimonials, and more. Includes generation history and live preview.',
    architecture:
`PROMPT → CLAUDE API → STRUCTURED JSON → NEXT.JS → VERCEL
                        (8 sections)`,
    detail: 'The key engineering challenge was enforcing consistent output structure from the LLM across 8 sections. Solved with output schemas in the system prompt and strict JSON validation. Generation history is persisted in localStorage. The entire architecture is designed as the foundation for a multi-tenant vertical SaaS product targeting independent med spa owners.',
    signals: [
      'API integration design (prompt → schema → structured render)',
      'LLM output engineering — schemas, validation, structured generation',
      'Full-stack ownership: frontend → API layer → deployment',
      'Vertical SaaS product thinking from day one',
    ],
    stack: ['Next.js', 'Claude API', 'Vercel', 'JavaScript', 'CSS'],
    link: '#',
    github: '#',
  },
]

const experience = [
  {
    role: 'Customer Success Manager II',
    company: 'Topline Pro',
    period: '2025–Present',
    metric: { value: '$15.5K', label: 'incremental MRR' },
    summary: 'Diagnose lead generation failures across the full acquisition stack — ads, landing pages, GBP, CRM. Supporting rollout of an AI Sales Assistant across voice and SMS. Drive incremental MRR through problem-first recommendations, not upsell pressure.',
  },
  {
    role: 'UX & Digital Strategy Consultant',
    company: 'Independent',
    period: '2023–2025',
    metric: { value: '15+', label: 'clients delivered' },
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

const capabilities = [
  {
    label: 'APIs & Integration',
    items: ['REST API design', 'Webhook architecture', 'LLM function calling', 'Multi-service orchestration'],
  },
  {
    label: 'Voice & Real-time',
    items: ['WebRTC / LiveKit', 'STT / TTS pipelines', 'Streaming audio', 'AI agent frameworks'],
  },
  {
    label: 'Full-Stack',
    items: ['Next.js / React', 'Python', 'Vercel / deployment', 'OpenAI / Claude APIs'],
  },
  {
    label: 'Technical CS',
    items: ['Architecture walkthroughs', 'API onboarding design', 'Integration debugging', 'Executive comms'],
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
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" className={styles.navResume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
        </div>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroTag}>
          <span className={styles.dot} />
          Technical CSM · Solutions Engineer · Builder
        </div>
        <h1 className={styles.heroTitle}>
          I turn ideas<br />into working<br />
          <span className={styles.heroAccent}>systems.</span>
        </h1>
        <p className={styles.heroSub}>
          Technical enough to build it. Clear enough to explain it.
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
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>GitHub ↗</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.heroLink}>LinkedIn ↗</a>
          </div>
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
                <span className={styles.archLabel}>// architecture</span>
                <pre className={styles.archPre}>{p.architecture}</pre>
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
                      {p.link && (
                        <a href={p.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">Live ↗</a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className={styles.capSection}>
        <div className={styles.capGrid}>
          {capabilities.map((cap) => (
            <div key={cap.label} className={styles.capCard}>
              <span className={styles.capLabel}>{cap.label}</span>
              <ul className={styles.capList}>
                {cap.items.map(item => (
                  <li key={item} className={styles.capItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section} id="experience">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>02 — Experience</span>
        </div>
        <div className={styles.expList}>
          {experience.map((e, i) => (
            <div key={i} className={styles.expItem}>
              <div className={styles.expLeft}>
                <span className={styles.expPeriod}>{e.period}</span>
                {e.metric && (
                  <div className={styles.expMetric}>
                    <span className={styles.expMetricValue}>{e.metric.value}</span>
                    <span className={styles.expMetricLabel}>{e.metric.label}</span>
                  </div>
                )}
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
            <span className={styles.sectionLabel}>03 — About</span>
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.aboutText}>
              I spent years in customer success at SaaS companies — managing portfolios, diagnosing broken onboarding flows, translating product capabilities into outcomes. Along the way I realized I was more interested in how the systems worked than in managing the relationships.
            </p>
            <p className={styles.aboutText}>
              So I started building. A voice AI agent on LiveKit's platform. A full-stack website generator on the Claude API. Real products, real APIs, real deployments.
            </p>
            <p className={styles.aboutText}>
              I'm most interested in work where technical depth and customer impact overlap — specifically developer infrastructure, where understanding the API is what makes you useful.
            </p>
            <div className={styles.aboutTargets}>
              <span className={styles.aboutTargetLabel}>Ecosystem</span>
              <div className={styles.aboutTags}>
                {['LiveKit', 'Stripe', 'Twilio', 'Datadog', 'Cloudflare', 'Vercel', 'Anthropic'].map(t => (
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
          <span className={styles.sectionLabel}>04 — Contact</span>
        </div>
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <h2 className={styles.contactTitle}>Let's talk.</h2>
            <p className={styles.contactSub}>Open to the right role. If it's a fit, I'll know quickly.</p>
            <a href="mailto:armstrongdonovan3@gmail.com" className={styles.contactEmail}>
              armstrongdonovan3@gmail.com
            </a>
            <div className={styles.contactSocials}>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.contactSocial}>GitHub ↗</a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.contactSocial}>LinkedIn ↗</a>
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
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:armstrongdonovan3@gmail.com">Email</a>
        </div>
      </footer>

    </main>
  )
}
