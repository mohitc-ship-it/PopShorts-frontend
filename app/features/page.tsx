import { Button } from "@/components/ui/button"
import { CheckCircle2, Brain, Zap, Layers, Wand2, BarChart3, Lock } from "lucide-react"
import Link from "next/link"

export default function Features() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border">
        <Link href="/">
          <div className="text-2xl font-bold text-primary cursor-pointer">PopShorts</div>
        </Link>
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

      {/* Header */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6 text-foreground">
          Powerful Features Built for Creators
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance">
          Everything you need to transform your long-form content into viral shorts.
        </p>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg p-3">
                <Brain className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">AI Moment Detection</h3>
              <p className="text-muted-foreground">
                Our advanced AI analyzes your content and automatically identifies the most engaging and viral moments,
                so you don't have to watch hours of footage.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg p-3">
                <Wand2 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Auto Subtitles &amp; Captions</h3>
              <p className="text-muted-foreground">
                Automatic subtitles are generated and styled perfectly for YouTube Shorts. No more manual captioning.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg p-3">
                <Zap className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">One-Click Publishing</h3>
              <p className="text-muted-foreground">
                Publish directly to YouTube with optimized titles, descriptions, and hashtags that help your shorts rank
                higher.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg p-3">
                <Layers className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Customizable Editing</h3>
              <p className="text-muted-foreground">
                Review and edit before publishing. Customize transitions, colors, fonts, and add your branding to each
                short.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg p-3">
                <BarChart3 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Performance Analytics</h3>
              <p className="text-muted-foreground">
                Track views, engagement, and click-through rates for all your generated shorts in one dashboard.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="bg-primary text-primary-foreground rounded-lg p-3">
                <Lock className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Privacy &amp; Security</h3>
              <p className="text-muted-foreground">
                Your content is encrypted and never shared. Complete control over what gets published and where.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose PopShorts?</h2>
          <div className="space-y-3">
            {[
              "10x faster than manual editing",
              "AI-powered moment selection",
              "Automatic SEO optimization",
              "Multi-platform publishing",
              "Real-time analytics",
              "Unlimited revisions before publishing",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to transform your content?</h2>
        <Link href="/create">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            Start Creating Shorts
          </Button>
        </Link>
      </section>
    </main>
  )
}
