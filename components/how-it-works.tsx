'use client'

import { Upload, Cpu, MessageCircle, PartyPopper } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload a Photo',
    description: 'Snap a pic of your pet looking majestic, derpy, or anywhere in between.',
    color: 'bg-cartoon-yellow',
  },
  {
    icon: Cpu,
    title: 'AI Does Its Magic',
    description: 'Our totally serious brain-scanning AI analyzes your pet\'s expression.',
    color: 'bg-cartoon-pink',
  },
  {
    icon: MessageCircle,
    title: 'Thoughts Revealed',
    description: 'Discover what existential crisis or snack craving your pet is having.',
    color: 'bg-cartoon-blue',
  },
  {
    icon: PartyPopper,
    title: 'Share the Laughs',
    description: 'Screenshot and share with friends who also need to know what pets think.',
    color: 'bg-cartoon-green',
  },
]

export function HowItWorks() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        How It Works
        <span className="block text-sm font-normal text-muted-foreground mt-2">
          (Spoiler: It&apos;s extremely scientific)
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative bg-card rounded-2xl p-6 border-2 border-foreground/10 cartoon-shadow"
          >
            {/* Step number */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-bold text-sm">
              {index + 1}
            </div>

            {/* Icon */}
            <div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center mb-4`}>
              <step.icon className="w-7 h-7 text-foreground" />
            </div>

            {/* Content */}
            <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
