import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aswinbinaj.com'),
  title: {
    default: "Aswin Binaj | Premium Software Developer in Kollam",
    template: "%s | Aswin Binaj",
  },
  description: "Crafting beautiful, high-performance web applications and digital experiences. Portfolio of Aswin Binaj, Software Developer in Kollam.",
  keywords: ["Aswin Binaj", "Software Developer", "Web Developer Kollam", "Freelance Developer Kerala", "React Developer", "Next.js Expert", "UI/UX Developer", "Frontend Engineer", "Best Web Developer in Kollam"],
  authors: [{ name: "Aswin Binaj", url: "https://aswinbinaj.com" }],
  creator: "Aswin Binaj",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aswinbinaj.com",
    title: "Aswin Binaj | Premium Software Developer",
    description: "Crafting beautiful, high-performance web applications and digital experiences.",
    siteName: "Aswin Binaj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aswin Binaj | Premium Software Developer",
    description: "Crafting beautiful, high-performance web applications and digital experiences.",
    creator: "@aswinbinaj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} dark md:scroll-smooth`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent-gold/40 selection:text-black flex flex-col font-sans relative">
        {/* Grain overlay */}
        <div className="hidden md:block fixed inset-0 pointer-events-none noise-bg z-[9999] opacity-[0.04]" />
        
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
