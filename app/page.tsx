"use client"

import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Upload,
  Sparkles,
  Send,
  Zap,
  TrendingUp,
  Cpu,
  Palette,
  Layers,
  Code,
  Rocket,
  Heart,
  Lightbulb,
  Compass,
  Music,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const DEMO_ICONS = [Zap, TrendingUp, Cpu, Palette, Layers, Sparkles, Code, Rocket, Heart, Lightbulb, Compass, Music]

export default function Home() {
  const [shuffledIcons, setShuffledIcons] = useState(DEMO_ICONS)

  useEffect(() => {
    setShuffledIcons([...DEMO_ICONS].sort(() => Math.random() - 0.5))
  }, [])

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <div className="text-2xl font-bold text-primary">PopShorts</div>
        <div className="flex gap-4">
          <Link href="/features">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Features
            </Button>
          </Link>
          <Link href="/create">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-foreground">
          Turn One Podcast into 10 Viral YouTube Shorts — Automatically.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
          PopShorts uses AI to find the best moments, add subtitles, and publish YouTube Shorts that grow your channel.
        </p>
        <Link href="/create">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            Create Shorts Now
          </Button>
        </Link>
      </section>

      {/* Demo Video Section */}
      <section className="px-6 py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 relative">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="PopShorts Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            {/* Top-left icons */}
            <div className="absolute -top-6 -left-4 flex flex-col gap-4">
              {shuffledIcons.slice(0, 2).map((IconComponent, i) => (
                <div
                  key={`tl-${i}`}
                  className="bg-red-500 text-white rounded-full p-3 animate-bounce shadow-lg"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* Top-right icons */}
            <div className="absolute -top-8 -right-2 flex gap-2">
              {shuffledIcons.slice(2, 4).map((IconComponent, i) => (
                <div
                  key={`tr-${i}`}
                  className="bg-blue-500 text-white rounded-lg p-3 animate-pulse shadow-lg"
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* Bottom-left icons */}
            <div className="absolute -bottom-10 -left-6 flex gap-3">
              {shuffledIcons.slice(4, 6).map((IconComponent, i) => (
                <div
                  key={`bl-${i}`}
                  className="bg-purple-500 text-white rounded-full p-3 animate-bounce shadow-lg"
                  style={{ animationDelay: `${(i + 2) * 0.2}s` }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              ))}
            </div>

            {/* Bottom-right icons */}
            <div className="absolute -bottom-6 -right-4 flex flex-col gap-3">
              {shuffledIcons.slice(6, 8).map((IconComponent, i) => (
                <div
                  key={`br-${i}`}
                  className="bg-green-500 text-white rounded-lg p-3 animate-pulse shadow-lg"
                  style={{ animationDelay: `${i * 0.18}s` }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground mb-4">
            Watch how PopShorts transforms your long-form content into viral shorts in minutes.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Upload className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Upload Your Video</h3>
              <p className="text-muted-foreground">Upload your YouTube podcast or long-form content.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Sparkles className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">AI Finds Viral Moments</h3>
              <p className="text-muted-foreground">
                PopShorts analyzes the conversation and selects the most engaging moments.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary text-primary-foreground rounded-full p-4">
                  <Send className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Shorts Go Live</h3>
              <p className="text-muted-foreground">
                AI creates Shorts with subtitles, SEO titles, and auto-publishes them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PopShorts */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why PopShorts</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">AI-powered viral moment detection</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Automatic subtitles &amp; formatting</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">SEO-optimized titles &amp; hashtags</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Optional auto-upload to YouTube</h3>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground">Save hours of manual editing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Simple Pricing for Every Creator</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="rounded-lg border border-border bg-background p-8 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Basic</h3>
              <p className="text-muted-foreground mb-6 text-sm">For solo podcasters getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$12</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <Button className="w-full mb-8 bg-muted text-foreground hover:bg-muted/80">
                Get Started
              </Button>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Up to 40 podcast shorts/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Upload up to 120 minutes of video</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">AI-powered podcast highlight detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto subtitles (burned-in)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto upload to Shorts, Reels & TikTok</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Standard processing speed</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">7-day content history</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Email support</span>
                </div>
              </div>
            </div>

            {/* Pro Plan (Featured) */}
            <div className="rounded-lg border border-primary bg-primary/5 scale-105 shadow-lg transition-all p-8">
              <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Pro</h3>
              <p className="text-muted-foreground mb-6 text-sm">For creators posting consistently</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$29</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <Button className="w-full mb-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Start Free
              </Button>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Up to 150 podcast shorts/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Upload up to 360 minutes of video</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Advanced viral moment detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto subtitles + caption styles</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Background music addition</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto upload + scheduling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Custom aspect ratios</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">30-day content history</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Priority processing</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Priority support</span>
                </div>
              </div>
            </div>

            {/* Business Plan */}
            <div className="rounded-lg border border-border bg-background p-8 hover:border-primary/50 transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-2">Business</h3>
              <p className="text-muted-foreground mb-6 text-sm">For brands & agencies</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">$59</span>
                <span className="text-muted-foreground ml-2">/month</span>
              </div>
              <Button className="w-full mb-8 bg-muted text-foreground hover:bg-muted/80">
                Contact Us
              </Button>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Up to 400 podcast shorts/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Upload up to 900 minutes of video</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Premium AI highlight detection</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto subtitles + branded captions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Background music library</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Brand templates (fonts, colors, layouts)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto B-roll insertion</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Auto upload + team scheduling</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Multi-brand workspaces</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">60-day content history</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">Dedicated support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="px-6 py-20 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your YouTube channel?</h2>
        <Link href="/create">
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg">
            Start Creating Shorts
          </Button>
        </Link>
      </section>
    </main>
  )
}
