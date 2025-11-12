import { Globe, ArrowRight, Brain, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function AIAnimation() {
  return (
    <div className="w-full min-h-[280px] flex items-center justify-center rounded-lg border bg-card p-12">
      <div className="flex items-center justify-center gap-10 md:gap-14 lg:gap-20 w-full flex-wrap">
        {/* Website/User */}
        <motion.div 
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -3 }}
        >
          <motion.div 
            className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center border"
            whileHover={{ 
              rotate: 360,
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <Globe className="w-8 h-8 text-primary" />
          </motion.div>
          <div className="text-center space-y-1">
            <p className="font-semibold text-base text-foreground">Website Content</p>
            <p className="text-sm text-muted-foreground">User's saved pages</p>
          </div>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-7 h-7 text-primary/70 flex-shrink-0" />
        </motion.div>

        {/* Gemini 2.5 Flash */}
        <motion.div 
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, y: -3 }}
        >
          <motion.div 
            className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center border"
            whileHover={{ 
              rotate: 360,
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="w-8 h-8 text-primary" />
          </motion.div>
          <div className="text-center space-y-1">
            <p className="font-semibold text-base text-foreground">Gemini 2.5 Flash</p>
            <p className="text-sm text-muted-foreground">AI Processing</p>
          </div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ArrowRight className="w-7 h-7 text-primary/70 flex-shrink-0" />
        </motion.div>

        {/* Summary to User */}
        <motion.div 
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -3 }}
        >
          <motion.div 
            className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center border"
            whileHover={{ 
              rotate: 360,
              scale: 1.1
            }}
            transition={{ duration: 0.6 }}
          >
            <FileText className="w-8 h-8 text-primary" />
          </motion.div>
          <div className="text-center space-y-1">
            <p className="font-semibold text-base text-foreground">AI Summary</p>
            <p className="text-sm text-muted-foreground">Back to user</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

