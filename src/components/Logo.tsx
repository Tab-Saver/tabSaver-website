export function Logo({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="120" cy="120" r="100" fill="#030213" opacity="0.05" />
      
      {/* Folder back */}
      <path
        d="M50 95 L50 170 C50 176 52 180 58 180 L182 180 C188 180 190 176 190 170 L190 95 Z"
        fill="#E89D3F"
        stroke="#D08A2F"
        strokeWidth="2"
      />
      
      {/* Folder tab */}
      <path
        d="M50 95 L50 80 C50 74 52 70 58 70 L95 70 L105 80 L182 80 C188 80 190 82 190 88 L190 95 Z"
        fill="#F5B456"
        stroke="#D08A2F"
        strokeWidth="2"
      />
      
      {/* Tab dividers inside folder */}
      <line x1="80" y1="100" x2="80" y2="175" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
      <line x1="120" y1="100" x2="120" y2="175" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
      <line x1="160" y1="100" x2="160" y2="175" stroke="#ffffff" strokeWidth="3" opacity="0.4" />
      
      {/* Save/bookmark icon */}
      <circle cx="170" cy="75" r="24" fill="#4CAF50" stroke="#388E3C" strokeWidth="2" />
      <path
        d="M160 75 L167 82 L180 69"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
