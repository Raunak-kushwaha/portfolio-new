"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Copy, Download, Send, CheckCircle2 } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Footer } from "@/components/Footer"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: "Email",
      value: "raunakkush2005@gmail.com",
      id: "email",
    },
    {
      icon: <FaLinkedin className="w-5 h-5 text-accent" />,
      label: "LinkedIn",
      value: "linkedin.com/in/Raunak-kushwaha",
      id: "linkedin",
    },
    {
      icon: <FaGithub className="w-5 h-5 text-accent" />,
      label: "Github",
      value: "github.com/Raunak-kushwaha",
      id: "github",
    },
    {
      icon: <Phone className="w-5 h-5 text-accent" />,
      label: "Phone",
      value: "+91 93524 91146",
      id: "phone",
    },
  ]

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-10"
            >
              {/* Heading */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-[2px] bg-accent rounded-full"></span>
                  <span className="text-accent font-mono text-sm uppercase tracking-widest font-bold">Get in touch</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                  Let's work <br />
                  <span className="text-accent">together</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  Open to UI/UX design roles, full-stack development opportunities, and freelance collaborations. Let's build something great.
                </p>

                {/* Status Pill */}
                <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-card/50">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    Available for new opportunities
                  </span>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-5 rounded-2xl border border-border/50 bg-card/20 hover:bg-card/40 transition-colors group"
                  >
                    <div className="flex items-center gap-5 overflow-hidden">
                      <div className="p-3 rounded-full bg-background/50 border border-border/50">
                        {item.icon}
                      </div>
                      <div className="flex flex-col overflow-hidden">
                        <span className="text-xs text-muted-foreground font-medium mb-1">{item.label}</span>
                        <span className="text-sm sm:text-base font-medium text-foreground truncate">{item.value}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => copyToClipboard(item.value, item.id)}
                      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                      title="Copy to clipboard"
                    >
                      {copiedField === item.id ? (
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                      ) : (
                        <Copy className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Contact Form & Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="w-full p-8 sm:p-10 rounded-[2.5rem] border border-border bg-card/30 backdrop-blur-sm shadow-xl relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Send a message</h2>
                      
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Name <span className="text-accent">*</span></label>
                            <input
                              required
                              type="text"
                              id="name"
                              placeholder="Alex Johnson"
                              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                            />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Your Email <span className="text-accent">*</span></label>
                            <input
                              required
                              type="email"
                              id="email"
                              placeholder="alex@company.com"
                              className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Subject <span className="text-accent">*</span></label>
                          <input
                            required
                            type="text"
                            id="subject"
                            placeholder="UI/UX Design Opportunity"
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50 text-foreground"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message <span className="text-accent">*</span></label>
                          <textarea
                            required
                            id="message"
                            rows={6}
                            placeholder="Tell me about the project or opportunity..."
                            className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50 text-foreground resize-y"
                          ></textarea>
                        </div>

                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="w-full py-4 bg-accent/80 hover:bg-accent text-accent-foreground font-semibold rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin"></span>
                          ) : (
                            <><Send className="w-5 h-5" /> Send Message</>
                          )}
                        </button>

                        <p className="text-center text-xs text-muted-foreground tracking-wide">
                          I typically respond within 24 hours.
                        </p>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-10 h-10 text-accent" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h2>
                      <p className="text-muted-foreground text-lg mb-8">
                        Thank you for reaching out. I've received your message and will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 glass hover-glass rounded-xl font-medium transition-colors"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resume Card (Relocated) */}
              <div className="relative p-8 rounded-[2rem] border border-border overflow-hidden group">
                <div className="absolute inset-0 bg-accent/5 transition-colors group-hover:bg-accent/10" />
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/20 rounded-full blur-[80px] pointer-events-none" />
                
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Download My Resume</h3>
                    <p className="text-muted-foreground text-sm">
                      Full overview of my experience and projects in PDF.
                    </p>
                  </div>
                  <a
                    href="/Resume - Onep.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-4 font-semibold bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-transform active:scale-95 shadow-lg shadow-accent/10"
                  >
                    <Download className="w-5 h-5" /> Download (PDF)
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <Footer showSubFooter={false} />
    </>
  )
}
