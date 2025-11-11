import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Cell } from "recharts";
import { Sparkles, Shield, Zap, Brain } from "lucide-react";

// Enhanced data showing productivity improvements
const productivityData = [
  { month: "Jan", sessions: 45, summaries: 12 },
  { month: "Feb", sessions: 62, summaries: 28 },
  { month: "Mar", sessions: 78, summaries: 45 },
  { month: "Apr", sessions: 95, summaries: 67 },
];

const aiUsageData = [
  { feature: "Smart Summaries", usage: 85, color: "#8B5CF6" },
  { feature: "Context Analysis", usage: 72, color: "#3B82F6" },
  { feature: "Quick Recall", usage: 91, color: "#10B981" },
  { feature: "Content Extraction", usage: 68, color: "#F59E0B" },
];

const securityMetrics = [
  { category: "Data Privacy", score: 100 },
  { category: "Local Storage", score: 100 },
  { category: "Encryption", score: 95 },
  { category: "User Control", score: 100 },
  { category: "Transparency", score: 100 },
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
          <Card className="p-6 border-2 border-primary/20">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm">AI Summaries Generated</p>
              <p className="text-4xl font-bold text-primary">152+</p>
              <p className="text-muted-foreground text-sm">Smart content summaries</p>
            </div>
          </Card>
          
          <Card className="p-6 border-2 border-green-500/20">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-2">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-muted-foreground text-sm">Privacy Score</p>
              <p className="text-4xl font-bold text-green-600">100%</p>
              <p className="text-muted-foreground text-sm">All data stays local</p>
            </div>
          </Card>
          
          <Card className="p-6 border-2 border-blue-500/20">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-muted-foreground text-sm">Sessions Saved</p>
              <p className="text-4xl font-bold text-blue-600">280+</p>
              <p className="text-muted-foreground text-sm">Organized collections</p>
            </div>
          </Card>
          
          <Card className="p-6 border-2 border-purple-500/20">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-muted-foreground text-sm">AI Accuracy</p>
              <p className="text-4xl font-bold text-purple-600">94%</p>
              <p className="text-muted-foreground text-sm">Summary quality rating</p>
            </div>
          </Card>
        </div>

        {/* AI Summarization Feature Section */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-2">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">AI-Powered Smart Summarization</h3>
              </div>
              <p className="text-muted-foreground">
                Tab Saver uses advanced AI to intelligently summarize your saved pages, helping you quickly recall important information without reopening every tab.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Opt-In Only</p>
                    <p className="text-sm text-muted-foreground">AI summarization is disabled by default. You control when and what gets summarized.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Secure Processing</p>
                    <p className="text-sm text-muted-foreground">Content is sent over HTTPS to our secure backend API only when you explicitly enable the feature.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Instant Insights</p>
                    <p className="text-sm text-muted-foreground">Get concise summaries that capture key points, making it easy to find what you need later.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">AI Feature Usage</h4>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={aiUsageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="feature" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--popover))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }}
                  />
                  <Bar dataKey="usage" radius={[8, 8, 0, 0]}>
                    {aiUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="mb-6 font-semibold text-lg">Growing Productivity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={productivityData}>
                <defs>
                  <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorSummaries" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
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
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Track your productivity growth as you save more sessions and leverage AI summaries
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-6 font-semibold text-lg">Security & Privacy Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={securityMetrics}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                <Radar
                  name="Security Score"
                  dataKey="score"
                  stroke="hsl(var(--chart-1))"
                  fill="hsl(var(--chart-1))"
                  fillOpacity={0.6}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Comprehensive security metrics showing our commitment to your privacy and data protection
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
