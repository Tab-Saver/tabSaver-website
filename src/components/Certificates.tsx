import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const certificates = [
  {
    title: "Machine Learning Statistical Foundations",
    issuer: "Wolfram",
    date: "Oct 2025",
    iconUrl: "https://content.wolfram.com/sites/43/2018/12/spikey-wolfram-logo.png", // Replace with your icon
  },
  {
    title: "LambdaTest Software Testing Professional",
    issuer: "LambdaTest",
    date: "Oct 2025",
    iconUrl: "https://www.theladders.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcompany-photo.theladders.com%2F50313%2F082cd5db-4f9f-4ad1-afeb-7738b122198a.jpg&w=1080&q=75", // Replace with your icon
  },
  {
    title: "Ubuntu Linux Professional",
    issuer: "Canonical",
    date: "Oct 2025",
    iconUrl: "https://i0.wp.com/www.webpronews.com/wp-content/uploads/2024/04/Canonical-Logo.png?fit=1920%2C1080&ssl=1", // Replace with your icon
  },
  {
    title: "Microsoft Azure AI",
    issuer: "Microsoft",
    date: "Oct 2025",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png", // Replace with your icon
  },
  {
    title: "GitHub Professional",
    issuer: "GitHub",
    date: "Oct 2025",
    iconUrl: "https://a.slack-edge.com/80588/img/plugins/github/service_512.png", // Replace with your icon
  },
  {
    title: "Microsoft CE in Software Development",
    issuer: "Microsoft",
    date: "Oct 2025",
    iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png", // Replace with your icon
  },
  {
    title: "Fortinet Network Expert, NSE1 & NSE2",
    issuer: "Fortinet",
    date: "Jun 2021",
    iconUrl: "https://web-assets.claroty.com/fortinet-logo.wine.png", // Replace with your icon
  },
];

export function Certificates() {
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
            Certificates & Credentials
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                    <ImageWithFallback
                      src={cert.iconUrl}
                      alt={`${cert.issuer} logo`}
                      className="w-8 h-8 object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
