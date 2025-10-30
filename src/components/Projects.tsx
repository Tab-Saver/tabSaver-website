import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "PhotoAlarm",
    subtitle: "Photo & Audio verification",
    description:
      "Engineered a Hackathon winning full-stack alarm that prevents snoozing by requiring selfie verification or a 5-second voice recording before deactivation, enhancing user accountability and engagement.",
    tech: [
      "React.js",
      "JavaScript",
      "HTML",
      "Lucide React",
      "REST API",
      "LocalStorage",
      "MediaDevices API",
      "Canvas API",
      "Web Audio API",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1617299263454-3f1b584c89f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/omarhamdan010/PhotoAlarm",
    demoUrl: "https://photo-alarm-yfw7.vercel.app/", // Replace with actual demo URL
  },
  {
    title: "CoverLetterAI",
    subtitle: "Generates Cover letters with AI",
    description:
      "AI suggests 3 different options for paragraphs (open/body/close), to create a perfectly polished cover letter that exports as a PDF or DOCX file.",
    tech: [
      "Vercel Serverless",
      "HTML",
      "REST APIs",
      "Node.js",
      "Google Gemini API",
      "JavaScript",
      "Tailwind",
    ],
    featured: true,
    image: "https://images.unsplash.com/photo-1753931043704-a7856fec33a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/omarayman23/photoAlarm",
    demoUrl: "https://cover-letterai.vercel.app/", // Replace with actual demo URL
  },
  {
    title: "Algorithm Visuals",
    subtitle: "Real-time representation of algorithms",
    description:
      "Developed an interactive React.js and CSS platform that visualizes 12 core algorithms (BFS, DFS, Dijkstra, A*, sorting/searching) with real-time execution. Implements queue, stack, and grid logic optimized for performance",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Lucide React", "CSS", "Web APIs"],
    featured: false,
    image: "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/omarayman23/algorithmVisuals",
    demoUrl: "https://algorithm-visuals.vercel.app/", // Replace with actual demo URL
  },
  {
    title: "CalcWiz",
    subtitle: "Calculus Calculator",
    description:
      "Transformed a multi-page application into a high-performance Single-Page Application (SPA) using JavaScript, Math.js, and MathJax, reducing load times by 75%.",
    tech: [
      "Math.js",
      "CSS",
      "JavaScript",
      "Google Fonts API",
      "CDNs",
      "HTML",
      "MathJax",
    ],
    featured: false,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/omarayman23/CalcWiz?tab=readme-ov-file",
    demoUrl: "https://calc-wiz-eight.vercel.app/", // Replace with actual demo URL
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`group rounded-2xl backdrop-blur-sm transition-all duration-500 overflow-hidden ${
                  project.featured
                    ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20"
                    : "bg-slate-900/30 border border-slate-800 hover:border-slate-700 hover:shadow-xl hover:shadow-slate-500/10"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid md:grid-cols-5 gap-6">
                  {/* Project Image */}
                  <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/80 md:to-slate-950"></div>
                  </div>

                  {/* Project Content */}
                  <div className="md:col-span-3 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-cyan-400">{project.subtitle}</p>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 border border-transparent transition-all duration-300"
                          title="View Demo"
                        >
                          <ExternalLink className="w-5 h-5 text-slate-400 hover:text-cyan-400 transition-colors" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800/50 hover:bg-blue-500/20 hover:border-blue-500/50 border border-transparent transition-all duration-300"
                          title="View on GitHub"
                        >
                          <Github className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-300 mb-6">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="bg-slate-800/50 border-slate-700 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
