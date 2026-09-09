"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeading } from "./SectionHeading"
import { Award, Palette, Lightbulb, PenTool, Wrench } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const skillCategories = [
  {
    icon: Lightbulb,
    title: "UX Methods",
    skills: ["User Research", "Design Thinking", "User Flows", "Wireframing", "Information Architecture"]
  },
  {
    icon: Palette,
    title: "Design Principles",
    skills: ["Accessibility", "Typography", "Color Theory", "Design Systems"]
  },
  {
    icon: PenTool,
    title: "UI & Visual Design",
    skills: ["High-Fidelity UI", "Interaction Design", "Graphic Design"]
  },
  {
    icon: Wrench,
    title: "Design Tools",
    skills: ["Figma", "FigJam", "Framer", "Miro", "Notion", "Canva"]
  }
]

const certifications = [
  "AI Fluency — Anthropic",
  "Claude Code in Action — Anthropic",
  "Model Context Protocol — Anthropic",
  "User Experience — Accenture",
  "Full Stack MERN — IIT Kanpur",
  "JavaScript Origins — Codédex",
  "Responsive Web Design — freeCodeCamp",
  "Data Analytics — Deloitte",
  "Software Engineering — Goldman Sachs"
]

export function Skills() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-block", {
        opacity: 0,
        y: 30,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          once: true,
        },
      })

      gsap.from(".cert-entry", {
        opacity: 0,
        x: -20,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cert-list",
          start: "top 85%",
          once: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Certifications"
          subtitle="What I know and what I've earned."
        />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-12">
          {/* Skills */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillCategories.map((cat, i) => (
                <div key={i} className="skill-block">
                  <div className="flex items-center gap-2.5 mb-4">
                    <cat.icon className="w-4 h-4 text-accent" />
                    <h4 className="text-sm font-semibold text-foreground">{cat.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {cat.skills.map((skill, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground/20" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold text-foreground">Certifications</h3>
            </div>
            <ul className="cert-list space-y-3">
              {certifications.map((cert, i) => (
                <li
                  key={i}
                  className="cert-entry text-sm text-muted-foreground flex items-start gap-3 group"
                >
                  <span className="w-4 h-px bg-foreground/20 mt-2.5 shrink-0 group-hover:bg-accent group-hover:w-6 transition-all duration-300" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
