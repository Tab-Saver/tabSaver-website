import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const jobs = [
  {
    title: "Cargo Agent",
    company: "ABM Industries",
    location: "Dulles, VA",
    period: "Oct 2025 - Present",
    iconUrl: "https://ssd2.s3.amazonaws.com/4b3vyzv1gmtq5me9dz7pdb80o154", // Replace with your icon
    type: "current",
  },
  {
    title: "Ground Operations",
    company: "Swissport USA Inc",
    location: "Dulles, VA",
    period: "Jun 2024 - Oct 2025",
    iconUrl: "https://yt3.googleusercontent.com/DtPCJZAodX0vE-b2swK7NKSCF5TFoqUJEsld-7R1LpE4UctbGsRK-qA8KUJwVShUa503HT8Irw=s900-c-k-c0x00ffffff-no-rj", // Replace with your icon
    type: "past",
  },
  {
    title: "Volunteer, Writer & Designer",
    company: "ABrightSpot",
    location: "One Loudoun, VA",
    period: "Nov 2024 - Dec 2024",
    iconUrl: "https://s3.us-east-1.amazonaws.com/files.galaxydigital.com/4677/agency/151088.jpg?20250111142103", // Replace with your icon
    type: "past",
  },
  {
    title: "Floor Staff",
    company: "Regal Cinemas",
    location: "Brambleton, VA",
    period: "Mar 2023 - Dec 2024",
    iconUrl: "https://www.woodlandsonline.com/images/cd/regal.jpg", // Replace with your icon
    type: "past",
  },
  {
    title: "Barista",
    company: "Harris Teeter",
    location: "Brambleton, VA",
    period: "May 2022 - Dec 2022",
    iconUrl: "https://imgproxy.divecdn.com/5YbgnoX-Yz0_BleIkjN0nl_QgU8Iwi79uN11PTEEMps/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9IYXJyaXNfVGVldGVyX2xvZ29fWTdDUG5yVi5wbmc=.webp", // Replace with your icon
    type: "past",
  },
];

export function WorkExperience() {
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
            Work Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                  job.type === "current"
                    ? "bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 hover:border-blue-400/50"
                    : "bg-slate-900/30 border border-slate-800 hover:border-slate-700"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-2 rounded-lg overflow-hidden ${
                      job.type === "current"
                        ? "bg-blue-500/10 border border-blue-500/20"
                        : "bg-slate-800/50 border border-slate-700/50"
                    }`}
                  >
                    <ImageWithFallback
                      src={job.iconUrl}
                      alt={`${job.company} logo`}
                      className="w-10 h-10 object-cover rounded"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg text-slate-100 mb-1">{job.title}</h3>
                    <p className="text-cyan-400 text-sm mb-2">
                      {job.company}
                      {job.location && ` • ${job.location}`}
                    </p>
                    <p className="text-xs text-slate-500">{job.period}</p>
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
