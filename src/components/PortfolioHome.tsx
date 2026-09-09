"use client"

import * as React from "react"
import Image from "next/image"

const projects = [
  {
    number: "01",
    title: "Credixa",
    category: "MERN fintech / Jan—Apr 2026",
    description: "A modern finance platform for balances, peer-to-peer transfers, fixed deposits and clear activity insights in one composed dashboard.",
    color: "#7fe6d2",
    visual: "credixa-art",
  },
  {
    number: "02",
    title: "Lumen",
    category: "Healthcare UX / Mar 2026",
    description: "A neonatal monitoring concept designed to give caregivers and doctors a calmer, faster view of infant health in real time.",
    color: "#f5adbd",
    visual: "lumen-art",
  },
  {
    number: "03",
    title: "ZESTRO",
    category: "Brand identity / Jan—Feb 2026",
    description: "A bold, friendly identity for a conceptual fast-casual food brand — built for packaging, signage and everyday customer touchpoints.",
    color: "#ffdc52",
    visual: "zestro-art",
    href: "https://www.behance.net/gallery/242729979/ZESTRO-Burger-Brand-Identity",
  },
  {
    number: "04",
    title: "Student ERP",
    category: "Product redesign / Dec 2025—Jan 2026",
    description: "A clearer, less stressful academic dashboard for the tiny decisions students make every day.",
    color: "#ab8cff",
    visual: "erp-art",
  },
  {
    number: "05",
    title: "FusionCrew",
    category: "MERN platform / Jul—Sep 2025",
    description: "A collaborative platform built with MERN for students to discover, share and celebrate their work together.",
    color: "#65cdaa",
    visual: "fusion-art",
  },
  {
    number: "06",
    title: "UniqueNotes",
    category: "Java + MySQL / Feb—Apr 2025",
    description: "A secure, user-friendly notes platform built with Java Servlets and MySQL for managing personal notes with ease.",
    color: "#f9b4b2",
    visual: "notes-art",
    href: "https://github.com/Raunak-kushwaha/UniqueNotes",
  },
]

const skills = [
  { title: "Experience design", text: "Research, personas, user journeys, flows and information architecture.", shape: "01" },
  { title: "Interface systems", text: "Interfaces that make dense tasks feel lucid, calm and delightful.", shape: "02" },
  { title: "Visual identity", text: "Brand worlds, graphic language, type and expressive art direction.", shape: "03" },
  { title: "Prototyping", text: "Figma, FigJam, Framer and motion-minded interaction experiments.", shape: "04" },
  { title: "Built for real", text: "React, Node, MongoDB and the practical empathy of shipping.", shape: "05" },
]

const education = [
  { date: "2022—2026", title: "B.Tech · Computer Science & Engineering", place: "Amity University Rajasthan", text: "Minor in Visual Communication — a deliberately cross-disciplinary foundation in technology and visual storytelling." },
  { date: "2022", title: "Higher Secondary · CBSE", place: "Kendriya Vidyalaya", text: "A curiosity for how things work that eventually grew into a practice of designing and building them." },
]

const experience = [
  { date: "2026 - Present", title: "UI/UX Designer · itsmyscreen", text: "Contributing to a product that makes discovering, planning and booking outdoor advertising feel as direct as digital media." },
  { date: "2025", title: "Full-stack Developer Intern · IIT Kanpur", text: "Built a MERN student dashboard for assignments, grades and schedules." },
  { date: "2024", title: "Web Developer Trainee · Internshala", text: "Developed and deployed responsive JavaScript and PHP web experiences." },
]

