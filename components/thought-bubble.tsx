'use client'

import { cn } from '@/lib/utils'

interface ThoughtBubbleProps {
  thought: string
  isLoading?: boolean
  className?: string
}

export function ThoughtBubble({ thought, isLoading, className }: ThoughtBubbleProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Thought bubble dots */}
      <div className="thought-dot w-4 h-4 -bottom-6 left-8 animate-pop-in" style={{ animationDelay: '0ms' }} />
      <div className="thought-dot w-6 h-6 -bottom-14 left-4 animate-pop-in" style={{ animationDelay: '100ms' }} />
      <div className="thought-dot w-8 h-8 -bottom-24 left-0 animate-pop-in" style={{ animationDelay: '200ms' }} />
      
      {/* Main bubble */}
      <div 
        className="relative bg-card rounded-[2rem] p-6 md:p-8 border-4 border-foreground/20 cartoon-shadow-lg animate-thought-bubble"
        style={{ animationDelay: '300ms' }}
      >
        {/* Bubble shine effect */}
        <div className="absolute top-4 left-6 w-8 h-4 bg-foreground/5 rounded-full transform -rotate-12" />
        
        {isLoading ? (
          <div className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-medium text-foreground/80">
              Reading mind
            </span>
            <span className="flex gap-1">
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </div>
        ) : (
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed">
            {`"${thought}"`}
          </p>
        )}
      </div>
    </div>
  )
}
