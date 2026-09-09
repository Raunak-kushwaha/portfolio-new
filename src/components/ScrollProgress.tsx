"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgress() {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.to(el, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-full h-[2px] z-[200] bg-foreground origin-left"
      style={{ transform: "scaleX(0)" }}
    />
  )
}
