'use client'

import { useState, useCallback } from 'react'
import { UploadZone } from '@/components/upload-zone'
import { PetCard } from '@/components/pet-card'
import { FloatingDecorations } from '@/components/floating-decorations'
import { SillyStats } from '@/components/silly-stats'
import { HowItWorks } from '@/components/how-it-works'
import { RecentExamples } from '@/components/recent-examples'
import { CartoonCat, CartoonDog, CartoonBird, CartoonMouse } from '@/components/cartoon-characters'
import { FakeHeader } from '@/components/fake-header'
import { FakeFooter } from '@/components/fake-footer'
import { Sparkles, Brain, Zap } from 'lucide-react'

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [imageBase64, setImageBase64] = useState<string | null>(null)
  const [mimeType, setMimeType] = useState<string>('image/jpeg')
  const [thought, setThought] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const readPetMind = useCallback(async (base64: string, mime: string) => {
    setIsLoading(true)
    setThought(null)

    try {
      const response = await fetch('/api/read-mind', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: base64, mimeType: mime }),
      })

      if (!response.ok) {
        throw new Error('Failed to read pet mind')
      }

      const data = await response.json()
      setThought(data.thought || "The human thinks I'm cute. Little do they know, I'm plotting my next nap location.")
    } catch (error) {
      console.error('Error reading pet mind:', error)
      setThought("I was thinking very hard about treats, but the thought got away. Try again?")
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleImageSelect = useCallback(async (file: File) => {
    const url = URL.createObjectURL(file)
    setImageUrl(url)
    setMimeType(file.type)

    const reader = new FileReader()
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(',')[1]
      setImageBase64(base64)
      await readPetMind(base64, file.type)
    }
    reader.readAsDataURL(file)
  }, [readPetMind])

  const handleRetry = useCallback(() => {
    if (imageBase64) {
      readPetMind(imageBase64, mimeType)
    }
  }, [imageBase64, mimeType, readPetMind])

  const handleClear = useCallback(() => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl)
    }
    setImageUrl(null)
    setImageBase64(null)
    setThought(null)
  }, [imageUrl])

  return (
    <>
      <FakeHeader />
      <main className="min-h-screen relative overflow-hidden pt-20">
        <FloatingDecorations />

      {/* Fun background pattern */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12">
        {/* Header with cartoon characters */}
        <header className="text-center mb-10 md:mb-16 relative">
          {/* Floating cartoon characters around header */}
          <div className="hidden lg:block absolute -left-4 top-0 animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>
            <CartoonCat className="w-20 h-20 -rotate-12" />
          </div>
          <div className="hidden lg:block absolute -right-4 top-8 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
            <CartoonDog className="w-20 h-20 rotate-12" />
          </div>
          <div className="hidden md:block absolute left-12 bottom-0 animate-bounce-gentle" style={{ animationDelay: '0.8s' }}>
            <CartoonMouse className="w-14 h-14" />
          </div>
          <div className="hidden md:block absolute right-12 bottom-4 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
            <CartoonBird className="w-14 h-14" />
          </div>

          {/* Logo/Title area */}
          <div className="inline-block relative mb-6">
            <div className="absolute -inset-4 bg-gradient-to-r from-cartoon-yellow via-cartoon-pink to-cartoon-blue rounded-full blur-2xl opacity-30 animate-pulse" />
            <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="inline-block animate-bounce-gentle" style={{ animationDelay: '0s' }}>Pet</span>{' '}
              <span className="inline-block animate-bounce-gentle text-primary" style={{ animationDelay: '0.1s' }}>Mind</span>{' '}
              <span className="inline-block animate-bounce-gentle" style={{ animationDelay: '0.2s' }}>Reader</span>
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            Ever wondered what your furry (or scaly, or feathery) friend is{' '}
            <span className="text-primary font-bold">REALLY</span> thinking?
            <br className="hidden md:block" />
            Our totally real, definitely not silly AI will reveal their deepest thoughts!
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border-2 border-foreground/10 cartoon-shadow">
              <Brain className="w-5 h-5 text-cartoon-pink" />
              <span className="text-sm font-medium">100% Accurate*</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border-2 border-foreground/10 cartoon-shadow">
              <Zap className="w-5 h-5 text-cartoon-yellow" />
              <span className="text-sm font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border-2 border-foreground/10 cartoon-shadow">
              <Sparkles className="w-5 h-5 text-cartoon-blue" />
              <span className="text-sm font-medium">AI Powered</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground/60 mt-3">
            *Accuracy may vary. Results are for entertainment purposes only. Your pet&apos;s actual thoughts may be more or less chaotic.
          </p>
        </header>

        {/* Silly Stats */}
        <SillyStats />

        {/* Main content area */}
        <section className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-foreground">
            Try It Now!
          </h2>
          <div className="max-w-2xl mx-auto">
            {!imageUrl ? (
              <UploadZone
                onImageSelect={handleImageSelect}
                isLoading={isLoading}
              />
            ) : (
              <PetCard
                imageUrl={imageUrl}
                thought={thought}
                isLoading={isLoading}
                onRetry={handleRetry}
                onClear={handleClear}
              />
            )}
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />

        {/* Recent Examples */}
        <RecentExamples />

        </div>
      </main>
      <FakeFooter />
    </>
  )
}
