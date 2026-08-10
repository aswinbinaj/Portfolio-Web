"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { Send, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="container mx-auto px-6 max-w-7xl pt-16 pb-16 md:pt-32 md:pb-24">
      <div className="glass-card rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-16 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-violet/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-6">Let&apos;s <span className="text-gradient-violet">Connect</span>.</h2>
            <p className="text-foreground/70 text-sm md:text-base font-light mb-12 max-w-md">
              Have a project in mind or looking for a premium development partner? Let&apos;s discuss how we can bring your vision successfully to life.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:aswinbinaj2002@gmail.com" className="flex items-center gap-4 text-foreground/80 hover:text-accent-gold transition-colors hover-trigger">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <span className="text-lg">aswinbinaj2002@gmail.com</span>
              </a>
              <a href="tel:+910000000000" className="flex items-center gap-4 text-foreground/80 hover:text-accent-violet transition-colors hover-trigger">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <span className="text-lg">+91 9539711107</span>
              </a>
              <div className="flex items-center gap-4 text-foreground/80 cursor-default">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <span className="text-lg">Kollam, Kerala</span>
              </div>
            </div>
          </div>

          <div className="bg-background/40 backdrop-blur-md p-5 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/60 mb-2">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-violet focus:bg-white/10 transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/60 mb-2">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-violet focus:bg-white/10 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground/60 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-violet focus:bg-white/10 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:bg-accent-gold transition-colors flex items-center justify-center gap-2 group hover-trigger hover:text-white mt-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Submit Message
                <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
