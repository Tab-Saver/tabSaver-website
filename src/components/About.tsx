import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
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
            Education & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://www.transfervirginia.org/images/ProfileSliderImage_6A67B9EC3FC911EBB15B0242AC15010A.jpg"
                  alt="Virginia Tech Campus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl text-blue-400 mb-2">Virginia Tech</h3>
                <p className="text-slate-300 mb-1">B.S Computer Science</p>
                <p className="text-sm text-slate-400">May 2026 - May 2028</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 rounded-full text-sm text-blue-400">
                In Progress
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://www.nvcc.edu/dist/images/sites/about/news/presskit/large_loudoun1.jpg"
                  alt="NOVA Community College Campus"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl text-cyan-400 mb-2">NOVA Community College</h3>
                <p className="text-slate-300 mb-1">A.S Computer Science</p>
                <p className="text-sm text-slate-400">Aug 2024 - May 2026</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-full text-sm text-cyan-400">
                In Progress
              </div>
            </motion.div>
          </div>

          <motion.div
            className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 bg-blue-500/10 rounded-full mb-4">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-3xl text-blue-400 mb-2">3.6 GPA</p>
                <p className="text-slate-400">Academic Excellence</p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 bg-cyan-500/10 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-cyan-400" />
                </div>
                <p className="text-lg text-cyan-400 mb-2">3x Dean's List</p>
                <p className="text-slate-400">With Distinction</p>
              </div>

              <div className="text-center">
                <div className="inline-flex p-4 bg-teal-500/10 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-teal-400" />
                </div>
                <p className="text-lg text-teal-400 mb-2">1st Place</p>
                <p className="text-slate-400">Devpost Hackathon</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
