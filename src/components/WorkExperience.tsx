import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const jobs = [
  {
    title: "Cargo Agent",
    company: "ABM Industries",
    location: "Dulles, VA",
    period: "Oct 2025 - Present",
    iconUrl: "https://ssd2.s3.amazonaws.com/4b3vyzv1gmtq5me9dz7pdb80o154",
    type: "current",
    description: "", // Add your description here
  },
  {
    title: "Ground Operations",
    company: "Swissport USA Inc",
    location: "Dulles, VA",
    period: "Jun 2024 - Oct 2025",
    iconUrl: "https://yt3.googleusercontent.com/DtPCJZAodX0vE-b2swK7NKSCF5TFoqUJEsld-7R1LpE4UctbGsRK-qA8KUJwVShUa503HT8Irw=s900-c-k-c0x00ffffff-no-rj",
    type: "past",
    description: "", // Add your description here
  },
  {
    title: "Volunteer, Writer & Designer",
    company: "ABrightSpot",
    location: "One Loudoun, VA",
    period: "Nov 2024 - Dec 2024",
    iconUrl: "https://s3.us-east-1.amazonaws.com/files.galaxydigital.com/4677/agency/151088.jpg?20250111142103",
    type: "past",
    description: "", // Add your description here
  },
  {
    title: "Floor Staff",
    company: "Regal Cinemas",
    location: "Brambleton, VA",
    period: "Mar 2023 - Dec 2024",
    iconUrl: "https://www.woodlandsonline.com/images/cd/regal.jpg",
    type: "past",
    description: "", // Add your description here
  },
  {
    title: "Barista",
    company: "Harris Teeter",
    location: "Brambleton, VA",
    period: "May 2022 - Dec 2022",
    iconUrl: "https://imgproxy.divecdn.com/5YbgnoX-Yz0_BleIkjN0nl_QgU8Iwi79uN11PTEEMps/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9IYXJyaXNfVGVldGVyX2xvZ29fWTdDUG5yVi5wbmc=.webp",
    type: "past",
    description: "", // Add your description here
  },
];

export function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);

  return (
    <section ref={ref} className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-16 text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Work Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedJob(job)}
                className="p-6 rounded-xl transition-all duration-300 bg-white border border-gray-300 hover:border-gray-900 hover:shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100 border border-gray-300 flex items-center justify-center flex-shrink-0">
                    <ImageWithFallback
                      src={job.iconUrl}
                      alt={`${job.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-gray-700 text-sm mb-2">
                      {job.company}
                      {job.location && ` • ${job.location}`}
                    </p>
                    <p className="text-xs text-gray-500">{job.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Job Description Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              {selectedJob && (
                <>
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 border border-gray-300 flex items-center justify-center flex-shrink-0">
                    <ImageWithFallback
                      src={selectedJob.iconUrl}
                      alt={`${selectedJob.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div>{selectedJob.title}</div>
                    <div className="text-base text-gray-600 font-normal">
                      {selectedJob.company} • {selectedJob.location}
                    </div>
                  </div>
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {selectedJob?.period}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            {selectedJob?.description ? (
              <p className="text-gray-700 leading-relaxed">{selectedJob.description}</p>
            ) : (
              <p className="text-gray-500 italic">No description available yet.</p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
