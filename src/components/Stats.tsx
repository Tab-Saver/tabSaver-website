import { Card } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Real data: 2 hours saved per week over 4 weeks = 8 hours total
const timeSavedData = [
  { week: "Week 1", hours: 2 },
  { week: "Week 2", hours: 2 },
  { week: "Week 3", hours: 2 },
  { week: "Week 4", hours: 2 },
];

const securityData = [
  { name: "Local Storage", value: 100, color: "hsl(var(--chart-1))" },
  { name: "Cloud Data", value: 0, color: "hsl(var(--chart-2))" },
];

const benefitsBreakdown = [
  { benefit: "No Re-login", value: 35, color: "#8B5CF6" },
  { benefit: "Context Recall", value: 30, color: "#3B82F6" },
  { benefit: "Crash Recovery", value: 20, color: "#10B981" },
  { benefit: "Tab Finding", value: 15, color: "#F59E0B" },
];

export function Stats() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl">Real Results from Real Usage</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            After one month of daily use, Tab Saver has proven to save valuable time and mental energy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Time Saved Per Week</p>
              <p className="text-4xl text-primary">2 hrs</p>
              <p className="text-muted-foreground">consistently every week</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Security Score</p>
              <p className="text-4xl text-green-600 font-semibold">100%</p>
              <p className="text-muted-foreground">All data stays local</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">Total Time Saved</p>
              <p className="text-4xl text-foreground font-semibold">8 hrs</p>
              <p className="text-muted-foreground">in just one month</p>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="mb-6">Weekly Time Savings</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timeSavedData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
                <Bar dataKey="hours" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-muted-foreground mt-4 text-center">
              Consistent 2-hour weekly savings from avoiding re-logins, crashes, and context switching
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="mb-6">Where Time is Saved</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={benefitsBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ benefit, value }) => `${benefit}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {benefitsBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-muted-foreground mt-4 text-center">
              No more wasting time remembering what you were doing, logging in, or recovering from crashes
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
