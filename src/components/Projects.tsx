"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./SectionHeading"
import { ExternalLink, Folder } from "lucide-react"

const projectsData = [
  {
    title: "ZESTRO",
    category: "Branding",
    date: "01/2026",
    description: "Designed ZESTRO, a conceptual fast-casual food brand, focusing on a friendly visual identity and scalable branding system.",
    tech: ["Figma", "Illustrator", "Branding Design"]
  },
  {
    title: "Student ERP Portal Redesign",
    category: "UI/UX",
    date: "01/2026",
    description: "Redesigned the commonly used ERP portal by students for tracking their academic progress and related work.",
    tech: ["Figma", "User Research", "Wireframing", "Prototyping"]
  },
  {
    title: "FusionCrew",
    category: "MERN Stack",
    date: "08/2025",
    description: "Built a platform for showcasing collaborative or individual projects. This project was recognised by IIT Kanpur.",
    tech: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    title: "UniqueNotes",
    category: "Full-Stack",
    date: "04/2025",
    description: "Designed for a seamless, user-friendly note management experience. Fully capable of handling continuous CRUD operations.",
    tech: ["HTML", "CSS", "Java", "JavaScript", "Servlet", "JSP", "MySQL"]
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Some Things I've Built" 
          subtitle="A selection of my recent works." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between group transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-accent/5 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-muted rounded-xl text-accent">
                    <Folder className="w-8 h-8" />
                  </div>
                  <div className="flex gap-4">
                    <button className="text-muted-foreground hover:text-accent transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-mono text-accent mb-2">{project.category} · {project.date}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-sm font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
