import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

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
