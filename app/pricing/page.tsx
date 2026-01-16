import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "For solo podcasters getting started",
      price: "$12",
      period: "/month",
      cta: "Get Started",
      features: [
        "Upload up to 120 minutes of video",
        "AI-powered podcast highlight detection",
        "Auto subtitles (burned-in)",
        "Auto upload to Youtube",
        "Standard processing speed",
        "7-day content history",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      description: "For creators posting consistently",
      price: "$29",
      period: "/month",
      cta: "Start Free",
      features: [
        "Upload up to 360 minutes of video",
        "Advanced viral moment detection",
        "Auto subtitles + caption styles",
        "Background music addition",
        "Auto upload + scheduling",
        "Custom aspect ratios",
        "30-day content history",
        "Priority processing",
      ],
      highlighted: true,
    },
    {
      name: "Business",
      description: "For brands & agencies",
      price: "$59",
      period: "/month",
      cta: "Contact Us",
      features: [
        "Upload up to 900 minutes of video",
        "Premium AI highlight detection",
        "Auto subtitles + branded captions",
        "Background music library",
        "Brand templates (fonts, colors, layouts)",
        "Auto B-roll insertion",
        "Auto upload + team scheduling",
        "Multi-brand workspaces",
        "60-day content history",
        "Dedicated support",
      ],
      highlighted: false,
    },
  ];


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
          Simple, Transparent Pricing
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance">
          Choose the perfect plan for your YouTube channel. Start free, upgrade whenever you're ready.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg border transition-all ${plan.highlighted
                ? "border-primary bg-primary/5 scale-105 shadow-lg"
                : "border-border bg-background hover:border-primary/50"
                } p-8`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              <Button
                className={`w-full mb-8 ${plan.highlighted
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes, all plans come with a 14-day free trial. No credit card required to start.",
              },
              {
                q: "Can I upgrade or downgrade anytime?",
                a: "Absolutely. You can change your plan at any time, and we'll prorate your billing accordingly.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to grow your channel?</h2>
        <Link href="/create">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg">
            Start Free Trial
          </Button>
        </Link>
      </section>
    </main>
  )
}
