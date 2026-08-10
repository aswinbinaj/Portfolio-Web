import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/ui/Footer";

const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const BlogPreview = dynamic(() => import("@/components/sections/BlogPreview"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

/*metaData*/
export const metadata = {
  title: "Aswin Binaj | Freelance Web Developer in Kollam, Kerala",
  description:
    "Hire Aswin Binaj — a freelance web developer in Kollam. Expert in Next.js, React, ecommerce & full stack development for Kerala businesses.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Services />
      <BlogPreview />
      <Contact />
      <Footer />
    </>
  );
}
