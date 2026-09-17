"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const SKILLS = [
  "React", "Next.js", "WordPress",
  "Shopify", "Node js", "PHP", "MySQL", "SEO" 
];

export default function About() {
  return (
    <AnimatedSection id="about" className="container mx-auto px-6 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6">
            <span className="text-gradient-violet">Crafting</span> Digital<br/>Excellence.
          </h2>
          <p className="text-foreground/70 text-sm md:text-base font-light leading-relaxed mb-6 font-sans">
            I am Aswin Binaj, a freelance full stack developer based in Kollam, Kerala, with 2+ years building production-grade web apps...
          </p>
          <div className="flex gap-4">
             <div className="p-4 rounded-2xl glass flex-1 text-center hover-trigger">
               <h3 className="text-accent-gold text-3xl font-bold mb-2">2+</h3>
               <p className="text-sm text-foreground/60">Years Experience</p>
             </div>
             <div className="p-4 rounded-2xl glass flex-1 text-center hover-trigger">
               <h3 className="text-accent-violet text-3xl font-bold mb-2">30+</h3>
               <p className="text-sm text-foreground/60">Projects Delivered</p>
             </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Decorative elements behind the skills grid */}
          <div className="absolute inset-0 bg-accent-gold/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="glass-card p-8 rounded-3xl relative z-10 border border-white/5">
            <h3 className="text-xl font-heading font-semibold mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-accent-gold hover:text-accent-gold transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
