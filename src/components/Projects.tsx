"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeading } from "./SectionHeading"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "ZESTRO",
    category: "Branding",
    year: "2026",
    description: "A conceptual fast-casual food brand with a friendly visual identity and scalable branding system.",
    tech: ["Figma", "Illustrator"],
    color: "#7161ef",
  },
  {
    title: "Student ERP Portal",
    category: "UI/UX Redesign",
    year: "2026",
    description: "Redesigned the commonly used ERP portal by students for tracking their academic progress.",
    tech: ["Figma", "User Research", "Prototyping"],
    color: "#b79ced",
  },
  {
    title: "FusionCrew",
    category: "Full-Stack",
    year: "2025",
    description: "A platform for showcasing collaborative projects. Recognised by IIT Kanpur.",
    tech: ["React", "Node.js", "MongoDB"],
    color: "#dec0f1",
  },
  {
    title: "UniqueNotes",
    category: "Full-Stack",
    year: "2025",
    description: "Seamless note management experience with continuous CRUD operations.",
    tech: ["JavaScript", "PHP", "MySQL"],
    color: "#efd9ce",
  },
]

function ProjectItem({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = React.useRef<HTMLDivElement>(null)
  const imgRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    const img = imgRef.current
    if (!el || !img) return

    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      gsap.to(img, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.4,
        ease: "power2.out",
      })
    }

    const handleLeave = () => {
      gsap.to(img, { x: 0, y: 0, opacity: 0, duration: 0.3 })
    }

    const handleEnter = () => {
      gsap.to(img, { opacity: 1, duration: 0.3 })
    }

    el.addEventListener("mousemove", handleMouse)
    el.addEventListener("mouseleave", handleLeave)
    el.addEventListener("mouseenter", handleEnter)

    return () => {
      el.removeEventListener("mousemove", handleMouse)
      el.removeEventListener("mouseleave", handleLeave)
      el.removeEventListener("mouseenter", handleEnter)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="project-item group relative border-b border-foreground/10 py-8 lg:py-10 cursor-pointer"
    >
      {/* Floating image preview */}
      <div
        ref={imgRef}
        className="hidden lg:block absolute pointer-events-none opacity-0 z-10 w-64 h-44 rounded-xl overflow-hidden"
        style={{ background: project.color }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-foreground/30">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{project.category}</span>
            <span className="text-xs text-muted-foreground">·</span>
            <span className="text-xs text-muted-foreground">{project.year}</span>
          </div>

          <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="mt-3 text-muted-foreground max-w-lg leading-relaxed">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="text-xs font-mono text-muted-foreground/60">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="shrink-0 mt-2 w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Selected Work"
          subtitle="A few projects I've worked on."
        />

        <div ref={ref} className="mt-12">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
