"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./SectionHeading"
import { Briefcase, Building } from "lucide-react"

const experienceData = [
  {
    role: "Intern - UI/UX Designer",
    company: "Infotact Solutions",
    date: "02/2026 – Present",
    description: [
      "Designing user interfaces for web and mobile applications."
    ],
    skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "UI/UX Design"]
  },
  {
    role: "Intern - Full-Stack (MERN) Developer",
    company: "Indian Institute of Technology Kanpur",
    date: "06/2025 – 08/2025",
    description: [
      "Created a full-stack student dashboard web application using the MERN stack to manage assignments, grades, and schedules."
    ],
    skills: ["MongoDB", "Express.js", "React", "Node.js", "Full-Stack"]
  },
  {
    role: "Trainee - Web Developer",
    company: "Internshala Training",
    date: "06/2024 – 07/2024",
    description: [
      "Developed dynamic web apps with JavaScript and jQuery.",
      "Gained PHP/MySQL backend experience and deployed a responsive web project."
    ],
    skills: ["JavaScript", "jQuery", "PHP", "MySQL", "Responsive Design"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Experience"
          subtitle="My professional work history and technical training."
        />

        <div className="relative pl-8 md:pl-0">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "100%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-[264px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-accent/50 to-transparent z-0"
          >
            <div className="absolute inset-0 bg-accent/20 blur-[2px]" />
          </motion.div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 group"
              >
                {/* Desktop Date */}
                <div className="hidden md:block w-48 shrink-0 text-right mt-1">
                  <span className="text-sm font-mono text-muted-foreground whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-[-40px] md:static w-12 h-12 rounded-full glass flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors shrink-0 z-10 shadow-lg mt-0 md:-mt-[18px]">
                  <Briefcase className="w-5 h-5 transition-transform group-hover:scale-110" />
                </div>

                {/* Content */}
                <div className="flex-1 glass p-6 md:p-8 rounded-2xl border border-border shadow-sm group-hover:border-accent/40 transition-all hover:-translate-y-1">
                  <div className="flex flex-col gap-1 mb-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-medium text-accent">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    {/* Mobile Date */}
                    <span className="md:hidden text-sm font-mono text-muted-foreground mt-2">
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-muted-foreground">
                        <span className="text-accent mr-2 leading-tight">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
