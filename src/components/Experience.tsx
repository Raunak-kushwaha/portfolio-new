"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SectionHeading } from "./SectionHeading"
import { Briefcase } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const experienceData = [
  {
    role: "UI/UX Designer Intern",
    company: "Infotact Solutions",
    date: "2026 — Present",
    description: "Designing user interfaces for web and mobile applications.",
    skills: ["Figma", "Illustrator", "Photoshop"]
  },
  {
    role: "Full-Stack Developer Intern",
    company: "IIT Kanpur",
    date: "2025",
    description: "Built a full-stack student dashboard web application using the MERN stack.",
    skills: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    role: "Web Developer Trainee",
    company: "Internshala",
    date: "2024",
    description: "Developed dynamic web apps with JavaScript and jQuery. Deployed a responsive web project.",
    skills: ["JavaScript", "jQuery", "PHP", "MySQL"]
  }
]

export function Experience() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-entry", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.7,
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
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked."
        />

        <div ref={ref} className="mt-12 space-y-0">
          {experienceData.map((exp, i) => (
            <div
              key={i}
              className="exp-entry group border-b border-foreground/10 py-8 lg:py-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12">
                <div className="lg:w-40 shrink-0 flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground font-mono">{exp.date}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-accent text-sm mt-1">{exp.company}</p>
                  <p className="text-muted-foreground mt-3 max-w-lg leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span key={s} className="text-xs font-mono text-muted-foreground/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
