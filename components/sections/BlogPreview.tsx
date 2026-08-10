"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { BLOG_POSTS } from "@/lib/blogData";

const RECENT_BLOGS = BLOG_POSTS.slice(0, 3);

export default function BlogPreview() {
  return (
    <AnimatedSection id="blog-preview" className="container mx-auto px-6 max-w-7xl pt-16 md:pt-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4">
            Recent <span className="text-gradient-gold">Thoughts</span>.
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-light">Insights on software, design, and architecture.</p>
        </div>
        <Link 
          href="/blog" 
          className="group flex items-center gap-2 text-accent-gold hover:text-white transition-colors"
        >
          View all posts
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {RECENT_BLOGS.map((blog, index) => (
          <Link href={`/blog/${blog.slug}`} key={index} className="group block">
            <div className="rounded-3xl overflow-hidden glass-card border border-white/5 hover:border-accent-gold/50 transition-colors duration-500 h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-sm text-foreground/50 mb-3 font-medium">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-foreground/30" />
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-heading group-hover:text-accent-gold transition-colors line-clamp-2">
                  {blog.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </AnimatedSection>
  );
}
