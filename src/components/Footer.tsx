"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Download, Mail } from "lucide-react"
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"

export function SubFooter() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-20 lg:pt-32 pb-10 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto flex flex-col items-center"
      >
        <div className="text-accent font-mono font-medium tracking-tight mb-4 uppercase text-sm">
          What's Next?
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
          Let's Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          I'm currently seeking entry-level opportunities as a UI/UX Designer or Front-End Developer. Whether you have an open role, a project in mind, or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-wrap gap-4 items-center justify-center mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-transform hover:-translate-y-1 shadow-lg hover:shadow-accent/20"
          >
            Say Hello <ArrowRight className="h-5 w-5" />
          </Link>

          <a
            href="/Resume - Onep.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 glass hover-glass font-medium rounded-lg"
          >
            <Download className="h-5 w-5" /> Download Resume
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export function MainFooter() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-10">
      <div className="flex gap-6 justify-center text-muted-foreground mb-8">
        <a href="https://github.com/Raunak-kushwaha" className="hover:text-accent transition-colors" aria-label="GitHub">
          <FaGithub className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/in/raunak-kushkushwaha/" className="hover:text-accent transition-colors" aria-label="LinkedIn">
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="https://discord.com/users/756028503408902226" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Discord">
          <FaDiscord className="h-6 w-6" />
        </a>
        <a href="mailto:raunakkush2005@gmail.com" className="hover:text-accent transition-colors" aria-label="Email">
          <Mail className="h-6 w-6" />
        </a>
      </div>

      <p className="text-sm font-mono text-muted-foreground/60">
        Designed & Built by Raunak Kushwaha
      </p>
    </div>
  )
}

interface FooterProps {
  showSubFooter?: boolean
}

export function Footer({ showSubFooter = true }: FooterProps) {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {showSubFooter && <SubFooter />}
      <MainFooter />
    </footer>
  )
}

