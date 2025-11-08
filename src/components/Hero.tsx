import { Button } from "./ui/button";
import { Download, Github } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-primary">Browser Extension</p>
            </div>
            <h1 className="text-5xl md:text-6xl">
              Save Your Tabs.<br />
              <span className="text-primary">Save Your Time.</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Tab Saver is the ultimate browser extension that helps you organize, save, and restore your tabs with ease. Never lose your research, work, or browsing sessions again.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                <Download className="w-5 h-5" />
                Download Extension
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://github.com/omarayman23" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/20 to-chart-2/20 blur-3xl rounded-full"></div>
            <Logo className="relative w-72 h-72" />
          </div>
        </div>
      </div>
    </section>
  );
}
