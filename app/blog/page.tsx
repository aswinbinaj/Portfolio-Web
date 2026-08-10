"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogIndex() {
  return (
    <div className="container mx-auto px-6 max-w-7xl pt-40 pb-24 relative z-10">
      <div className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
        >
          The <span className="text-gradient-gold">Journal</span>.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base text-foreground/60 max-w-2xl font-light leading-relaxed"
        >
          Musings, tutorials, and deep-dives on bleeding-edge web development, luxury design, and software engineering.
        </motion.p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {BLOG_POSTS.map((post, i) => (
          <motion.article 
            key={post.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
            className="group block relative"
          >
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
            
            <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex gap-4 items-center text-xs font-semibold tracking-wider text-accent-gold uppercase mb-4">
                  <span>{post.category}</span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#fdf0d5] group-hover:to-[#9b7c41] transition-all">
                  {post.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed font-light mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-foreground/50 border-t border-white/5 pt-6 mt-auto">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <ArrowRight size={20} className="text-accent-gold group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
