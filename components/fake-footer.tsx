import { CartoonCat, CartoonDog, CartoonBird, CartoonFish, CartoonMouse } from "./cartoon-characters"

const funnyLinks = {
  // Rickrolls
  rickroll: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  
  // Classic animal videos
  keyboardCat: "https://www.youtube.com/watch?v=J---aiyznGQ",
  nyanCat: "https://www.youtube.com/watch?v=QH2-TGUlwu4",
  dramaticChipmunk: "https://www.youtube.com/watch?v=jX3iLfcMDCw",
  sneezeingPanda: "https://www.youtube.com/watch?v=93hq0YU3Gqk",
  catVibing: "https://www.youtube.com/watch?v=2btR9rAcdzo",
  doggoMeme: "https://www.youtube.com/watch?v=Awf45u6zrP0",
  cuteKittens: "https://www.youtube.com/watch?v=0Bmhjf0rKe8",
  sillyDog: "https://www.youtube.com/watch?v=B8ISzf2pryI",
  hamsterWheel: "https://www.youtube.com/watch?v=1qN72LEQnaU",
  parrotDancing: "https://www.youtube.com/watch?v=uguXNL93fWg",
  catJump: "https://www.youtube.com/watch?v=Veg63B8ofnQ",
}

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", url: funnyLinks.nyanCat },
      { label: "Pricing", url: funnyLinks.rickroll },
      { label: "Enterprise", url: funnyLinks.rickroll },
      { label: "API Access", url: funnyLinks.keyboardCat },
      { label: "Integrations", url: funnyLinks.rickroll },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", url: funnyLinks.rickroll },
      { label: "Our Team", url: funnyLinks.catVibing },
      { label: "Careers", url: funnyLinks.hamsterWheel },
      { label: "Press Kit", url: funnyLinks.rickroll },
      { label: "Contact", url: funnyLinks.dramaticChipmunk },
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", url: funnyLinks.rickroll },
      { label: "Blog", url: funnyLinks.cuteKittens },
      { label: "Help Center", url: funnyLinks.sneezeingPanda },
      { label: "Community", url: funnyLinks.rickroll },
      { label: "Tutorials", url: funnyLinks.parrotDancing },
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", url: funnyLinks.rickroll },
      { label: "Terms of Service", url: funnyLinks.rickroll },
      { label: "Cookie Policy", url: funnyLinks.rickroll },
      { label: "GDPR", url: funnyLinks.rickroll },
      { label: "Pet Data Rights", url: funnyLinks.catJump },
    ]
  },
]

export function FakeFooter() {
  return (
    <footer className="bg-foreground text-card mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <CartoonCat className="w-8 h-8 opacity-90" />
              </div>
              <span className="font-heading text-xl text-card">
                PetMind<span className="text-cartoon-pink">AI</span>
              </span>
            </div>
            <p className="text-card/70 text-sm mb-4">
              Reading pet minds since April 1st, 2026. Definitely not a joke.
            </p>
            <div className="flex gap-3">
              <CartoonDog className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <CartoonBird className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <CartoonFish className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <CartoonMouse className="w-6 h-6 opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-card mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-card/70 hover:text-cartoon-yellow transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-card/20 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-heading text-lg mb-2">Subscribe to our newsletter</h3>
            <p className="text-card/70 text-sm mb-4">Get weekly pet thoughts delivered to your inbox. No spam, just paws.</p>
            <form 
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                window.open(funnyLinks.rickroll, "_blank")
              }}
            >
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full bg-card/10 border border-card/20 text-card placeholder:text-card/50 focus:outline-none focus:border-cartoon-yellow"
              />
              <button 
                type="submit"
                className="bg-cartoon-yellow text-foreground px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-sm">
            © 2026 PetMindAI Inc. All rights reserved. Happy April Fools!
          </p>
          <div className="flex items-center gap-4 text-sm text-card/50">
            <a href={funnyLinks.rickroll} target="_blank" rel="noopener noreferrer" className="hover:text-cartoon-yellow transition-colors">
              Status
            </a>
            <span>•</span>
            <a href={funnyLinks.sillyDog} target="_blank" rel="noopener noreferrer" className="hover:text-cartoon-yellow transition-colors">
              Security
            </a>
            <span>•</span>
            <a href={funnyLinks.rickroll} target="_blank" rel="noopener noreferrer" className="hover:text-cartoon-yellow transition-colors">
              Sitemap
            </a>
          </div>
        </div>

        {/* Easter egg */}
        <p className="text-center text-card/30 text-xs mt-8">
          🐱 If you clicked any link expecting real content... gotcha! 🐶
        </p>
      </div>
    </footer>
  )
}
