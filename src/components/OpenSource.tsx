import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Github, ExternalLink, GitPullRequest } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const contribution = {
  title: "TEAMMATES",
  subtitle: "Open source contributions",
  description:
    "Fixed email validation using Angular and prevented expensive E2E and accessibility tests from running on every commit.",
  tech: ["GitHub", "Java", "Shell", "Angular", "HTML"],
  image: "https://images.unsplash.com/photo-1652111865960-15f4a46a7688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  githubUrl: "https://github.com/TEAMMATES/teammates",
  demoUrl: "https://teammatesv4.appspot.com/web/front/home",
  stats: {
    commits: "Multiple commits",
    impact: "Improved CI/CD pipeline",
  },
};

export function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>

          <motion.div
            className="group rounded-2xl backdrop-blur-sm transition-all duration-500 overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-5 gap-6">
              {/* Project Image */}
              <div className="md:col-span-2 relative h-64 md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={contribution.image}
                  alt={contribution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/80 md:to-slate-950"></div>
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-full">
                  <GitPullRequest className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">Active Contributor</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="md:col-span-3 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl text-slate-100 mb-2 group-hover:text-green-400 transition-colors">
                      {contribution.title}
                    </h3>
                    <p className="text-green-400">{contribution.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={contribution.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-green-500/20 hover:border-green-500/50 border border-transparent transition-all duration-300"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-400 hover:text-green-400 transition-colors" />
                    </a>
                    <a
                      href={contribution.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-green-500/20 hover:border-green-500/50 border border-transparent transition-all duration-300"
                      title="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-slate-400 hover:text-green-400 transition-colors" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{contribution.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-xs text-slate-400 mb-1">Contributions</p>
                    <p className="text-green-400">{contribution.stats.commits}</p>
                  </div>
                  <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-xs text-slate-400 mb-1">Impact</p>
                    <p className="text-green-400">{contribution.stats.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {contribution.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-slate-800/50 border-slate-700 text-slate-300 hover:border-green-500/50 hover:text-green-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
