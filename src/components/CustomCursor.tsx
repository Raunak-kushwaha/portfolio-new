"use client"

import * as React from "react"
import { motion, useSpring, useMotionValue, useAnimationFrame } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const rotation = useMotionValue(0)
  const [isHovering, setIsHovering] = React.useState(false)
  const [isMouseDown, setIsMouseDown] = React.useState(false)

  // Use a spring to smooth the speed changes
  const speedSpring = useSpring(0, { stiffness: 100, damping: 10 })

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

    const handleMouseDown = () => setIsMouseDown(true)
    const handleMouseUp = () => setIsMouseDown(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    // Using capture: true ensures we get the click even if its propagation was stopped
    window.addEventListener("mousedown", handleMouseDown, { capture: true })
    window.addEventListener("mouseup", handleMouseUp, { capture: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown, { capture: true })
      window.removeEventListener("mouseup", handleMouseUp, { capture: true })
    }
  }, [cursorX, cursorY])

  // Update rotation based on speed every frame
  useAnimationFrame((time, delta) => {
    const idleSpeed = 0.5
    const hoverSpeed = 3
    const clickSpeed = 20

    const targetSpeed = isMouseDown ? clickSpeed : (isHovering ? hoverSpeed : idleSpeed)
    speedSpring.set(targetSpeed)

    const currentRotation = rotation.get()
    // Increment the rotation based on the smoothed current speed
    rotation.set(currentRotation + speedSpring.get() * (delta / 16.66))
  })

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
        style={{
          rotate: rotation,
          scale: isMouseDown ? 0.8 : (isHovering ? 1.6 : 1)
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 40,
            damping: 10
          }
        }}
        className="flex items-center justify-center w-6 h-6"
      >
        <NinjaStarSVG />
      </motion.div>
    </motion.div>
  )
}
