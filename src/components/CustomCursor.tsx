"use client"

import * as React from "react"
import gsap from "gsap"

export function CustomCursor() {
  const cursorRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)
  const rotationRef = React.useRef(0)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (!mounted) return
    const el = cursorRef.current
    if (!el) return

    const mouse = { x: -100, y: -100 }
    const smooth = { x: -100, y: -100 }
    const velocity = { x: 0, y: 0 }

    gsap.set(el, { xPercent: -50, yPercent: -50 })

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      gsap.to(el, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
        overwrite: "auto",
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")

      gsap.to(el, {
        scale: isInteractive ? 1.8 : 1,
        duration: 0.3,
        ease: "back.out(2)",
        overwrite: "auto",
      })
    }

    const handleMouseDown = () => {
      gsap.to(el, {
        scale: 0.7,
        duration: 0.15,
        ease: "power2.out",
        overwrite: "auto",
      })
    }

    const handleMouseUp = () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      })
    }

    const tickerFn = (_time: number, delta: number) => {
      const dt = Math.min(delta / 1000, 0.064)

      const dx = mouse.x - smooth.x
      const dy = mouse.y - smooth.y
      velocity.x += (dx * 15 - velocity.x * 10) * dt
      velocity.y += (dy * 15 - velocity.y * 10) * dt

      smooth.x += velocity.x * dt
      smooth.y += velocity.y * dt

      const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y)
      rotationRef.current += speed * 0.15 * (delta / 16.66)
      gsap.set(el, { rotate: rotationRef.current })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseover", handleMouseOver)
    window.addEventListener("mousedown", handleMouseDown, { capture: true })
    window.addEventListener("mouseup", handleMouseUp, { capture: true })
    gsap.ticker.add(tickerFn)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      gsap.ticker.remove(tickerFn)
    }
  }, [mounted])

  if (!mounted) return null
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return null

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center text-accent w-6 h-6"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>
  )
}
