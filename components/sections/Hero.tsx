"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-16 sm:py-20 overflow-hidden"
      id="home"
    >
      {/* Ambient Glows (Zero-Cost Radial Gradients - No GPU Blur Filter) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 md:left-1/4 md:translate-x-0 w-80 md:w-96 h-80 md:h-96 rounded-full bg-[radial-gradient(circle,rgba(140,112,212,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-12 right-1/2 translate-x-1/2 md:right-1/4 md:translate-x-0 w-80 md:w-[30rem] h-80 md:h-[30rem] rounded-full bg-[radial-gradient(circle,rgba(209,180,118,0.12)_0%,transparent_70%)] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8 mx-auto sm:mx-0">
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-foreground/80">
              Available for new opportunities
            </span>
          </div>

          {/* HERO TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            Hi, I&apos;m{" "}
            <span className="text-gradient-gold">Aswin Binaj</span>
            <br className="hidden sm:inline" />{" "}
            <span className="text-foreground/80">
              Freelance Web Developer{" "}
              <br className="hidden sm:inline" />
              in Kollam, Kerala.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-sm md:text-base text-foreground/60 max-w-2xl mb-12 font-sans font-light mx-auto sm:mx-0">
            Full stack web developer in Kollam, Kerala — building fast Next.js
            websites, ecommerce stores, and React apps for businesses across
            Kerala.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-center w-full sm:w-auto">
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
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 text-[10px] tracking-widest font-mono pointer-events-none select-none">
        <span className="uppercase animate-pulse">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex justify-center p-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
        </motion.div>
      </div>
    </section>
  );
}