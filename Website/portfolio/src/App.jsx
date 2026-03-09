import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Certifications } from "@/sections/Certifications";
import { Testimonial } from "@/sections/Testimonial";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
