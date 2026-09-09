"use client"

import * as React from "react"
import gsap from "gsap"

export function SpotlightBackground() {
  const orbRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const orb = orbRef.current
    if (!orb) return

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const smooth = { x: mouse.x, y: mouse.y }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const tickerFn = (_time: number, delta: number) => {
      const dt = Math.min(delta / 1000, 0.064)
      smooth.x += (mouse.x - smooth.x) * 2 * dt
      smooth.y += (mouse.y - smooth.y) * 2 * dt
      gsap.set(orb, { x: smooth.x, y: smooth.y, xPercent: -50, yPercent: -50 })
    }

    gsap.ticker.add(tickerFn)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      gsap.ticker.remove(tickerFn)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        ref={orbRef}
        className="absolute opacity-[0.04] dark:opacity-[0.06]"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle closest-side, var(--accent) 0%, transparent 100%)",
          left: 0,
          top: 0,
        }}
      />
    </div>
  )
}
