export function StoreIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 9.5 5.2 4h13.6l1.2 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 9.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 20v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.03 6.47 2.03 12c0 1.77.46 3.45 1.35 4.94L2 22l5.2-1.36a9.94 9.94 0 0 0 4.82 1.23h.01c5.51 0 9.98-4.47 9.98-9.98C21.99 6.47 17.53 2 12.02 2Zm0 18.06h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.09.81.82-3.01-.2-.31a8.28 8.28 0 0 1-1.27-4.4c0-4.58 3.72-8.3 8.3-8.3 2.21 0 4.29.87 5.86 2.44a8.24 8.24 0 0 1 2.43 5.87c0 4.58-3.73 8.24-8.31 8.24Zm4.55-6.2c-.25-.13-1.47-.72-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.65.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.36-.77-1.85-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.48-.01a.93.93 0 0 0-.67.31c-.23.25-.87.85-.87 2.08s.9 2.42 1.02 2.58c.13.17 1.77 2.71 4.29 3.8.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function CottonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 58c-1-14-1-24-4-36" stroke="#8a6a4a" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M28 34c-7-1-11 2-15-3M30 27c-6-2-8-6-6-11M31 22c5-3 8-1 11-6" stroke="#5a8a4a" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="16" r="9" fill="#fffaf0" stroke="#eadfc8" strokeWidth="1" />
      <circle cx="33" cy="10" r="8.5" fill="#ffffff" stroke="#eadfc8" strokeWidth="1" />
      <circle cx="16" cy="22" r="7" fill="#fdf6e8" stroke="#eadfc8" strokeWidth="1" />
      <circle cx="34" cy="21" r="7" fill="#fffaf0" stroke="#eadfc8" strokeWidth="1" />
    </svg>
  );
}

export function SpoolIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M14 14v36c0 3.3 8 6 18 6s18-2.7 18-6V14" fill="#f97316" />
      <path
        d="M17 20c5 3 25 3 30-1M17 28c5 3 25 3 30-1M17 36c5 3 25 3 30-1M17 44c5 3 25 3 30-1"
        stroke="#ffedd5"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <ellipse cx="32" cy="50" rx="18" ry="6" fill="#ea580c" />
      <ellipse cx="32" cy="14" rx="18" ry="6" fill="#fb923c" stroke="#ea580c" strokeWidth="1.5" />
    </svg>
  );
}

export function ThreadIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M14 50 46 18" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
      <path d="M44 16 50 10" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="40" cy="20" r="3.2" fill="none" stroke="#64748b" strokeWidth="2" />
      <path d="M38 22c-4 6-2 12 4 14s10-2 8-8" stroke="#f43397" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <path d="M18 46l4 4M24 40l4 4M30 34l4 4" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function KidsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M36 46c0-8.5 3.5-14 8-14s8 5.5 8 14" fill="#7dd3fc" />
      <circle cx="44" cy="20" r="7" fill="#f3c9a5" />
      <path d="M38 16c1-4 11-4 12 0" fill="#3b2a1a" />
      <path d="M13 44c0-9 4-15 9-15s9 6 9 15" fill="#f472b6" />
      <circle cx="22" cy="18" r="7" fill="#f3c9a5" />
      <path d="M15 14c1-5 12-5 13 0" fill="#7c4a2d" />
      <path d="M30 31l8-6" stroke="#f472b6" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="39" cy="24" r="2.8" fill="#f3c9a5" />
    </svg>
  );
}

export function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17 32a12 12 0 0 1-1-23.9A14 14 0 0 1 43 10a10 10 0 0 1 4 19.2V32H17Z" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2 14.5 9.2 22 10l-6 4.8 2.1 7.2L12 17.8 5.9 22l2.1-7.2L2 10l7.5-.8L12 2Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function MBadgeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 46" className={className} aria-hidden="true">
      <path d="M13 12c0-4.5 3-8 7-8s7 3.5 7 8" stroke="#f43397" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <rect x="6" y="12" width="28" height="28" rx="7" fill="#fdf2f6" stroke="#f4c9dd" />
      <path d="M12 32V18l8 8 8-8v14" fill="none" stroke="#dc2626" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
