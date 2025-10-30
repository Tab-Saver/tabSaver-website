import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 px-6 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:o.18hamdan@outlook.com"
              className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <p className="text-slate-100 group-hover:text-cyan-400 transition-colors">
                  o.18hamdan@outlook.com
                </p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <p className="text-slate-100">(202) 299-7369</p>
              </div>
            </motion.div>

            <motion.a
              href="https://github.com/omarayman23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                <Github className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">GitHub</p>
                <p className="text-slate-100 group-hover:text-cyan-400 transition-colors">
                  @omarayman23
                </p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/omar-hamdan-74674933b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                <p className="text-slate-100 group-hover:text-blue-400 transition-colors">
                  Omar Hamdan
                </p>
              </div>
            </motion.a>

            <motion.div
              className="flex items-center gap-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl md:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="p-3 bg-teal-500/10 rounded-lg">
                <MapPin className="w-6 h-6 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="text-slate-100">Ashburn, VA</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center pt-12 border-t border-slate-800"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-slate-400">
              © 2025 Omar A. Hamdan. Built with React, Tailwind CSS, and Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
