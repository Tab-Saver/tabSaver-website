import { Save, Clock, Shield, Zap, FolderOpen, RefreshCw, Brain } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Save,
    title: "One-Click Save",
    description: "Save all your open tabs instantly with a single click. Create organized collections for different projects.",
  },
  {
    icon: Brain,
    title: "AI-Powered Summaries",
    description: "Get intelligent summaries of your saved pages using advanced AI. Opt-in feature that helps you quickly recall key information without reopening tabs.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Restore your entire browsing session in seconds. No more manually searching for lost tabs or re-logging into websites.",
  },
  {
    icon: Shield,
    title: "100% Secure & Private",
    description: "Your data stays on your device. All tab data is stored locally. AI summarization is opt-in only and sent securely over HTTPS when enabled.",
  },
  {
    icon: FolderOpen,
    title: "Smart Organization",
    description: "Group tabs by project, topic, or context. Name and manage your collections with ease. Find what you need instantly.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Lightweight and optimized for performance. Tab Saver won't slow down your browser, even with hundreds of saved sessions.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Recovery",
    description: "Never lose your work due to crashes or accidental closures. Automatic session backup keeps your work safe.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 px-6 bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Why Choose Tab Saver?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for productivity enthusiasts, researchers, and anyone who works with multiple tabs. Enhanced with AI-powered summarization for smarter browsing.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
