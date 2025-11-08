export function Logo48() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Folder back */}
      <path
        d="M8 16 L8 38 C8 40 8.5 42 10 42 L38 42 C39.5 42 40 40 40 38 L40 16 Z"
        fill="#E89D3F"
        stroke="#D08A2F"
        strokeWidth="1"
      />
      {/* Folder tab */}
      <path
        d="M8 16 L8 12 C8 10 8.5 8 10 8 L18 8 L21 11 L38 11 C39.5 11 40 12 40 14 L40 16 Z"
        fill="#F5B456"
        stroke="#D08A2F"
        strokeWidth="1"
      />
      {/* Tab dividers */}
      <line x1="16" y1="18" x2="16" y2="40" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
      <line x1="24" y1="18" x2="24" y2="40" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
      <line x1="32" y1="18" x2="32" y2="40" stroke="#ffffff" strokeWidth="1.5" opacity="0.4" />
      {/* Checkmark badge */}
      <circle cx="36" cy="12" r="6" fill="#4CAF50" stroke="#388E3C" strokeWidth="1" />
      <path
        d="M33 12 L35 14 L39 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
