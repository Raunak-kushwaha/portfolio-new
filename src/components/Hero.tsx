"use client"

import * as React from "react"
import { ArrowRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion, useScroll, useTransform } from "framer-motion"

export function Hero() {
  const { scrollY } = useScroll()
  // Parallax effects
  const yText = useTransform(scrollY, [0, 1000], [0, 200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.95])

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-56 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" data-design-tag="max-w-7xl mx-auto sm:px-6">
        <motion.div className="max-w-3xl" style={{ y: yText, opacity, scale }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 
              className="text-accent font-mono font-medium tracking-tight mb-4"
              data-design-tag="font-mono text-accent tracking-tighter"
            >
              Hi, my name is
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 
              className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4"
              data-design-tag="font-sans 7xl font-bold"
            >
              Raunak Kushwaha.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 
              className="text-4xl sm:text-6xl font-bold tracking-tight text-muted-foreground mb-6"
              data-design-ruler="margin-bottom: 24px"
            >
              I build intuitive digital experiences.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p 
              className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed"
              data-design-ruler="margin-bottom: 40px"
            >
              I'm a passionate <span className="text-foreground font-medium" data-design-tag="font-medium inline">UI/UX Designer</span> and <span className="text-foreground font-medium">Full-Stack (MERN) Developer</span> with a Computer Science degree, seeking entry-level opportunities. With proficiency in modern design tools and web technologies, I focus on turning complex problems into elegant, user-centered solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
            data-design-tag="flex row gap-16px items-center"
          >
            <a 
              href="mailto:raunakkush2005@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </a>
            
            <a
              href="/Resume - Onep.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 glass hover-glass font-medium rounded-lg"
            >
              <Download className="h-4 w-4" /> Resume
            </a>
            
            <div className="flex items-center gap-2 ml-2">
              <a href="#" className="p-3 glass hover-glass rounded-lg text-muted-foreground hover:text-foreground" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 glass hover-glass rounded-lg text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
