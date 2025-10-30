import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { OpenSource } from "./components/OpenSource";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Certificates } from "./components/Certificates";
import { WorkExperience } from "./components/WorkExperience";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <About />
      <Experience />
      <OpenSource />
      <Projects />
      <Skills />
      <Certificates />
      <WorkExperience />
      <Contact />
    </div>
  );
}
