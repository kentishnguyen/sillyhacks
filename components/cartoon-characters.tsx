'use client'

import { cn } from '@/lib/utils'

// Cute cartoon cat character
export function CartoonCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-24 h-24', className)}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="50" cy="65" rx="30" ry="25" fill="#FF9F43" stroke="#2D3436" strokeWidth="2" />
      {/* Head */}
      <circle cx="50" cy="35" r="25" fill="#FF9F43" stroke="#2D3436" strokeWidth="2" />
      {/* Left ear */}
      <polygon points="30,15 25,35 40,30" fill="#FF9F43" stroke="#2D3436" strokeWidth="2" />
      <polygon points="32,20 29,32 38,28" fill="#FFEAA7" />
      {/* Right ear */}
      <polygon points="70,15 75,35 60,30" fill="#FF9F43" stroke="#2D3436" strokeWidth="2" />
      <polygon points="68,20 71,32 62,28" fill="#FFEAA7" />
      {/* Eyes */}
      <ellipse cx="40" cy="32" rx="6" ry="7" fill="white" stroke="#2D3436" strokeWidth="1.5" />
      <ellipse cx="60" cy="32" rx="6" ry="7" fill="white" stroke="#2D3436" strokeWidth="1.5" />
      <circle cx="42" cy="33" r="3" fill="#2D3436" />
      <circle cx="62" cy="33" r="3" fill="#2D3436" />
      <circle cx="43" cy="32" r="1" fill="white" />
      <circle cx="63" cy="32" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="42" rx="4" ry="3" fill="#FF6B81" />
      {/* Mouth */}
      <path d="M50 45 Q50 50 45 48" fill="none" stroke="#2D3436" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 45 Q50 50 55 48" fill="none" stroke="#2D3436" strokeWidth="1.5" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="25" y1="38" x2="38" y2="40" stroke="#2D3436" strokeWidth="1" />
      <line x1="25" y1="43" x2="38" y2="43" stroke="#2D3436" strokeWidth="1" />
      <line x1="62" y1="40" x2="75" y2="38" stroke="#2D3436" strokeWidth="1" />
      <line x1="62" y1="43" x2="75" y2="43" stroke="#2D3436" strokeWidth="1" />
      {/* Tail */}
      <path d="M80 70 Q95 60 90 45" fill="none" stroke="#FF9F43" strokeWidth="8" strokeLinecap="round" />
      <path d="M80 70 Q95 60 90 45" fill="none" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
      {/* Stripes */}
      <path d="M40 25 Q50 20 60 25" fill="none" stroke="#E17055" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 20 Q50 16 58 20" fill="none" stroke="#E17055" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Cute cartoon dog character
export function CartoonDog({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-24 h-24', className)}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="50" cy="68" rx="28" ry="22" fill="#DFE6E9" stroke="#2D3436" strokeWidth="2" />
      {/* Head */}
      <circle cx="50" cy="38" r="25" fill="#DFE6E9" stroke="#2D3436" strokeWidth="2" />
      {/* Left ear (floppy) */}
      <ellipse cx="25" cy="35" rx="10" ry="18" fill="#B2BEC3" stroke="#2D3436" strokeWidth="2" />
      {/* Right ear (floppy) */}
      <ellipse cx="75" cy="35" rx="10" ry="18" fill="#B2BEC3" stroke="#2D3436" strokeWidth="2" />
      {/* Snout */}
      <ellipse cx="50" cy="48" rx="12" ry="10" fill="#FFEAA7" stroke="#2D3436" strokeWidth="1.5" />
      {/* Eyes */}
      <ellipse cx="40" cy="35" rx="6" ry="7" fill="white" stroke="#2D3436" strokeWidth="1.5" />
      <ellipse cx="60" cy="35" rx="6" ry="7" fill="white" stroke="#2D3436" strokeWidth="1.5" />
      <circle cx="42" cy="36" r="3.5" fill="#2D3436" />
      <circle cx="62" cy="36" r="3.5" fill="#2D3436" />
      <circle cx="43" cy="35" r="1.2" fill="white" />
      <circle cx="63" cy="35" r="1.2" fill="white" />
      {/* Nose */}
      <ellipse cx="50" cy="45" rx="5" ry="4" fill="#2D3436" />
      <ellipse cx="48" cy="44" rx="1.5" ry="1" fill="#636E72" />
      {/* Mouth */}
      <path d="M50 49 L50 54" stroke="#2D3436" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 54 Q45 58 40 55" fill="none" stroke="#2D3436" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M50 54 Q55 58 60 55" fill="none" stroke="#2D3436" strokeWidth="1.5" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="50" cy="58" rx="4" ry="5" fill="#FF6B81" />
      {/* Tail */}
      <path d="M78 68 Q92 55 85 45" fill="none" stroke="#DFE6E9" strokeWidth="10" strokeLinecap="round" />
      <path d="M78 68 Q92 55 85 45" fill="none" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" />
      {/* Spot on body */}
      <circle cx="40" cy="65" r="8" fill="#B2BEC3" />
    </svg>
  )
}

