export function AIAnimation() {
  return (
    <div className="relative w-full h-full min-h-[280px] flex items-center justify-center rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/5 via-chart-1/10 to-chart-2/10">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{
              left: `${10 + (i * 6)}%`,
              top: `${10 + (i * 5)}%`,
              animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.2)}s`,
            }}
          />
        ))}
      </div>

      {/* Neural network visualization */}
      <svg
        className="relative w-full h-full"
        viewBox="0 0 400 280"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated connection lines */}
        <g stroke="currentColor" strokeWidth="2" className="text-primary/25">
          <line x1="80" y1="70" x2="160" y2="100" className="animate-pulse" style={{ animationDelay: "0s" }} />
          <line x1="80" y1="140" x2="160" y2="100" className="animate-pulse" style={{ animationDelay: "0.2s" }} />
          <line x1="80" y1="210" x2="160" y2="180" className="animate-pulse" style={{ animationDelay: "0.4s" }} />
          <line x1="160" y1="100" x2="240" y2="70" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
          <line x1="160" y1="100" x2="240" y2="140" className="animate-pulse" style={{ animationDelay: "0.8s" }} />
          <line x1="160" y1="180" x2="240" y2="140" className="animate-pulse" style={{ animationDelay: "1s" }} />
          <line x1="240" y1="70" x2="320" y2="100" className="animate-pulse" style={{ animationDelay: "1.2s" }} />
          <line x1="240" y1="140" x2="320" y2="100" className="animate-pulse" style={{ animationDelay: "1.4s" }} />
          <line x1="240" y1="140" x2="320" y2="180" className="animate-pulse" style={{ animationDelay: "1.6s" }} />
        </g>

        {/* Input layer nodes */}
        <g>
          <circle cx="80" cy="70" r="14" fill="url(#nodeGradient)" className="text-primary/50" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "0s" }} />
          <circle cx="80" cy="140" r="14" fill="url(#nodeGradient)" className="text-primary/50" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "0.3s" }} />
          <circle cx="80" cy="210" r="14" fill="url(#nodeGradient)" className="text-primary/50" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "0.6s" }} />
        </g>

        {/* Hidden layer nodes */}
        <g>
          <circle cx="240" cy="70" r="16" fill="url(#nodeGradient)" className="text-primary/70" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "0.9s" }} />
          <circle cx="240" cy="140" r="16" fill="url(#nodeGradient)" className="text-primary/70" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "1.2s" }} />
          <circle cx="160" cy="180" r="16" fill="url(#nodeGradient)" className="text-primary/70" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "1.5s" }} />
        </g>

        {/* Output layer nodes */}
        <g>
          <circle cx="320" cy="100" r="20" fill="url(#nodeGradient)" className="text-primary" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "1.8s" }} />
          <circle cx="320" cy="180" r="20" fill="url(#nodeGradient)" className="text-primary" filter="url(#glow)" style={{ animation: "pulse 2s ease-in-out infinite", animationDelay: "2.1s" }} />
        </g>

        {/* Data flow particles */}
        <g>
          <circle cx="80" cy="70" r="3" fill="currentColor" className="text-primary animate-ping" style={{ animationDelay: "0s", animationDuration: "2.5s" }} />
          <circle cx="160" cy="100" r="3" fill="currentColor" className="text-primary animate-ping" style={{ animationDelay: "0.8s", animationDuration: "2.5s" }} />
          <circle cx="240" cy="140" r="3" fill="currentColor" className="text-primary animate-ping" style={{ animationDelay: "1.6s", animationDuration: "2.5s" }} />
          <circle cx="320" cy="140" r="3" fill="currentColor" className="text-primary animate-ping" style={{ animationDelay: "2.4s", animationDuration: "2.5s" }} />
        </g>
      </svg>

      {/* Glowing center effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}

