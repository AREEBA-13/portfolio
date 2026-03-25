import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="w-full py-8 text-center text-foreground/50 border-t border-white/10 mt-20 fade-in cursor-default">
        <p>© {new Date().getFullYear()} Areeba Arif. All rights reserved.</p>
      </footer>
    </main>
  );
}
