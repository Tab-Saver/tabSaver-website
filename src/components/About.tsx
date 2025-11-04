import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Trophy, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const education = [
  {
    school: "Virginia Tech",
    degree: "B.S Computer Science",
    dates: "May 2026 - May 2028",
    imageUrl: "https://images.unsplash.com/photo-1589138848734-01c0b31e33ab?w=1920&q=80",
  },
  {
    school: "NOVA Community College",
    degree: "A.S Computer Science",
    dates: "Aug 2024 - May 2026",
    imageUrl: "https://www.nvcc.edu/about/assets/images/loudoun-pano-01.jpg",
  },
];

const achievements = [
  { icon: Award, title: "3.6 GPA", subtitle: "Academic Excellence" },
  { icon: Trophy, title: "3x Dean's List", subtitle: "With Distinction" },
  { icon: Trophy, title: "1st Place", subtitle: "Devpost Hackathon" },
  { icon: GraduationCap, title: "Presidential Scholar", subtitle: "Academic Honor" },
  { icon: Award, title: "Summa Cum Laude", subtitle: "Graduation Honor" },
];

export function About() {
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
            Education & Achievements
          </h2>

          {/* Education Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                // FIX: Replaced black border with green
                className="group relative rounded-2xl overflow-hidden border-2 border-green-600 shadow-lg hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ImageWithFallback
                  src={edu.imageUrl}
                  alt={`${edu.school} campus`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                
                {/* FIX: Styled badge to be green */}
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 bg-green-100 text-green-700 border border-green-600 backdrop-blur-sm"
                >
                  In Progress
                </Badge>

                <div className="relative p-6 pt-40 md:pt-48 text-white">
                  <h3 className="text-2xl font-semibold mb-1">{edu.school}</h3>
                  <p className="text-lg text-gray-200">{edu.degree}</p>
                  <p className="text-gray-300">{edu.dates}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FIX: Achievements Section (Now in a single box with smaller items) */}
          <motion.div
            className="p-6 md:p-8 bg-white rounded-2xl border border-gray-300 shadow-lg hover:border-gray-900 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Grid for the list of achievements */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {achievements.map((ach, index) => {
                const Icon = ach.icon;
                return (
                  // These are the individual "bullet point" items
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="p-3 bg-gray-100 rounded-lg border border-gray-300 flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900">{ach.title}</h3>
                      {ach.subtitle && (
                        <p className="text-sm text-gray-600">{ach.subtitle}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
