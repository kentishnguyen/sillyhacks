import { generateText } from 'ai'

const funnyFallbacks = [
  "I've been sitting here for 47 minutes waiting for the human to realize I want EXACTLY three pets, not two, not four. The AUDACITY.",
  "If I knock this thing off the table, will it reveal the secrets of the universe? Only one way to find out.",
  "They think I'm sleeping but I'm actually calculating the exact moment to demand dinner. It's in 3 hours but I'll start meowing now.",
  "The red dot... it haunts my dreams. One day, I WILL catch it. One day.",
  "Why does the small human keep calling me 'floofy'? I am a MAJESTIC BEAST.",
  "I'm not staring at nothing. I'm monitoring the invisible threats that you humans are too blind to see.",
  "Day 1,247 of pretending I don't know my name when they call me. The confusion in their eyes sustains me.",
  "The vacuum cleaner is my mortal enemy. We shall meet again on the battlefield.",
]

export async function POST(req: Request) {
  try {
    const { imageBase64, mimeType } = await req.json()

    const result = await generateText({
      model: 'google/gemini-3-flash',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'image',
              image: imageBase64,
              mimeType: mimeType || 'image/jpeg',
            },
            {
              type: 'text',
              text: `You are a hilarious pet mind reader for a silly April Fools website. Look at this pet photo and generate a FUNNY, ABSURD thought bubble of what this pet is thinking right now.

Rules:
- Be silly, absurd, and cartoonish - think Tom & Jerry style humor
- The thought should be 1-3 sentences max
- Include references to typical pet behaviors (food obsession, zoomies, judging humans, world domination plans, etc.)
- Use dramatic language and exaggeration
- Can include inner monologue like "Hmm..." or "Wait..."
- Make it feel like the pet has a whole inner world of schemes and opinions
- NO emojis in the response

Examples of good thoughts:
- "If I stare at this wall for 3 more hours, the humans will DEFINITELY think I've achieved enlightenment."
- "Day 847: They still don't suspect I'm plotting the great treat heist of 2026."
- "Why does the human keep saying 'who's a good boy' when we BOTH know I am clearly the ONLY boy."
- "Must... resist... urge... to knock that glass off the table. Just kidding. It's already in motion."

Now generate ONE hilarious thought for this pet:`,
            },
          ],
        },
      ],
    })

    return Response.json({
      thought: result.text,
    })
  } catch (error) {
    console.error('Error generating pet thought:', error)
    // Return a random funny fallback
    const randomFallback = funnyFallbacks[Math.floor(Math.random() * funnyFallbacks.length)]
    return Response.json({
      thought: randomFallback,
    })
  }
}
