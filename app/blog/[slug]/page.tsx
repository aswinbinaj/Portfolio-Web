"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { use } from "react";
import { BLOG_POSTS } from "@/lib/blogData";

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return (
      <article className="min-h-screen pt-40 pb-24 relative z-10 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-6">Article Not Found</h1>
          <p className="text-foreground/60 mb-8 max-w-md mx-auto">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent-gold hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
        </div>
      </article>
    );
  }

  const author = {
    name: "Aswin Binaj",
    role: "Full Stack Developer"
  };

  return (
    <article className="min-h-screen pt-32 pb-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl mb-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-foreground/60 hover:text-accent-gold transition-colors mb-12 group" aria-label="Back to Journal">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="flex gap-4 items-center text-sm font-semibold tracking-wider text-accent-violet uppercase mb-6">
             <span>{post.category}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-8 text-white">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between border-y border-white/10 py-6 mb-12">
            <div className="flex items-center gap-4">
              {/* Circular initials gradient avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-violet to-accent-gold flex items-center justify-center text-white font-bold tracking-wider shrink-0 border border-white/10 shadow-lg select-none">
                AB
              </div>
              <div>
                <p className="font-bold text-white tracking-wide">{author.name}</p>
                <p className="text-sm text-foreground/60">{author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-foreground/60">
               <span className="hidden md:flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
               <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full max-w-6xl mx-auto px-6 mb-20"
      >
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden glass border border-white/5 shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" />
        </div>
      </motion.div>

      <motion.div 
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.4 }}
         className="container mx-auto px-6 max-w-3xl"
      >
        {/* Post Actions */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-foreground/60 hover:text-accent-gold transition-colors text-sm hover-trigger">
              <Share2 size={18} /> Share
            </button>
            <button className="flex items-center gap-2 text-foreground/60 hover:text-accent-violet transition-colors text-sm hover-trigger">
              <Bookmark size={18} /> Save
            </button>
          </div>
        </div>

        {/* Prose Content */}
        <div 
          className="blog-content text-base md:text-lg font-light leading-relaxed text-foreground/80 [&>p]:mb-8 [&>strong]:text-white [&>strong]:font-semibold [&>h2]:text-3xl [&>h2]:md:text-4xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-16 [&>h2]:mb-6 [&>blockquote]:border-l-4 [&>blockquote]:border-accent-gold [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:text-2xl [&>blockquote]:md:text-3xl [&>blockquote]:font-heading [&>blockquote]:font-semibold [&>blockquote]:text-white [&>blockquote]:my-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.div>
    </article>
  );
}
