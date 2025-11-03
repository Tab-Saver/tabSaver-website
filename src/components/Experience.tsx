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
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Internship Experience
          </h2>

          <motion.div
            className="p-8 rounded-2xl transition-all duration-300 bg-white border-2 border-gray-900 hover:border-gray-700 hover:shadow-2xl hover:shadow-gray-300/50"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                <Code className="w-8 h-8 text-gray-900" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-2xl text-gray-900 mb-2">{internship.title}</h3>
                    <p className="text-gray-700 text-lg">
                      {internship.company} • {internship.location}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-900 whitespace-nowrap">
                    {internship.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {internship.description.map((item, i) => (
                    <li key={i} className="text-gray-700 pl-4 border-l-2 border-gray-900">
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
