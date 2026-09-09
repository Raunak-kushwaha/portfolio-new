"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const titleRef = React.useRef<HTMLHeadingElement>(null)
  const lineRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          once: true,
        },
      })

      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power3.out", transformOrigin: "left" }
      )
      .fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="mb-16">
      <div ref={lineRef} className="h-px bg-foreground/10 mb-6 origin-left" />
      <h2
        ref={titleRef}
        className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}
