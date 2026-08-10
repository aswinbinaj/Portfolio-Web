import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 mt-auto relative z-10 glass">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/40 text-sm font-light relative z-20">
          © {new Date().getFullYear()} Aswin Binaj. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-foreground/60 relative z-20">
          <Link href="/#home" className="hover:text-accent-gold transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-accent-gold transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-accent-gold transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-accent-gold transition-colors">Blog</Link>
        </div>
      </div>
    </footer>
  );
}
