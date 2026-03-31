"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { SectionHeading } from "./SectionHeading"
import { GraduationCap, Award } from "lucide-react"

function GravityChip({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useMotionValue(0)

  // Calibrated springs for heavy, physical snap back
  const springConfig = { stiffness: 400, damping: 25, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const springRotate = useSpring(rotate, springConfig)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const { clientX, clientY } = e
      const { width, height, left, top } = ref.current.getBoundingClientRect()
      
      const centerX = left + width / 2
      const centerY = top + height / 2

      const distX = clientX - centerX
      const distY = clientY - centerY
      
      const distance = Math.sqrt(distX * distX + distY * distY)
      // Radius of the gravitational field
      const maxRadius = 160

      if (distance < maxRadius && distance > 0) {
        // Calculate repulsion force (0 to 1)
        const force = (maxRadius - distance) / maxRadius
        
        // Push chip away from cursor
        const pushX = -(distX / distance) * force * 50
        const pushY = -(distY / distance) * force * 50
        
        // Tilt chip away
        const angle = -(distX / distance) * force * 15
        
        x.set(pushX)
        y.set(pushY)
        rotate.set(angle)
      } else {
        // Snap back
        x.set(0)
        y.set(0)
        rotate.set(0)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y, rotate])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, rotate: springRotate }}
      className="px-4 py-2 bg-background/50 glass border border-border rounded-xl text-sm font-medium hover:text-accent shadow-sm select-none z-10 inline-block"
    >
      {children}
    </motion.div>
  )
}

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
  "AI Fluency for students — Anthropic",
  "Claude Code in Action — Anthropic",
  "Introduction to Model Context Protocol — Anthropic",
  "Digital Skills: User Experience — Accenture",
  "Full Stack Web Development (MERN) — IIT Kanpur",
  "The Origins III: JavaScript — Codédex",
  "Responsive Web Design — freeCodeCamp",
  "Data Analytics Job Simulation — Deloitte Australia",
  "Software Engineering Job Simulation — Goldman Sachs"
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
                  <div className="flex flex-wrap gap-2 relative">
                    {group.skills.map((skill, i) => (
                      <GravityChip key={i}>
                        {skill}
                      </GravityChip>
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
