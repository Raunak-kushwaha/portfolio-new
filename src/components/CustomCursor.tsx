"use client"

import * as React from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [isHovering, setIsHovering] = React.useState(false)

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Wait until mounted to show cursor wrapper to prevent hydration mismatch
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) return null
  
  // Hide custom cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null
  }

  // Define SVG for ninja star (shuriken)
  const NinjaStarSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center text-accent"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%"
      }}
    >
      <motion.div
        animate={{ 
          rotate: 360,
          scale: isHovering ? 1.6 : 1 
        }}
        transition={{ 
          rotate: {
            duration: isHovering ? 0.4 : 4, 
            repeat: Infinity, 
            ease: "linear" 
          },
          scale: {
            type: "spring",
            stiffness: 400,
            damping: 25
          }
        }}
        className="flex items-center justify-center w-6 h-6"
      >
        <NinjaStarSVG />
      </motion.div>
    </motion.div>
  )
}
