"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, BrainCircuit } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services" },
  { name: "Research", href: "/research" },
  { name: "Pricing", href: "/pricing" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-[#0B0F19]/90 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)] py-3 dark:bg-[#0B0F19]/90 bg-white/90 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)] shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group focus-ring rounded-sm">
          <div className="bg-accent-blue/10 p-2 rounded-lg group-hover:bg-accent-blue/20 transition-colors">
            <BrainCircuit className="w-6 h-6 text-accent-blue" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-text-primary">
            Veridian AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors focus-ring rounded-sm py-1 hover:text-accent-blue",
                pathname === link.href ? "text-accent-blue" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="glow" size="sm" onClick={() => router.push('/contact')}>Book Demo &rarr;</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="p-2 text-text-primary focus-ring rounded-md"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg-primary"
          >
            <div className="flex flex-col h-full container mx-auto px-6 py-5">
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center gap-2">
                  <div className="bg-accent-blue/10 p-2 rounded-lg">
                    <BrainCircuit className="w-6 h-6 text-accent-blue" />
                  </div>
                  <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                    Veridian AI
                  </span>
                </Link>
                <button
                  className="p-2 text-text-primary focus-ring rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "text-2xl font-display font-semibold transition-colors w-full block focus-ring py-2 rounded-md",
                        pathname === link.href ? "text-accent-blue" : "text-text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-8">
                <Button variant="glow" className="w-full text-lg h-14" onClick={() => router.push('/contact')}>
                  Book Demo &rarr;
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
