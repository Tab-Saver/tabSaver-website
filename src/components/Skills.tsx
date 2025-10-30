import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Cloud, Wrench } from "lucide-react";
import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    color: "blue",
    skills: [
      "Java",
      "Python",
      "React.js",
      "React Native",
      "Angular",
      "Next.js",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Flask",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Cloud, DevOps & Tools",
    icon: Cloud,
    color: "cyan",
    skills: [
      "AWS DynamoDB",
      "AWS S3",
      "Firebase",
      "Docker",
      "Vercel",
      "Render",
      "REST APIs",
      "Shell",
      "Postman",
      "Git",
      "VSCode",
    ],
  },
];

export function Skills() {
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
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-${category.color}-500/10 rounded-lg`}>
                      <Icon className={`w-6 h-6 text-${category.color}-400`} />
                    </div>
                    <h3 className="text-xl text-slate-100">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
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
