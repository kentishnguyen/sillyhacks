import { generateText } from 'ai'

export async function POST(req: Request) {
  const formData = await req.formData()
  const image = formData.get('image') as File
  
  if (!image) {
    return Response.json({ error: 'No image provided' }, { status: 400 })
  }

  const bytes = await image.arrayBuffer()
  const base64 = Buffer.from(bytes).toString('base64')
  const mimeType = image.type || 'image/jpeg'

  const result = await generateText({
    model: 'openai/gpt-4o',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'image',
            image: `data:${mimeType};base64,${base64}`,
          },
          {
            type: 'text',
            text: `You are a hilarious pet mind reader! Look at this pet photo and tell me exactly what this animal is thinking RIGHT NOW. 

Rules:
- Be FUNNY and creative - the more absurd the better!
- Write in first person as if YOU are the pet
- Keep it to 2-3 short, punchy sentences
- Include their "secret thoughts" about treats, naps, world domination, judging humans, etc.
- If you see a dog, they might be thinking about food, walks, or their favorite human
- If you see a cat, they're probably plotting something or judging everyone
- Any other pet - get creative with their personality!
- Use casual, playful language
- NO emojis in the response

Example format:
"I've been waiting for my treat for exactly 47 seconds. This is a war crime. I will remember this betrayal."

Now read this pet's mind!`,
          },
        ],
      },
    ],
  })

  return Response.json({
    thought: result.text,
  })
}
