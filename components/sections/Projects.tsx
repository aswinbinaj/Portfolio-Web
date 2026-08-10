"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const PROJECTS = [
  {
    title: "DahabMiners - UAE",
    description:
      "A scalable crypto mining platform built with React.js, designed for seamless machine sales and smooth user experiences.",
    tags: ["React js", "Tailwind CSS"],
    image: "/project3.JPG",
    link: "#",
  },
  {
    title: "Intermine Solutions - Germany",
    description:
      "A crypto mining machine store built with React.js and Shopify for seamless and secure online purchasing.",
    tags: ["React js", "Tailwind CSS", "Shopify"],
    image: "/project1.JPG",
    link: "https://interminesolutions.netlify.app/",
  },
  {
    title: "SureBooks",
    description:
      "A WooCommerce bookstore built with WordPress, designed for seamless shopping and high-converting user experiences.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    image: "/project2.JPG",
    link: "https://surebooks.in/",
  },
  {
    title: "Tron Academy",
    description:
      "An interactive educational platform website featuring custom course displays and responsive student inquiry flows.",
    tags: ["React", "Tailwind CSS"],
    image: "/tronacademy.png",
    link: "#",
  },
  {
    title: "Phoenix Deep Cleaning",
    description:
      "A local service company website. Optimized for local SEO, ranking #2 on Google Search for 'best deepcleaning service in alappuzha'.",
    tags: [{ name: "Storebase", link: "https://storebase.in" }, "SEO", "Services"],
    image: "/phoenix.png",
    link: "https://www.phoenixdeepcleaning.in/",
  },
  {
    title: "Jubionix",
    description:
      "A premium product catalog showcase built for lighting and electrical retail, featuring clean product cards and contact options.",
    tags: [{ name: "Storebase", link: "https://storebase.in" }, "Catalog"],
    image: "/jubionix.png",
    link: "https://jubionix.com",
  },
  {
    title: "Bamini",
    description:
      "An elegant online boutique shopping store powered by Storebase for handpicked traditional sarees and designer collections.",
    tags: [{ name: "Storebase", link: "https://storebase.in" }, "E-Commerce"],
    image: "/bamini.png",
    link: "https://bamini.in",
  },
];

export default function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="container mx-auto px-6 max-w-7xl pt-12 md:pt-24"
    >
      {/* HEADING */}
      <div className="mb-14 text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4">
          Selected <span className="text-gradient-gold">Works</span>.
        </h2>

        <p className="text-foreground/60 max-w-2xl text-sm md:text-base font-light">
          A showcase of engineering precision and design excellence.
        </p>
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group rounded-[28px] overflow-hidden border border-white/[0.05] bg-[#050505] flex flex-col"
          >
            {/* IMAGE */}
            <div className="relative h-[220px] overflow-hidden bg-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 50vw,
                       33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-bold mb-2 leading-tight">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-white/60 mb-5">
                {project.description}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2 relative z-20">
                  {project.tags.map((tag) => {
                    const isObject = typeof tag === "object" && tag !== null && "name" in tag;
                    const name = isObject ? (tag as any).name : tag;
                    const link = isObject ? (tag as any).link : null;

                    return link ? (
                      <Link
                        key={name}
                        href={link}
                        target="_blank"
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 hover:border-accent-gold hover:text-accent-gold transition-colors"
                      >
                        {name}
                      </Link>
                    ) : (
                      <span
                        key={name}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80"
                      >
                        {name}
                      </span>
                    );
                  })}
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  className="text-white hover:text-violet-400 transition-colors"
                >
                  <ExternalLink size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      <div className="flex justify-center mt-14">
        <Link
          href="/projects"
          className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300 inline-block text-center"
        >
          Show More Projects
        </Link>
      </div>
    </AnimatedSection>
  );
}