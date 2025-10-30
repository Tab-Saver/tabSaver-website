import { motion } from "motion/react";
import { Github, Mail, MapPin, Phone, ChevronDown, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/80 to-slate-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Omar A. Hamdan
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer & Computer Science Student
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-slate-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:o.18hamdan@outlook.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>o.18hamdan@outlook.com</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Ashburn, VA</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>(202) 299-7369</span>
            </div>
            <a
              href="https://github.com/omarhamdan010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/omar-hamdan-010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
              Presidential Scholar
            </div>
            <div className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400">
              Summa Cum Laude
            </div>
            <div className="px-6 py-3 bg-teal-500/10 border border-teal-500/30 rounded-lg text-teal-400">
              Hackathon Winner
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.8 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}