export function PortfolioHome() {
  const [activeProject, setActiveProject] = React.useState(0)

  React.useEffect(() => {
    const root = document.documentElement
    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`)
      root.style.setProperty("--pointer-y", `${event.clientY}px`)
    }
    window.addEventListener("pointermove", updatePointer, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 }
    )
    document.querySelectorAll("[data-reveal]").forEach((item) => observer.observe(item))

    return () => {
      window.removeEventListener("pointermove", updatePointer)
      observer.disconnect()
    }
  }, [])


  const handleProjectKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "Home" && event.key !== "End") return
    event.preventDefault()
    const direction = event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0
    const nextIndex = event.key === "Home" ? 0 : event.key === "End" ? projects.length - 1 : (index + direction + projects.length) % projects.length
    setActiveProject(nextIndex)
    document.getElementById(`project-tab-${nextIndex}`)?.focus()
  }

  return (
    <div className="portfolio-shell">
      <div className="ambient-glow" aria-hidden="true" />

      <section className="masthead" id="top" aria-labelledby="home-title">
        <div>
          <div className="eyebrow availability">
            <span className="pulse" /> Currently designing at
            <Image
              className="eyebrow-logo"
              src="/logodark.png"
              alt="itsmyscreen"
              width={457}
              height={100}
            />
          </div>
          <h1 className="hero-name" id="home-title">
            Raunak<br />
            <span className="outline-word">Kushwaha</span>
          </h1>
          <div className="hero-lower" data-reveal>
            <p className="hero-copy">I design friendly digital experiences and build the systems that make them real.</p>
            <a className="round-cta" href="#work" aria-label="Explore selected work">
              <span>Explore<br />the work<b>↓</b></span>
            </a>
          </div>
        </div>

        <div className="hero-art" data-reveal>
          <div className="hero-art__card">
            <div className="hero-art__top"><span>Design + Code</span><span>India / 26</span></div>
            <p className="hero-art__sentence">Make the useful feel unforgettable.</p>
            <div className="hero-art__number">R.</div>
          </div>
          <div className="hero-art__sticker">curious by<br />default</div>
          <span className="hero-index">01 / 04</span>
        </div>
      </section>

      <div className="ticker" aria-label="Areas of practice">
        <div className="ticker__track">
          {["UX strategy", "Interface design", "Brand systems", "Creative development", "UX strategy", "Interface design", "Brand systems", "Creative development"].map((item, index) => (
            <React.Fragment key={`${item}-${index}`}><span>{item}</span><i aria-hidden="true" /></React.Fragment>
          ))}
        </div>
      </div>

      <section className="section" id="about" aria-labelledby="about-title">
        <div className="section-label"><span>02 / About the practice</span><span>Greater Bengaluru Area, India</span></div>
        <div className="intro-grid" data-reveal>
          <div className="intro-stamp">Human-centred<strong>by design</strong>Systems-minded by nature</div>
          <div>
            <h2 className="intro-copy" id="about-title">I turn knots of complexity into <em>clear, characterful</em> digital experiences.</h2>
            <p className="mini-note">My sweet spot lives between intentional UX and expressive visual language. I bring a designer&apos;s care to the details and a developer&apos;s respect for how things actually get made.</p>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-label"><span id="work-title">03 / Selected work</span><span>Pick a project</span></div>
        <div className="work-layout" data-reveal>
          <div className="project-list" role="tablist" aria-label="Selected projects">
            {projects.map((project, index) => (
              <button
                className="project-tab"
                key={project.title}
                role="tab"
                aria-selected={activeProject === index}
                aria-controls={`project-${index}`}
                id={`project-tab-${index}`}
                onClick={() => setActiveProject(index)}
                onMouseEnter={() => setActiveProject(index)}
                onFocus={() => setActiveProject(index)}
                onKeyDown={(event) => handleProjectKeyDown(event, index)}
                style={{ "--tab-color": project.color } as React.CSSProperties}
              >
                <span className="project-tab__number">{project.number}</span>
                <span className="project-tab__name">{project.title}</span>
                <span className="project-tab__year">{project.category.split(" / ")[1]}</span>
              </button>
            ))}
          </div>

          <div className="project-stage">
            {projects.map((project, index) => (
              <article
                className={`project-card ${activeProject === index ? "is-active" : ""}`}
                id={`project-${index}`}
                key={project.title}
                role="tabpanel"
                aria-labelledby={`project-tab-${index}`}
                aria-hidden={activeProject !== index}
                style={{ "--project-color": project.color } as React.CSSProperties}
              >
                <div className="project-card__top">
                  <div className={`project-card__visual ${project.visual}`} aria-hidden="true">{project.visual === "fusion-art" && <span>FC</span>}</div>
                  <span className="project-card__type">{project.category}</span>
                  <h3 className="project-card__title">{project.title}</h3>
                </div>
                <div className="project-card__details">
                  <p>{project.description}</p>
                  <a
                    className="project-card__link"
                    href={project.href ?? "#contact"}
                    target={project.href ? "_blank" : undefined}
                    rel={project.href ? "noreferrer" : undefined}
                    tabIndex={activeProject === index ? 0 : -1}
                    aria-label={project.href ? `Open ${project.title} project` : `Discuss ${project.title}`}
                  >
                    ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section skills-wrap" id="capabilities" aria-labelledby="capabilities-title">
        <div className="section-label"><span id="capabilities-title">04 / What I bring</span><span>Hover for a little shift</span></div>
        <div className="skills-grid" data-reveal>
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.title}>
              <span className="skill-card__index">0{index + 1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <span className="skill-card__shape" aria-hidden="true">{skill.shape}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="section-label"><span>05 / Experience</span><span>Learning by making</span></div>
        <div className="journal-grid" data-reveal>
          <h2 className="journal-title" id="experience-title">Work that made<span>me sharper.</span></h2>
          <div className="timeline">
            {experience.map((entry) => (
              <article className="timeline-item" key={entry.title}>
                <span className="timeline-item__date">{entry.date}</span>
                <div><h3>{entry.title}</h3><p>{entry.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education" aria-labelledby="education-title">
        <div className="section-label"><span>06 / Education</span><span>Academic foundation</span></div>
        <div className="education-grid" data-reveal>
          <h2 className="education-title" id="education-title">A practice built <em>across disciplines.</em></h2>
          <div className="education-list">
            {education.map((entry) => (
              <article className="education-item" key={entry.title}>
                <span>{entry.date}</span>
                <div>
                  <h3>{entry.title}</h3>
                  <p className="education-place">{entry.place}</p>
                  <p>{entry.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-cta" id="contact" aria-labelledby="contact-title">
        <div className="section-label"><span id="contact-title">07 / Let&apos;s make something</span><span>Open to opportunities</span></div>
        <h2 className="contact-message" data-reveal>Have a good problem?<br /><a href="mailto:raunakkush2005@gmail.com">Let&apos;s give it a beautiful answer.</a></h2>
        <div className="contact-bottom" data-reveal>
          <p>Raunak Kushwaha<br />Designer &amp; developer</p>
          <a className="contact-arrow" href="mailto:raunakkush2005@gmail.com" aria-label="Email Raunak">↗</a>
        </div>
      </section>
    </div>
  )
}
