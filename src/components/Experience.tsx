import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code } from "lucide-react";

const internship = {
  title: "Full-Stack Developer",
  company: "Yapn",
  location: "Springfield, VA",
  period: "Oct 2025 - Present",
  description: [
    "Built full-stack call analytics dashboard using React, Express.js, AWS DynamoDB, and Retell AI API to track 150+ restaurant phone calls with real-time filtering, success metrics, and data visualization",
    "Developed RESTful API backend with paginated data fetching, rate limiting, and error handling; integrated AWS DynamoDB and third-party AI services for restaurant call management system",
  ],
};

export function Experience() {
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
            Internship Experience
          </h2>

          <motion.div
            className="p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-500/10 rounded-lg">
                <Code className="w-8 h-8 text-blue-400" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl text-slate-100 mb-2">{internship.title}</h3>
                    <p className="text-cyan-400 text-lg">
                      {internship.company} • {internship.location}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 whitespace-nowrap">
                    {internship.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {internship.description.map((item, i) => (
                    <li key={i} className="text-slate-300 pl-4 border-l-2 border-blue-500/50">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
