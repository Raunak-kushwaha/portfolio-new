"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./SectionHeading"
import { GraduationCap, Award } from "lucide-react"

const skillsGroups = [
  {
    title: "UX Methods",
    skills: ["User Research", "Personas & Journeys", "Design Thinking", "User Flows", "Wireframing", "Information Architecture"]
  },
  {
    title: "Design Principles",
    skills: ["Accessibility", "Typography", "Color Theory", "Design Systems"]
  },
  {
    title: "UI & Visual Design",
    skills: ["High-Fidelity UI", "Interaction Design", "Graphic Design"]
  },
  {
    title: "Design Tools",
    skills: ["Figma", "FigJam", "Framer", "Miro", "Notion", "Canva", "Lovable"]
  }
]

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    school: "Amity University Rajasthan",
    date: "2022 – 2026"
  },
  {
    degree: "Minor in Visual Communication (BA)",
    school: "Amity University Rajasthan",
    date: "2022 – 2026"
  },
  {
    degree: "Higher Secondary (CBSE)",
    school: "Kendriya Vidyalaya",
    date: "2022"
  }
]

const certifications = [
  "Accenture - Digital Skills: User Experience",
  "Internshala - Web Development",
  "IIT Kanpur - Full Stack Web Development MERN",
  "Goldman Sachs - Software Engineering Training",
  "Deloitte Australia - Data Analytics Training",
  "Responsive Web Design",
  "The Origins III: JavaScript"
]

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills, Education & Certs" 
          subtitle="My toolkit and academic background." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8 text-2xl font-bold">
              <span className="h-6 w-1 bg-accent rounded-full"></span>
              <h3>Core Competencies</h3>
            </div>
            
            <div className="space-y-8">
              {skillsGroups.map((group, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-secondary-foreground font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-muted/50 border border-border rounded-xl text-sm font-medium hover:border-accent/40 text-foreground transition-all cursor-default hover:-translate-y-0.5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications */}
          <div className="space-y-16">
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-2xl font-bold">
                <GraduationCap className="text-accent w-7 h-7" />
                <h3>Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col border-l-2 border-border pl-4"
                  >
                    <h4 className="text-lg font-bold text-foreground">{item.degree}</h4>
                    <span className="text-muted-foreground mt-1">{item.school}</span>
                    <span className="text-sm font-mono text-accent mt-2">{item.date}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8 text-2xl font-bold">
                <Award className="text-accent w-7 h-7" />
                <h3>Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start"
                  >
                    <span className="text-accent mr-3 font-bold">✓</span>
                    <span className="text-muted-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
