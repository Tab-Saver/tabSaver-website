import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Camera, FileText, GitBranch, Calculator, Trophy } from "lucide-react";
import { Badge } from "./ui/badge";

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
    hackathonWinner: true,
    icon: Camera,
    githubUrl: "https://github.com/omarhamdan010/PhotoAlarm",
    demoUrl: "https://photo-alarm-yfw7.vercel.app/",
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
    icon: FileText,
    githubUrl: "https://github.com/omarayman23/photoAlarm",
    demoUrl: "https://cover-letterai.vercel.app/",
  },
  {
    title: "Algorithm Visuals",
    subtitle: "Real-time representation of algorithms",
    description:
      "Developed an interactive React.js and CSS platform that visualizes 12 core algorithms (BFS, DFS, Dijkstra, A*, sorting/searching) with real-time execution. Implements queue, stack, and grid logic optimized for performance",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Lucide React", "CSS", "Web APIs"],
    featured: false,
    icon: GitBranch,
    githubUrl: "https://github.com/omarayman23/algorithmVisuals",
    demoUrl: "https://algorithm-visuals.vercel.app/",
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
    icon: Calculator,
    githubUrl: "https://github.com/omarayman23/CalcWiz?tab=readme-ov-file",
    demoUrl: "https://calc-wiz-eight.vercel.app/",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              const isHackathonWinner = project.hackathonWinner;
              return (
                <motion.div
                  key={index}
                  className={`group rounded-2xl transition-all duration-500 overflow-hidden relative ${
                    isHackathonWinner
                      ? "bg-white border-2 border-green-600 hover:border-green-500 hover:shadow-2xl hover:shadow-green-200/50"
                      : "bg-white border-2 border-gray-900 hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-300/50"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {isHackathonWinner && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-green-100 border border-green-600 rounded-full">
                      <Trophy className="w-4 h-4 text-green-700" />
                      <span className="text-sm text-green-700">Hackathon Winner</span>
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-6">
                      {/* Project Icon */}
                      <div
                        className={`flex-shrink-0 p-4 rounded-xl ${
                          isHackathonWinner
                            ? "bg-green-50 border-2 border-green-600"
                            : "bg-gray-100 border-2 border-gray-900"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 ${
                            isHackathonWinner ? "text-green-700" : "text-gray-900"
                          }`}
                        />
                      </div>

                      {/* Project Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                          <div className={isHackathonWinner ? "pr-40" : ""}>
                            <h3 className="text-2xl text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-700">{project.subtitle}</p>
                          </div>
                          <div className="flex gap-3">
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-300"
                              title="View Demo"
                            >
                              <ExternalLink className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
                            </a>
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-300"
                              title="View on GitHub"
                            >
                              <Github className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
                            </a>
                          </div>
                        </div>

                        <p className="text-gray-700 mb-6">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
