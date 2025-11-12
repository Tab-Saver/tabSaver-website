import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { Sparkles, Shield, Zap, Brain, CheckCircle2 } from "lucide-react";
import { AIAnimation } from "./AIAnimation";

const productivityData = [
  { month: "Jan", sessions: 45, summaries: 12 },
  { month: "Feb", sessions: 62, summaries: 28 },
  { month: "Mar", sessions: 78, summaries: 45 },
  { month: "Apr", sessions: 95, summaries: 67 },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Powerful Features, Real Results</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tab Saver combines intelligent AI-powered summarization with secure local storage to transform how you manage your browsing sessions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 space-y-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">AI Summaries Generated</p>
            <p className="text-4xl font-bold">152+</p>
            <p className="text-muted-foreground text-sm">Smart content summaries</p>
          </Card>
          
          <Card className="p-6 space-y-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Privacy Score</p>
            <p className="text-4xl font-bold">100%</p>
            <p className="text-muted-foreground text-sm">All data stays local</p>
          </Card>
          
          <Card className="p-6 space-y-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">Sessions Saved</p>
            <p className="text-4xl font-bold">280+</p>
            <p className="text-muted-foreground text-sm">Organized collections</p>
          </Card>
          
          <Card className="p-6 space-y-2">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <p className="text-muted-foreground text-sm">AI Accuracy</p>
            <p className="text-4xl font-bold">94%</p>
            <p className="text-muted-foreground text-sm">Summary quality rating</p>
          </Card>
        </div>

        {/* AI Summarization Feature Section */}
        <Card className="p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">AI-Powered Smart Summarization</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
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
            <div className="space-y-4">
              <div className="mb-4">
                <h4 className="font-semibold text-lg mb-4">Productivity Growth</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <AreaChart data={productivityData}>
                    <defs>
                      <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.05}/>
                      </linearGradient>
                      <linearGradient id="colorSummaries" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--popover))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)"
                      }}
                    />
                    <Area type="monotone" dataKey="sessions" stroke="hsl(var(--chart-1))" fillOpacity={1} fill="url(#colorSessions)" />
                    <Area type="monotone" dataKey="summaries" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorSummaries)" />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-1))]" />
                    <span className="text-sm text-muted-foreground">Sessions Saved</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[hsl(var(--chart-2))]" />
                    <span className="text-sm text-muted-foreground">AI Summaries</span>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <AIAnimation />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
