import { Save, Clock, Shield, Zap, FolderOpen, RefreshCw } from "lucide-react";
import { Card } from "./ui/card";

const features = [
  {
    icon: Save,
    title: "One-Click Save",
    description: "Save all your open tabs instantly with a single click. Create organized collections for different projects.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Restore your entire browsing session in seconds. No more manually searching for lost tabs.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data stays on your device. We never collect, store, or transmit your browsing information.",
  },
  {
    icon: FolderOpen,
    title: "Smart Organization",
    description: "Group tabs by project, topic, or context. Name and manage your collections with ease.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Lightweight and optimized for performance. Tab Saver won't slow down your browser.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Recovery",
    description: "Never lose your work due to crashes or accidental closures. Automatic session backup.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl">Why Choose Tab Saver?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for productivity enthusiasts, researchers, and anyone who works with multiple tabs.
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
                <h3>{feature.title}</h3>
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
