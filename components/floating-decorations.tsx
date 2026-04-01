'use client'

import { cn } from '@/lib/utils'

const decorations = [
  { emoji: '🐾', className: 'top-[10%] left-[5%]', delay: '0s', size: 'text-3xl' },
  { emoji: '🦴', className: 'top-[15%] right-[8%]', delay: '0.5s', size: 'text-4xl' },
  { emoji: '🐟', className: 'top-[25%] left-[12%]', delay: '1s', size: 'text-2xl' },
  { emoji: '🧀', className: 'bottom-[30%] right-[5%]', delay: '1.5s', size: 'text-3xl' },
  { emoji: '🐾', className: 'bottom-[20%] left-[8%]', delay: '2s', size: 'text-2xl' },
  { emoji: '🦴', className: 'top-[40%] right-[3%]', delay: '0.3s', size: 'text-3xl' },
  { emoji: '🐟', className: 'bottom-[40%] left-[3%]', delay: '0.8s', size: 'text-3xl' },
  { emoji: '🧶', className: 'top-[60%] right-[10%]', delay: '1.2s', size: 'text-4xl' },
  { emoji: '🥜', className: 'top-[75%] left-[6%]', delay: '0.6s', size: 'text-2xl' },
  { emoji: '🦷', className: 'bottom-[15%] right-[12%]', delay: '1.8s', size: 'text-2xl' },
  { emoji: '🎾', className: 'top-[50%] left-[2%]', delay: '2.2s', size: 'text-3xl' },
  { emoji: '🐁', className: 'bottom-[50%] right-[2%]', delay: '0.9s', size: 'text-2xl' },
]

export function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {decorations.map((item, i) => (
        <div
          key={i}
          className={cn(
            'absolute opacity-15 animate-float select-none',
            item.className,
            item.size
          )}
          style={{ animationDelay: item.delay }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  )
}
