import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Award, Trophy, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Education & Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 bg-white"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl text-white mb-2">Virginia Tech</h3>
                <p className="text-gray-200 mb-1">B.S Computer Science</p>
                <p className="text-sm text-gray-300">May 2026 - May 2028</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full text-sm text-gray-900">
                In Progress
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 bg-white"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl text-white mb-2">NOVA Community College</h3>
                <p className="text-gray-200 mb-1">A.S Computer Science</p>
                <p className="text-sm text-gray-300">Aug 2024 - May 2026</p>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full text-sm text-gray-900">
                In Progress
              </div>
            </motion.div>
          </div>

          <motion.div
            className="p-8 bg-white border-2 border-gray-200 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Award className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-3xl text-gray-900 mb-2">3.6 GPA</p>
                <p className="text-gray-600">Academic Excellence</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-lg text-gray-900 mb-2">3x Dean's List</p>
                <p className="text-gray-600">With Distinction</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-lg text-gray-900 mb-2">1st Place</p>
                <p className="text-gray-600">Devpost Hackathon</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <GraduationCap className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-lg text-gray-900 mb-2">Presidential Scholar</p>
                <p className="text-gray-600">Academic Honor</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Award className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-lg text-gray-900 mb-2">Summa Cum Laude</p>
                <p className="text-gray-600">Highest Honors</p>
              </motion.div>

              <motion.div
                className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-default"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="inline-flex p-4 bg-gray-100 rounded-full mb-4">
                  <Trophy className="w-8 h-8 text-gray-900" />
                </div>
                <p className="text-lg text-gray-900 mb-2">Hackathon Winner</p>
                <p className="text-gray-600">First Place Award</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