// Cute cartoon bird character
export function CartoonBird({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="50" cy="55" rx="25" ry="28" fill="#74B9FF" stroke="#2D3436" strokeWidth="2" />
      {/* Wing */}
      <ellipse cx="30" cy="55" rx="12" ry="18" fill="#0984E3" stroke="#2D3436" strokeWidth="1.5" />
      {/* Head */}
      <circle cx="50" cy="30" r="18" fill="#74B9FF" stroke="#2D3436" strokeWidth="2" />
      {/* Crest */}
      <ellipse cx="50" cy="14" rx="4" ry="8" fill="#FDCB6E" stroke="#2D3436" strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="44" cy="28" r="5" fill="white" stroke="#2D3436" strokeWidth="1" />
      <circle cx="56" cy="28" r="5" fill="white" stroke="#2D3436" strokeWidth="1" />
      <circle cx="45" cy="29" r="2.5" fill="#2D3436" />
      <circle cx="57" cy="29" r="2.5" fill="#2D3436" />
      {/* Beak */}
      <polygon points="50,35 45,42 55,42" fill="#FDCB6E" stroke="#2D3436" strokeWidth="1.5" />
      {/* Blush */}
      <ellipse cx="38" cy="34" rx="3" ry="2" fill="#FF6B81" opacity="0.5" />
      <ellipse cx="62" cy="34" rx="3" ry="2" fill="#FF6B81" opacity="0.5" />
      {/* Feet */}
      <path d="M40 82 L35 90 M40 82 L40 90 M40 82 L45 90" stroke="#FDCB6E" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 82 L55 90 M60 82 L60 90 M60 82 L65 90" stroke="#FDCB6E" strokeWidth="2" strokeLinecap="round" />
      {/* Belly */}
      <ellipse cx="50" cy="65" rx="12" ry="15" fill="#DFE6E9" />
    </svg>
  )
}

// Cute cartoon fish character
export function CartoonFish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      className={cn('w-24 h-20', className)}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="45" cy="40" rx="30" ry="22" fill="#00CEC9" stroke="#2D3436" strokeWidth="2" />
      {/* Tail */}
      <polygon points="75,40 95,25 95,55" fill="#00CEC9" stroke="#2D3436" strokeWidth="2" />
      {/* Top fin */}
      <ellipse cx="45" cy="18" rx="12" ry="8" fill="#81ECEC" stroke="#2D3436" strokeWidth="1.5" />
      {/* Eye */}
      <circle cx="30" cy="38" r="8" fill="white" stroke="#2D3436" strokeWidth="1.5" />
      <circle cx="32" cy="39" r="4" fill="#2D3436" />
      <circle cx="33" cy="38" r="1.5" fill="white" />
      {/* Mouth */}
      <ellipse cx="16" cy="42" rx="3" ry="4" fill="#FF6B81" />
      {/* Scales pattern */}
      <path d="M40 32 Q45 28 50 32" fill="none" stroke="#81ECEC" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 32 Q55 28 60 32" fill="none" stroke="#81ECEC" strokeWidth="2" strokeLinecap="round" />
      <path d="M45 42 Q50 38 55 42" fill="none" stroke="#81ECEC" strokeWidth="2" strokeLinecap="round" />
      {/* Bubbles */}
      <circle cx="12" cy="30" r="3" fill="none" stroke="#74B9FF" strokeWidth="1" />
      <circle cx="8" cy="22" r="2" fill="none" stroke="#74B9FF" strokeWidth="1" />
    </svg>
  )
}

// Cartoon mouse (Jerry-style)
export function CartoonMouse({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-20 h-20', className)}
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="50" cy="65" rx="20" ry="18" fill="#B2BEC3" stroke="#2D3436" strokeWidth="2" />
      {/* Head */}
      <ellipse cx="50" cy="40" rx="22" ry="20" fill="#DFE6E9" stroke="#2D3436" strokeWidth="2" />
      {/* Left ear */}
      <circle cx="30" cy="25" r="12" fill="#DFE6E9" stroke="#2D3436" strokeWidth="2" />
      <circle cx="30" cy="25" r="7" fill="#FFEAA7" />
      {/* Right ear */}
      <circle cx="70" cy="25" r="12" fill="#DFE6E9" stroke="#2D3436" strokeWidth="2" />
      <circle cx="70" cy="25" r="7" fill="#FFEAA7" />
      {/* Eyes */}
      <ellipse cx="42" cy="38" rx="5" ry="6" fill="white" stroke="#2D3436" strokeWidth="1" />
      <ellipse cx="58" cy="38" rx="5" ry="6" fill="white" stroke="#2D3436" strokeWidth="1" />
      <circle cx="43" cy="39" r="2.5" fill="#2D3436" />
      <circle cx="59" cy="39" r="2.5" fill="#2D3436" />
      {/* Nose */}
      <ellipse cx="50" cy="48" rx="4" ry="3" fill="#FF6B81" />
      {/* Whiskers */}
      <line x1="30" y1="48" x2="42" y2="50" stroke="#2D3436" strokeWidth="1" />
      <line x1="28" y1="52" x2="42" y2="52" stroke="#2D3436" strokeWidth="1" />
      <line x1="58" y1="50" x2="70" y2="48" stroke="#2D3436" strokeWidth="1" />
      <line x1="58" y1="52" x2="72" y2="52" stroke="#2D3436" strokeWidth="1" />
      {/* Teeth */}
      <rect x="47" y="52" width="6" height="5" rx="1" fill="white" stroke="#2D3436" strokeWidth="0.5" />
      {/* Tail */}
      <path d="M70 70 Q85 75 90 60 Q95 45 85 40" fill="none" stroke="#B2BEC3" strokeWidth="4" strokeLinecap="round" />
      <path d="M70 70 Q85 75 90 60 Q95 45 85 40" fill="none" stroke="#2D3436" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
