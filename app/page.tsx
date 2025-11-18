import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-400">LegalWork.AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              LegalWork.AI is a cutting-edge legal text summarization and analysis platform designed to help legal professionals, researchers, and students efficiently process complex legal documents. Our advanced AI models are optimized for clarity, precision, and citation preservation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/models"
              className="premium-button text-center text-primary-foreground"
            >
              Explore Models
            </Link>
            <Link
              href="/summarize"
              className="premium-button text-center text-primary-foreground"
            >
              Summarize Now
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent/20 transition-all text-center border border-border/50"
            >
              Learn About Us
            </Link>
          </div>

          {/* Feature Overview */}
          <div className="grid md:grid-cols-3 gap-6 pt-16">
            <div className="premium-card p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Advanced Summarization</h3>
              <p className="text-muted-foreground leading-relaxed">Intelligently summarize legal documents while preserving critical citations and context.</p>
            </div>
            <div className="premium-card p-8">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Long Document Support</h3>
              <p className="text-muted-foreground leading-relaxed">Handle extremely long documents like contracts, bills, and judgments with ease.</p>
            </div>
            <div className="premium-card p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Legal Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">Models fine-tuned specifically for legal text analysis and reasoning.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
