import { Button } from "./ui/button";
import { Download, Github } from "lucide-react";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-primary/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-primary">Browser Extension</p>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Save Your Tabs.<br />
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Save Your Time.
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tab Saver is the ultimate browser extension that helps you organize, save, and restore your tabs with ease. Never lose your research, work, or browsing sessions again.
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                <a href="https://chromewebstore.google.com/detail/nonbbacblhbkhblenjgljomlllcppidp?utm_source=item-share-cb" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                  Download Extension
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg" asChild>
                <a href="https://github.com/omarayman23/tabSaver-ui" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  View on GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-chart-1/20 to-chart-2/20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Logo className="relative w-72 h-72" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
