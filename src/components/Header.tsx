"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Focus, FileText } from "lucide-react"
import { useDesignMode } from "./DesignModeContext"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const { isDesignMode, toggleDesignMode } = useDesignMode()
  const pathname = usePathname()

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
            <nav className="hidden md:flex gap-1 items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-nav"
                        className="absolute inset-0 bg-accent/20 border-2 border-accent/30 rounded-full shadow-sm shadow-accent/10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                )
              })}
              <a
                href="/Resume - Onep.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-transform hover:-translate-y-0.5 shadow-sm shadow-accent/10"
              >
                <FileText className="w-3.5 h-3.5" /> Resume
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
            <div className="px-4 pt-4 pb-8 space-y-4">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "relative flex items-center justify-center py-4 text-xl font-semibold transition-all rounded-xl",
                        isActive 
                          ? "text-accent bg-accent/10 shadow-sm" 
                          : "text-muted-foreground active:text-foreground active:bg-muted/50"
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div 
                          layoutId="mobile-nav-dot"
                          className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-accent"
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="/Resume - Onep.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mt-6 px-4 py-4 text-lg font-bold bg-accent text-accent-foreground rounded-2xl shadow-lg shadow-accent/20 active:scale-95 transition-all text-center"
                >
                  <FileText className="w-5 h-5" /> Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
