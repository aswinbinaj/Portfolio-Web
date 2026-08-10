"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Services", href: "/#services" },
  { name: "Blogs", href: "/blog" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-xl border-white/5 shadow-2xl shadow-black/20" : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-heading font-bold text-gradient-gold hover-trigger tracking-wider">
          Aswin Binaj
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-accent-gold transition-colors block hover-trigger"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="px-6 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-accent-violet hover:text-white transition-all hover-trigger"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative text-foreground hover:text-accent-gold transition-colors p-2 z-[60]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-[55] h-screen w-full bg-background/95 flex flex-col items-center justify-center border-none"
          >
            <nav className="flex flex-col items-center gap-8 w-full px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-heading font-medium text-foreground hover:text-accent-gold transition-colors block w-full text-center py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-6 px-10 py-4 rounded-full bg-accent-violet text-white text-lg font-medium shadow-lg shadow-accent-violet/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let&apos;s Talk
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
