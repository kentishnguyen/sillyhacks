'use client'

import { CartoonCat, CartoonDog, CartoonBird, CartoonFish, CartoonMouse } from './cartoon-characters'

const examples = [
  {
    Character: CartoonCat,
    name: 'Mr. Whiskers',
    thought: "If I knock this glass off the table, will it create a portal to the treat dimension? Only one way to find out...",
    time: '2 mins ago',
  },
  {
    Character: CartoonDog,
    name: 'Buster',
    thought: "BALL. BALL. BALL. Is that a BALL? No wait that's a lamp. BUT WHAT IF IT WAS A BALL???",
    time: '5 mins ago',
  },
  {
    Character: CartoonBird,
    name: 'Tweety',
    thought: "I've been screaming at 6 AM for weeks now. The humans still haven't learned to appreciate my morning concert.",
    time: '12 mins ago',
  },
  {
    Character: CartoonFish,
    name: 'Bubbles',
    thought: "Day 1,247 in the glass prison. The tall ones keep tapping. I pretend not to notice. I am above this.",
    time: '18 mins ago',
  },
  {
    Character: CartoonMouse,
    name: 'Nibbles',
    thought: "The cheese in the trap smells divine. But I'm no fool. I've seen what happened to Gerald. RIP Gerald.",
    time: '23 mins ago',
  },
  {
    Character: CartoonCat,
    name: 'Princess Fluffington',
    thought: "My servant brought the wrong flavor of wet food. This betrayal shall not be forgotten. Ever.",
    time: '31 mins ago',
  },
]

export function RecentExamples() {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-foreground">
        Recent Mind Readings
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        See what other pets are secretly thinking
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-5 border-2 border-foreground/10 cartoon-shadow hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-start gap-4">
              {/* Character */}
              <div className="flex-shrink-0">
                <example.Character className="w-16 h-16" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-foreground">{example.name}</span>
                  <span className="text-xs text-muted-foreground">{example.time}</span>
                </div>

                {/* Thought bubble */}
                <div className="relative bg-muted/50 rounded-xl p-3 mt-2">
                  {/* Bubble tail */}
                  <div className="absolute -left-2 top-3 w-3 h-3 bg-muted/50 rotate-45" />
                  <p className="text-sm text-foreground italic leading-relaxed">
                    &quot;{example.thought}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
