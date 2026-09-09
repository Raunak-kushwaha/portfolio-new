"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const lineRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, transformOrigin: "left" }
      )
      .fromTo(contentRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )

      gsap.to(contentRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div ref={lineRef} className="h-px bg-foreground/20 mb-10 lg:mb-16 origin-left" />

        <div ref={contentRef}>
          <div className="max-w-5xl">
            <h1
              className="text-[clamp(2.5rem,8vw,7rem)] leading-[1.05] font-bold tracking-[-0.03em] text-foreground"
            >
              Raunak
              <br />
              <span className="text-muted-foreground">Kushwaha</span>
            </h1>
          </div>

          <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <p className="text-lg lg:text-xl text-muted-foreground max-w-md leading-relaxed">
              Designing &amp; building digital experiences that feel right.
              UI/UX Designer &amp; Full-Stack Developer based in India.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                <span className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  →
                </span>
                Learn more
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/60"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-8 bg-foreground/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-foreground animate-bounce" />
        </div>
      </div>
    </section>
  )
}
