'use client'

import { Brain, Sparkles, Users, Clock } from 'lucide-react'

const stats = [
  {
    icon: Brain,
    value: '10,847',
    label: 'Pet Minds Read',
    color: 'text-cartoon-pink',
  },
  {
    icon: Sparkles,
    value: '99.7%',
    label: 'Accuracy Rate*',
    color: 'text-cartoon-yellow',
  },
  {
    icon: Users,
    value: '4,231',
    label: 'Happy Pet Parents',
    color: 'text-cartoon-blue',
  },
  {
    icon: Clock,
    value: '0.3s',
    label: 'Avg. Mind Read Time',
    color: 'text-cartoon-green',
  },
]

export function SillyStats() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card rounded-2xl p-4 md:p-6 text-center border-2 border-foreground/10 cartoon-shadow hover:scale-105 transition-transform"
          >
            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
            <div className="text-2xl md:text-3xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground/50 mt-4">
        *Based on our very scientific survey of asking pets if we got it right. They all said &quot;meow&quot; or &quot;woof&quot; which we interpreted as yes.
      </p>
    </section>
  )
}
