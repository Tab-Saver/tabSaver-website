import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ComposedChart, Cell } from "recharts";
import { Sparkles, Shield, Zap, Brain, CheckCircle2, TrendingUp } from "lucide-react";
import { AIAnimation } from "./AIAnimation";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const productivityData = [
  { month: "Jan", sessions: 45, summaries: 12, efficiency: 27 },
  { month: "Feb", sessions: 62, summaries: 28, efficiency: 45 },
  { month: "Mar", sessions: 78, summaries: 45, efficiency: 58 },
  { month: "Apr", sessions: 95, summaries: 67, efficiency: 71 },
];

const COLORS = {
  sessions: "hsl(var(--chart-1))",
  summaries: "hsl(var(--chart-2))",
  efficiency: "hsl(var(--chart-3))",
};

const statCards = [
  { icon: Sparkles, label: "AI Summaries Generated", value: "152+", subtext: "Smart content summaries" },
  { icon: Shield, label: "Privacy Score", value: "100%", subtext: "All data stays local" },
  { icon: Zap, label: "Sessions Saved", value: "280+", subtext: "Organized collections" },
  { icon: Brain, label: "AI Accuracy", value: "94%", subtext: "Summary quality rating" },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="stats" className="py-20 px-6 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Powerful Features, Real Results</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tab Saver combines intelligent AI-powered summarization with secure local storage to transform how you manage your browsing sessions.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" ref={statsRef}>
          {statCards.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="p-6 space-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.15
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                  <motion.p 
                    className="text-4xl font-bold"
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-muted-foreground text-sm">{stat.subtext}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* AI Summarization Feature Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-8 mb-8">
            <div className="space-y-16">
              {/* Diagram on top */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AIAnimation />
              </motion.div>
              
              {/* AI Content and Chart side by side */}
              <motion.div 
                className="grid md:grid-cols-2 gap-12 items-start"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">AI-Powered Smart Summarization</h3>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed max-w-none">
                  Tab Saver uses advanced AI to intelligently summarize your saved pages, helping you quickly recall important information without reopening every tab.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-base mb-1">Opt-In Only</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">AI summarization is disabled by default. You control when and what gets summarized.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-base mb-1">Secure Processing</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Content is sent over HTTPS to our secure backend API only when you explicitly enable the feature.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-base mb-1">Instant Insights</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">Get concise summaries that capture key points, making it easy to find what you need later.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-lg">Productivity Growth</h4>
                </div>
                <ResponsiveContainer width="100%" height={320}>
                  <ComposedChart data={productivityData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gradientSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2}/>
                      </linearGradient>
                      <linearGradient id="gradientSummaries" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                        <stop offset="100%" stopColor="hsl(var(--chart-2))" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                    <XAxis 
                      dataKey="month" 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--popover))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                      }}
                      cursor={{ fill: "hsl(var(--primary))", fillOpacity: 0.1 }}
                    />
                    <Bar 
                      dataKey="sessions" 
                      fill="url(#gradientSessions)" 
                      radius={[8, 8, 0, 0]}
                      name="Sessions Saved"
                    />
                    <Bar 
                      dataKey="summaries" 
                      fill="url(#gradientSummaries)" 
                      radius={[8, 8, 0, 0]}
                      name="AI Summaries"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="hsl(var(--chart-3))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--chart-3))", r: 5, strokeWidth: 2, stroke: "hsl(var(--background))" }}
                      activeDot={{ r: 7 }}
                      name="Efficiency %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 mt-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))]" />
                    <span className="text-sm text-muted-foreground font-medium">Sessions Saved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))]" />
                    <span className="text-sm text-muted-foreground font-medium">AI Summaries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-3))]" />
                    <span className="text-sm text-muted-foreground font-medium">Efficiency</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Card>
        </motion.div>
      </div>
    </section>
  );
}
