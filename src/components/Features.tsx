import { Save, Clock, Shield, Zap, FolderOpen, RefreshCw, Brain } from "lucide-react";
import { Card } from "./ui/card";

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
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Why Choose Tab Saver?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for productivity enthusiasts, researchers, and anyone who works with multiple tabs. Enhanced with AI-powered summarization for smarter browsing.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
