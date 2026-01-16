import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
  const team = [
    {
      name: "Sarah Chen",
      role: "Co-founder & CEO",
      description: "Former YouTube strategist with 10+ years of creator experience",
    },
    {
      name: "Marcus Rodriguez",
      role: "Co-founder & CTO",
      description: "AI/ML engineer from leading video tech companies",
    },
    {
      name: "Emily Watson",
      role: "Head of Product",
      description: "Product leader passionate about creator tools and automation",
    },
    {
      name: "James Park",
      role: "Head of Design",
      description: "Design leader focused on intuitive creator experiences",
    },
  ]

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
          About PopShorts
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-balance">
          Built by creators, for creators. Our mission is to empower content creators with AI-powered tools that save
          time and grow channels.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                PopShorts exists to democratize content creation. We believe creators shouldn't spend hours editing—they
                should spend time creating and growing their audience.
              </p>
              <p className="text-muted-foreground">
                By combining cutting-edge AI with intuitive design, we've built a tool that transforms the video
                creation process from tedious to delightful.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground mb-4">
                We envision a world where every creator, regardless of technical skill, can produce professional-quality
                content at scale.
              </p>
              <p className="text-muted-foreground">
                PopShorts is just the beginning. We're building a complete ecosystem of AI-powered tools to help
                creators thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Active creators using PopShorts</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10M+</div>
            <p className="text-muted-foreground">Shorts created and published</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5B+</div>
            <p className="text-muted-foreground">Total views generated</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div key={i} className="border border-border rounded-lg p-6 bg-background">
                <div className="w-16 h-16 bg-primary rounded-full mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Creator-First",
                description: "We build with creators, not for them. Your feedback shapes our product.",
              },
              {
                title: "Innovation",
                description: "We stay on the cutting edge of AI and video technology to give you the best tools.",
              },
              {
                title: "Transparency",
                description: "We believe in honest pricing, transparent algorithms, and clear communication.",
              },
              {
                title: "Reliability",
                description: "Your content is important. We guarantee 99.9% uptime and instant support.",
              },
            ].map((value, i) => (
              <div key={i}>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have questions? We'd love to hear from you.</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg">
            hello@popshorts.io
          </Button>
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary/20 px-8 py-6 text-lg bg-transparent"
          >
            Schedule a Demo
          </Button>
        </div>
      </section>
    </main>
  )
}
