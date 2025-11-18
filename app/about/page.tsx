export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Anurag Gaikwad',
      role: 'Project Lead, ML Engineer',
    },
    {
      name: 'Akshat Gupta',
      role: 'UI/UX and Frontend',
    },
    {
      name: 'Ishwari Kapse',
      role: 'Research and Documentation',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* About Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About LegalWork.AI</h1>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              LegalWork.AI is an advanced legal technology platform dedicated to transforming how legal professionals, researchers, and students interact with complex legal documents. Our mission is to provide state-of-the-art AI models for legal text summarization and analysis.
            </p>
            <p>
              We leverage cutting-edge machine learning techniques to create specialized models that understand the nuances of legal language, preserve critical citations, and maintain contextual dependencies across extremely long documents. Whether you're working with contracts, legislation, or court judgments, LegalWork.AI provides the tools you need for efficient and accurate legal analysis.
            </p>
            <p>
              Our team is committed to pushing the boundaries of what's possible in legal AI, combining expertise in machine learning, UI/UX design, and legal research to create a platform that serves the needs of modern legal professionals.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Team</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
