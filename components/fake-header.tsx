"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { CartoonCat, CartoonDog } from "./cartoon-characters"

const funnyLinks = {
  about: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll
  team: "https://www.youtube.com/watch?v=J---aiyznGQ", // keyboard cat
  careers: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll
  pricing: "https://www.youtube.com/watch?v=QH2-TGUlwu4", // nyan cat
  enterprise: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll
  blog: "https://www.youtube.com/watch?v=jX3iLfcMDCw", // dramatic chipmunk
  docs: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll
  support: "https://www.youtube.com/watch?v=Awf45u6zrP0", // dramatic dog
  contact: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll
  login: "https://www.youtube.com/watch?v=2btR9rAcdzo", // cat vibing
  signup: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // rickroll
}

export function FakeHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b-4 border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <CartoonCat className="w-10 h-10 group-hover:animate-bounce" />
              <CartoonDog className="w-6 h-6 absolute -bottom-1 -right-2 group-hover:animate-bounce" />
            </div>
            <span className="font-heading text-xl md:text-2xl text-foreground">
              PetMind<span className="text-cartoon-pink">AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a 
              href={funnyLinks.about} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About Us
            </a>
            <a 
              href={funnyLinks.pricing} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Pricing
            </a>
            <a 
              href={funnyLinks.blog} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Blog
            </a>
            <a 
              href={funnyLinks.docs} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Docs
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href={funnyLinks.login} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Log In
            </a>
            <a 
              href={funnyLinks.signup} 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cartoon-yellow text-foreground px-4 py-2 rounded-full font-bold border-3 border-foreground/20 hover:scale-105 transition-transform shadow-cartoon"
            >
              Sign Up Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3 animate-bounce-in">
            <a href={funnyLinks.about} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground py-2">About Us</a>
            <a href={funnyLinks.pricing} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground py-2">Pricing</a>
            <a href={funnyLinks.blog} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground py-2">Blog</a>
            <a href={funnyLinks.docs} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground py-2">Docs</a>
            <hr className="border-foreground/10" />
            <a href={funnyLinks.login} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground py-2">Log In</a>
            <a href={funnyLinks.signup} target="_blank" rel="noopener noreferrer" className="bg-cartoon-yellow text-foreground px-4 py-2 rounded-full font-bold text-center">Sign Up Free</a>
          </nav>
        )}
      </div>
    </header>
  )
}
