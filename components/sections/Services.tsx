"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Code2, ShoppingCart, Layout, Smartphone } from "lucide-react";

const SERVICES = [
  {
    icon: <Code2 className="w-8 h-8 text-accent-violet mb-4" />,
    title: "Web Development",
    description: "End-to-end full stack development using modern frameworks like Next.js, React, and Spring Boot."
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-accent-gold mb-4" />,
    title: "E-Commerce Solutions",
    description: "Creating highly converting and secure online stores tailored for performance and scale."
  },
  {
    icon: <Layout className="w-8 h-8 text-accent-violet mb-4" />,
    title: "Premium WordPress",
    description: "Custom themes and plugins extending core CMS capabilities without sacrificing performance."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-accent-gold mb-4" />,
    title: "UI/UX & Mobile First",
    description: "Delivering responsive interfaces that provide flawless native-like experiences across all devices."
  }
];

export default function Services() {
  return (
    <AnimatedSection id="services" className="container mx-auto px-6 max-w-7xl pt-16 md:pt-32">
      <div className="mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">My <span className="text-gradient-gold">Services</span>.</h2>
        <p className="text-foreground/60 max-w-2xl text-sm md:text-base font-light mx-auto">Specialized solutions crafted to elevate your business footprint.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group"
          >
            {service.icon}
            <h3 className="text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">{service.title}</h3>
            <p className="text-[13px] md:text-sm text-foreground/60 leading-relaxed font-light">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
