import Header from "@/components/layout/Header";
import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <PageShell>
      <Header />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </PageShell>
  );
}
