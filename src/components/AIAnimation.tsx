import { Globe, ArrowRight, Brain, FileText } from "lucide-react";

export function AIAnimation() {
  return (
    <div className="w-full min-h-[200px] flex items-center justify-center rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 via-chart-1/10 to-chart-2/10 p-8">
      <div className="flex items-center justify-center gap-6 md:gap-8 w-full flex-wrap">
        {/* Website/User */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm border border-primary/20">
            <Globe className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm text-foreground">Website Content</p>
            <p className="text-xs text-muted-foreground">User's saved pages</p>
          </div>
        </div>

        {/* Arrow 1 */}
        <ArrowRight className="w-6 h-6 text-primary/60 flex-shrink-0" />

        {/* Gemini 2.5 Flash */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-chart-1/30 to-chart-2/20 flex items-center justify-center shadow-sm border border-chart-1/30">
            <Brain className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm text-foreground">Gemini 2.5 Flash</p>
            <p className="text-xs text-muted-foreground">AI Processing</p>
          </div>
        </div>

        {/* Arrow 2 */}
        <ArrowRight className="w-6 h-6 text-primary/60 flex-shrink-0" />

        {/* Summary to User */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm border border-primary/20">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center">
            <p className="font-semibold text-sm text-foreground">AI Summary</p>
            <p className="text-xs text-muted-foreground">Back to user</p>
          </div>
        </div>
      </div>
    </div>
  );
}

