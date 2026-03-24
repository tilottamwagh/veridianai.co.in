"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "./ui/button"

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  React.useEffect(() => {
    // Check if component mounted in browser
    if (typeof window === "undefined") return;

    const hasSeenPopup = localStorage.getItem("veridian_exit_intent_seen")
    
    if (hasSeenPopup) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger only if cursor leaves the top edge of the window
      if (e.clientY <= 0) {
        setIsOpen(true)
        localStorage.setItem("veridian_exit_intent_seen", "true")
        document.removeEventListener("mouseleave", handleMouseLeave)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setIsOpen(false)
              localStorage.setItem("veridian_exit_intent_seen", "true")
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-bg-secondary border border-border rounded-xl shadow-2xl overflow-hidden glass z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-popup-title"
          >
            <button
              onClick={() => {
                setIsOpen(false)
                localStorage.setItem("veridian_exit_intent_seen", "true")
              }}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary focus-ring rounded-sm p-1 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 id="exit-popup-title" className="text-2xl font-display font-bold text-text-primary mb-2">
                    Wait — before you go.
                  </h2>
                  <p className="text-text-secondary mb-6">
                    Get a free AI readiness report tailored for your industry. Discover how you can reduce operational costs within 90 days.
                  </p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="exit-email" className="sr-only">Email address</label>
                      <input
                        id="exit-email"
                        type="email"
                        placeholder="Work Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full h-11 bg-bg-surface border border-border rounded-md px-4 text-sm text-text-primary focus:outline-none focus:border-accent-blue/50 focus-ring"
                      />
                    </div>
                    <Button type="submit" variant="glow" className="w-full">
                      Get My Free Report
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-accent-teal/20 text-accent-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-display font-bold text-text-primary mb-2">Request Received</h2>
                  <p className="text-text-secondary">We&apos;ll send the readiness report to your email shortly.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
