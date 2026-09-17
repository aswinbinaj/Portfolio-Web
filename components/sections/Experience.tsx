"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  tech: string;
  points: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Software Developer",
    company: "NewDawn IT Solutions",
    period: "March 2026 – Present",
    tech: "React.js · JavaScript · WordPress · WooCommerce · PHP · MySQL · REST APIs · Technical SEO",
    points: [
      "Contributed to the development of Storebase, a scalable CMS and e-commerce platform for building and managing online stores.",
      "Developed reusable frontend modules and CMS components to accelerate website development across client projects.",
      "Built and delivered 30+ customized e-commerce websites on the Storebase platform, tailoring storefronts to client requirements while preserving a scalable, reusable architecture.",
      "Implemented technical SEO best practices, performance optimization, and responsive UI across all deliverables."
    ]
  },
  {
    role: "Frontend Developer",
    company: "Tron Digital (Remote)",
    period: "September 2024 – February 2026",
    tech: "React.js · JavaScript · Shopify Headless · Headless WordPress · GraphQL · WooCommerce · REST APIs",
    points: [
      "Developed the frontend for a cryptocurrency mining machines e-commerce platform using React.js.",
      "Built responsive UI for product listings, product pages, authentication, shopping cart, and checkout.",
      "Integrated REST APIs to display dynamic product and business information.",
      "Optimized performance through lazy loading, image optimization, and reusable components.",
      "Improved technical SEO, accessibility, and overall user experience across devices."
    ]
  },
  {
    role: "Web Development Trainer",
    company: "Tron Academy",
    period: "September 2024 – February 2026",
    tech: "HTML · CSS · JavaScript · React.js · WordPress · WooCommerce · PHP",
    points: [
      "Delivered practical training in frontend development and WordPress development.",
      "Designed structured training modules covering HTML, CSS, JavaScript, React.js, WordPress, WooCommerce, hosting, deployment, and domain management.",
      "Guided students in building responsive websites, e-commerce applications, and portfolio projects.",
      "Mentored students on debugging, deployment, and industry-standard development practices."
    ]
  },
  {
    role: "Junior Frontend Developer",
    company: "DevStackUp Technologies",
    period: "February 2024 – August 2024",
    tech: "React.js · JavaScript · HTML · CSS · Bootstrap · REST APIs",
    points: [
      "Developed responsive UI for an enterprise intranet portal serving as a centralized knowledge management system.",
      "Built reusable components for organizational announcements, employee services, and internal communication.",
      "Integrated REST APIs to display dynamic organizational content.",
      "Improved application responsiveness, cross-browser compatibility, and overall user experience.",
      "Collaborated with senior developers on feature development, debugging, and frontend optimization."
    ]
  }
];

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="container mx-auto px-6 max-w-4xl pt-16 md:pt-32">
       <div className="mb-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
          <span className="text-accent-violet opacity-70">{">"} </span>Professional <span className="text-gradient-violet">Journey</span><span className="animate-pulse">_</span>
        </h2>
        <p className="text-foreground/60 font-light font-mono text-xs md:text-sm uppercase tracking-widest">Where I&apos;ve made an impact</p>
      </div>

      <div className="relative border-l border-white/10 pl-8 ml-4 md:ml-0 md:pl-0 md:border-none">
        {/* Central line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
        
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-16 md:w-1/2 ${
              index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
            }`}
          >
            {/* Timeline dot */}
            <div className={`absolute top-0 w-4 h-4 rounded-full bg-accent-violet border-[4px] border-background -left-[39px] md:top-6 ${
              index % 2 === 0 ? "md:-right-[8px] md:left-auto" : "md:-left-[8px]"
            }`} />
            
             <div className="glass-card p-6 sm:p-8 rounded-3xl group border-l-4 border-transparent hover:border-accent-violet transition-all duration-300">
               <span className="text-accent-gold text-xs sm:text-sm font-medium tracking-wider mb-2 block font-heading">{exp.period}</span>
               
               <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-white transition-colors font-heading">
                 {exp.role}
               </h3>
               
               <h4 className="text-sm sm:text-base text-foreground/80 mb-4 font-medium">
                 {exp.company}
               </h4>

               {exp.tech && (
                 <p className="text-xs text-foreground/50 mb-4 font-mono leading-relaxed">
                   <strong className="text-accent-violet font-semibold">Tech:</strong> {exp.tech}
                 </p>
               )}

               <ul className="list-disc pl-4 space-y-2 text-foreground/60 text-xs sm:text-sm font-light leading-relaxed">
                 {exp.points.map((point, idx) => (
                   <li key={idx}>{point}</li>
                 ))}
               </ul>
             </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
