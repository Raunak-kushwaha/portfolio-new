"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Focus } from "lucide-react"
import { useDesignMode } from "./DesignModeContext"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { isDesignMode, toggleDesignMode } = useDesignMode()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "w-full transition-all duration-500 z-50 fixed left-1/2 -translate-x-1/2",
          isScrolled
            ? "top-4 max-w-3xl rounded-full glass border border-white/10 shadow-lg shadow-black/20"
            : "top-0 max-w-[100vw] bg-transparent border-b border-transparent"
        )}
      >
        <div className={cn(
          "mx-auto transition-all duration-500",
          isScrolled ? "px-6" : "container px-4 sm:px-6 lg:px-8"
        )}>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold tracking-tight">
                R<span className="text-accent">K.</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Resume - Onep.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-transform hover:-translate-y-0.5"
              >
                Resume
              </a>
              <ThemeToggle />
              <button
                onClick={toggleDesignMode}
                className={cn(
                  "p-2 rounded-full transition-colors",
                  isDesignMode ? "bg-red-500/20 text-red-500" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
                title="Wonder what this will do?"
              >
                <Focus className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleDesignMode}
                className={cn(
                  "p-2 rounded-full",
                  isDesignMode ? "text-red-500" : "text-muted-foreground"
                )}
              >
                <Focus className="w-5 h-5" />
              </button>
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-foreground p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className={cn(
            "md:hidden glass border border-border absolute w-[calc(100vw-32px)] left-1/2 -translate-x-1/2 top-20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300",
            !isScrolled && "w-full rounded-none rounded-b-2xl border-t-0 -translate-y-4 top-16"
          )}>
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Resume - Onep.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 mx-2 px-4 py-3 text-center text-base font-bold bg-accent text-accent-foreground rounded-xl active:scale-95 transition-transform"
              >
                Download Resume
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
