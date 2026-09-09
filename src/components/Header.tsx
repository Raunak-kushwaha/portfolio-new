"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MorphIcon } from "morphicons/react"
import { Menu, X, ArrowUpRight } from "lucide"

const links = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Work", href: "/#work", id: "work" },
  { label: "Contact", href: "/#contact", id: "contact" },
]

export function Header() {
  const pathname = usePathname()
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const toggleRef = React.useRef<HTMLButtonElement>(null)
  const closeRef = React.useRef<HTMLButtonElement>(null)
  const [activeId, setActiveId] = React.useState("")
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 32)
    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })
    return () => window.removeEventListener("scroll", updateHeader)
  }, [])

  // Close the overlay whenever we navigate to a different route entirely.
  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (pathname !== "/") {
      setActiveId("")
      return
    }

    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: "-28% 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  // Lock body scroll, move focus in, trap Tab inside the overlay, and
  // close on Escape while the overlay is open.
  React.useEffect(() => {
    if (!menuOpen) return

    const { overflow } = document.body.style
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== "Tab") return

      const focusable = overlayRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      )
      if (!focusable || focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [menuOpen])

  const handleLinkClick = (id: string) => {
    setActiveId(id)
    setMenuOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
        <Link className="brand-mark" href="/" aria-label="Raunak Kushwaha home">
          <span className="brand-mark__dot" />RK/26
        </Link>

        <div className="header-actions">
          <a className="resume-link-btn" href="/Resume%20-%20Onep.pdf" target="_blank" rel="noreferrer">
            Resume
            <MorphIcon icon={ArrowUpRight} size={14} strokeWidth={2} className="external-icon" />
          </a>

          <button
            className="nav-toggle"
            type="button"
            ref={toggleRef}
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(true)}
          >
            <MorphIcon icon={menuOpen ? X : Menu} size={20} strokeWidth={2} className="nav-toggle__icon" />
            Menu
          </button>
        </div>
      </header>

      <div
        className={`nav-overlay ${menuOpen ? "is-open" : ""}`}
        id="main-navigation"
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <nav className="nav-overlay__inner" aria-label="Main">
          <div className={`nav-overlay__bar ${isScrolled ? "is-scrolled" : ""}`}>
            <span className="nav-overlay__brand" aria-hidden="true">
              <span className="brand-mark__dot" />RK/26
            </span>
            <button
              className="nav-overlay__close"
              type="button"
              ref={closeRef}
              aria-label="Close navigation"
              onClick={() => {
                setMenuOpen(false)
                toggleRef.current?.focus()
              }}
            >
              <MorphIcon icon={X} size={14} strokeWidth={2} className="nav-overlay__close-icon" />
              Close
            </button>
          </div>

          <ol className="nav-overlay__list">
            {links.map((link, index) => (
              <li key={link.id}>
                <Link
                  className={activeId === link.id ? "is-active" : undefined}
                  href={link.href}
                  aria-current={activeId === link.id ? "page" : undefined}
                  onClick={() => handleLinkClick(link.id)}
                >
                  <span className="nav-overlay__index">0{index + 1}</span>
                  <span className="nav-overlay__label">{link.label}</span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="nav-overlay__foot">
            <a
              className="nav-overlay__resume"
              href="/Resume%20-%20Onep.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              Résumé
              <MorphIcon icon={ArrowUpRight} size={14} strokeWidth={2} className="external-icon" />
            </a>
            <p className="nav-overlay__note">Greater Bengaluru Area, India</p>
          </div>
        </nav>
      </div>
    </>
  )
}
