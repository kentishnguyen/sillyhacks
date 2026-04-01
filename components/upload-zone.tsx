'use client'

import { useCallback, useState } from 'react'
import { cn } from '@/lib/utils'
import { Upload, Camera, Sparkles } from 'lucide-react'

interface UploadZoneProps {
  onImageSelect: (file: File) => void
  isLoading?: boolean
  className?: string
}

export function UploadZone({ onImageSelect, isLoading, className }: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file)
    }
  }, [onImageSelect])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      onImageSelect(file)
    }
  }, [onImageSelect])

  return (
    <div
      className={cn(
        'relative group cursor-pointer transition-all duration-300',
        className
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <label 
        className={cn(
          'flex flex-col items-center justify-center w-full h-64 md:h-80',
          'bg-card rounded-3xl border-4 border-dashed transition-all duration-300',
          'cartoon-shadow hover:scale-[1.02]',
          isDragging 
            ? 'border-primary bg-primary/10 scale-[1.02]' 
            : 'border-foreground/20 hover:border-primary/50',
          isLoading && 'opacity-50 pointer-events-none'
        )}
      >
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileInput}
          disabled={isLoading}
        />
        
        <div className={cn(
          'flex flex-col items-center gap-4 p-6 text-center',
          isDragging && 'animate-bounce-gentle'
        )}>
          {/* Fun animated icons */}
          <div className="relative">
            <div className={cn(
              'w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center',
              'bg-gradient-to-br from-cartoon-yellow to-cartoon-orange',
              'cartoon-shadow transition-transform duration-300 group-hover:animate-wiggle'
            )}>
              <Upload className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
            </div>
            
            {/* Floating sparkles */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-cartoon-pink animate-float" />
            <Camera className="absolute -bottom-1 -left-3 w-5 h-5 text-cartoon-blue animate-float" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div>
            <p className="text-xl md:text-2xl font-bold text-foreground mb-1">
              {isDragging ? 'Drop it like it\'s hot!' : 'Drop your pet photo here!'}
            </p>
            <p className="text-muted-foreground">
              or click to browse your gallery
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {['Dogs', 'Cats', 'Hamsters', 'Fish', 'Birds', '???'].map((pet) => (
              <span 
                key={pet}
                className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-secondary-foreground font-medium"
              >
                {pet}
              </span>
            ))}
          </div>
        </div>
      </label>
    </div>
  )
}
