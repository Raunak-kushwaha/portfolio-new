"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function SpotlightBackground() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springConfig = { damping: 50, stiffness: 200, mass: 0.5 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  return (
    <div className="fixed inset-0 overflow-hidden bg-background -z-50 pointer-events-none">
      {/* Ultra-subtle grid pattern backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />

      {/* Primary glowing tracking orb (Antigravity style) */}
      <motion.div
        className="absolute pointer-events-none opacity-[0.08] dark:opacity-[0.12]"
        style={{
          width: "1000px",
          height: "1000px",
          background: "radial-gradient(circle closest-side, var(--accent) 0%, transparent 100%)",
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          left: 0,
          top: 0
        }}
      />
      
      {/* Secondary inner energetic core */}
      <motion.div
        className="absolute pointer-events-none mix-blend-screen opacity-20 dark:opacity-30"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle closest-side, var(--accent) 0%, transparent 100%)",
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          left: 0,
          top: 0
        }}
      />
    </div>
  )
}
