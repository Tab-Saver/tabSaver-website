export function Logo16() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Folder */}
      <path
        d="M2 5 L2 13 C2 13.5 2.2 14 2.5 14 L13.5 14 C13.8 14 14 13.5 14 13 L14 5 Z"
        fill="#E89D3F"
      />
      <path
        d="M2 5 L2 3.5 C2 3 2.2 2.5 2.5 2.5 L6 2.5 L7 3.5 L13.5 3.5 C13.8 3.5 14 3.7 14 4 L14 5 Z"
        fill="#F5B456"
      />
      {/* Checkmark */}
      <circle cx="12" cy="3.5" r="2.5" fill="#4CAF50" />
      <path
        d="M10.5 3.5 L11.5 4.5 L13.5 2.5"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
