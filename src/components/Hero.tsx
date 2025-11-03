import { motion } from "motion/react";
import { Github, Mail, MapPin, Phone, ChevronDown, Linkedin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-6xl md:text-8xl mb-4 bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Omar A. Hamdan
          </motion.h1>

          <motion.div
            className="text-xl md:text-2xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer & Computer Science Student
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="mailto:o.18hamdan@outlook.com"
              className="flex items-center gap-2 hover:text-black transition-colors"
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
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/omar-hamdan-010"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
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
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
}
