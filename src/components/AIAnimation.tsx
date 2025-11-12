import { Globe, ArrowRight, Brain, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function AIAnimation() {
  return (
    <div className="w-full min-h-[240px] flex items-center justify-center rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 via-chart-1/10 to-chart-2/10 p-10">
      <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 w-full flex-wrap">
        {/* Website/User */}
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <motion.div 
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 0px rgba(3, 2, 19, 0.1)",
                "0 0 20px rgba(3, 2, 19, 0.2)",
                "0 0 0px rgba(3, 2, 19, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>
          <div className="text-center">
            <p className="font-semibold text-base text-foreground">Website Content</p>
            <p className="text-sm text-muted-foreground">User's saved pages</p>
          </div>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-8 h-8 text-primary/60 flex-shrink-0" />
        </motion.div>

        {/* Gemini 2.5 Flash */}
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <motion.div 
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-chart-1/30 to-chart-2/20 flex items-center justify-center shadow-sm border border-chart-1/30"
            animate={{
              boxShadow: [
                "0 0 0px rgba(3, 2, 19, 0.1)",
                "0 0 25px rgba(3, 2, 19, 0.3)",
                "0 0 0px rgba(3, 2, 19, 0.1)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>
          <div className="text-center">
            <p className="font-semibold text-base text-foreground">Gemini 2.5 Flash</p>
            <p className="text-sm text-muted-foreground">AI Processing</p>
          </div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <ArrowRight className="w-8 h-8 text-primary/60 flex-shrink-0" />
        </motion.div>

        {/* Summary to User */}
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <motion.div 
            className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm border border-primary/20"
            animate={{
              boxShadow: [
                "0 0 0px rgba(3, 2, 19, 0.1)",
                "0 0 20px rgba(3, 2, 19, 0.2)",
                "0 0 0px rgba(3, 2, 19, 0.1)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FileText className="w-10 h-10 text-primary" />
            </motion.div>
          </motion.div>
          <div className="text-center">
            <p className="font-semibold text-base text-foreground">AI Summary</p>
            <p className="text-sm text-muted-foreground">Back to user</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

