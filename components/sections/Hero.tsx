"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[100dvh] min-h-[660px] sm:min-h-screen flex items-center justify-center pt-12 sm:pt-20 overflow-hidden"
      id="home"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Mobile Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent-violet/20 rounded-full blur-[100px] md:hidden pointer-events-none" />
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-gold/10 rounded-full blur-[90px] md:hidden pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none opacity-50"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center sm:text-left flex flex-col items-center sm:items-start">
        <div className="max-w-4xl flex flex-col items-center sm:items-start">
          {/* AVAILABLE BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8 mx-auto sm:mx-0"
          >
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />

            <span className="text-sm font-medium tracking-wide text-foreground/80">
              Available for new opportunities
            </span>
          </motion.div>

          {/* HERO TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-gold">Aswin Binaj</span>
            <br className="hidden sm:inline" />{" "}
            <span className="text-foreground/80">
              Freelance Web Developer{" "}
              <br className="hidden sm:inline" />
              in Kollam, Kerala.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm md:text-base text-foreground/60 max-w-2xl mb-12 font-sans font-light mx-auto sm:mx-0"
          >
            Full stack web developer in Kollam, Kerala — building fast Next.js
            websites, ecommerce stores, and React apps for businesses across
            Kerala.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center sm:items-center w-full sm:w-auto"
          >
            <Link
              href="#projects"
              className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform hover-trigger w-full sm:w-auto text-center"
            >
              View My Work

              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>

            <Link
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors hover-trigger text-white w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 text-[10px] tracking-widest font-mono pointer-events-none select-none"
      >
        <span className="uppercase animate-pulse">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}