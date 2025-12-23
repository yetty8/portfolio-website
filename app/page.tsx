import Hero from "@/app/sections/Hero";
import About from "@/app/sections/About";
import Projects from "@/app/sections/Projects";
import Skills from "@/app/sections/Skills";
import ContactForm from "@/app/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </main>
  );
}