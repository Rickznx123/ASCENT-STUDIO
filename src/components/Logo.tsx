export function Mark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="markGradient" x1="6" y1="40" x2="40" y2="6" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF4F8A" />
          <stop offset="1" stopColor="#7B61FF" />
        </linearGradient>
      </defs>
      <path
        d="M24 6L4 40h9.2L24 21.5 30.5 33H21l-3 7H44L24 6z"
        fill="url(#markGradient)"
      />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Mark />
      <span className="text-[1.05rem] font-bold tracking-tight text-ink-100">
        ASCENT<span className="ml-1 font-medium text-ink-500">STUDIO</span>
      </span>
    </span>
  );
}
