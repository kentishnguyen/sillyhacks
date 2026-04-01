'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ThoughtBubble } from './thought-bubble'
import { Button } from '@/components/ui/button'
import { RefreshCw, X } from 'lucide-react'

interface PetCardProps {
  imageUrl: string
  thought: string | null
  isLoading: boolean
  onRetry: () => void
  onClear: () => void
  className?: string
}

export function PetCard({ 
  imageUrl, 
  thought, 
  isLoading, 
  onRetry, 
  onClear,
  className 
}: PetCardProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Thought bubble - positioned above/beside the image */}
      {(thought || isLoading) && (
        <div className="mb-6 md:mb-8">
          <ThoughtBubble 
            thought={thought || ''} 
            isLoading={isLoading} 
          />
        </div>
      )}
      
      {/* Pet image with cartoon frame */}
      <div className="relative group">
        <div className="relative rounded-3xl overflow-hidden border-4 border-foreground/20 cartoon-shadow-lg animate-pop-in">
          {/* Decorative corner elements */}
          <div className="absolute top-3 left-3 w-6 h-6 bg-cartoon-yellow rounded-full opacity-60 z-10" />
          <div className="absolute top-3 right-3 w-4 h-4 bg-cartoon-pink rounded-full opacity-60 z-10" />
          <div className="absolute bottom-3 left-3 w-4 h-4 bg-cartoon-blue rounded-full opacity-60 z-10" />
          <div className="absolute bottom-3 right-3 w-5 h-5 bg-cartoon-green rounded-full opacity-60 z-10" />
          
          <Image
            src={imageUrl}
            alt="Your adorable pet"
            width={600}
            height={600}
            className="w-full h-auto max-h-[500px] object-cover"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3 mt-4 justify-center">
          <Button
            onClick={onRetry}
            disabled={isLoading}
            className="cartoon-shadow bg-cartoon-blue hover:bg-cartoon-blue/90 text-foreground font-bold px-6"
            size="lg"
          >
            <RefreshCw className={cn('w-5 h-5 mr-2', isLoading && 'animate-spin')} />
            {isLoading ? 'Reading...' : 'Read Again!'}
          </Button>
          
          <Button
            onClick={onClear}
            variant="outline"
            className="cartoon-shadow border-2 border-foreground/20 font-bold px-6"
            size="lg"
          >
            <X className="w-5 h-5 mr-2" />
            New Pet
          </Button>
        </div>
      </div>
    </div>
  )
}
