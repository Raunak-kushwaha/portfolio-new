"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Experience } from "@/components/Experience"
import { Skills } from "@/components/Skills"
import { Footer } from "@/components/Footer"

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-[60vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
              About <span className="text-accent">Me.</span>
            </h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm <span className="text-foreground font-medium">Raunak Kushwaha</span>, a passionate UI/UX Designer and Full-Stack (MERN) Developer with a Computer Science degree from Amity University.
              </p>
              <p>
                My journey into tech started with a strong fascination for how digital systems were orchestrated. This curiosity naturally led me to study both the artistic side of UI/UX design—learning how human psychology interacts with interfaces—and the logical architecture of MERN stack development to actually build those systems from the ground up.
              </p>
              <p>
                When I'm not coding or pushing pixels, I'm constantly learning new paradigms and refining my personal environment, creating robust tools and immersive digital experiences. I'm currently seeking entry-level opportunities where I can turn complex problems into elegant, user-centered solutions.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="/Resume - Onep.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 font-medium bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-transform active:scale-95"
              >
                View Full Resume
              </a>
              <a
                href="mailto:raunakkush2005@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 font-medium glass hover-glass rounded-lg"
              >
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Embedded Sections */}
      <Experience />
      <Skills />

      <Footer />
    </>
  )
}
